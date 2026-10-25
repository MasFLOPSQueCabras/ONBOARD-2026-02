import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeName, type AnimationPreset } from "./ThemeContextDefinition";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === "undefined") return "neon";
    const params = new URLSearchParams(window.location.search);
    const paramTheme = params.get("theme") as ThemeName | null;
    if (paramTheme && ["neon", "dracula", "night-owl", "retro", "minimal"].includes(paramTheme)) {
      return paramTheme;
    }
    return (localStorage.getItem("mfqc_theme") as ThemeName) || "neon";
  });

  const [animationPreset, setAnimationPresetState] = useState<AnimationPreset>(() => {
    if (typeof window === "undefined") return "inky-neon";
    const params = new URLSearchParams(window.location.search);
    const paramAnim = params.get("anim") as AnimationPreset | null;
    if (
      paramAnim &&
      [
        "inky-neon",
        "retro-phosphor",
        "brutalist-snap",
        "cyberpunk-glitch",
        "editorial-spring",
        "minimal-fade",
      ].includes(paramAnim)
    ) {
      return paramAnim;
    }
    return (localStorage.getItem("mfqc_anim") as AnimationPreset) || "inky-neon";
  });

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("mfqc_theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  const setAnimationPreset = (newPreset: AnimationPreset) => {
    setAnimationPresetState(newPreset);
    if (typeof window !== "undefined") {
      localStorage.setItem("mfqc_anim", newPreset);
      document.documentElement.setAttribute("data-anim", newPreset);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-anim", animationPreset);
  }, [theme, animationPreset]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, animationPreset, setAnimationPreset }}>
      {children}
    </ThemeContext.Provider>
  );
}
