import { TickIcon } from "../icons/pricing/tick";
import { CrossIcon } from "../icons/pricing/cross";
import { PriceCard } from "@/app/utils/interface/pricing";
import ButtonScroll from "../elements/button-scroll";

const PriceCardComponent = ({
  card,
  spacing,
  mensual,
}: {
  card: PriceCard;
  spacing: boolean;
  mensual: boolean;
}) => {
  return (
    <div
      className={`flex flex-col ${
        spacing ? "background-bubble rounded-3xl p-8" : ""
      }`}
    >
      <h3 className="text-2xl font-bold mb-4 flex justify-center">
        {card.title}
      </h3>
      <div className="flex items-baseline gap-1 mb-4 justify-center">
        <span className="text-4xl font-bold flex justify-center">
          {card.price}€
        </span>
        <span className="text-gray-400">+ IVA {mensual && "/ mes"}</span>
      </div>
      <p className="text-gray-400 mb-8 text-center">{card.description}</p>
      <ul className="space-y-4 mb-8 flex-grow">
        {card.features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className="flex items-start gap-2 dark:text-gray-300 text-gray-600"
          >
            {feature.included ? <TickIcon /> : <CrossIcon />}
            <span
              className={
                feature.included
                  ? "dark:text-gray-300"
                  : "text-gray-400 dark:text-gray-600"
              }
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      {spacing && (
        <ButtonScroll
          idElement="contact"
          buttonText="Contactar"
          styleButton={
            "w-full background-orange text-white py-4 px-6 rounded-xl text-center hover:background-orange-hover transition-colors"
          }
        />
      )}
    </div>
  );
};

export default function Pricing({
  pricingCards,
  title,
  spacing,
  mensual,
}: {
  pricingCards?: PriceCard[];
  title: React.ReactNode;
  spacing: boolean;
  mensual: boolean;
}) {
  if (pricingCards === undefined) return null;
  const isSingleCard = pricingCards.length === 1;
  return (
    <section
      className={`container mx-auto max-w-[1320px]${
        spacing ? "px-6 py-12 md:py-24" : ""
      }`}
    >
      {title}
      <div
        className={`grid grid-cols-1 ${
          isSingleCard
            ? "mx-auto md:grid-cols-1 max-w-[700px]"
            : "md:grid-cols-2 lg:grid-cols-3"
        }  ${spacing ? "gap-8" : "gap-2"}`}
      >
        {pricingCards.map((card, index) => (
          <PriceCardComponent
            key={index}
            card={card}
            spacing={spacing}
            mensual={mensual}
          />
        ))}
      </div>
    </section>
  );
}
