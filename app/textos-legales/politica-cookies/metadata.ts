import { Metadata } from "next";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { URL_POLITICA_COOKIES } from "@/app/utils/constants/navigation-links";

const URL = URL_POLITICA_COOKIES;

export const METADATA: Metadata = {
  title: `🍪 Política de Cookies | ${NOMBRE_EMPRESA} - Transparencia y Cumplimiento`,
  description: `✓ Conoce la política de cookies de ${NOMBRE_EMPRESA}. Aquí encontrarás información sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web.`,
  openGraph: {
    title: `Política de Cookies | ${NOMBRE_EMPRESA} | Información Importante`,
    description:
      "✓ Esta política de cookies explica qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas. Tu privacidad es importante para nosotros.",
    url: URL,
    siteName: `${NOMBRE_EMPRESA} - Política de Cookies`,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Política de Cookies | ${NOMBRE_EMPRESA} | Información sobre Cookies`,
    description:
      "✓ Infórmate sobre nuestra política de cookies y cómo utilizamos estas tecnologías en nuestro sitio web. Tu comprensión es importante para nosotros.",
  },
  robots: {
    index: false,
    follow: true,
    nocache: false,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: URL,
  },
  applicationName: NOMBRE_EMPRESA,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};
