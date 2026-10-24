"use client";

import { useState } from "react";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-xl bg-concrete shadow-md select-none">
      {/* After (bottom layer) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        priority
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-fill"
      />

      {/* Before (top layer, clipped to the left of the handle) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-fill"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute top-4 left-4 rounded-md bg-near-black/80 px-3 py-1.5 font-head text-sm text-white">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-md bg-deep-gold px-3 py-1.5 font-head text-sm text-near-black">
        After Renu
      </span>

      {/* Divider line + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-near-black text-deep-gold shadow-lg">
          <CaretLeftIcon size={14} weight="bold" />
          <CaretRightIcon size={14} weight="bold" />
        </div>
      </div>

      {/* Invisible range input: handles mouse, touch, and keyboard */}
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
