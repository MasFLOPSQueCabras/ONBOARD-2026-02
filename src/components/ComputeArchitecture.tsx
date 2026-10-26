import type { CSSProperties } from "react";
import { DiagramSteps } from "./DiagramSteps";

type ComputeStage = "laptop" | "gpu" | "node";

const stages = [
  { id: "laptop", name: "Portátil", description: "Un equipo para desarrollar y probar." },
  { id: "gpu", name: "GPU", description: "Una malla de unidades ejecuta trabajo en paralelo." },
  { id: "node", name: "Nodo", description: "CPU, memoria y GPU integradas en un servidor." },
] as const;

function ComputeDiagram({ stage }: { stage?: ComputeStage }) {
  return (
    <svg className="compute-diagram" data-stage={stage} viewBox="0 0 640 260" aria-hidden="true">
      {(!stage || stage === "laptop") && (
        <g className="compute-laptop">
          <rect x="200" y="36" width="240" height="162" rx="10" />
          <path d="M200 198 L174 218 H466 L440 198 M285 210 H355" />
          <text x="320" y="177">
            CÓMPUTO LOCAL
          </text>
        </g>
      )}
      {(!stage || stage === "gpu") && (
        <g className="compute-gpu">
          <rect x="248" y="34" width="150" height="162" rx="8" />
          <path d="M264 196 V210 M290 196 V210 M316 196 V210 M342 196 V210 M368 196 V210" />
          <text x="323" y="236">
            GPU
          </text>
        </g>
      )}
      {(!stage || stage === "node") && (
        <g className="compute-node">
          <rect x="90" y="28" width="460" height="202" rx="10" />
          <path className="compute-link" d="M238 126 H348 M195 156 V182 H348" />
          <rect x="150" y="96" width="88" height="60" rx="5" />
          <text x="194" y="134">
            CPU
          </text>
          <rect x="348" y="60" width="150" height="132" rx="5" />
          <text x="424" y="215">
            GPU
          </text>
          <rect x="150" y="174" width="88" height="28" rx="3" />
          <text className="compute-small-label" x="194" y="194">
            RAM
          </text>
          <circle className="compute-led" cx="112" cy="50" r="4" />
        </g>
      )}
      <g className="compute-units">
        {Array.from({ length: stage === "laptop" ? 1 : 16 }, (_, index) => (
          <rect
            key={index}
            className="compute-unit"
            width="20"
            height="20"
            rx="3"
            style={
              {
                "--cell-x": `${(index % 4) * 26}px`,
                "--cell-y": `${Math.floor(index / 4) * 26}px`,
              } as CSSProperties
            }
          />
        ))}
      </g>
    </svg>
  );
}

export function ComputeTransformation() {
  return (
    <figure className="architecture-figure" data-compute-transformation>
      <div className="compute-sequence motion-screen">
        <DiagramSteps labels={stages.map((stage) => stage.name)} />
        <div className="compute-focus" data-id="architecture-node">
          <ComputeDiagram />
        </div>
        <div className="compute-explanation">
          {stages.map((stage) => (
            <p key={stage.id} data-stage-copy={stage.id}>
              {stage.description}
            </p>
          ))}
        </div>
      </div>
      <div className="motion-print compute-print-sequence">
        {stages.map((stage, index) => (
          <div key={stage.id} className="compute-print-stage">
            <strong>
              0{index + 1} / {stage.name}
            </strong>
            <ComputeDiagram stage={stage.id} />
            <p>{stage.description}</p>
          </div>
        ))}
      </div>
      <figcaption>
        Esquema arquitectónico: las unidades dibujadas no representan cantidades reales ni
        proporciones de rendimiento.
      </figcaption>
    </figure>
  );
}

export function ConnectedCluster() {
  return (
    <figure className="architecture-figure" data-connected-cluster>
      <div className="cluster-topology">
        <svg
          className="cluster-links"
          viewBox="0 0 640 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M180 150 H340 V70 H475 M340 150 V230 H475" />
          <circle cx="340" cy="150" r="8" />
        </svg>
        <div className="cluster-node cluster-origin" data-id="architecture-node">
          <ComputeDiagram stage="node" />
          <strong>Nodo A</strong>
        </div>
        <div className="cluster-node">
          <ComputeDiagram stage="node" />
          <strong>Nodo B</strong>
        </div>
        <div className="cluster-node">
          <ComputeDiagram stage="node" />
          <strong>Nodo C</strong>
        </div>
      </div>
      <p className="cluster-caption">Nodos autónomos + red = trabajo coordinado</p>
      <figcaption>
        Interconexión esquemática; no representa una topología, cantidad de nodos o escala de
        rendimiento específica.
      </figcaption>
    </figure>
  );
}
