import {
  NOMBRE_EMPRESA,
  DIRECCION_EMPRESA,
  TELEFONO_EMPRESA,
  EMAIL_EMPRESA,
  CIF_EMPRESA,
} from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { Metadata } from "next";
import { METADATA } from "./metadata";

export const metadata: Metadata = METADATA;

export default function AvisoLegal() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Datos identificativos</h2>
        <p className="mb-4">
          En cumplimiento con el deber de información recogido en artículo 10 de
          la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico, a continuación se reflejan los
          siguientes datos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Razón social: {NOMBRE_EMPRESA}</li>
          <li>CIF: {CIF_EMPRESA}</li>
          <li>Domicilio: {DIRECCION_EMPRESA}</li>
          <li>Teléfono: {TELEFONO_EMPRESA}</li>
          <li>Email: {EMAIL_EMPRESA}</li>
          <li>Sitio Web: {DOMINIO}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Objeto</h2>
        <p className="mb-4">
          {NOMBRE_EMPRESA}, responsable del sitio web, pone a disposición de los
          usuarios el presente documento con el que pretende dar cumplimiento a
          las obligaciones dispuestas en la Ley 34/2002, de Servicios de la
          Sociedad de la Información y del Comercio Electrónico (LSSI-CE), así
          como informar a todos los usuarios del sitio web respecto a cuáles son
          las condiciones de uso del mismo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Usuarios</h2>
        <p className="mb-4">
          El acceso y/o uso de este sitio web atribuye la condición de USUARIO,
          que acepta, desde dicho acceso y/o uso, las Condiciones Generales de
          Uso aquí reflejadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Uso del portal</h2>
        <p className="mb-4">
          {DOMINIO} proporciona el acceso a diversos contenidos, servicios e
          información. El Usuario asume la responsabilidad del uso del portal.
          Esta responsabilidad se extiende al registro que fuese necesario para
          acceder a determinados servicios o contenidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Propiedad Intelectual</h2>
        <p className="mb-4">
          {NOMBRE_EMPRESA} es titular de todos los derechos de propiedad
          intelectual e industrial de su página web, así como de los elementos
          contenidos en la misma (a título enunciativo: imágenes, sonido, audio,
          vídeo, software o textos; marcas o logotipos, combinaciones de
          colores, estructura y diseño, selección de materiales usados,
          programas de ordenador necesarios para su funcionamiento, acceso y
          uso, etc.).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          6. Ley Aplicable y Jurisdicción
        </h2>
        <p className="mb-4">
          Para la resolución de todas las controversias o cuestiones
          relacionadas con el presente sitio web o de las actividades en él
          desarrolladas, será de aplicación la legislación española, a la que se
          someten expresamente las partes, siendo competentes para la resolución
          de todos los conflictos derivados o relacionados con su uso los
          Juzgados y Tribunales de Barcelona.
        </p>
      </section>
    </div>
  );
}
