import { useEffect, useLayoutEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import Reveal, { type RevealApi, type RevealConfig } from "reveal.js";

export interface DeckProps {
  config?: RevealConfig;
  children: ReactNode;
}

export function Deck({ config, children }: DeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);
  const mountIdRef = useRef(0);
  const initialConfigRef = useRef(config);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    mountIdRef.current += 1;
    const currentMountId = mountIdRef.current;

    if (!deckRef.current) {
      // Ensure vertical stack sections have .stack before Reveal's printView.activate() runs
      el.querySelectorAll(".slides > section").forEach((section) => {
        if (section.querySelector("section")) {
          section.classList.add("stack");
        }
      });

      const deck = new Reveal(el, initialConfigRef.current);
      deckRef.current = deck;
      deck.on("overviewshown", () => {
        el.querySelectorAll("section").forEach((section) => {
          section.removeAttribute("hidden");
          section.removeAttribute("aria-hidden");
        });
      });

      if (/print-pdf/i.test(window.location.search)) {
        const unhideSections = () => {
          el.querySelectorAll("section").forEach((section) => {
            section.removeAttribute("hidden");
            section.removeAttribute("aria-hidden");
            section.removeAttribute("inert");
          });
        };
        deck.on("ready", unhideSections);
        deck.on("pdf-ready", unhideSections);
      }
      void deck.initialize();
    }

    return () => {
      void Promise.resolve().then(() => {
        if (mountIdRef.current === currentMountId && deckRef.current) {
          try {
            deckRef.current.destroy();
          } catch {
            // Ignore cleanup errors when unmounting
          }
          deckRef.current = null;
        }
      });
    };
  }, []);

  useLayoutEffect(() => {
    const deck = deckRef.current;
    const isPrintView = document.documentElement.classList.contains("reveal-print");
    if (deck?.isReady() && !isPrintView && config) {
      deck.configure(config);
      deck.layout();
    }
  }, [config]);

  return (
    <div className="reveal" ref={containerRef}>
      <div className="slides">{children}</div>
    </div>
  );
}

export interface SlideProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Slide({ children, ...rest }: SlideProps) {
  return <section {...rest}>{children}</section>;
}
