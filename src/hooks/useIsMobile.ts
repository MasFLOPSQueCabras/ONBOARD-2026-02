import { useEffect, useState } from "react";

export function checkIsMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerHeight > window.innerWidth || window.innerWidth < 768;
}

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(checkIsMobile);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    window.visualViewport?.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
