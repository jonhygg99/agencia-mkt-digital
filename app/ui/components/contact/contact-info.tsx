export default function ContactInfo({ service }: { service: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-4">
        <span className="custom-title">¿Listo Para Crecer?</span>
        <h2>Pide Tu Presupuesto de {service} Ahora</h2>
      </div>
      <p className="text-gray-with-dark mb-8">
        ¿Listo para llevar tu negocio al siguiente nivel? En nuestra agencia de
        SEO, entendemos que cada empresa es única y tiene sus propios desafíos.
        Por eso, ofrecemos presupuestos personalizados que se adaptan a tus
        necesidades específicas. Completa el formulario de contacto y nuestro
        equipo de expertos te brindará una consulta gratuita. No dejes pasar la
        oportunidad de mejorar tu visibilidad en línea y atraer a más clientes.
        ¡Contáctanos hoy y comienza tu camino hacia el éxito digital!
      </p>
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold mb-1">Correo electrónico:</p>
          <p className="text-gray-with-dark">info@emjohogar.com</p>
        </div>
        <div>
          <p className="font-bold mb-1">Teléfono de contacto:</p>
          <p className="text-gray-with-dark">+34 659 34 36 25</p>
        </div>
      </div>
    </div>
  );
}
