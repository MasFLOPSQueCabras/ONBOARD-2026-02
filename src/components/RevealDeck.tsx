import { useEffect, useLayoutEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import Reveal, { type RevealApi, type RevealConfig } from "reveal.js";

export interface DeckProps {
  config?: RevealConfig;
  children: ReactNode;
}

export function Deck({ config, children }: DeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);
  const initialConfigRef = useRef(config);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let active = true;
    const deck = new Reveal(el, initialConfigRef.current);
    deckRef.current = deck;
    void deck.initialize();

    return () => {
      active = false;
      Promise.resolve().then(() => {
        if (!active && deckRef.current === deck) {
          try {
            deck.destroy();
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
    if (deck?.isReady() && config) {
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
