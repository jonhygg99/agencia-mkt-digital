import { FaqItem } from "./faq";

export interface ServiceDetailsSchema {
  name: string;
  description: string;
  category: string;
  serviceType: string;
  slugImage: string;
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
  itemOffered: {
    "@type": "Service";
    name: string;
    description: string;
    serviceType: string;
  };
  price: string;
  priceCurrency: string;
}

export interface CombinedServiceSchema {
  "@type": "AggregateOffer";
  offers: OneServiceSchema[];
  lowPrice: string;
  highPrice: string;
  priceCurrency: string;
  name: string;
  description: string;
}

export interface CategorySchema {
  category: string;
  codeCategory: string;
  categoryDescription: string;
  serviceDetailsSchema: Array<OneServiceSchema | CombinedServiceSchema>;
}
