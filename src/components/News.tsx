import { Megaphone, ClipboardList, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Megaphone,
    title: "School Announcements",
    description: "Important school updates and announcements will appear here.",
  },
  {
    icon: ClipboardList,
    title: "Enrollment",
    description: "Enrollment information and important dates will be published here.",
  },
  {
    icon: CalendarDays,
    title: "School Activities",
    description: "Discover activities, events, and community moments from school life.",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Stay Updated
            </span>
            <h2 className="section-heading">School News &amp; Announcements</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-maroon/10 bg-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon/10">
                    <Icon className="text-maroon" size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
