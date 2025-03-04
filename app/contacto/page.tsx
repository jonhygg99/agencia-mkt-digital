import Contact from "@/app/ui/components/contact/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="section-class-1320">
        <div className="max-w-[900px] mx-auto">
          <h2 className="title mb-5">
            <span className="custom-title">Contacto</span> para Empresas
          </h2>
        </div>
        <Contact service="Empresa" />
      </section>
    </div>
  );
}
