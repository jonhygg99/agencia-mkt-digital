import HeroBig from "@/app/ui/components/hero-big";
import BannerCta from "@/app/ui/components/banner-cta";
import Contact from "@/app/ui/components/contact/contact";
import Faq from "@/app/ui/components/faq";
import ParallaxImage from "@/app/ui/components/parallax-image";
import QuestionSection from "@/app/ui/components/question";
import Steps from "@/app/ui/components/timeline/steps";
import { ServiceSchema } from "@/app/utils/schema/service";
import Reasons from "@/app/ui/components/reasons";
import Pricing from "@/app/ui/components/pricing";
import { PageServiceData } from "@/app/utils/interface/page";

export default function PageService({
  data,
  title,
  mensual,
}: {
  data: PageServiceData;
  title?: string;
  mensual?: boolean;
}) {
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={data.SCHEMA} />
      <HeroBig
        HeroTitle={data.TITLE_HERO}
        title={title == undefined ? data.SCHEMA.name : title}
      />
      <QuestionSection question={data.QUESTION_SERVICE} />
      <Reasons
        title={data.TITLE_REASONS}
        reasonItems={data.REASON_ITEMS_SERVICE}
      />
      <ParallaxImage
        imageURL={data.IMAGE_PARALLAX_URL}
        title={data.TITLE_PARALLAX}
        text={data.TEXT_PARALLAX}
      />
      <Pricing
        title={data.TITLE_PRICING}
        pricingCards={data.PRICE_CARD_SERVICE}
        spacing={true}
        mensual={mensual == undefined ? true : mensual}
      />
      <Contact service={data.SERVICE} />
      <Steps
        service={data.SERVICE}
        description={data.DESCRIPTION_TIMELINE}
        timelineSteps={data.TIMELINE_STEPS_SERVICE}
      />
      <Faq
        faqItems={data.FAQ_ITEMS_SERVICE}
        posesivo="nuestro Servicio de"
        service={data.SERVICE}
      />
      <BannerCta
        bannerTitle={data.TITLE_BANNER}
        bannerText={data.TEXT_BANNER}
      />
    </div>
  );
}
