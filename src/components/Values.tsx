import { Cross, ShieldCheck, Lightbulb, HandHeart, Users } from "lucide-react";
import Reveal from "./Reveal";

const values = [
  {
    icon: Cross,
    title: "Faith",
    description: "Encouraging students to grow in faith and spiritual awareness.",
  },
  {
    icon: ShieldCheck,
    title: "Character",
    description: "Developing integrity, responsibility, respect, and compassion.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Supporting curiosity, critical thinking, and academic growth.",
  },
  {
    icon: HandHeart,
    title: "Service",
    description: "Encouraging students to contribute positively to others and the community.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building meaningful relationships among students, families, educators, and the wider community.",
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-maroon-dark py-16 text-cream sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-4 justify-center text-gold">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              What Guides Us
            </span>
            <h2 className="font-serif text-[1.9rem] font-semibold leading-[1.15] text-cream sm:text-4xl md:text-[2.75rem]">
              Education Beyond the Classroom
            </h2>
            <p className="mt-4 text-sm italic text-cream/60 sm:text-base">
              General values reflecting the school&apos;s Catholic character — an official
              mission and vision statement will be added once provided by the administration.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-5 [&>*:nth-child(5)]:col-span-2 lg:[&>*:nth-child(5)]:col-span-1">
          {values.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-cream/10 bg-white/5 p-5 text-center transition-colors duration-200 hover:bg-white/10 sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                  <Icon className="text-gold" size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/70 sm:text-sm">
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
