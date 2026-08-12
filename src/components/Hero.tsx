import { ArrowRight, ImageIcon } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-maroon/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-page relative grid gap-10 pb-16 pt-8 sm:gap-12 sm:pb-20 sm:pt-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              St. Michael High School
            </span>
            <h1 className="font-serif text-[2.4rem] font-semibold leading-[1.12] text-ink sm:text-5xl md:text-6xl lg:text-[4rem]">
              Learning. Character. <span className="text-maroon">Faith.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A Catholic learning community nurturing young minds, building character, and
              inspiring students to grow with purpose.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#about" className="btn-primary">
                Discover Our School
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#education" className="btn-secondary">
                Learn More
              </a>
            </div>
            <p className="mt-6 text-xs text-muted">
              Placeholder messaging — official school copy to be provided by the administration.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none">
            <svg
              viewBox="0 0 480 360"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="Abstract decorative illustration of school arches with a cross accent"
            >
              <rect x="0" y="0" width="480" height="360" rx="28" fill="#FFFFFF" />
              <rect x="0" y="0" width="480" height="360" rx="28" fill="none" stroke="#7A263A" strokeOpacity="0.08" />
              <g opacity="0.9">
                <path d="M60 300 L60 190 Q60 150 100 150 Q140 150 140 190 L140 300 Z" fill="#7A263A" fillOpacity="0.08" />
                <path d="M170 300 L170 160 Q170 110 220 110 Q270 110 270 160 L270 300 Z" fill="#7A263A" fillOpacity="0.14" />
                <path d="M300 300 L300 190 Q300 150 340 150 Q380 150 380 190 L380 300 Z" fill="#7A263A" fillOpacity="0.08" />
              </g>
              <line x1="40" y1="300" x2="420" y2="300" stroke="#C7A45A" strokeWidth="2" />
              <g transform="translate(220,60)" stroke="#C7A45A" strokeWidth="3" strokeLinecap="round">
                <line x1="0" y1="0" x2="0" y2="34" />
                <line x1="-12" y1="12" x2="12" y2="12" />
              </g>
            </svg>

            <div className="absolute inset-4 flex items-center justify-center rounded-[1.5rem] border-2 border-dashed border-maroon/20 bg-white/50">
              <div className="px-6 text-center">
                <ImageIcon className="mx-auto mb-2 text-maroon/40" size={28} aria-hidden="true" />
                <p className="text-xs font-medium text-maroon/50">
                  Official school photo coming soon
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
