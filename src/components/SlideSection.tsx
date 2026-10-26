import { SlideHeader } from "./SlideHeader";
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
  return (
    <section>
      <div className="box-border flex h-full w-full flex-col justify-between p-5 pb-24 @min-[768px]/deck:px-20 @min-[768px]/deck:pt-12 @min-[768px]/deck:pb-14">
        <SlideHeader brand={brand} meta={meta} />

        <div
          className={`flex flex-1 flex-col justify-center gap-3.5 @min-[768px]/deck:gap-12 ${bodyClassName}`}
        >
          {(title || lead) && (
            <div>
              {title && (
                <h2 className="inky-title font-display text-[26px]! leading-[1.12]! font-extrabold text-white @min-[768px]/deck:text-[64px]! @min-[768px]/deck:leading-[1.06]!">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="inky-lead mt-2! max-w-[1120px] font-sans text-[13.5px]! leading-[1.42]! text-mfqc-gray @min-[768px]/deck:mt-4.5! @min-[768px]/deck:text-[24px]! @min-[768px]/deck:leading-[1.5]!">
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
