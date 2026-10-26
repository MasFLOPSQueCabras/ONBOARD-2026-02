export function SlideHeader({ brand, meta }: { brand: string; meta: string }) {
  const displayMeta = meta.replace(/^SYS\.\w+\s*[—–-]\s*/i, "");
  return (
    <div className="inky-header flex items-center justify-between gap-2 border-b-2 border-white/22 pb-2 font-mono text-[11px] tracking-[0.08em] uppercase @min-[768px]/deck:gap-4 @min-[768px]/deck:pb-4.5 @min-[768px]/deck:text-[15.2px] @min-[768px]/deck:tracking-[0.14em]">
      <span className="inky-badge inline-flex shrink-0 items-center bg-mfqc-yellow px-1.5 py-0.5 text-[10px] font-extrabold whitespace-nowrap text-mfqc-black shadow-[3px_3px_0px_#00f5d4] @min-[640px]/deck:px-2 @min-[640px]/deck:text-[11px] @min-[768px]/deck:px-4 @min-[768px]/deck:py-1.5 @min-[768px]/deck:text-[15.2px] @min-[768px]/deck:shadow-[4px_4px_0px_#00f5d4]">
        {brand}
      </span>
      <span className="min-w-0 flex-1 text-right text-[9px] leading-[1.22] font-bold text-mfqc-cyan @min-[640px]/deck:text-[11px] @min-[768px]/deck:text-[15.2px] @min-[768px]/deck:leading-tight">
        {displayMeta}
      </span>
    </div>
  );
}
