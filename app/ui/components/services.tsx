import BubbleInfo from "@/app/ui/elements/bubble-info";
import { ServiceItem } from "@/app/utils/interface/service";

export default function Services({
  title,
  description,
  service,
}: {
  title: string;
  description: string;
  service: ServiceItem[];
}) {
  return (
    <section className="section-class-1320">
      <div className="max-w-[900px] mx-auto">
        <h2 className="title mb-5">
          <span className="custom-title">Servicios {title}</span> que Generan
          Resultados Tangibles
        </h2>
        <p className="text-center mb-16">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.map((service, index) => (
          <BubbleInfo
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
            comingSoon={service.comingSoon}
            url={service.url}
          />
        ))}
      </div>
    </section>
  );
}
