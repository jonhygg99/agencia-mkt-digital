import { COUNTRY, NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { cleanText } from "@/app/utils/format-text";
import {
  CombinedService,
  ServiceDetailsSchema,
  SingleService,
} from "@/app/utils/interface/schema";
import { LAST_REVIEWED } from "@/app/utils/constants/schema";

function isCombinedService(
  service: SingleService | CombinedService
): service is CombinedService {
  return (service as CombinedService).hasOfferCatalog !== undefined;
}
export const ServiceSchema = ({ schema }: { schema: ServiceDetailsSchema }) => {
  const cleanedFAQItems = schema.faq.map((item) => ({
    question: item.question,
    answer: cleanText(item.answer),
  }));
  const isCombined = isCombinedService(schema.service);
  const offers = isCombined
    ? {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          priceRange: "€€",
          lowPrice: schema.lowPrice,
          highPrice: schema.highPrice,
        },
      }
    : undefined;

  const offerCount = isCombined
    ? (schema.service as CombinedService).hasOfferCatalog.itemListElement.length
    : undefined;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: schema.name,
          description: schema.description,
          serviceType: schema.serviceType,
          serviceOutput: schema.serviceOutput,
          category: schema.category,
          provider: {
            "@type": "Organization",
            name: NOMBRE_EMPRESA,
            url: DOMINIO,
            logo: DOMINIO + "/logo.webp",
          },
          areaServed: {
            "@type": "Country",
            name: COUNTRY, // TODO: cambiar si pasamos a internacional
          },
          audience: {
            "@type": "Audience",
            audienceType:
              "Pequeñas y medianas empresas que buscan aumentar su presencia online",
          },
          image: DOMINIO + schema.slugImage,
          url: schema.url,
          ...schema.service,
          ...(isCombined ? { offers } : {}),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: schema.ratingValue,
            ratingCount: schema.ratingCount,
            ...(isCombined ? { offerCount: offerCount } : {}),
            bestRating: "5",
            worstRating: "1",
          },
          //       review: [
          // {
          //   "@type": "Review",
          //   reviewRating: {
          //     "@type": "Rating",
          //     ratingValue: "5",
          //     bestRating: "5"
          //   },
          //   author: {
          //     "@type": "Person",
          //     name: "María López"
          //   },
          //   datePublished: "2024-09-15",
          //   reviewBody: "Contratamos el servicio de SEO avanzado y en 4 meses hemos duplicado nuestro tráfico orgánico. Excelente servicio y atención."
          // },]
          estimatedSchedule: {
            "@type": "Schedule",
            expectedDuration: schema.expectedDuration, // Format ISO 8601
            scheduleTimezone: "Europe/Madrid",
          },
          potentialAction: {
            "@type": "OrderAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: schema.url + "#contact",
              inLanguage: "es",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            result: {
              "@type": "Order",
              orderStatus: "http://schema.org/OrderProcessing",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            lastReviewed: LAST_REVIEWED,
          },
          // workExample: [
          //   {
          //     "@type": "CreativeWork",
          //     name: "Caso de éxito: Empresa de Seguros Barcelona",
          //     description: "Incremento del 150% en tráfico orgánico y mejora de posiciones para términos clave en 6 meses",
          //     url: "https://despiertatuweb.com/casos-de-exito/empresa-seguros-barcelona"
          //   },
          //   {
          //     "@type": "CreativeWork",
          //     name: "Caso de éxito: E-commerce de Moda",
          //     description: "Aumento del 200% en conversiones orgánicas tras 8 meses de trabajo SEO",
          //     url: "https://despiertatuweb.com/casos-de-exito/ecommerce-moda"
          //   }
          // ],
          faq: {
            "@type": "FAQPage",
            mainEntity: cleanedFAQItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        }),
      }}
    />
  );
};
