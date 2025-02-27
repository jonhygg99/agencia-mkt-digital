import type { Question } from "@/app/utils/interface/question";

export default function QuestionSection({ question }: { question: Question }) {
  return (
    <section className="section-class max-w-[1320px]">
      <div className="flex flex-col lg:flex-row gap-12 ">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-6xl md:text-5xl font-bold ">
            {question.question}
          </h2>
        </div>
        <div className="flex-1 space-y-8">
          <p className="text-2xl md:text-3xl lg:text-2xl">
            <span className="font-bold">{question.boldAnswer}</span>{" "}
            {question.answer}
          </p>
          <div>
            <p className="text-4xl font-bold mb-4">Conclusión</p>
            <p className="text-2xl md:text-3xl">
              <span className="font-bold">{question.boldConclusion}</span>
              {question.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
