"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const subscribeNoop = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#values", label: "Values" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-black/5 bg-cream/95 shadow-sm backdrop-blur"
          : "border-transparent bg-cream/80 backdrop-blur"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-md sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="font-serif text-sm font-semibold leading-tight text-maroon-dark sm:text-base">
            St. Michael&apos;s
            <br className="hidden sm:block" /> High School
          </span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm font-medium text-ink/80 transition-colors hover:text-maroon"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-maroon-dark transition-colors hover:bg-maroon/5 active:bg-maroon/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${open ? "" : "pointer-events-none"}`}
          >
            <div
              className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div
              className={`absolute right-0 top-0 h-full w-full max-w-sm bg-cream shadow-xl transition-transform duration-300 ease-out ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex h-16 items-center justify-between border-b border-black/5 px-5 sm:h-20">
                <span className="font-serif text-lg font-semibold text-maroon-dark">Menu</span>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-maroon-dark transition-colors hover:bg-maroon/5"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile primary">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center rounded-xl px-4 py-3.5 text-base font-medium text-ink transition-colors hover:bg-maroon/5 active:bg-maroon/10"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-3 justify-center"
                >
                  Get in Touch
                </a>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
