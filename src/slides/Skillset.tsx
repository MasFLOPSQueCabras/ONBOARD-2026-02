import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function Skillset() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // SKILLSET 01"
        meta="SYS.06A — INFRA-DEVOPS & HPC-OPS"
        title={
          <>
            Infra-DevOps &amp; <span className="text-mfqc-yellow">HPC-Ops</span> 🛠️
          </>
        }
        lead="Administración de sistemas bare-metal y operación de clústeres reales desde el firmware hasta el orquestador."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / BAREMETAL & LINUX" title="Sysadmin & Control por BMC">
            Aprovisionamiento desde cero, gestión fuera de banda (IPMI /{" "}
            <strong className="text-white">BMC</strong>), almacenamiento distribuido (NFS, Lustre) y
            ajuste del kernel Linux.
          </FeatureItem>

          <FeatureItem
            tag="02 / REDES & ORQUESTACIÓN"
            title="InfiniBand, Slurm & Spack"
            accent="cyan"
          >
            Redes RDMA de baja latencia, colas de trabajo con{" "}
            <strong className="text-mfqc-cyan">Slurm</strong>, compilación reproducible con{" "}
            <strong className="text-white">Spack</strong> y contenedores Apptainer.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SKILLSET 02"
        meta="SYS.06B — GPUs Y ACELERADORES"
        title={
          <>
            Programación en <span className="text-mfqc-cyan">GPUs</span> &amp;{" "}
            <span className="text-mfqc-yellow">Aceleradores</span> 🚀
          </>
        }
        lead="Domina la ejecución masivamente paralela desde registros vectoriales en CPU hasta miles de núcleos en GPU."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / MODELOS DE PARALELISMO" title="MPI, OpenMP & SIMD">
            Cómputo distribuido entre múltiples nodos con{" "}
            <strong className="text-white">MPI</strong>, multihilo en memoria compartida con{" "}
            <strong className="text-white">OpenMP</strong> y vectorización AVX-512.
          </FeatureItem>

          <FeatureItem
            tag="02 / KERNELS & ACELERADORES"
            title="Mojo 🔥, CUDA & Memoria GPU"
            accent="cyan"
          >
            Escritura de kernels de alto rendimiento, jerarquía de memoria compartida (SRAM / HBM) y
            fusión de operadores sin overhead.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SKILLSET 03"
        meta="SYS.06C — CÓMPUTO CIENTÍFICO"
        title={
          <>
            Cómputo <span className="text-mfqc-yellow">Científico</span> &amp;{" "}
            <span className="text-mfqc-cyan">Simulaciones</span> 🔬
          </>
        }
        lead="Traduce modelos matemáticos, físicos y de IA en código capaz de escalar a cientos de núcleos y GPUs."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / MÉTODOS NUMÉRICOS" title="Álgebra Lineal Densa y Dispersa">
            Optimización con librerías <strong className="text-mfqc-yellow">BLAS / LAPACK</strong>,
            solucionadores iterativos, FFTs y precisión mixta (FP64 / FP32 / FP16).
          </FeatureItem>

          <FeatureItem
            tag="02 / SIMULACIONES REALES"
            title="Ciencia Computacional & IA"
            accent="cyan"
          >
            Ejecución de códigos reales de dinámica molecular, clima, dinámica de fluidos (CFD) y
            entrenamiento distribuido de modelos.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SKILLSET 04"
        meta="SYS.06D — HERRAMIENTAS EN HPC"
        title={
          <>
            Ecosistema y <span className="text-mfqc-cyan">Herramientas en HPC</span> 🧰
          </>
        }
        lead="El stack profesional que utilizan los centros de supercomputación y laboratorios nacionales en el mundo."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / COMPILADORES & TOOLCHAINS" title="GCC, LLVM/Clang, NVHPC & MLIR">
            Flags de optimización agresiva, vectorización automática, lectura de ensamblador y
            compilación específica por microarquitectura.
          </FeatureItem>

          <FeatureItem
            tag="02 / BENCHMARKING & ENTORNOS"
            title="HPL, HPCG, OSU & Módulos"
            accent="cyan"
          >
            Medición rigurosa con suites estándar del <strong className="text-white">TOP500</strong>
            , micro-benchmarks de latencia MPI y gestión de entornos con Lmod y Spack.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SKILLSET 05"
        meta="SYS.06E — PROFILERS & eBPF"
        title={
          <>
            Herramientas Curiosas: <span className="text-mfqc-yellow">Profilers</span> &amp;{" "}
            <span className="text-mfqc-cyan">eBPF</span> 🔍
          </>
        }
        lead="Radiografía en vivo del hardware y del kernel para encontrar exactamente dónde se pierde cada nanosegundo."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / HARDWARE PROFILING" title="perf, Nsight & Contadores PMU">
            Flamegraphs, <em>cache misses</em>, <em>branch mispredictions</em>, modelo Roofline y
            trazado de kernels GPU con <strong className="text-white">NVIDIA Nsight</strong>.
          </FeatureItem>

          <FeatureItem tag="02 / KERNEL SUPERPOWERS" title="Observabilidad con eBPF" accent="cyan">
            Instrumentación dinámica del kernel Linux para analizar latencia de red,{" "}
            <em>syscalls</em>, I/O de disco y planificador de CPU sin recompilar.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SKILLSET 06"
        meta="SYS.06F — MENTALIDAD DE PERFORMANCE"
        title={
          <>
            Mentalidad de <span className="text-mfqc-yellow">Performance</span> ⚡
          </>
        }
        lead={
          <>
            Lo que aprendes en HPC transforma cómo diseñas{" "}
            <strong className="text-white">cualquier software</strong>: backend, bases de datos o
            frontend.
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem tag="01 / BACKEND & BASES DE DATOS" title="Sistemas de Baja Latencia">
            Localidad en caché, estructuras de datos <em>cache-friendly</em>, concurrencia sin
            contención y optimización de consultas e I/O en servicios críticos.
          </FeatureItem>

          <FeatureItem
            tag="02 / FRONTEND, CLOUD & APPS"
            title="Ingeniería Basada en Datos"
            accent="cyan"
          >
            <em>Mechanical sympathy</em> en cualquier stack: medir antes de optimizar, eliminar
            trabajo redundante y acelerar desde el navegador hasta el servidor.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
