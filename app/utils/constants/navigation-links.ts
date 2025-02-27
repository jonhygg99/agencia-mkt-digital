interface NavLink {
  href: string;
  text: string;
  dropdown?: NavLink[];
}

export const DOMINIO = "http://localhost:3000";

const SLUG_AGENCIA_SEO = "/agencia-seo";
const URL_AGENCIA_SEO = `${DOMINIO}${SLUG_AGENCIA_SEO}`;

const SLUG_POSICIONAMIENTO_SEO = "/posicionamiento-seo";
const URL_POSICIONAMIENTO_SEO = `${URL_AGENCIA_SEO}${SLUG_POSICIONAMIENTO_SEO}`;

const SLUG_SEO_LOCAL = "/seo-local";
const URL_SEO_LOCAL = `${URL_AGENCIA_SEO}${SLUG_SEO_LOCAL}`;

const SLUG_DISENO_WEB = "/diseno-web";
const URL_DISENO_WEB = `${DOMINIO}${SLUG_DISENO_WEB}`;

const SLUG_CONSULTOR_SEO = "/consultor-seo";
const URL_CONSULTOR_SEO = `${DOMINIO}${SLUG_CONSULTOR_SEO}`;

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
