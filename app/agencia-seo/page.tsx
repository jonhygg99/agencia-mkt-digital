import HeroBig from "@/app/ui/components/hero-big";
import BannerCta from "@/app/ui/components/banner-cta";
import Contact from "@/app/ui/components/contact/contact";
import Faq from "@/app/ui/components/faq";
import ParallaxImage from "@/app/ui/components/parallax-image";
import QuestionSection from "@/app/ui/components/question";
import Steps from "@/app/ui/components/timeline/steps";
import Problems from "@/app/ui/components/problems";
import Services from "@/app/ui/components/services";
import * as Constants from "./constants";
import type { Metadata } from "next";
import { METADATA_SERVICE } from "./metadata";

export const metadata: Metadata = METADATA_SERVICE;

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={Constants.TITLE_HERO} title={Constants.SERVICE} />
      <QuestionSection question={Constants.QUESTION_SERVICE} />
      <Services
        title={Constants.TITLE_SERVICE}
        description={Constants.DESCRIPTION_SERVICE}
        service={Constants.SERVICE_LIST}
      />
      <ParallaxImage
        imageURL={Constants.IMAGE_PARALLAX_URL}
        title={Constants.TITLE_PARALLAX}
        text={Constants.TEXT_PARALLAX}
      />
      <Problems problems={Constants.CLIENT_PROBLEMS} />
      <Contact service="SEO" />
      <Steps
        service="Estrategia SEO"
        description={Constants.DESCRIPTION_TIMELINE}
        timelineSteps={Constants.TIMELINE_STEPS_SERVICE}
      />
      <Faq
        faqItems={Constants.FAQ_ITEMS_SERVICE}
        posesivo="nuestra"
        service={Constants.SERVICE}
      />
      <BannerCta
        bannerTitle={Constants.TITLE_BANNER}
        bannerText={Constants.TEXT_BANNER}
      />
    </div>
  );
}
