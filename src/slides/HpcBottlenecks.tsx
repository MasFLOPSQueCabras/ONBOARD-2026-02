import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function HpcBottlenecks() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // BOTTLENECKS"
        meta="SYS.04A — MEMORY WALL & COMUNICACIÓN"
        title={
          <>
            Los Muros del HPC: <span className="text-mfqc-yellow">Memory Wall</span> &amp;{" "}
            <span className="text-mfqc-cyan">Switches</span> 🧱
          </>
        }
        lead="Hoy calcular en punto flotante es rápido y barato; el verdadero cuello de botella es mover los bytes a tiempo."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / THE MEMORY WALL" title="Cómputo Hambriento de Datos">
            Los núcleos multiplican matrices mucho más rápido de lo que la RAM o HBM puede
            alimentarlos: mover un byte desde memoria consume{" "}
            <strong className="text-mfqc-yellow">órdenes de magnitud más energía y tiempo</strong>{" "}
            que la operación matemática.
          </FeatureItem>

          <FeatureItem
            tag="02 / SWITCHES & CONGESTIÓN DE RED"
            title="Latencia Colectiva a Escala"
            accent="cyan"
          >
            Al sincronizar miles de aceleradores (<em>AllReduce</em> / MPI), los{" "}
            <strong className="text-mfqc-cyan">switches</strong> de alta radix (NVSwitch, InfiniBand
            Quantum, Ultra Ethernet) enfrentan contención de colas y <em>tail latency</em> que
            frenan todo el clúster.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // FÍSICA EXTREMA"
        meta="SYS.04B — DEL COBRE Y SILICIO A LA FOTÓNICA"
        title={
          <>
            Límite Físico: Del <span className="text-mfqc-yellow">Silicio y Cobre</span> a la{" "}
            <span className="text-mfqc-cyan">Fotónica</span> 💡
          </>
        }
        lead="Las señales eléctricas en cobre y la litografía tradicional están chocando contra las leyes de la física a escala atómica."
      >
        <FeatureGrid>
          <FeatureItem
            tag="01 / LITOGRAFÍA EXTREMA & CHIPLETS"
            title="Nodos Angstrom, EUV High-NA & 3D"
          >
            Al límite del silicio monolítico, la industria recurre a litografía{" "}
            <strong className="text-white">EUV High-NA</strong>, transistores{" "}
            <em>Gate-All-Around (GAA)</em>, alimentación trasera (<em>Backside Power</em>) y
            empaquetado 2.5D/3D de <strong className="text-mfqc-yellow">chiplets</strong> (
            <em>CoWoS</em>).
          </FeatureItem>

          <FeatureItem
            tag="02 / EL COBRE SE QUEDA CORTO"
            title="Fibra Óptica & Co-Packaged Optics (CPO)"
            accent="cyan"
          >
            A 800G y 1.6T, el cobre sufre atenuación severa a pocos metros; escalar exige{" "}
            <strong className="text-mfqc-cyan">interconexión óptica</strong> y{" "}
            <strong className="text-white">fotónica integrada en el paquete (CPO)</strong> llevando
            luz directo al chip.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // TERMODINÁMICA & ENERGÍA"
        meta="SYS.04C — ENFRIAMIENTO & DATACENTERS DE GIGAWATT"
        title={
          <>
            Enfriamiento &amp; Crisis de <span className="text-mfqc-yellow">Datacenters</span> de{" "}
            <span className="text-mfqc-cyan">Gigawatt</span> ⚡
          </>
        }
        lead="Con racks superando los 100 kW, el techo del supercómputo y la IA moderna ya lo dictan la termodinámica y la red eléctrica."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / TERMODINÁMICA EXTREMA" title="Direct Liquid Cooling & Inmersión">
            El aire ya no basta para disipar chips de{" "}
            <strong className="text-mfqc-yellow">1,000+ W</strong>: los clústeres actuales exigen{" "}
            <strong className="text-white">placas frías de líquido directo al chip (DLC)</strong> o
            enfriamiento por inmersión bifásica.
          </FeatureItem>

          <FeatureItem
            tag="02 / LA BARRERA DEL GIGAWATT"
            title="Datacenters de 1+ GW & Red Eléctrica"
            accent="cyan"
          >
            Los nuevos complejos de IA y HPC demandan de{" "}
            <strong className="text-mfqc-cyan">cientos de megavatios a varios gigavatios</strong>{" "}
            (el consumo de una ciudad entera), impulsando energía nuclear dedicada (<em>SMRs</em>) y
            eficiencia extrema por vatio.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SOFTWARE CHALLENGE"
        meta="SYS.04D — DOMAR A LA BESTIA: PROGRAMABILIDAD"
        title={
          <>
            Domar a la Bestia: El Reto de la{" "}
            <span className="text-mfqc-yellow">Programabilidad</span> 🐉
          </>
        }
        lead="Construir un monstruo de millones de núcleos, switches ópticos y memoria jerárquica es solo la mitad del reto: ahora hay que programarlo."
      >
        <FeatureGrid>
          <FeatureItem
            tag="01 / COMPLEJIDAD EXPONENCIAL"
            title="Sincronizar Millones de Hilos sin Cuellos"
          >
            Exprimir los FLOPS reales exige solapar cómputo con transferencias{" "}
            <strong className="text-white">RDMA</strong>, particionar tensores en{" "}
            <strong className="text-mfqc-yellow">SRAM / HBM</strong> y evitar{" "}
            <em>bank conflicts</em> a través de topologías complejas.
          </FeatureItem>

          <FeatureItem
            tag="02 / DOMAR A LA BESTIA CON SOFTWARE"
            title="Abstraer sin Perder un Nanosegundo"
            accent="cyan"
          >
            De nada sirve un clúster de gigavatios si el software desperdicia el 70% del silicio: el
            gran desafío hoy es crear{" "}
            <strong className="text-mfqc-cyan">compiladores y lenguajes unificados</strong> capaces
            de domar el hardware.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
