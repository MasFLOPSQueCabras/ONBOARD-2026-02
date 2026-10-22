import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function HpcMagnitude() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="SYS.02A — CÓMPUTO PERSONAL: PORTÁTIL VS. DESKTOP"
        title={
          <>
            Cómputo Personal: <span className="text-mfqc-yellow">Portátil</span> vs.{" "}
            <span className="text-mfqc-cyan">RTX 5090</span>
          </>
        }
        lead="Antes de escalar a un supercomputador, miremos el techo físico del hardware personal más potente de hoy."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / PORTÁTIL ULTRACOMPACTO" title="Apple Silicon (Serie M / M6)">
            Un SoC unificado de ~40–100 W que integra CPU, GPU y NPU compartiendo memoria (~400–546
            GB/s): extraordinaria eficiencia por vatio, pero limitado térmicamente para cargas
            masivas sostenidas.
          </FeatureItem>

          <FeatureItem
            tag="02 / DESKTOP ENTUSIASTA"
            title="Intel / AMD + NVIDIA RTX 5090"
            accent="cyan"
          >
            Una torre tope de gama con GPU <strong className="text-mfqc-cyan">RTX 5090</strong> (575
            W, 1.79 TB/s GDDR7) entrega ~105 TFLOPS FP32 en local, pero sigue atrapada en una sola
            placa madre, enlaces PCIe y red doméstica.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="SYS.02B — DEL PC AL NODO Y RED DE CLÚSTER"
        title={
          <>
            Salto Cuántico: <span className="text-mfqc-yellow">Nodo HPC</span> &amp;{" "}
            <span className="text-mfqc-cyan">Red RDMA</span>
          </>
        }
        lead="Un clúster no es una sala llena de PCs comunes: cada servidor y cada tarjeta de red están diseñados para escalar sin cuellos de botella."
      >
        <FeatureGrid>
          <FeatureItem
            tag="01 / NODO DE SUPERCOMPUTACIÓN"
            title="Multi-Socket EPYC/Xeon + 8× GPUs HBM3e"
          >
            Cada nodo integra múltiples CPUs de servidor y hasta 8 aceleradores con memoria{" "}
            <strong className="text-mfqc-yellow">HBM3e (&gt;8 TB/s por chip)</strong> unidos
            internamente por enlaces de alta velocidad (NVLink / Infinity Fabric).
          </FeatureItem>

          <FeatureItem
            tag="02 / INTERCONEXIÓN & RDMA"
            title="NVIDIA Mellanox, AMD Pensando & DPUs"
            accent="cyan"
          >
            NICs de 400–800 Gb/s (<strong className="text-white">Mellanox ConnectX</strong>,{" "}
            <strong className="text-white">AMD Pensando</strong>) y{" "}
            <strong className="text-mfqc-cyan">DPUs</strong> mueven datos directo entre memorias
            remotas vía <strong className="text-white">RDMA</strong> sin pasar por el CPU.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // TOP500"
        meta="SYS.02C — LA CIMA MUNDIAL: TOP500"
        title={
          <>
            La Magnitud del <span className="text-mfqc-yellow">TOP500</span>: Era{" "}
            <span className="text-mfqc-cyan">Exascale</span> ⚡
          </>
        }
        lead={
          <>
            En el ranking mundial <strong className="text-white">TOP500</strong>, miles de estos
            nodos se unen para superar el <strong className="text-mfqc-yellow">ExaFLOP</strong>{" "}
            (10¹⁸ operaciones FP64 por segundo en HPL).
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem tag="#1 TOP500 // 1.74 EXAFLOPS" title="El Capitan, Frontier & Aurora">
            <strong className="text-white">El Capitan</strong> alcanza{" "}
            <strong className="text-mfqc-yellow">1,742,000 TFLOPS FP64</strong> con más de{" "}
            <strong className="text-white">11 millones de núcleos</strong> (AMD MI300A) y ~30 MW: lo
            que a tu portátil le tomaría <em>siglos</em>, aquí ocurre en <em>minutos</em>.
          </FeatureItem>

          <FeatureItem tag="ESCALA PLANETARIA" title="Miles de Nodos al Microsegundo" accent="cyan">
            Cientos de racks interconectados por topologías <em>Dragonfly</em> o <em>Fat-Tree</em>{" "}
            que coordinan millones de hilos simultáneos como si fueran un único supercomputador.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // WORKLOADS"
        meta="SYS.02D — DEMANDAS ACTUALES: IA VS. CIENCIA"
        title={
          <>
            Demandas Actuales: <span className="text-mfqc-yellow">IA</span> vs.{" "}
            <span className="text-mfqc-cyan">Cómputo Científico</span> 🔬
          </>
        }
        lead="Dos grandes fuerzas empujan hoy los límites de los supercomputadores con perfiles de cómputo radicalmente distintos."
      >
        <FeatureGrid>
          <FeatureItem
            tag="01 / IA FUNDACIONAL & RAZONAMIENTO"
            title="Tensores Densos, FP8/FP4 & KV-Cache"
          >
            Entrenar y servir modelos de billones de parámetros exige multiplicar matrices gigantes
            en baja precisión (<strong className="text-mfqc-yellow">BF16 / FP8 / FP4</strong>),
            terabytes de <strong className="text-white">HBM</strong> para el <em>KV-cache</em> y
            sincronización <em>AllReduce</em> masiva.
          </FeatureItem>

          <FeatureItem
            tag="02 / CÓMPUTO CIENTÍFICO & SIMULACIÓN"
            title="Rigor FP64, Álgebra Dispersa & Física"
            accent="cyan"
          >
            Fusión nuclear, clima, CFD y dinámica molecular exigen doble precisión estricta (
            <strong className="text-mfqc-cyan">FP64</strong>) sin deriva numérica, acceso irregular
            a memoria (<em>sparse solvers</em>, FFTs) e intercambio de fronteras MPI.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
