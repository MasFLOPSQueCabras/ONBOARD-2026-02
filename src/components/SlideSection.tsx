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
      <div className="box-border flex h-full w-full flex-col justify-between p-6 pb-22 md:px-20 md:pt-12 md:pb-14">
        <div className="flex items-center justify-between gap-2.5 border-b-2 border-white/22 pb-3 font-mono text-[11.5px] tracking-[0.08em] uppercase md:gap-4 md:pb-4.5 md:text-[15.2px] md:tracking-[0.14em]">
          <span className="inline-flex shrink-0 items-center bg-mfqc-yellow px-2.5 py-1 text-[12px] font-extrabold whitespace-nowrap text-mfqc-black shadow-[3px_3px_0px_#00f5d4] md:px-4 md:py-1.5 md:text-[15.2px] md:shadow-[4px_4px_0px_#00f5d4]">
            {brand}
          </span>
          <span className="min-w-0 flex-1 text-right text-[10.5px] leading-tight font-bold text-mfqc-cyan md:text-[15.2px]">
            {displayMeta}
          </span>
        </div>

        <div className={`flex flex-1 flex-col justify-center gap-5 md:gap-12 ${bodyClassName}`}>
          {(title || lead) && (
            <div>
              {title && (
                <h2 className="font-display text-[33px]! leading-[1.08]! font-extrabold text-white md:text-[64px]! md:leading-[1.06]!">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="mt-2.5! max-w-[1120px] font-sans text-[16px]! leading-[1.42]! text-mfqc-gray md:mt-4.5! md:text-[24px]! md:leading-[1.5]!">
                  {lead}
                </p>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
