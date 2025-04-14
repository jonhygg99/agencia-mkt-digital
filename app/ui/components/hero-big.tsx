import Image from "next/image";
import ButtonScroll from "../elements/button-scroll";
import { IMAGE_SLUG_AGENCIA } from "@/app/utils/constants/image";

interface HeroBigProps {
  HeroTitle: React.ReactNode;
  title: string;
}

export default function HeroBig({ HeroTitle, title }: HeroBigProps) {
  const imageTitle = "Agencia de Marketing Digital";

  return (
    <section className="section-class-1320">
      <h1 className="text-center">{title}</h1>
      <div className="text-4xl md:text-5xl lg:text-6xl min-h-96 md:min-h-72 lg:min-h-[290px] mx-auto inline-block font-bold text-center pb-12 ">
        {HeroTitle}
      </div>
      <div className="flex justify-center max-w-[500px] mx-auto pb-12">
        <ButtonScroll
          idElement="contact"
          buttonText="Pedir Presupuesto"
          styleButton={"btn"}
        />
      </div>
      <Image
        src={IMAGE_SLUG_AGENCIA}
        alt={imageTitle}
        title={imageTitle}
        width={1600}
        height={731}
        className="w-full h-auto"
      />
    </section>
  );
}
