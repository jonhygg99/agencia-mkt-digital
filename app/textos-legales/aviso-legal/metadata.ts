import { URL_AVISO_LEGAL } from "@/app/utils/constants/navigation-links";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { Metadata } from "next";

const URL = URL_AVISO_LEGAL;

export const METADATA: Metadata = {
  title: `⚖️ Aviso Legal | ${NOMBRE_EMPRESA} - Cumplimiento Legal`,
  description: `✓ Conoce el aviso legal de ${NOMBRE_EMPRESA}. Aquí encontrarás información sobre los términos y condiciones de uso de nuestro sitio web y servicios.`,
  openGraph: {
    title: `Aviso Legal | ${NOMBRE_EMPRESA} | Información Legal Importante`,
    description:
      "✓ Este aviso legal establece los términos y condiciones de uso de nuestro sitio web. Asegúrate de leerlo para entender tus derechos y obligaciones.",
    url: URL,
    siteName: `${NOMBRE_EMPRESA} - Aviso Legal`,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Aviso Legal | ${NOMBRE_EMPRESA} | Aviso Legal`,
    description:
      "✓ Infórmate sobre los términos y condiciones de uso de nuestro sitio web. Tu comprensión es importante para nosotros.",
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
