import type { Metadata } from "next";
import { URL_MANTENIMIENTO_WEB } from "@/app/utils/constants/navigation-links";
import { IMAGE_AGENCIA } from "@/app/utils/constants/image";

const URL = URL_MANTENIMIENTO_WEB;
const URL_IMAGE = IMAGE_AGENCIA;

export const METADATA: Metadata = {
  title: "🔧 Servicio de Mantenimiento Web | Mantén tu Sitio Siempre Activo",
  description:
    "✓ Servicio de mantenimiento web profesional. Aseguramos el rendimiento, la seguridad y la actualización de tu sitio. ¡Contáctanos para más información!",
  keywords: "mantenimiento web",
  openGraph: {
    title: "Mantenimiento Web | ¡Optimiza y Protege tu Sitio! 🔒",
    description:
      "✓ Expertos en mantenimiento web. Garantizamos la seguridad y el rendimiento de tu sitio con servicios personalizados. ¡Solicita tu presupuesto sin compromiso!",
    url: URL,
    siteName: "Servicio de Mantenimiento Web",
    images: [
      {
        url: URL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Servicio de Mantenimiento Web | Soporte y Actualizaciones",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantenimiento Web | Asegura el Rendimiento de tu Sitio 🔧",
    description:
      "✓ Mantén tu sitio web seguro y actualizado con nuestro servicio de mantenimiento. ¡Solicita tu análisis gratuito! #MantenimientoWeb #SoporteTécnico",
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
  applicationName: "Servicio de Mantenimiento Web",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // other: {
  //   "revisit-after": "7 days",
  // },
};
