import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { StatementSlide } from "../components/StatementSlide";
import { FeatureItem } from "../components/FeatureGrid";
import { MemoryLatencyChart } from "../components/charts/MemoryLatencyChart";

export function UarchAndBenchmarks() {
  return (
    <Slide>
      {/* 1. UARCH: CPU & MEMORIA */}
      <SlideSection
        brand="MFQC // UARCH"
        meta="MICROARQUITECTURA DE CPU"
        title={
          <>
            La uArch del Servidor: <span className="text-mfqc-yellow">CPUs &amp; Memoria</span>
          </>
        }
        lead="Para dominar un supercomputador, primero entendemos cómo viaja cada bit dentro de un procesador moderno."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="CPU + MEMORIA" title="SIMD, Cachés y Localidad NUMA">
            Registros vectoriales AVX-512 / AVX10, jerarquía de memorias caché ultrarrápidas{" "}
            <strong className="text-white">L1 / L2 / L3</strong> y la afinidad de memoria entre
            sockets en arquitecturas NUMA.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2. UARCH: GPUS & ACELERADORES */}
      <SlideSection
        brand="MFQC // UARCH"
        meta="ACELERADORES Y BUSES"
        title={
          <>
            Silicio Especializado: <span className="text-mfqc-cyan">GPUs &amp; Enlaces PCIe</span>
          </>
        }
        lead="Cuando un cálculo exige millones de hilos concurrentes, el procesador central delega la tarea a silicio especializado."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="ACELERADORES" title="Paralelismo Masivo & Memoria HBM" accent="cyan">
            Cómputo en decenas de miles de hilos concurrentes sobre memorias de altísimo ancho de
            banda (<strong className="text-mfqc-cyan">VRAM GDDR / HBM3e</strong>) interconectadas
            por carriles PCIe Gen 5 y enlaces propietarios.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 3. BENCHMARK: HPL LINPACK */}
      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="POTENCIA BRUTA: TFLOPS"
        title={
          <>
            Midiendo el Techo de Cálculo: <span className="text-mfqc-yellow">HPL (Linpack)</span>
          </>
        }
        lead="El estándar de oro internacional utilizado para clasificar los supercomputadores más rápidos del planeta en el TOP500."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="MÉTRICA: TFLOPS (FP64)" title="Sistemas Lineales Densos">
            Resuelve un gigantesco sistema lineal de ecuaciones densas utilizando álgebra de
            matrices y precisión doble de 64 bits para medir los FLOPS reales sostenibles del
            hardware.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 4. BENCHMARK: STREAM */}
      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="ANCHO DE BANDA: GB/s"
        title={
          <>
            Alimentando los Núcleos: Benchmark <span className="text-mfqc-cyan">STREAM</span>
          </>
        }
        lead="Calcular rápido no sirve de nada si la memoria no entrega los datos a tiempo: STREAM mide la velocidad real de la RAM."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="MÉTRICA: GB/s" title="Ancho de Banda Sostenido" accent="cyan">
            Ejecuta operaciones vectoriales sencillas (Copy, Scale, Add, Triad) para evaluar el
            ancho de banda real que la memoria principal DDR5 puede sostener continuamente.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 5. BENCHMARK: MULTICHASE */}
      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="LATENCIA: NANOSEGUNDOS"
        title={
          <>
            La Física del Tiempo: <span className="text-mfqc-yellow">multichase</span>
          </>
        }
        lead="Diagnóstico de tiempos de acceso y saltos de latencia en cada nivel de caché y socket."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="MÉTRICA: NANOSEGUNDOS (ns)" title="Pointer Chasing de Memoria">
            Mide el retraso exacto de ida y vuelta para leer un byte mediante persecución de
            punteros, revelando con precisión quirúrgica el tiempo de respuesta de L1, L2, L3 y la
            RAM local o remota.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 6. BENCHMARK: HWLOC */}
      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="TOPOLOGÍA DEL SERVIDOR"
        title={
          <>
            El Mapa del Servidor: <span className="text-mfqc-cyan">hwloc</span>
          </>
        }
        lead="Conocer la geometría física interna del equipo es indispensable para asignar procesos con mínima latencia."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="MÉTRICA: TOPOLOGÍA FÍSICA"
            title="Descubrimiento de Hardware"
            accent="cyan"
          >
            Mapea la estructura jerárquica del servidor: qué núcleos comparten qué nivel de caché,
            qué sockets acceden a qué memoria NUMA y qué tarjetas GPU están ancladas a cada bus
            PCIe.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 7a. STATEMENT: ANALOGÍA DE LATENCIA */}
      <StatementSlide
        brand="MFQC // BENCHMARKS"
        meta="ESCALA HUMANA DE TIEMPOS"
        tag="ANALOGÍA: SI 1 CICLO FUERA 1 SEGUNDO"
        statement={
          <>
            Si 1 ciclo de reloj equivaliera a <span className="text-mfqc-yellow">1 segundo</span>:
            <span className="mt-1.5 block">
              leer memoria RAM toma <span className="text-mfqc-cyan">varios minutos</span>,
            </span>
            <span className="mt-1.5 block">
              y salir a la red tradicional equivale a{" "}
              <span className="text-mfqc-yellow">esperar 3 días</span>.
            </span>
          </>
        }
        detail="A nivel de silicio 1 ciclo son 0.25 nanosegundos. Si los datos no están preparados en las cachés ultrarrápidas L1/L2/L3, el procesador queda completamente paralizado esperando una eternidad en tiempo relativo."
        accent="yellow"
      />

      {/* 7b. GRÁFICA DE LATENCIA */}
      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="JERARQUÍA DE MEMORIA (MULTICHASE)"
        title={
          <>
            La Escalera de Latencia: <span className="text-mfqc-yellow">Del Registro</span> a la{" "}
            <span className="text-mfqc-cyan">Red</span>
          </>
        }
        lead="Medición precisa con multichase: el costo temporal de saltar a través de cada peldaño de la jerarquía de memoria física."
      >
        <div className="w-full max-w-[1340px]">
          <MemoryLatencyChart />
        </div>
      </SlideSection>
    </Slide>
  );
}
