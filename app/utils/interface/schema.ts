import { FaqItem } from "./faq";
import { PriceCard } from "./pricing";

export interface BreadCrumb {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

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

export interface CombinedAgregatedOffer {
  "@type": "AggregateOffer";
  highPrice: string;
  lowPrice: string;
  priceCurrency: string;
  offers: Array<CombinedOffer>;
}

export interface ServiceDetailsSchema {
  serviceSchema: OneServiceSchema | CombinedAgregatedOffer;
  breadcrumb: Array<BreadCrumb>;
  faq: FaqItem[];
}

export interface CombinedOffer {
  "@type": "Offer";
  name: string;
  description: string;
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
      bestRating: "5";
      worstRating: "1";
    };
  };
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
  offers: CombinedOffer | CombinedOffer[] | CombinedAgregatedOffer;
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
  serviceDetailsSchema: Array<OneServiceSchema | CombinedAgregatedOffer>;
  slogan: string;
  breadcrumb: Array<BreadCrumb>;
}
