import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureItem } from "../components/FeatureGrid";

export function WhatIsHPC() {
  return (
    <Slide>
      {/* 1. CLÚSTER: CÓMPUTO */}
      <SlideSection
        brand="MFQC // HPC"
        meta="ARQUITECTURA DE CLÚSTER"
        title={
          <>
            ¿Qué es un clúster <span className="text-mfqc-yellow">HPC</span>?
          </>
        }
        lead="Múltiples servidores interconectados que operan como un solo supercomputador para resolver problemas masivos."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / CÓMPUTO" title="Nodos Densos">
            Servidores con múltiples CPUs multinúcleo de arquitectura servidor y aceleradores GPU
            trabajando de forma coordinada en paralelo.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2. CLÚSTER: RED */}
      <SlideSection
        brand="MFQC // RED"
        meta="INTERCONEXIÓN DE BAJA LATENCIA"
        title={
          <>
            El Tejido del Clúster: <span className="text-mfqc-cyan">Interconexión</span>
          </>
        }
        lead="Sin una red ultrarrápida, los servidores individuales son incapaces de colaborar como un solo sistema."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="02 / RED" title="InfiniBand & RDMA" accent="cyan">
            Redes de ultra baja latencia (a nivel de microsegundos) y cientos de gigabits por
            segundo para mover tensores y mensajes sin despertar a la CPU.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 3. ALMACENAMIENTO PARALELO */}
      <SlideSection
        brand="MFQC // STORAGE"
        meta="SISTEMAS DE ARCHIVOS DISTRIBUIDOS"
        title={
          <>
            Datos Masivos: <span className="text-mfqc-yellow">Almacenamiento Paralelo</span>
          </>
        }
        lead="Un supercomputador requiere que miles de núcleos lean y escriban terabytes por segundo simultáneamente."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="03 / STORAGE" title="Sistemas Lustre, BeeGFS & NFS">
            Sistemas de archivos distribuidos y paralelos accesibles concurrentemente por todos los
            nodos con ancho de banda agregado extremo.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 4. PLANIFICADOR & ORQUESTACIÓN */}
      <SlideSection
        brand="MFQC // ORQUESTACIÓN"
        meta="EL PLANIFICADOR CENTRAL"
        title={
          <>
            El Cerebro del Clúster: <span className="text-mfqc-cyan">Slurm</span>
          </>
        }
        lead="Orquestar quién corre qué, en qué nodos y con qué recursos exige un planificador riguroso."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="04 / SCHEDULER" title="Colas y Asignación de Recursos" accent="cyan">
            El sistema de colas (Slurm Workload Manager) que prioriza trabajos, balancea la carga
            térmica y garantiza que cada usuario obtenga los núcleos y GPUs asignados.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 5. SCC: LÍMITE ENERGÉTICO */}
      <SlideSection
        brand="MFQC // SCC"
        meta="STUDENT CLUSTER COMPETITION"
        title={
          <>
            ¿Qué es <span className="text-mfqc-yellow">SCC</span>? El Desafío
          </>
        }
        lead="Student Cluster Competition: Diseñar, levantar y exprimir un supercomputador real bajo un estricto presupuesto físico."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="3000 W / LÍMITE" title="Hardware & Energía">
            Configurar desde cero Linux, redes, compiladores y librerías numéricas sin exceder el
            techo de 3,000 Watts medido segundo a segundo por medidores de potencia.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 6. SCC: LA CARRERA */}
      <SlideSection
        brand="MFQC // SCC"
        meta="48 HORAS NON-STOP"
        title={
          <>
            SCC: <span className="text-mfqc-cyan">Benchmarks &amp; Ciencia Real</span>
          </>
        }
        lead="Una carrera contra reloj donde cada segundo de cálculo decide el podio internacional."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="48 HRS / CARRERA" title="Benchmarks & Aplicaciones" accent="cyan">
            Romper récords de FLOPS en <strong className="text-mfqc-yellow">HPL y HPCG</strong>, y
            acelerar aplicaciones científicas reales (clima, dinámica molecular, astrofísica e IA)
            en tiempo récord.
          </FeatureItem>
        </div>
      </SlideSection>
    </Slide>
  );
}
