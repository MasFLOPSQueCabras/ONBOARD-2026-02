import { useEffect, useState } from "react";

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
    const handleResize = () => {
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

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });
    window.visualViewport?.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  return config;
}
