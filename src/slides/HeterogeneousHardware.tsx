import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function HeterogeneousHardware() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // PARADIGMA"
        meta="SYS.05A — THE FREE LUNCH IS OVER"
        title={
          <>
            <span className="text-mfqc-yellow">&ldquo;The Free Lunch Is Over&rdquo;</span> &amp;{" "}
            <span className="text-mfqc-cyan">Heterogeneidad</span>
          </>
        }
        lead="Durante décadas bastaba esperar un CPU con más GHz para que todo corriera más rápido. Esa era terminó: hoy el rendimiento exige programación heterogénea."
      >
        <FeatureGrid>
          <FeatureItem
            tag="MOTTO 01 // THE FREE LUNCH IS OVER"
            title="Límites Físicos del Silicio Tradicional"
          >
            Con el fin de la escala de Dennard y los límites térmicos, la frecuencia de reloj se
            estancó; ganar órdenes de magnitud hoy exige{" "}
            <strong className="text-white">paralelismo explícito</strong> y diseño consciente del
            hardware.
          </FeatureItem>

          <FeatureItem
            tag="MOTTO 02 // HETEROGENEOUS PROGRAMMING"
            title="Orquestando Silicio Diverso"
            accent="cyan"
          >
            El ingeniero de HPC moderno coordina simultáneamente{" "}
            <strong className="text-mfqc-cyan">CPUs, GPUs, TPUs, DPUs, FPGAs y ASICs</strong>,
            despachando cada kernel al motor físico diseñado para ejecutarlo mejor.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // ASIC & AI HW"
        meta="SYS.05B — HARDWARE NO COTIDIANO: TPU & TENSTORRENT"
        title={
          <>
            Hardware No Cotidiano: <span className="text-mfqc-yellow">TPUs</span> &amp;{" "}
            <span className="text-mfqc-cyan">Tenstorrent</span> 🧠
          </>
        }
        lead="Más allá de las GPUs tradicionales, los centros de supercómputo e IA despliegan arquitecturas radicalmente distintas."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / GOOGLE CLOUD TPU" title="Arreglos Sistólicos (MXU) & Óptica OCS">
            <strong className="text-white">Tensor Processing Units:</strong> matrices sistólicas que
            multiplican tensores haciendo fluir datos directamente entre celdas sin{" "}
            <em>instruction fetch</em> por hilo, unidas por miles en <em>pods</em> ópticos 3D.
          </FeatureItem>

          <FeatureItem
            tag="02 / TENSTORRENT // JIM KELLER"
            title="Malla RISC-V Tensix & Network-on-Chip"
            accent="cyan"
          >
            Arquitectura de cuadrícula con núcleos{" "}
            <strong className="text-mfqc-cyan">Tensix</strong> (5 motores{" "}
            <strong className="text-white">RISC-V</strong> + unidad matricial/vectorial + SRAM
            local) comunicados por un <strong className="text-white">NoC 2D</strong> explícito sin
            cachés coherentes clásicas.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SMARTNICS & DPUS"
        meta="SYS.05C — REDES QUE COMPUTAN: RDMA, NICs & DPUs"
        title={
          <>
            Redes que Computan: <span className="text-mfqc-yellow">RDMA</span>,{" "}
            <span className="text-mfqc-cyan">NICs &amp; DPUs</span> 🌐
          </>
        }
        lead="En HPC la red no es un cable pasivo: es un acelerador programable que mueve terabytes por segundo sin despertar al sistema operativo."
      >
        <FeatureGrid>
          <FeatureItem
            tag="01 / NICs DE ULTRA BAJA LATENCIA {RDMA}"
            title="NVIDIA Mellanox & AMD Pensando"
          >
            Adaptadores <strong className="text-white">Mellanox ConnectX</strong> (InfiniBand /
            RoCE) y <strong className="text-mfqc-yellow">AMD Pensando Pollara</strong> leen y
            escriben directo en la RAM o VRAM de otro nodo (<em>GPUDirect RDMA</em>) con{" "}
            <em>kernel bypass</em> y latencias de ~1 μs.
          </FeatureItem>

          <FeatureItem
            tag="02 / DATA PROCESSING UNITS (DPUs)"
            title="BlueField & In-Network Computing"
            accent="cyan"
          >
            Las <strong className="text-mfqc-cyan">DPUs</strong> integran núcleos ARM y motores de
            paquetes en la propia tarjeta de red para descargar almacenamiento paralelo, telemetría
            y operaciones colectivas MPI (<em>SHARP</em>) directamente en el cable.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
