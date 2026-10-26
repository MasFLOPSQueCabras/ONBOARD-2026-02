import { QRCodeSVG } from "qrcode.react";
import { MFQC_CONFIG } from "../config";

export function OnboardingQR({ size, className }: { size: number; className: string }) {
  return (
    <QRCodeSVG
      value={MFQC_CONFIG.onboardingQrUrl}
      title="Código QR para ver la presentación de Más FLOPS que Cabras"
      size={size}
      bgColor="#ffffff"
      fgColor="#08080c"
      level="H"
      className={className}
    />
  );
}
