/** Real Reveal fragments are the only source of step state, including reverse navigation. */
export function DiagramSteps({ labels }: { labels: readonly string[] }) {
  return (
    <ol className="diagram-steps motion-screen" aria-label="Etapas del diagrama">
      {labels.map((label, index) => (
        <li
          key={label}
          className={index === 0 ? "diagram-step" : "diagram-step fragment custom"}
          data-fragment-index={index === 0 ? undefined : index - 1}
          data-diagram-step={index}
        >
          <span className="diagram-step-number">0{index + 1}</span> {label}
        </li>
      ))}
    </ol>
  );
}
