import { School, GraduationCap, Users, Church } from "lucide-react";
import Reveal from "./Reveal";

const nodes = [
  { icon: School, label: "School" },
  { icon: GraduationCap, label: "Students" },
  { icon: Users, label: "Families" },
  { icon: Church, label: "Community" },
];

export default function Community() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Our Community
            </span>
            <h2 className="section-heading">Rooted in Community</h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              St. Michael&apos;s High School exists within a wider community of students, families,
              educators, and neighbors in Tangub City. Together, this community supports every
              learner&apos;s journey — in the classroom and beyond it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-14 flex max-w-3xl flex-col items-center gap-8 sm:mt-16 sm:flex-row sm:justify-between sm:gap-4">
            {/* Mobile: vertical line spans the full stack. */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-maroon/0 via-maroon/15 to-maroon/0 sm:hidden"
            />
            {/* Desktop: this wrapper is pinned to the top of the row and is
                exactly h-16 tall — the same token the icon circle uses — so
                the line centers itself within it via top-1/2, instead of a
                hand-typed pixel value that has to be kept in sync separately.
                It can't drift out of alignment with the icon regardless of
                the label text below, since that text lives outside this
                h-16 box entirely. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 hidden h-16 sm:block"
            >
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-maroon/0 via-maroon/15 to-maroon/0" />
            </div>
            {nodes.map(({ icon: Icon, label }) => (
              <div key={label} className="relative z-10 flex flex-col items-center gap-3 bg-cream px-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-maroon/10">
                  <Icon className="text-maroon" size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-ink">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
