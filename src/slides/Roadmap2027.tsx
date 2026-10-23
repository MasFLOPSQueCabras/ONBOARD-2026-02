import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureItem } from "../components/FeatureGrid";

export function Roadmap2027() {
  return (
    <Slide>
      {/* 1a. ASC CHALLENGE */}
      <SlideSection
        brand="MFQC // ROADMAP 2027"
        meta="COMPETENCIA 01: ASIA & MUNDIAL"
        title={
          <>
            Temporada 2027: <span className="text-mfqc-yellow">ASC Challenge</span>
          </>
        }
        lead="Llevar a Más FLOPS que Cabras a las ligas de supercómputo más masivas del mundo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / ASIA & MUNDIAL" title="Asia Student Supercomputer Challenge">
            El torneo estudiantil de supercomputación más masivo del planeta, enfrentando a más de
            300 universidades internacionales en optimización de aplicaciones de frontera e IA.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 1b. CARLA SCC */}
      <SlideSection
        brand="MFQC // ROADMAP 2027"
        meta="COMPETENCIA 02: LATINOAMÉRICA"
        title={
          <>
            Temporada 2027: <span className="text-mfqc-cyan">CARLA SCC</span>
          </>
        }
        lead="Consolidar el liderazgo regional en la conferencia latinoamericana de supercómputo."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="02 / LATINOAMÉRICA" title="Retorno a CARLA por el Podio" accent="cyan">
            Volver con toda la experiencia técnica acumulada en 2026 para disputar el podio regional
            en Latinoamérica y liderar la comunidad estudiantil de HPC en la región.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2a. SUPERCOMPUTING (SC) */}
      <SlideSection
        brand="MFQC // ROADMAP 2027"
        meta="COMPETENCIA 03: LA CUMBRE MUNDIAL"
        title={
          <>
            Rumbo a <span className="text-mfqc-yellow">SuperComputing (SC)</span>
          </>
        }
        lead="La conferencia y competencia de HPC más prestigiosa e influyente del planeta."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="03 / ESTADOS UNIDOS" title="SuperComputing (SC) SCC">
            La meca internacional de computación de alto rendimiento, redes, almacenamiento y
            análisis, reuniendo a las mejores universidades del mundo en Estados Unidos.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2b. OBJETIVO DEL EQUIPO */}
      <SlideSection
        brand="MFQC // ROADMAP 2027"
        meta="MISIÓN DEL SEMILLERO"
        title={
          <>
            Misión: <span className="text-mfqc-cyan">Competir al Máximo Nivel</span>
          </>
        }
        lead="Formar a la próxima generación de científicos e ingenieros de supercómputo del país."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="OBJETIVO DEL EQUIPO"
            title="Consolidación Interdisciplinaria"
            accent="cyan"
          >
            Consolidar un equipo interdisciplinario de alto rendimiento capaz de configurar clusters
            desde el silicio y acelerar cargas reales de ciencia, clima e inteligencia artificial.
          </FeatureItem>
        </div>
      </SlideSection>
    </Slide>
  );
}
