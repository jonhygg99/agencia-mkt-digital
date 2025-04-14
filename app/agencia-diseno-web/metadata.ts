import type { Metadata } from "next";
import { URL_AGENCIA_DISENO_WEB } from "@/app/utils/constants/navigation-links";
import { IMAGE_SCHEMA_DISENO_WEB } from "@/app/utils/constants/image";

const URL = URL_AGENCIA_DISENO_WEB;
const URL_IMAGE = IMAGE_SCHEMA_DISENO_WEB;

export const METADATA: Metadata = {
  title: "🥇 Agencia de Diseño Web | Crea tu sitio web profesional",
  description:
    "✓ Agencia de diseño web líder en España. Creamos sitios web personalizados y funcionales para empresas de todos los tamaños. ¡Haz crecer tu negocio online!",
  keywords: "agencia diseño web",
  openGraph: {
    title: "Agencia de Diseño Web | ¡Transforma tu presencia online! 🚀",
    description:
      "✓ Somos expertos en diseño web y desarrollo. Creamos páginas web atractivas y funcionales que mejoran la experiencia de usuario y ayudan a crecer tu negocio online.",
    url: URL,
    siteName: "Agencia Diseño Web - Creación de sitios web profesionales",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Agencia de Diseño Web | Servicios de Diseño Profesional",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de Diseño Web | Crea tu sitio web ahora 🚀",
    description:
      "✓ Creamos páginas web atractivas y funcionales que mejoran la experiencia de usuario. ¡Solicita tu presupuesto gratuito y lleva tu negocio al siguiente nivel!",
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
  applicationName: "Agencia Diseño Web",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};
