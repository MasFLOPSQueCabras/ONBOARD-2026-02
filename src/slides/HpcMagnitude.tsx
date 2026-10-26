import { VeraRubinDsx } from "./VeraRubinDsx";
import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { StatementSlide } from "../components/StatementSlide";
import { HpcScaleChart, HpcScaleCards } from "../components/charts/HpcScaleChart";

export function HpcMagnitude() {
  return (
    <Slide>
      {/* 1. PORTÁTIL ULTRACOMPACTO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="CÓMPUTO PERSONAL: PORTÁTIL ULTRACOMPACTO"
        title={
          <>
            Cómputo Personal: <span className="text-mfqc-yellow">Portátil Ultracompacto</span>
          </>
        }
        lead="Antes de escalar a un clúster, miremos las capacidades y límites del hardware portátil más avanzado."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Los procesadores de arquitectura unificada (
            <strong className="text-mfqc-yellow">M4 Max (MacBook Pro 2024)</strong>) integran CPU,
            GPU y NPU en un único SoC, compartiendo una memoria unificada con ancho de banda de
            hasta <strong className="text-white">546 GB/s (GPU de 40 núcleos)</strong> sin cuellos
            de botella de bus PCIe. Aunque entregan una extraordinaria eficiencia por vatio para
            desarrollo y prototipado local de modelos de IA, su rendimiento sostenido queda
            estrictamente acotado por las restricciones térmicas del chasis delgado y la
            imposibilidad física de escalar más allá de una sola máquina.
          </p>
        </div>
      </SlideSection>

      {/* 2. DESKTOP ENTUSIASTA (RTX 5090) */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="CÓMPUTO PERSONAL: DESKTOP ENTUSIASTA"
        title={
          <>
            Cómputo Personal: <span className="text-mfqc-cyan">Desktop &amp; RTX 5090</span>
          </>
        }
        lead="El techo del hardware de escritorio para entusiastas: potencia bruta masiva concentrada en un único chasis."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Una estación de trabajo tope de gama equipada con una GPU{" "}
            <strong className="text-mfqc-cyan">NVIDIA RTX 5090</strong> (con una potencia TGP
            especificada de 575 W y 1.792 TB/s de ancho de banda sobre memoria GDDR7) dispone de 32
            GB de memoria local para cómputo y render. No obstante, por más potente que sea la
            tarjeta, sigue confinada a los límites de una sola placa madre, enlaces de bus PCIe
            punto a punto y redes domésticas, incapaz de abordar cargas de simulación o IA que
            requieran paralelismo masivo distribuido.
          </p>
        </div>
      </SlideSection>

      <StatementSlide
        brand="MFQC // ESCALA HPC"
        meta="COMPARAR CON CONTEXTO"
        tag="PRECISIÓN, CARGA Y PARALELISMO"
        statement={
          <>
            Más FLOPS no garantizan el mismo aumento de velocidad.
            <span className="mt-1.5 block">
              La precisión, la memoria y el paralelismo de tu problema determinan el resultado.
            </span>
          </>
        }
        detail="Un pico de operaciones tensoriales de baja precisión no equivale a un resultado medido en HPL FP64. Para calcular una aceleración, ejecuta la misma carga y compara tiempos."
        accent="yellow"
      />
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="CAPACIDADES, NO UN RANKING DE VELOCIDAD"
        title={
          <>
            Del <span className="text-mfqc-yellow">Portátil</span> al{" "}
            <span className="text-mfqc-cyan">Rack NVL72</span>
          </>
        }
        lead="Cuatro ejemplos de hardware. Cada cifra describe una capacidad distinta; no son resultados de una misma prueba."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleCards />
        </div>
      </SlideSection>

      {/* 4a. STATEMENT: ANCHO DE BANDA */}
      <StatementSlide
        brand="MFQC // ESCALA HPC"
        meta="EL RÍO DE DATOS"
        tag="ANCHO DE BANDA DE MEMORIA"
        statement={
          <>
            No basta con calcular: hay que alimentar a los núcleos.
            <span className="mt-1.5 block">
              La memoria local, la memoria agregada y la interconexión tienen límites diferentes.
            </span>
          </>
        }
        detail="El sistema de ocho B300 suma hasta 64 TB/s de ancho de banda HBM. NVLink comunica las GPU por otro camino: no convierte esa suma en un único bus de memoria."
        accent="cyan"
      />

      {/* 4b. GRÁFICA: ANCHO DE BANDA */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="MEMORIA LOCAL Y AGREGADA (GB/s)"
        title={
          <>
            El Río de Datos: <span className="text-mfqc-cyan">Memoria</span>, Buses y{" "}
            <span className="text-mfqc-yellow">Tejido</span>
          </>
        }
        lead="Especificaciones de memoria del M4 Max, una RTX 5090 y sistemas B300 de 8 y 72 GPU. No representan el ancho de banda de la red."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleChart metric="bandwidth" />
        </div>
      </SlideSection>

      {/* 5a. STATEMENT: FACTURA TÉRMICA */}
      <StatementSlide
        brand="MFQC // ESCALA HPC"
        meta="LA FACTURA TÉRMICA"
        tag="POTENCIA ELÉCTRICA: EL PEAJE FÍSICO"
        statement={
          <>
            La escala de hardware cambia el presupuesto eléctrico.
            <span className="mt-1.5 block">
              Una tarjeta, un servidor y un centro de datos requieren mediciones distintas.
            </span>
          </>
        }
        detail="La RTX 5090 especifica 575 W de TGP; el DGX B300, 14.5 kW especificados para el sistema. El consumo real depende de la carga y no incluye necesariamente la refrigeración del edificio."
        accent="yellow"
      />

      {/* 5b. GRÁFICA: CONSUMO ENERGÉTICO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="POTENCIA ESPECIFICADA (WATTS)"
        title={
          <>
            La Factura Térmica: De <span className="text-mfqc-yellow">una GPU</span> a un{" "}
            <span className="text-mfqc-cyan">Servidor</span>
          </>
        }
        lead="Dos especificaciones con distinto alcance: potencia de una tarjeta y máximo de un servidor completo."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleChart metric="power" />
        </div>
      </SlideSection>

      {/* 6. COMPARATIVA Y RESUMEN ARQUITECTÓNICO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="LOS CUATRO PELDAÑOS DE HARDWARE"
        title={
          <>
            Los Cuatro Peldaños: <span className="text-mfqc-yellow">Del Portátil</span> al{" "}
            <span className="text-mfqc-cyan">Rack NVL72</span>
          </>
        }
        lead="Cada orden de magnitud resuelve un reto arquitectónico distinto: desde el prototipado local hasta la simulación a escala planetaria."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleCards architecture />
        </div>
      </SlideSection>

      <VeraRubinDsx />

      {/* 7a. ANATOMÍA DE UN NODO HPC: DENSIDAD DE SILICIO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="ANATOMÍA DE UN NODO: DENSIDAD DE SILICIO"
        title={
          <>
            Salto Cuántico: <span className="text-mfqc-yellow">Densidad de Silicio</span>
          </>
        }
        lead="Un nodo de supercómputo no se parece a un PC: es una bestia de múltiples CPUs de servidor y aceleradores densos con memoria HBM3e."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Cada nodo de cómputo en un clúster alberga procesadores de servidor multi-socket (
            <strong className="text-white">AMD EPYC o Intel Xeon</strong> con hasta 128 núcleos por
            socket) acoplados a{" "}
            <strong className="text-mfqc-yellow">4 u 8 aceleradores de alta gama</strong> (NVIDIA
            B300) con 288 GB de memoria <strong className="text-white">HBM3e</strong> cada uno.
          </p>
        </div>
      </SlideSection>

      {/* 7b. ANATOMÍA DE UN NODO HPC: MALLA NVLINK */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="ANATOMÍA DE UN NODO: MALLA NVLINK"
        title={
          <>
            Salto Cuántico: <span className="text-mfqc-cyan">La Malla NVLink</span>
          </>
        }
        lead="Eliminar el cuello de botella del bus PCIe: terabytes por segundo fluyendo directamente entre GPUs."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Dentro del chasis, estos chips no se comunican por el bus PCIe tradicional: utilizan
            enlaces propietarios dedicados (
            <strong className="text-mfqc-cyan">NVLink a 900–1,800 GB/s</strong> o Infinity Fabric)
            creando un espacio de memoria unificado a terabytes por segundo donde todas las GPUs
            comparten tensores como si fuesen un único acelerador masivo.
          </p>
        </div>
      </SlideSection>

      {/* 8a. MALLA DE RED RDMA: KERNEL BYPASS */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="RED RDMA: INTERCONEXIÓN DEL CLÚSTER"
        title={
          <>
            El Tejido del Clúster: <span className="text-mfqc-cyan">Malla RDMA</span>
          </>
        }
        lead="Miles de nodos individuales solo se convierten en un supercomputador gracias a un tejido de red de bajísima latencia y altísimo ancho de banda."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Para conectar miles de servidores entre sí, cada nodo equipa múltiples tarjetas de red
            de 400 a 800 Gb/s (<strong className="text-white">NVIDIA Mellanox ConnectX</strong> o{" "}
            <strong className="text-mfqc-cyan">AMD Pensando</strong>). Los datos viajan a través de
            protocolos{" "}
            <strong className="text-mfqc-yellow">RDMA (Remote Direct Memory Access)</strong>,
            escribiendo directamente en la RAM o VRAM de máquinas remotas sin despertar a la CPU ni
            pasar por el stack de red de Linux.
          </p>
        </div>
      </SlideSection>

      {/* 8b. MALLA DE RED RDMA: DPUS Y ALMACENAMIENTO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="RED RDMA: DPUS & STORAGE PARALELO"
        title={
          <>
            El Tejido del Clúster:{" "}
            <span className="text-mfqc-yellow">DPUs &amp; Almacenamiento</span>
          </>
        }
        lead="Descarga total del sistema operativo para mantener la red operando al microsegundo."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Junto a ellas, las <strong className="text-white">DPUs (Data Processing Units)</strong>{" "}
            descargan la gestión del almacenamiento masivo paralelo (sistemas de archivos
            distribuidos como Lustre o GPFS) y la seguridad, logrando que el clúster opere como una
            entidad unificada con latencias de extremo a extremo de apenas un microsegundo.
          </p>
        </div>
      </SlideSection>

      {/* 9a. TOP500 & LA BARRERA EXASCALE */}
      <SlideSection
        brand="MFQC // TOP500"
        meta="LA CIMA MUNDIAL: TOP500"
        title={
          <>
            La Magnitud del <span className="text-mfqc-yellow">TOP500</span>: Era{" "}
            <span className="text-mfqc-cyan">Exascale</span>
          </>
        }
        lead="En el ranking mundial TOP500, miles de estos nodos se unen para superar el ExaFLOP (10¹⁸ operaciones FP64 por segundo en HPL)."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Sistemas como <strong className="text-white">El Capitan</strong> (Lawrence Livermore) y{" "}
            <strong className="text-mfqc-yellow">Frontier</strong> (Oak Ridge) concentran cerca de
            10 millones de núcleos coordinados en topologías de red que consumen megavatios de
            energía pura, capaces de ejecutar en un segundo lo que a la humanidad completa le
            tomaría más de 4 años calculando sin descanso.
          </p>
        </div>
      </SlideSection>

      {/* 9b. TOP500: CIENCIA DE FRONTERA */}
      <SlideSection
        brand="MFQC // TOP500"
        meta="LA CIMA MUNDIAL: CIENCIA DE FRONTERA"
        title={
          <>
            Supercomputación: <span className="text-mfqc-cyan">Ciencia de Frontera</span>
          </>
        }
        lead="La potencia exascale no es un número abstracto: permite simular fenómenos imposibles de reproducir experimentalmente."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Estas máquinas abordan la simulación de reactores de fusión nuclear, plegamiento masivo
            de proteínas para diseño de fármacos, evolución cosmológica del universo y el
            entrenamiento de los modelos fundacionales de inteligencia artificial más ambiciosos del
            mundo.
          </p>
        </div>
      </SlideSection>

      {/* 10a. PRE-ENTRENAMIENTO MASIVO */}
      <SlideSection
        brand="MFQC // WORKLOADS: IA"
        meta="IA: PRE-ENTRENAMIENTO MASIVO"
        title={
          <>
            Demandas de IA: <span className="text-mfqc-yellow">Pre-Entrenamiento</span> &amp;{" "}
            <span className="text-mfqc-cyan">Tensores FP8/FP4</span>
          </>
        }
        lead="Entrenar modelos de billones de parámetros exige exprimir al máximo la densidad de cómputo por ciclo."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            El pre-entrenamiento de LLMs y modelos multimodales se basa en multiplicación masiva de
            matrices densas (GEMM). Para maximizar los TFLOPS por vatio y duplicar el rendimiento
            efectivo del silicio, la industria ha migrado de FP32 y FP16 a formatos de punto
            flotante microscópicos: <strong className="text-mfqc-yellow">BF16, FP8 y FP4</strong>,
            duplicando o cuadruplicando la capacidad de cálculo por ciclo de reloj.
          </p>
        </div>
      </SlideSection>

      {/* 10b. 3D PARALLELISM & ALLREDUCE */}
      <SlideSection
        brand="MFQC // WORKLOADS: IA"
        meta="IA: PARALELISMO 3D Y ALLREDUCE"
        title={
          <>
            Demandas de IA: <span className="text-mfqc-cyan">3D Parallelism</span> &amp;{" "}
            <span className="text-mfqc-yellow">AllReduce</span>
          </>
        }
        lead="Coordinar miles de aceleradores para que aprendan al unísono como un solo cerebro."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            El reto no termina en el chip: entrenar a escala requiere paralelismo de datos, de
            tensores y de pipeline (3D Parallelism), forzando a miles de aceleradores a ejecutar
            sincronizaciones colectivas <strong className="text-mfqc-cyan">AllReduce</strong>{" "}
            continuas a través de toda la red del clúster cada pocos milisegundos para intercambiar
            gradientes de billones de pesos.
          </p>
        </div>
      </SlideSection>

      {/* 11a. INFERENCIA & DICTADURA DEL ANCHO DE BANDA */}
      <SlideSection
        brand="MFQC // WORKLOADS: IA"
        meta="IA: INFERENCIA & ANCHO DE BANDA"
        title={
          <>
            Demandas de IA: <span className="text-mfqc-cyan">Inferencia</span> Token a Token
          </>
        }
        lead="Generar respuestas token por token invierte completamente las restricciones: de cálculo intensivo pasamos a la dictadura del ancho de banda."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            En la fase de inferencia y modelos de razonamiento, la generación autoregresiva de texto
            ocurre token a token. Este proceso es estrictamente{" "}
            <strong className="text-white">memory-bound</strong>: por cada nuevo token generado,
            todos los pesos del modelo y el historial completo de claves y valores (
            <strong className="text-mfqc-yellow">KV-cache</strong>) deben leerse íntegramente desde
            la memoria a los registros.
          </p>
        </div>
      </SlideSection>

      {/* 11b. EL MURO DEL KV-CACHE */}
      <SlideSection
        brand="MFQC // WORKLOADS: IA"
        meta="IA: EL MURO DEL KV-CACHE"
        title={
          <>
            Inferencia a Escala: <span className="text-mfqc-yellow">El Muro del KV-Cache</span>
          </>
        }
        lead="Millones de tokens de contexto activo exigen optimizaciones algorítmicas extremas en VRAM."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Con ventanas de contexto de millones de tokens y miles de usuarios concurrentes, el
            KV-cache desborda fácilmente los cientos de gigabytes de memoria HBM, obligando a
            emplear algoritmos como{" "}
            <strong className="text-mfqc-cyan">PagedAttention (vLLM)</strong>, cuantización dinámica
            de caché a FP8 e inferencia especulativa (<em>Speculative Decoding</em>) para mantener
            los aceleradores trabajando a máxima capacidad.
          </p>
        </div>
      </SlideSection>

      {/* 12a. CÓMPUTO CIENTÍFICO: RIGOR FP64 */}
      <SlideSection
        brand="MFQC // WORKLOADS: CIENCIA"
        meta="CIENCIA: EL RIGOR DE FP64"
        title={
          <>
            Demandas Científicas: <span className="text-mfqc-cyan">Rigor FP64</span>
          </>
        }
        lead="Los grandes problemas de la física exigen precisión matemática estricta sin tolerar errores de redondeo."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Simular el confinamiento magnético de plasma en reactores de fusión nuclear, la dinámica
            molecular de fármacos o la circulación climática planetaria exige{" "}
            <strong className="text-mfqc-yellow">doble precisión estricta (FP64 de 64 bits)</strong>
            . A diferencia de la IA, donde los errores de cuantización se diluyen, en física un
            error de redondeo infinitesimal acumulado tras millones de pasos de integración temporal
            produce catastróficas divergencias en las ecuaciones diferenciales.
          </p>
        </div>
      </SlideSection>

      {/* 12b. CÓMPUTO CIENTÍFICO: ÁLGEBRA DISPERSA & AI FOR SCIENCE */}
      <SlideSection
        brand="MFQC // WORKLOADS: CIENCIA"
        meta="CIENCIA: ÁLGEBRA DISPERSA & AI FOR SCIENCE"
        title={
          <>
            Frontera Científica: <span className="text-mfqc-yellow">Álgebra Dispersa</span> &amp;{" "}
            <span className="text-mfqc-cyan">AI for Science</span>
          </>
        }
        lead="Mallas no estructuradas, transformadas FFT y redes neuronales colaborando como sub-solvers físicos."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Estos modelos resuelven mallas espaciales irregulares con{" "}
            <strong className="text-white">matrices dispersas (SpMV)</strong> y transformadas de
            Fourier tridimensionales (FFTs 3D) caracterizadas por accesos no contiguos a memoria. La
            frontera moderna es <strong className="text-mfqc-cyan">AI for Science</strong>: redes
            neuronales integradas como sub-solvers acelerados dentro de simuladores físicos
            tradicionales para multiplicar la velocidad de descubrimiento.
          </p>
        </div>
      </SlideSection>
    </Slide>
  );
}
