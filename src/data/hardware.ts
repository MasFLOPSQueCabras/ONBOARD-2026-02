export interface HardwareFact {
  display: string;
  basis: string;
  sourceUrl: string;
  referenceDate: string;
}

export interface HardwareMetric extends HardwareFact {
  value: number;
}

export interface HardwareTier {
  id: string;
  name: string;
  shortName: string;
  role: string;
  color: string;
  capability: HardwareFact;
  bandwidth?: HardwareMetric;
  power?: HardwareMetric;
}

const apple = "https://support.apple.com/en-us/121553";
const nvidia = "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/";
const hgx =
  "https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html";
const dgx = "https://docs.nvidia.com/dgx/dgxb300-user-guide/introduction-to-dgxb300.html";
const nvl = "https://www.nvidia.com/en-us/data-center/gb300-nvl72/";
// Reference dates identify when specifications were checked, or the historical benchmark date.
const checked = "2026-10-26";

export const HARDWARE_TIERS: readonly HardwareTier[] = [
  {
    id: "laptop",
    name: "MacBook Pro M4 Max (2024)",
    shortName: "M4 Max",
    role: "Prototipado local con memoria unificada; configuración de GPU de 40 núcleos.",
    color: "var(--color-mfqc-yellow)",
    capability: {
      display: "40 núcleos GPU",
      basis: "Configuración de hardware; no es un benchmark de FLOPS.",
      sourceUrl: apple,
      referenceDate: checked,
    },
    bandwidth: {
      value: 546,
      display: "546 GB/s",
      basis: "Memoria unificada del SoC",
      sourceUrl: apple,
      referenceDate: checked,
    },
  },
  {
    id: "desktop",
    name: "GeForce RTX 5090",
    shortName: "RTX 5090",
    role: "Una GPU para render y modelos que caben en su memoria local.",
    color: "var(--color-mfqc-cyan)",
    capability: {
      display: "32 GB GDDR7",
      basis: "Capacidad de memoria de una GPU; no mide velocidad de cómputo.",
      sourceUrl: nvidia,
      referenceDate: checked,
    },
    bandwidth: {
      value: 1792,
      display: "1,792 GB/s",
      basis: "Memoria GDDR7 de una GPU",
      sourceUrl: nvidia,
      referenceDate: checked,
    },
    power: {
      value: 575,
      display: "575 W",
      basis: "TGP de la tarjeta; no del PC completo",
      sourceUrl: nvidia,
      referenceDate: checked,
    },
  },
  {
    id: "hpc-node",
    name: "DGX B300 · 8 GPU",
    shortName: "8× B300",
    role: "Modelo distribuido entre ocho aceleradores conectados mediante NVLink.",
    color: "var(--color-mfqc-pink)",
    capability: {
      display: "2,304 GB HBM3e",
      basis: "Memoria agregada: 8 × 288 GB, distribuida entre las GPU.",
      sourceUrl: hgx,
      referenceDate: checked,
    },
    bandwidth: {
      value: 64000,
      display: "Hasta 64 TB/s",
      basis: "Suma de memoria HBM de 8 GPU; no NVLink",
      sourceUrl: hgx,
      referenceDate: checked,
    },
    power: {
      value: 14500,
      display: "14.5 kW",
      basis: "Potencia especificada del sistema DGX B300",
      sourceUrl: dgx,
      referenceDate: checked,
    },
  },
  {
    id: "rack",
    name: "GB300 NVL72",
    shortName: "GB300 NVL72",
    role: "72 GPU Blackwell Ultra y 36 CPU Grace en un dominio NVLink de rack completo.",
    color: "var(--color-mfqc-purple)",
    capability: {
      display: "72 GPU · 20 TB HBM",
      basis: "Memoria GPU agregada del rack; NVLink conecta las GPU a 130 TB/s agregados.",
      sourceUrl: nvl,
      referenceDate: checked,
    },
    bandwidth: {
      value: 576000,
      display: "Hasta 576 TB/s",
      basis: "Suma de memoria GPU del rack; NVLink: 130 TB/s",
      sourceUrl: nvl,
      referenceDate: checked,
    },
  },
];

const rubinSource = "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/";
const dsxSource =
  "https://nvidianews.nvidia.com/news/nvidia-introduces-dsx-pod-ai-factories-to-accelerate-europes-infrastructure-deployment";

export const VERA_RUBIN_FACTS: readonly HardwareFact[] = [
  {
    display: "72 GPU Rubin + 36 CPU Vera",
    basis: "Configuración de un rack Vera Rubin NVL72.",
    sourceUrl: rubinSource,
    referenceDate: checked,
  },
  {
    display: "20.7 TB HBM4 · 1,400 TB/s",
    basis: "Capacidad y ancho de banda agregados de memoria GPU del rack.",
    sourceUrl: rubinSource,
    referenceDate: checked,
  },
  {
    display: "216 TB/s · NVLink 6",
    basis: "Interconexión agregada entre GPU; distinta del ancho de banda HBM4.",
    sourceUrl: rubinSource,
    referenceDate: checked,
  },
];

export const DSX_POD_FACTS: readonly HardwareFact[] = [
  {
    display: "Fábrica de IA modular",
    basis:
      "Sistemas Vera Rubin, red, cableado, potencia y refrigeración líquida integrados y validados antes del envío.",
    sourceUrl: dsxSource,
    referenceDate: "2026-10-21",
  },
  {
    display: "GTC Berlín · 21 oct 2026",
    basis: "Anuncio del diseño de referencia DSX POD; entregas previstas a comienzos de 2027.",
    sourceUrl: dsxSource,
    referenceDate: "2026-10-21",
  },
  {
    display: "Desde 14 días en sitio",
    basis:
      "Plazo anunciado por NVIDIA con el sitio y sus servicios ya preparados; no incluye su construcción.",
    sourceUrl: dsxSource,
    referenceDate: "2026-10-21",
  },
];
