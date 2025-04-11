import { SCHEMA_WEBSITE } from "@/app/utils/constants/empresa";
import {
  DOMINIO,
  SCHEMA_URL_BREADCRUMB_ID,
} from "@/app/utils/constants/navigation-links";
import { cleanText } from "@/app/utils/format-text";
import {
  CombinedOffer,
  ServiceDetailsSchema,
} from "@/app/utils/interface/schema";
import { getServicePageSchema } from "./utils";

export const ServiceSchema = ({ schema }: { schema: ServiceDetailsSchema }) => {
  const cleanedFAQItems = schema.faq.map((item) => ({
    question: item.question,
    answer: cleanText(item.answer),
  }));

  // const serviceSchema = {
  //   "@type": "Service",
  //   name: schema.name,
  //   description: schema.description,
  //   serviceType: schema.serviceType,
  //   serviceOutput: schema.serviceOutput,
  //   category: schema.category,
  //   provider: {
  //     "@type": "Organization",
  //     name: NOMBRE_EMPRESA,
  //     url: DOMINIO,
  //     logo: DOMINIO + "/logo.webp",
  //   },
  //   ...AREA_SERVED,
  //   ...AUDIENCE,
  //   image: schema.image,
  //   url: schema.url,
  //   ...schema.service,
  //   ...(isCombined ? { offers } : {}),
  //   aggregateRating: {
  //     "@type": "AggregateRating",
  //     ratingValue: schema.ratingValue,
  //     ratingCount: schema.ratingCount,
  //     ...(isCombined ? { offerCount: offerCount } : {}),
  //     bestRating: "5",
  //     worstRating: "1",
  //   },
  //   //       review: [
  //   // {
  //   //   "@type": "Review",
  //   //   reviewRating: {
  //   //     "@type": "Rating",
  //   //     ratingValue: "5",
  //   //     bestRating: "5"
  //   //   },
  //   //   author: {
  //   //     "@type": "Person",
  //   //     name: "María López"
  //   //   },
  //   //   datePublished: "2024-09-15",
  //   //   reviewBody: "Contratamos el servicio de SEO avanzado y en 4 meses hemos duplicado nuestro tráfico orgánico. Excelente servicio y atención."
  //   // },]
  //   estimatedSchedule: {
  //     "@type": "Schedule",
  //     expectedDuration: schema.expectedDuration, // Format ISO 8601
  //     scheduleTimezone: "Europe/Madrid",
  //   },
  //   potentialAction: {
  //     "@type": "OrderAction",
  //     target: {
  //       "@type": "EntryPoint",
  //       urlTemplate: schema.url + "#contact",
  //       inLanguage: "es",
  //       actionPlatform: [
  //         "http://schema.org/DesktopWebPlatform",
  //         "http://schema.org/MobileWebPlatform",
  //       ],
  //     },
  //     result: {
  //       "@type": "Order",
  //       orderStatus: "http://schema.org/OrderProcessing",
  //     },
  //   },
  //   // workExample: [
  //   //   {
  //   //     "@type": "CreativeWork",
  //   //     name: "Caso de éxito: Empresa de Seguros Barcelona",
  //   //     description: "Incremento del 150% en tráfico orgánico y mejora de posiciones para términos clave en 6 meses",
  //   //     url: "https://despiertatuweb.com/casos-de-exito/empresa-seguros-barcelona"
  //   //   },
  //   //   {
  //   //     "@type": "CreativeWork",
  //   //     name: "Caso de éxito: E-commerce de Moda",
  //   //     description: "Aumento del 200% en conversiones orgánicas tras 8 meses de trabajo SEO",
  //   //     url: "https://despiertatuweb.com/casos-de-exito/ecommerce-moda"
  //   //   }
  //   // ],
  // };

  const url =
    "url" in schema.serviceSchema
      ? schema.serviceSchema.url
      : Array.isArray(schema.serviceSchema.offers)
      ? schema.serviceSchema.offers[0].itemOffered.provider["@id"] // Accediendo al ID del proveedor
      : (schema.serviceSchema.offers as CombinedOffer).itemOffered.provider[
          "@id"
        ]; // Accediendo al ID del proveedor
  console.log(url);

  const name =
    "name" in schema.serviceSchema
      ? schema.serviceSchema.name
      : Array.isArray(schema.serviceSchema.offers)
      ? schema.serviceSchema.offers[0].itemOffered.name // Accediendo al nombre del primer offer
      : (schema.serviceSchema.offers as CombinedOffer).itemOffered.name; // Accediendo al nombre si es un solo CombinedOffer

  const description =
    "description" in schema.serviceSchema
      ? schema.serviceSchema.description
      : Array.isArray(schema.serviceSchema.offers)
      ? schema.serviceSchema.offers[0].itemOffered.description // Accediendo a la descripción del primer offer
      : (schema.serviceSchema.offers as CombinedOffer).itemOffered.description; // Accediendo a la descripción si es un solo CombinedOffer
  const servicePage = getServicePageSchema(url, name, description);

  const breadcrumbStructure = {
    "@type": "BreadcrumbList",
    "@id": SCHEMA_URL_BREADCRUMB_ID,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Agencia de Marketing Digital",
        item: DOMINIO,
      },
      ...schema.breadcrumb,
    ],
  };

  const faqPageStructure =
    cleanedFAQItems.length > 0
      ? {
          "@type": "FAQPage",
          inLanguage: "es",
          mainEntity: cleanedFAQItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      schema.serviceSchema,
      SCHEMA_WEBSITE,
      breadcrumbStructure,
      faqPageStructure,
      servicePage,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};
