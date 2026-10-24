import { useMemo } from "react";
import { defineChart, barX } from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLog } from "d3-scale";
import { Chart } from "@tanstack/react-charts";
import { useIsMobile } from "../../hooks/useIsMobile";

export type MetricType = "compute" | "bandwidth" | "power";

export interface HardwareScaleItem {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  role: string;
  computeTflops: number;
  bandwidthGBs: number;
  powerWatts: number;
  color: string;
  displayCompute: string;
  displayBandwidth: string;
  displayPower: string;
  compactCompute: string;
  compactBandwidth: string;
  compactPower: string;
}

const SCALE_DATA: readonly HardwareScaleItem[] = [
  {
    id: "laptop",
    name: "Portátil M-Series",
    shortName: "Portátil",
    tag: "01 / PORTÁTIL ULTRACOMPACTO",
    role: "Desarrollo y prototipado local de modelos",
    computeTflops: 50,
    bandwidthGBs: 450,
    powerWatts: 70,
    color: "var(--color-mfqc-yellow)",
    displayCompute: "50 TFLOPS",
    displayBandwidth: "450 GB/s",
    displayPower: "70 W",
    compactCompute: "50 TF",
    compactBandwidth: "450 GB/s",
    compactPower: "70 W",
  },
  {
    id: "desktop",
    name: "Desktop RTX 5090",
    shortName: "RTX 5090",
    tag: "02 / DESKTOP ENTUSIASTA",
    role: "Render y modelos en un único chasis",
    computeTflops: 105,
    bandwidthGBs: 1790,
    powerWatts: 575,
    color: "var(--color-mfqc-cyan)",
    displayCompute: "105 TFLOPS",
    displayBandwidth: "1.79 TB/s",
    displayPower: "575 W",
    compactCompute: "105 TF",
    compactBandwidth: "1.8 TB/s",
    compactPower: "575 W",
  },
  {
    id: "hpc-node",
    name: "Nodo HPC 8x Acelerador",
    shortName: "Nodo HPC 8x",
    tag: "03 / NODO DE SUPERCOMPUTACIÓN",
    role: "Malla NVLink multi-acelerador y memoria HBM3e",
    computeTflops: 16000,
    bandwidthGBs: 24000,
    powerWatts: 10200,
    color: "var(--color-mfqc-pink)",
    displayCompute: "16,000 TFLOPS",
    displayBandwidth: "24 TB/s",
    displayPower: "10.2 kW",
    compactCompute: "16k TF",
    compactBandwidth: "24 TB/s",
    compactPower: "10.2 kW",
  },
  {
    id: "exascale",
    name: "El Capitan TOP500 #1",
    shortName: "El Capitan",
    tag: "04 / CLÚSTER EXASCALE",
    role: "Simulación planetaria y frontera de IA mundial",
    computeTflops: 1742000,
    bandwidthGBs: 18000000,
    powerWatts: 29500000,
    color: "var(--color-mfqc-purple)",
    displayCompute: "1,742,000 TFLOPS",
    displayBandwidth: "18 PB/s",
    displayPower: "29.5 MW",
    compactCompute: "1.7M TF",
    compactBandwidth: "18 PB/s",
    compactPower: "29.5 MW",
  },
];

const METRIC_CONFIG = {
  compute: {
    label: "Potencia de Cómputo",
    unit: "TFLOPS (Escala Logarítmica FP16/FP32/FP64)",
    compactUnit: "TFLOPS (Escala Log₁₀)",
    key: "computeTflops" as const,
    displayKey: "displayCompute" as const,
    compactKey: "compactCompute" as const,
    minBase: 5,
    domain: [5, 5000000] as [number, number],
  },
  bandwidth: {
    label: "Ancho de Banda de Memoria y Bus",
    unit: "GB/s (Escala Logarítmica — Ancho de Banda Agregado)",
    compactUnit: "GB/s (Escala Log₁₀)",
    key: "bandwidthGBs" as const,
    displayKey: "displayBandwidth" as const,
    compactKey: "compactBandwidth" as const,
    minBase: 50,
    domain: [50, 50000000] as [number, number],
  },
  power: {
    label: "Consumo Energético Continuo",
    unit: "Watts (Escala Logarítmica — Potencia Térmica / Eléctrica)",
    compactUnit: "Watts (Escala Log₁₀)",
    key: "powerWatts" as const,
    displayKey: "displayPower" as const,
    compactKey: "compactPower" as const,
    minBase: 10,
    domain: [10, 100000000] as [number, number],
  },
};

interface ChartDatum {
  label: string;
  base: number;
  value: number;
  color: string;
}

export interface HpcScaleChartProps {
  metric: MetricType;
}

export function HpcScaleChart({ metric }: HpcScaleChartProps) {
  const isMobile = useIsMobile();
  const config = METRIC_CONFIG[metric];

  const chartData = useMemo<readonly ChartDatum[]>(() => {
    return SCALE_DATA.map((item) => ({
      label: isMobile
        ? `${item.shortName} [${item[config.compactKey]}]`
        : `${item.name} — [ ${item[config.displayKey]} ]`,
      base: config.minBase,
      value: item[config.key],
      color: item.color,
    }));
  }, [isMobile, config.key, config.displayKey, config.compactKey, config.minBase]);

  const chartDefinition = useMemo(() => {
    const scaleInstance = scaleLog().domain(config.domain);

    return defineChart({
      marks: [
        barX(chartData, {
          y: "label",
          x1: "base",
          x2: "value",
          fill: (d: ChartDatum) => d.color,
          radius: 4,
        }),
      ],
      scales: {
        y: {
          scale: () => scaleBand<string>().padding(isMobile ? 0.32 : 0.24),
        },
        x: {
          scale: scaleInstance,
          grid: true,
          axis: {
            label: isMobile ? config.compactUnit : config.unit,
            ticks: { count: isMobile ? 3 : 6 },
          },
        },
      },
    });
  }, [chartData, config.domain, config.unit, config.compactUnit, isMobile]);

  return (
    <div className="w-full">
      <Chart
        height={isMobile ? 250 : 460}
        definition={chartDefinition}
        ariaLabel={`Gráfica de ${config.label}`}
        ariaDescription="Comparativa en escala logarítmica entre hardware personal, nodos HPC y supercomputadores Exascale."
        className="h-full w-full"
      />
    </div>
  );
}

export function HpcScaleCards() {
  return (
    <div className="grid grid-cols-2 gap-2.5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
      {SCALE_DATA.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between rounded-sm border-2 border-solid border-white/10 bg-white/[0.025] p-2.5 transition-all hover:border-white/25 md:p-5"
          style={{ borderTopColor: item.color, borderTopWidth: "4px" }}
        >
          <div>
            <span
              className="font-mono text-[9.5px] font-bold tracking-wider uppercase md:text-[12px] md:tracking-widest"
              style={{ color: item.color }}
            >
              {item.tag}
            </span>
            <h3 className="mt-0.5 font-display text-[14px] leading-tight font-extrabold text-white md:mt-1 md:text-[22px]">
              {item.name}
            </h3>
            <p className="mt-1 hidden font-sans text-[13px] leading-relaxed text-mfqc-gray md:mt-2 md:block md:text-[15px]">
              {item.role}
            </p>
          </div>

          <div className="mt-2.5 flex flex-col gap-1 border-t border-solid border-white/10 pt-2 font-mono text-[10.5px] md:mt-4 md:gap-1.5 md:pt-3 md:text-[13px]">
            <div className="flex justify-between">
              <span className="text-white/60">Cómputo:</span>
              <strong className="text-white">{item.displayCompute}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Ancho B.:</span>
              <strong className="text-white">{item.displayBandwidth}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Consumo:</span>
              <strong className="text-white">{item.displayPower}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
