import type { Metadata } from "next";
import { URL_AUDITORIA_SEO } from "@/app/utils/constants/navigation-links";
import { IMAGE_AGENCIA_SEO } from "@/app/utils/constants/image";

const URL = URL_AUDITORIA_SEO;
const URL_IMAGE = IMAGE_AGENCIA_SEO;

export const METADATA: Metadata = {
  title: "🔍 Auditoría SEO | Optimiza tu Estrategia Digital",
  description:
    "✓ Servicio de auditoría SEO profesional. Analizamos tu sitio web para identificar oportunidades de mejora y optimización. ¡Solicita tu auditoría gratuita!",
  keywords: "auditoría SEO, análisis web, optimización SEO",
  openGraph: {
    title: "Auditoría SEO | Mejora tu Posicionamiento en Google 📈",
    description:
      "✓ Realizamos auditorías SEO exhaustivas para mejorar tu visibilidad online. Descubre cómo optimizar tu sitio web. ¡Contáctanos para más información!",
    url: URL,
    siteName: "Auditoría SEO",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Auditoría SEO | Análisis y Optimización de Sitios Web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auditoría SEO | Aumenta tu Visibilidad Online 🔍",
    description:
      "✓ Mejora tu posicionamiento web con nuestra auditoría SEO. ¡Solicita tu análisis gratuito! #SEO #Auditoría",
    images: [URL_IMAGE],
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
  applicationName: "Auditoría SEO",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // other: {
  //   "revisit-after": "7 days",
  // },
};
