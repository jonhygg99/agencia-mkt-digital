import Pricing from "@/app/ui/components/pricing";
import * as Constants from "./constants";

export default function ConsultorSEO() {
  return (
    <div className="max-w-[1320px] mx-auto">
      {/* Hero Section with sticky image */}
      <div className="relative min-h-screen px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {Constants.STICKY_IMAGE}
          <div className="px-6 py-12 lg:py-24">
            {Constants.TITLE_CONSULTOR}
            <div className="mb-12">{Constants.DESCRIPTION_CONSULTOR}</div>
            {/* Services Section */}
            <div className="mb-24">
              {Constants.TITLE_SERVICE}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Constants.SERVICE_WEB_DESIGNER}
                {Constants.SERVICE_UI_DESIGNER}
                {Constants.SERVICE_SEO}
                {Constants.SERVICE_CONTENT}
              </div>
            </div>
            {/* Pricing Section */}
            <div className="mb-24">
              <Pricing
                pricingCards={Constants.PRICE_CARD_SERVICE}
                title={Constants.TITLE_PRICING}
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
