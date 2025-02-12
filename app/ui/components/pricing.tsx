import Link from "next/link";
import { TickIcon } from "../icons/pricing/tick";
import { CrossIcon } from "../icons/pricing/cross";
import { PriceCard } from "@/app/constants/pricing/interface";

export default function Pricing({
  service,
  pricingCards,
}: {
  service: string;
  pricingCards: PriceCard[];
}) {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1600px]">
      <h2 className="title mb-10 max-w-[750px] mx-auto">
        Precios Competitivos para un{" "}
        <span className="custom-title">{service}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="background-bubble rounded-3xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-4 ">{card.title}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold ">€{card.price}</span>
              <span className="text-gray-400">+ IVA</span>
            </div>
            <p className="text-gray-400 mb-8">{card.description}</p>
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
            <Link
              href="/contacto"
              className="w-full background-orange text-white py-4 px-6 rounded-xl text-center hover:background-orange-hover transition-colors"
            >
              Contactar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
