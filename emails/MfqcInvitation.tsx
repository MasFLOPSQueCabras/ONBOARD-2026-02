import {
  Body,
  Button,
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

export default function MfqcInvitation({
  recipientName = "Colega",
  eventDate = "Por confirmar (Semestre 2026-10)",
  eventTime = "5:00 PM - 6:30 PM",
  eventLocation = "Universidad de los Andes • Bogotá / Híbrido",
  presentationUrl = `${PRODUCTION_BASE_URL}/`,
  posterUrl = `${PRODUCTION_BASE_URL}/posters/`,
  contactEmail = "i.bermudezl@uniandes.edu.co",
}: MfqcInvitationProps) {
  const previewText =
    "¿Interesado en que tu código corra a la velocidad de la luz? Charla de Onboarding Más FLOPS que Cabras 🐐";

  return (
    <Html lang="es" dir="ltr">
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
                mfqcGray: "#94a3b8",
              },
            },
          },
        }}
      >
        <Head />
        <Body className="m-0 bg-[#08080c] p-0 font-sans text-white">
          <Preview>{previewText}</Preview>

          <Container className="mx-auto my-[24px] max-w-[600px] border-4 border-solid border-[#ffe600] bg-[#12121a] p-[24px]">
            {/* Top Subheader */}
            <Section className="border-none border-b border-solid border-[#ffffff33] pb-[12px]">
              <Row>
                <Column>
                  <Text className="m-0 font-mono text-[11px] font-extrabold tracking-[2px] text-[#00f5d4] uppercase">
                    MFQC // SUPERCOMPUTING • UNIANDES
                  </Text>
                </Column>
                <Column align="right">
                  <Text className="m-0 font-mono text-[11px] font-bold text-[#ffe600]">
                    TEMPORADA 2026-2027
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Hero Banner Image */}
            <Section className="mt-[20px] mb-[20px]">
              <Link href={presentationUrl} target="_blank">
                <Img
                  src={`${PRODUCTION_BASE_URL}/og-image.png`}
                  alt="Más FLOPS que Cabras - Student Supercomputing Onboarding"
                  width="552"
                  height="288"
                  className="w-full border-2 border-solid border-[#00f5d4]"
                />
              </Link>
            </Section>

            {/* Main Greeting & Headline */}
            <Section className="my-[16px]">
              <Text className="m-0 mb-[8px] font-mono text-[13px] text-[#94a3b8]">
                Hola, <strong className="text-white">{recipientName}</strong> 👋
              </Text>

              <Heading className="m-0 font-display text-[28px] font-extrabold leading-[1.15] text-white">
                Más <span className="bg-[#ffe600] px-[8px] py-[2px] text-[#08080c]">FLOPS</span> que
                Cabras 🐐
              </Heading>

              <Text className="mt-[12px] mb-[0px] text-[15px] leading-[1.5] text-[#94a3b8]">
                Para los interesados en que su código corra a la{" "}
                <strong className="text-[#ffe600]">velocidad de la luz ⚡</strong>. Te invitamos a
                la sesión de inducción del grupo de supercómputo y HPC de la Universidad de los
                Andes.
              </Text>
            </Section>

            {/* Pillar Topics / What we do */}
            <Section className="my-[16px] border-none border-l-4 border-solid border-[#00f5d4] bg-[#ffffff0a] p-[16px]">
              <Text className="m-0 font-mono text-[12px] font-extrabold text-[#00f5d4] uppercase">
                ¿Qué aprenderás y trabajarás con nosotros?
              </Text>
              <Text className="mt-[8px] mb-[0px] text-[13px] leading-[1.6] text-[#e2e8f0]">
                • <strong>Arquitectura de Clústeres &amp; Infra-DevOps:</strong> Redes InfiniBand /
                RDMA, DPUs y almacenamiento paralelo.
                <br />• <strong>GPUs &amp; Aceleradores:</strong> Optimización de kernels CUDA, Mojo
                🔥 y modelos de alto rendimiento.
                <br />• <strong>Cómputo Científico:</strong> Simulación molecular, astrofísica y
                modelado climático.
                <br />• <strong>Rumbo al Student Cluster Competition:</strong> Representando a
                Uniandes en SC27, CARLA y ASC.
              </Text>
            </Section>

            {/* Event Details Card */}
            <Section className="my-[20px] border-2 border-solid border-[#ffe600] bg-[#08080c] p-[18px]">
              <Text className="m-0 mb-[10px] font-mono text-[12px] font-extrabold tracking-[1px] text-[#ffe600] uppercase">
                📍 DATOS DEL ENCUENTRO
              </Text>

              <Row className="mb-[6px]">
                <Column className="w-[80px]">
                  <Text className="m-0 font-mono text-[12px] font-bold text-[#94a3b8]">
                    📅 Fecha:
                  </Text>
                </Column>
                <Column>
                  <Text className="m-0 font-mono text-[13px] font-bold text-white">
                    {eventDate}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-[6px]">
                <Column className="w-[80px]">
                  <Text className="m-0 font-mono text-[12px] font-bold text-[#94a3b8]">
                    ⏰ Hora:
                  </Text>
                </Column>
                <Column>
                  <Text className="m-0 font-mono text-[13px] font-bold text-white">
                    {eventTime}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column className="w-[80px]">
                  <Text className="m-0 font-mono text-[12px] font-bold text-[#94a3b8]">
                    📍 Lugar:
                  </Text>
                </Column>
                <Column>
                  <Text className="m-0 font-mono text-[13px] font-bold text-white">
                    {eventLocation}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Action Buttons */}
            <Section className="my-[24px] text-center">
              <Row>
                <Column align="center">
                  <Button
                    href={presentationUrl}
                    className="box-border inline-block bg-[#ffe600] px-[20px] py-[12px] font-mono text-[13px] font-extrabold text-[#08080c] no-underline"
                  >
                    🚀 Abrir Slides Interactivas
                  </Button>
                </Column>
                <Column align="center">
                  <Button
                    href={posterUrl}
                    className="box-border inline-block border-2 border-solid border-[#00f5d4] bg-[#12121a] px-[18px] py-[10px] font-mono text-[13px] font-extrabold text-[#00f5d4] no-underline"
                  >
                    📄 Ver Cartel Imprimible
                  </Button>
                </Column>
              </Row>
            </Section>

            <Hr className="my-[20px] border-none border-b border-solid border-[#ffffff20]" />

            {/* Footer */}
            <Section>
              <Text className="m-0 text-center font-mono text-[11px] leading-[1.6] text-[#94a3b8]">
                Grupo de Estudiantes de Supercómputo &amp; HPC • Universidad de los Andes
                <br />
                Contacto directo:{" "}
                <Link href={`mailto:${contactEmail}`} className="text-[#ffe600] underline">
                  {contactEmail}
                </Link>
                <br />
                Repositorio &amp; Código:{" "}
                <Link
                  href="https://github.com/MasFLOPSQueCabras/ONBOARD-2026-02"
                  className="text-[#00f5d4] underline"
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
