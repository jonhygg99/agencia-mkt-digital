import { FaqItem } from "./faq";

// Schema for the page of Service
export interface SingleService {
  offers: {
    "@type": "Offer";
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
  hasOfferCatalog: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: CombinedServiceService[];
  };
}

// Schema for the Category (Main Category -> Category -> Service)

export interface ServiceDetailsSchema {
  name: string;
  description: string;
  category: string;
  serviceType: string;
  serviceOutput: string;
  url: string;
  slugImage: string;
  service: SingleService | CombinedService;
  lowPrice: string;
  highPrice: string;
  ratingValue: string;
  ratingCount: string;
  expectedDuration: string;
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
  "@type": "Offer";
  availability: "https://schema.org/InStock";
  inLanguage: string;
  "@id"?: string;
  itemOffered: {
    "@type": "Service";
    name: string;
    description: string;
    serviceType: string;
    category: string;
    url: string;
    provider: { "@id": string };
    image: string;
    aggregateRating: {
      "@type": "AggregateRating";
      ratingValue: string;
      reviewCount: string;
      bestRating: "5";
      worstRating: "1";
    };
  };
  price: string;
  priceCurrency: string;
}

export interface CombinedServiceSchema {
  "@type": "AggregateOffer";
  "@id": string;
  offers: OneServiceSchema[];
  lowPrice: string;
  highPrice: string;
  priceCurrency: string;
  name: string;
  description: string;
}

export interface CategorySchema {
  category: string;
  categoryDescription: string;
  serviceDetailsSchema: Array<OneServiceSchema | CombinedServiceSchema>;
  slogan: string;
  breadcrumb: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}
