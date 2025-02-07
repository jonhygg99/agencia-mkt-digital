"use client";

import { useState } from "react";
import faqItems from "../constants/faq-items";
import PlusIcon from "../icons/plus";
import MinusIcon from "../icons/minus";

const parseAnswer = (answer: string) => {
  return answer.split("\n").map((line, index) => {
    // Reemplaza el texto en negrita
    const formattedLine = line.split("**").map((part, i) => {
      return i % 2 === 1 ? <strong key={i}>{part}</strong> : part;
    });

    return (
      <div key={index}>
        <p>{formattedLine}</p>
        {index < answer.split("\n").length - 1 && <br />}{" "}
        {/* Agrega un <br /> si no es la última línea */}
      </div>
    );
  });
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[900px]">
      <p className="text-4xl lg:text-6xl md:text-5xl font-bold mb-12 text-center">
        Respondemos tus dudas sobre nuestra{" "}
        <span className="custom-title">Agencia SEO</span>
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
