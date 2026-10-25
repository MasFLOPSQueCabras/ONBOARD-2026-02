import { useEffect, useState } from "react";

export function ExportModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dpi, setDpi] = useState<"600" | "300">("600");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in form field
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        e.stopPropagation();
        return;
      }

      // Open / toggle on 'e' or 'E' (without browser Ctrl/Alt/Meta modifiers)
      if ((e.key === "e" || e.key === "E") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    const handleSlideNumberClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(".slide-number")) {
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleSlideNumberClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleSlideNumberClick);
    };
  }, [isOpen]);

  return (
    <>
      {/* Discreet bottom-left trigger beside slide page number */}
      <aside
        aria-label="Export Shortcut Trigger"
        className="print-hidden fixed bottom-5 left-[98px] z-40 flex items-center font-mono text-xs transition-opacity hover:opacity-100 opacity-80"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          title="Abrir menú de exportación (Atajo: presiona 'E')"
          className="flex cursor-pointer items-center gap-1.5 border border-white/20 bg-black/85 px-2.5 py-1 text-[11px] font-bold text-white shadow-[2px_2px_0px_rgba(255,255,255,0.25)] hover:border-[var(--color-mfqc-yellow)] hover:text-[var(--color-mfqc-yellow)] hover:shadow-[2px_2px_0px_var(--color-mfqc-cyan)] active:translate-x-0.5 active:translate-y-0.5"
        >
          <span className="text-[var(--color-mfqc-cyan)]">📥</span>
          <span>[E] Exportar</span>
        </button>
      </aside>

      {/* Modal Backdrop and Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="export-modal-title"
          className="print-hidden fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative w-full max-w-[580px] border-2 border-[var(--color-mfqc-yellow)] bg-[#08080c] p-6 shadow-[8px_8px_0px_var(--color-mfqc-cyan)] md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono">
              <span className="bg-[var(--color-mfqc-yellow)] px-2.5 py-0.5 text-xs font-black text-black shadow-[3px_3px_0px_var(--color-mfqc-cyan)]">
                MFQC // EXPORT
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer border border-white/30 bg-black/50 px-2 py-0.5 text-xs font-bold text-white hover:border-[var(--color-mfqc-pink)] hover:text-[var(--color-mfqc-pink)] active:translate-x-0.5 active:translate-y-0.5"
                title="Cerrar (Esc)"
              >
                ✕ [ESC]
              </button>
            </div>

            {/* Title */}
            <div className="mt-4">
              <h2
                id="export-modal-title"
                className="font-display text-2xl font-extrabold text-white"
              >
                Descarga y Exportación
              </h2>
              <p className="mt-1 font-sans text-sm text-[var(--color-mfqc-gray)]">
                Genera diapositivas en alta resolución para presentaciones, documentos o imprenta.
              </p>
            </div>

            {/* Quality Selector (Default: 600 DPI) */}
            <div className="mt-5 border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  Calidad de Renderizado
                </span>
                <span className="font-mono text-[10px] text-[var(--color-mfqc-cyan)]">
                  POR DEFECTO: 600 DPI
                </span>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setDpi("600")}
                  className={`cursor-pointer border p-2 text-left transition-all ${
                    dpi === "600"
                      ? "border-[var(--color-mfqc-yellow)] bg-[var(--color-mfqc-yellow)]/10 text-[var(--color-mfqc-yellow)] shadow-[2px_2px_0px_var(--color-mfqc-yellow)]"
                      : "border-white/20 bg-black/40 text-white/70 hover:border-white/50"
                  }`}
                >
                  <div className="font-extrabold">600 DPI (Master)</div>
                  <div className="text-[10px] text-white/50">Máxima nitidez / Imprenta</div>
                </button>
                <button
                  type="button"
                  onClick={() => setDpi("300")}
                  className={`cursor-pointer border p-2 text-left transition-all ${
                    dpi === "300"
                      ? "border-[var(--color-mfqc-cyan)] bg-[var(--color-mfqc-cyan)]/10 text-[var(--color-mfqc-cyan)] shadow-[2px_2px_0px_var(--color-mfqc-cyan)]"
                      : "border-white/20 bg-black/40 text-white/70 hover:border-white/50"
                  }`}
                >
                  <div className="font-extrabold">300 DPI (Estándar)</div>
                  <div className="text-[10px] text-white/50">Vector 4K / Web & Pantalla</div>
                </button>
              </div>
            </div>

            {/* Export Actions */}
            <div className="mt-5 space-y-3 font-mono">
              {/* PDF Vectorial */}
              <a
                href="./exports/presentation.pdf"
                download="mfqc-hpc-presentation.pdf"
                className="flex items-center justify-between border-2 border-[var(--color-mfqc-yellow)] bg-black/60 p-3.5 no-underline transition-all hover:bg-[var(--color-mfqc-yellow)]/10 hover:shadow-[4px_4px_0px_var(--color-mfqc-cyan)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">📄</span>
                  <div>
                    <div className="text-sm font-extrabold text-[var(--color-mfqc-yellow)]">
                      Descargar PDF Vectorial ({dpi} DPI)
                    </div>
                    <div className="font-sans text-xs text-white/60">
                      Documento multipágina con fuentes vectoriales y gráficos nativos
                    </div>
                  </div>
                </div>
                <span className="shrink-0 bg-[var(--color-mfqc-yellow)] px-2 py-1 text-xs font-black text-black">
                  BAJAR
                </span>
              </a>

              {/* Slide Images ZIP */}
              <a
                href="./exports/presentation-slides.zip"
                download="mfqc-hpc-slides-archive.zip"
                className="flex items-center justify-between border-2 border-[var(--color-mfqc-cyan)] bg-black/60 p-3.5 no-underline transition-all hover:bg-[var(--color-mfqc-cyan)]/10 hover:shadow-[4px_4px_0px_var(--color-mfqc-pink)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">📦</span>
                  <div>
                    <div className="text-sm font-extrabold text-[var(--color-mfqc-cyan)]">
                      Descargar Diapositivas en ZIP ({dpi} DPI)
                    </div>
                    <div className="font-sans text-xs text-white/60">
                      Paquete con todas las diapositivas renderizadas en formato PNG
                    </div>
                  </div>
                </div>
                <span className="shrink-0 bg-[var(--color-mfqc-cyan)] px-2 py-1 text-xs font-black text-black">
                  BAJAR
                </span>
              </a>

              {/* Additional Options */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => window.print(), 100);
                  }}
                  className="flex cursor-pointer items-center justify-center gap-2 border border-white/20 bg-black/50 p-2.5 font-bold text-white hover:border-white/60 hover:bg-white/5 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>🖨️</span>
                  <span>Imprimir Diálogo</span>
                </button>

                <a
                  href="./?print-pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/20 bg-black/50 p-2.5 font-bold text-white no-underline hover:border-white/60 hover:bg-white/5"
                >
                  <span>🌐</span>
                  <span>Vista Web (?print-pdf)</span>
                </a>
              </div>
            </div>

            {/* Footer Shortcut Helper */}
            <div className="mt-5 border-t border-white/10 pt-3 text-center font-mono text-[11px] text-white/40">
              Atajo: presiona{" "}
              <kbd className="rounded border border-white/30 bg-white/10 px-1 py-0.5 text-white">
                E
              </kbd>{" "}
              en cualquier momento para alternar este menú.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
