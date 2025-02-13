import QuestionSection from "../ui/components/question";
import { questionPosicionamientoSEO } from "../constants/question";
import ParallaxImage from "../ui/components/parallax-image";
import Contact from "../ui/components/contact/contact";
import Steps from "../ui/components/timeline/steps";
import Faq from "../ui/components/faq";
import HeroBig from "../ui/components/hero-big";
import BannerCta from "../ui/components/banner-cta";
import TypingAnimation from "../ui/elements/typing-animation";
import { animatedPosicionamientoSEOTexts } from "../constants/typing-animation";
import Reasons from "../ui/components/reasons";
import Pricing from "../ui/components/pricing";
import { timelineStepsDisenoWeb } from "../constants/timeline/diseno-web";
import { reasonItemsSEO } from "../constants/reasons/posicionamiento-seo";
import { priceCardsPosicionamientoSEO } from "../constants/pricing/posicionamiento-seo";
import { faqItemsPosicionamientoSEO } from "../constants/faq/posicionamiento-seo";

export default function Page() {
  const HeroTitle = (
    <p>
      La estrategia de <span className="custom-title">Posicionamiento SEO</span>{" "}
      está diseñada para conquistar las primeras posiciones y{" "}
      <TypingAnimation
        texts={animatedPosicionamientoSEOTexts}
        className="custom-title"
      />
    </p>
  );
  const bannerTitle = "IMPULSA TU POTENCIAL";
  const bannerText =
    "No subestimes el poder de una estrategia bien definida. Aprovecha cada oportunidad para\
 destacar en el mundo digital y atraer a tu público objetivo. Contáctanos para una consulta\
 gratuita y descubre cómo nuestras soluciones SEO pueden transformar tu negocio y maximizar\
 tu alcance. ¡El futuro de tu éxito comienza hoy!";
  const stepsDescription =
    "Transformamos tu visión en una presencia digital poderosa a través de un proceso\
 meticuloso y estratégico. Nuestro enfoque único combina diseño web cautivador con\
 optimización SEO avanzada, garantizando no solo una web visualmente impactante, sino\
 también una herramienta efectiva para atraer y convertir clientes. Cada paso de nuestro\
 proceso está diseño para maximizar tu visibilidad online y potenciar el crecimiento de tu negocio.";
  const reasonsTitle = (
    <p>
      Razones Clave por las que el{" "}
      <span className="custom-title">Posicionamiento SEO es Esencial</span> para
      Tu Marca
    </p>
  );

  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={HeroTitle} titleSEO="Posicionamiento SEO" />
      <QuestionSection question={questionPosicionamientoSEO} />
      <Reasons title={reasonsTitle} reasonItems={reasonItemsSEO} />
      <ParallaxImage
        imageURL="parallax-image/posicionamiento-seo.webp"
        title="LA VISIBILIDAD ES LA CLAVE DEL ÉXITO DIGITAL"
        text="No se trata solo de estar en línea, se trata de ser encontrado."
      />
      <Pricing
        service="Posicionamiento SEO"
        pricingCards={priceCardsPosicionamientoSEO}
      />
      <Contact service="Posicionamiento SEO" />
      <Steps
        service="Posicionamiento SEO"
        // TODO: implementar
        description={stepsDescription}
        // TODO: implementar
        timelineSteps={timelineStepsDisenoWeb}
      />
      <Faq
        faqItems={faqItemsPosicionamientoSEO}
        posesivo="nuestro Servicio de"
        service="Posicionamiento SEO"
      />
      <BannerCta bannerTitle={bannerTitle} bannerText={bannerText} />
    </div>
  );
}
