import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function UarchAndBenchmarks() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // UARCH"
        meta="SYS.02 — LO QUE HEMOS ABORDADO"
        title={
          <>
            La <span className="text-mfqc-yellow">uArch</span> de un PC &amp;{" "}
            <span className="text-mfqc-cyan">GPUs</span>
          </>
        }
        lead="Para dominar un supercomputador, primero entendemos cómo fluye cada byte dentro de un nodo."
      >
        <FeatureGrid>
          <FeatureItem tag="CPU + MEMORIA" title="SIMD, Cachés y NUMA">
            Registros vectoriales AVX, jerarquía de cachés{" "}
            <strong className="text-white">L1 / L2 / L3</strong> y localidad de memoria entre
            sockets.
          </FeatureItem>

          <FeatureItem tag="ACELERADORES" title="GPUs & Enlaces PCIe" accent="cyan">
            Cómputo masivamente paralelo en miles de núcleos y memoria de altísimo ancho de banda
            (VRAM / HBM).
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="SYS.02B — CÓMPUTO Y MEMORIA"
        title={
          <>
            Cómputo y <span className="text-mfqc-yellow">Ancho de Banda</span>
          </>
        }
        lead="Medimos el techo real de cálculo en punto flotante y la velocidad de transferencia de la memoria RAM."
      >
        <FeatureGrid>
          <FeatureItem tag="MÉTRICA: TFLOPS" title="HPL (Linpack)">
            El estándar del TOP500 para medir el techo real de operaciones en punto flotante
            resolviendo sistemas lineales densos.
          </FeatureItem>

          <FeatureItem tag="MÉTRICA: GB/s" title="STREAM" accent="cyan">
            Mide el ancho de banda real sostenible de la memoria RAM mediante operaciones
            vectoriales (Copy, Scale, Add, Triad).
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // BENCHMARKS"
        meta="SYS.02C — LATENCIA Y TOPOLOGÍA"
        title={
          <>
            Latencia y <span className="text-mfqc-cyan">Topología</span>
          </>
        }
        lead="Diagnosticamos tiempos de acceso a nivel de nanosegundos y el mapa físico de interconexiones del servidor."
      >
        <FeatureGrid>
          <FeatureItem tag="MÉTRICA: NANOSEGUNDOS (ns)" title="multichase">
            Mide la latencia exacta de cada nivel de caché y RAM mediante <em>pointer chasing</em>.
          </FeatureItem>

          <FeatureItem tag="MÉTRICA: MAPA FÍSICO" title="hwloc" accent="cyan">
            Descubre la topología física del servidor: dominios NUMA, sockets, núcleos, cachés y
            enlaces PCIe hacia GPUs.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
