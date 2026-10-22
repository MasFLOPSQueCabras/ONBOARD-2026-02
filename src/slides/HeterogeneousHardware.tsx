import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function HeterogeneousHardware() {
  return (
    <Slide>
      {/* 1. THE FREE LUNCH IS OVER — 2 Cajas para los dos Lemas */}
      <SlideSection
        brand="MFQC // PARADIGMA"
        meta="SYS.05A — THE FREE LUNCH IS OVER"
        title={
          <>
            <span className="text-mfqc-yellow">&ldquo;The Free Lunch Is Over&rdquo;</span> &amp;{" "}
            <span className="text-mfqc-cyan">Heterogeneidad</span> 🍕
          </>
        }
        lead="Durante décadas bastaba esperar un nuevo CPU con más frecuencia de reloj para que todo el software corriera más rápido gratis. Esa era murió."
      >
        <FeatureGrid>
          <FeatureItem
            tag="MOTTO 01 // THE FREE LUNCH IS OVER"
            title="Límites Térmicos & Fin de la Escala Dennard"
          >
            A principios de los 2000, la física impuso un freno: aumentar la frecuencia de reloj
            disparaba el calor exponencialmente. El rendimiento ya no viene de GHz gratis, sino de
            paralelismo masivo, arquitecturas especializadas y algoritmos diseñados conscientemente
            para la máquina.
          </FeatureItem>

          <FeatureItem
            tag="MOTTO 02 // HETEROGENEOUS PROGRAMMING"
            title="Orquestando Silicio Especializado"
            accent="cyan"
          >
            El paradigma moderno de HPC consiste en no delegar todo a un solo chip de propósito
            general: coordinamos simultáneamente{" "}
            <strong className="text-mfqc-cyan">
              CPUs de control, GPUs masivas, TPUs matriciales, DPUs y ASICs
            </strong>
            , enviando cada porción del cálculo al silicio que la ejecuta con la máxima eficiencia
            energética.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      {/* 2. GOOGLE CLOUD TPU */}
      <SlideSection
        brand="MFQC // ARQUITECTURA ASIC"
        meta="SYS.05B — GOOGLE CLOUD TPU: MATRICES SISTÓLICAS"
        title={
          <>
            Hardware No Cotidiano: <span className="text-mfqc-yellow">Google Cloud TPU</span> 🧠
          </>
        }
        lead="Diseñadas exclusivamente para el álgebra de tensores de redes neuronales, las Tensor Processing Units desechan gran parte del overhead de una GPU genérica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            En lugar de leer y escribir registros por cada hilo en cada ciclo, la Matrix Multiply
            Unit (<strong className="text-mfqc-yellow">MXU</strong>) de una TPU hace fluir los datos
            como en una onda cardíaca (sístole): las entradas y pesos se deslizan rítmicamente entre
            celdas acumuladoras adyacentes sin pasar por el banco de registros intermedio,
            minimizando el movimiento de datos y maximizando la densidad de operaciones por vatio.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            A escala de clúster, miles de TPUs (v4, v5p) se interconectan en{" "}
            <strong className="text-mfqc-cyan">toros tridimensionales directos</strong> mediante
            conmutación óptica (
            <strong className="text-white">Optical Circuit Switches - OCS</strong>) con espejos
            micrométricos MEMS que redirigen haces de luz en tiempo real, permitiendo reconfigurar
            la topología física del supercomputador según el grafo específico del modelo.
          </p>
        </div>
      </SlideSection>

      {/* 3. TENSTORRENT & JIM KELLER */}
      <SlideSection
        brand="MFQC // RISC-V & MALLA 2D"
        meta="SYS.05C — TENSTORRENT & JIM KELLER: RISC-V TENSIX"
        title={
          <>
            Hardware No Cotidiano: <span className="text-mfqc-cyan">Tenstorrent</span> &amp;{" "}
            <span className="text-mfqc-yellow">Tensix</span> ⚙️
          </>
        }
        lead="Liderada por la leyenda del silicio Jim Keller, Tenstorrent propone una arquitectura modular basada en RISC-V orientada al flujo espacial de grafos en silicio."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Cada procesador Tenstorrent (Wormhole, Blackhole) contiene una cuadrícula masiva de
            núcleos <strong className="text-mfqc-cyan">Tensix</strong>. Cada núcleo combina cinco
            micro-procesadores <strong className="text-white">RISC-V</strong> ("baby cores")
            dedicados a orquestar paquetes y formatos numéricos, junto con motores matemáticos
            matriciales y memoria SRAM ultrarrápida acoplada directamente al cómputo.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            En lugar de gastar silicio y vatios en mantener coherencia de caché global entre cientos
            de núcleos, Tenstorrent conecta su cuadrícula mediante una{" "}
            <strong className="text-mfqc-yellow">red en chip (NoC) bidimensional</strong>: el
            compilador proyecta el grafo neuronal directamente sobre la topología física, moviendo
            paquetes de datos de núcleo a núcleo como un río programable sin atascos en memoria
            externa.
          </p>
        </div>
      </SlideSection>

      {/* 4. RDMA & KERNEL BYPASS */}
      <SlideSection
        brand="MFQC // REDES DE ULTRA BAJA LATENCIA"
        meta="SYS.05D — RDMA & KERNEL BYPASS: CERO COPIAS"
        title={
          <>
            Redes que Vuelan: <span className="text-mfqc-yellow">RDMA</span> &amp;{" "}
            <span className="text-mfqc-cyan">Kernel Bypass a ~1 μs</span> ⚡
          </>
        }
        lead="En HPC la tarjeta de red no espera al sistema operativo: accede directamente a la memoria de otros servidores a velocidades vertiginosas."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            En una pila de red tradicional, cada paquete TCP/IP debe atravesar múltiples capas del
            kernel Linux, provocando cambios de contexto e interrupciones en la CPU del servidor.{" "}
            <strong className="text-white">Remote Direct Memory Access (RDMA)</strong> rompe este
            esquema mediante{" "}
            <strong className="text-mfqc-yellow">kernel bypass y transferencias zero-copy</strong>:
            la tarjeta de red lee y escribe directamente en la memoria del proceso remoto.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Con <strong className="text-mfqc-cyan">GPUDirect RDMA</strong>, los tensores se
            transmiten directamente entre las memorias VRAM de GPUs ubicadas en servidores distintos
            a través del bus PCIe y la red InfiniBand/RoCEv2, alcanzando latencias de transferencia
            inferiores a <strong className="text-white">un microsegundo (~1 μs)</strong> sin
            involucrar la CPU host.
          </p>
        </div>
      </SlideSection>

      {/* 5. SILICIO DE RED: MELLANOX & AMD PENSANDO */}
      <SlideSection
        brand="MFQC // SILICIO DE RED"
        meta="SYS.05E — MELLANOX CONNECTX & AMD PENSANDO"
        title={
          <>
            Silicio Adaptativo: <span className="text-mfqc-yellow">Mellanox ConnectX</span> &amp;{" "}
            <span className="text-mfqc-cyan">AMD Pensando</span> 🌐
          </>
        }
        lead="Las interfaces de red modernas son verdaderos aceleradores programables con hardware dedicado para telemetría y congestión."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Adaptadores de última generación como{" "}
            <strong className="text-white">NVIDIA Mellanox ConnectX-7/8</strong> y{" "}
            <strong className="text-mfqc-cyan">AMD Pensando Pollara 400</strong> no son simples
            puertos Ethernet: integran motores de procesamiento en silicio capaces de gestionar
            flujos de datos a <strong className="text-mfqc-yellow">400 y 800 Gb/s</strong> por
            puerto con control de congestión adaptativo en tiempo real.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Estas tarjetas analizan la latencia de cada paquete y el estado de los buffers
            intermedios en el tejido de la red, ajustando dinámicamente las ventanas de transmisión
            para protocolos como <strong className="text-white">InfiniBand, RoCEv2</strong> y el
            nuevo estándar abierto del{" "}
            <strong className="text-mfqc-yellow">Ultra Ethernet Consortium (UEC)</strong>, diseñado
            para soportar la avalancha de tráfico de la IA generativa.
          </p>
        </div>
      </SlideSection>

      {/* 6. DATA PROCESSING UNITS (DPUS) */}
      <SlideSection
        brand="MFQC // CÓMPUTO EN LA RED"
        meta="SYS.05F — DPUS & IN-NETWORK COMPUTING"
        title={
          <>
            El Tercer Pilar: <span className="text-mfqc-yellow">DPUs</span> &amp;{" "}
            <span className="text-mfqc-cyan">In-Network Computing</span> 🛡️
          </>
        }
        lead="La Data Processing Unit (DPU) convierte a la tarjeta de red en un supercomputador autónomo que procesa datos mientras viajan por el cable."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Junto a la CPU y la GPU, la <strong className="text-mfqc-yellow">DPU</strong> (NVIDIA
            BlueField, AMD Pensando Elba) se erige como el tercer componente central del centro de
            datos: integra una docena de núcleos ARM de 64 bits, aceleradores criptográficos y
            controladores PCIe para descargar por completo la pila de red, el almacenamiento
            paralelo distribuido (<strong className="text-white">Lustre / NVMe-oF</strong>) y la
            telemetría, liberando el 100% de la CPU para cómputo de usuario.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Más aún, mediante tecnologías como{" "}
            <strong className="text-mfqc-cyan">NVIDIA SHARP</strong>, los propios switches y DPUs
            calculan operaciones de reducción colectiva (
            <strong className="text-white">AllReduce, sumas y mínimos</strong> de gradientes) dentro
            del silicio de la red en pleno tránsito, eliminando la necesidad de reenviar datos
            redundantes a los nodos de cálculo.
          </p>
        </div>
      </SlideSection>
    </Slide>
  );
}
