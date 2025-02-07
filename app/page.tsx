import Hero from "./ui/home/hero";
import Question from "./ui/home/question";
import Servicios from "./ui/home/servicios";
import ParallaxImage from "./ui/components/parallax-image";
import Problemas from "./ui/home/problemas";
import Contact from "./ui/home/contact";
import Steps from "./ui/home/steps";
import Faq from "./ui/home/faq";
import ButtonScroll from "./ui/elements/button-scroll";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Question />
      <Servicios />
      <ParallaxImage
        imageURL="/background-servicios-seo.webp"
        title="TRANSFORMA CLICS EN CLIENTES"
        text="Hacer SEO es como tener un imán para atraer compradores."
      />
      <Problemas />
      <Contact />
      <Steps />
      <Faq />
      <section className="container mx-auto px-6 py-12 md:py-24  ">
        <div className="flex flex-col lg:flex-row gap-12 ">
          <div className="flex-1 ">
            <p className="text-4xl lg:text-6xl md:text-5xl font-black ">
              COMPARTIENDO TU VISIÓN
            </p>
          </div>
          <div className="flex-1 space-y-8">
            <p>
              No dejes pasar la oportunidad de mejorar tu visibilidad en línea y
              atraer más clientes. Contáctanos para una consulta gratuita y
              descubre cómo nuestras estrategias de SEO personalizadas pueden
              llevar tu negocio al siguiente nivel. ¡El éxito digital te espera!
            </p>
            <ButtonScroll idElement="contact" buttonText="Empezar Proyecto" />
          </div>
        </div>
      </section>
    </div>
  );
}
