import { Metadata } from "next";
import { URL_SEO_LOCAL } from "@/app/utils/constants/navigation-links";
import { IMAGE_AGENCIA } from "@/app/utils/constants/image";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";

const URL = URL_SEO_LOCAL;
const URL_IMAGE = IMAGE_AGENCIA;

export const METADATA: Metadata = {
  title: "📍 Posicionamiento SEO Local | Aumenta tu Visibilidad en tu Área",
  description:
    "✓ Servicio de posicionamiento SEO local. Mejora tu presencia en búsquedas locales y atrae más clientes a tu negocio. ¡Contáctanos para un análisis!",
  keywords: "agencia seo local",
  openGraph: {
    title: "Posicionamiento SEO Local | Conquista tu Mercado Local 🌍",
    description:
      "✓ Expertos en posicionamiento SEO local. Te ayudamos a destacar en las búsquedas locales y atraer más clientes a tu negocio. ¡Solicita tu presupuesto sin compromiso!",
    url: URL,
    siteName: "Posicionamiento SEO Local",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Posicionamiento SEO Local | Aumenta tu Visibilidad en tu Área",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posicionamiento SEO Local | Atrae Clientes en tu Área 📍",
    description:
      "✓ Mejora tu visibilidad en búsquedas locales y atrae más clientes a tu negocio. ¡Solicita tu análisis SEO local gratuito! #SEOLocal #MarketingLocal",
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
