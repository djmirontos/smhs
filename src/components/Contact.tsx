import { MapPin, Phone, Mail, Link2 } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: MapPin,
    label: "Address",
    value: (
      <>
        St. Michael&apos;s High School
        <br />3 3rd South Street
        <br />Tangub City, Northern Mindanao
        <br />Philippines
      </>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Official contact information coming soon.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Official contact information coming soon.",
  },
  {
    icon: Link2,
    label: "Facebook",
    value: "Official page link coming soon.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Get in Touch
            </span>
            <h2 className="section-heading">Contact Us</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <ul className="space-y-4">
              {items.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-maroon/10 bg-white p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon/10">
                    <Icon className="text-maroon" size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d500!2d123.748116!3d8.062435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sph!4v1"
                className="h-[250px] w-full lg:h-[350px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Michael's High School location map"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
