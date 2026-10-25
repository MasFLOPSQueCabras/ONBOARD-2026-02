import { useTheme } from "../core/useTheme";
import { type ThemeName, type AnimationPreset } from "../core/ThemeContextDefinition";

const THEMES: { id: ThemeName; label: string }[] = [
  { id: "neon", label: "Inky Neon" },
  { id: "dracula", label: "Dracula" },
  { id: "night-owl", label: "Night Owl" },
  { id: "retro", label: "Retro CRT" },
  { id: "minimal", label: "Minimal Mono" },
];

const ANIMATIONS: { id: AnimationPreset; label: string }[] = [
  { id: "inky-neon", label: "Inky Neon Drop" },
  { id: "retro-phosphor", label: "Retro CRT Scanlines" },
  { id: "brutalist-snap", label: "Brutalist Snap" },
  { id: "cyberpunk-glitch", label: "Cyberpunk Glitch" },
  { id: "editorial-spring", label: "Editorial Spring" },
  { id: "minimal-fade", label: "Minimal Fade" },
];

export function ThemeSwitcher() {
  const { theme, setTheme, animationPreset, setAnimationPreset } = useTheme();

  return (
    <aside
      aria-label="Presentation Theme and Animation Configuration"
      className="print-hidden fixed top-4 right-4 z-50 flex items-center gap-2 rounded border border-white/20 bg-black/80 p-1.5 font-mono text-[11px] backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-1 border-r border-white/20 pr-2">
        <label htmlFor="theme-select" className="text-white/60">
          THEME:
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value as ThemeName)}
          className="cursor-pointer rounded bg-black/60 px-2 py-0.5 font-bold text-[var(--color-mfqc-yellow)] outline-none border border-white/10 hover:border-white/30"
        >
          {THEMES.map((t) => (
            <option key={t.id} value={t.id} className="bg-black text-white">
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-1">
        <label htmlFor="anim-select" className="text-white/60">
          ANIM:
        </label>
        <select
          id="anim-select"
          value={animationPreset}
          onChange={(e) => setAnimationPreset(e.target.value as AnimationPreset)}
          className="cursor-pointer rounded bg-black/60 px-2 py-0.5 font-bold text-[var(--color-mfqc-cyan)] outline-none border border-white/10 hover:border-white/30"
        >
          {ANIMATIONS.map((a) => (
            <option key={a.id} value={a.id} className="bg-black text-white">
              {a.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
