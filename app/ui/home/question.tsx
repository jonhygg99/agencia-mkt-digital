export default function Question() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]">
      <div className="flex flex-col lg:flex-row gap-12 ">
        <div className="flex-1 ">
          <h2 className="text-4xl lg:text-6xl md:text-5xl font-bold ">
            ¿Por qué invertir en estrategias SEO?
          </h2>
        </div>
        <div className="flex-1 space-y-8">
          <p className="text-2xl md:text-3xl lg:text-2xl">
            <span className="font-bold">
              Porque los anuncios no son eternos.
            </span>{" "}
            Una buena estrategia de SEO te da visibilidad a largo plazo.
          </p>
          <div>
            <p className="text-4xl font-bold mb-4">Conclusión</p>
            <p className="text-2xl md:text-3xl">
              <span className="font-bold">Más tráfico orgánico</span> y menos
              drama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
