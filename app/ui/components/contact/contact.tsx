"use client";

import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function Contact({ service }: { service: string }) {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-12 md:py-24 max-w-[1320px]"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ContactInfo service={service} />
        <ContactForm />
      </div>
    </section>
  );
}
