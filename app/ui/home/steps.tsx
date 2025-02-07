import Timeline from "./timeline";

export default function Steps() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="title mb-5 max-w-[750px] mx-auto">
          Pasos Clave para Transformar Tu{" "}
          <span className="custom-title">Estrategia SEO</span>
        </h2>
        <p className="text-center mb-16">
          Descubre cómo transformamos tu presencia en línea a través de un
          proceso estructurado y efectivo. Desde la consulta inicial hasta la
          implementación y optimización continua, cada paso está diseño para
          adaptarse a las necesidades de tu negocio y maximizar tu visibilidad
          en los motores de búsqueda. Con un enfoque integral que incluye
          estrategias de SEO on-page y off-page, trabajamos contigo para
          alcanzar tus objetivos y atraer más clientes. ¡Solicita tu consulta
          gratuita y descubre el potencial de tu negocio!
        </p>
      </div>
      <Timeline />
    </section>
  );
}
