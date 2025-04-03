import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
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
          },
        }),
      }}
    />
  );
};
