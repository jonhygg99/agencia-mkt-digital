import { FooterSectionItem } from "@/app/utils/interface/footer";

interface NavLink {
  href: string;
  text: string;
  dropdown?: NavLink[];
}

export const DOMINIO = "http://localhost:3000";

export const SCHEMA_URL_WEBPAGE_ID = `${DOMINIO}/#webpage`;
export const SCHEMA_URL_WEBSITE_ID = `${DOMINIO}/#website`;
export const SCHEMA_URL_ORGANIZATION_ID = `${DOMINIO}/#organization`;
export const SCHEMA_URL_SERVICE_ID = `${DOMINIO}/#service`;
export const SCHEMA_URL_BREADCRUMB_ID = `${DOMINIO}/#breadcrumb`;
export const SCHEMA_URL_OFFERING_ID = `${DOMINIO}/#offering`;
export const SCHEMA_URL_LOGO_ID = `${DOMINIO}/#logo`;
export const SCHEMA_SLUG_CATALOG_ID = "/#catalog";

/*
 *  AGENCIA SEO
 */

const SLUG_AGENCIA_SEO = "/agencia-seo";
export const URL_AGENCIA_SEO = `${DOMINIO}${SLUG_AGENCIA_SEO}`;

const SLUG_AUDITORIA_SEO = "/auditoria-seo";
export const URL_AUDITORIA_SEO = `${URL_AGENCIA_SEO}${SLUG_AUDITORIA_SEO}`;

const SLUG_POSICIONAMIENTO_SEO = "/posicionamiento-seo";
export const URL_POSICIONAMIENTO_SEO = `${URL_AGENCIA_SEO}${SLUG_POSICIONAMIENTO_SEO}`;

const SLUG_SEO_LOCAL = "/seo-local";
export const URL_SEO_LOCAL = `${URL_AGENCIA_SEO}${SLUG_SEO_LOCAL}`;

const SLUG_CONSULTORIA_SEO = "/consultoria-seo";
export const URL_CONSULTORIA_SEO = `${URL_AGENCIA_SEO}${SLUG_CONSULTORIA_SEO}`;

const SLUG_MANTENIMIENTO_WEB = "/mantenimiento-web";
export const URL_MANTENIMIENTO_WEB = `${URL_AGENCIA_SEO}${SLUG_MANTENIMIENTO_WEB}`;

const SLUG_DISENO_WEB = "/agencia-diseno-web";
export const URL_AGENCIA_DISENO_WEB = `${DOMINIO}${SLUG_DISENO_WEB}`;

const SLUG_CONSULTOR_SEO = "/consultor-seo";
export const URL_CONSULTOR_SEO = `${DOMINIO}${SLUG_CONSULTOR_SEO}`;

export const navigationLinks: NavLink[] = [
  {
    href: URL_AGENCIA_SEO,
    text: "SEO",
    dropdown: [
      { href: URL_AUDITORIA_SEO, text: "Auditoría SEO" },
      { href: URL_POSICIONAMIENTO_SEO, text: "Posicionamiento SEO" },
      { href: URL_SEO_LOCAL, text: "Posicionamiento SEO Local" },
      // { href: URL_AGENCIA_DISENO_WEB, text: "Diseño Web con SEO" },
      { href: URL_CONSULTORIA_SEO, text: "Consultoría SEO" },
      { href: URL_MANTENIMIENTO_WEB, text: "Mantenimiento Web" },
    ],
  },
  { href: URL_AGENCIA_DISENO_WEB, text: "Diseño Web" },
  { href: URL_CONSULTOR_SEO, text: "Consultor SEO" },
];

/*
 *  FOOTER
 */

export const EMPRESA_FOOTER: FooterSectionItem[] = [
  { name: "Sobre nosotros", href: "/sobre-nosotros" },
  { name: "Consultor SEO", href: URL_CONSULTOR_SEO },
  { name: "Contacto", href: "/contacto" },
  { name: "Portfolio", href: "/portfolio" },
];

export const AGENCIA_MARKETING_FOOTER: FooterSectionItem[] = [
  { name: "Agencia de Marketing Digital", href: DOMINIO },
  { name: "Agencia SEO", href: URL_AGENCIA_SEO },
  { name: "Agencia Diseño Web", href: URL_AGENCIA_DISENO_WEB },
];

export const AGENCIA_SEO_FOOTER: FooterSectionItem[] = [
  { name: "Auditoría SEO", href: URL_AGENCIA_SEO },
  { name: "SEO Local", href: URL_SEO_LOCAL },
  { name: "Diseño Web", href: URL_AGENCIA_DISENO_WEB },
  { name: "Posicionamiento SEO", href: URL_POSICIONAMIENTO_SEO },
  { name: "Consultoría SEO", href: URL_CONSULTORIA_SEO },
  { name: "Mantenimiento Web", href: URL_CONSULTOR_SEO },
];

/*
 *  FOOTER - Textos Legales
 */

export const URL_TEXTOS_LEGALES = `${DOMINIO}/textos-legales`;

const SLUG_AVISO_LEGAL = "/aviso-legal";
export const URL_AVISO_LEGAL = `${URL_TEXTOS_LEGALES}${SLUG_AVISO_LEGAL}`;

const SLUG_POLITICA_PRIVACIDAD = "/politica-privacidad";
export const URL_POLITICA_PRIVACIDAD = `${URL_TEXTOS_LEGALES}${SLUG_POLITICA_PRIVACIDAD}`;

const SLUG_POLITICA_COOKIE = "/politica-cookies";
export const URL_POLITICA_COOKIE = `${URL_TEXTOS_LEGALES}${SLUG_POLITICA_COOKIE}`;

const SLUG_MAPA_WEB = "/mapa-web";
export const URL_MAPA_WEB = `${DOMINIO}${SLUG_MAPA_WEB}`;

export const TEXTOS_LEGALES = [
  { name: "Aviso Legal", href: URL_AVISO_LEGAL },
  { name: "Política de Privacidad", href: URL_POLITICA_PRIVACIDAD },
  { name: "Política de Cookies", href: URL_POLITICA_COOKIE },
  { name: "Mapa Web", href: URL_MAPA_WEB },
];
