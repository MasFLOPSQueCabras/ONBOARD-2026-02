import { Slide } from "../components/RevealDeck";
import carlaGroupPhoto from "../assets/CARLA_SCC_GROUP.jpeg";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function CarlaSCC2026() {
  return (
    <Slide>
      <SlideSection brand="MFQC // CARLA 2026" meta="EXPERIENCIA EN COMPETENCIA">
        <FeatureGrid className="items-center!">
          <div className="flex flex-col gap-3 md:gap-6">
            <h2 className="font-display text-[33px]! leading-[1.08]! font-extrabold text-white md:text-[64px]! md:leading-[1.06]!">
              Hito: <span className="text-mfqc-yellow">SCC CARLA 2026</span> 🏆
            </h2>

            <p className="m-0! font-sans text-[16px]! leading-[1.42]! text-mfqc-gray md:text-[24px]! md:leading-[1.5]!">
              Representamos a la universidad en la competencia latinoamericana de supercomputación
              enfrentando hardware e infraestructura real.
            </p>

            <FeatureItem tag="HARDWARE REAL BAJO PRESIÓN" title="BMC, Infraestructura & HPL">
              Gestión remota por <strong className="text-white">BMC</strong>, resolución de
              problemas críticos de infraestructura y tuning de{" "}
              <strong className="text-white">InfiniBand + BLAS</strong>.
            </FeatureItem>
          </div>

          <div className="flex justify-center">
            <img
              src={carlaGroupPhoto}
              alt="Equipo Más FLOPS que Cabras en SCC CARLA 2026"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="max-h-[190px] w-full max-w-[640px] border-3 border-mfqc-yellow object-cover shadow-[8px_8px_0px_#00f5d4] md:max-h-[520px] md:shadow-[12px_12px_0px_#00f5d4]"
            />
          </div>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // CARLA 2026"
        meta="INFRAESTRUCTURA Y OPTIMIZACIÓN"
        title={
          <>
            ¿Qué dominamos en <span className="text-mfqc-cyan">CARLA 2026</span>?
          </>
        }
        lead="Experiencia real diagnosticando servidores bare-metal y optimizando librerías numéricas bajo presión."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / BAREMETAL & INFRA" title="Control por BMC y Diagnóstico">
            Administración a bajo nivel mediante <strong className="text-white">BMC</strong> y
            resolución de fallos de infraestructura y red entre nodos en tiempo real.
          </FeatureItem>

          <FeatureItem tag="02 / MÁXIMO RENDIMIENTO" title="InfiniBand, BLAS & HPL" accent="cyan">
            Ajuste fino de interconexión <strong className="text-mfqc-cyan">InfiniBand</strong> y
            librerías matemáticas <strong className="text-mfqc-yellow">BLAS</strong> para exprimir
            cada FLOP en <strong className="text-white">HPL</strong>.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
