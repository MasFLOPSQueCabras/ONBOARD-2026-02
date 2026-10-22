import { Slide } from "@revealjs/react";
import carlaGroupPhoto from "../assets/CARLA_SCC_GROUP.jpeg";

export function CarlaSCC2026() {
  return (
    <Slide>
      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // CARLA 2026</span>
            <span className="mfqc-topbar-meta">SYS.04 — EXPERIENCIA EN COMPETENCIA</span>
          </div>

          <div className="mfqc-body">
            <div className="mfqc-split-2" style={{ alignItems: "center" }}>
              <div className="mfqc-stack">
                <h2 className="mfqc-headline">
                  Hito: <span style={{ color: "#ffe600" }}>SCC CARLA 2026</span> 🏆
                </h2>

                <p className="mfqc-lead mfqc-lead-tight">
                  Representamos a la universidad en la competencia latinoamericana de
                  supercomputación enfrentando hardware e infraestructura real.
                </p>

                <div className="mfqc-col">
                  <span className="mfqc-col-num">HARDWARE REAL BAJO PRESIÓN</span>
                  <h3>BMC, Infraestructura &amp; HPL</h3>
                  <p>
                    Gestión remota por <strong>BMC</strong>, resolución de problemas críticos de
                    infraestructura y tuning de <strong>InfiniBand + BLAS</strong>.
                  </p>
                </div>
              </div>

              <div className="mfqc-media-center">
                <img
                  src={carlaGroupPhoto}
                  alt="Equipo Más FLOPS que Cabras en SCC CARLA 2026"
                  className="mfqc-carla-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // CARLA 2026</span>
            <span className="mfqc-topbar-meta">SYS.04B — INFRAESTRUCTURA Y OPTIMIZACIÓN</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                ¿Qué dominamos en <span style={{ color: "#00f5d4" }}>CARLA 2026</span>?
              </h2>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">01 / BAREMETAL &amp; INFRA</span>
                <h3>Control por BMC y Diagnóstico</h3>
                <p>
                  Administración a bajo nivel mediante <strong>BMC</strong> y resolución de fallos
                  de infraestructura y red entre nodos en tiempo real.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">02 / MÁXIMO RENDIMIENTO</span>
                <h3>InfiniBand, BLAS &amp; HPL</h3>
                <p>
                  Ajuste fino de interconexión{" "}
                  <strong style={{ color: "#00f5d4" }}>InfiniBand</strong> y librerías matemáticas{" "}
                  <strong style={{ color: "#ffe600" }}>BLAS</strong> para exprimir cada FLOP en{" "}
                  <strong>HPL</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
