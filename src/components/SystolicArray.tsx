import { type CSSProperties, useId } from "react";
import { DiagramSteps } from "./DiagramSteps";

export function SystolicArray() {
  const id = useId().replaceAll(":", "");
  return (
    <figure className="systolic-array" aria-label="Matriz sistólica didáctica de tres por tres">
      <DiagramSteps labels={["Entradas", "MAC", "Salidas"]} />
      <div className="systolic-scene">
        <svg
          viewBox="0 0 620 360"
          role="img"
          aria-label="A avanza a la derecha; B hacia abajo. Cada celda acumula productos para C."
        >
          <defs>
            <marker
              id={`${id}-arrow`}
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill="context-stroke" />
            </marker>
          </defs>
          <text className="systolic-label" x="371" y="28">
            B · pesos ↓
          </text>
          <text className="systolic-label" x="74" y="70">
            A · datos →
          </text>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path
                className="systolic-a"
                d={`M28 ${136 + i * 82} H594`}
                markerEnd={`url(#${id}-arrow)`}
              />
              <path
                className="systolic-b"
                d={`M${235 + i * 136} 82 V348`}
                markerEnd={`url(#${id}-arrow)`}
              />
              <text className="systolic-input" x="74" y={123 + i * 82}>{`a${i + 1},k`}</text>
              <text className="systolic-input" x={235 + i * 136} y="68">{`bk,${i + 1}`}</text>
            </g>
          ))}
          {[0, 1, 2].flatMap((row) =>
            [0, 1, 2].map((col) => (
              <g
                className="systolic-cell"
                key={`${row}-${col}`}
                style={{ "--wave-delay": `${(row + col) * 140}ms` } as CSSProperties}
              >
                <rect x={180 + col * 136} y={106 + row * 82} width="110" height="60" rx="7" />
                <text className="systolic-mac" x={235 + col * 136} y={132 + row * 82}>
                  × +
                </text>
                <text
                  className="systolic-mac systolic-small"
                  x={235 + col * 136}
                  y={153 + row * 82}
                >{`C${row + 1}${col + 1}`}</text>
                <text
                  className="systolic-result"
                  x={235 + col * 136}
                  y={142 + row * 82}
                >{`C${row + 1}${col + 1}`}</text>
              </g>
            )),
          )}
        </svg>
      </div>
      <div className="systolic-summary">
        <div className="systolic-copy">
          <p className="systolic-stage-0">
            1. Entradas: A llega por filas y B por columnas, con desfases para que cada par se
            encuentre.
          </p>
          <p className="systolic-stage-1">
            2. MAC: cada celda multiplica y acumula. Los datos se reutilizan al pasar a la celda
            vecina; la actividad avanza en diagonal.
          </p>
          <p className="systolic-stage-2">
            3. Salidas: al terminar la suma sobre k, cada celda conserva un elemento de C = A × B.
          </p>
        </div>
        <p className="systolic-equation">Cᵢⱼ ← Cᵢⱼ + Aᵢₖ × Bₖⱼ</p>
      </div>
      <figcaption>
        Esquema didáctico, no una réplica de la MXU. Tamaño y tiempos ilustrativos; no es un
        benchmark.{" "}
        <a
          href="https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
          target="_blank"
          rel="noreferrer"
        >
          Referencia: Google Cloud TPU
        </a>
      </figcaption>
    </figure>
  );
}
