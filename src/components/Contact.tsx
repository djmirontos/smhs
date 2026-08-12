import { MapPin, Phone, Mail, Link2 } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: MapPin,
    label: "Address",
    value: "Tangub City, Misamis Occidental, Philippines",
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
            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border-2 border-dashed border-maroon/20 bg-white lg:aspect-auto lg:h-full">
              <div className="px-6 text-center">
                <MapPin className="mx-auto mb-2 text-maroon/40" size={28} aria-hidden="true" />
                <p className="text-sm font-medium text-maroon/50">
                  Map will be added once the official location is confirmed
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
