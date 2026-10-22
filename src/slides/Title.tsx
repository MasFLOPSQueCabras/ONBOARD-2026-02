import { Slide } from "../components/RevealDeck";

export function Title() {
  return (
    <Slide>
      <div className="box-border flex h-full w-full items-center justify-center px-6 text-center md:px-10">
        <h1 className="font-display text-[49.6px]! leading-[1.18]! font-extrabold text-white md:text-[83.2px]! md:leading-[1.08]!">
          Más{" "}
          <span className="my-1 inline-block bg-mfqc-yellow px-3.5 py-0.5 text-mfqc-black shadow-[6px_6px_0px_#00f5d4] md:my-0 md:px-5.5 md:py-0 md:shadow-[8px_8px_0px_#00f5d4]">
            FLOPS
          </span>{" "}
          que Cabras 🐐
        </h1>
      </div>
    </Slide>
  );
}
