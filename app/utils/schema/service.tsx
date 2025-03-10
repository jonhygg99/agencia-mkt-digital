import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { cleanText } from "@/app/utils/format-text";
import { ServiceDetailsSchema } from "@/app/utils/interface/schema";

export const ServiceSchema = ({ schema }: { schema: ServiceDetailsSchema }) => {
  const cleanedFAQItems = schema.faq.map((item) => ({
    question: item.question,
    answer: cleanText(item.answer),
  }));

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
          category: schema.category,
          provider: {
            "@type": "Organization",
            name: NOMBRE_EMPRESA,
            url: DOMINIO,
            logo: DOMINIO + "/logo.webp",
          },
          image: DOMINIO + schema.slugImage,
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              priceRange: "€€",
              lowPrice: schema.lowPrice,
              highPrice: schema.highPrice,
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: schema.ratingValue,
            ratingCount: schema.ratingCount,
          },
          estimatedSchedule: {
            "@type": "Schedule",
            expectedDuration: schema.expectedDuration, // Format ISO 8601
            scheduleTimezone: "Europe/Madrid",
          },
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
