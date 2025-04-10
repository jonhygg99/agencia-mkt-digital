import { FaqItem } from "./faq";
import { PriceCard } from "./pricing";

export interface BreadCrumb {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface SingleService {
  offers: {
    "@type": "Offer";
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
    itemOffered: {
      "@type": "Service";
      name: string;
      description: string;
    };
  };
}

export interface CombinedServiceService {
  "@type": "Offer";
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
}

export interface CombinedService {
  mainEntityOfPage: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: CombinedServiceService[];
  };
}

// Schema for the Category (Main Category -> Category -> Service)

// export interface ServiceDetailsSchema {
//   name: string;
//   description: string;
//   category: string;
//   serviceType: string;
//   serviceOutput: string;
//   url: string;
//   image: string;
//   service: SingleService | CombinedService;
//   lowPrice: string;
//   highPrice: string;
//   ratingValue: string | Array<string>;
//   ratingCount: string | Array<string>;
//   expectedDuration: string;
//   faq: FaqItem[];
//   breadcrumb: Array<BreadCrumb>;
// }

export interface SchemaParams {
  id: string;
  services: PriceCard[];
  serviceType: string;
  serviceOutput: string;
  expectedDuration: string;
  category: string;
  name: string;
  description: string;
  url: string;
  image: string;
  ratingValue: string | string[];
  reviewCount: string | string[];
}

export interface ServiceDetailsSchema {
  serviceSchema: OneServiceSchema | CombinedServiceSchema;
  breadcrumb: Array<BreadCrumb>;
  faq: FaqItem[];
}

export interface ServiceDetailsSchemaCategory {
  name: string;
  description: string;
  serviceType: string;
  price: string;
  priceCurrency: string;
}

export interface OneServiceSchema {
  "@type": "Service";
  name: string;
  serviceType: string;
  serviceOutput: string;
  expectedDuration: string;
  category: string;
  description: string;
  "@id": string;
  provider: {
    "@id": string;
  };
  url: string;
  image: string;
  offers: {
    "@type": "Offer";
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
    availability: "https://schema.org/InStock";
    inLanguage: string;
    itemOffered: {
      "@type": "Service";
      name: string;
      description: string;
      provider: {
        "@id": string;
      };
      aggregateRating: {
        "@type": "AggregateRating";
        ratingValue: string;
        reviewCount: string;
        bestRating: "5";
        worstRating: "1";
      };
    };
  };
}

export interface CombienedOffer {
  "@type": "Offer";
  url: string;
  price: string;
  priceCurrency: string;
  availability: "https://schema.org/InStock";
  inLanguage: string;
  itemOffered: {
    "@type": "Service";
    name: string;
    description: string;
    serviceType: string;
    category: string;
    provider: {
      "@id": string;
    };
    image: string;
    aggregateRating: {
      "@type": "AggregateRating";
      ratingValue: string;
      reviewCount: string;
      bestRating: string;
      worstRating: string;
    };
  };
}

export interface CombinedAgregatedOffer {
  "@type": "AggregateOffer";
  highPrice: string;
  lowPrice: string;
  priceCurrency: string;
  offers: Array<CombienedOffer>;
}

export interface CombinedServiceSchema {
  "@type": "Service";
  "@id": string;
  name: string;
  description: string;
  serviceType: string;
  serviceOutput: string;
  expectedDuration: string;
  category: string;
  offers: OneServiceSchema[];
}

export interface CategorySchema {
  category: string;
  categoryDescription: string;
  serviceDetailsSchema: Array<OneServiceSchema | CombinedServiceSchema>;
  slogan: string;
  breadcrumb: Array<BreadCrumb>;
}
