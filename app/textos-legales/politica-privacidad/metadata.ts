import type { Metadata } from "next";
import { URL_POLITICA_PRIVACIDAD } from "@/app/utils/constants/navigation-links";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";

const URL = URL_POLITICA_PRIVACIDAD;

export const METADATA: Metadata = {
  title: `🔒 Política de Privacidad | ${NOMBRE_EMPRESA} - Protección de Datos`,
  description: `✓ Conoce la política de privacidad de ${NOMBRE_EMPRESA}. Aquí encontrarás información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.`,
  openGraph: {
    title: `Política de Privacidad | ${NOMBRE_EMPRESA} | Información Importante`,
    description:
      "✓ Esta política de privacidad explica cómo gestionamos tus datos personales y tus derechos en relación con ellos. Tu privacidad es nuestra prioridad.",
    url: URL,
    siteName: `${NOMBRE_EMPRESA} - Política de Privacidad`,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Política de Privacidad | ${NOMBRE_EMPRESA} | Protección de Datos`,
    description:
      "✓ Infórmate sobre nuestra política de privacidad y cómo protegemos tus datos personales. Tu confianza es importante para nosotros.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
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
