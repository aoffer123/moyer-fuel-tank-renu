"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XIcon,
  MagnifyingGlassPlusIcon,
} from "@phosphor-icons/react";

type GalleryImage = {
  src: string;
  alt: string;
  title?: string; // shown in the full-size viewer
  caption?: string; // shown in the full-size viewer
};

const INITIAL_COUNT = 18; // 3 full rows on a wide screen

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);
  const current = openIndex === null ? null : images[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length],
  );

  // Keyboard controls + stop the page scrolling behind the viewer
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  return (
    <>
      {/* Even grid, every photo the same size */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo: ${img.title ?? img.alt}`}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-near-black/10"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-near-black/0 transition group-hover:bg-near-black/40">
              <MagnifyingGlassPlusIcon
                size={26}
                weight="bold"
                className="text-white opacity-0 transition group-hover:opacity-100"
              />
            </span>
          </button>
        ))}
      </div>

      {images.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="btn-solid cursor-pointer"
          >
            {showAll ? "Show fewer photos" : `Show all ${images.length} photos`}
          </button>
        </div>
      )}

      {/* Full-size viewer */}
      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 px-4 pt-16 pb-4 sm:px-20 sm:pt-16 sm:pb-6"
        >
          {/* Photo */}
          <div
            className="relative mx-auto min-h-0 w-full max-w-5xl flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div
            className="mx-auto mt-4 w-full max-w-3xl rounded-lg bg-white/[0.06] px-5 py-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-head text-xs uppercase tracking-[0.16em] text-moyer-gold tabular-nums">
              Photo {openIndex + 1} of {images.length}
            </p>
            {current.title && (
              <h3 className="mt-1 font-head text-xl text-white">
                {current.title}
              </h3>
            )}
            {current.caption && (
              <p className="mt-1 text-sm leading-6 text-white/75">
                {current.caption}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <XIcon size={22} weight="bold" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute top-[40%] left-3 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-near-black hover:bg-moyer-gold sm:left-6"
          >
            <ArrowLeftIcon size={20} weight="bold" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute top-[40%] right-3 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-near-black hover:bg-moyer-gold sm:right-6"
          >
            <ArrowRightIcon size={20} weight="bold" />
          </button>
        </div>
      )}
    </>
  );
}
