import { Slide } from "@revealjs/react";
import { MojoCodeBox } from "../components/MojoCodeBox";

const VECADD_MOJO = `from gpu import thread_idx, block_idx, block_dim

fn vecadd_gpu(
    a: UnsafePointer[Float32],
    b: UnsafePointer[Float32],
    c: UnsafePointer[Float32],
    n: Int,
):
    var tid = block_idx.x * block_dim.x + thread_idx.x
    if tid < n:
        c[tid] = a[tid] + b[tid]  // 1 hilo GPU por elemento`;

export function NextStepsMojo() {
  return (
    <Slide>
      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // NEXT: MOJO 🔥</span>
            <span className="mfqc-topbar-meta">SYS.03 — PROGRAMACIÓN PARALELA &amp; GPU</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                Próximo Reto: <span style={{ color: "#ffe600" }}>Mojo 🔥</span>
              </h2>
              <p className="mfqc-lead">
                Sintaxis limpia como <strong>Python</strong>, compilado directo a registros
                vectoriales y GPUs como <strong style={{ color: "#00f5d4" }}>C++ / CUDA</strong>.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">CPU PARALLELISM</span>
                <h3>SIMD &amp; Multinúcleo</h3>
                <p>
                  Vectores nativos y ejecución paralela en todos los núcleos sin <em>GIL</em>.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">ACCELERATORS</span>
                <h3>Kernels en GPU</h3>
                <p>Programación directa de GPUs con un solo lenguaje unificado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // MOJO GPU</span>
            <span className="mfqc-topbar-meta">SYS.03B — KERNEL VECADD</span>
          </div>

          <div className="mfqc-body" style={{ alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: "1060px" }}>
              <MojoCodeBox
                header="vecadd_kernel.mojo — GPU Vector Addition"
                code={VECADD_MOJO}
                highlightLines={[3, 9, 11]}
                footer="// Compilado directo a código máquina GPU vía MLIR"
              />
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
