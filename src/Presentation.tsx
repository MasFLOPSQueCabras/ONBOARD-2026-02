import { useEffect, useState } from "react";
import { Deck } from "@revealjs/react";
import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "./config";
import { Title } from "./slides/Title";
import { WhatIsHPC } from "./slides/WhatIsHPC";
import { UarchAndBenchmarks } from "./slides/UarchAndBenchmarks";
import { NextStepsMojo } from "./slides/NextStepsMojo";
import { CarlaSCC2026 } from "./slides/CarlaSCC2026";
import { Roadmap2027 } from "./slides/Roadmap2027";
import { Skillset } from "./slides/Skillset";
import { JoinAndFeedback } from "./slides/JoinAndFeedback";
import "reveal.js/reveal.css";
import "./theme.css";

function getViewportConfig() {
  if (typeof window === "undefined") {
    return { width: 1600, height: 900, margin: 0.04 };
  }
  const isMobileOrPortrait = window.innerHeight > window.innerWidth || window.innerWidth < 768;
  if (isMobileOrPortrait) {
    const mobileWidth = 440;
    const aspect = window.innerHeight / Math.max(window.innerWidth, 1);
    const mobileHeight = Math.max(760, Math.min(1040, Math.round(mobileWidth * aspect)));
    return { width: mobileWidth, height: mobileHeight, margin: 0 };
  }
  return { width: 1600, height: 900, margin: 0.04 };
}

export function Presentation() {
  const [viewport, setViewport] = useState(getViewportConfig);
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setViewport(getViewportConfig());
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  if (showPoster) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          background: "#08080c",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
          boxSizing: "border-box",
          textAlign: "center",
          fontFamily: "var(--font-sans)",
        }}
      >
        <div
          className="no-print"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 800,
              padding: "10px 18px",
              background: "#ffe600",
              color: "#08080c",
              border: "none",
              cursor: "pointer",
            }}
          >
            🖨️ Imprimir Tamaño Carta
          </button>
          <button
            type="button"
            onClick={() => setShowPoster(false)}
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 800,
              padding: "10px 18px",
              background: "#ffffff",
              color: "#08080c",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕ Volver a Slides
          </button>
        </div>

        <div
          style={{
            maxWidth: "720px",
            width: "100%",
            border: "4px solid #ffe600",
            boxShadow: "14px 14px 0px #00f5d4",
            padding: "48px 40px",
            background: "#0c0c12",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              color: "#00f5d4",
              fontWeight: 800,
              letterSpacing: "0.2em",
              fontSize: "1rem",
              marginBottom: "16px",
            }}
          >
            STUDENT SUPERCOMPUTING &amp; HPC • UNIANDES
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3.4rem",
              lineHeight: 1.05,
              margin: "0 0 16px 0",
            }}
          >
            Más <span style={{ color: "#ffe600" }}>FLOPS</span> que Cabras 🐐
          </h1>

          <p style={{ fontSize: "1.25rem", color: "#d4d4d8", margin: "0 0 32px 0" }}>
            Infra-DevOps • GPUs &amp; Mojo 🔥 • Cómputo Científico • Profilers &amp; eBPF
            <br />
            <strong style={{ color: "#ffffff" }}>Rumbo a SuperComputing, CARLA y ASC 2027</strong>
          </p>

          <div
            style={{
              background: "#ffffff",
              padding: "28px",
              display: "inline-flex",
              border: "4px solid #00f5d4",
            }}
          >
            <QRCodeSVG
              value={MFQC_CONFIG.onboardingQrUrl}
              size={360}
              bgColor="#ffffff"
              fgColor="#08080c"
              level="H"
            />
          </div>

          <div
            style={{
              marginTop: "28px",
              fontFamily: "var(--font-mono)",
              fontSize: "1.3rem",
              fontWeight: 800,
              color: "#ffe600",
              letterSpacing: "0.1em",
            }}
          >
            📱 ESCANEA PARA UNIRTE AL GRUPO
          </div>
          <div
            style={{
              marginTop: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
              color: "#d4d4d8",
            }}
          >
            {MFQC_CONFIG.contactEmail}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Deck
      config={{
        width: viewport.width,
        height: viewport.height,
        margin: viewport.margin,
        minScale: 0.15,
        maxScale: 2.5,
        hash: true,
        center: true,
        scrollActivationWidth: 0,
      }}
    >
      <Title />
      <WhatIsHPC />
      <UarchAndBenchmarks />
      <NextStepsMojo />
      <CarlaSCC2026 />
      <Roadmap2027 />
      <Skillset />
      <JoinAndFeedback onOpenPoster={() => setShowPoster(true)} />
    </Deck>
  );
}
