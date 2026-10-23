import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureItem } from "../components/FeatureGrid";

export function Skillset() {
  return (
    <Slide>
      {/* 1a. SKILLSET: BAREMETAL & LINUX */}
      <SlideSection
        brand="MFQC // SKILLSET 01"
        meta="INFRA-DEVOPS & BARE-METAL"
        title={
          <>
            Infra-DevOps: <span className="text-mfqc-yellow">Sysadmin &amp; BMC</span>
          </>
        }
        lead="Administración de sistemas bare-metal y control fuera de banda desde el hardware hasta el sistema operativo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / BAREMETAL & LINUX" title="Sysadmin & Control por BMC">
            Aprovisionamiento desde cero, gestión fuera de banda (IPMI /{" "}
            <strong className="text-white">BMC</strong>), almacenamiento distribuido (NFS, Lustre) y
            ajuste del kernel Linux para exprimir cada ciclo.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 1b. SKILLSET: REDES & ORQUESTACIÓN */}
      <SlideSection
        brand="MFQC // SKILLSET 01"
        meta="HPC-OPS: REDES & SLURM"
        title={
          <>
            HPC-Ops: <span className="text-mfqc-cyan">InfiniBand &amp; Slurm</span>
          </>
        }
        lead="Operación continua de clústeres reales, colas de trabajo y compilación reproducible."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="02 / REDES & ORQUESTACIÓN"
            title="InfiniBand, Slurm & Spack"
            accent="cyan"
          >
            Redes RDMA de baja latencia, colas de trabajo con{" "}
            <strong className="text-mfqc-cyan">Slurm</strong>, compilación reproducible con{" "}
            <strong className="text-white">Spack</strong> y contenedores Apptainer para aislamiento
            seguro.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2a. SKILLSET: PARALELISMO DISTRIBUIDO */}
      <SlideSection
        brand="MFQC // SKILLSET 02"
        meta="PARALELISMO: MPI, OPENMP & SIMD"
        title={
          <>
            Modelos de Paralelismo: <span className="text-mfqc-cyan">MPI &amp; OpenMP</span>
          </>
        }
        lead="Domina la ejecución masivamente paralela desde registros en un núcleo hasta clústeres de miles de nodos."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / MODELOS DE PARALELISMO" title="Memoria Compartida y Distribuida">
            Cómputo distribuido entre múltiples nodos con{" "}
            <strong className="text-white">MPI</strong>, multihilo en memoria compartida con{" "}
            <strong className="text-white">OpenMP</strong> y vectorización profunda AVX-512 en CPU.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2b. SKILLSET: GPUS & MOJO */}
      <SlideSection
        brand="MFQC // SKILLSET 02"
        meta="ACELERADORES: MOJO & CUDA"
        title={
          <>
            Kernels en GPU: <span className="text-mfqc-yellow">Mojo 🔥 &amp; CUDA</span>
          </>
        }
        lead="Escritura de código masivamente paralelo que escala en decenas de miles de núcleos."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="02 / KERNELS & ACELERADORES"
            title="Mojo 🔥, CUDA & Jerarquías VRAM"
            accent="cyan"
          >
            Escritura de kernels de alto rendimiento, gestión de jerarquías de memoria compartida
            (SRAM / HBM) y fusión de operadores matriciales sin overhead.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 3a. SKILLSET: MÉTODOS NUMÉRICOS */}
      <SlideSection
        brand="MFQC // SKILLSET 03"
        meta="MÉTODOS NUMÉRICOS: BLAS & LAPACK"
        title={
          <>
            Cómputo Científico: <span className="text-mfqc-yellow">Álgebra Lineal</span>
          </>
        }
        lead="Traduce modelos matemáticos complejos en librerías aceleradas al límite del silicio."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / MÉTODOS NUMÉRICOS" title="Álgebra Lineal Densa y Dispersa">
            Optimización con librerías aceleradas{" "}
            <strong className="text-mfqc-yellow">BLAS / LAPACK</strong>, solucionadores iterativos
            Krylov, transformadas FFT y precisión mixta (FP64 / FP32 / FP16).
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 3b. SKILLSET: SIMULACIONES & IA */}
      <SlideSection
        brand="MFQC // SKILLSET 03"
        meta="SIMULACIONES REALES & IA"
        title={
          <>
            Ciencia Aplicada: <span className="text-mfqc-cyan">Simulaciones Reales</span>
          </>
        }
        lead="Correr código real de física, clima y modelos fundacionales que cambian el mundo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="02 / SIMULACIONES REALES"
            title="Ciencia Computacional & IA Distribuida"
            accent="cyan"
          >
            Ejecución y aceleración de códigos reales de dinámica molecular (GROMACS, LAMMPS),
            modelos climáticos globales (WRF), dinámica de fluidos (CFD) y pre-entrenamiento de
            redes neuronales.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 4a. SKILLSET: COMPILADORES & TOOLCHAINS */}
      <SlideSection
        brand="MFQC // SKILLSET 04"
        meta="TOOLCHAINS: GCC, LLVM & MLIR"
        title={
          <>
            Ecosistema: <span className="text-mfqc-cyan">Compiladores &amp; Toolchains</span>
          </>
        }
        lead="El stack profesional que utilizan los centros de supercomputación y laboratorios nacionales."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / COMPILADORES & TOOLCHAINS" title="GCC, LLVM/Clang, NVHPC & MLIR">
            Flags de optimización agresiva, vectorización automática por el compilador, inspección
            de ensamblador generado y compilación específica para cada microarquitectura.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 4b. SKILLSET: BENCHMARKING & SPACK */}
      <SlideSection
        brand="MFQC // SKILLSET 04"
        meta="BENCHMARKING & ENTORNOS"
        title={
          <>
            Herramientas: <span className="text-mfqc-yellow">Suites de Benchmarks</span>
          </>
        }
        lead="Medición científica y gestión de software reproducible a escala de clúster."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="02 / BENCHMARKING & ENTORNOS"
            title="HPL, HPCG, OSU & Módulos"
            accent="cyan"
          >
            Medición rigurosa con suites estándar del <strong className="text-white">TOP500</strong>
            , micro-benchmarks de latencia MPI (OSU Benchmarks) y gestión de paquetes con Spack y
            Lmod.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 5a. SKILLSET: HARDWARE PROFILING */}
      <SlideSection
        brand="MFQC // SKILLSET 05"
        meta="PROFILERS: PERF & NSIGHT"
        title={
          <>
            Herramientas Curiosas: <span className="text-mfqc-yellow">Hardware Profiling</span>
          </>
        }
        lead="Radiografía en vivo del procesador para encontrar exactamente dónde se pierde cada nanosegundo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / HARDWARE PROFILING" title="perf, Nsight & Contadores PMU">
            Flamegraphs, <em>cache misses</em>, <em>branch mispredictions</em>, modelo Roofline y
            trazado de kernels GPU con <strong className="text-white">NVIDIA Nsight Systems</strong>
            .
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 5b. SKILLSET: EBPF & KERNEL */}
      <SlideSection
        brand="MFQC // SKILLSET 05"
        meta="OBSERVABILIDAD: eBPF EN LINUX"
        title={
          <>
            Superpoderes en el Kernel: <span className="text-mfqc-cyan">eBPF</span>
          </>
        }
        lead="Instrumentación dinámica del kernel Linux en caliente sin reiniciar ni recompilar."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="02 / KERNEL SUPERPOWERS" title="Observabilidad con eBPF" accent="cyan">
            Inspección no invasiva de eventos del kernel para analizar latencia de paquetes de red,{" "}
            <em>syscalls</em> lentas, cuellos de botella en I/O de disco y comportamiento del
            planificador de CPU.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 6a. SKILLSET: SISTEMAS DE BAJA LATENCIA */}
      <SlideSection
        brand="MFQC // SKILLSET 06"
        meta="MENTALIDAD: BAJA LATENCIA"
        title={
          <>
            Mentalidad de Performance: <span className="text-mfqc-yellow">Baja Latencia</span>
          </>
        }
        lead="Lo que aprendes en HPC transforma cómo diseñas cualquier sistema informático en tu carrera."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / BACKEND & BASES DE DATOS" title="Sistemas de Alto Rendimiento">
            Localidad en caché, estructuras de datos <em>cache-friendly</em> (SoA vs AoS),
            concurrencia sin bloqueos (lock-free) y optimización radical de consultas e I/O en
            servicios críticos de backend.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 6b. SKILLSET: MECHANICAL SYMPATHY */}
      <SlideSection
        brand="MFQC // SKILLSET 06"
        meta="MENTALIDAD: MECHANICAL SYMPATHY"
        title={
          <>
            Ingeniería Basada en Datos: <span className="text-mfqc-cyan">Mechanical Sympathy</span>
          </>
        }
        lead="Entender la máquina real para no programar a ciegas sobre capas de abstracción."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="02 / FRONTEND, CLOUD & APPS"
            title="Diseño Conectado al Silicio"
            accent="cyan"
          >
            <em>Mechanical sympathy</em> en cualquier stack tecnológico: medir antes de optimizar,
            eliminar trabajo redundante y saber exactamente qué sucede en el silicio desde el
            navegador hasta el servidor.
          </FeatureItem>
        </div>
      </SlideSection>
    </Slide>
  );
}
