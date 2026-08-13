"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Megaphone, X } from "lucide-react";

const DISMISS_KEY = "smhs_banner_dismissed";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function AnnouncementBanner() {
  // Starts closed (collapsed) to match server render exactly — nothing is
  // ever visibly shown then hidden, so a dismissed return visit has no flash.
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    const checkDismissed = () => setOpen(!sessionStorage.getItem(DISMISS_KEY));
    checkDismissed();
  }, []);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "true");
  };

  return (
    <div
      className={`overflow-hidden bg-maroon ${
        prefersReducedMotion ? "transition-none" : "transition-[max-height,opacity] duration-300 ease-in-out"
      } ${open ? "max-h-28 opacity-100" : "max-h-0 opacity-0"}`}
      aria-hidden={!open}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-start justify-between gap-3 px-4 py-2 sm:items-center">
        <div className="flex items-start gap-2 sm:items-center">
          <Megaphone
            className="mt-0.5 h-4 w-4 shrink-0 text-gold sm:mt-0"
            aria-hidden="true"
          />
          <p className="line-clamp-2 text-sm text-white sm:line-clamp-none sm:truncate">
            Enrollment for School Year 2026&ndash;2027 is now open. Visit us or fill out our
            inquiry form below.
          </p>
          <a
            href="#enrollment"
            tabIndex={open ? 0 : -1}
            className="hidden shrink-0 whitespace-nowrap text-sm font-medium text-gold underline underline-offset-2 transition-colors hover:text-white/80 sm:inline"
          >
            Learn More
          </a>
        </div>

        <button
          type="button"
          onClick={dismiss}
          tabIndex={open ? 0 : -1}
          aria-label="Dismiss announcement"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:text-white/70"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
