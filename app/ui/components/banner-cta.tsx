import ButtonScroll from "../elements/button-scroll";

export default function BannerCta({
  bannerTitle,
  bannerText,
}: {
  bannerTitle: string;
  bannerText: string;
}) {
  return (
    <section className="section-class max-w-[1320px]">
      <div className="flex flex-col lg:flex-row gap-12 ">
        <div className="flex-1 ">
          <p className="text-4xl lg:text-6xl md:text-5xl font-black">
            {bannerTitle}
          </p>
        </div>
        <div className="flex-1 space-y-8">
          <p> {bannerText} </p>
          <ButtonScroll idElement="contact" buttonText="Empezar Proyecto" />
        </div>
      </div>
    </section>
  );
}
