import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./core/ThemeContext";
import { Presentation } from "./Presentation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Presentation />
    </ThemeProvider>
  </StrictMode>,
);
