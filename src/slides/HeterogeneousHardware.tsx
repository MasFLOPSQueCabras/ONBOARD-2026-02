import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { StatementSlide } from "../components/StatementSlide";
import { SystolicArray } from "../components/SystolicArray";
import { FeatureItem } from "../components/FeatureGrid";

export function HeterogeneousHardware() {
  return (
    <Slide>
      {/* 1a. STATEMENT: THE FREE LUNCH IS OVER */}
      <StatementSlide
        brand="MFQC // PARADIGMA"
        meta="THE FREE LUNCH IS OVER"
        tag="EL FIN DE LA ERA GRATIS"
        statement={
          <>
            <span className="text-mfqc-yellow">«The Free Lunch Is Over»</span>:
            <span className="mt-1.5 block">
              durante décadas bastaba esperar un nuevo CPU... esa era murió.
            </span>
          </>
        }
        detail="A principios de los 2000, la física impuso el fin de la escala Dennard: subir la frecuencia disipaba calor inmanejable. Hoy el rendimiento no proviene de gigahertz gratis, sino de paralelismo extremo, aceleradores dedicados y código tallado para el silicio."
        accent="yellow"
      />

      {/* 1b. PARADIGMA HETEROGÉNEO */}
      <SlideSection
        brand="MFQC // PARADIGMA"
        meta="HETEROGENEOUS COMPUTING"
        title={
          <>
            El Nuevo Paradigma: <span className="text-mfqc-cyan">Heterogeneidad</span>
          </>
        }
        lead="No delegar todo a un solo chip de propósito general: coordinar simultáneamente una orquesta de silicio especializado."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="MOTTO 02 // SILICIO ESPECIALIZADO"
            title="Orquestando Silicio Especializado"
            accent="cyan"
          >
            El supercómputo moderno coordina simultáneamente{" "}
            <strong className="text-mfqc-cyan">
              CPUs de control, GPUs masivas, TPUs matriciales, DPUs y ASICs
            </strong>
            , enviando cada porción del cálculo al silicio que la ejecuta con la máxima eficiencia y
            menor costo energético.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2a. TPU: MATRICES SISTÓLICAS */}
      <SlideSection
        brand="MFQC // ARQUITECTURA ASIC"
        meta="GOOGLE CLOUD TPU: MATRICES SISTÓLICAS"
        title={
          <>
            Hardware No Cotidiano: <span className="text-mfqc-yellow">Google Cloud TPU</span>
          </>
        }
        lead="Diseñadas exclusivamente para el álgebra de tensores de redes neuronales, desechando el overhead de una GPU genérica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            En lugar de leer y escribir registros por cada hilo en cada ciclo, la Matrix Multiply
            Unit (<strong className="text-mfqc-yellow">MXU</strong>) de una TPU hace fluir los datos
            como en una onda cardíaca (sístole): las entradas y pesos se deslizan rítmicamente entre
            celdas acumuladoras adyacentes sin pasar por el banco de registros intermedio,
            minimizando el movimiento de datos y maximizando la densidad de operaciones por vatio.
          </p>
        </div>
      </SlideSection>

      <SlideSection
        brand="MFQC // ARQUITECTURA ASIC"
        meta="MXU: FLUJO SISTÓLICO"
        className="systolic-slide"
        title={
          <>
            Dentro de la MXU: <span className="text-mfqc-yellow">una onda de cálculo</span>
          </>
        }
      >
        <SystolicArray />
      </SlideSection>

      {/* 2b. TPU: TOROS ÓPTICOS OCS */}
      <SlideSection
        brand="MFQC // ARQUITECTURA ASIC"
        meta="TPU: INTERCONEXIÓN ÓPTICA OCS"
        title={
          <>
            TPU a Escala: <span className="text-mfqc-cyan">Conmutación Óptica (OCS)</span>
          </>
        }
        lead="Reconfigurar la topología física de un supercomputador en tiempo real usando haces de luz."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            A escala de clúster, miles de TPUs (v4, v5p) se interconectan en{" "}
            <strong className="text-mfqc-cyan">toros tridimensionales directos</strong> mediante
            conmutación óptica (
            <strong className="text-white">Optical Circuit Switches - OCS</strong>) con espejos
            micrométricos MEMS que redirigen haces de luz en tiempo real, permitiendo reconfigurar
            la topología física del supercomputador según el grafo específico del modelo entrenado.
          </p>
        </div>
      </SlideSection>

      {/* 3a. TENSTORRENT: NÚCLEOS TENSIX */}
      <SlideSection
        brand="MFQC // RISC-V & MALLA 2D"
        meta="TENSTORRENT: RISC-V TENSIX"
        title={
          <>
            Hardware No Cotidiano: <span className="text-mfqc-cyan">Tenstorrent</span> &amp;{" "}
            <span className="text-mfqc-yellow">Tensix</span>
          </>
        }
        lead="Liderada por la leyenda del silicio Jim Keller, Tenstorrent propone una arquitectura modular basada en RISC-V orientada al flujo espacial de grafos."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Cada procesador Tenstorrent (Wormhole, Blackhole) contiene una cuadrícula masiva de
            núcleos <strong className="text-mfqc-cyan">Tensix</strong>. Cada núcleo combina cinco
            micro-procesadores <strong className="text-white">RISC-V</strong> ("baby cores")
            dedicados a orquestar paquetes y formatos numéricos, junto con motores matemáticos
            matriciales y memoria SRAM ultrarrápida acoplada directamente al cómputo.
          </p>
        </div>
      </SlideSection>

      {/* 3b. TENSTORRENT: NOC BIDIMENSIONAL */}
      <SlideSection
        brand="MFQC // RISC-V & MALLA 2D"
        meta="TENSTORRENT: RED EN CHIP 2D"
        title={
          <>
            Tenstorrent: <span className="text-mfqc-yellow">Red en Chip (NoC 2D)</span>
          </>
        }
        lead="Sin la penalización de mantener coherencia de caché global: el silicio como un río programable de datos."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            En lugar de gastar silicio y vatios en mantener coherencia de caché global entre cientos
            de núcleos, Tenstorrent conecta su cuadrícula mediante una{" "}
            <strong className="text-mfqc-yellow">red en chip (NoC) bidimensional</strong>: el
            compilador proyecta el grafo neuronal directamente sobre la topología física, moviendo
            paquetes de datos de núcleo a núcleo como un río programable sin atascos en memoria
            externa.
          </p>
        </div>
      </SlideSection>

      {/* 4a. RDMA & KERNEL BYPASS */}
      <SlideSection
        brand="MFQC // REDES DE ULTRA BAJA LATENCIA"
        meta="RDMA: CERO COPIAS & KERNEL BYPASS"
        title={
          <>
            Redes que Vuelan: <span className="text-mfqc-yellow">RDMA</span> &amp;{" "}
            <span className="text-mfqc-cyan">Kernel Bypass</span>
          </>
        }
        lead="En HPC la tarjeta de red no espera al sistema operativo: accede directamente a la memoria de otros servidores a velocidades vertiginosas."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            En una pila de red tradicional, cada paquete TCP/IP debe atravesar múltiples capas del
            kernel Linux, provocando cambios de contexto e interrupciones en la CPU del servidor.{" "}
            <strong className="text-white">Remote Direct Memory Access (RDMA)</strong> rompe este
            esquema mediante{" "}
            <strong className="text-mfqc-yellow">kernel bypass y transferencias zero-copy</strong>:
            la tarjeta de red lee y escribe directamente en la memoria del proceso remoto.
          </p>
        </div>
      </SlideSection>

      {/* 4b. STATEMENT: GPUDIRECT RDMA */}
      <StatementSlide
        brand="MFQC // REDES DE ULTRA BAJA LATENCIA"
        meta="GPUDIRECT RDMA: VRAM A VRAM"
        tag="LATENCIA EXTREMA: ~1 MICROSEGUNDO"
        statement={
          <>
            Mover tensores entre GPUs remotas a{" "}
            <span className="text-mfqc-cyan">~1 microsegundo de latencia</span>:
            <span className="mt-1.5 block">
              sin despertar a la CPU ni tocar la RAM del sistema.
            </span>
          </>
        }
        detail="Con GPUDirect RDMA, los datos viajan directamente de VRAM a VRAM a través de PCIe y redes InfiniBand / RoCEv2. Cero copias en memoria host, cero cambios de contexto y ancho de banda masivo sin fricción."
        accent="cyan"
      />

      {/* 5a. SILICIO DE RED: CONNECTX & PENSANDO */}
      <SlideSection
        brand="MFQC // SILICIO DE RED"
        meta="MELLANOX CONNECTX & AMD PENSANDO"
        title={
          <>
            Silicio Adaptativo: <span className="text-mfqc-yellow">Mellanox ConnectX</span> &amp;{" "}
            <span className="text-mfqc-cyan">AMD Pensando</span>
          </>
        }
        lead="Las interfaces de red modernas son verdaderos aceleradores programables con hardware dedicado para telemetría y congestión."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Adaptadores de última generación como{" "}
            <strong className="text-white">NVIDIA Mellanox ConnectX-7/8</strong> y{" "}
            <strong className="text-mfqc-cyan">AMD Pensando Pollara 400</strong> no son simples
            puertos Ethernet: integran motores de procesamiento en silicio capaces de gestionar
            flujos de datos a <strong className="text-mfqc-yellow">400 y 800 Gb/s</strong> por
            puerto con control de congestión adaptativo en tiempo real.
          </p>
        </div>
      </SlideSection>

      {/* 5b. TELEMETRÍA & ULTRA ETHERNET */}
      <SlideSection
        brand="MFQC // SILICIO DE RED"
        meta="ULTRA ETHERNET CONSORTIUM (UEC)"
        title={
          <>
            Redes de Próxima Generación: <span className="text-mfqc-yellow">Ultra Ethernet</span>
          </>
        }
        lead="Adaptando la red al tsunami de tráfico de la inteligencia artificial generativa."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Estas tarjetas analizan la latencia de cada paquete y el estado de los buffers
            intermedios en el tejido de la red, ajustando dinámicamente las ventanas de transmisión
            para protocolos como <strong className="text-white">InfiniBand, RoCEv2</strong> y el
            nuevo estándar abierto del{" "}
            <strong className="text-mfqc-yellow">Ultra Ethernet Consortium (UEC)</strong>, diseñado
            para soportar la avalancha de tráfico de la IA generativa sin pérdida de paquetes.
          </p>
        </div>
      </SlideSection>

      {/* 6a. DATA PROCESSING UNITS (DPUS) */}
      <SlideSection
        brand="MFQC // CÓMPUTO EN LA RED"
        meta="DPUS: EL TERCER PILAR DEL DATACENTER"
        title={
          <>
            El Tercer Pilar: <span className="text-mfqc-yellow">Data Processing Units (DPUs)</span>
          </>
        }
        lead="La DPU convierte a la tarjeta de red en un computador autónomo que descarga por completo al procesador principal."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Junto a la CPU y la GPU, la <strong className="text-mfqc-yellow">DPU</strong> (NVIDIA
            BlueField, AMD Pensando Elba) se erige como el tercer componente central del centro de
            datos: integra una docena de núcleos ARM de 64 bits, aceleradores criptográficos y
            controladores PCIe para descargar por completo la pila de red, el almacenamiento
            paralelo distribuido (<strong className="text-white">Lustre / NVMe-oF</strong>) y la
            seguridad, liberando el 100% de la CPU para cómputo de usuario.
          </p>
        </div>
      </SlideSection>

      {/* 6b. IN-NETWORK COMPUTING & SHARP */}
      <SlideSection
        brand="MFQC // CÓMPUTO EN LA RED"
        meta="IN-NETWORK COMPUTING: NVIDIA SHARP"
        title={
          <>
            Cómputo en Tránsito: <span className="text-mfqc-cyan">In-Network Computing</span>
          </>
        }
        lead="Calcular operaciones matemáticas dentro del propio cable mientras los datos viajan."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Mediante tecnologías como <strong className="text-mfqc-cyan">NVIDIA SHARP</strong>, los
            propios switches y DPUs calculan operaciones de reducción colectiva (
            <strong className="text-white">AllReduce, sumas y mínimos</strong> de gradientes) dentro
            del silicio de la red en pleno tránsito, eliminando la necesidad de reenviar datos
            redundantes a los nodos de cálculo y acelerando el entrenamiento distribuido de IA.
          </p>
        </div>
      </SlideSection>
    </Slide>
  );
}
