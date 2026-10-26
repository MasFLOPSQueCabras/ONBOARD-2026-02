import { useMemo } from "react";
import { defineChart, barX } from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLog } from "d3-scale";
import { Chart } from "@tanstack/react-charts";
import { useDeckViewport } from "../../core/DeckViewportContext";
import { HARDWARE_TIERS } from "../../data/hardware";

export type MetricType = "bandwidth" | "power";

const METRIC_CONFIG = {
  bandwidth: {
    label: "Ancho de banda de memoria",
    unit: "GB/s · escala logarítmica",
    base: 50,
    domain: [50, 1000000] as [number, number],
    note: "Memoria local o agregada, no ancho de banda de red ni NVLink. La suma de varias GPU no está disponible para un único acceso.",
  },
  power: {
    label: "Potencia eléctrica especificada",
    unit: "Watts · escala logarítmica",
    base: 100,
    domain: [100, 20000] as [number, number],
    note: "TGP de una tarjeta y máximo de un sistema completo: ámbitos distintos, no mediciones de consumo continuo ni de eficiencia.",
  },
};

export function HpcScaleChart({ metric }: { metric: MetricType }) {
  const { isMobile } = useDeckViewport();
  const config = METRIC_CONFIG[metric];
  const rows = useMemo(
    () =>
      HARDWARE_TIERS.flatMap((item) => {
        const fact = item[metric];
        return fact
          ? [
              {
                ...fact,
                id: item.id,
                name: item.shortName,
                label: `${item.shortName} · ${fact.display}`,
                base: config.base,
                color: item.color,
              },
            ]
          : [];
      }),
    [metric, config.base],
  );
  const definition = useMemo(
    () =>
      defineChart({
        marks: [
          barX(rows, { y: "label", x1: "base", x2: "value", fill: (row) => row.color, radius: 4 }),
        ],
        scales: {
          y: { scale: () => scaleBand<string>().padding(0.3) },
          x: {
            scale: scaleLog().domain(config.domain),
            grid: true,
            axis: { label: config.unit, ticks: { count: isMobile ? 3 : 6 } },
          },
        },
      }),
    [rows, config.domain, config.unit, isMobile],
  );

  return (
    <div className="min-w-0 w-full" data-chart={metric}>
      <Chart
        height={isMobile ? 220 : 310}
        definition={definition}
        ariaLabel={config.label}
        ariaDescription={config.note}
        className="w-full"
      />
      <p className="font-sans text-[11px]! leading-snug! text-mfqc-gray @min-[768px]/deck:text-[18px]!">
        {config.note}
      </p>
      <ul className="m-0! mt-2! grid list-none! gap-1 p-0! font-mono text-[10px]! leading-snug! @min-[768px]/deck:mt-4! @min-[768px]/deck:text-[15px]!">
        {rows.map((row) => (
          <li key={row.id} className="m-0!">
            <a
              href={row.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-mfqc-cyan underline"
            >
              {row.name}: {row.display}
            </a>
            {" · "}
            {row.basis} ({row.referenceDate})
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HpcScaleCards({ architecture = false }: { architecture?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3 @min-[768px]/deck:gap-5" data-hardware-cards>
      {HARDWARE_TIERS.map((item) => (
        <article
          key={item.id}
          className="min-w-0 border-2 border-white/15 bg-white/[0.025] p-3 @min-[768px]/deck:p-5"
          style={{ borderTopColor: item.color, borderTopWidth: 4 }}
        >
          <h3 className="font-display text-[14px]! leading-tight! @min-[768px]/deck:text-[24px]!">
            {item.name}
          </h3>
          <p
            className="pt-2 font-mono text-[16px]! font-bold @min-[768px]/deck:text-[28px]!"
            style={{ color: item.color }}
          >
            {item.capability.display}
          </p>
          <p className="pt-2 text-[11px]! leading-snug! text-mfqc-gray @min-[768px]/deck:text-[18px]!">
            {architecture ? item.role : item.capability.basis}
          </p>
          <a
            href={item.capability.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-mono text-[9px] text-mfqc-cyan underline @min-[768px]/deck:text-[13px]"
            aria-label={`Fuente de ${item.name}, ${item.capability.referenceDate}`}
          >
            Fuente · {item.capability.referenceDate}
          </a>
        </article>
      ))}
    </div>
  );
}
