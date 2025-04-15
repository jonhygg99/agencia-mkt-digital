import { NOMBRE_EMPRESA, EMAIL_EMPRESA } from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { Metadata } from "next";
import { METADATA } from "./metadata";

export const metadata: Metadata = METADATA;

export default function PoliticaCookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

      <section className="mb-8">
        <p className="mb-4">
          Esta política de cookies explica qué son las cookies y cómo las
          utilizamos en {DOMINIO}. Debe leer esta política para entender qué son
          las cookies, cómo las usamos, los tipos de cookies que utilizamos, la
          información que recopilamos usando cookies y cómo se utiliza esa
          información.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. ¿Qué son las Cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en su
          navegador web cuando visita nuestro sitio web. Las cookies son
          ampliamente utilizadas para hacer que los sitios web funcionen de
          manera más eficiente, así como para proporcionar información a los
          propietarios del sitio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          2. Uso de Google Analytics
        </h2>
        <p className="mb-4">
          Este sitio web utiliza Google Analytics, un servicio de análisis web
          proporcionado por Google, Inc. Google Analytics utiliza cookies para
          ayudarnos a analizar cómo los usuarios utilizan nuestro sitio web.
        </p>
        <p className="mb-4">
          La información generada por la cookie sobre su uso del sitio web
          (incluyendo su dirección IP) será transmitida y almacenada por Google
          en servidores en los Estados Unidos. Google utilizará esta información
          con el propósito de:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Evaluar su uso del sitio web</li>
          <li>Recopilar informes sobre la actividad del sitio web</li>
          <li>
            Proporcionar otros servicios relacionados con la actividad del sitio
            web y el uso de Internet
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Cookies Utilizadas</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Cookies de Google Analytics:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                _ga: Se utiliza para distinguir usuarios únicos. Caduca a los 2
                años.
              </li>
              <li>
                _gid: Se utiliza para distinguir usuarios. Caduca a las 24
                horas.
              </li>
              <li>
                _gat: Se utiliza para limitar el porcentaje de solicitudes.
                Caduca en 1 minuto.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Control de Cookies</h2>
        <p className="mb-4">
          Puede controlar y/o eliminar las cookies según desee. Puede eliminar
          todas las cookies que ya están en su dispositivo y puede configurar la
          mayoría de los navegadores para evitar que se coloquen. Sin embargo,
          si hace esto, es posible que deba ajustar manualmente algunas
          preferencias cada vez que visite un sitio y algunos servicios y
          funcionalidades pueden no funcionar.
        </p>
        <p className="mb-4">
          Para deshabilitar el seguimiento de Google Analytics en nuestro sitio
          web, puede instalar el complemento de inhabilitación para navegadores
          de Google Analytics disponible en:
          https://tools.google.com/dlpage/gaoptout
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          5. Actualizaciones de la Política
        </h2>
        <p className="mb-4">
          {NOMBRE_EMPRESA} puede actualizar esta Política de Cookies
          periódicamente. Le notificaremos cualquier cambio publicando la nueva
          Política de Cookies en esta página. Los cambios entran en vigor
          inmediatamente después de su publicación en el sitio web.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">6. Contacto</h2>
        <p className="mb-4">
          Si tiene alguna pregunta sobre nuestra Política de Cookies, puede
          contactar con nosotros en: {EMAIL_EMPRESA}
        </p>
      </section>
    </div>
  );
}
