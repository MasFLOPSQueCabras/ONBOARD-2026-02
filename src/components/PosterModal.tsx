import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "../config";

export interface PosterModalProps {
  onClose: () => void;
}

export function PosterModal({ onClose }: PosterModalProps) {
  return (
    <div className="poster-preview box-border flex min-h-screen w-screen flex-col items-center justify-center bg-mfqc-black p-4 text-center font-sans text-white sm:p-8 print:min-h-screen print:h-full print:w-full print:bg-mfqc-black print:p-0">
      <style>{`
        @page {
          size: letter portrait;
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
      <div className="fixed top-4 right-4 z-10 flex gap-2.5 sm:top-5 sm:right-5 sm:gap-3 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer border-none bg-mfqc-yellow px-3.5 py-2 font-mono text-xs font-extrabold text-mfqc-black shadow-[3px_3px_0px_#00f5d4] hover:brightness-105 sm:px-4.5 sm:py-2.5 sm:text-sm"
        >
          Imprimir Cartel
        </button>
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer border-none bg-white px-3.5 py-2 font-mono text-xs font-extrabold text-mfqc-black hover:bg-gray-200 sm:px-4.5 sm:py-2.5 sm:text-sm"
        >
          ✕ Volver a Slides
        </button>
      </div>

      <div className="box-border w-full max-w-[720px] border-4 border-mfqc-yellow bg-mfqc-card px-5 py-7 shadow-[8px_8px_0px_#00f5d4] sm:px-10 sm:py-12 sm:shadow-[14px_14px_0px_#00f5d4] print:m-auto print:max-w-[650px] print:border-4 print:border-mfqc-yellow print:bg-mfqc-card print:px-8 print:py-10 print:shadow-none">
        <div className="mb-3 font-mono text-xs font-extrabold tracking-[0.18em] text-mfqc-cyan sm:mb-4 sm:text-base print:mb-3 print:text-sm">
          STUDENT SUPERCOMPUTING &amp; HPC • UNIANDES
        </div>

        <h1 className="m-0 mb-4 font-display text-3xl leading-[1.25] font-extrabold text-white sm:text-[3.2rem] sm:leading-[1.2] print:mb-3 print:text-[2.85rem] print:leading-[1.2]">
          <span className="inline-block whitespace-nowrap">
            Más{" "}
            <span className="title-neon-flops relative z-0 inline-block bg-mfqc-yellow px-3 py-0.5 text-mfqc-black shadow-[6px_6px_0px_#00f5d4] sm:px-4 sm:shadow-[8px_8px_0px_#00f5d4]">
              FLOPS
            </span>
          </span>{" "}
          <span className="relative z-10 mt-1 inline-block whitespace-nowrap">
            que Cabras <span className="title-goat relative z-20 inline-block">🐐</span>
          </span>
        </h1>

        <p className="m-0 mb-6 text-sm leading-relaxed text-mfqc-gray sm:mb-8 sm:text-xl print:mb-6 print:text-base">
          Infra-DevOps • GPUs &amp; Mojo 🔥 • Cómputo Científico • Profilers &amp; eBPF
          <br />
          <strong className="text-white">Rumbo a SuperComputing, CARLA y ASC 2027</strong>
        </p>

        <div className="flex flex-col items-center">
          <div className="inline-flex border-4 border-mfqc-cyan bg-white p-4 shadow-[6px_6px_0px_#ffe600] sm:p-7 print:p-5 print:shadow-none">
            <QRCodeSVG
              value={MFQC_CONFIG.onboardingQrUrl}
              title="Código QR para unirse a Más FLOPS que Cabras"
              size={340}
              bgColor="#ffffff"
              fgColor="#08080c"
              level="H"
              className="h-[200px] w-[200px] sm:h-[320px] sm:w-[320px] print:h-[260px] print:w-[260px]"
            />
          </div>

          <div className="mt-5 block w-full font-mono text-sm font-extrabold tracking-[0.1em] text-mfqc-yellow sm:mt-7 sm:text-xl print:mt-4 print:text-base">
            ESCANEA PARA UNIRTE AL GRUPO
          </div>
          <div className="mt-2 block w-full font-mono text-xs text-mfqc-gray sm:text-base print:mt-1 print:text-xs">
            {MFQC_CONFIG.contactEmail}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PosterModal;
