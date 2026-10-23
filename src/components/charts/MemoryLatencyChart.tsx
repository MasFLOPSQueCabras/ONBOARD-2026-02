import { useMemo } from "react";
import { defineChart, barX } from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLog } from "d3-scale";
import { Chart } from "@tanstack/react-charts";

interface LatencyDatum {
  label: string;
  base: number;
  latencyNs: number;
  color: string;
}

const RAW_LATENCY_DATA = [
  {
    tier: "01 // L1 D-Cache",
    base: 0.5,
    latencyNs: 1.0,
    display: "1.0 ns (~4 ciclos CPU)",
    color: "#ffe600",
  },
  {
    tier: "02 // L2 Cache",
    base: 0.5,
    latencyNs: 3.5,
    display: "3.5 ns (~14 ciclos CPU)",
    color: "#ffe600",
  },
  {
    tier: "03 // L3 Cache (Compartida)",
    base: 0.5,
    latencyNs: 12.0,
    display: "12 ns (~50 ciclos CPU)",
    color: "#ffe600",
  },
  {
    tier: "04 // RAM DDR5 Local (NUMA 0)",
    base: 0.5,
    latencyNs: 70.0,
    display: "70 ns (~280 ciclos CPU)",
    color: "#00f5d4",
  },
  {
    tier: "05 // RAM Remota (Cross-Socket)",
    base: 0.5,
    latencyNs: 135.0,
    display: "135 ns (NUMA Inter-Socket)",
    color: "#00f5d4",
  },
  {
    tier: "06 // NVLink Inter-GPU (VRAM Remota)",
    base: 0.5,
    latencyNs: 280.0,
    display: "280 ns (Malla GPU NVLink)",
    color: "#ff2a85",
  },
  {
    tier: "07 // InfiniBand RDMA (Red Clúster)",
    base: 0.5,
    latencyNs: 1200.0,
    display: "1,200 ns (1.2 µs sin kernel)",
    color: "#a855f7",
  },
  {
    tier: "08 // Red Ethernet TCP/IP Tradicional",
    base: 0.5,
    latencyNs: 25000.0,
    display: "25,000 ns (25 µs con kernel Linux)",
    color: "#64748b",
  },
];

export function MemoryLatencyChart() {
  const chartData = useMemo<readonly LatencyDatum[]>(() => {
    return RAW_LATENCY_DATA.map((item) => ({
      label: `${item.tier} — [ ${item.display} ]`,
      base: item.base,
      latencyNs: item.latencyNs,
      color: item.color,
    }));
  }, []);

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
          scale: () => scaleBand<string>().padding(0.18),
        },
        x: {
          scale: scaleInstance,
          grid: true,
          axis: {
            label: "Latencia en Nanosegundos (Escala Logarítmica — multichase)",
          },
        },
      },
    });
  }, [chartData]);

  return (
    <div className="flex w-full flex-col gap-2">
      {/* Leyenda y equivalencia de tiempo */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-white/80 md:text-[13px]">
          ⚡ 1 ciclo CPU ≈ 0.25 ns a 4.0 GHz
        </span>

        <div className="flex flex-wrap gap-3 font-mono text-[11px] md:text-[12px]">
          <span className="flex items-center gap-1.5 text-mfqc-yellow">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-mfqc-yellow" />
            Caché SRAM
          </span>
          <span className="flex items-center gap-1.5 text-mfqc-cyan">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-mfqc-cyan" />
            RAM / NUMA
          </span>
          <span className="flex items-center gap-1.5 text-mfqc-pink">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-mfqc-pink" />
            NVLink
          </span>
          <span className="flex items-center gap-1.5 text-[#a855f7]">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-[#a855f7]" />
            Red RDMA
          </span>
        </div>
      </div>

      {/* TanStack Chart adaptado a 390px para armonía vertical */}
      <div className="w-full">
        <Chart
          height={390}
          definition={chartDefinition}
          ariaLabel="Gráfica de Jerarquía de Latencias de Memoria"
          ariaDescription="Comparativa en nanosegundos y escala logarítmica de tiempos de acceso desde caché L1 hasta la red externa."
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
