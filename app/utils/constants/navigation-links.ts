interface NavLink {
  href: string;
  text: string;
  dropdown?: NavLink[];
}

export const DOMINIO = "http://localhost:3000";

const SLUG_AGENCIA_SEO = "/agencia-seo";
export const URL_AGENCIA_SEO = `${DOMINIO}${SLUG_AGENCIA_SEO}`;

const SLUG_POSICIONAMIENTO_SEO = "/posicionamiento-seo";
export const URL_POSICIONAMIENTO_SEO = `${URL_AGENCIA_SEO}${SLUG_POSICIONAMIENTO_SEO}`;

const SLUG_SEO_LOCAL = "/seo-local";
export const URL_SEO_LOCAL = `${URL_AGENCIA_SEO}${SLUG_SEO_LOCAL}`;

const SLUG_DISENO_WEB = "/diseno-web";
export const URL_DISENO_WEB = `${DOMINIO}${SLUG_DISENO_WEB}`;

const SLUG_CONSULTOR_SEO = "/consultor-seo";
export const URL_CONSULTOR_SEO = `${DOMINIO}${SLUG_CONSULTOR_SEO}`;

export const navigationLinks: NavLink[] = [
  {
    href: URL_AGENCIA_SEO,
    text: "SEO",
    dropdown: [
      { href: URL_POSICIONAMIENTO_SEO, text: "Posicionamiento SEO" },
      { href: URL_SEO_LOCAL, text: "SEO Local" },
    ],
  },
  { href: URL_DISENO_WEB, text: "Diseño Web" },
  { href: URL_CONSULTOR_SEO, text: "Consultor SEO" },
];

/*
 *  FOOTER
 */

export const EMPRESA_FOOTER = [
  { name: "Despierta tu web", href: "/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
  { name: "Portfolio", href: "/portfolio" },
];

export const AGENCIA_MARKETING_FOOTER = [
  { name: "Agencia de Marketing Digital", href: DOMINIO },
  { name: "Agencia SEO", href: URL_AGENCIA_SEO },
  { name: "Agencia SEM", href: "/agencia-sem" },
];

export const AGENCIA_SEO_FOOTER = [
  { name: "Auditoría SEO", href: URL_AGENCIA_SEO },
  { name: "SEO Local", href: URL_SEO_LOCAL },
  { name: "Diseño Web", href: URL_DISENO_WEB },
  { name: "Posicionamiento SEO", href: URL_POSICIONAMIENTO_SEO },
  { name: "Consultoría SEO", href: URL_CONSULTOR_SEO },
  { name: "Mantenimiento Web", href: URL_CONSULTOR_SEO },
];

export const TEXTOS_LEGALES = [
  { name: "Política de Privacidad", href: "/politica-de-privacidad" },
  { name: "Aviso Legal", href: "/aviso-legal" },
  { name: "Mapa Web", href: "/mapa-web" },
];
