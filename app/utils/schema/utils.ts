import { PriceCard } from "@/app/utils/interface/pricing";
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
  url: string
) => {
  // Si solo hay un servicio, devuelve el objeto directamente
  if (services.length === 1) {
    const service = services[0];
    const schema: OneServiceSchema = {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: serviceType,
        url: url,
      },
      price: service.price,
      priceCurrency: "EUR",
    };
    return schema;
  } else {
    // Si hay más de un servicio, devuelve un array de objetos
    const schema: OneServiceSchema[] = services.map((service) => ({
      "@type": "Offer", // Asegúrate de incluir el tipo aquí si es necesario
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: serviceType,
        url: url,
      },
      price: service.price,
      priceCurrency: "EUR",
    }));
    return schema; // Asegúrate de devolver el esquema combinado
  }
};

interface GetSchemaParams {
  services: PriceCard[];
  serviceType: string;
  name: string;
  description: string;
  url: string;
}

export const getSchemaServiceCategory = ({
  services,
  serviceType,
  name,
  description,
  url,
}: GetSchemaParams): OneServiceSchema | CombinedServiceSchema => {
  const schemaServices: OneServiceSchema | OneServiceSchema[] =
    createSchemaService(services, serviceType, url);

  if (Array.isArray(schemaServices)) {
    return {
      "@type": "AggregateOffer",
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
