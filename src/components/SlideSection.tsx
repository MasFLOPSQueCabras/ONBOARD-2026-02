import type { ReactNode } from "react";

export interface SlideSectionProps {
  brand: string;
  meta: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  bodyClassName?: string;
}

export function SlideSection({
  brand,
  meta,
  title,
  lead,
  children,
  bodyClassName = "",
}: SlideSectionProps) {
  const displayMeta = meta.replace(/^SYS\.\w+\s*[—–-]\s*/i, "");
  return (
    <section>
      <div className="box-border flex h-full w-full flex-col justify-between p-5 pb-24 md:px-20 md:pt-12 md:pb-14">
        <div className="inky-header flex items-center justify-between gap-2 border-b-2 border-white/22 pb-2 font-mono text-[11px] tracking-[0.08em] uppercase md:gap-4 md:pb-4.5 md:text-[15.2px] md:tracking-[0.14em]">
          <span className="inky-badge inline-flex shrink-0 items-center bg-mfqc-yellow px-1.5 py-0.5 text-[10px] font-extrabold whitespace-nowrap text-mfqc-black shadow-[3px_3px_0px_#00f5d4] sm:px-2 sm:text-[11px] md:px-4 md:py-1.5 md:text-[15.2px] md:shadow-[4px_4px_0px_#00f5d4]">
            {brand}
          </span>
          <span className="min-w-0 flex-1 text-right text-[9px] leading-[1.22] font-bold text-mfqc-cyan sm:text-[11px] md:text-[15.2px] md:leading-tight">
            {displayMeta}
          </span>
        </div>

        <div className={`flex flex-1 flex-col justify-center gap-3.5 md:gap-12 ${bodyClassName}`}>
          {(title || lead) && (
            <div>
              {title && (
                <h2 className="inky-title font-display text-[26px]! leading-[1.12]! font-extrabold text-white md:text-[64px]! md:leading-[1.06]!">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="inky-lead mt-2! max-w-[1120px] font-sans text-[13.5px]! leading-[1.42]! text-mfqc-gray md:mt-4.5! md:text-[24px]! md:leading-[1.5]!">
                  {lead}
                </p>
              )}
            </div>
          )}

          <div className="inky-content w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
