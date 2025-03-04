import {
  NOMBRE_EMPRESA,
  DIRECCION_EMPRESA,
  EMAIL_EMPRESA,
} from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";

export default function PoliticaPrivacidad() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Responsable del Tratamiento</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Identidad: {NOMBRE_EMPRESA}</li>
          <li>Dirección: {DIRECCION_EMPRESA}</li>
          <li>Correo electrónico: {EMAIL_EMPRESA}</li>
          <li>Sitio Web: {DOMINIO}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Finalidad del Tratamiento</h2>
        <p className="mb-4">
          En {NOMBRE_EMPRESA} tratamos la información que nos facilitan las personas interesadas con los siguientes fines:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gestionar el envío de la información que nos soliciten.</li>
          <li>Desarrollar acciones comerciales y el mantenimiento de la relación comercial.</li>
          <li>Prestar servicios de marketing digital y consultoría SEO.</li>
          <li>Mejorar su experiencia en el sitio web.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Legitimación</h2>
        <p className="mb-4">
          La base legal para el tratamiento de sus datos es:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>El consentimiento del interesado para el envío de información comercial.</li>
          <li>La ejecución de un contrato o prestación de servicios.</li>
          <li>El interés legítimo del responsable.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Conservación de los Datos</h2>
        <p className="mb-4">
          Los datos personales proporcionados se conservarán:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mientras se mantenga la relación comercial o contractual.</li>
          <li>Hasta que se solicite su supresión por el interesado.</li>
          <li>Durante el tiempo necesario para cumplir con las obligaciones legales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Derechos de los Interesados</h2>
        <p className="mb-4">
          Los interesados pueden ejercer los siguientes derechos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Acceso a sus datos personales.</li>
          <li>Rectificación de los datos inexactos.</li>
          <li>Supresión de sus datos cuando, entre otros motivos, ya no sean necesarios.</li>
          <li>Oposición al tratamiento de sus datos.</li>
          <li>Limitación del tratamiento de sus datos.</li>
          <li>Portabilidad de sus datos.</li>
        </ul>
        <p className="mt-4">
          Los interesados podrán ejercer sus derechos enviando un correo electrónico a {EMAIL_EMPRESA}.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Medidas de Seguridad</h2>
        <p className="mb-4">
          {NOMBRE_EMPRESA} ha adoptado todas las medidas técnicas y organizativas necesarias para garantizar la seguridad
          de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">7. Modificaciones</h2>
        <p className="mb-4">
          {NOMBRE_EMPRESA} se reserva el derecho de modificar la presente política de privacidad para adaptarla a
          novedades legislativas o jurisprudenciales, así como a prácticas de la industria.
        </p>
      </section>
    </div>
  );
}
