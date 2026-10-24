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
        <div className="flex items-center justify-between gap-2 border-b-2 border-white/22 pb-2 font-mono text-[11px] tracking-[0.08em] uppercase md:gap-4 md:pb-4.5 md:text-[15.2px] md:tracking-[0.14em]">
          <span className="inline-flex shrink-0 items-center bg-mfqc-yellow px-1.5 py-0.5 text-[10px] font-extrabold whitespace-nowrap text-mfqc-black shadow-[3px_3px_0px_#00f5d4] sm:px-2 sm:text-[11px] md:px-4 md:py-1.5 md:text-[15.2px] md:shadow-[4px_4px_0px_#00f5d4]">
            {brand}
          </span>
          <span className="min-w-0 flex-1 text-right text-[9px] leading-[1.22] font-bold text-mfqc-cyan sm:text-[11px] md:text-[15.2px] md:leading-tight">
            {displayMeta}
          </span>
        </div>

        {/* Center Prominent Statement & Detail */}
        <div className="flex flex-1 flex-col justify-center gap-3.5 py-4 md:gap-8 md:py-8">
          {tag && (
            <span
              className={`font-mono text-[10.5px] font-bold tracking-[0.12em] uppercase md:text-[16px] md:tracking-[0.14em] ${tagColor}`}
            >
              [ {tag} ]
            </span>
          )}

          <div
            className={`border-l-4 bg-white/[0.025] py-3 pr-3 pl-3.5 md:border-l-8 md:bg-transparent md:py-0 md:pr-0 md:pl-8 ${borderColor}`}
          >
            <p className="font-display text-[17px]! leading-[1.3]! font-extrabold text-white sm:text-[20px]! md:text-[42px]! md:leading-[1.18]!">
              {statement}
            </p>
          </div>

          {detail && (
            <p className="max-w-[1180px] font-sans text-[13px]! leading-[1.45]! text-mfqc-gray md:text-[22px]! md:leading-[1.5]!">
              {detail}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
