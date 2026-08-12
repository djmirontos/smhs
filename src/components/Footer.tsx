import { Link2, Camera, Play } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#values", label: "Values" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Link2, label: "Facebook" },
  { icon: Camera, label: "Instagram" },
  { icon: Play, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div
        className="container-page grid gap-10 py-14 sm:py-16 md:grid-cols-3"
        style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}
      >
        <div>
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <span className="font-serif text-base font-semibold leading-tight">
              St. Michael
              <br /> High School
            </span>
          </div>
          <p className="mt-4 text-sm text-cream/70">Learning. Character. Faith.</p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-cream/50">
            This is an unofficial concept website pending review by the school administration.
            Content shown here is placeholder and subject to change.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[32px] items-center text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Connect</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Tangub City, Misamis Occidental, Philippines
          </p>
          <p className="mt-2 text-sm text-cream/50">Official contact information coming soon.</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <span
                key={label}
                role="img"
                aria-label={`${label} — coming soon`}
                title="Coming soon"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream/50"
              >
                <Icon size={18} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 St. Michael High School. All rights reserved.</p>
          <p>Unofficial concept site — not yet authorized by the school administration.</p>
        </div>
      </div>
    </footer>
  );
}
