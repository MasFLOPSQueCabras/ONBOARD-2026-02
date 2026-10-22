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
        meta="¿POR QUÉ MOJO EN HPC?"
        title={
          <>
            ¿Por qué <span className="text-mfqc-yellow">Mojo 🔥</span>? El Futuro{" "}
            <span className="text-mfqc-cyan">Heterogéneo</span>
          </>
        }
        lead={
          <>
            Resuelve el histórico{" "}
            <strong className="text-white">«problema de los dos lenguajes»</strong>: prototipar en
            Python lento y tener que reescribir todo en{" "}
            <strong className="text-mfqc-cyan">C++ / CUDA</strong> propietario para producción.
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem
            tag="FIN DEL TWO-LANGUAGE PROBLEM"
            title="Ergonomía Python + Rendimiento Bare-Metal"
          >
            Sintaxis limpia como <strong className="text-white">Python</strong>, pero con tipado
            estático, <em>ownership</em> sin <em>GIL</em>, vectorización{" "}
            <strong className="text-mfqc-yellow">SIMD</strong> nativa y metaprogramación en tiempo
            de compilación (<em>comptime</em>).
          </FeatureItem>

          <FeatureItem
            tag="MLIR DE PRIMERA CLASE"
            title="Un Lenguaje para Todo el Silicio"
            accent="cyan"
          >
            Construido desde cero sobre <strong className="text-mfqc-cyan">MLIR</strong> para
            compilar hacia{" "}
            <strong className="text-white">CPUs, GPUs NVIDIA/AMD, TPUs y ASICs</strong> sin quedar
            atado a un único fabricante.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection brand="MFQC // MOJO GPU" meta="KERNEL VECADD">
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

      <SlideSection
        brand="MFQC // LECTURES"
        meta="LECTURES PIONERAS POR MFQC"
        title={
          <>
            Inédito: Lectures de <span className="text-mfqc-yellow">Mojo 🔥</span> por{" "}
            <span className="text-mfqc-cyan">MFQC</span> 🐐
          </>
        }
        lead={
          <>
            <strong className="text-white">Más FLOPS que Cabras</strong> dictará sesiones y{" "}
            <em>lectures</em> abiertas de Mojo y programación heterogénea, trayendo este stack por
            primera vez a la universidad.
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem
            tag="PIONEROS EN LA UNIVERSIDAD"
            title="Tecnología que Aún No Está en el Pensum"
          >
            Mientras los cursos tradicionales enseñan herramientas de hace décadas, en{" "}
            <strong className="text-mfqc-yellow">MFQC</strong> aprenderás de primera mano el
            lenguaje que está redefiniendo los <em>kernels</em> de IA y HPC moderno.
          </FeatureItem>

          <FeatureItem
            tag="HANDS-ON ABIERTO A LA COMUNIDAD"
            title="De Cero a Kernels SIMD y GPU"
            accent="cyan"
          >
            Talleres prácticos guiados por el semillero donde pasarás de entender la jerarquía de
            memoria a programar tus propios algoritmos vectorizados y en{" "}
            <strong className="text-mfqc-cyan">GPU</strong>.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
