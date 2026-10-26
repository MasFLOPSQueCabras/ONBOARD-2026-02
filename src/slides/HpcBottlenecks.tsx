import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { StatementSlide } from "../components/StatementSlide";
import { HardwarePacketFlow } from "../components/HardwarePacketFlow";

export function HpcBottlenecks() {
  return (
    <Slide>
      {/* 1a. THE MEMORY WALL: FLOPS VS BANDWIDTH */}
      <SlideSection
        className="packet-slide"
        bodyClassName="packet-body"
        brand="MFQC // BOTTLENECKS"
        meta="THE MEMORY WALL: ACELERADORES HAMBRIENTOS"
        title={
          <>
            El Muro de Memoria: <span className="text-mfqc-yellow">The Memory Wall</span>
          </>
        }
        lead="Hoy calcular operaciones en coma flotante es rápido y barato; el verdadero cuello de botella es alimentar a los núcleos a tiempo sin ahogar el ancho de banda."
      >
        <div className="packet-layout">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Los núcleos de cálculo multiplican matrices a ritmo exponencial (TFLOPS), pero el ancho
            de banda hacia la memoria principal (
            <strong className="text-mfqc-yellow">HBM3e o DDR5</strong>) crece a un ritmo mucho más
            lento. Cuando los operandos no residen en registros o en SRAM local, los aceleradores
            pasan cientos de ciclos de reloj{" "}
            <strong className="text-white">completamente ociosos esperando datos</strong>.
          </p>
          <HardwarePacketFlow kind="memory" />
        </div>
      </SlideSection>

      {/* 1b. STATEMENT: LA FÍSICA DEL BYTE */}
      <StatementSlide
        brand="MFQC // BOTTLENECKS"
        meta="TERMODINÁMICA: MOVER VS PROCESAR"
        tag="LA LEY FÍSICA DEL HPC"
        statement={
          <>
            Traer 1 dato de 64 bits de memoria externa consume:
            <span className="mt-1.5 block">
              de <span className="text-mfqc-cyan">100 a 1,000 veces más energía física</span>
            </span>
            <span className="mt-1.5 block">que calcular la operación en registros locales.</span>
          </>
        }
        detail="Ejecutar una instrucción matemática FMA cuesta una fracción de picojulio (pJ), pero mover el byte por los buses de silicio disipa órdenes de magnitud más calor. La regla dorada del supercómputo es optimizar la localidad de datos antes que la velocidad de cálculo."
        accent="cyan"
      />

      {/* 2a. SWITCHES DE ALTA RADIX */}
      <SlideSection
        brand="MFQC // INTERCONEXIÓN"
        meta="TOPOLOGÍAS: FAT-TREE & DRAGONFLY+"
        title={
          <>
            Redes a Escala: <span className="text-mfqc-yellow">Switches de Alta Radix</span>
          </>
        }
        lead="Conectar decenas de miles de aceleradores a 800 Gb/s exige conmutadores de cientos de puertos y topologías no bloqueantes."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            A escala de centro de datos, los clústeres despliegan conmutadores gigantescos de alta
            radix (
            <strong className="text-white">NVSwitch, InfiniBand Quantum-2, Ultra Ethernet</strong>)
            organizados en topologías de red no bloqueantes como{" "}
            <strong className="text-mfqc-yellow">Fat-Tree</strong> o{" "}
            <strong className="text-mfqc-cyan">Dragonfly+</strong>. La meta es garantizar múltiples
            caminos de comunicación sin cuellos de botella estructurales entre cualquier par de
            nodos.
          </p>
        </div>
      </SlideSection>

      {/* 2b. CONGESTIÓN Y HEAD-OF-LINE BLOCKING */}
      <SlideSection
        className="packet-slide"
        bodyClassName="packet-body"
        brand="MFQC // INTERCONEXIÓN"
        meta="FÍSICA DE COLAS: CONGESTIÓN"
        title={
          <>
            El Colapso de la Red: <span className="text-mfqc-cyan">In-Cast &amp; Congestión</span>
          </>
        }
        lead="La física de colas impone desafíos implacables cuando miles de nodos transmiten concurrentemente."
      >
        <div className="packet-layout">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Cuando cientos de aceleradores transmiten simultáneamente hacia el mismo nodo de
            destino, se produce el temido fenómeno de{" "}
            <strong className="text-white">in-cast congestion</strong> y el bloqueo de cabeza de
            línea (<strong className="text-mfqc-yellow">head-of-line blocking</strong>), desbordando
            los buffers de los switches y provocando caídas masivas en el rendimiento efectivo de la
            red del clúster.
          </p>
          <HardwarePacketFlow kind="network" />
        </div>
      </SlideSection>

      {/* 3a. STATEMENT: SINCRONIZACIÓN COLECTIVA */}
      <StatementSlide
        brand="MFQC // LATENCIA DE COLA"
        meta="SINCRONIZACIÓN GLOBAL"
        tag="LA TIRANÍA DEL NODO MÁS LENTO"
        statement={
          <>
            En una sincronización colectiva masiva (AllReduce):
            <span className="mt-1.5 block">
              el clúster entero avanza a la velocidad del{" "}
              <span className="text-mfqc-yellow">paquete de red más rezagado</span>.
            </span>
          </>
        }
        detail="Si 10,000 GPUs están sincronizando gradientes de IA, ningún procesador puede avanzar al siguiente ciclo hasta que el último byte del último nodo llegue a su destino. Un microsegundo de jitter en un switch frena a todo el supercomputador."
        accent="yellow"
      />

      {/* 3b. LA TIRANÍA DEL NODO MÁS LENTO */}
      <SlideSection
        brand="MFQC // LATENCIA DE COLA"
        meta="LA TIRANÍA DE LA LATENCIA DE COLA"
        title={
          <>
            La Tiranía del Rezagado: <span className="text-mfqc-cyan">Tail Latency</span> ⏱️
          </>
        }
        lead="Un único enlace rezagado transforma cientos de millones de dólares en silicio ocioso."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Esto genera la tiranía de la{" "}
            <strong className="text-white">latencia de cola (tail latency)</strong>: si un solo
            enlace sufre fluctuación térmica (<em>jitter</em>), una retransmisión por pérdida de
            paquetes o contención transitoria, ese único rezagado (<em>straggler</em>) detiene en
            seco a decenas de miles de GPUs de última generación, multiplicando los tiempos de
            entrenamiento.
          </p>
        </div>
      </SlideSection>

      {/* 4a. LITOGRAFÍA EUV & TRANSISTORES GAA */}
      <SlideSection
        brand="MFQC // FÍSICA DEL SILICIO"
        meta="LITOGRAFÍA: EUV HIGH-NA & TRANSISTORES GAA"
        title={
          <>
            Límite Atómico: <span className="text-mfqc-yellow">Nodos Angstrom</span> &amp;{" "}
            <span className="text-mfqc-cyan">Transistores GAA</span>
          </>
        }
        lead="Al aproximarse a las dimensiones de un átomo de silicio, la litografía tradicional colisiona frontalmente contra la mecánica cuántica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            En la era de los nodos sub-2 nm y la escala Angstrom (
            <strong className="text-white">2 nm, A16, 14A</strong>), la fabricación de chips exige
            escáneres ópticos de radiación ultravioleta extrema{" "}
            <strong className="text-mfqc-yellow">EUV High-NA (0.55 NA)</strong>. A estas escalas,
            los transistores FinFET tradicionales son reemplazados por nanocintas apiladas{" "}
            <em>Gate-All-Around (GAA)</em>, donde la compuerta envuelve por completo el canal de
            silicio para suprimir fugas cuánticas por efecto túnel.
          </p>
        </div>
      </SlideSection>

      {/* 4b. BACKSIDE POWER DELIVERY */}
      <SlideSection
        brand="MFQC // FÍSICA DEL SILICIO"
        meta="ALIMENTACIÓN POR EL REVERSO: POWERVIA"
        title={
          <>
            Revolución Eléctrica: <span className="text-mfqc-cyan">Backside Power Delivery</span>
          </>
        }
        lead="Mover los rieles de suministro eléctrico al reverso del silicio para eliminar la resistencia parásita."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Para resolver la resistencia parásita en las líneas de potencia, la industria introduce
            la alimentación por el reverso:{" "}
            <strong className="text-mfqc-cyan">Backside Power Delivery</strong> (PowerVia). Mover
            los rieles de suministro eléctrico al reverso del die elimina caídas críticas de voltaje
            (<em>IR drop</em>) y libera la cara frontal exclusivamente para pistas de señal de
            altísima velocidad.
          </p>
        </div>
      </SlideSection>

      {/* 5a. EL LÍMITE DE RETÍCULO */}
      <SlideSection
        brand="MFQC // EMPAQUETADO AVANZADO"
        meta="EL LÍMITE FÍSICO DE RETÍCULO (~858 MM²)"
        title={
          <>
            El Fin del Silicio Monolítico:{" "}
            <span className="text-mfqc-yellow">Límite de Retículo</span>
          </>
        }
        lead="Construir megachips de una sola pieza ya no es viable física ni económicamente: el silicio monolítico ha muerto."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Un acelerador moderno de IA o HPC superaría con creces el límite físico de retículo de
            las máquinas de litografía (<strong className="text-white">~858 mm²</strong>). Intentar
            fabricar un die gigante monolítico se traduce en rendimientos de oblea (<em>yield</em>)
            desastrosos y costos multimillonarios por cada chip funcional.
          </p>
        </div>
      </SlideSection>

      {/* 5b. CHIPLETS & COWOS 3D */}
      <SlideSection
        brand="MFQC // EMPAQUETADO AVANZADO"
        meta="CHIPLETS & EMPAQUETADO 2.5D/3D"
        title={
          <>
            La Solución Modular: <span className="text-mfqc-cyan">Chiplets &amp; CoWoS 3D</span>
          </>
        }
        lead="El futuro del cómputo radica en la modularidad 3D con micro-bumps y sustratos de alta densidad."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            La respuesta universal es la{" "}
            <strong className="text-mfqc-yellow">arquitectura de chiplets</strong>: el procesador se
            descompone en dies especializados interconectados a través de sustratos de silicio
            pasivo o activo de ultra alta densidad (
            <strong className="text-white">TSMC CoWoS</strong>, Intel EMIB) y apilamiento 3D (
            <strong className="text-mfqc-cyan">TSMC SoIC</strong>), rodeando los núcleos con pilas
            verticales de memoria HBM3e con miles de micro-bumps por milímetro cuadrado.
          </p>
        </div>
      </SlideSection>

      {/* 6a. EL COBRE TOCA TECHO */}
      <SlideSection
        brand="MFQC // INTERCONEXIÓN ÓPTICA"
        meta="LÍMITES DEL COBRE: ATENUACIÓN ELÉCTRICA"
        title={
          <>
            El Cobre se Queda Corto: <span className="text-mfqc-yellow">Pérdidas a 800G</span>
          </>
        }
        lead="A velocidades de 800G y 1.6T, enviar electrones por cables de cobre genera pérdidas resistivas inasumibles."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            A frecuencias de decenas de gigahercios por canal SerDes, el efecto pelicular y la
            atenuación disipan la señal eléctrica en apenas uno o dos metros. Los cables de cobre
            directos (DAC) se vuelven tan gruesos, rígidos y calientes que saturan el volumen físico
            de los racks y disipan vatios preciosos únicamente en vencer la resistencia del
            conductor.
          </p>
        </div>
      </SlideSection>

      {/* 6b. CO-PACKAGED OPTICS (CPO) */}
      <SlideSection
        brand="MFQC // INTERCONEXIÓN ÓPTICA"
        meta="FOTÓNICA EN EL DIE: CO-PACKAGED OPTICS"
        title={
          <>
            De Electrones a la Luz: <span className="text-mfqc-cyan">Fotónica Integrada (CPO)</span>
          </>
        }
        lead="Integrar motores fotónicos directamente en el sustrato del procesador o switch."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            La respuesta disruptiva es{" "}
            <strong className="text-mfqc-cyan">Co-Packaged Optics (CPO)</strong>: en lugar de
            convertir señales eléctricas a ópticas en transceptores del panel frontal, se integran{" "}
            <strong className="text-white">motores fotónicos de silicio (Silicon Photonics)</strong>{" "}
            directamente en el sustrato del procesador. Los fotones nacen a milímetros de los
            núcleos, recortando drásticamente la latencia y el consumo energético de la red.
          </p>
        </div>
      </SlideSection>

      {/* 7a. TERMODINÁMICA: 1,000 W POR SOCKET */}
      <SlideSection
        brand="MFQC // TERMODINÁMICA"
        meta="TERMODINÁMICA EXTREMA: EL FIN DEL AIRE"
        title={
          <>
            Termodinámica Extrema: <span className="text-mfqc-yellow">1,000+ Watts por Socket</span>
          </>
        }
        lead="Los ventiladores ruidosos han tocado techo: remover calor masivo de un área milimétrica exige física de fluidos."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Con procesadores superando los{" "}
            <strong className="text-mfqc-yellow">1,000 W por socket</strong> y densidades de rack de
            100 a 130+ kW, el enfriamiento por aire forzado es físicamente inviable: requeriría
            turbinas que consumirían más electricidad que los propios cálculos y provocarían
            estrangulamiento térmico (<em>thermal throttling</em>) inmediato en los nodos.
          </p>
        </div>
      </SlideSection>

      {/* 7b. DIRECT LIQUID COOLING & INMERSIÓN */}
      <SlideSection
        brand="MFQC // TERMODINÁMICA"
        meta="ENFRIAMIENTO LÍQUIDO & INMERSIÓN BIFÁSICA"
        title={
          <>
            Enfriamiento Líquido: <span className="text-mfqc-cyan">DLC &amp; Inmersión</span>
          </>
        }
        lead="Placas frías con agua tibia y fluidos dieléctricos con transferencia de calor por cambio de fase."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Los centros de datos de supercómputo han hecho la transición obligatoria a{" "}
            <strong className="text-mfqc-cyan">Direct Liquid Cooling (DLC)</strong> mediante placas
            frías que bombean agua tibia (~30–45 °C) acopladas directamente sobre el silicio con
            CDUs, o a <strong className="text-white">inmersión bifásica</strong>, donde los
            servidores completos se sumergen en fluidos dieléctricos que hierven al contacto con el
            chip transfiriendo calor con eficiencia extrema.
          </p>
        </div>
      </SlideSection>

      {/* 8a. CONSUMO ELÉCTRICO GIGAWATT */}
      <SlideSection
        brand="MFQC // ENERGÍA & PLANETA"
        meta="CONSUMO ENERGÉTICO A ESCALA GIGAWATT"
        title={
          <>
            Consumo Energético: La Era de los{" "}
            <span className="text-mfqc-yellow">Datacenters de Gigawatt</span>
          </>
        }
        lead="El techo de cristal para la próxima era de la IA y el supercómputo ya no son los transistores, sino la capacidad física de la red eléctrica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Los clústeres proyectados para la frontera de la inteligencia artificial demandan entre{" "}
            <strong className="text-mfqc-yellow">cientos de megavatios y más de 1 Gigavatio</strong>{" "}
            de potencia eléctrica continua por instalación: el consumo equivalente al de una ciudad
            entera, colapsando la capacidad de las subestaciones y líneas de transmisión regionales.
          </p>
        </div>
      </SlideSection>

      {/* 8b. REACTORES SMR & GREEN500 */}
      <SlideSection
        brand="MFQC // ENERGÍA & PLANETA"
        meta="ENERGÍA NUCLEAR & GREEN500"
        title={
          <>
            Energía Dedicada: <span className="text-mfqc-cyan">Reactores SMR &amp; Green500</span>
          </>
        }
        lead="Sin eficiencia energética extrema, ningún algoritmo a gran escala puede desplegarse en el planeta."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Esta crisis impulsa contratos directos con centrales nucleares, inversiones masivas en{" "}
            <strong className="text-mfqc-cyan">Reactores Modulares Pequeños (SMRs)</strong>{" "}
            dedicados en el campus del datacenter y una obsesión absoluta por la métrica reina del
            supercómputo: el ranking <strong className="text-white">Green500</strong> y los{" "}
            <strong className="text-white">GFLOPS por Vatio</strong>.
          </p>
        </div>
      </SlideSection>

      {/* 9a. JERARQUÍAS PROFUNDAS DE MEMORIA */}
      <SlideSection
        brand="MFQC // ARQUITECTURA DEL SILICIO"
        meta="JERARQUÍAS PROFUNDAS DE MEMORIA"
        title={
          <>
            Domar a la Bestia: La Pirámide de{" "}
            <span className="text-mfqc-yellow">Jerarquías de Memoria</span>
          </>
        }
        lead="En un acelerador moderno no existe una sola memoria: dominar el rendimiento exige orquestar datos a través de una pirámide vertical de latencias."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Un chip de cómputo avanzado alberga múltiples niveles de almacenamiento interno con
            características radicalmente opuestas: registros vectoriales privados de velocidad de
            ciclo cero, memoria compartida (<strong className="text-white">SRAM</strong>) de baja
            latencia por Streaming Multiprocessor, y memorias apiladas{" "}
            <strong className="text-mfqc-yellow">HBM3e</strong> con varios terabytes por segundo de
            ancho de banda agregado.
          </p>
        </div>
      </SlideSection>

      {/* 9b. LA PENALIZACIÓN DE ESCALÓN */}
      <SlideSection
        brand="MFQC // ARQUITECTURA DEL SILICIO"
        meta="LOCALIDAD: LA PENALIZACIÓN DE 10X A 100X"
        title={
          <>
            El Arte del Cómputo:{" "}
            <span className="text-mfqc-cyan">Penalizaciones de 10× a 100×</span>
          </>
        }
        lead="Mantener el flujo de datos lo más cerca posible de las unidades de cálculo en todo momento."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Subir un escalón innecesario en la jerarquía (por ejemplo, permitir que un tensor de uso
            frecuente resida en HBM en lugar de en SRAM compartida o registros) penaliza el tiempo
            de acceso en{" "}
            <strong className="text-mfqc-cyan">órdenes de magnitud (10× a 100×)</strong>. El arte
            del cómputo de alto rendimiento consiste en diseñar software que respete estrictamente
            la jerarquía física del chip.
          </p>
        </div>
      </SlideSection>

      {/* 10a. ASINCRONÍA & TMA */}
      <SlideSection
        brand="MFQC // HARDWARE ASÍNCRONO"
        meta="COPIA POR HARDWARE: TENSOR MEMORY ACCELERATOR"
        title={
          <>
            Domar a la Bestia: <span className="text-mfqc-yellow">Asincronía &amp; TMA</span>
          </>
        }
        lead="Tener silicio de última generación no garantiza velocidad: sin asincronía agresiva, los motores matriciales pasan la mayor parte del tiempo durmiendo."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Para evitar que los núcleos de cómputo se detengan a esperar transferencias de memoria,
            arquitecturas modernas como NVIDIA Hopper y Blackwell incorporan motores de copia por
            hardware independientes, como el{" "}
            <strong className="text-mfqc-cyan">Tensor Memory Accelerator (TMA)</strong>. El TMA
            transfiere bloques multidimensionales entre memoria global y SRAM de forma completamente
            asíncrona mientras los núcleos ejecutan operaciones matemáticas concurrentes.
          </p>
        </div>
      </SlideSection>

      {/* 10b. EL PELIGRO DEL SILICIO OCIOSO */}
      <SlideSection
        brand="MFQC // HARDWARE ASÍNCRONO"
        meta="EL PELIGRO DEL SILICIO OCIOSO"
        title={
          <>
            Evitando la Trampa: <span className="text-mfqc-cyan">El Silicio Ocioso</span>
          </>
        }
        lead="Un supercomputador multimillonario puede terminar rindiendo a menos del 15% por sincronizaciones torpes."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            Si el programador introduce sincronizaciones innecesarias (<em>barriers</em>),
            contención en los bancos de memoria (<em>bank conflicts</em>) o falla en solapar las
            copias de red con el cálculo local, el clúster sufre de{" "}
            <strong className="text-white">silicio ocioso</strong>: el hardware de vanguardia queda
            esperando datos y disipando teravatios de potencia eléctrica sin avanzar el cálculo.
          </p>
        </div>
      </SlideSection>

      {/* 11a. LA TORRE DE BABEL DEL SOFTWARE */}
      <SlideSection
        brand="MFQC // EL RETO DEL SOFTWARE"
        meta="LA TORRE DE BABEL DEL SOFTWARE PROPIETARIO"
        title={
          <>
            Domar a la Bestia: El Reto de la{" "}
            <span className="text-mfqc-yellow">Programabilidad</span>
          </>
        }
        lead="De nada sirve construir un supercomputador de gigavatios si el software no es capaz de exprimir el silicio sin reescribir millones de líneas cada dos años."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            El supercómputo enfrenta una auténtica Torre de Babel de pilas de software propietarias:
            CUDA, ROCm/HIP, SYCL/oneAPI, Triton, OpenMP y MPI. El código sintonizado minuciosamente
            al ciclo de reloj para una arquitectura específica queda con frecuencia completamente
            inutilizable al migrar a otro fabricante o a aceleradores emergentes como TPUs o
            Tenstorrent.
          </p>
        </div>
      </SlideSection>

      {/* 11b. COMPILACIÓN MULTINIVEL CON MLIR */}
      <SlideSection
        brand="MFQC // EL RETO DEL SOFTWARE"
        meta="COMPILACIÓN MULTINIVEL: MLIR"
        title={
          <>
            La Salida: <span className="text-mfqc-cyan">Compilación Multinivel (MLIR)</span>
          </>
        }
        lead="Ergonomía, portabilidad y rendimiento sin sacrificar el control bare-metal sobre el silicio."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[14px] leading-[1.55] text-white/90 @min-[768px]/deck:text-[25px] @min-[768px]/deck:leading-[1.6]">
            La solución moderna no consiste en programar ensamblador a mano para cada silicio, sino
            en adoptar infraestructuras de compilación multinivel como{" "}
            <strong className="text-mfqc-cyan">
              MLIR (Multi-Level Intermediate Representation)
            </strong>{" "}
            y lenguajes diseñados nativamente para hardware heterogéneo que otorguen ergonomía y
            seguridad sin sacrificar ni un nanosegundo de control <em>bare-metal</em>.
          </p>
        </div>
      </SlideSection>
    </Slide>
  );
}
