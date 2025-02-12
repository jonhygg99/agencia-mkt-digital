import Image from "next/image";
import ButtonScroll from "../elements/button-scroll";
import TypingAnimation from "../elements/typing-animation";

const animatedTexts = [
  "incrementando tu tráfico orgánico",
  "maximizando tu rentabilidad",
  "incrementando tus leads calificados",
];

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="flex flex-col space-y-8 max-w-xl mx-auto lg:mx-0">
          <p className="title">
            Somos una <span className="custom-title">Agencia SEO</span> que
            impulsa el Crecimiento Digital, optimizando tu presencia en línea y{" "}
            <TypingAnimation texts={animatedTexts} className="custom-title" />
          </p>
          <div className="pb-6 lg:pb-0">
            <ButtonScroll idElement="contact" buttonText="Pedir Presupuesto" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/agencia.webp"
            alt="Agencia SEO"
            width={640}
            height={292}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
