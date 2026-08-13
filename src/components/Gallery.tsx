"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
};

const SLIDE_INTERVAL_MS = 3000;

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

  const transitionClass = prefersReducedMotion
    ? "transition-none"
    : "transition-transform duration-[400ms] ease-out";

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <div
      className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg md:h-80 lg:h-96"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
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
