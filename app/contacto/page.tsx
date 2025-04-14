import Contact from "@/app/ui/components/contact/contact";
import { Metadata } from "next";
import { METADATA } from "./metadata";

export const metadata: Metadata = METADATA;

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="section-class-1320">
        <div className="max-w-[900px] mx-auto">
          <h1 className="title mb-5">
            <span className="custom-title">Contacto</span> para Empresas
          </h1>
        </div>
        <Contact service="Empresa" />
      </section>
    </div>
  );
}
