import { PriceCard } from "@/app/utils/interface/pricing";
import {
  DOMINIO,
  SCHEMA_URL_BREADCRUMB_ID,
  SCHEMA_URL_ORGANIZATION_ID,
  SCHEMA_URL_WEBSITE_ID,
} from "@/app/utils/constants/navigation-links";
import {
  CombienedOffer,
  CombinedAgregatedOffer,
  CombinedServiceSchema,
  SchemaParams,
  OneServiceSchema,
  SingleService,
} from "@/app/utils/interface/schema";
import {
  CombinedService,
  CombinedServiceService,
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
        description: service.description,
        price: service.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        inLanguage: "es",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
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
    const offers: CombienedOffer[] = params.services.map((service, index) => ({
      "@type": "Offer",
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
): OneServiceSchema | CombinedServiceSchema => {
  const {
    id,
    services,
    serviceType,
    serviceOutput,
    expectedDuration,
    category,
    name,
    description,
    url,
    image,
    ratingValue,
    reviewCount,
  } = params;

  const schemaServices: OneServiceSchema | CombinedAgregatedOffer =
    createSchemaService(params);

  if (params.services.length === 1) {
    return schemaServices;
  } else {
    return {
      "@type": "Service",
      "@id": `${url}/#service-${id}`,
      name: name,
      description: description,
      serviceType: serviceType,
      serviceOutput: serviceOutput,
      expectedDuration: expectedDuration,
      category: category,
      offers: schemaServices,
    };
  }

  // Si no se cumple ninguna de las condiciones, puedes lanzar un error o retornar null
  throw new Error("Invalid schemaServices type");
};
export const getCombinedServiceSchema = (
  services: PriceCard[],
  name: string
): CombinedService => {
  const schemaServices: CombinedServiceService[] = services.map((service) => ({
    "@type": "Offer",
    name: service.title,
    description: service.description,
    price: service.price,
    priceCurrency: "EUR",
  }));
  const schema: CombinedService = {
    mainEntityOfPage: {
      "@type": "OfferCatalog",
      name: name,
      itemListElement: schemaServices,
    },
  };

  return schema;
};

export const getSingleServiceSchema = (service: PriceCard): SingleService => {
  const schema: SingleService = {
    offers: {
      "@type": "Offer",
      name: service.title,
      description: service.description,
      price: service.price + ".00",
      priceCurrency: "EUR",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    },
  };
  return schema;
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
