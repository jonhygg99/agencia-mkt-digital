import Hero from "../ui/components/hero";
import QuestionSection from "../ui/components/question";
import { questionDisenoWeb } from "../constants/question";
import Servicios from "../ui/components/services";
import ParallaxImage from "../ui/components/parallax-image";
import Problems from "../ui/components/problems";
import Contact from "../ui/components/contact/contact";
import Steps from "../ui/components/timeline/steps";
import Faq from "../ui/components/faq";
import HeroBig from "../ui/components/hero-big";
import BannerCta from "../ui/components/banner-cta";
import TypingAnimation from "../ui/elements/typing-animation";
import { animatedWebDesignTexts } from "../constants/typing-animation";
import Reasons from "../ui/components/reasons";
import Pricing from "../ui/components/pricing";
import { timelineStepsDisenoWeb } from "../constants/timeline/diseno-web";
import { faqItemsDisenoWeb } from "../constants/faq/diseno-web";
import { reasonItemsDisenoWeb } from "../constants/reasons/diseno-web";
import { priceCardsDisenoWeb } from "../constants/pricing/diseno-web";

export default function Page() {
  const HeroTitle = (
    <p>
      Creamos un <span className="custom-title">Diseño Web</span> que conecta
      con tus clientes.
      <br />
      Una estrategia que{" "}
      <TypingAnimation
        texts={animatedWebDesignTexts}
        className="custom-title"
      />
    </p>
  );
  const bannerTitle = "ATRACCIÓN Y CONVERSIÓN";
  const bannerText =
    "Convierte tu sitio web en una herramienta poderosa que atraiga, convierta\
 y retenga clientes. Contáctanos ahora y da el primer paso hacia una página optimizada\
 para destacar en los motores de búsqueda. ¡Haz que tu éxito online empiece hoy mismo!";
  const stepsDescription =
    "Transformamos tu visión en una presencia digital poderosa a través de un proceso\
 meticuloso y estratégico. Nuestro enfoque único combina diseño web cautivador con\
 optimización SEO avanzada, garantizando no solo una web visualmente impactante, sino\
 también una herramienta efectiva para atraer y convertir clientes. Cada paso de nuestro\
 proceso está diseño para maximizar tu visibilidad online y potenciar el crecimiento de tu negocio.";
  const reasonsTitle = (
    <p>
      Razones Clave por las que el{" "}
      <span className="custom-title">Diseño Web es Esencial</span> para Tu Marca
    </p>
  );

  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={HeroTitle} titleSEO="Diseño Web" />
      {/* <Hero /> */}
      <QuestionSection question={questionDisenoWeb} />
      <Reasons title={reasonsTitle} reasonItems={reasonItemsDisenoWeb} />
      <ParallaxImage
        imageURL="parallax-image/diseno-web.webp"
        title="COMUNICA TU MENSAJE SIN PALABRAS"
        text="El diseño es el embajador silencioso que da voz a tu marca."
      />
      <Pricing service="Diseño Web" pricingCards={priceCardsDisenoWeb} />
      <Contact service="Diseño Web" />
      <Steps
        service="Diseño Web con SEO"
        description={stepsDescription}
        timelineSteps={timelineStepsDisenoWeb}
      />
      <Faq
        faqItems={faqItemsDisenoWeb}
        posesivo="nuestro"
        service="Diseño Web"
      />
      <BannerCta bannerTitle={bannerTitle} bannerText={bannerText} />
    </div>
  );
}
