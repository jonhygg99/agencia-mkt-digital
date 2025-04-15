import { Metadata } from "next";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";

const URL = DOMINIO;
// const URL_IMAGE = IMAGE_SCHEMA_MARKETING_DIGITAL;

export const METADATA: Metadata = {
  title: `🥇 Agencia Marketing Digital | ${NOMBRE_EMPRESA}`,
  description:
    "✓ Agencia de Marketing Digital especializada en SEO y diseño web. Mejora tu visibilidad online con estrategias personalizadas.",
  keywords: "agencia marketing digital",
  openGraph: {
    title: `Agencia Marketing Digital | ${NOMBRE_EMPRESA} 🚀`,
    description:
      "✓ Expertos en SEO y diseño web. Mejora tu visibilidad online y consigue más tráfico orgánico con nuestras estrategias personalizadas.",
    url: URL,
    siteName: NOMBRE_EMPRESA,
    // images: [
    //   {
    //     url: URL_IMAGE,
    //     width: 1200,
    //     height: 630,
    //     alt: "Agencia de Marketing Digital | SEO y Diseño Web",
    //   },
    // ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Marketing Digital | SEO y Diseño Web 🚀",
    description:
      "✓ Mejora tu visibilidad online con estrategias SEO avanzadas y diseño web profesional. ¡Solicita tu presupuesto sin compromiso! #SEO #DiseñoWeb #MarketingDigital",
    // images: [URL_IMAGE],
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
