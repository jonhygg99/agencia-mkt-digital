import BubbleInfo from "../elements/bubble-info";
import AttractionIcon from "../icons/attraction";
import TrustIcon from "../icons/trust";
import UserExperienceIcon from "../icons/user-experience";
import RoiIcon from "../icons/roi";

export default function Reasons() {
  const title = (
    <p>
      Razones Clave por las que el{" "}
      <span className="custom-title">Diseño Web es Esencial</span> para Tu Marca
    </p>
  );

  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1600px]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3 title mb-8 lg:mb-0 self-center">{title}</div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <BubbleInfo
            Icon={AttractionIcon}
            title="Atracción de Clientes"
            description="Un diseño web atractivo y funcional capta la atención de los visitantes de inmediato. La primera impresión es clave; un sitio visualmente agradable anima a los usuarios a explorar más y refleja la auténtica identidad de tu marca."
          />
          <BubbleInfo
            Icon={TrustIcon}
            title="Credibilidad y Confianza"
            description="Los sitios web bien diseñados transmiten profesionalismo. Un diseño pulido hace que los usuarios se sientan seguros al interactuar con tu marca, lo que incrementa la probabilidad de que elijan tus servicios."
          />

          <BubbleInfo
            Icon={UserExperienceIcon}
            title="Mejora de la Experiencia del Usuario"
            description="Un buen diseño se centra en la usabilidad y la accesibilidad. Navegación intuitiva y tiempos de carga rápidos mejoran significativamente la experiencia del usuario, fomentando la lealtad y la repetición de visitas."
          />
          <BubbleInfo
            Icon={RoiIcon}
            title="ROI Elevado"
            description="Invertir en un diseño web de calidad ofrece un alto retorno de inversión. Un sitio bien diseñado atrae más tráfico y convierte mejor, lo que significa que cada visita tiene más altas probabilidades de convertirse en una venta."
          />
        </div>
      </div>
    </section>
  );
}
