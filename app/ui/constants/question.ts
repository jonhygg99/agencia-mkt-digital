export interface Question {
  question: string;
  boldAnswer: string;
  answer: string;
  boldConclusion: string;
  conclusion: string;
}

export const questionSEO: Question = {
  question: "¿Por qué invertir en estrategias SEO?",
  boldAnswer: "Porque los anuncios no son eternos.",
  answer: "Una buena estrategia de SEO te da visibilidad a largo plazo",
  boldConclusion: "Más tráfico orgánico.",
  conclusion: "y menos drama.",
};

export const questionDisenoWeb: Question = {
  question: "¿Por qué invertir en Diseño Web atractivo?",
  boldAnswer: "Porque la primera impresión cuenta.",
  answer:
    "Un diseño optimizado para SEO asegura que tu sitio sea fácil de encontrar y navegar",
  boldConclusion: "Más atractivo",
  conclusion: "y menos olvidable.",
};
