import Image from "next/image";
import Reveal from "./Reveal";

const levels = ["Kindergarten", "Elementary", "High School"];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div>
            <span className="eyebrow mb-4">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              About Our School
            </span>
            <h2 className="section-heading">A Place to Learn, Grow, and Belong</h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              St. Michael&apos;s High School is a Catholic educational community in Tangub City,
              Misamis Occidental, welcoming learners across Kindergarten, Elementary, and High
              School. We are committed to nurturing every student academically, personally, and
              spiritually as they grow toward their fullest potential.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              This is placeholder introductory copy. Official history, mission, and vision
              content from the school administration will replace this text.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {levels.map((level) => (
                <li
                  key={level}
                  className="rounded-xl border border-maroon/10 bg-cream px-2 py-3 text-center"
                >
                  <span className="text-[11px] font-semibold leading-tight text-maroon-dark sm:text-sm">
                    {level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/learn.jpg"
              alt="Students at St. Michael's High School"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
