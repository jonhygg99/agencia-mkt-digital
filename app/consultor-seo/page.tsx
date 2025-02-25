import Image from "next/image";
import Pricing from "@/app/ui/components/pricing";
import { priceCardsConsultant } from "@/app/constants/pricing/consultant";
import {
  DescriptionConsultor,
  ServiceContent,
  ServiceSEO,
  ServiceUIDesigner,
  ServiceWebDesigner,
  StickyImage,
  TitleConsultor,
  TitlePricing,
  TitleService,
} from "./constants";

export default function ConsultorSEO() {
  return (
    <div className="max-w-[1320px] mx-auto">
      {/* Hero Section with sticky image */}
      <div className="relative min-h-screen px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {StickyImage}
          <div className="px-6 py-12 lg:py-24">
            {TitleConsultor}
            <div className="mb-12">{DescriptionConsultor}</div>
            {/* Services Section */}
            <div className="mb-24">
              {TitleService}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ServiceWebDesigner}
                {ServiceUIDesigner}
                {ServiceSEO}
                {ServiceContent}
              </div>
            </div>
            {/* Pricing Section */}
            <div className="mb-24">
              <Pricing
                pricingCards={priceCardsConsultant}
                title={TitlePricing}
                spacing={false}
                mensual={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
