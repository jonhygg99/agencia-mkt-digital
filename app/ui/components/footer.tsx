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
import { FooterSectionItem } from "@/app/utils/interface/footer";

const FooterSection = ({
  title,
  links,
  linkHref,
}: {
  title: string;
  links: FooterSectionItem[];
  linkHref?: string;
}) => (
  <div>
    <span className="text-white text-lg font-semibold mb-5 block">
      {linkHref ? (
        <Link href={linkHref} className="link-text-dark">
          {title}
        </Link>
      ) : (
        title
      )}
    </span>
    <ul className="space-y-2">
      {links.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="link-text-dark">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterSection
            title="Empresa"
            links={EMPRESA_FOOTER}
            linkHref={undefined}
          />
          <FooterSection
            title="Agencia Marketing digital"
            links={AGENCIA_MARKETING_FOOTER}
            linkHref={DOMINIO}
          />
          <FooterSection
            title="Agencia SEO"
            links={AGENCIA_SEO_FOOTER}
            linkHref={URL_AGENCIA_SEO}
          />
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              <p>
                {NOMBRE_EMPRESA} ® — {DIRECCION_EMPRESA} — Tel.{" "}
                {TELEFONO_EMPRESA} — {EMAIL_EMPRESA}
              </p>
              <div className="flex space-x-4 mt-2">
                {TEXTOS_LEGALES.map((item, index) => [
                  <Link
                    key={item.href}
                    href={item.href}
                    className="link-text-dark"
                  >
                    {item.name}
                  </Link>,
                  index < TEXTOS_LEGALES.length - 1 && (
                    <span key={`separator-${index}`}>—</span>
                  ),
                ])}
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
