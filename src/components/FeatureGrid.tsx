import type { ReactNode } from "react";

export interface FeatureGridProps {
  children: ReactNode;
  className?: string;
}

export function FeatureGrid({ children, className = "" }: FeatureGridProps) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-4 @min-[768px]/deck:grid-cols-2 @min-[768px]/deck:gap-18 ${className}`}
    >
      {children}
    </div>
  );
}

export interface FeatureItemProps {
  tag: string;
  title: ReactNode;
  accent?: "yellow" | "cyan";
  children: ReactNode;
  className?: string;
}

export function FeatureItem({
  tag,
  title,
  accent = "yellow",
  children,
  className = "",
}: FeatureItemProps) {
  const isCyan = accent === "cyan";
  return (
    <div
      className={`flex flex-col gap-1 border-l-4 bg-white/[0.025] py-2 pr-3 pl-3.5 @min-[768px]/deck:gap-3 @min-[768px]/deck:bg-transparent @min-[768px]/deck:py-0 @min-[768px]/deck:pr-0 @min-[768px]/deck:pl-8 ${
        isCyan ? "border-mfqc-cyan" : "border-mfqc-yellow"
      } ${className}`}
    >
      <span
        className={`font-mono text-[10.5px] font-bold tracking-[0.12em] uppercase @min-[768px]/deck:text-[16.8px] @min-[768px]/deck:tracking-[0.14em] ${
          isCyan ? "text-mfqc-cyan" : "text-mfqc-yellow"
        }`}
      >
        {tag}
      </span>
      <h3 className="font-sans text-[17px]! leading-[1.18]! font-bold text-white @min-[768px]/deck:text-[36px]! @min-[768px]/deck:leading-[1.15]!">
        {title}
      </h3>
      <p className="font-sans text-[13.5px]! leading-[1.42]! text-mfqc-gray @min-[768px]/deck:text-[21.6px]! @min-[768px]/deck:leading-[1.5]!">
        {children}
      </p>
    </div>
  );
}
