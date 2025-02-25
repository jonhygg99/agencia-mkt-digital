import Timeline from "./timeline";
import { TimelineSteps } from "../../../constants/interface/timeline";

export default function Steps({
  service,
  description,
  timelineSteps,
}: {
  service: string;
  description: string;
  timelineSteps: TimelineSteps[];
}) {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="title mb-5 max-w-[750px] mx-auto">
          Pasos Clave para Transformar Tu{" "}
          <span className="custom-title">{service}</span>
        </h2>
        <p className="text-center mb-16">{description}</p>
      </div>
      <Timeline timelineSteps={timelineSteps} />
    </section>
  );
}
