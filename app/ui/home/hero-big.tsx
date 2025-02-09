import Image from "next/image";
import ButtonScroll from "../elements/button-scroll";
import TypingAnimation from "../elements/typing-animation";
import { animatedSEOAgencyTexts } from "../constants/typing-animation";

export default function HeroBig() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]">
      <h1 className="text-center">Agencia SEO</h1>
      <p className="text-4xl md:text-5xl lg:text-6xl min-h-96 md:min-h-72 lg:min-h-[290px] mx-auto inline-block font-bold text-center pb-12 ">
        Somos una <span className="custom-title">Agencia SEO</span> que impulsa
        el Crecimiento Digital, optimizando tu presencia en línea y{" "}
        <TypingAnimation
          texts={animatedSEOAgencyTexts}
          className="custom-title"
        />
      </p>
      <div className="flex justify-center max-w-[500px] mx-auto pb-12">
        <ButtonScroll idElement="contact" buttonText="Pedir Presupuesto" />
      </div>
      <Image
        src="/agencia.webp"
        alt="Agencia SEO"
        width={1600}
        height={731}
        className="w-full h-auto"
      />
    </section>
  );
}
