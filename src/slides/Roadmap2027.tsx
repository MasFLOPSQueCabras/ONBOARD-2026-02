import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function Roadmap2027() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // ROADMAP 2027"
        meta="PRÓXIMAS COMPETENCIAS"
        title={
          <>
            Temporada <span className="text-mfqc-yellow">2027</span>: El Triple Reto
          </>
        }
        lead={
          <>
            El próximo año planeamos llevar a{" "}
            <strong className="text-white">Más FLOPS que Cabras</strong> a las tres grandes ligas
            internacionales de HPC.
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem tag="01 / ASIA & MUNDIAL" title="ASC Challenge">
            <strong className="text-white">Asia Student Supercomputer Challenge:</strong> El torneo
            estudiantil de supercomputación más masivo del mundo.
          </FeatureItem>

          <FeatureItem tag="02 / LATINOAMÉRICA" title="CARLA SCC" accent="cyan">
            Volver con toda la experiencia acumulada en 2026 para buscar el podio regional en
            Latinoamérica.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // ROADMAP 2027"
        meta="LA CUMBRE MUNDIAL"
        title={
          <>
            Rumbo a <span className="text-mfqc-cyan">SuperComputing</span>
          </>
        }
        lead="Preparación continua para competir frente a las mejores universidades del mundo."
      >
        <FeatureGrid>
          <FeatureItem tag="03 / ESTADOS UNIDOS" title="SuperComputing (SC) SCC">
            La conferencia y competencia más prestigiosa del planeta en computación de alto
            rendimiento, redes, almacenamiento y análisis.
          </FeatureItem>

          <FeatureItem tag="OBJETIVO DEL EQUIPO" title="Competir al Máximo Nivel" accent="cyan">
            Consolidar un equipo interdisciplinario capaz de enfrentar hardware de última generación
            y cargas reales de ciencia e IA.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
