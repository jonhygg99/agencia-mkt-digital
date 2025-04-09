import {
  NOMBRE_EMPRESA,
  SCHEMA_ORGANIZATION,
  SCHEMA_WEBSITE,
} from "@/app/utils/constants/empresa";
import {
  DOMINIO,
  SCHEMA_SLUG_CATALOG_ID,
  SCHEMA_URL_BREADCRUMB_ID,
  SCHEMA_URL_OFFERING_ID,
  SCHEMA_URL_ORGANIZATION_ID,
  SCHEMA_URL_SERVICE_ID,
  SCHEMA_URL_WEBPAGE_ID,
  URL_AGENCIA_DISENO_WEB,
  URL_AGENCIA_SEO,
} from "@/app/utils/constants/navigation-links";
import {
  CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
  CATEGORY_DESIGN,
  CATEGORY_DESIGN_DESCRIPTION,
  CATEGORY_DIGITAL_MARKETING,
  CATEGORY_SEO,
  CATEGORY_SEO_DESCRIPTION,
} from "@/app/utils/constants/schema";
import { cleanText } from "../format-text";
import { FaqItem } from "../interface/faq";
import { combinedSchemas } from "@/app/agencia-seo/constants";
import { schema_diseno_web } from "@/app/agencia-diseno-web/constants";

export const MainSchema = ({ faq }: { faq: FaqItem[] }) => {
  const cleanedFAQItems = faq.map((item) => ({
    question: item.question,
    answer: cleanText(item.answer),
  }));

  const localBusinessStructure = {
    "@type": "LocalBusiness",
    ...SCHEMA_ORGANIZATION,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
      category: CATEGORY_DIGITAL_MARKETING,
      service: {
        "@type": "Service",
        "@id": SCHEMA_URL_SERVICE_ID,
        name: "Marketing Digital",
        url: DOMINIO,
        description:
          "Soluciones de marketing digital completas para impulsar tu presencia online y generar resultados medibles para tu negocio.",
        provider: {
          "@id": SCHEMA_URL_ORGANIZATION_ID,
        },
        serviceType: "Digital Marketing",
        category: "Digital Marketing Services",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": SCHEMA_URL_OFFERING_ID,
          name: CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
          category: CATEGORY_DIGITAL_MARKETING,
          itemListElement: [
            {
              "@type": "OfferCatalog",
              "@id": URL_AGENCIA_SEO + SCHEMA_SLUG_CATALOG_ID,
              name: CATEGORY_SEO_DESCRIPTION,
              category: CATEGORY_SEO,
              itemListElement: combinedSchemas,
            },
            {
              "@type": "OfferCatalog",
              "@id": URL_AGENCIA_DISENO_WEB + SCHEMA_SLUG_CATALOG_ID,
              name: CATEGORY_DESIGN_DESCRIPTION,
              category: CATEGORY_DESIGN,
              itemListElement: schema_diseno_web,
            },
          ],
        },
      },
    },
  };

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
    ],
  };
  const faqPageStructure = {
    "@type": "FAQPage",
    mainEntity: cleanedFAQItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessStructure,
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
