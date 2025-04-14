import {
  SCHEMA_URL_BREADCRUMB_ID,
  SCHEMA_URL_ORGANIZATION_ID,
  SCHEMA_URL_WEBSITE_ID,
} from "@/app/utils/constants/navigation-links";
import {
  CombinedOffer,
  CombinedAgregatedOffer,
  SchemaParams,
  OneServiceSchema,
  CategorySchema,
} from "@/app/utils/interface/schema";

export const createSchemaService = (params: SchemaParams) => {
  // Si solo hay un servicio, devuelve el objeto directamente
  if (params.services.length === 1) {
    const service = params.services[0];
    const schema: OneServiceSchema = {
      "@type": "Service",
      name: service.title,
      serviceType: params.serviceType,
      serviceOutput: params.serviceOutput,
      expectedDuration: params.expectedDuration,
      category: params.category,
      description: params.description,
      "@id": `${params.url}/#service-${params.id}`,
      provider: {
        "@id": SCHEMA_URL_ORGANIZATION_ID,
      },
      url: params.url,
      image: params.image,
      offers: {
        "@type": "Offer",
        name: service.title,
        url: params.url,
        description: service.description,
        price: service.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        inLanguage: "es",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          category: params.category,
          serviceType: params.serviceType,
          image: params.image,
          provider: {
            "@id": SCHEMA_URL_ORGANIZATION_ID,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Array.isArray(params.ratingValue)
              ? params.ratingValue.join(", ")
              : params.ratingValue,
            reviewCount: Array.isArray(params.reviewCount)
              ? params.reviewCount.join(", ")
              : params.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
        },
      },
    };
    return schema;
  } else {
    // Si hay más de un servicio, devuelve un array de objetos
    const offers: CombinedOffer[] = params.services.map((service, index) => ({
      "@type": "Offer",
      name: service.title,
      description: service.description,
      url: params.url,
      price: service.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      inLanguage: "es",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: params.serviceType,
        category: params.category,
        provider: {
          "@id": SCHEMA_URL_ORGANIZATION_ID,
        },
        image: params.image,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: params.ratingValue[index],
          reviewCount: params.reviewCount[index],
          bestRating: "5",
          worstRating: "1",
        },
      },
    }));
    const schema: CombinedAgregatedOffer = {
      "@type": "AggregateOffer",
      highPrice: params.services[params.services.length - 1].price,
      lowPrice: params.services[0].price,
      priceCurrency: "EUR",
      offers: offers,
    };

    return schema; // Asegúrate de devolver el esquema combinado
  }
};

export const getSchemaService = (
  params: SchemaParams
): OneServiceSchema | CombinedAgregatedOffer => {
  const schemaServices: OneServiceSchema | CombinedAgregatedOffer =
    createSchemaService(params);

  if (params.services.length === 1) {
    return schemaServices;
  } else {
    return {
      "@type": "Service",
      "@id": `${params.url}/#service-${params.id}`,
      name: params.name,
      description: params.description,
      serviceType: params.serviceType,
      serviceOutput: params.serviceOutput,
      expectedDuration: params.expectedDuration,
      category: params.category,
      image: params.image,
      url: params.url,
      provider: {
        "@id": SCHEMA_URL_ORGANIZATION_ID,
      },
      offers:
        params.services.length > 1 && "offers" in schemaServices
          ? schemaServices.offers
          : [],
    };
  }
};

export const getServicePageSchema = (
  url: string,
  name: string,
  description: string
) => {
  return {
    "@type": "ServicePage",
    "@id": url + "/#webpage",
    name: name,
    url: url,
    description: description,
    isPartOf: {
      "@id": SCHEMA_URL_WEBSITE_ID,
    },
    about: {
      "@id": SCHEMA_URL_ORGANIZATION_ID,
    },
    breadcrumb: {
      "@id": SCHEMA_URL_BREADCRUMB_ID,
    },
  };
};

export const getCategoryPageSchema = (
  url: string,
  name: string,
  servicesID: Array<string>
) => {
  return {
    "@type": "ServicePage",
    "@id": url + "/#webpage",
    name: name,
    url: url,
    isPartOf: {
      "@id": SCHEMA_URL_WEBSITE_ID,
    },
    about: {
      "@id": SCHEMA_URL_ORGANIZATION_ID,
    },
    breadcrumb: {
      "@id": SCHEMA_URL_BREADCRUMB_ID,
    },
    mainEntity: {
      "@type": "OfferCatalog",
      name: name,
      itemListElement: servicesID.map((id) => ({
        "@type": "Service",
        "@id": id,
      })),
    },
  };
};

export function getServiceIds(categorySchema: CategorySchema): string[] {
  const serviceIds: string[] = [];

  categorySchema.serviceDetailsSchema.forEach((service) => {
    // Verificar si el servicio tiene un @id
    if ("@id" in service) {
      serviceIds.push(service["@id"]);
    }
    // Verificar si el servicio es un CombinedAgregatedOffer. build
    else if ("offers" in service) {
      const offers: CombinedOffer | CombinedOffer[] = service.offers;

      // Verificar si offers es un array
      if (Array.isArray(offers)) {
        offers.forEach((offer) => {
          // Verificar que offer tenga itemOffered
          if ("itemOffered" in offer) {
            const itemOffered = offer.itemOffered;

            // Verificar que itemOffered tenga un @id
            if (
              typeof itemOffered === "object" &&
              itemOffered !== null &&
              "@id" in itemOffered
            ) {
              serviceIds.push(itemOffered["@id"] as string); // Aseguramos que sea un string
            }
          }
        });
      }
      // Si offers es un solo objeto
      else if (
        typeof offers === "object" &&
        offers !== null &&
        "itemOffered" in offers
      ) {
        const itemOffered = (offers as CombinedOffer).itemOffered;

        // Verificar que itemOffered tenga un @id
        if (
          typeof itemOffered === "object" &&
          itemOffered !== null &&
          "@id" in itemOffered
        ) {
          serviceIds.push(itemOffered["@id"] as string); // Aseguramos que sea un string
        }
      }
    }
  });
  return serviceIds;
}
