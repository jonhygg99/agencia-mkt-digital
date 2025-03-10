import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { cleanText } from "@/app/utils/format-text";
import {
  CATEGORY_DESCRIPTION_DIGITAL_MARKETING,
  CATEGORY_DIGITAL_MARKETING,
  CODE_DIGITAL_MARKETING,
} from "@/app/utils/constants/schema";
import { CategorySchema } from "@/app/utils/interface/schema";

export const AgencyServicesSchema = ({
  schema,
}: {
  schema: CategorySchema;
}) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: NOMBRE_EMPRESA,
          url: DOMINIO,
          logo: DOMINIO + "/logo.webp",
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
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Auditoría SEO",
                      description:
                        "Análisis completo del estado actual de tu web para identificar oportunidades de mejora",
                      serviceType: "SEO Audit",
                    },
                    price: "300.00",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Local",
                      description:
                        "Mejora tu visibilidad en búsquedas locales para atraer clientes de tu zona",
                      serviceType: "Local SEO",
                    },
                    price: "250.00",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diseño Web",
                      description:
                        "Creación de sitios web optimizados para SEO y experiencia de usuario",
                      serviceType: "Web Design",
                    },
                    price: "600.00",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "AggregateOffer",
                    offers: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Posicionamiento SEO Básico",
                          description:
                            "Optimización SEO para sitios web pequeños o de reciente creación",
                          serviceType: "SEO Positioning",
                        },
                        price: "150.00",
                        priceCurrency: "EUR",
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Posicionamiento SEO Profesional",
                          description:
                            "Estrategia SEO completa para sitios web establecidos buscando mejorar su posicionamiento",
                          serviceType: "SEO Positioning",
                        },
                        price: "450.00",
                        priceCurrency: "EUR",
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Posicionamiento SEO Premium",
                          description:
                            "Estrategia SEO avanzada para sitios corporativos o e-commerce con alta competencia",
                          serviceType: "SEO Positioning",
                        },
                        price: "800.00",
                        priceCurrency: "EUR",
                      },
                    ],
                    lowPrice: "150.00",
                    highPrice: "800.00",
                    priceCurrency: "EUR",
                    name: "Servicios de Posicionamiento SEO",
                    description:
                      "Diferentes planes de posicionamiento SEO adaptados a tus necesidades",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consultoría SEO",
                      description:
                        "Asesoramiento especializado en estrategias de SEO y marketing digital",
                      serviceType: "SEO Consulting",
                    },
                    price: "200.00",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mantenimiento Web",
                      description:
                        "Servicio de mantenimiento, actualizaciones y soporte técnico para tu sitio web",
                      serviceType: "Web Maintenance",
                    },
                    price: "180.00",
                    priceCurrency: "EUR",
                  },
                ],
              },
            ],
          },
        }),
      }}
    />
  );
};
