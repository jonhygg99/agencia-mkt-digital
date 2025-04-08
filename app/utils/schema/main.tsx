import { SCHEMA_ORGANIZATION } from "@/app/utils/constants/empresa";
import {
  DOMINIO,
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
  CODE_DIGITAL_MARKETING,
  DATE_PUBLISHED,
} from "@/app/utils/constants/schema";
import { CategorySchema } from "@/app/utils/interface/schema";
import { cleanText } from "../format-text";
import { FaqItem } from "../interface/faq";
import { combinedSchemas } from "@/app/agencia-seo/constants";
import { schema_diseno_web } from "@/app/agencia-diseno-web/constants";

export const MainSchema = ({ faq }: { faq: FaqItem[] }) => {
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
          ...SCHEMA_ORGANIZATION,
          description:
            "Agencia de marketing digital especializada en SEO y diseño web. Potenciamos tu negocio con estrategias personalizadas que aumentan tu visibilidad online y generan más ventas.",
          slogan: "Estrategias digitales que despiertan tu negocio online",
          keywords: "agencia marketing digital",
          mainEntity: {
            "@type": "WebPage",
            "@id": `${DOMINIO}/#webpage`,
            url: DOMINIO,
            name: "Agencia de Marketing Digital en Barcelona | Especialistas en SEO y Diseño Web",
            isPartOf: {
              "@id": `${DOMINIO}/#website`,
              url: DOMINIO,
              name: "Despierta tu web",
              description:
                "Agencia de marketing digital especializada en posicionamiento SEO y diseño web",
              publisher: {
                "@id": DOMINIO + "/#organization",
              },
              inLanguage: "es",
              about: {
                "@id": `${DOMINIO}/#organization`,
              },
              // TODO: Cambiar fecha
              datePublished: DATE_PUBLISHED,
              dateModified: "2025-03-15T14:30:00+01:00",
            },
          },
          service: {
            "@type": "Service",
            "@id": `${DOMINIO}/#service`,
            name: "Marketing Digital",
            url: DOMINIO,
            description:
              "Soluciones de marketing digital completas para impulsar tu presencia online y generar resultados medibles para tu negocio.",
            provider: {
              "@id": `${DOMINIO}/#organization`,
            },
            serviceType: "Digital Marketing",
            category: "Digital Marketing Services",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              "@id": `${DOMINIO}/#offerings`,
              name: CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
              category: CATEGORY_DIGITAL_MARKETING,
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  "@id": `${URL_AGENCIA_SEO}/#catalog`,
                  name: CATEGORY_SEO_DESCRIPTION,
                  category: CATEGORY_SEO,
                  itemListElement: combinedSchemas,
                },
                {
                  "@type": "OfferCatalog",
                  "@id": `${URL_AGENCIA_DISENO_WEB}/#catalog`,
                  name: CATEGORY_DESIGN_DESCRIPTION,
                  category: CATEGORY_DESIGN,
                  itemListElement: schema_diseno_web,
                },
              ],
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            "@id": `${DOMINIO}/#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Agencia de Marketing Digital",
                item: DOMINIO,
              },
            ],
          },
          faq: {
            "@type": "FAQPage",
            "@id": `${DOMINIO}/#faq`,
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
