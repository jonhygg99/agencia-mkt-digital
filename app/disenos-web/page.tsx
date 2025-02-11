import Hero from "../ui/home/hero";
import QuestionSection from "../ui/home/question";
import { questionDisenoWeb } from "../ui/constants/question";
import Servicios from "../ui/home/services";
import ParallaxImage from "../ui/components/parallax-image";
import Problems from "../ui/home/problems";
import Contact from "../ui/components/contact/contact";
import Steps from "../ui/home/steps";
import Faq from "../ui/home/faq";
import HeroBig from "../ui/components/hero-big";
import BannerCta from "../ui/home/banner-cta";
import TypingAnimation from "../ui/elements/typing-animation";
import { animatedWebDesignTexts } from "../ui/constants/typing-animation";
import Reasons from "../ui/components/reasons";

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
    "Convierte tu sitio web en una herramienta poderosa que atraiga, convierta y retenga clientes. Contáctanos ahora y da el primer paso hacia una página optimizada para destacar en los motores de búsqueda. ¡Haz que tu éxito online empiece hoy mismo!";

  return (
    <div className="min-h-screen">
      <HeroBig HeroTitle={HeroTitle} titleSEO="Diseño Web" />
      {/* <Hero /> */}
      <QuestionSection question={questionDisenoWeb} />
      <Reasons />
      <ParallaxImage
        imageURL="/background-diseno-web.webp"
        title="COMUNICA TU MENSAJE SIN PALABRAS"
        text="El diseño es el embajador silencioso que da voz a tu marca."
      />
      <Problems />
      <Contact />
      <Steps />
      <Faq />
      <BannerCta bannerTitle={bannerTitle} bannerText={bannerText} />
    </div>
  );
}
