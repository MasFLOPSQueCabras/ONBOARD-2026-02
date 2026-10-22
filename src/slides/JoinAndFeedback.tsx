import { Slide } from "../components/RevealDeck";
import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "../config";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export interface JoinAndFeedbackProps {
  onOpenPoster?: () => void;
}

export function JoinAndFeedback({ onOpenPoster }: JoinAndFeedbackProps) {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // FEEDBACK WALL"
        meta="MURO DE POST-ITS"
        title={
          <>
            ¡Deja tu <span className="text-mfqc-yellow">Post-it</span> en la Mesa!
          </>
        }
        lead="Toma un Post-it de color y un marcador, cuéntanos tu idea y pégalo en nuestro muro de feedback."
      >
        <FeatureGrid>
          <FeatureItem tag="PREGUNTA 01 / IMAGINA" title="¿Qué correrías en 1,000 GPUs?">
            Si tuvieras acceso ilimitado a un supercomputador por un día, ¿qué simularías,
            entrenarías o calcularías?
          </FeatureItem>

          <FeatureItem
            tag="PREGUNTA 02 / CONSTRUYE"
            title="¿Qué te gustaría aprender o aportar?"
            accent="cyan"
          >
            Cuéntanos qué área te llama más la atención (Infra/Linux, GPUs/Mojo, Profilers/eBPF,
            Ciencia) o déjanos tu feedback.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection brand="MFQC // ONBOARDING" meta="ÚNETE AL EQUIPO">
        <FeatureGrid className="items-center!">
          <div className="flex flex-col gap-3 md:gap-7">
            <h2 className="font-display text-[33px]! leading-[1.08]! font-extrabold text-white md:text-[64px]! md:leading-[1.06]!">
              Únete a <span className="text-mfqc-yellow">Más FLOPS que Cabras</span> 🐐
            </h2>

            <p className="m-0! font-sans text-[16px]! leading-[1.42]! text-mfqc-gray md:text-[24px]! md:leading-[1.5]!">
              Buscamos estudiantes curiosos y profesores colaboradores rumbo a{" "}
              <strong className="text-mfqc-cyan">SC, CARLA y ASC 2027</strong>.
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

            {onOpenPoster && (
              <div>
                <button
                  type="button"
                  onClick={onOpenPoster}
                  className="cursor-pointer border-none bg-mfqc-cyan px-3.5 py-2 font-mono text-[12px] font-extrabold tracking-[0.1em] text-mfqc-black uppercase shadow-[3px_3px_0px_#ffe600] md:px-5 md:py-2.5 md:text-[14.4px] md:shadow-[4px_4px_0px_#ffe600]"
                >
                  Ver Cartel / Imprimir
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center gap-4.5">
            <div className="inline-flex border-4 border-mfqc-yellow bg-white p-3 shadow-[8px_8px_0px_#00f5d4] md:p-7 md:shadow-[14px_14px_0px_#00f5d4]">
              <QRCodeSVG
                value={MFQC_CONFIG.onboardingQrUrl}
                size={340}
                bgColor="#ffffff"
                fgColor="#08080c"
                level="H"
                className="h-[148px] w-[148px] md:h-[340px] md:w-[340px]"
              />
            </div>
            <span className="font-mono text-[12px] font-bold tracking-[0.14em] text-mfqc-yellow uppercase md:text-[16.8px]">
              [ ESCANEA PARA VER EN TU CELULAR ]
            </span>
          </div>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
