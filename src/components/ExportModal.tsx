import { useEffect, useState } from "react";

export function ExportModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        e.stopPropagation();
        return;
      }

      if ((e.key === "e" || e.key === "E") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Exportar"
      className="print-hidden fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative w-full max-w-[420px] border-2 border-[var(--color-mfqc-yellow)] bg-[#08080c] p-6 shadow-[6px_6px_0px_var(--color-mfqc-cyan)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/15 pb-3 font-mono">
          <span className="bg-[var(--color-mfqc-yellow)] px-2.5 py-0.5 text-xs font-black text-black shadow-[2px_2px_0px_var(--color-mfqc-cyan)]">
            EXPORTAR
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer border border-white/30 bg-black/50 px-2 py-0.5 font-mono text-xs font-bold text-white hover:border-[var(--color-mfqc-pink)] hover:text-[var(--color-mfqc-pink)] active:translate-x-0.5 active:translate-y-0.5"
            title="Cerrar (Esc)"
          >
            ✕ [ESC]
          </button>
        </div>

        {/* Options */}
        <div className="mt-5 space-y-3 font-mono">
          <a
            href="./exports/presentation.pdf"
            download="presentation.pdf"
            className="flex items-center justify-between border-2 border-[var(--color-mfqc-yellow)] bg-black/60 px-5 py-4 text-sm font-extrabold text-[var(--color-mfqc-yellow)] no-underline transition-all hover:bg-[var(--color-mfqc-yellow)]/10 hover:shadow-[3px_3px_0px_var(--color-mfqc-cyan)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <span className="text-lg">📄</span>
              <span>Exportar a PDF</span>
            </span>
            <span className="bg-[var(--color-mfqc-yellow)] px-2 py-1 text-xs font-black text-black">
              BAJAR
            </span>
          </a>

          <a
            href="./exports/presentation-slides.zip"
            download="presentation-slides.zip"
            className="flex items-center justify-between border-2 border-[var(--color-mfqc-cyan)] bg-black/60 px-5 py-4 text-sm font-extrabold text-[var(--color-mfqc-cyan)] no-underline transition-all hover:bg-[var(--color-mfqc-cyan)]/10 hover:shadow-[3px_3px_0px_var(--color-mfqc-pink)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <span className="text-lg">📦</span>
              <span>Exportar a imágenes</span>
            </span>
            <span className="bg-[var(--color-mfqc-cyan)] px-2 py-1 text-xs font-black text-black">
              BAJAR
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
