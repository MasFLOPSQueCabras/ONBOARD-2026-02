import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { render } from "react-email";
import { INVITATION_DEFAULTS } from "../src/config.ts";
import MfqcInvitation from "../emails/MfqcInvitation.tsx";

async function main() {
  console.log("Rendering MfqcInvitation to HTML...");

  const invitation = MfqcInvitation({
    ...INVITATION_DEFAULTS,
    recipientName: "{{nombre}}",
  });
  const html = await render(invitation, { pretty: true });
  const plainText = await render(invitation, { plainText: true });

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
