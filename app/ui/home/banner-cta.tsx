import ButtonScroll from "../elements/button-scroll";

export default function BannerCta({
  bannerTitle,
  bannerText,
}: {
  bannerTitle: string;
  bannerText: string;
}) {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24">
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
