import Hero from "./ui/components/hero";
import Services from "./ui/components/services";
import ParallaxImage from "./ui/components/parallax-image";
import Problems from "./ui/components/problems";
import Contact from "./ui/components/contact/contact";
import Steps from "./ui/components/timeline/steps";
import Faq from "./ui/components/faq";
import HeroBig from "./ui/components/hero-big";
import BannerCta from "./ui/components/banner-cta";
import TypingAnimation from "./ui/elements/typing-animation";
import { animatedSEOAgencyTexts } from "./constants/typing-animation";
import QuestionSection from "./ui/components/question";
import { questionSEO } from "./constants/question";
import { timelineStepsSEO } from "./constants/timeline/timeline-steps-seo";
import { faqItemsSEOAgency } from "./constants/faq/faq-items-seo-agency";

export default function Home() {
  const HeroTitle = (
    <p>
      Somos una <span className="custom-title">Agencia SEO</span> que impulsa el
      Crecimiento Digital, optimizando tu presencia en línea y{" "}
      <TypingAnimation
        texts={animatedSEOAgencyTexts}
        className="custom-title"
      />
    </p>
  );
  const bannerTitle = "COMPARTIENDO TU VISIÓN";
  const bannerText =
    "No dejes pasar la oportunidad de mejorar tu visibilidad en línea y\
 atraer más clientes. Contáctanos para una consulta gratuita y descubre\
 cómo nuestras estrategias de SEO personalizadas pueden llevar tu negocio\
 al siguiente nivel. ¡El éxito digital te espera!";
  const stepsDescription =
    "Descubre cómo transformamos tu presencia en línea a través de un\
 proceso estructurado y efectivo. Desde la consulta inicial hasta la\
 implementación y optimización continua, cada paso está diseño para\
 adaptarse a las necesidades de tu negocio y maximizar tu visibilidad\
 en los motores de búsqueda. Con un enfoque integral que incluye\
 estrategias de SEO on-page y off-page, trabajamos contigo para\
 alcanzar tus objetivos y atraer más clientes. ¡Solicita tu consulta\
 gratuita y descubre el potencial de tu negocio!";

  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={HeroTitle} titleSEO="Agencia SEO" />
      {/* <Hero /> */}
      <QuestionSection question={questionSEO} />
      <Services />
      <ParallaxImage
        imageURL="/background-servicios-seo.webp"
        title="TRANSFORMA CLICS EN CLIENTES"
        text="Hacer SEO es como tener un imán para atraer compradores."
      />
      <Problems />
      <Contact service="SEO" />
      <Steps
        service="Estrategia SEO"
        description={stepsDescription}
        timelineSteps={timelineStepsSEO}
      />
      <Faq faqItems={faqItemsSEOAgency} posesivo="nuestra" />
      <BannerCta bannerTitle={bannerTitle} bannerText={bannerText} />
    </div>
  );
}
