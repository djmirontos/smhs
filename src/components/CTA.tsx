import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-maroon py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="mx-auto mb-5 block h-px w-10 bg-gold" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
              Discover St. Michael High School
            </h2>
            <p className="mt-4 text-base text-cream/85 sm:text-lg">
              A place where learning, character, faith, and community come together.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-cta">
                Get in Touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
