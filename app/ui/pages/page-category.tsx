import HeroBig from "@/app/ui/components/hero-big";
import BannerCta from "@/app/ui/components/banner-cta";
import Contact from "@/app/ui/components/contact/contact";
import Faq from "@/app/ui/components/faq";
import ParallaxImage from "@/app/ui/components/parallax-image";
import QuestionSection from "@/app/ui/components/question";
import Steps from "@/app/ui/components/timeline/steps";
import Problems from "@/app/ui/components/problems";
import Services from "@/app/ui/components/services";
import { AgencyServicesSchema } from "@/app/utils/schema/category";
import { PageCategoryData } from "@/app/utils/interface/page";
import Reasons from "../components/reasons";
import Pricing from "../components/pricing";

export default function PageCategory({
  data,
  contactService,
  stepsService,
  faqPosesivo,
  mensual,
}: {
  data: PageCategoryData;
  contactService: string;
  stepsService: string;
  faqPosesivo: string;
  mensual?: boolean;
}) {
  return (
    <div className="min-h-screen">
      <AgencyServicesSchema schema={data.SCHEMA} faq={data.FAQ_ITEMS_SERVICE} />
      <HeroBig HeroTitle={data.TITLE_HERO} title={data.SERVICE} />
      <QuestionSection question={data.QUESTION_SERVICE} />
      <Reasons
        title={data.TITLE_REASONS}
        reasonItems={data.REASON_ITEMS_SERVICE}
      />
      <Services
        title={data.TITLE_SERVICE}
        description={data.DESCRIPTION_SERVICE}
        service={data.SERVICE_LIST}
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

      <Problems problems={data.CLIENT_PROBLEMS} />
      <Contact service={contactService} />
      <Steps
        service={stepsService}
        description={data.DESCRIPTION_TIMELINE}
        timelineSteps={data.TIMELINE_STEPS_SERVICE}
      />
      <Faq
        faqItems={data.FAQ_ITEMS_SERVICE}
        posesivo={faqPosesivo}
        service={data.SERVICE}
      />
      <BannerCta
        bannerTitle={data.TITLE_BANNER}
        bannerText={data.TEXT_BANNER}
      />
    </div>
  );
}
