import { SlideHeader } from "./SlideHeader";
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
      <div className="box-border flex h-full w-full flex-col justify-between p-5 pb-24 @min-[768px]/deck:px-20 @min-[768px]/deck:pt-12 @min-[768px]/deck:pb-16">
        {/* Top Header Bar */}
        <SlideHeader brand={brand} meta={meta} />

        {/* Center Prominent Statement & Detail */}
        <div className="flex flex-1 flex-col justify-center gap-3.5 py-4 @min-[768px]/deck:gap-8 @min-[768px]/deck:py-8">
          {tag && (
            <span
              className={`inky-title font-mono text-[10.5px] font-bold tracking-[0.12em] uppercase @min-[768px]/deck:text-[16px] @min-[768px]/deck:tracking-[0.14em] ${tagColor}`}
            >
              [ {tag} ]
            </span>
          )}

          <div
            className={`inky-statement border-l-4 bg-white/[0.025] py-3 pr-3 pl-3.5 @min-[768px]/deck:border-l-8 @min-[768px]/deck:bg-transparent @min-[768px]/deck:py-0 @min-[768px]/deck:pr-0 @min-[768px]/deck:pl-8 ${borderColor}`}
          >
            <p className="font-display text-[17px]! leading-[1.3]! font-extrabold text-white @min-[640px]/deck:text-[20px]! @min-[768px]/deck:text-[42px]! @min-[768px]/deck:leading-[1.18]!">
              {statement}
            </p>
          </div>

          {detail && (
            <p className="inky-lead max-w-[1180px] font-sans text-[13px]! leading-[1.45]! text-mfqc-gray @min-[768px]/deck:text-[22px]! @min-[768px]/deck:leading-[1.5]!">
              {detail}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
