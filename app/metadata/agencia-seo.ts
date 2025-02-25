import type { Metadata } from "next";

export const agenciaSEOMetadata: Metadata = {
  title: "Agencia SEO | Expertos en Posicionamiento Web",
  description:
    "Somos una Agencia SEO especializada en incrementar tu tráfico orgánico y maximizar tu rentabilidad. Optimizamos tu presencia en línea para obtener leads calificados.",
  keywords:
    "agencia seo, posicionamiento web, seo españa, marketing digital, optimización web",
  openGraph: {
    title: "Agencia SEO | Expertos en Posicionamiento Web",
    description:
      "Somos una Agencia SEO especializada en incrementar tu tráfico orgánico y maximizar tu rentabilidad.",
    images: [
      { url: "/agencia.webp", width: 1200, height: 630, alt: "Agencia SEO" },
    ],
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://your-domain.com" },
};
