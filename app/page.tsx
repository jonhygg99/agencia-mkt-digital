import Hero from "./ui/home/hero";
import Question from "./ui/home/question";
import Servicios from "./ui/home/servicios";
import ParallaxImage from "./ui/components/parallax-image";
import Problems from "./ui/home/problems";
import Contact from "./ui/components/contact/contact";
import Steps from "./ui/home/steps";
import Faq from "./ui/home/faq";
import HeroBig from "./ui/home/hero-big";
import BannerCta from "./ui/home/banner-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBig />
      {/* <Hero /> */}
      <Question />
      <Servicios />
      <ParallaxImage
        imageURL="/background-servicios-seo.webp"
        title="TRANSFORMA CLICS EN CLIENTES"
        text="Hacer SEO es como tener un imán para atraer compradores."
      />
      <Problems />
      <Contact />
      <Steps />
      <Faq />
      <BannerCta />
    </div>
  );
}
