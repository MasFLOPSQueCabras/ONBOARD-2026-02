import { Slide } from "../components/RevealDeck";

export function Title() {
  return (
    <Slide>
      <div className="title-slide-container box-border flex h-full w-full items-center justify-center px-4 text-center @min-[640px]/deck:px-6 @min-[768px]/deck:px-10">
        <h1 className="title-hero-heading font-display text-[32px]! leading-[1.25]! font-extrabold text-white @min-[640px]/deck:text-[36px]! @min-[768px]/deck:text-[83.2px]! @min-[768px]/deck:leading-[1.08]!">
          <span className="title-word-mas inline-block whitespace-nowrap">
            <span className="relative z-10">Más</span>{" "}
            <span className="title-neon-flops relative z-0 my-1 inline-block bg-mfqc-yellow px-3.5 py-0.5 text-mfqc-black shadow-[6px_6px_0px_#00f5d4] @min-[768px]/deck:my-0 @min-[768px]/deck:px-5.5 @min-[768px]/deck:py-0 @min-[768px]/deck:shadow-[8px_8px_0px_#00f5d4]">
              FLOPS
            </span>
          </span>{" "}
          <span className="title-word-cabras relative z-10 inline-block whitespace-nowrap [text-shadow:0_2px_12px_rgba(8,8,12,0.95)]">
            que Cabras <span className="title-goat inline-block">🐐</span>
          </span>
        </h1>
      </div>
    </Slide>
  );
}
