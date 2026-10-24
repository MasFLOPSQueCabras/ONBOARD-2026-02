import { useEffect, useState } from "react";

export interface ChartPrintSnapshotState {
  isPrinting: boolean;
}

export function useChartPrintSnapshot(): ChartPrintSnapshotState {
  const [isPrinting, setIsPrinting] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      /print-pdf/i.test(window.location.search) ||
      window.matchMedia("print").matches ||
      document.documentElement.classList.contains("reveal-print")
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("print");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPrinting(e.matches || /print-pdf/i.test(window.location.search));
    };

    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => {
      setIsPrinting(/print-pdf/i.test(window.location.search));
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return { isPrinting };
}
