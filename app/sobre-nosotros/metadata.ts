import type { Metadata } from "next";
import { URL_SOBRE_NOSOTROS } from "@/app/utils/constants/navigation-links";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";

const URL = URL_SOBRE_NOSOTROS;

export const METADATA: Metadata = {
  title: "🌟 Sobre Nosotros | Tu Agencia de Marketing Digital de Confianza",
  description: `✓ Conoce a nuestro equipo de expertos en marketing digital. En ${NOMBRE_EMPRESA}, nos apasiona ayudar a las empresas a crecer online con estrategias efectivas y personalizadas.`,
  openGraph: {
    title: `Sobre Nosotros | ${NOMBRE_EMPRESA} | Expertos en Marketing Digital 🚀`,
    description: `✓ Descubre nuestra misión, visión y valores. En ${NOMBRE_EMPRESA}, trabajamos para ofrecerte soluciones de marketing digital que impulsan tu negocio. ¡Conócenos!`,
    url: URL,
    siteName: "Agencia de Marketing Digital - Sobre Nosotros",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Sobre Nosotros | ${NOMBRE_EMPRESA} | Tu Socio en Marketing Digital 🤝`,
    description:
      "✓ Conoce a nuestro talentoso equipo y cómo podemos ayudarte a alcanzar tus objetivos de marketing digital. ¡Estamos aquí para hacer crecer tu negocio!",
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
  applicationName: "Sobre nosotros - Agencia Marketing Digital",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};
