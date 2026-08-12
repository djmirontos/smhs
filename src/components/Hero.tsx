import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
              St. Michael&apos;s High School
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
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg lg:max-w-none">
            <Image
              src="/images/school-photo.jpg"
              alt="St. Michael's High School campus"
              fill
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 448px, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
