import { createContext } from "react";

export type ThemeName = "neon" | "dracula" | "night-owl" | "retro" | "minimal";
export type AnimationPreset =
  | "inky-neon"
  | "retro-phosphor"
  | "brutalist-snap"
  | "cyberpunk-glitch"
  | "editorial-spring"
  | "minimal-fade";

export interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  animationPreset: AnimationPreset;
  setAnimationPreset: (preset: AnimationPreset) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
