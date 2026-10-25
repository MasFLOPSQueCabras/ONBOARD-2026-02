export function DownloadToolbar() {
  return (
    <aside
      aria-label="Export and Download Toolbar"
      className="download-toolbar print-hidden fixed bottom-4 left-4 z-50 flex items-center gap-2 font-mono text-xs backdrop-blur-md"
    >
      <a
        href="./exports/presentation.pdf"
        download="mfqc-hpc-presentation.pdf"
        className="flex items-center gap-1.5 border border-[var(--color-mfqc-yellow)] bg-black/85 px-3 py-1.5 font-bold text-[var(--color-mfqc-yellow)] no-underline shadow-[2px_2px_0px_var(--color-mfqc-cyan)] hover:brightness-125 transition-all"
        title="Descargar presentación completa en PDF Vectorial (300 DPI)"
      >
        <span>📥</span>
        <span className="hidden sm:inline">PDF (300 DPI)</span>
      </a>

      <a
        href="./exports/presentation-slides.zip"
        download="mfqc-hpc-slides-4k.zip"
        className="flex items-center gap-1.5 border border-[var(--color-mfqc-cyan)] bg-black/85 px-3 py-1.5 font-bold text-[var(--color-mfqc-cyan)] no-underline shadow-[2px_2px_0px_var(--color-mfqc-pink)] hover:brightness-125 transition-all"
        title="Descargar paquete ZIP con diapositivas en alta resolución"
      >
        <span>📦</span>
        <span className="hidden sm:inline">ZIP (4K)</span>
      </a>

      <button
        type="button"
        onClick={() => window.print()}
        className="cursor-pointer border border-white/20 bg-black/85 px-3 py-1.5 font-bold text-white shadow-[2px_2px_0px_rgba(255,255,255,0.4)] hover:brightness-125 active:translate-x-0.5 active:translate-y-0.5"
        title="Abrir diálogo de impresión para generar PDF local"
      >
        <span>🖨️</span>
        <span className="hidden sm:inline">Imprimir</span>
      </button>
    </aside>
  );
}
