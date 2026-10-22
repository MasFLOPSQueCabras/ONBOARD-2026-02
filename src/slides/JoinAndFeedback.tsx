import { Slide } from "@revealjs/react";
import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "../config";

export interface JoinAndFeedbackProps {
  onOpenPoster?: () => void;
}

export function JoinAndFeedback({ onOpenPoster }: JoinAndFeedbackProps) {
  return (
    <Slide>
      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // FEEDBACK WALL</span>
            <span className="mfqc-topbar-meta">SYS.07 — MURO DE POST-ITS</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                ¡Deja tu <span style={{ color: "#ffe600" }}>Post-it</span> en la Mesa! 📝
              </h2>
              <p className="mfqc-lead">
                Toma un Post-it de color y un marcador, cuéntanos tu idea y pégalo en nuestro muro
                de feedback.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">PREGUNTA 01 / IMAGINA</span>
                <h3>¿Qué correrías en 1,000 GPUs?</h3>
                <p>
                  Si tuvieras acceso ilimitado a un supercomputador por un día, ¿qué simularías,
                  entrenarías o calcularías?
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">PREGUNTA 02 / CONSTRUYE</span>
                <h3>¿Qué te gustaría aprender o aportar?</h3>
                <p>
                  Cuéntanos qué área te llama más la atención (Infra/Linux, GPUs/Mojo,
                  Profilers/eBPF, Ciencia) o déjanos tu feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // ONBOARDING</span>
            <span className="mfqc-topbar-meta">SYS.07B — ÚNETE AL EQUIPO</span>
          </div>

          <div className="mfqc-body">
            <div className="mfqc-split-2" style={{ alignItems: "center" }}>
              <div className="mfqc-stack">
                <h2 className="mfqc-headline">
                  Únete a <span style={{ color: "#ffe600" }}>Más FLOPS que Cabras</span> 🐐
                </h2>

                <p className="mfqc-lead mfqc-lead-tight">
                  Buscamos estudiantes curiosos y profesores colaboradores rumbo a{" "}
                  <strong style={{ color: "#00f5d4" }}>SC, CARLA y ASC 2027</strong>.
                </p>

                <div className="mfqc-col">
                  <span className="mfqc-col-num">CONTACTO &amp; COMUNIDAD</span>
                  <h3>{MFQC_CONFIG.contactEmail}</h3>
                  <p style={{ fontFamily: "var(--font-mono)" }}>github.com/MasFLOPSQueCabras</p>
                </div>

                {onOpenPoster && (
                  <div className="mfqc-poster-btn-wrap">
                    <button type="button" onClick={onOpenPoster} className="mfqc-poster-btn">
                      🖨️ Vista Cartel QR (Tamaño Carta)
                    </button>
                  </div>
                )}
              </div>

              <div className="mfqc-qr-wrap">
                <div className="mfqc-qr-box">
                  <QRCodeSVG
                    value={MFQC_CONFIG.onboardingQrUrl}
                    size={340}
                    bgColor="#ffffff"
                    fgColor="#08080c"
                    level="H"
                  />
                </div>
                <span className="mfqc-qr-caption">[ ESCANEA PARA UNIRTE DIRECTO ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
