import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export interface ViewportConfig {
  width: number;
  height: number;
  margin: number;
  isMobile: boolean;
  isPrintPdf: boolean;
}

export function computeViewportConfig(): ViewportConfig {
  if (typeof window === "undefined") {
    return { width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: false };
  }

  const isPrintPdf = /print-pdf/i.test(window.location.search);
  if (isPrintPdf) {
    return { width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: true };
  }

  const vWidth = window.visualViewport?.width ?? window.innerWidth;
  const vHeight = window.visualViewport?.height ?? window.innerHeight;
  const isMobile = vHeight > vWidth || vWidth < 768;

  if (isMobile) {
    const mobileWidth = 440;
    const aspect = vHeight / Math.max(vWidth, 1);
    const mobileHeight = Math.max(760, Math.min(1040, Math.round(mobileWidth * aspect)));
    return {
      width: mobileWidth,
      height: mobileHeight,
      margin: 0,
      isMobile: true,
      isPrintPdf: false,
    };
  }

  return { width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: false };
}

export function useRevealViewport(): ViewportConfig {
  const [config, setConfig] = useState<ViewportConfig>(computeViewportConfig);

  useEffect(() => {
    let printing = false;
    const handleResize = () => {
      if (printing) return;
      setConfig((prev) => {
        const next = computeViewportConfig();
        if (
          prev.width === next.width &&
          prev.height === next.height &&
          prev.margin === next.margin &&
          prev.isMobile === next.isMobile &&
          prev.isPrintPdf === next.isPrintPdf
        ) {
          return prev;
        }
        return next;
      });
    };
    const beforePrint = () => {
      printing = true;
      flushSync(() =>
        setConfig({ width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: true }),
      );
    };
    const afterPrint = () => {
      printing = false;
      flushSync(() => setConfig(computeViewportConfig()));
    };
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });
    window.visualViewport?.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  return config;
}
