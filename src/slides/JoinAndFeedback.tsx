import { Slide } from "../components/RevealDeck";
import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "../config";
import { SlideSection } from "../components/SlideSection";
import { FeatureItem } from "../components/FeatureGrid";

export interface JoinAndFeedbackProps {
  onOpenPoster?: () => void;
}

export function JoinAndFeedback({ onOpenPoster }: JoinAndFeedbackProps) {
  return (
    <Slide>
      {/* 1a. FEEDBACK: PREGUNTA 1 */}
      <SlideSection
        brand="MFQC // FEEDBACK"
        meta="MURO DE POST-ITS: PREGUNTA 01"
        title={
          <>
            ¡Deja tu <span className="text-mfqc-yellow">Post-it</span> en la Mesa!
          </>
        }
        lead="Toma un Post-it de color y un marcador, cuéntanos tu idea y pégalo en nuestro muro de feedback."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="PREGUNTA 01 / IMAGINA" title="¿Qué correrías en 1,000 GPUs?">
            Si tuvieras acceso ilimitado a un supercomputador por un día completo, ¿qué modelo de IA
            entrenarías, qué fenómeno físico simularías o qué problema intentarías resolver?
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 1b. FEEDBACK: PREGUNTA 2 */}
      <SlideSection
        brand="MFQC // FEEDBACK"
        meta="MURO DE POST-ITS: PREGUNTA 02"
        title={
          <>
            Construyamos Juntos: <span className="text-mfqc-cyan">¿Qué Quieres Aprender?</span>
          </>
        }
        lead="El semillero lo construimos entre todos según las pasiones de la comunidad."
      >
        <div className="max-w-[1100px]">
          <FeatureItem
            tag="PREGUNTA 02 / CONSTRUYE"
            title="¿Qué área te llama más la atención?"
            accent="cyan"
          >
            Cuéntanos qué área te interesa explorar: Infraestructura y Linux bare-metal, aceleración
            con GPUs y Mojo, perfilamiento con eBPF o ciencia computacional.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2a. ÚNETE AL EQUIPO */}
      <SlideSection brand="MFQC // ONBOARDING" meta="COMUNIDAD & CONTACTO">
        <div className="flex max-w-[1100px] flex-col gap-4 md:gap-8">
          <h2 className="font-display text-[26px]! leading-[1.12]! font-extrabold text-white md:text-[64px]! md:leading-[1.06]!">
            Únete a <span className="text-mfqc-yellow">Más FLOPS que Cabras</span> 🐐
          </h2>

          <p className="m-0! font-sans text-[13.5px]! leading-[1.42]! text-mfqc-gray md:text-[24px]! md:leading-[1.5]!">
            Buscamos estudiantes curiosos y profesores colaboradores con ganas de aprender y
            competir rumbo a <strong className="text-mfqc-cyan">SC, CARLA y ASC 2027</strong>.
          </p>

          <FeatureItem
            tag="CONTACTO & COMUNIDAD"
            title={
              <a
                href={`mailto:${MFQC_CONFIG.contactEmail}`}
                className="text-white no-underline hover:text-mfqc-yellow"
              >
                {MFQC_CONFIG.contactEmail}
              </a>
            }
          >
            <a
              href={MFQC_CONFIG.githubOrgUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-mfqc-cyan no-underline hover:underline"
            >
              github.com/MasFLOPSQueCabras
            </a>
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2b. QR & CARTEL */}
      <SlideSection brand="MFQC // CONÉCTATE" meta="ESCANEA & COMPARTE">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <div className="inline-flex border-4 border-mfqc-yellow bg-white p-3 shadow-[8px_8px_0px_#00f5d4] md:p-6 md:shadow-[14px_14px_0px_#00f5d4]">
            <QRCodeSVG
              value={MFQC_CONFIG.onboardingQrUrl}
              size={240}
              bgColor="#ffffff"
              fgColor="#08080c"
              level="H"
              className="h-[140px] w-[140px] md:h-[240px] md:w-[240px]"
            />
          </div>

          <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-mfqc-yellow uppercase md:text-[16px]">
            [ ESCANEA PARA VER ESTA PRESENTACIÓN EN TU CELULAR ]
          </span>

          {onOpenPoster && (
            <div className="mt-1">
              <button
                type="button"
                onClick={onOpenPoster}
                className="cursor-pointer border-none bg-mfqc-cyan px-4 py-2 font-mono text-[12px] font-extrabold tracking-[0.1em] text-mfqc-black uppercase shadow-[3px_3px_0px_#ffe600] transition-all hover:bg-white md:px-6 md:py-3 md:text-[14px] md:shadow-[4px_4px_0px_#ffe600]"
              >
                Ver Cartel / Imprimir 📄
              </button>
            </div>
          )}
        </div>
      </SlideSection>
    </Slide>
  );
}
