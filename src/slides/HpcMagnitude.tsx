import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
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
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
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
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
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

      {/* 3. GRÁFICA: POTENCIA DE CÓMPUTO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="POTENCIA DE CÓMPUTO (TFLOPS)"
        title={
          <>
            La Brecha de Escala: <span className="text-mfqc-yellow">Del Portátil</span> a los{" "}
            <span className="text-mfqc-cyan">ExaFLOPS</span>
          </>
        }
        lead="Lo que a un computador personal le toma 4 meses de cálculo ininterrumpido al 100%, un único nodo HPC lo resuelve en 1 hora, y El Capitan lo liquida en medio segundo."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleChart metric="compute" />
        </div>
      </SlideSection>

      {/* 4. GRÁFICA: ANCHO DE BANDA */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="ANCHO DE BANDA DE MEMORIA (GB/s)"
        title={
          <>
            El Río de Datos: <span className="text-mfqc-cyan">Memoria</span>, Buses y{" "}
            <span className="text-mfqc-yellow">Tejido</span>
          </>
        }
        lead="Los procesadores mueren de hambre si los datos no llegan a tiempo: de 450 GB/s en un SoC a 18 Petabytes por segundo inundando el tejido del clúster."
      >
        <div className="w-full max-w-[1340px]">
          <HpcScaleChart metric="bandwidth" />
        </div>
      </SlideSection>

      {/* 5. GRÁFICA: CONSUMO ENERGÉTICO */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="CONSUMO ENERGÉTICO CONTINUO (WATTS)"
        title={
          <>
            La Factura Térmica: De <span className="text-mfqc-yellow">70 Watts</span> a una{" "}
            <span className="text-mfqc-cyan">Planta Eléctrica</span>
          </>
        }
        lead="El rendimiento masivo impone un peaje físico brutal: alimentar 11 millones de núcleos exige 29.5 Megavatios continuos — suficiente energía para una ciudad pequeña."
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

      {/* 7. ANATOMÍA DE UN NODO HPC MULTI-ACELERADOR */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="ANATOMÍA DE UN NODO DE SUPERCOMPUTACIÓN"
        title={
          <>
            Salto Cuántico: <span className="text-mfqc-yellow">Anatomía de un Nodo HPC</span>
          </>
        }
        lead="Un nodo de supercómputo no se parece a un PC: es una bestia de múltiples CPUs de servidor y aceleradores densos con memoria HBM3e."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Cada nodo de cómputo en un clúster alberga procesadores de servidor multi-socket (
            <strong className="text-white">AMD EPYC o Intel Xeon</strong> con hasta 128 núcleos por
            socket) acoplados a{" "}
            <strong className="text-mfqc-yellow">4 u 8 aceleradores de alta gama</strong> (NVIDIA
            H100/B200 o AMD MI300X/A) con hasta 192 GB de memoria{" "}
            <strong className="text-white">HBM3e</strong> cada uno.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Dentro del chasis, estos chips no se comunican por el bus PCIe tradicional: utilizan
            enlaces propietarios dedicados (
            <strong className="text-mfqc-cyan">NVLink a 900–1,800 GB/s</strong> o Infinity Fabric)
            creando un espacio de memoria unificado a terabytes por segundo donde todas las GPUs
            comparten tensores como si fuesen un único acelerador masivo.
          </p>
        </div>
      </SlideSection>

      {/* 8. LA MALLA DE RED RDMA DEL CLÚSTER */}
      <SlideSection
        brand="MFQC // ESCALA HPC"
        meta="LA MALLA DE INTERCONEXIÓN RDMA"
        title={
          <>
            Salto Cuántico: <span className="text-mfqc-cyan">La Malla de Red RDMA</span>
          </>
        }
        lead="Miles de nodos individuales solo se convierten en un supercomputador gracias a un tejido de red de bajísima latencia y altísimo ancho de banda."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Para conectar miles de servidores entre sí, cada nodo equipa múltiples tarjetas de red
            de 400 a 800 Gb/s (<strong className="text-white">NVIDIA Mellanox ConnectX</strong> o{" "}
            <strong className="text-mfqc-cyan">AMD Pensando</strong>). Los datos viajan a través de
            protocolos{" "}
            <strong className="text-mfqc-yellow">RDMA (Remote Direct Memory Access)</strong>,
            escribiendo directamente en la RAM o VRAM de máquinas remotas sin despertar a la CPU ni
            pasar por el stack de red de Linux.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Junto a ellas, las <strong className="text-white">DPUs (Data Processing Units)</strong>{" "}
            descargan la gestión del almacenamiento masivo paralelo (sistemas de archivos
            distribuidos como Lustre o GPFS) y la seguridad, logrando que el clúster opere como una
            entidad unificada con latencias de extremo a extremo de apenas un microsegundo.
          </p>
        </div>
      </SlideSection>

      {/* 9. TOP500 & ERA EXASCALE */}
      <SlideSection
        brand="MFQC // TOP500"
        meta="LA CIMA MUNDIAL: TOP500"
        title={
          <>
            La Magnitud del <span className="text-mfqc-yellow">TOP500</span>: Era{" "}
            <span className="text-mfqc-cyan">Exascale</span>
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
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            El supercomputador número uno del planeta,{" "}
            <strong className="text-white">El Capitan</strong> (Lawrence Livermore National
            Laboratory), alcanza una marca histórica de{" "}
            <strong className="text-mfqc-yellow">1,742,000 TFLOPS en FP64</strong> combinando más de{" "}
            <strong className="text-white">11 millones de núcleos</strong> (APUs AMD Instinct
            MI300A). Lo que al computador personal más rápido le tomaría{" "}
            <em>siglos de cálculo ininterrumpido</em>, esta máquina lo resuelve en apenas{" "}
            <em>minutos</em>.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Para operar a esta escala planetaria, cientos de racks refrigerados por líquido se
            interconectan mediante topologías <strong className="text-mfqc-cyan">Dragonfly</strong>{" "}
            o <strong className="text-white">Fat-Tree</strong> de alta radix que coordinan millones
            de hilos concurrentes al microsegundo, consumiendo alrededor de 30 megavatios de
            potencia continua con la precisión de un reloj atómico.
          </p>
        </div>
      </SlideSection>

      {/* 10. IA DE FRONTERA: PRE-ENTRENAMIENTO MASIVO */}
      <SlideSection
        brand="MFQC // WORKLOADS: IA"
        meta="IA: PRE-ENTRENAMIENTO MASIVO"
        title={
          <>
            Demandas de IA: <span className="text-mfqc-yellow">Pre-Entrenamiento</span> &amp;{" "}
            <span className="text-mfqc-cyan">Tensores FP8/FP4</span>
          </>
        }
        lead="Entrenar modelos de frontera de billones de parámetros exige exprimir al máximo la densidad de cómputo y la sincronización colectiva masiva."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            El pre-entrenamiento de LLMs y modelos multimodales se basa en multiplicación masiva de
            matrices densas (GEMM). Para maximizar los TFLOPS por vatio y duplicar el rendimiento
            efectivo del silicio, la industria ha migrado de FP32 y FP16 a formatos de punto
            flotante microscópicos: <strong className="text-mfqc-yellow">BF16, FP8 y FP4</strong>,
            duplicando o cuadruplicando la capacidad de cálculo por ciclo de reloj.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Sin embargo, el reto no termina en el chip: entrenar a escala requiere paralelismo de
            datos, de tensores y de pipeline (3D Parallelism), forzando a miles de aceleradores a
            ejecutar sincronizaciones colectivas{" "}
            <strong className="text-mfqc-cyan">AllReduce</strong> continuas a través de toda la red
            del clúster cada pocos milisegundos.
          </p>
        </div>
      </SlideSection>

      {/* 11. IA DE FRONTERA: INFERENCIA & KV-CACHE */}
      <SlideSection
        brand="MFQC // WORKLOADS: IA"
        meta="IA: INFERENCIA & EL MURO DEL KV-CACHE"
        title={
          <>
            Demandas de IA: <span className="text-mfqc-cyan">Inferencia</span> &amp;{" "}
            <span className="text-mfqc-yellow">El Muro del KV-Cache</span>
          </>
        }
        lead="Generar respuestas token por token invierte completamente las restricciones: de cálculo intensivo pasamos a la dictadura del ancho de banda."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            En la fase de inferencia y modelos de razonamiento, la generación autoregresiva de texto
            ocurre token a token. Este proceso es estrictamente{" "}
            <strong className="text-white">memory-bound</strong>: por cada nuevo token generado,
            todos los pesos del modelo y el historial completo de claves y valores (
            <strong className="text-mfqc-yellow">KV-cache</strong>) deben leerse íntegramente desde
            la memoria a los registros.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Con ventanas de contexto de millones de tokens y miles de usuarios concurrentes, el
            KV-cache desborda fácilmente los cientos de gigabytes de memoria HBM, obligando a
            emplear algoritmos como{" "}
            <strong className="text-mfqc-cyan">PagedAttention (vLLM)</strong>, cuantización dinámica
            de caché a FP8 e inferencia especulativa (<em>Speculative Decoding</em>) para mantener
            los aceleradores trabajando a máxima capacidad.
          </p>
        </div>
      </SlideSection>

      {/* 12. CÓMPUTO CIENTÍFICO & SIMULACIÓN */}
      <SlideSection
        brand="MFQC // WORKLOADS: CIENCIA"
        meta="CÓMPUTO CIENTÍFICO & SIMULACIÓN"
        title={
          <>
            Demandas Científicas: <span className="text-mfqc-cyan">Rigor FP64</span> &amp;{" "}
            <span className="text-mfqc-yellow">Álgebra Dispersa</span>
          </>
        }
        lead="Los grandes problemas de la ciencia y la física exigen precisión matemática estricta y algoritmos radicalmente distintos a las redes neuronales."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Simular el confinamiento magnético de plasma en reactores de fusión nuclear, la dinámica
            molecular de fármacos o la circulación climática planetaria exige{" "}
            <strong className="text-mfqc-yellow">doble precisión estricta (FP64 de 64 bits)</strong>
            . A diferencia de la IA, donde los errores de cuantización se diluyen, en física un
            error de redondeo infinitesimal acumulado tras millones de pasos de integración temporal
            produce catastróficas divergencias en las ecuaciones diferenciales.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Asimismo, estos modelos resuelven mallas no estructuradas con{" "}
            <strong className="text-white">matrices dispersas (SpMV)</strong> casi vacías y
            transformadas de Fourier tridimensionales (FFTs 3D), caracterizadas por accesos
            irregulares a memoria. La frontera moderna es{" "}
            <strong className="text-mfqc-cyan">AI for Science</strong>: redes neuronales integradas
            como sub-solvers dentro de simuladores físicos tradicionales.
          </p>
        </div>
      </SlideSection>
    </Slide>
  );
}
