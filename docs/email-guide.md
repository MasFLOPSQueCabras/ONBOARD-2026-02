# Rich Email Invitation Guide — Más FLOPS que Cabras 🐐

This guide explains how to preview, customize, and send rich HTML email invitations for the **Más FLOPS que Cabras** Supercomputing & HPC onboarding session.

---

## 1. Quick Commands

```bash
# 1. Start live preview server in browser (runs at http://localhost:3000)
bun run email:dev

# 2. Build / export universal HTML and plain text email files
bun run email:build
```

Exported files will be generated at:

- `emails/dist/invitation.html`: Universal standalone HTML email (with inlined styles & tables).
- `emails/dist/invitation.txt`: Plain-text fallback for accessibility.

---

## 2. Customizing Event Information

Edit `INVITATION_DEFAULTS` in [src/config.ts](../src/config.ts), or pass props when calling `MfqcInvitation`. The template, development preview, and HTML/text exporter share those defaults. The March 2026 event is historical; update its details before reuse.

| Prop              | Default                                                          | Description                    |
| :---------------- | :--------------------------------------------------------------- | :----------------------------- |
| `recipientName`   | `"Colega"` / `"{{nombre}}"`                                      | Recipient student name         |
| `eventDate`       | `"Jueves 5 de Marzo, 2026"`                                      | Date of the onboarding session |
| `eventTime`       | `"5:00 PM - 6:30 PM (COT)"`                                      | Time and timezone              |
| `eventLocation`   | `"Auditorio Mario Laserna (ML) / Híbrido"`                       | Room or virtual link           |
| `presentationUrl` | `"https://masflopsquecabras.github.io/ONBOARD-2026-02/"`         | Live Reveal.js slides          |
| `posterUrl`       | `"https://masflopsquecabras.github.io/ONBOARD-2026-02/posters/"` | Printable Tailwind poster      |
| `contactEmail`    | `"i.bermudezl@uniandes.edu.co"`                                  | Contact email address          |

---

## 3. How to Send

### Method A: Direct Copy & Paste (Gmail / Outlook Web — No Code)

1. Open `emails/dist/invitation.html` in your web browser (Chrome, Edge, Firefox, or Safari).
2. Select everything: `Ctrl + A` (or `Cmd + A` on macOS).
3. Copy: `Ctrl + C` (or `Cmd + C`).
4. In Gmail or Outlook Web, click **Compose** / **New Email**.
5. Click inside the email body and paste: `Ctrl + V` (or `Cmd + V`).
6. Set the Subject line:
   ```text
   ¿Interesado en que tu código corra a la velocidad de la luz? Charla de Onboarding Más FLOPS que Cabras 🐐
   ```
7. Send! The browser's clipboard engine transfers all formatted tables, fonts, colors, and button links accurately.

---

### Method B: Personalized Batch Sending via Google Sheets + Apps Script (Uniandes Students)

For sending invitations to student mailing lists (`@uniandes.edu.co`) without triggering spam filters:

1. Create a Google Sheet with columns:
   - Column A: `Email` (e.g. `estudiante@uniandes.edu.co`)
   - Column B: `Nombre` (e.g. `Andrés`)
2. Go to **Extensions** > **Apps Script**.
3. Paste the following script:

```javascript
function sendMfqcInvitations() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // HTML template fetched or embedded:
  const htmlTemplate = `PASTE_CONTENTS_OF_emails/dist/invitation.html_HERE`;

  const subject =
    "¿Interesado en que tu código corra a la velocidad de la luz? Charla de Onboarding Más FLOPS que Cabras 🐐";

  // Skip header row (row 0)
  for (let i = 1; i < data.length; i++) {
    const email = data[i][0];
    const name = data[i][1] || "Colega";

    if (!email) continue;

    const personalizedHtml = htmlTemplate.replace(/\{\{nombre\}\}/g, name);

    GmailApp.sendEmail(email, subject, "Versión de texto plano...", {
      htmlBody: personalizedHtml,
      name: "Más FLOPS que Cabras (Uniandes HPC)",
    });

    Utilities.sleep(500); // 500ms delay to respect quota
  }
}
```

---

### Method C: Programmatic Sending with Resend SDK or Nodemailer

#### Using Resend:

```typescript
import { Resend } from "resend";
import MfqcInvitation from "./emails/MfqcInvitation";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Más FLOPS que Cabras <onboarding@tu-dominio.com>",
  to: ["estudiante@uniandes.edu.co"],
  subject:
    "¿Interesado en que tu código corra a la velocidad de la luz? Charla de Onboarding Más FLOPS que Cabras 🐐",
  react: MfqcInvitation({ recipientName: "Carlos" }),
});
```

---

## 4. Email Client Compatibility

The template was built with **React Email** following bulletproof email standards:

- Table-based nested layouts (compatible with Outlook Desktop 2016-2024 using Word rendering).
- Fully inlined CSS styles and hex color declarations (`#08080c`, `#12121a`, `#ffe600`, `#00f5d4`).
- All buttons include `box-border` to prevent padding overflow.
- Banner image uses a permanent public HTTPS URL on GitHub Pages.
