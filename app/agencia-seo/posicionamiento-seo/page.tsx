import QuestionSection from "../../ui/components/question";
import { questionPosicionamientoSEO } from "../../constants/question";
import ParallaxImage from "../../ui/components/parallax-image";
import Contact from "../../ui/components/contact/contact";
import Steps from "../../ui/components/timeline/steps";
import Faq from "../../ui/components/faq";
import HeroBig from "../../ui/components/hero-big";
import BannerCta from "../../ui/components/banner-cta";
import Reasons from "../../ui/components/reasons";
import Pricing from "../../ui/components/pricing";
import { reasonItemsSEO } from "../../constants/reasons/posicionamiento-seo";
import { priceCardsPosicionamientoSEO } from "../../constants/pricing/posicionamiento-seo";
import { faqItemsPosicionamientoSEO } from "../../constants/faq/posicionamiento-seo";
import {
  BannerText,
  BannerTitle,
  HeroTitle,
  ReasonsTitle,
  StepsDescription,
  TitlePricing,
} from "./constants";
import { timelineStepsPosicionamientoSEO } from "@/app/constants/timeline/posicionamiento-seo";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroBig
        HeroTitle={HeroTitle}
        title="Posicionamiento Web Profesional con SEO"
      />
      <QuestionSection question={questionPosicionamientoSEO} />
      <Reasons title={ReasonsTitle} reasonItems={reasonItemsSEO} />
      <ParallaxImage
        imageURL="../parallax-image/posicionamiento-seo.webp"
        title="LA VISIBILIDAD ES LA CLAVE DEL ÉXITO DIGITAL"
        text="No se trata solo de estar en línea, se trata de ser encontrado."
      />
      <Pricing
        title={TitlePricing}
        pricingCards={priceCardsPosicionamientoSEO}
        spacing={true}
        mensual={true}
      />
      <Contact service="Posicionamiento SEO" />
      <Steps
        service="Posicionamiento SEO"
        description={StepsDescription}
        timelineSteps={timelineStepsPosicionamientoSEO}
      />
      <Faq
        faqItems={faqItemsPosicionamientoSEO}
        posesivo="nuestro Servicio de"
        service="Posicionamiento SEO"
      />
      <BannerCta bannerTitle={BannerTitle} bannerText={BannerText} />
    </div>
  );
}
