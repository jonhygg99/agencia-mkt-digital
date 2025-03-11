import HeroBig from "@/app/ui/components/hero-big";
import BannerCta from "@/app/ui/components/banner-cta";
import Contact from "@/app/ui/components/contact/contact";
import Faq from "@/app/ui/components/faq";
import ParallaxImage from "@/app/ui/components/parallax-image";
import Pricing from "@/app/ui/components/pricing";
import QuestionSection from "@/app/ui/components/question";
import Reasons from "@/app/ui/components/reasons";
import Steps from "@/app/ui/components/timeline/steps";
import * as Constants from "./constants";
import { ServiceSchema } from "@/app/utils/schema/service";

export default function Page() {
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={Constants.SCHEMA} />
      <HeroBig HeroTitle={Constants.TITLE_HERO} title={Constants.SCHEMA.name} />
      <QuestionSection question={Constants.QUESTION_SERVICE} />
      <Reasons
        title={Constants.TITLE_REASONS}
        reasonItems={Constants.REASON_ITEMS_SERVICE}
      />
      <ParallaxImage
        imageURL={Constants.IMAGE_PARALLAX_URL}
        title={Constants.TITLE_PARALLAX}
        text={Constants.TEXT_PARALLAX}
      />
      <Pricing
        title={Constants.TITLE_PRICING}
        pricingCards={Constants.PRICE_CARD_SERVICE}
        spacing={true}
        mensual={false}
      />
      <Contact service={Constants.SERVICE} />
      <Steps
        service={Constants.SERVICE}
        description={Constants.DESCRIPTION_TIMELINE}
        timelineSteps={Constants.TIMELINE_STEPS_SERVICE}
      />
      <Faq
        faqItems={Constants.FAQ_ITEMS_SERVICE}
        posesivo="nuestro Servicio de"
        service={Constants.SERVICE}
      />
      <BannerCta
        bannerTitle={Constants.TITLE_BANNER}
        bannerText={Constants.TEXT_BANNER}
      />
    </div>
  );
}
