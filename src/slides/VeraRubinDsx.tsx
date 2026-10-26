import { SlideSection } from "../components/SlideSection";
import { DSX_POD_FACTS, VERA_RUBIN_FACTS } from "../data/hardware";

export function VeraRubinDsx() {
  return (
    <SlideSection
      brand="MFQC // GTC BERLÍN 2026"
      meta="DEL RACK A LA FÁBRICA DE IA"
      title={
        <>
          Vera Rubin NVL72 <span className="text-mfqc-cyan">+ DSX POD</span>
        </>
      }
      lead="El rack reúne los aceleradores; el pod integra la infraestructura necesaria para desplegarlos."
    >
      <div
        className="grid grid-cols-1 gap-3 @min-[768px]/deck:grid-cols-2 @min-[768px]/deck:gap-6"
        data-rubin-dsx
      >
        {[
          {
            title: "RACK // VERA RUBIN NVL72",
            facts: VERA_RUBIN_FACTS,
            accent: "border-mfqc-cyan",
          },
          { title: "DESPLIEGUE // DSX POD", facts: DSX_POD_FACTS, accent: "border-mfqc-yellow" },
        ].map(({ title, facts, accent }) => (
          <article
            key={title}
            className={`border-l-4 bg-white/5 p-3 @min-[768px]/deck:p-5 ${accent}`}
          >
            <h3 className="font-mono text-[11px]! @min-[768px]/deck:text-[20px]!">{title}</h3>
            <dl className="mt-2 space-y-2 @min-[768px]/deck:mt-4 @min-[768px]/deck:space-y-4">
              {facts.map((fact) => (
                <div key={fact.display}>
                  <dt className="font-mono text-[13px] font-bold text-mfqc-yellow @min-[768px]/deck:text-[24px]">
                    {fact.display}
                  </dt>
                  <dd className="m-0 text-[11px] leading-snug text-mfqc-gray @min-[768px]/deck:text-[18px]">
                    {fact.basis}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              className="mt-3 inline-block font-mono text-[10px] text-mfqc-cyan underline @min-[768px]/deck:text-[13px]"
              href={facts[0]?.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Fuente NVIDIA · {facts[0]?.referenceDate}
            </a>
          </article>
        ))}
      </div>
    </SlideSection>
  );
}
