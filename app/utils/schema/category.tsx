import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import {
  CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
  CATEGORY_DIGITAL_MARKETING,
  CODE_DIGITAL_MARKETING,
} from "@/app/utils/constants/schema";
import { CategorySchema } from "@/app/utils/interface/schema";
import { cleanText } from "../format-text";
import { FaqItem } from "../interface/faq";

export const AgencyServicesSchema = ({
  schema,
  faq,
}: {
  schema: CategorySchema;
  faq: FaqItem[];
}) => {
  const cleanedFAQItems = faq.map((item) => ({
    question: item.question,
    answer: cleanText(item.answer),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: NOMBRE_EMPRESA,
          url: DOMINIO,
          logo: DOMINIO + "/logo.webp",
          // "image": [
          //   "https://despiertatuweb.com/img/oficina.webp",
          //   "https://despiertatuweb.com/img/equipo.webp"
          // ],
          slogan: schema.slogan,
          priceRange: "€€",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
            category: CATEGORY_DIGITAL_MARKETING,
            hasCategoryCode: {
              "@type": "CategoryCode",
              codeValue: CODE_DIGITAL_MARKETING,
              name: CATEGORY_DIGITAL_MARKETING,
            },
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: schema.categoryDescription,
                category: schema.category,
                hasCategoryCode: {
                  "@type": "CategoryCode",
                  codeValue: schema.codeCategory,
                  name: schema.category,
                  inCodeSet: {
                    "@type": "CategoryCodeSet",
                    name: `${CATEGORY_DIGITAL_MARKETING} Services`,
                    hasCategoryCode: {
                      "@type": "CategoryCode",
                      codeValue: CODE_DIGITAL_MARKETING,
                      name: CATEGORY_DIGITAL_MARKETING,
                    },
                  },
                },
                itemListElement: schema.serviceDetailsSchema,
              },
            ],
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
          },
        }),
      }}
    />
  );
};
