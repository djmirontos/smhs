"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryProps = {
  images: string[];
};

const SLIDE_INTERVAL_MS = 3000;
const MANUAL_RESUME_DELAY_MS = 5000;

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

function altFor(filename: string) {
  if (filename === "school-photo.jpg") return "St. Michael's High School campus";
  return "St. Michael's High School — gallery photo";
}

function Slide({
  filename,
  isCurrent,
  offsetClass,
  transitionClass,
  priority,
}: {
  filename: string;
  isCurrent: boolean;
  offsetClass: string;
  transitionClass: string;
  priority: boolean;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <div className={`absolute inset-0 ${transitionClass} ${offsetClass}`} aria-hidden={!isCurrent}>
      {broken ? (
        <div className="flex h-full w-full items-center justify-center bg-maroon/80">
          <p className="px-6 text-center text-sm font-medium tracking-wide text-cream/90">
            Photo Coming Soon
          </p>
        </div>
      ) : (
        <Image
          src={`/images/${filename}`}
          alt={altFor(filename)}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 448px, 90vw"
          className="object-cover"
          onError={() => setBroken(true)}
        />
      )}
    </div>
  );
}

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverRef = useRef(false);
  const isTouchDeviceRef = useRef(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (paused || images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, images.length]);

  // Clear the one-shot "resume after manual navigation" timer on unmount.
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const transitionClass = prefersReducedMotion
    ? "transition-none"
    : "transition-transform duration-[400ms] ease-out";

  const pause = () => {
    hoverRef.current = true;
    setPaused(true);
  };

  const resume = () => {
    hoverRef.current = false;
    setPaused(false);
  };

  // Touch devices fire a synthetic "mouseenter" shortly after a tap for
  // legacy hover-compat, with no "mouseleave" ever following it — which
  // would otherwise stick hoverRef at true forever and permanently block
  // the manual-navigation resume timer. Once a real touch has happened,
  // treat this as a touch device and ignore mouse-hover state entirely.
  const onMouseEnter = () => {
    if (isTouchDeviceRef.current) return;
    pause();
  };

  const onMouseLeave = () => {
    if (isTouchDeviceRef.current) return;
    resume();
  };

  const onTouchStart = () => {
    isTouchDeviceRef.current = true;
    pause();
  };

  // Manual navigation: jump immediately, then pause auto-advance for a
  // few seconds so it doesn't jump again right after the click. Any
  // still-pending resume from a previous click is cleared and replaced,
  // and the resume is skipped entirely if the pointer is still hovering
  // (hover-pause takes over until it actually leaves).
  const goTo = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
    setPaused(true);

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (!hoverRef.current) setPaused(false);
    }, MANUAL_RESUME_DELAY_MS);
  };

  const goToPrev = () => goTo((currentIndex - 1 + images.length) % images.length);
  const goToNext = () => goTo((currentIndex + 1) % images.length);

  // Arrow taps must not let the container's touchstart/touchend pause
  // handlers fire — otherwise touchend would resume auto-advance
  // immediately after the tap, cutting the 5s manual pause short. But we
  // still need to mark this as a touch device here too (see onMouseEnter
  // above) since that flag is normally only set by the container's own
  // onTouchStart, which this deliberately bypasses.
  const onArrowTouchStart = (e: React.TouchEvent) => {
    isTouchDeviceRef.current = true;
    e.stopPropagation();
  };
  const onArrowTouchEnd = (e: React.TouchEvent) => e.stopPropagation();

  return (
    <div
      className="group relative h-64 w-full overflow-hidden rounded-2xl shadow-lg md:h-80 lg:h-96"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={resume}
      onTouchCancel={resume}
      role="group"
      aria-label="St. Michael's High School photo slideshow"
    >
      {images.map((filename, index) => {
        const offset = (index - currentIndex + images.length) % images.length;
        const offsetClass =
          offset === 0
            ? "translate-x-0"
            : offset === images.length - 1
              ? "-translate-x-full"
              : "translate-x-full";

        return (
          <Slide
            key={filename}
            filename={filename}
            isCurrent={index === currentIndex}
            offsetClass={offsetClass}
            transitionClass={transitionClass}
            priority={index === 0}
          />
        );
      })}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            onTouchStart={onArrowTouchStart}
            onTouchEnd={onArrowTouchEnd}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-60 transition-opacity duration-200 hover:bg-black/60 focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            onTouchStart={onArrowTouchStart}
            onTouchEnd={onArrowTouchEnd}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-60 transition-opacity duration-200 hover:bg-black/60 focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </>
      )}

      <div
        className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
        aria-hidden="true"
      >
        {images.map((filename, index) => (
          <span
            key={filename}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
