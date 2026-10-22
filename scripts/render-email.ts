import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { render } from "react-email";
import MfqcInvitation from "../emails/MfqcInvitation.tsx";

async function main() {
  console.log("Rendering MfqcInvitation to HTML...");

  const html = await render(
    MfqcInvitation({
      recipientName: "{{nombre}}",
      eventDate: "Jueves 5 de Marzo, 2026",
      eventTime: "5:00 PM - 6:30 PM (COT)",
      eventLocation: "Auditorio Mario Laserna (ML) / Virtual",
    }),
    { pretty: true },
  );

  const plainText = await render(
    MfqcInvitation({
      recipientName: "{{nombre}}",
      eventDate: "Jueves 5 de Marzo, 2026",
      eventTime: "5:00 PM - 6:30 PM (COT)",
      eventLocation: "Auditorio Mario Laserna (ML) / Virtual",
    }),
    { plainText: true },
  );

  const outHtmlPath = resolve(process.cwd(), "emails/dist/invitation.html");
  const outTxtPath = resolve(process.cwd(), "emails/dist/invitation.txt");

  mkdirSync(dirname(outHtmlPath), { recursive: true });
  writeFileSync(outHtmlPath, html, "utf-8");
  writeFileSync(outTxtPath, plainText, "utf-8");

  console.log(`✅ HTML email generated at: ${outHtmlPath}`);
  console.log(`✅ Plain text email generated at: ${outTxtPath}`);
}

main().catch((err) => {
  console.error("Failed to render email:", err);
  process.exit(1);
});
