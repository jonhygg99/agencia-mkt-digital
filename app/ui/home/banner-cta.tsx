import ButtonScroll from "../elements/button-scroll";

export default function BannerCta() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 ">
        <div className="flex-1 ">
          <p className="text-4xl lg:text-6xl md:text-5xl font-black">
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
  );
}
