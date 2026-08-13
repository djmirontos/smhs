"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";

export type GalleryImage = {
  filename: string;
  src: string;
  exists: boolean;
};

type GalleryProps = {
  images: GalleryImage[];
};

const ANIMATION_DURATION_S = 20;

const SLIDE_CLASSES =
  "relative aspect-[4/3] h-64 w-auto shrink-0 overflow-hidden rounded-2xl shadow-md lg:h-80";

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
  image,
  hidden,
  priority,
}: {
  image: GalleryImage;
  hidden?: boolean;
  priority?: boolean;
}) {
  if (!image.exists) {
    return (
      <div className={`${SLIDE_CLASSES} flex items-center justify-center bg-maroon/80`} aria-hidden={hidden}>
        <p className="px-6 text-center text-sm font-medium tracking-wide text-cream/90">
          Photo Coming Soon
        </p>
      </div>
    );
  }

  return (
    <div className={SLIDE_CLASSES} aria-hidden={hidden}>
      <Image
        src={image.src}
        alt={altFor(image.filename)}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 420px, 300px"
        className="object-cover"
      />
    </div>
  );
}

export default function Gallery({ images }: GalleryProps) {
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  if (prefersReducedMotion) {
    return <Slide image={images[0]} priority />;
  }

  const track = [...images, ...images];

  return (
    <div
      className="w-full min-w-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label="St. Michael's High School photo gallery"
    >
      <div
        className="gallery-track flex w-max gap-4"
        style={{
          willChange: "transform",
          animationDuration: `${ANIMATION_DURATION_S}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {track.map((image, i) => (
          <Slide
            key={`${image.filename}-${i}`}
            image={image}
            hidden={i >= images.length}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
