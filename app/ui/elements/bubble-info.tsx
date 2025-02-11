import { FC } from "react";

interface BubbleInfo {
  Icon: FC;
  title: string;
  description: string;
}

export default function BubbleInfo({ Icon, title, description }: BubbleInfo) {
  return (
    <div className="background-bubble rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow justify-center items-center">
      <Icon />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
