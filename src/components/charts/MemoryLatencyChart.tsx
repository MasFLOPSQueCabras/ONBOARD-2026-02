import { useMemo } from "react";
import { defineChart, barX } from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLog } from "d3-scale";
import { Chart } from "@tanstack/react-charts";
import { useIsMobile } from "../../hooks/useIsMobile";

interface LatencyDatum {
  label: string;
  base: number;
  latencyNs: number;
  color: string;
}

const RAW_LATENCY_DATA = [
  {
    tier: "01 // L1 D-Cache",
    shortTier: "01 L1 Cache",
    base: 0.5,
    latencyNs: 1.0,
    display: "1.0 ns (~4 ciclos CPU)",
    shortDisplay: "1 ns",
    color: "var(--color-mfqc-yellow)",
  },
  {
    tier: "02 // L2 Cache",
    shortTier: "02 L2 Cache",
    base: 0.5,
    latencyNs: 3.5,
    display: "3.5 ns (~14 ciclos CPU)",
    shortDisplay: "3.5 ns",
    color: "var(--color-mfqc-yellow)",
  },
  {
    tier: "03 // L3 Cache (Compartida)",
    shortTier: "03 L3 Cache",
    base: 0.5,
    latencyNs: 12.0,
    display: "12 ns (~50 ciclos CPU)",
    shortDisplay: "12 ns",
    color: "var(--color-mfqc-yellow)",
  },
  {
    tier: "04 // RAM DDR5 Local (NUMA 0)",
    shortTier: "04 RAM Local",
    base: 0.5,
    latencyNs: 70.0,
    display: "70 ns (~280 ciclos CPU)",
    shortDisplay: "70 ns",
    color: "var(--color-mfqc-cyan)",
  },
  {
    tier: "05 // RAM Remota (Cross-Socket)",
    shortTier: "05 RAM Remota",
    base: 0.5,
    latencyNs: 135.0,
    display: "135 ns (NUMA Inter-Socket)",
    shortDisplay: "135 ns",
    color: "var(--color-mfqc-cyan)",
  },
  {
    tier: "06 // NVLink Inter-GPU (VRAM Remota)",
    shortTier: "06 NVLink GPU",
    base: 0.5,
    latencyNs: 280.0,
    display: "280 ns (Malla GPU NVLink)",
    shortDisplay: "280 ns",
    color: "var(--color-mfqc-pink)",
  },
  {
    tier: "07 // InfiniBand RDMA (Red Clúster)",
    shortTier: "07 InfiniBand",
    base: 0.5,
    latencyNs: 1200.0,
    display: "1,200 ns (1.2 µs sin kernel)",
    shortDisplay: "1.2 µs",
    color: "var(--color-mfqc-purple)",
  },
  {
    tier: "08 // Red Ethernet TCP/IP Tradicional",
    shortTier: "08 Ethernet TCP",
    base: 0.5,
    latencyNs: 25000.0,
    display: "25,000 ns (25 µs con kernel Linux)",
    shortDisplay: "25 µs",
    color: "#64748b",
  },
];

export function MemoryLatencyChart() {
  const isMobile = useIsMobile();

  const chartData = useMemo<readonly LatencyDatum[]>(() => {
    return RAW_LATENCY_DATA.map((item) => ({
      label: isMobile
        ? `${item.shortTier} [${item.shortDisplay}]`
        : `${item.tier} — [ ${item.display} ]`,
      base: item.base,
      latencyNs: item.latencyNs,
      color: item.color,
    }));
  }, [isMobile]);

  const chartDefinition = useMemo(() => {
    const scaleInstance = scaleLog().domain([0.5, 50000]);

    return defineChart({
      marks: [
        barX(chartData, {
          y: "label",
          x1: "base",
          x2: "latencyNs",
          fill: (d: LatencyDatum) => d.color,
          radius: 4,
        }),
      ],
      scales: {
        y: {
          scale: () => scaleBand<string>().padding(isMobile ? 0.22 : 0.18),
        },
        x: {
          scale: scaleInstance,
          grid: true,
          axis: {
            label: isMobile
              ? "Latencia en ns (Escala Log₁₀)"
              : "Latencia en Nanosegundos (Escala Logarítmica — multichase)",
            ticks: { count: isMobile ? 3 : 6 },
          },
        },
      },
    });
  }, [chartData, isMobile]);

  return (
    <div className="flex w-full flex-col gap-1.5 md:gap-2">
      {/* Leyenda y equivalencia de tiempo */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 md:gap-2">
        <span className="font-mono text-[10px] text-white/80 md:text-[13px]">
          ⚡ 1 ciclo CPU ≈ 0.25 ns a 4.0 GHz
        </span>

        <div className="flex flex-wrap gap-2 font-mono text-[10px] md:gap-3 md:text-[12px]">
          <span className="flex items-center gap-1 text-mfqc-yellow">
            <span className="inline-block h-2 w-2 rounded-xs bg-mfqc-yellow md:h-2.5 md:w-2.5" />
            Caché
          </span>
          <span className="flex items-center gap-1 text-mfqc-cyan">
            <span className="inline-block h-2 w-2 rounded-xs bg-mfqc-cyan md:h-2.5 md:w-2.5" />
            RAM / NUMA
          </span>
          <span className="flex items-center gap-1 text-mfqc-pink">
            <span className="inline-block h-2 w-2 rounded-xs bg-mfqc-pink md:h-2.5 md:w-2.5" />
            NVLink
          </span>
          <span className="flex items-center gap-1 text-[#a855f7]">
            <span className="inline-block h-2 w-2 rounded-xs bg-[#a855f7] md:h-2.5 md:w-2.5" />
            Red RDMA
          </span>
        </div>
      </div>

      {/* TanStack Chart adaptado */}
      <div className="w-full">
        <Chart
          height={isMobile ? 310 : 390}
          definition={chartDefinition}
          ariaLabel="Gráfica de Jerarquía de Latencias de Memoria"
          ariaDescription="Comparativa en nanosegundos y escala logarítmica de tiempos de acceso desde caché L1 hasta la red externa."
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
