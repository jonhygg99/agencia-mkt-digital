import {
  NOMBRE_EMPRESA,
  SCHEMA_ORGANIZATION,
  SCHEMA_WEBSITE,
} from "@/app/utils/constants/empresa";
import {
  CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
  CATEGORY_DIGITAL_MARKETING,
  DATE_PUBLISHED,
} from "@/app/utils/constants/schema";
import { CategorySchema } from "@/app/utils/interface/schema";
import { cleanText } from "../format-text";
import { FaqItem } from "../interface/faq";
import {
  DOMINIO,
  SCHEMA_URL_BREADCRUMB_ID,
} from "@/app/utils/constants/navigation-links";

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

  const localBusinessStrucure = {
    "@type": "LocalBusiness",
    ...SCHEMA_ORGANIZATION,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
      category: CATEGORY_DIGITAL_MARKETING,
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: schema.categoryDescription,
          category: schema.category,
          itemListElement: schema.serviceDetailsSchema,
        },
      ],
    },
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
      localBusinessStrucure,
      SCHEMA_WEBSITE,
      breadcrumbStructure,
      faqPageStructure,
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
