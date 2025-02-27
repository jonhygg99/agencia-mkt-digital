"use client";

import { JSX, useState } from "react";
import { FaqItem } from "../../utils/interface/faq";
import PlusIcon from "../icons/faq/plus";
import MinusIcon from "../icons/faq/minus";

const parseAnswer = (answer: string) => {
  const lines = answer.split("\n");
  const elements: JSX.Element[] = [];

  let currentList: string[] = [];

  lines.forEach((line, index) => {
    if (line.startsWith("* ")) {
      // Añadir item a la lista actual
      currentList.push(line.substring(2));
    } else {
      // Si hay una lista pendiente, procesarla primero
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc ml-6">
            {currentList.map((item, i) => (
              <li key={i}>
                {item
                  .split("**")
                  .map((part, j) =>
                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                  )}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }

      // Procesar línea normal
      if (line.trim() !== "") {
        const formattedLine = line
          .split("**")
          .map((part, i) =>
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          );

        elements.push(
          <div key={`text-${index}`}>
            <p>{formattedLine}</p>
            {index < lines.length - 1 && <br />}
          </div>
        );
      }
    }
  });

  // Procesar última lista si existe
  if (currentList.length > 0) {
    elements.push(
      <ul key="final-list" className="list-disc ml-6">
        {currentList.map((item, i) => (
          <li key={i}>
            {item
              .split("**")
              .map((part, j) =>
                j % 2 === 1 ? <strong key={j}>{part}</strong> : part
              )}
          </li>
        ))}
      </ul>
    );
  }

  return elements;
};

export default function Faq({
  faqItems,
  posesivo,
  service,
}: {
  faqItems: FaqItem[];
  posesivo: string;
  service: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-class-900">
      <p className="text-4xl lg:text-6xl md:text-5xl font-bold mb-12 text-center">
        Respondemos tus dudas sobre {posesivo}{" "}
        <span className="custom-title">{service}</span>
      </p>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <MinusIcon className="h-6 w-6" />
                ) : (
                  <PlusIcon className="h-6 w-6" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6">{parseAnswer(item.answer)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
