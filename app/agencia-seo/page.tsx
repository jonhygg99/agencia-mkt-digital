import ParallaxImage from "../ui/components/parallax-image";
import Problems from "../ui/components/problems";
import Contact from "../ui/components/contact/contact";
import Steps from "../ui/components/timeline/steps";
import Faq from "../ui/components/faq";
import HeroBig from "../ui/components/hero-big";
import BannerCta from "../ui/components/banner-cta";
import QuestionSection from "../ui/components/question";
import { timelineStepsSEO } from "../constants/timeline/seo";
import { faqItemsSEOAgency } from "../constants/faq/seo-agency";
import { questionSEO } from "../constants/question";
import type { Metadata } from "next";
import { agenciaSEOMetadata } from "../metadata/agencia-seo";
import Services from "../ui/components/services";
import {
  BannerText,
  BannerTitle,
  HeroTitle,
  StepsDescription,
} from "./constants";

export const metadata: Metadata = agenciaSEOMetadata;

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={HeroTitle} title="Agencia SEO" />
      <QuestionSection question={questionSEO} />
      <Services />
      <ParallaxImage
        imageURL="parallax-image/agencia-seo.webp"
        title="TRANSFORMA CLICS EN CLIENTES"
        text="Hacer SEO es como tener un imán para atraer compradores."
      />
      <Problems />
      <Contact service="SEO" />
      <Steps
        service="Estrategia SEO"
        description={StepsDescription}
        timelineSteps={timelineStepsSEO}
      />
      <Faq
        faqItems={faqItemsSEOAgency}
        posesivo="nuestra"
        service="Agencia SEO"
      />
      <BannerCta bannerTitle={BannerTitle} bannerText={BannerText} />
    </div>
  );
}
