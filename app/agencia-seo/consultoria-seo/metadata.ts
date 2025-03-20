import type { Metadata } from "next";
import { URL_CONSULTORIA_SEO } from "@/app/utils/constants/navigation-links";
import { IMAGE_AGENCIA_SEO } from "@/app/utils/constants/image";

const URL = URL_CONSULTORIA_SEO;
const URL_IMAGE = IMAGE_AGENCIA_SEO;

export const METADATA: Metadata = {
  title: "📈 Consultoría SEO | Mejora tu Posicionamiento en Google",
  description:
    "✓ Servicio de consultoría SEO profesional. Aumentamos tu visibilidad online y mejoramos tu posicionamiento en buscadores. ¡Contáctanos para un análisis!",
  keywords: "consultoría SEO, posicionamiento web, estrategias SEO",
  openGraph: {
    title: "Consultoría SEO | ¡Optimiza tu Estrategia Digital! 🚀",
    description:
      "✓ Expertos en consultoría SEO. Te ayudamos a mejorar tu posicionamiento en Google con estrategias personalizadas. ¡Solicita tu presupuesto sin compromiso!",
    url: URL,
    siteName: "Consultoría SEO",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Consultoría SEO | Mejora tu Visibilidad Online",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría SEO | Aumenta tu Visibilidad en Google 📊",
    description:
      "✓ Mejora tu posicionamiento web con nuestra consultoría SEO. ¡Solicita tu análisis gratuito! #SEO #Consultoría",
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
  applicationName: "Consultoría SEO",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // other: {
  //   "revisit-after": "7 days",
  // },
};
