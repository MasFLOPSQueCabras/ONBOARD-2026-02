export function PosterBrand({
  badgeClassName,
  breakLine = false,
  keepFirstLine = false,
}: {
  badgeClassName: string;
  breakLine?: boolean;
  keepFirstLine?: boolean;
}) {
  const firstLine = (
    <>
      Más{" "}
      <span
        className={`title-neon-flops relative z-0 inline-block bg-mfqc-yellow py-0.5 text-mfqc-black ${badgeClassName}`}
      >
        FLOPS
      </span>
    </>
  );
  return (
    <>
      {keepFirstLine ? (
        <span className="inline-block whitespace-nowrap">{firstLine}</span>
      ) : (
        firstLine
      )}
      {breakLine ? <br /> : " "}
      <span className="relative z-10 mt-1 inline-block whitespace-nowrap">
        que Cabras <span className="title-goat relative z-20 inline-block">🐐</span>
      </span>
    </>
  );
}
