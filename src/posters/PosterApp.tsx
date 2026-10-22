import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "../config";

export function PosterApp() {
  const [layout, setLayout] = useState<"portrait" | "landscape">(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("layout") === "landscape") return "landscape";
    }
    return "portrait";
  });

  const isPortrait = layout === "portrait";

  return (
    <div className="min-h-screen w-full bg-mfqc-black font-sans text-white print:bg-mfqc-black">
      {/* Dynamic @page orientation rule with print-safe margins */}
      <style>{`
        @page {
          size: ${isPortrait ? "portrait" : "landscape"};
          margin: 0.35in;
        }
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: #08080c !important;
          }
        }
      `}</style>

      {/* Floating Toolbar — Hidden on Print */}
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-white/20 bg-mfqc-black/90 px-4 py-3 backdrop-blur-md print:hidden sm:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-mfqc-yellow px-2 py-0.5 font-mono text-xs font-extrabold text-mfqc-black uppercase shadow-[2px_2px_0px_#00f5d4]">
            MFQC // POSTER
          </span>
          <span className="font-mono text-xs text-mfqc-gray">Formato Imprimible</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Orientation switch */}
          <div className="flex border border-white/25 bg-mfqc-card p-0.5 font-mono text-xs font-bold">
            <button
              type="button"
              onClick={() => setLayout("portrait")}
              className={`cursor-pointer px-2.5 py-1 transition-colors ${
                isPortrait
                  ? "bg-mfqc-yellow font-extrabold text-mfqc-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              📄 Vertical (Portrait)
            </button>
            <button
              type="button"
              onClick={() => setLayout("landscape")}
              className={`cursor-pointer px-2.5 py-1 transition-colors ${
                !isPortrait
                  ? "bg-mfqc-cyan font-extrabold text-mfqc-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              🖥️ Horizontal (Landscape)
            </button>
          </div>

          {/* Print trigger */}
          <button
            type="button"
            onClick={() => window.print()}
            className="cursor-pointer border-none bg-mfqc-yellow px-4 py-1.5 font-mono text-xs font-extrabold text-mfqc-black shadow-[3px_3px_0px_#00f5d4] hover:brightness-105 active:translate-x-0.5 active:translate-y-0.5"
          >
            🖨️ Imprimir Cartel
          </button>

          {/* Back link */}
          <a
            href="../"
            className="border border-white/30 bg-transparent px-3 py-1.5 font-mono text-xs font-semibold text-white/80 no-underline hover:text-white"
          >
            ← Volver a Slides
          </a>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="flex min-h-[calc(100vh-60px)] items-center justify-center p-3 sm:p-6 print:min-h-0 print:p-0">
        {isPortrait ? (
          /* ================= PORTRAIT LAYOUT ================= */
          <div className="relative box-border flex w-full max-w-[680px] flex-col items-center justify-between border-4 border-mfqc-yellow bg-mfqc-card p-5 text-center shadow-[10px_10px_0px_#00f5d4] sm:p-8 md:shadow-[14px_14px_0px_#00f5d4] print:h-[calc(100vh-0.7in)] print:w-full print:max-w-none print:border-4 print:border-mfqc-yellow print:bg-mfqc-card print:p-6 print:shadow-none">
            {/* Top Badge */}
            <div className="flex w-full items-center justify-between border-b border-white/20 pb-3 font-mono text-xs tracking-wider uppercase sm:text-sm">
              <span className="bg-mfqc-yellow px-2 py-0.5 font-extrabold text-mfqc-black shadow-[2px_2px_0px_#00f5d4]">
                MFQC // SUPERCOMPUTING
              </span>
              <span className="font-bold text-mfqc-cyan">UNIVERSIDAD DE LOS ANDES • 2026</span>
            </div>

            {/* Hero Title */}
            <div className="my-3 sm:my-4">
              <h1 className="m-0 font-display text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                Más{" "}
                <span className="inline-block bg-mfqc-yellow px-2.5 py-0.5 text-mfqc-black shadow-[4px_4px_0px_#00f5d4] sm:px-4 sm:shadow-[6px_6px_0px_#00f5d4]">
                  FLOPS
                </span>
                <br />
                <span className="mt-1 inline-block">que Cabras 🐐</span>
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-mfqc-gray sm:text-lg">
                Para los interesados en que su código corra a la{" "}
                <strong className="text-mfqc-yellow">velocidad de la luz ⚡</strong>
              </p>
            </div>

            {/* QR Card Container */}
            <div className="flex flex-col items-center border-4 border-mfqc-cyan bg-mfqc-black p-3 sm:p-5">
              <div className="bg-white p-2.5 sm:p-3">
                <QRCodeSVG
                  value={MFQC_CONFIG.onboardingQrUrl}
                  title="Código QR para unirse a Más FLOPS que Cabras"
                  size={220}
                  bgColor="#ffffff"
                  fgColor="#08080c"
                  level="H"
                  className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"
                />
              </div>

              <div className="mt-3 font-mono text-xs font-extrabold tracking-widest text-mfqc-yellow uppercase sm:text-base">
                📱 ESCANEA PARA UNIRTE AL GRUPO
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-mfqc-cyan sm:text-xs">
                https://masflopsquecabras.github.io/ONBOARD-2026-02/
              </div>
            </div>

            {/* Competition Roadmap & Footer */}
            <div className="mt-4 w-full border-t border-white/20 pt-3 text-center font-mono text-xs text-mfqc-gray sm:mt-5 sm:text-sm">
              <div className="font-extrabold text-white">
                Rumbo al Student Cluster Competition: SC27 • CARLA • ASC
              </div>
              <div className="mt-1 text-[11px] text-white/60 sm:text-xs">
                Contacto directo:{" "}
                <span className="text-mfqc-yellow">{MFQC_CONFIG.contactEmail}</span> • Bogotá,
                Colombia
              </div>
            </div>

            {/* Brutalist Corner Squares */}
            <div className="absolute -top-2 -left-2 h-4 w-4 bg-mfqc-cyan" />
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-mfqc-yellow" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-mfqc-yellow" />
            <div className="absolute -bottom-2 -right-2 h-4 w-4 bg-mfqc-cyan" />
          </div>
        ) : (
          /* ================= LANDSCAPE LAYOUT ================= */
          <div className="relative box-border flex w-full max-w-[1100px] flex-col justify-between border-4 border-mfqc-cyan bg-mfqc-card p-5 shadow-[12px_12px_0px_#ffe600] sm:p-8 md:shadow-[16px_16px_0px_#ffe600] print:h-[calc(100vh-0.7in)] print:w-full print:max-w-none print:border-4 print:border-mfqc-cyan print:bg-mfqc-card print:p-6 print:shadow-none">
            {/* Top Bar */}
            <div className="flex w-full items-center justify-between border-b border-white/20 pb-3 font-mono text-xs uppercase sm:text-sm">
              <span className="bg-mfqc-cyan px-2.5 py-0.5 font-extrabold text-mfqc-black shadow-[2px_2px_0px_#ffe600]">
                MFQC // SUPERCOMPUTING
              </span>
              <span className="font-bold text-mfqc-yellow">UNIVERSIDAD DE LOS ANDES • 2026</span>
            </div>

            {/* 2 Columns: Info on Left, QR Card on Right */}
            <div className="my-4 grid grid-cols-1 items-center gap-6 sm:my-6 md:grid-cols-12 md:gap-8 print:my-3 print:grid-cols-12">
              {/* Left Column (7 cols) */}
              <div className="flex flex-col gap-3 text-left md:col-span-7 print:col-span-7">
                <h1 className="m-0 font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-5xl">
                  Más{" "}
                  <span className="inline-block bg-mfqc-yellow px-2.5 py-0.5 text-mfqc-black shadow-[5px_5px_0px_#00f5d4] sm:px-4 sm:shadow-[7px_7px_0px_#00f5d4]">
                    FLOPS
                  </span>{" "}
                  que Cabras 🐐
                </h1>

                <p className="text-sm leading-relaxed text-mfqc-gray sm:text-base">
                  Para los interesados en que su código corra a la{" "}
                  <strong className="text-mfqc-yellow">velocidad de la luz ⚡</strong>. Domina la
                  arquitectura de clústeres, aceleración en GPUs, programación en{" "}
                  <strong className="text-mfqc-cyan">Mojo 🔥</strong> y redes de ultra baja
                  latencia.
                </p>

                <div className="rounded-none border-l-4 border-mfqc-yellow bg-white/5 p-2.5 font-mono text-xs text-white/90 sm:text-sm">
                  🏆 <strong>Temporada 2027:</strong> Rumbo a las cumbres mundiales de supercómputo:
                  SuperComputing (SC27), CARLA SCC y ASC.
                </div>
              </div>

              {/* Right Column (5 cols): QR Box */}
              <div className="flex flex-col items-center justify-center border-4 border-mfqc-yellow bg-mfqc-black p-4 text-center md:col-span-5 print:col-span-5">
                <div className="bg-white p-2.5">
                  <QRCodeSVG
                    value={MFQC_CONFIG.onboardingQrUrl}
                    title="Código QR para unirse a Más FLOPS que Cabras"
                    size={220}
                    bgColor="#ffffff"
                    fgColor="#08080c"
                    level="H"
                    className="h-[150px] w-[150px] sm:h-[190px] sm:w-[190px]"
                  />
                </div>

                <div className="mt-2.5 font-mono text-xs font-extrabold tracking-widest text-mfqc-cyan uppercase sm:text-sm">
                  📱 ESCANEA PARA ENTRAR
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-white/70">
                  masflopsquecabras.github.io
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex w-full items-center justify-between border-t border-white/20 pt-3 font-mono text-xs text-mfqc-gray sm:text-sm">
              <span className="font-bold text-white/80">
                STUDENT SUPERCOMPUTING &amp; HPC • UNIANDES
              </span>
              <span className="text-white/80">
                Contacto: <strong className="text-mfqc-yellow">{MFQC_CONFIG.contactEmail}</strong>
              </span>
            </div>

            {/* Brutalist Corner Markers */}
            <div className="absolute -top-2 -left-2 h-4 w-4 bg-mfqc-yellow" />
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-mfqc-cyan" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-mfqc-cyan" />
            <div className="absolute -bottom-2 -right-2 h-4 w-4 bg-mfqc-yellow" />
          </div>
        )}
      </main>
    </div>
  );
}
export default PosterApp;
