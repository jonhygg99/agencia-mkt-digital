import BubbleInfo from "../elements/bubble-info";
import { ReasonItem } from "@/app/constants/reasons/interface";

export default function Reasons({
  title,
  reasonItems,
}: {
  title: React.ReactNode;
  reasonItems: ReasonItem[];
}) {
  return (
    <section className="section-class-1600">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3 title mb-8 lg:mb-0 self-center">{title}</div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasonItems.map((item, index) => (
            <BubbleInfo
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
