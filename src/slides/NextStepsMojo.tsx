import { Slide } from "../components/RevealDeck";
import { MojoCodeBox } from "../components/MojoCodeBox";
import { SlideSection } from "../components/SlideSection";
import { StatementSlide } from "../components/StatementSlide";
import { FeatureItem } from "../components/FeatureGrid";

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
      {/* 1a. STATEMENT: TWO-LANGUAGE PROBLEM */}
      <StatementSlide
        brand="MFQC // NEXT: MOJO 🔥"
        meta="FIN DEL TWO-LANGUAGE PROBLEM"
        tag="EL PROBLEMA HISTÓRICO"
        statement={
          <>
            Erradicando el <span className="text-mfqc-yellow">«Two-Language Problem»</span>:
            prototipar en Python fácil y reescribir todo en C++/CUDA para correr a velocidad real.
          </>
        }
        detail="Mojo unifica ambos mundos: sintaxis pura y legible como Python, pero con tipado estático, ownership de memoria sin garbage collector, vectorización SIMD nativa y rendimiento bare-metal al nivel de C++."
        accent="yellow"
      />

      {/* 1b. MLIR DE PRIMERA CLASE */}
      <SlideSection
        brand="MFQC // NEXT: MOJO 🔥"
        meta="ARQUITECTURA COMPILADOR: MLIR"
        title={
          <>
            Un Solo Lenguaje: <span className="text-mfqc-cyan">Todo el Silicio</span>
          </>
        }
        lead="Diseñado desde el día cero sobre MLIR para compilar directo a hardware heterogéneo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="MLIR DE PRIMERA CLASE"
            title="Sin Dependencia de Fabricante"
            accent="cyan"
          >
            Construido por Chris Lattner (creador de LLVM, Clang y Swift) sobre{" "}
            <strong className="text-mfqc-cyan">MLIR</strong> para compilar hacia{" "}
            <strong className="text-white">CPUs x86/ARM, GPUs NVIDIA/AMD, TPUs y ASICs</strong> sin
            quedar atado al stack propietario de ninguna compañía.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2a. CONCEPTO SIMT EN GPU */}
      <SlideSection
        brand="MFQC // MOJO GPU"
        meta="PARALELISMO SIMT"
        title={
          <>
            Kernel GPU: <span className="text-mfqc-cyan">Ejecución SIMT</span>
          </>
        }
        lead="Miles de hilos ejecutando la misma instrucción sobre distintos datos en paralelo masivo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="SIMT EXECUTION"
            title="De Bucle Secuencial a Malla de Hilos"
            accent="cyan"
          >
            En lugar de iterar secuencialmente con un <code>for</code>, cada hilo de la GPU calcula
            su identificador único (<code>tid</code>) a partir de bloques y dimensiones, sumando un
            elemento del vector simultáneamente y compilando directo a PTX/AMDGPU vía MLIR.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2b. KERNEL EN CÓDIGO VIVO */}
      <SlideSection
        brand="MFQC // MOJO GPU"
        meta="CÓDIGO: VECADD_KERNEL.MOJO"
        title={
          <>
            Kernel en <span className="text-mfqc-yellow">Código Vivo 🔥</span>
          </>
        }
        lead="Sintaxis pura, limpia y directa compilada a código máquina GPU sin overhead de runtime."
      >
        <div className="w-full max-w-[1100px]">
          <MojoCodeBox
            header="vecadd_kernel.mojo — GPU Vector Addition"
            code={VECADD_MOJO}
            highlightLines={[3, 9, 12]}
            footer="// Compilado directo a código máquina GPU vía MLIR"
          />
        </div>
      </SlideSection>

      {/* 3a. STATEMENT: LECTURES PIONERAS */}
      <StatementSlide
        brand="MFQC // LECTURES"
        meta="LECTURES PIONERAS POR MFQC"
        tag="PIONEROS EN LA UNIVERSIDAD"
        statement={
          <>
            MFQC dictará por primera vez en la universidad{" "}
            <span className="text-mfqc-yellow">lectures abiertas de Mojo 🔥</span> y cómputo
            heterogéneo.
          </>
        }
        detail="Mientras los cursos estándar enseñan herramientas de hace décadas, en el semillero aprenderás directamente el lenguaje que está reescribiendo los kernels de IA y computación masiva en la industria."
        accent="yellow"
      />

      {/* 3b. HANDS-ON ABIERTO */}
      <SlideSection
        brand="MFQC // LECTURES"
        meta="TALLERES HANDS-ON ABIERTOS"
        title={
          <>
            Talleres Hands-on: <span className="text-mfqc-cyan">De Cero a Kernels</span>
          </>
        }
        lead="Aprender haciendo: sesiones prácticas guiadas por los integrantes del semillero."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="HANDS-ON ABIERTO A LA COMUNIDAD"
            title="De la Arquitectura al Algoritmo"
            accent="cyan"
          >
            Talleres prácticos abiertos donde pasarás de entender cómo funciona la jerarquía de
            memoria y los registros SIMD a escribir y optimizar tus propios algoritmos acelerados en{" "}
            <strong className="text-mfqc-cyan">GPU</strong>.
          </FeatureItem>
        </div>
      </SlideSection>
    </Slide>
  );
}
