import { Slide } from "@revealjs/react";

export function UarchAndBenchmarks() {
  return (
    <Slide>
      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // UARCH</span>
            <span className="mfqc-topbar-meta">SYS.02 — LO QUE HEMOS ABORDADO</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                La <span style={{ color: "#ffe600" }}>uArch</span> de un PC &amp;{" "}
                <span style={{ color: "#00f5d4" }}>GPUs</span>
              </h2>
              <p className="mfqc-lead">
                Para dominar un supercomputador, primero entendemos cómo fluye cada byte dentro de
                un nodo.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">CPU + MEMORIA</span>
                <h3>SIMD, Cachés y NUMA</h3>
                <p>
                  Registros vectoriales AVX, jerarquía de cachés <strong>L1 / L2 / L3</strong> y
                  localidad de memoria entre sockets.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">ACELERADORES</span>
                <h3>GPUs &amp; Enlaces PCIe</h3>
                <p>
                  Cómputo masivamente paralelo en miles de núcleos y memoria de altísimo ancho de
                  banda (VRAM / HBM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // BENCHMARKS</span>
            <span className="mfqc-topbar-meta">SYS.02B — CÓMPUTO Y MEMORIA</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                Cómputo y <span style={{ color: "#ffe600" }}>Ancho de Banda</span>
              </h2>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">MÉTRICA: TFLOPS</span>
                <h3>HPL (Linpack)</h3>
                <p>
                  El estándar del TOP500 para medir el techo real de operaciones en punto flotante
                  resolviendo sistemas lineales densos.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">MÉTRICA: GB/s</span>
                <h3>STREAM</h3>
                <p>
                  Mide el ancho de banda real sostenible de la memoria RAM mediante operaciones
                  vectoriales (Copy, Scale, Add, Triad).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // BENCHMARKS</span>
            <span className="mfqc-topbar-meta">SYS.02C — LATENCIA Y TOPOLOGÍA</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                Latencia y <span style={{ color: "#00f5d4" }}>Topología</span>
              </h2>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">MÉTRICA: NANOSEGUNDOS (ns)</span>
                <h3>multichase</h3>
                <p>
                  Mide la latencia exacta de cada nivel de caché y RAM mediante{" "}
                  <em>pointer chasing</em>.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">MÉTRICA: MAPA FÍSICO</span>
                <h3>hwloc</h3>
                <p>
                  Descubre la topología física del servidor: dominios NUMA, sockets, núcleos, cachés
                  y enlaces PCIe hacia GPUs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
