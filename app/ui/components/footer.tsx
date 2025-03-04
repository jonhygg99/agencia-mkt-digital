import Link from "next/link";
import React from "react";
import {
  AGENCIA_MARKETING_FOOTER,
  AGENCIA_SEO_FOOTER,
  EMPRESA_FOOTER,
  URL_AGENCIA_SEO,
  TEXTOS_LEGALES,
  URL_CONSULTOR_SEO,
  DOMINIO,
} from "@/app/utils/constants/navigation-links";
import {
  NOMBRE_EMPRESA,
  DIRECCION_EMPRESA,
  TELEFONO_EMPRESA,
  EMAIL_EMPRESA,
} from "@/app/utils/constants/empresa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {EMPRESA_FOOTER.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="link-text-dark">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <Link href={DOMINIO} className="link-text-dark">
                Agencia Marketing digital
              </Link>
            </h3>
            <ul className="space-y-2">
              {AGENCIA_MARKETING_FOOTER.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="link-text-dark">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <Link href={URL_AGENCIA_SEO} className="link-text-dark">
                Agencia SEO
              </Link>
            </h3>
            <ul className="space-y-2">
              {AGENCIA_SEO_FOOTER.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="link-text-dark">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              <p>
                {NOMBRE_EMPRESA} ® — {DIRECCION_EMPRESA} — Tel.{" "}
                {TELEFONO_EMPRESA} — {EMAIL_EMPRESA}
              </p>
              <div className="flex space-x-4 mt-2">
                {TEXTOS_LEGALES.map((item, index) => (
                  <React.Fragment key={item.href}>
                    <Link href={item.href} className="link-text-dark">
                      {item.name}
                    </Link>
                    {index < TEXTOS_LEGALES.length - 1 && <span>—</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="text-sm flex items-center space-x-1">
              <span>Hecho con</span>
              <span className="text-red-500">❤</span>
              <span> por </span>
              <Link href={URL_CONSULTOR_SEO} className="link-text-dark">
                Jonathan Gómez
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
