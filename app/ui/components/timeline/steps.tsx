import Timeline from "./timeline";
import { TimelineSteps } from "../../../utils/interface/timeline";

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
    <section className="section-class-1320">
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
