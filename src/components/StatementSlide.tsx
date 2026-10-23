import type { ReactNode } from "react";

export interface StatementSlideProps {
  brand: string;
  meta: string;
  tag?: string;
  statement: ReactNode;
  detail?: ReactNode;
  accent?: "yellow" | "cyan" | "pink";
}

export function StatementSlide({
  brand,
  meta,
  tag,
  statement,
  detail,
  accent = "yellow",
}: StatementSlideProps) {
  const displayMeta = meta.replace(/^SYS\.\w+\s*[—–-]\s*/i, "");
  const isCyan = accent === "cyan";
  const isPink = accent === "pink";

  const borderColor = isCyan
    ? "border-mfqc-cyan"
    : isPink
      ? "border-mfqc-pink"
      : "border-mfqc-yellow";

  const tagColor = isCyan ? "text-mfqc-cyan" : isPink ? "text-mfqc-pink" : "text-mfqc-yellow";

  return (
    <section>
      <div className="box-border flex h-full w-full flex-col justify-between p-5 pb-24 md:px-20 md:pt-12 md:pb-16">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between gap-2.5 border-b-2 border-white/22 pb-2.5 font-mono text-[11px] tracking-[0.08em] uppercase md:gap-4 md:pb-4.5 md:text-[15.2px] md:tracking-[0.14em]">
          <span className="inline-flex shrink-0 items-center bg-mfqc-yellow px-2 py-0.5 text-[11px] font-extrabold whitespace-nowrap text-mfqc-black shadow-[3px_3px_0px_#00f5d4] md:px-4 md:py-1.5 md:text-[15.2px] md:shadow-[4px_4px_0px_#00f5d4]">
            {brand}
          </span>
          <span className="min-w-0 flex-1 truncate text-right text-[10px] leading-tight font-bold text-mfqc-cyan md:text-[15.2px]">
            {displayMeta}
          </span>
        </div>

        {/* Center Prominent Statement & Detail */}
        <div className="my-auto flex flex-col justify-center gap-4 py-2 md:gap-8 md:py-6">
          {tag && (
            <span
              className={`font-mono text-[11px] font-extrabold tracking-[0.14em] uppercase md:text-[17px] ${tagColor}`}
            >
              [ {tag} ]
            </span>
          )}

          <div className={`border-l-4 pl-4 md:border-l-8 md:pl-8 ${borderColor}`}>
            <p className="font-display text-[22px]! leading-[1.22]! font-extrabold text-white sm:text-[26px]! md:text-[46px]! md:leading-[1.18]!">
              {statement}
            </p>
          </div>

          {detail && (
            <p className="mt-1! max-w-[1180px] font-sans text-[14px]! leading-[1.48]! text-mfqc-gray md:mt-2! md:text-[25px]! md:leading-[1.5]!">
              {detail}
            </p>
          )}
        </div>

        {/* Bottom subtle accent line or spacer */}
        <div className="h-2 w-full opacity-0" aria-hidden="true" />
      </div>
    </section>
  );
}
