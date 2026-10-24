import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

export interface MfqcInvitationProps {
  recipientName?: string;
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  presentationUrl?: string;
  posterUrl?: string;
  contactEmail?: string;
}

const PRODUCTION_BASE_URL = "https://masflopsquecabras.github.io/ONBOARD-2026-02";

// Bulletproof font stacks with universal web-safe fallbacks for email clients
const FONT_DISPLAY =
  "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const FONT_MONO = "'JetBrains Mono', Consolas, 'SF Mono', Menlo, Monaco, 'Courier New', monospace";
const FONT_BODY =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export default function MfqcInvitation({
  recipientName = "Colega",
  eventDate = "Jueves 5 de Marzo, 2026",
  eventTime = "5:00 PM - 6:30 PM (COT)",
  eventLocation = "Auditorio Mario Laserna (ML) / Híbrido",
  presentationUrl = `${PRODUCTION_BASE_URL}/`,
  posterUrl = `${PRODUCTION_BASE_URL}/posters/`,
  contactEmail = "i.bermudezl@uniandes.edu.co",
}: MfqcInvitationProps) {
  const previewText =
    "¿Interesado en que tu código corra a la velocidad de la luz? Charla de Onboarding Más FLOPS que Cabras 🐐";

  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700;800&family=Space+Grotesk:wght@700;800&display=swap"
        />
        {/* Force Outlook and webmails to preserve text colors and backgrounds */}
        <style>{`
          :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
          }
          /* Prevent Webmail / Outlook color inversion overrides */
          .mfqc-text-white { color: #ffffff !important; }
          .mfqc-text-yellow { color: #ffe600 !important; }
          .mfqc-text-cyan { color: #00f5d4 !important; }
          .mfqc-text-gray { color: #cbd5e1 !important; }
          .mfqc-btn-yellow { background-color: #ffe600 !important; color: #08080c !important; }

          /* Inky Neon Glows for Modern Clients */
          .mfqc-neon-yellow {
            color: #ffe600 !important;
            text-shadow: 0 0 10px rgba(255, 230, 0, 0.55), 0 0 20px rgba(255, 230, 0, 0.25);
          }
          .mfqc-neon-cyan {
            color: #00f5d4 !important;
            text-shadow: 0 0 10px rgba(0, 245, 212, 0.55), 0 0 20px rgba(0, 245, 212, 0.25);
          }

          /* Subtle Retro CRT Scanline effect on modern renderers (Apple Mail, Webmail, Thunderbird) */
          .mfqc-crt-text {
            -webkit-mask-image: repeating-linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1) 0px,
              rgba(0, 0, 0, 1) 2px,
              rgba(0, 0, 0, 0.82) 2px,
              rgba(0, 0, 0, 0.82) 3px
            );
            mask-image: repeating-linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1) 0px,
              rgba(0, 0, 0, 1) 2px,
              rgba(0, 0, 0, 0.82) 2px,
              rgba(0, 0, 0, 0.82) 3px
            );
          }

          /* Neobrutalist Neon Box Shadow for FLOPS Badge & Containers */
          .mfqc-flops-badge {
            box-shadow: 4px 4px 0px #00f5d4, 0 0 14px rgba(255, 230, 0, 0.35);
          }
          .mfqc-neon-box-cyan {
            box-shadow: 6px 6px 0px #00f5d4, 0 0 20px rgba(0, 245, 212, 0.15);
          }
          .mfqc-neon-box-yellow {
            box-shadow: 6px 6px 0px #ffe600, 0 0 20px rgba(255, 230, 0, 0.15);
          }
        `}</style>
      </Head>

      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                mfqcBlack: "#08080c",
                mfqcCard: "#12121a",
                mfqcYellow: "#ffe600",
                mfqcCyan: "#00f5d4",
                mfqcGray: "#cbd5e1",
              },
            },
          },
        }}
      >
        <Body
          style={{
            margin: "0",
            padding: "0",
            backgroundColor: "#08080c",
            fontFamily: FONT_BODY,
            color: "#ffffff",
          }}
        >
          <Preview>{previewText}</Preview>

          {/* Centered Main Container */}
          <Container
            className="mfqc-neon-box-yellow"
            style={{
              maxWidth: "600px",
              margin: "24px auto",
              backgroundColor: "#12121a",
              border: "4px solid #ffe600",
              boxShadow: "6px 6px 0px #00f5d4",
              padding: "24px",
            }}
          >
            {/* Top Subheader */}
            <Section
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                paddingBottom: "12px",
              }}
            >
              <Row>
                <Column>
                  <Text
                    className="mfqc-neon-cyan mfqc-crt-text"
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "2px",
                      color: "#00f5d4",
                      textTransform: "uppercase",
                      textShadow: "0 0 8px rgba(0, 245, 212, 0.45)",
                    }}
                  >
                    MFQC // SUPERCOMPUTING • UNIANDES
                  </Text>
                </Column>
                <Column align="right">
                  <Text
                    className="mfqc-neon-yellow mfqc-crt-text"
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#ffe600",
                      textShadow: "0 0 8px rgba(255, 230, 0, 0.45)",
                    }}
                  >
                    TEMPORADA 2026-2027
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Hero Banner Image */}
            <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Link href={presentationUrl} target="_blank">
                <Img
                  src={`${PRODUCTION_BASE_URL}/og-image.png`}
                  alt="Más FLOPS que Cabras - Student Supercomputing Onboarding"
                  width="552"
                  height="288"
                  style={{
                    width: "100%",
                    display: "block",
                    border: "2px solid #00f5d4",
                    boxShadow: "4px 4px 0px #ffe600",
                  }}
                />
              </Link>
            </Section>

            {/* Main Greeting & Headline */}
            <Section style={{ marginTop: "16px", marginBottom: "16px" }}>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  fontFamily: FONT_MONO,
                  fontSize: "14px",
                  color: "#cbd5e1",
                }}
              >
                Hola, <strong style={{ color: "#ffffff", fontWeight: 800 }}>{recipientName}</strong>
              </Text>

              <Heading
                as="h1"
                style={{
                  margin: "0",
                  fontFamily: FONT_DISPLAY,
                  fontSize: "30px",
                  fontWeight: 800,
                  lineHeight: "1.2",
                  color: "#ffffff",
                }}
              >
                Más{" "}
                <span
                  className="mfqc-flops-badge mfqc-crt-text"
                  style={{
                    backgroundColor: "#ffe600",
                    color: "#08080c",
                    padding: "2px 8px",
                    fontWeight: 900,
                    boxShadow: "4px 4px 0px #00f5d4",
                    display: "inline-block",
                  }}
                >
                  FLOPS
                </span>{" "}
                que Cabras 🐐
              </Heading>

              <Text
                style={{
                  marginTop: "12px",
                  marginBottom: "0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#cbd5e1",
                  fontFamily: FONT_BODY,
                }}
              >
                Para los interesados en que su código corra a la{" "}
                <strong
                  className="mfqc-neon-yellow mfqc-crt-text"
                  style={{
                    color: "#ffe600",
                    fontWeight: 800,
                    textShadow: "0 0 8px rgba(255, 230, 0, 0.45)",
                  }}
                >
                  velocidad de la luz ⚡
                </strong>
                . Te invitamos a la sesión de inducción del grupo de supercómputo y HPC de la
                Universidad de los Andes.
              </Text>
            </Section>

            {/* Pillar Topics / What we do */}
            <Section
              style={{
                marginTop: "16px",
                marginBottom: "16px",
                borderLeft: "4px solid #00f5d4",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "16px",
              }}
            >
              <Text
                style={{
                  margin: "0",
                  fontFamily: FONT_MONO,
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#00f5d4",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                ¿QUÉ APRENDERÁS Y TRABAJARÁS CON NOSOTROS?
              </Text>
              <Text
                style={{
                  marginTop: "8px",
                  marginBottom: "0",
                  fontSize: "13px",
                  lineHeight: "1.7",
                  color: "#f1f5f9",
                  fontFamily: FONT_BODY,
                }}
              >
                •{" "}
                <strong style={{ color: "#ffffff" }}>
                  Arquitectura de Clústeres &amp; Infra-DevOps:
                </strong>{" "}
                Redes InfiniBand / RDMA, DPUs y almacenamiento paralelo.
                <br />• <strong style={{ color: "#ffffff" }}>GPUs &amp; Aceleradores:</strong>{" "}
                Optimización de kernels CUDA, Mojo 🔥 y modelos de alto rendimiento.
                <br />• <strong style={{ color: "#ffffff" }}>Cómputo Científico:</strong> Simulación
                molecular, astrofísica y modelado climático.
                <br />•{" "}
                <strong style={{ color: "#ffffff" }}>
                  Rumbo al Student Cluster Competition:
                </strong>{" "}
                Representando a Uniandes en SC27, CARLA y ASC.
              </Text>
            </Section>

            {/* Event Details Card */}
            <Section
              className="mfqc-neon-box-yellow"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                border: "2px solid #ffe600",
                backgroundColor: "#08080c",
                padding: "18px",
                boxShadow: "4px 4px 0px #ffe600",
              }}
            >
              <Text
                className="mfqc-neon-yellow mfqc-crt-text"
                style={{
                  margin: "0 0 12px 0",
                  fontFamily: FONT_MONO,
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  color: "#ffe600",
                  textTransform: "uppercase",
                  textShadow: "0 0 8px rgba(255, 230, 0, 0.45)",
                }}
              >
                DATOS DEL ENCUENTRO
              </Text>

              <Row style={{ marginBottom: "8px" }}>
                <Column style={{ width: "90px" }}>
                  <Text
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#94a3b8",
                    }}
                  >
                    Fecha:
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {eventDate}
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginBottom: "8px" }}>
                <Column style={{ width: "90px" }}>
                  <Text
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#94a3b8",
                    }}
                  >
                    Hora:
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {eventTime}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column style={{ width: "90px" }}>
                  <Text
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#94a3b8",
                    }}
                  >
                    Lugar:
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      margin: "0",
                      fontFamily: FONT_MONO,
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {eventLocation}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Bulletproof Action Buttons (Table-based for Outlook / Webmail) */}
            <Section style={{ marginTop: "24px", marginBottom: "24px" }}>
              <Row>
                <Column align="center" style={{ padding: "6px" }}>
                  {/* Primary Button */}
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    style={{
                      margin: "0 auto",
                      boxShadow: "4px 4px 0px #00f5d4",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style={{
                            backgroundColor: "#ffe600",
                            border: "2px solid #ffe600",
                            padding: "12px 22px",
                          }}
                        >
                          <a
                            href={presentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: FONT_MONO,
                              fontSize: "13px",
                              fontWeight: 900,
                              color: "#08080c",
                              textDecoration: "none",
                              display: "inline-block",
                              lineHeight: "1.2",
                            }}
                          >
                            Abrir Slides Interactivas
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>

                <Column align="center" style={{ padding: "6px" }}>
                  {/* Secondary Button */}
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    style={{
                      margin: "0 auto",
                      boxShadow: "4px 4px 0px #ffe600",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style={{
                            backgroundColor: "#12121a",
                            border: "2px solid #00f5d4",
                            padding: "12px 22px",
                          }}
                        >
                          <a
                            href={posterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: FONT_MONO,
                              fontSize: "13px",
                              fontWeight: 900,
                              color: "#00f5d4",
                              textDecoration: "none",
                              display: "inline-block",
                              lineHeight: "1.2",
                            }}
                          >
                            Ver Cartel Imprimible
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
              </Row>
            </Section>

            <Hr
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            />

            {/* Footer */}
            <Section>
              <Text
                style={{
                  margin: "0",
                  textAlign: "center",
                  fontFamily: FONT_MONO,
                  fontSize: "11px",
                  lineHeight: "1.7",
                  color: "#94a3b8",
                }}
              >
                Grupo de Estudiantes de Supercómputo &amp; HPC • Universidad de los Andes
                <br />
                Contacto directo:{" "}
                <Link
                  href={`mailto:${contactEmail}`}
                  style={{ color: "#ffe600", textDecoration: "underline" }}
                >
                  {contactEmail}
                </Link>
                <br />
                Repositorio &amp; Código:{" "}
                <Link
                  href="https://github.com/MasFLOPSQueCabras/ONBOARD-2026-02"
                  style={{ color: "#00f5d4", textDecoration: "underline" }}
                >
                  GitHub @MasFLOPSQueCabras
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Development preview props
MfqcInvitation.PreviewProps = {
  recipientName: "Estudiante Uniandes",
  eventDate: "Jueves 5 de Marzo, 2026",
  eventTime: "5:00 PM - 6:30 PM (COT)",
  eventLocation: "Auditorio Mario Laserna (ML) / Teams",
  presentationUrl: "https://masflopsquecabras.github.io/ONBOARD-2026-02/",
  posterUrl: "https://masflopsquecabras.github.io/ONBOARD-2026-02/posters/",
  contactEmail: "i.bermudezl@uniandes.edu.co",
} satisfies MfqcInvitationProps;
