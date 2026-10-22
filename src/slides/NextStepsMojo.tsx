import { Slide } from "../components/RevealDeck";
import { MojoCodeBox } from "../components/MojoCodeBox";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

const VECADD_MOJO = `from gpu import thread_idx, block_idx, block_dim

fn vecadd_gpu(
    a: UnsafePointer[Float32],
    b: UnsafePointer[Float32],
    c: UnsafePointer[Float32],
    n: Int,
):
    var tid = block_idx.x * block_dim.x + thread_idx.x
    if tid < n:
        // 1 hilo GPU por elemento en paralelo
        c[tid] = a[tid] + b[tid]`;

export function NextStepsMojo() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // NEXT: MOJO 🔥"
        meta="SYS.03 — PROGRAMACIÓN PARALELA & GPU"
        title={
          <>
            Próximo Reto: <span className="text-mfqc-yellow">Mojo 🔥</span>
          </>
        }
        lead={
          <>
            Sintaxis limpia como <strong className="text-white">Python</strong>, compilado directo a
            registros vectoriales y GPUs como <strong className="text-mfqc-cyan">C++ / CUDA</strong>
            .
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem tag="CPU PARALLELISM" title="SIMD & Multinúcleo">
            Vectores nativos y ejecución paralela en todos los núcleos sin <em>GIL</em>.
          </FeatureItem>

          <FeatureItem tag="ACCELERATORS" title="Kernels en GPU" accent="cyan">
            Programación directa de GPUs con un solo lenguaje unificado.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection brand="MFQC // MOJO GPU" meta="SYS.03B — KERNEL VECADD">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[0.82fr_1.18fr] md:gap-14">
          <div className="flex flex-col gap-3 md:gap-6">
            <h2 className="font-display text-[33px]! leading-[1.08]! font-extrabold text-white md:text-[58px]! md:leading-[1.06]!">
              Kernel <span className="text-mfqc-cyan">GPU</span> en{" "}
              <span className="text-mfqc-yellow">Mojo 🔥</span>
            </h2>

            <p className="m-0! font-sans text-[16px]! leading-[1.42]! text-mfqc-gray md:text-[22px]! md:leading-[1.5]!">
              Cada hilo de la GPU calcula su índice global (<code>tid</code>) y suma un elemento en
              paralelo sin bucles secuenciales.
            </p>

            <FeatureItem tag="SIMT EXECUTION" title="Miles de Hilos en Paralelo" accent="cyan">
              Compilado directo a PTX / AMDGPU mediante <strong className="text-white">MLIR</strong>{" "}
              sin overhead de runtime.
            </FeatureItem>
          </div>

          <div className="w-full">
            <MojoCodeBox
              header="vecadd_kernel.mojo — GPU Vector Addition"
              code={VECADD_MOJO}
              highlightLines={[3, 9, 12]}
              footer="// Compilado directo a código máquina GPU vía MLIR"
            />
          </div>
        </div>
      </SlideSection>
    </Slide>
  );
}
