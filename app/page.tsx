import Hero from "./ui/home/hero";
import Services from "./ui/home/services";
import ParallaxImage from "./ui/components/parallax-image";
import Problems from "./ui/home/problems";
import Contact from "./ui/components/contact/contact";
import Steps from "./ui/home/steps";
import Faq from "./ui/home/faq";
import HeroBig from "./ui/components/hero-big";
import BannerCta from "./ui/home/banner-cta";
import TypingAnimation from "./ui/elements/typing-animation";
import { animatedSEOAgencyTexts } from "./ui/constants/typing-animation";
import QuestionSection from "./ui/home/question";
import { questionSEO } from "./ui/constants/question";

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
    "No dejes pasar la oportunidad de mejorar tu visibilidad en línea y atraer más clientes. Contáctanos para una consulta gratuita y descubre cómo nuestras estrategias de SEO personalizadas pueden llevar tu negocio al siguiente nivel. ¡El éxito digital te espera!";

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
      <Contact />
      <Steps />
      <Faq />
      <BannerCta bannerTitle={bannerTitle} bannerText={bannerText} />
    </div>
  );
}
