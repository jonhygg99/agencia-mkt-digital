import { Metadata } from "next";
import { URL_AGENCIA_SEO } from "@/app/utils/constants/navigation-links";
import { IMAGE_AGENCIA } from "@/app/utils/constants/image";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";

const URL = URL_AGENCIA_SEO;
const URL_IMAGE = IMAGE_AGENCIA;

export const METADATA: Metadata = {
  title: "🥇 Agencia SEO | Consigue más tráfico orgánico",
  description:
    "✓ Agencia SEO líder en España. Aumentamos tu visibilidad online con estrategias SEO\
 personalizadas. +500 proyectos exitosos. ROI garantizado.",
  keywords: "agencia seo",
  openGraph: {
    title: "Agencia SEO | ¡Mejora tu Posicionamiento Web! 🚀",
    description:
      "✓ Expertos en SEO y Marketing Digital. Aumentamos tu visibilidad online con estrategias\
 personalizadas. +500 proyectos exitosos. ¡Solicita presupuesto sin compromiso!",
    url: URL,
    siteName: "Agencia SEO - Marketing Digital",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Agencia de Marketing Digital | Servicios de SEO y SEM",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia SEO | Expertos en Posicionamiento Web 🚀",
    description:
      "✓ Mejora tu visibilidad online con estrategias SEO avanzadas. ROI garantizado. ¡Solicita tu análisis SEO gratuito! #SEO #MarketingDigital",
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
  applicationName: NOMBRE_EMPRESA,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // other: {
  //   "revisit-after": "7 days",
  // },
};
