import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PosterApp } from "./PosterApp";

const rootElement = document.getElementById("poster-root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <PosterApp />
    </StrictMode>,
  );
}
