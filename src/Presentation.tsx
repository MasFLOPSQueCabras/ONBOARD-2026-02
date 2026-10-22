import { Suspense, lazy, useEffect, useMemo, useState } from "react";
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
import "reveal.js/reveal.css";
import "./theme.css";

const PosterModal = lazy(() => import("./components/PosterModal"));

function getViewportConfig() {
  if (typeof window === "undefined" || /print-pdf/i.test(window.location.search)) {
    return { width: 1600, height: 900, margin: 0.04 };
  }
  const isMobileOrPortrait = window.innerHeight > window.innerWidth || window.innerWidth < 768;
  if (isMobileOrPortrait) {
    const mobileWidth = 440;
    const aspect = window.innerHeight / Math.max(window.innerWidth, 1);
    const mobileHeight = Math.max(760, Math.min(1040, Math.round(mobileWidth * aspect)));
    return { width: mobileWidth, height: mobileHeight, margin: 0 };
  }
  return { width: 1600, height: 900, margin: 0.04 };
}

export function Presentation() {
  const [viewport, setViewport] = useState(getViewportConfig);
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setViewport((prev) => {
        const next = getViewportConfig();
        if (
          prev.width === next.width &&
          prev.height === next.height &&
          prev.margin === next.margin
        ) {
          return prev;
        }
        return next;
      });
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

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
    }),
    [viewport.width, viewport.height, viewport.margin],
  );

  if (showPoster) {
    return (
      <Suspense fallback={<div className="min-h-screen w-screen bg-mfqc-black" />}>
        <PosterModal onClose={() => setShowPoster(false)} />
      </Suspense>
    );
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
