import { Metadata } from "next";
import { URL_CONTACTO } from "@/app/utils/constants/navigation-links";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";

const URL = URL_CONTACTO;

export const METADATA: Metadata = {
  title: "📞 Contacta con Nuestra Agencia Marketing Digital",
  description:
    "✓ ¿Tienes preguntas sobre marketing? Contáctanos y descubre cómo podemos ayudarte a crear un sitio web profesional. ¡Tu éxito online comienza aquí!",
  openGraph: {
    title:
      "Contacto | Agencia Marketing Digital | ¡Hablemos de Tu Proyecto! 💬",
    description:
      "✓ Estamos listos para escuchar tus ideas y necesidades. Contáctanos para obtener más información sobre nuestros servicios de diseño web y cómo podemos ayudarte a crecer.",
    url: URL,
    siteName: "Agencia Diseño Web - Contacto",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Agencia Marketing Digital | ¡Hablemos! 📩",
    description:
      "✓ ¿Listo para llevar tu negocio al siguiente nivel? Contáctanos y solicita tu presupuesto gratuito. Estamos aquí para ayudarte a crear un sitio web excepcional.",
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
  applicationName: NOMBRE_EMPRESA,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};
