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
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg
              viewBox="0 0 400 400"
              className="h-full w-full"
              role="img"
              aria-label="Abstract illustration representing school and community"
            >
              <circle cx="200" cy="200" r="190" fill="#FAF7F3" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="#C7A45A" strokeOpacity="0.25" strokeWidth="1.5" />
              <g fill="#7A263A">
                <circle cx="200" cy="110" r="10" fillOpacity="0.7" />
                <circle cx="150" cy="150" r="8" fillOpacity="0.45" />
                <circle cx="250" cy="150" r="8" fillOpacity="0.45" />
                <circle cx="120" cy="210" r="7" fillOpacity="0.3" />
                <circle cx="280" cy="210" r="7" fillOpacity="0.3" />
              </g>
              <g stroke="#7A263A" strokeOpacity="0.25" strokeWidth="1.5">
                <line x1="200" y1="110" x2="150" y2="150" />
                <line x1="200" y1="110" x2="250" y2="150" />
                <line x1="150" y1="150" x2="120" y2="210" />
                <line x1="250" y1="150" x2="280" y2="210" />
              </g>
              <path
                d="M130 300 L130 230 Q130 200 160 200 L240 200 Q270 200 270 230 L270 300 Z"
                fill="#7A263A"
                fillOpacity="0.1"
              />
              <rect x="130" y="290" width="140" height="14" fill="#7A263A" fillOpacity="0.18" rx="2" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
