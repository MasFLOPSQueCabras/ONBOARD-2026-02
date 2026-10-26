export const PRODUCTION_BASE_URL = "https://masflopsquecabras.github.io/ONBOARD-2026-02";

export const MFQC_CONFIG = {
  onboardingQrUrl: `${PRODUCTION_BASE_URL}/`,
  posterUrl: `${PRODUCTION_BASE_URL}/posters/`,
  repositoryUrl: "https://github.com/MasFLOPSQueCabras/ONBOARD-2026-02",
  githubDiscussionsUrl: "https://github.com/MasFLOPSQueCabras/schedule/discussions",
  githubOrgUrl: "https://github.com/MasFLOPSQueCabras",
  contactEmail: "i.bermudezl@uniandes.edu.co",
} as const;

export const INVITATION_DEFAULTS = {
  eventDate: "Jueves 5 de Marzo, 2026",
  eventTime: "5:00 PM - 6:30 PM (COT)",
  eventLocation: "Auditorio Mario Laserna (ML) / Híbrido",
  presentationUrl: MFQC_CONFIG.onboardingQrUrl,
  posterUrl: MFQC_CONFIG.posterUrl,
  contactEmail: MFQC_CONFIG.contactEmail,
} as const;
