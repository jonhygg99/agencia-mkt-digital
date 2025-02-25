import QuestionSection from "../ui/components/question";
import { questionDisenoWeb } from "../constants/question";
import ParallaxImage from "../ui/components/parallax-image";
import Contact from "../ui/components/contact/contact";
import Steps from "../ui/components/timeline/steps";
import Faq from "../ui/components/faq";
import HeroBig from "../ui/components/hero-big";
import BannerCta from "../ui/components/banner-cta";
import Reasons from "../ui/components/reasons";
import Pricing from "../ui/components/pricing";
import { timelineStepsDisenoWeb } from "../constants/timeline/diseno-web";
import { faqItemsDisenoWeb } from "../constants/faq/diseno-web";
import { reasonItemsDisenoWeb } from "../constants/reasons/diseno-web";
import { priceCardsDisenoWeb } from "../constants/pricing/diseno-web";
import {
  BannerText,
  BannerTitle,
  HeroTitle,
  ReasonsTitle,
  StepsDescription,
  TitlePricing,
} from "./constants";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={HeroTitle} title="Diseño Web" />
      {/* <Hero /> */}
      <QuestionSection question={questionDisenoWeb} />
      <Reasons title={ReasonsTitle} reasonItems={reasonItemsDisenoWeb} />
      <ParallaxImage
        imageURL="parallax-image/diseno-web.webp"
        title="COMUNICA TU MENSAJE SIN PALABRAS"
        text="El diseño es el embajador silencioso que da voz a tu marca."
      />
      <Pricing
        title={TitlePricing}
        pricingCards={priceCardsDisenoWeb}
        spacing={true}
        mensual={false}
      />
      <Contact service="Diseño Web" />
      <Steps
        service="Diseño Web con SEO"
        description={StepsDescription}
        timelineSteps={timelineStepsDisenoWeb}
      />
      <Faq
        faqItems={faqItemsDisenoWeb}
        posesivo="nuestro"
        service="Diseño Web"
      />
      <BannerCta bannerTitle={BannerTitle} bannerText={BannerText} />
    </div>
  );
}
