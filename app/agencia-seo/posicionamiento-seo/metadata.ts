import type { Metadata } from "next";
import { URL_POSICIONAMIENTO_SEO } from "@/app/utils/constants/navigation-links";
import { IMAGE_AGENCIA_SEO } from "@/app/utils/constants/image";

const URL = URL_POSICIONAMIENTO_SEO;
const URL_IMAGE = IMAGE_AGENCIA_SEO;

export const METADATA: Metadata = {
  title: "🚀 Posicionamiento SEO | Aumenta tu Visibilidad en Google",
  description:
    "✓ Servicio de posicionamiento SEO profesional. Mejora tu ranking en buscadores y atrae más tráfico orgánico a tu sitio web. ¡Contáctanos para un análisis!",
  keywords: "posicionamiento SEO, SEO, tráfico orgánico, optimización web",
  openGraph: {
    title: "Posicionamiento SEO | Mejora tu Estrategia Digital 🌐",
    description:
      "✓ Expertos en posicionamiento SEO. Te ayudamos a alcanzar las primeras posiciones en Google con estrategias personalizadas. ¡Solicita tu presupuesto sin compromiso!",
    url: URL,
    siteName: "Posicionamiento SEO",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Posicionamiento SEO | Aumenta tu Visibilidad Online",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posicionamiento SEO | Aumenta tu Tráfico Orgánico 🚀",
    description:
      "✓ Mejora tu posicionamiento en Google y atrae más visitantes a tu sitio web. ¡Solicita tu análisis SEO gratuito! #SEO #Posicionamiento",
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
  applicationName: "Posicionamiento SEO",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // other: {
  //   "revisit-after": "7 days",
  // },
};
