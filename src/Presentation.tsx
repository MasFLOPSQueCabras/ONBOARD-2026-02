import { useMemo, useState } from "react";
import { Deck } from "./components/RevealDeck";
import { Title } from "./slides/Title";
import { WhatIsHPC } from "./slides/WhatIsHPC";
import { HpcMagnitude } from "./slides/HpcMagnitude";
import { UarchAndBenchmarks } from "./slides/UarchAndBenchmarks";
import { HpcBottlenecks } from "./slides/HpcBottlenecks";
import { HeterogeneousHardware } from "./slides/HeterogeneousHardware";
import { NextStepsMojo } from "./slides/NextStepsMojo";
import { CarlaSCC2026 } from "./slides/CarlaSCC2026";
import { Roadmap2027 } from "./slides/Roadmap2027";
import { Skillset } from "./slides/Skillset";
import { JoinAndFeedback } from "./slides/JoinAndFeedback";
import { PosterModal } from "./components/PosterModal";
import { useRevealViewport } from "./core/useRevealViewport";
import "reveal.js/reveal.css";
import "./theme.css";

export function Presentation() {
  const viewport = useRevealViewport();
  const [showPoster, setShowPoster] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        /[?&]poster(=|&|$)/i.test(window.location.search) || window.location.hash === "#poster"
      );
    }
    return false;
  });

  const deckConfig = useMemo(
    () => ({
      width: viewport.width,
      height: viewport.height,
      margin: viewport.margin,
      minScale: 0.15,
      maxScale: 2.5,
      hash: true,
      center: true,
      scrollActivationWidth: 0,
      slideNumber: "c/t" as const,
      showSlideNumber: "all" as const,
      controls: true,
      controlsTutorial: true,
      controlsLayout: "bottom-right" as const,
      controlsBackArrows: "faded" as const,
      overview: true,
      pdfSeparateFragments: false,
      viewDistance: 50,
      mobileViewDistance: 50,
      transition: viewport.isPrintPdf ? ("none" as const) : ("slide" as const),
      backgroundTransition: viewport.isPrintPdf ? ("none" as const) : ("slide" as const),
      transitionSpeed: "default" as const,
    }),
    [viewport.width, viewport.height, viewport.margin, viewport.isPrintPdf],
  );

  if (showPoster) {
    return <PosterModal onClose={() => setShowPoster(false)} />;
  }

  return (
    <Deck config={deckConfig}>
      <Title />
      <WhatIsHPC />
      <HpcMagnitude />
      <UarchAndBenchmarks />
      <HpcBottlenecks />
      <HeterogeneousHardware />
      <NextStepsMojo />
      <CarlaSCC2026 />
      <Roadmap2027 />
      <Skillset />
      <JoinAndFeedback onOpenPoster={() => setShowPoster(true)} />
    </Deck>
  );
}
