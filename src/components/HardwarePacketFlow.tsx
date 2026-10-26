import { useId, type CSSProperties } from "react";
import { DiagramSteps } from "./DiagramSteps";

type FlowKind = "memory" | "network";

function HardwareBlock({
  x,
  y,
  label,
  detail,
  width = 120,
}: {
  x: number;
  y: number;
  label: string;
  detail?: string;
  width?: number;
}) {
  return (
    <g className="packet-block">
      <rect x={x} y={y} width={width} height="60" rx="6" />
      <text x={x + width / 2} y={y + (detail ? 25 : 37)}>
        {label}
      </text>
      {detail && (
        <text className="packet-detail" x={x + width / 2} y={y + 46}>
          {detail}
        </text>
      )}
    </g>
  );
}

function WaitingQueue({ x, y }: { x: number; y: number }) {
  return (
    <g className="packet-queue">
      <text className="packet-detail" x={x + 35} y={y - 9}>
        Cola de espera
      </text>
      {Array.from({ length: 4 }, (_, index) => (
        <rect
          className="packet-queued-item"
          key={index}
          x={x + index * 19}
          y={y}
          width="13"
          height="14"
          rx="2"
          style={{ "--queue-delay": `${index * 180}ms` } as CSSProperties}
        />
      ))}
    </g>
  );
}

function PacketDiagram({
  kind,
  staticDiagram = false,
}: {
  kind: FlowKind;
  staticDiagram?: boolean;
}) {
  const id = useId().replaceAll(":", "");
  const isMemory = kind === "memory";
  const label = isMemory
    ? "Rutas de datos entre procesadores y memoria"
    : "Varios emisores comparten un enlace de salida";

  function link(d: string, color: "memory" | "network", limited = false) {
    return (
      <g className={`packet-link packet-${color}${limited ? " packet-limited" : ""}`}>
        <path className="packet-route" d={d} markerEnd={`url(#${id}-${color})`} />
        {!staticDiagram && <path className="packet-pulse" d={d} pathLength="100" />}
      </g>
    );
  }

  return (
    <svg
      viewBox="0 0 600 270"
      className="packet-diagram"
      data-static={staticDiagram || undefined}
      role="img"
      aria-label={label}
    >
      <defs>
        {(["memory", "network"] as const).map((color) => (
          <marker
            key={color}
            id={`${id}-${color}`}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path className={`packet-arrow-${color}`} d="M0 0 L8 4 L0 8 Z" />
          </marker>
        ))}
      </defs>
      {isMemory ? (
        <>
          {link("M460 60 H360", "memory")}
          {link("M240 60 H140", "memory")}
          {link("M460 210 H360", "memory", true)}
          {link("M240 210 H140", "memory")}
          {link("M80 90 V180", "network")}
          <HardwareBlock x={20} y={30} label="CPU" />
          <HardwareBlock x={240} y={30} label="Cachés" detail="L1 · L2 · L3" />
          <HardwareBlock x={460} y={30} label="RAM" detail="DDR" />
          <HardwareBlock x={20} y={180} label="GPU" />
          <HardwareBlock x={240} y={180} label="SRAM" detail="local" />
          <HardwareBlock x={460} y={180} label="HBM" />
          <text className="packet-detail packet-pcie" x="116" y="139">
            PCIe
          </text>
          <WaitingQueue x={378} y={146} />
          <g className="packet-constraint">
            <path d="M410 193 V227" />
            <text className="packet-detail" x="410" y="256">
              Bus saturado
            </text>
          </g>
        </>
      ) : (
        <>
          {link("M150 50 H185 V125 H220", "network")}
          {link("M150 220 H185 V145 H220", "network")}
          {link("M390 135 H450", "network", true)}
          <HardwareBlock x={10} y={20} width={140} label="Nodo A" detail="envía datos" />
          <HardwareBlock x={10} y={190} width={140} label="Nodo B" detail="envía datos" />
          <HardwareBlock x={450} y={105} width={140} label="Nodo C" detail="recibe datos" />
          <g className="packet-block">
            <rect x="220" y="85" width="170" height="100" rx="6" />
            <text x="305" y="115">
              Switch
            </text>
          </g>
          <WaitingQueue x={270} y={151} />
          <g className="packet-constraint">
            <path d="M420 118 V152" />
            <text className="packet-detail" x="420" y="210">
              Salida limitada
            </text>
          </g>
        </>
      )}
    </svg>
  );
}

export function HardwarePacketFlow({ kind }: { kind: FlowKind }) {
  const isMemory = kind === "memory";
  const label = isMemory
    ? "Rutas de datos entre procesadores y memoria"
    : "Varios emisores comparten un enlace de salida";
  return (
    <figure className="packet-flow" data-packet-flow={kind} aria-label={label}>
      <DiagramSteps labels={["Flujo", "Cuello de botella"]} />
      <div className="packet-scene motion-screen">
        <PacketDiagram kind={kind} />
      </div>
      <div className="packet-scene packet-static motion-print">
        <PacketDiagram kind={kind} staticDiagram />
      </div>
      <div className="packet-explanation">
        <p className="packet-normal-copy">
          {isMemory
            ? "Amarillo: datos desde RAM/HBM hacia el procesador. Cian: transferencia entre CPU y GPU."
            : "Dos emisores envían datos a través de un enlace de salida compartido."}
        </p>
        <p className="packet-busy-copy">
          {isMemory
            ? "Si las solicitudes superan lo que puede servir la memoria, se acumulan y el procesador espera."
            : "Si llegan más datos de los que pueden salir, crece la cola y aumenta la espera."}
        </p>
      </div>
      <dl className="packet-definitions">
        <div>
          <dt>{isMemory ? "Ancho de banda de memoria" : "Ancho de banda de interconexión"}</dt>
          <dd>
            {isMemory
              ? "Bytes/s entre la memoria y el procesador."
              : "Bytes/s entre dispositivos o nodos."}
          </dd>
        </div>
        <div>
          <dt>Latencia</dt>
          <dd>Tiempo de una solicitud; la cola añade espera.</dd>
        </div>
      </dl>
      <figcaption>
        Rutas simplificadas. Pulsos, colas y tiempos ilustrativos; no es un benchmark.
      </figcaption>
    </figure>
  );
}
