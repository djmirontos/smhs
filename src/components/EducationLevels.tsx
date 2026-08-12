import { GraduationCap, Sprout, BookOpen } from "lucide-react";
import Reveal from "./Reveal";

const levels = [
  {
    icon: Sprout,
    title: "Kindergarten",
    description:
      "A nurturing foundation where young learners begin discovering, exploring, and building confidence.",
  },
  {
    icon: BookOpen,
    title: "Elementary",
    description:
      "Building strong academic foundations while developing curiosity, discipline, and positive values.",
  },
  {
    icon: GraduationCap,
    title: "High School",
    description:
      "Preparing young people for higher education, future opportunities, and responsible citizenship.",
  },
];

export default function EducationLevels() {
  return (
    <section id="education" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Academic Programs
            </span>
            <h2 className="section-heading">Growing Through Every Stage</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {levels.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-maroon/10 bg-white p-6 shadow-[0_1px_2px_rgba(41,37,38,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-maroon/10">
                  <Icon className="text-maroon" size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
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
