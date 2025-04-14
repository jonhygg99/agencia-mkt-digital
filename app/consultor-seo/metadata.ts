import type { Metadata } from "next";
import { URL_CONSULTOR_SEO } from "@/app/utils/constants/navigation-links";
import { IMAGE_SCHEMA_CONSULTORIA_SEO } from "@/app/utils/constants/image";

const URL = URL_CONSULTOR_SEO;
const URL_IMAGE = IMAGE_SCHEMA_CONSULTORIA_SEO;

export const METADATA: Metadata = {
  title: "🚀 Consultor SEO | Aumenta tu Visibilidad en Google",
  description:
    "Transforma tu presencia online con un consultor SEO experto. Mejora tu posicionamiento en Google y atrae más clientes. ¡Solicita una consultoría hoy!",
  keywords:
    "consultor SEO, optimización SEO, posicionamiento web, marketing digital, estrategias SEO, análisis SEO",
  openGraph: {
    title: "Consultor SEO | Estrategias Personalizadas para tu Negocio 🌟",
    description:
      "Soy un consultor SEO especializado en mejorar el posicionamiento de tu sitio web. Te ofrezco estrategias personalizadas para maximizar tu visibilidad online. ¡Contáctame para un presupuesto sin compromiso!",
    url: URL,
    siteName: "Consultor SEO",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Consultor SEO | Mejora tu Visibilidad Online",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultor SEO | Mejora tu Posicionamiento en Google 📈",
    description:
      "Aumenta tu tráfico web y mejora tu posicionamiento con un consultor SEO profesional. ¡Solicita tu análisis gratuito y comienza a crecer! #SEO #MarketingDigital",
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
  applicationName: "Consultor SEO",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // other: {
  //   "revisit-after": "7 days",
  // },
};
