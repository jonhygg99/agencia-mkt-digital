import { TimelineSteps } from "../../../constants/timeline/timeline";

export default function Timeline({
  timelineSteps,
}: {
  timelineSteps: TimelineSteps[];
}) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="relative">
        {timelineSteps.map((item, index) => (
          <div key={index} className="mb-8 flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-5 w-5 items-center justify-center rounded-full background-orange"></div>
              {index !== timelineSteps.length - 1 && (
                <div className="h-40 w-0.5 background-orange"></div>
              )}
            </div>
            <div className="flex flex-col pb-8">
              <div className="background-orange text-white px-4 py-1 rounded-md w-fit text-sm font-medium mb-2">
                PASO {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-with-dark">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
