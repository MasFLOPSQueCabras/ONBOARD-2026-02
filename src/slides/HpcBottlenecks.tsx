import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";

export function HpcBottlenecks() {
  return (
    <Slide>
      {/* 1. THE MEMORY WALL */}
      <SlideSection
        brand="MFQC // BOTTLENECKS"
        meta="SYS.04A — THE MEMORY WALL"
        title={
          <>
            El Muro de Memoria: <span className="text-mfqc-yellow">The Memory Wall</span> 🧱
          </>
        }
        lead="Hoy calcular operaciones en coma flotante es rápido y barato; el verdadero cuello de botella es alimentar a los núcleos a tiempo sin ahogar el ancho de banda."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Los núcleos de cálculo multiplican matrices a ritmo exponencial (TFLOPS), pero el ancho
            de banda hacia la memoria principal (
            <strong className="text-mfqc-yellow">HBM3e o DDR5</strong>) crece a un ritmo mucho más
            lento. Cuando los operandos no residen en registros o en SRAM local, los aceleradores
            pasan cientos de ciclos de reloj{" "}
            <strong className="text-white">completamente ociosos esperando datos</strong>.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            A esto se suma la termodinámica: ejecutar una instrucción matemática{" "}
            <strong className="text-mfqc-cyan">FMA</strong> en registros locales cuesta una fracción
            de picojulio (pJ), mientras que traer un solo operando de 64 bits desde memoria externa
            consume de <strong className="text-white">100 a 1,000 veces más energía física</strong>.
            En supercómputo moderno, mover los bytes es sustancialmente más costoso que procesarlos.
          </p>
        </div>
      </SlideSection>

      {/* 2. SWITCHES DE ALTA RADIX & CONGESTIÓN */}
      <SlideSection
        brand="MFQC // INTERCONEXIÓN"
        meta="SYS.04B — SWITCHES DE ALTA RADIX & CONGESTIÓN"
        title={
          <>
            Redes a Escala: <span className="text-mfqc-yellow">Switches de Alta Radix</span> &amp;{" "}
            <span className="text-mfqc-cyan">Congestión</span> 🔀
          </>
        }
        lead="Conectar decenas de miles de aceleradores a 800 Gb/s exige conmutadores de cientos de puertos y topologías avanzadas para evitar el colapso del tráfico."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            A escala de centro de datos, los clústeres despliegan conmutadores gigantescos de alta
            radix (
            <strong className="text-white">NVSwitch, InfiniBand Quantum-2, Ultra Ethernet</strong>)
            organizados en topologías de red no bloqueantes como{" "}
            <strong className="text-mfqc-yellow">Fat-Tree</strong> o{" "}
            <strong className="text-mfqc-cyan">Dragonfly+</strong>. La meta es garantizar múltiples
            caminos de comunicación sin cuellos de botella estructurales entre cualquier par de
            nodos.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Sin embargo, la física de colas impone desafíos implacables: cuando cientos de
            aceleradores transmiten simultáneamente hacia el mismo nodo de destino, se produce el
            temido fenómeno de <strong className="text-white">in-cast congestion</strong> y el
            bloqueo de cabeza de línea (
            <strong className="text-mfqc-yellow">head-of-line blocking</strong>), desbordando los
            buffers de los switches y provocando caídas masivas en el rendimiento efectivo de la
            red.
          </p>
        </div>
      </SlideSection>

      {/* 3. TAIL LATENCY EN OPERACIONES COLECTIVAS */}
      <SlideSection
        brand="MFQC // LATENCIA DE COLA"
        meta="SYS.04C — LA TIRANÍA DE LA LATENCIA DE COLA"
        title={
          <>
            La Tiranía del Nodo Más Lento: <span className="text-mfqc-cyan">Tail Latency</span> ⏱️
          </>
        }
        lead="En sincronizaciones globales masivas de supercómputo e IA, el paso de cálculo completo avanza a la velocidad del paquete más rezagado."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            En algoritmos de entrenamiento distribuido y simulaciones numéricas, miles de núcleos
            deben intercambiar gradientes o fronteras espaciales mediante operaciones colectivas
            como <strong className="text-mfqc-cyan">AllReduce</strong> o barreras MPI. En estas
            fases, ningún procesador puede continuar con el siguiente ciclo hasta que el último nodo
            del clúster haya completado su transmisión.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Esto genera la tiranía de la{" "}
            <strong className="text-white">latencia de cola (tail latency)</strong>: si un solo
            enlace sufre fluctuación térmica (<em>jitter</em>), una retransmisión por pérdida de
            paquetes o contención transitoria, ese único rezagado (<em>straggler</em>) detiene en
            seco a decenas de miles de GPUs de última generación, transformando una inversión de
            cientos de millones de dólares en silicio ocioso.
          </p>
        </div>
      </SlideSection>

      {/* 4. LITOGRAFÍA EXTREMA & NODOS ANGSTROM */}
      <SlideSection
        brand="MFQC // FÍSICA DEL SILICIO"
        meta="SYS.04D — LITOGRAFÍA EXTREMA & NODOS ANGSTROM"
        title={
          <>
            Límite Atómico: <span className="text-mfqc-yellow">Nodos Angstrom</span> &amp;{" "}
            <span className="text-mfqc-cyan">Transistores GAA</span> 🔬
          </>
        }
        lead="Al aproximarse a las dimensiones de un átomo de silicio, la litografía tradicional colisiona frontalmente contra la mecánica cuántica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            En la era de los nodos sub-2 nm y la escala Angstrom (
            <strong className="text-white">2 nm, A16, 14A</strong>), la fabricación de chips exige
            escáneres ópticos de radiación ultravioleta extrema{" "}
            <strong className="text-mfqc-yellow">EUV High-NA (0.55 NA)</strong>. A estas escalas,
            los transistores FinFET tradicionales son reemplazados por nanocintas apiladas{" "}
            <em>Gate-All-Around (GAA)</em>, donde la compuerta envuelve por completo el canal de
            silicio para suprimir fugas cuánticas por efecto túnel.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Para resolver la resistencia parásita en las líneas de potencia, la industria introduce
            la alimentación por el reverso:{" "}
            <strong className="text-mfqc-cyan">Backside Power Delivery</strong> (PowerVia). Mover
            los rieles de suministro eléctrico al reverso del die elimina caídas críticas de voltaje
            (<em>IR drop</em>) y libera la cara frontal exclusivamente para pistas de señal de
            altísima velocidad.
          </p>
        </div>
      </SlideSection>

      {/* 5. ARQUITECTURA DE CHIPLETS & EMPAQUETADO 2.5D/3D */}
      <SlideSection
        brand="MFQC // EMPAQUETADO AVANZADO"
        meta="SYS.04E — CHIPLETS & EMPAQUETADO 2.5D/3D"
        title={
          <>
            El Fin del Silicio Monolítico: <span className="text-mfqc-yellow">Chiplets</span> &amp;{" "}
            <span className="text-mfqc-cyan">CoWoS 3D</span> 🧩
          </>
        }
        lead="Construir megachips de una sola pieza ya no es viable física ni económicamente: el futuro del cómputo radica en la modularidad 3D."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Un acelerador moderno de IA o HPC superaría con creces el límite físico de retículo de
            las máquinas de litografía (<strong className="text-white">~858 mm²</strong>). Intentar
            fabricar un die gigante monolítico se traduce en rendimientos de oblea (<em>yield</em>)
            desastrosos y costos prohibitivos.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            La solución universal es la{" "}
            <strong className="text-mfqc-yellow">arquitectura de chiplets</strong>: el procesador se
            descompone en dies especializados interconectados a través de sustratos de silicio
            pasivo o activo de ultra alta densidad (
            <strong className="text-white">TSMC CoWoS</strong>, Intel EMIB) y apilamiento
            tridimensional (<strong className="text-mfqc-cyan">TSMC SoIC</strong>), rodeando los
            núcleos con pilas verticales de memoria HBM3e con miles de micro-bumps por milímetro
            cuadrado.
          </p>
        </div>
      </SlideSection>

      {/* 6. DEL COBRE A LA FOTÓNICA */}
      <SlideSection
        brand="MFQC // INTERCONEXIÓN ÓPTICA"
        meta="SYS.04F — EL COBRE SE QUEDA CORTO: FOTÓNICA & CPO"
        title={
          <>
            El Cobre se Queda Corto: De Electrones a la{" "}
            <span className="text-mfqc-cyan">Fotónica (CPO)</span> 💡
          </>
        }
        lead="A velocidades de 800G y 1.6T, enviar electrones por cables de cobre genera pérdidas resistivas inasumibles: la luz debe viajar directo al chip."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            A frecuencias de decenas de gigahercios por canal SerDes, el efecto pelicular y la
            atenuación disipan la señal eléctrica en apenas uno o dos metros. Los cables de cobre
            directos (DAC) se vuelven tan gruesos, rígidos y calientes que saturan el volumen físico
            de los racks y disipan vatios preciosos únicamente en vencer la resistencia del
            conductor.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            La respuesta disruptiva es{" "}
            <strong className="text-mfqc-cyan">Co-Packaged Optics (CPO)</strong>: en lugar de
            convertir señales eléctricas a ópticas en transceptores del panel frontal, se integran{" "}
            <strong className="text-white">motores fotónicos de silicio (Silicon Photonics)</strong>{" "}
            directamente en el sustrato del procesador o switch. Los fotones nacen a milímetros de
            los núcleos, recortando drásticamente la latencia y el consumo energético de la red.
          </p>
        </div>
      </SlideSection>

      {/* 7. TERMODINÁMICA & ENFRIAMIENTO LÍQUIDO */}
      <SlideSection
        brand="MFQC // TERMODINÁMICA"
        meta="SYS.04G — TERMODINÁMICA & ENFRIAMIENTO LÍQUIDO"
        title={
          <>
            Termodinámica Extrema: <span className="text-mfqc-yellow">Direct Liquid Cooling</span>{" "}
            &amp; <span className="text-mfqc-cyan">Inmersión</span> ❄️
          </>
        }
        lead="Los ventiladores ruidosos han tocado techo: remover 1,000+ vatios de un área milimétrica exige física de fluidos de alta capacidad térmica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Con procesadores superando los{" "}
            <strong className="text-mfqc-yellow">1,000 W por socket</strong> y densidades de rack de
            100 a 130+ kW, el enfriamiento por aire forzado es físicamente inviable: requeriría
            turbinas que consumirían más electricidad que los propios cálculos y provocarían
            estrangulamiento térmico (<em>thermal throttling</em>) inmediato en los nodos.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Los centros de datos de supercómputo han hecho la transición obligatoria a{" "}
            <strong className="text-mfqc-cyan">Direct Liquid Cooling (DLC)</strong> mediante placas
            frías que bombean agua tibia (~30–45 °C) acopladas directamente sobre el silicio con
            CDUs, o a <strong className="text-white">inmersión bifásica</strong>, donde los
            servidores completos se sumergen en fluidos dieléctricos que hierven al contacto con el
            chip transfiriendo calor por cambio de fase de manera extraordinariamente eficiente.
          </p>
        </div>
      </SlideSection>

      {/* 8. DATACENTERS DE GIGAWATT & ENERGÍA */}
      <SlideSection
        brand="MFQC // ENERGÍA & PLANETA"
        meta="SYS.04H — DATACENTERS DE ESCALA GIGAWATT & ENERGÍA"
        title={
          <>
            Consumo Energético: La Era de los{" "}
            <span className="text-mfqc-yellow">Datacenters de Gigawatt</span> ⚡
          </>
        }
        lead="El techo de cristal para la próxima era de la IA y el supercómputo ya no son los transistores, sino la capacidad física de la red eléctrica."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Los clústeres proyectados para la frontera de la inteligencia artificial demandan entre{" "}
            <strong className="text-mfqc-yellow">cientos de megavatios y más de 1 Gigavatio</strong>{" "}
            de potencia eléctrica continua por instalación: el consumo equivalente al de una ciudad
            entera, colapsando la capacidad de las subestaciones y líneas de transmisión regionales.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Esta crisis impulsa contratos directos con centrales nucleares, inversiones masivas en{" "}
            <strong className="text-mfqc-cyan">Reactores Modulares Pequeños (SMRs)</strong>{" "}
            dedicados en el campus del datacenter y una obsesión absoluta por la métrica reina del
            supercómputo: el ranking <strong className="text-white">Green500</strong> y los{" "}
            <strong className="text-white">GFLOPS por Vatio</strong>. Sin eficiencia energética
            extrema, ningún algoritmo a gran escala puede desplegarse.
          </p>
        </div>
      </SlideSection>

      {/* 9. JERARQUÍAS PROFUNDAS DE MEMORIA */}
      <SlideSection
        brand="MFQC // ARQUITECTURA DEL SILICIO"
        meta="SYS.04I — JERARQUÍAS PROFUNDAS DE MEMORIA"
        title={
          <>
            Domar a la Bestia: La Pirámide de{" "}
            <span className="text-mfqc-yellow">Jerarquías de Memoria</span> 🏔️
          </>
        }
        lead="En un acelerador moderno no existe una sola memoria: dominar el rendimiento exige orquestar datos a través de una pirámide vertical de latencias."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Un chip de cómputo avanzado alberga múltiples niveles de almacenamiento interno con
            características radicalmente opuestas: registros vectoriales privados de velocidad de
            ciclo cero, memoria compartida (<strong className="text-white">SRAM</strong>) de baja
            latencia por Streaming Multiprocessor, y memorias apiladas{" "}
            <strong className="text-mfqc-yellow">HBM3e</strong> con varios terabytes por segundo de
            ancho de banda agregado.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Subir un escalón innecesario en la jerarquía (por ejemplo, permitir que un tensor de uso
            frecuente resida en HBM en lugar de en SRAM compartida o registros) penaliza el tiempo
            de acceso en{" "}
            <strong className="text-mfqc-cyan">órdenes de magnitud (10× a 100×)</strong>. El arte
            del cómputo de alto rendimiento consiste en mantener el flujo de datos lo más cerca
            posible de las ALUs matemáticas en todo momento.
          </p>
        </div>
      </SlideSection>

      {/* 10. ASINCRONÍA, TMA & SILICIO OCIOSO */}
      <SlideSection
        brand="MFQC // HARDWARE ASÍNCRONO"
        meta="SYS.04J — ASINCRONÍA, TMA & SILICIO OCIOSO"
        title={
          <>
            Domar a la Bestia: <span className="text-mfqc-yellow">Asincronía</span> &amp;{" "}
            <span className="text-mfqc-cyan">Silicio Ocioso</span> ⚙️
          </>
        }
        lead="Tener silicio de última generación no garantiza velocidad: sin asincronía agresiva, los motores matriciales pasan la mayor parte del tiempo durmiendo."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            Para evitar que los núcleos de cómputo se detengan a esperar transferencias de memoria,
            arquitecturas modernas como NVIDIA Hopper y Blackwell incorporan motores de copia por
            hardware independientes, como el{" "}
            <strong className="text-mfqc-cyan">Tensor Memory Accelerator (TMA)</strong>. El TMA
            transfiere bloques multidimensionales entre memoria global y SRAM de forma completamente
            asíncrona mientras los núcleos ejecutan operaciones matemáticas concurrentes.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
            Si el programador introduce sincronizaciones innecesarias (<em>barriers</em>),
            contención en los bancos de memoria (<em>bank conflicts</em>) o falla en solapar las
            copias de red con el cálculo local, el clúster sufre de{" "}
            <strong className="text-white">silicio ocioso</strong>: un supercomputador
            multimillonario puede terminar operando a menos del 15% de sus FLOPS teóricos,
            desperdiciando teravatios de potencia eléctrica.
          </p>
        </div>
      </SlideSection>

      {/* 11. EL RETO DE LA PROGRAMABILIDAD */}
      <SlideSection
        brand="MFQC // EL RETO DEL SOFTWARE"
        meta="SYS.04K — DOMAR A LA BESTIA: PROGRAMABILIDAD"
        title={
          <>
            Domar a la Bestia: El Gran Reto de la{" "}
            <span className="text-mfqc-yellow">Programabilidad</span> 💻
          </>
        }
        lead="De nada sirve construir un supercomputador de gigavatios si el software no es capaz de exprimir el silicio sin reescribir millones de líneas cada dos años."
      >
        <div className="max-w-[1240px]">
          <p className="font-sans text-[17px] leading-[1.65] text-white/90 md:text-[25px] md:leading-[1.6]">
            El supercómputo enfrenta una auténtica Torre de Babel de pilas de software propietarias:
            CUDA, ROCm/HIP, SYCL/oneAPI, Triton, OpenMP y MPI. El código sintonizado minuciosamente
            al ciclo de reloj para una arquitectura específica queda con frecuencia completamente
            inutilizable al migrar a otro fabricante o a aceleradores emergentes como TPUs o
            Tenstorrent.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-[1.6] text-mfqc-gray md:mt-6 md:text-[21px] md:leading-[1.55]">
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
