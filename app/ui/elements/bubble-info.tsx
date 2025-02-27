import { FC } from "react";

export interface BubbleInfo {
  Icon: FC;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function BubbleInfo({
  Icon,
  title,
  description,
  comingSoon = false,
}: BubbleInfo) {
  return (
    <div
      className={`background-bubble rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow justify-center items-center relative overflow-hidden ${
        comingSoon ? "opacity-50" : ""
      }`}
    >
      {comingSoon && (
        <div className="absolute top-10 -right-20 bg-yellow-500 text-white px-8 py-1 transform rotate-45 shadow-md w-72 flex items-center justify-center">
          <span className="text-sm font-semibold text-center inline-block w-full whitespace-nowrap ml-2 mb-1">
            PRÓXIMAMENTE
          </span>
        </div>
      )}
      <Icon />
      <h3
        className={`text-xl font-bold mb-4 ${comingSoon ? "opacity-50" : ""}`}
      >
        {title}
      </h3>
      <p className={comingSoon ? "opacity-50" : ""}>{description}</p>
    </div>
  );
}
