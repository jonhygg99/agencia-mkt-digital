"use client";

import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function Contact({ service }: { service: string }) {
  return (
    <section id="contact" className="section-class-1320">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ContactInfo service={service} />
        <ContactForm />
      </div>
    </section>
  );
}
