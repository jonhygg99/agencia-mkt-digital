import { Question } from "@/app/utils/interface/question";
import { ServiceItem } from "@/app/utils/interface/service";
import { TimelineSteps } from "@/app/utils/interface/timeline";
import { FaqItem } from "@/app/utils/interface/faq";
import { ReactNode } from "react";
import {
  CategorySchema,
  ServiceDetailsSchema,
} from "@/app/utils/interface/schema";
import { ReasonItem } from "./reason";
import { PriceCard } from "./pricing";

export interface PageCategoryData {
  SCHEMA: CategorySchema;
  TITLE_HERO: ReactNode;
  SERVICE: string;
  QUESTION_SERVICE: Question;
  TITLE_SERVICE?: string;
  DESCRIPTION_SERVICE?: string;
  SERVICE_LIST?: ServiceItem[];
  TITLE_REASONS?: ReactNode;
  REASON_ITEMS_SERVICE?: ReasonItem[];
  TITLE_PRICING: ReactNode;
  PRICE_CARD_SERVICE?: PriceCard[];
  IMAGE_PARALLAX_URL: string;
  TITLE_PARALLAX: string;
  TEXT_PARALLAX: string;
  CLIENT_PROBLEMS: string[];
  DESCRIPTION_TIMELINE: string;
  TIMELINE_STEPS_SERVICE: TimelineSteps[];
  FAQ_ITEMS_SERVICE: FaqItem[];
  TITLE_BANNER: string;
  TEXT_BANNER: string;
}
export interface PageServiceData {
  SCHEMA: ServiceDetailsSchema;
  TITLE_HERO: React.ReactNode;
  QUESTION_SERVICE: Question;
  TITLE_REASONS: React.ReactNode;
  REASON_ITEMS_SERVICE: ReasonItem[];
  IMAGE_PARALLAX_URL: string;
  TITLE_PARALLAX: string;
  TEXT_PARALLAX: string;
  TITLE_PRICING: React.ReactNode;
  PRICE_CARD_SERVICE: PriceCard[];
  SERVICE: string;
  DESCRIPTION_TIMELINE: string;
  TIMELINE_STEPS_SERVICE: TimelineSteps[];
  FAQ_ITEMS_SERVICE: FaqItem[];
  TITLE_BANNER: string;
  TEXT_BANNER: string;
}
