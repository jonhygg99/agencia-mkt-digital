interface PriceFeature {
  text: string;
  included: boolean;
}

export interface PriceCard {
  title: string;
  price: string;
  description: string;
  features: PriceFeature[];
}
