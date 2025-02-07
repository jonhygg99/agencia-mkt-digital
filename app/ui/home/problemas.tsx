import SEOproblems from "../constants/seo-problems";

export default function Problemas() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]">
      <div className="max-w-[900px] mx-auto">
        <p className="title mb-5 max-w-[600px] mx-auto">
          Sabemos dar <span className="custom-title">solución</span> a tus
          problemas
        </p>
        <p className="text-center mb-16">
          ¿Sientes que no llegas a tu audiencia? Muchos negocios enfrentan
          problemas como la falta de visibilidad, la dificultad para atraer
          tráfico cualificado y el desafío de incrementar las ventas.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {SEOproblems.map((text, index) => (
          <div
            key={index}
            className="background-bubble text-gray-with-dark flex justify-center items-center text-center rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
