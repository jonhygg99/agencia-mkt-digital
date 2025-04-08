import { PriceCard } from "@/app/utils/interface/pricing";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import {
  CombinedServiceSchema,
  OneServiceSchema,
  SingleService,
} from "@/app/utils/interface/schema";
import {
  CombinedService,
  CombinedServiceService,
} from "@/app/utils/interface/schema";

const createSchemaService = (
  services: PriceCard[],
  serviceType: string,
  category: string,
  url: string,
  image: string,
  ratingValue: string | string[],
  reviewCount: string | string[]
) => {
  // Si solo hay un servicio, devuelve el objeto directamente
  if (services.length === 1) {
    const service = services[0];
    const schema: OneServiceSchema = {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      inLanguage: "es",
      "@id": `${url}/#offer`,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: serviceType,
        category: category,
        url: url,
        provider: { "@id": DOMINIO + "/#organization" },
        image: image,
        aggregateRating: {
          "@type": "AggregateRating",
          // Nunca debería ser un array si solo hay un servicio, por lo que se asegura, no debería usarse nunca join
          ratingValue: Array.isArray(ratingValue)
            ? ratingValue.join(", ")
            : ratingValue,
          reviewCount: Array.isArray(reviewCount)
            ? reviewCount.join(", ")
            : reviewCount,
          bestRating: "5",
          worstRating: "1",
        },
      },
      price: service.price,
      priceCurrency: "EUR",
    };
    return schema;
  } else {
    // Si hay más de un servicio, devuelve un array de objetos
    const schema: OneServiceSchema[] = services.map((service, index) => ({
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      inLanguage: "es",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: serviceType,
        category: category,
        provider: { "@id": DOMINIO + "/#organization" },
        image: image,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ratingValue[index],
          reviewCount: reviewCount[index],
          bestRating: "5",
          worstRating: "1",
        },
        url: url,
      },
      price: service.price,
      priceCurrency: "EUR",
    }));
    return schema; // Asegúrate de devolver el esquema combinado
  }
};

interface GetSchemaParams {
  id: string;
  services: PriceCard[];
  serviceType: string;
  category: string;
  name: string;
  description: string;
  url: string;
  image: string;
  ratingValue: string | string[];
  reviewCount: string | string[];
}

export const getSchemaServiceCategory = ({
  id,
  services,
  serviceType,
  category,
  name,
  description,
  url,
  image,
  ratingValue,
  reviewCount,
}: GetSchemaParams): OneServiceSchema | CombinedServiceSchema => {
  const schemaServices: OneServiceSchema | OneServiceSchema[] =
    createSchemaService(
      services,
      serviceType,
      category,
      url,
      image,
      ratingValue,
      reviewCount
    );

  if (Array.isArray(schemaServices)) {
    return {
      "@type": "AggregateOffer",
      "@id": `${url}/#aggregateoffer-${id}`,
      offers: schemaServices,
      lowPrice: services[0].price,
      highPrice: services[services.length - 1].price,
      priceCurrency: "EUR",
      name: name,
      description: description,
    };
  } else {
    return schemaServices;
  }
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
    hasOfferCatalog: {
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
