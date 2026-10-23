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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
            Los procesadores de arquitectura unificada (
            <strong className="text-mfqc-yellow">Apple Silicon Serie M</strong>) integran CPU, GPU y
            NPU en un único SoC con consumos de apenas ~40 a 100 W, compartiendo un bus de memoria
            de hasta <strong className="text-white">400–546 GB/s</strong> sin cuellos de botella de
            bus PCIe. Aunque entregan una extraordinaria eficiencia por vatio para desarrollo y
            prototipado local de modelos de IA, su rendimiento sostenido queda estrictamente acotado
            por las restricciones térmicas del chasis delgado y la imposibilidad física de escalar
            más allá de una sola máquina.
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
            Una estación de trabajo tope de gama equipada con una GPU{" "}
            <strong className="text-mfqc-cyan">NVIDIA RTX 5090</strong> (con un consumo de 575 W y
            1.79 TB/s de ancho de banda sobre memoria GDDR7) entrega cerca de ~105 TFLOPS FP32 en
            local para acelerar cómputo y render. No obstante, por más potente que sea la tarjeta,
            sigue confinada a los límites de una sola placa madre, enlaces de bus PCIe punto a punto
            y redes domésticas, incapaz de abordar cargas de simulación o IA que requieran
            paralelismo masivo distribuido.
          </p>
        </div>
      </SlideSection>

      {/* 3a. STATEMENT: LA BRECHA DE CÓMPUTO */}
      <StatementSlide
        brand="MFQC // ESCALA HPC"
        meta="LA BRECHA DE CÓMPUTO"
        tag="BRECHA DE POTENCIA"
        statement={
          <>
            Lo que a tu computador le toma{" "}
            <span className="text-mfqc-yellow">4 meses de cálculo continuo</span>...
            <span className="mt-1.5 block">
              un único nodo HPC lo resuelve en <span className="text-mfqc-cyan">1 hora</span>,
            </span>
            <span className="mt-1.5 block">
              y el supercomputador #1 lo liquida en{" "}
              <span className="text-mfqc-yellow">medio segundo</span>.
            </span>
          </>
        }
        detail="Una aceleración superior a 20 millones de veces: pasar de esperar meses a obtener respuestas en segundos transforma por completo qué ciencia e IA podemos construir."
        accent="yellow"
      />

      {/* 3b. GRÁFICA: POTENCIA DE CÓMPUTO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="POTENCIA DE CÓMPUTO (TFLOPS)"
        title={
          <>
            La Brecha de Escala: <span className="text-mfqc-yellow">Del Portátil</span> a los{" "}
            <span className="text-mfqc-cyan">ExaFLOPS</span>
          </>
        }
        lead="Comparativa de rendimiento en escala logarítmica: de 50 TFLOPS en silicio personal a más de 1,700,000 TFLOPS en supercómputo nacional."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleChart metric="compute" />
        </div>
      </SlideSection>

      {/* 4a. STATEMENT: ANCHO DE BANDA */}
      <StatementSlide
        brand="MFQC // ESCALA HPC"
        meta="EL RÍO DE DATOS"
        tag="ANCHO DE BANDA DE MEMORIA"
        statement={
          <>
            Los núcleos mueren de hambre si los datos no llegan a tiempo:
            <span className="mt-1.5 block">
              de <span className="text-mfqc-cyan">450 GB/s</span> en un SoC personal...
            </span>
            <span className="mt-1.5 block">
              a <span className="text-mfqc-yellow">18 Petabytes por segundo</span> inundando el
              tejido del clúster.
            </span>
          </>
        }
        detail="El mayor cuello de botella en supercómputo moderno no es ejecutar operaciones matemáticas; es bombear terabytes de datos a cada procesador sin saturar los buses."
        accent="cyan"
      />

      {/* 4b. GRÁFICA: ANCHO DE BANDA */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="ANCHO DE BANDA DE MEMORIA (GB/s)"
        title={
          <>
            El Río de Datos: <span className="text-mfqc-cyan">Memoria</span>, Buses y{" "}
            <span className="text-mfqc-yellow">Tejido</span>
          </>
        }
        lead="Comparativa de ancho de banda agregado entre la memoria del sistema y las redes de interconexión."
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
            Alimentar 11 millones de núcleos exige{" "}
            <span className="text-mfqc-yellow">29.5 Megavatios continuos</span>:
            <span className="mt-1.5 block">
              energía suficiente para abastecer una{" "}
              <span className="text-mfqc-cyan">ciudad pequeña</span>.
            </span>
          </>
        }
        detail="El supercómputo a escala Exaflop se topa de frente con la física: diseñar subestaciones eléctricas dedicadas y sistemas de refrigeración líquida directa para disipar gigavatios de calor."
        accent="yellow"
      />

      {/* 5b. GRÁFICA: CONSUMO ENERGÉTICO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="CONSUMO ENERGÉTICO CONTINUO (WATTS)"
        title={
          <>
            La Factura Térmica: De <span className="text-mfqc-yellow">70 Watts</span> a una{" "}
            <span className="text-mfqc-cyan">Planta Eléctrica</span>
          </>
        }
        lead="Comparativa de potencia requerida para sostener cómputo ininterrumpido en cada escala de hardware."
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
            <span className="text-mfqc-cyan">Exascale</span>
          </>
        }
        lead="Cada orden de magnitud resuelve un reto arquitectónico distinto: desde el prototipado local hasta la simulación a escala planetaria."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleCards />
        </div>
      </SlideSection>

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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
            Cada nodo de cómputo en un clúster alberga procesadores de servidor multi-socket (
            <strong className="text-white">AMD EPYC o Intel Xeon</strong> con hasta 128 núcleos por
            socket) acoplados a{" "}
            <strong className="text-mfqc-yellow">4 u 8 aceleradores de alta gama</strong> (NVIDIA
            H100/B200 o AMD MI300X/A) con hasta 192 GB de memoria{" "}
            <strong className="text-white">HBM3e</strong> cada uno.
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 md:text-[25px] md:leading-[1.6]">
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
