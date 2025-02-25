interface NavLink {
  href: string;
  text: string;
  dropdown?: NavLink[];
}

export const navigationLinks: NavLink[] = [
  {
    href: "/agencia-seo",
    text: "SEO",
    dropdown: [
      { href: "/agencia-seo/posicionamiento-seo", text: "Posicionamiento SEO" },
      { href: "/agencia-seo/seo-local", text: "SEO Local" },
    ],
  },
  { href: "/diseno-web", text: "Diseño Web" },
  { href: "/consultor-seo", text: "Consultor SEO" },
];
