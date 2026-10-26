import { createContext, useContext } from "react";
import type { ViewportConfig } from "./useRevealViewport";

export const DeckViewportContext = createContext<ViewportConfig | null>(null);

export function useDeckViewport(): ViewportConfig {
  const viewport = useContext(DeckViewportContext);
  if (!viewport) throw new Error("useDeckViewport requires a deck viewport provider");
  return viewport;
}
