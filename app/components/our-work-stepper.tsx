"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

type Stage = {
  title: string;
  caption: string;
  images: string[];
};

type LotusStepperProps = {
  stages: Stage[];
};

const stageLabels = ["Received", "Sandblasted", "Repaired", "Finished"];

export default function LotusStepper({ stages }: LotusStepperProps) {
  const [activeStage, setActiveStage] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  if (stages.length === 0) return null;

  const stage = stages[activeStage];
  const image = stage.images[activeImage];
  const progress =
    stages.length > 1 ? (activeStage / (stages.length - 1)) * 100 : 0;

  function selectStage(index: number) {
    setActiveStage(index);
    setActiveImage(0);
  }

  function changeImage(direction: number) {
    setActiveImage(
      (current) =>
        (current + direction + stage.images.length) % stage.images.length,
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 lg:p-8">
      {/* Stage progress */}
      <div className="relative mb-8">
        {/* Track sits behind the circles, from the first center to the last */}
        <div
          className="absolute top-[18px] h-0.5 bg-white/15"
          style={{
            left: `${50 / stages.length}%`,
            right: `${50 / stages.length}%`,
          }}
        >
          <div
            className="h-full bg-moyer-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}
        >
          {stages.map((item, index) => {
            const isActive = activeStage === index;
            const isComplete = index < activeStage;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => selectStage(index)}
                aria-label={`Show stage ${index + 1}: ${item.title}`}
                aria-current={isActive ? "step" : undefined}
                className="group flex cursor-pointer flex-col items-center gap-2"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-head text-sm transition-colors ${
                    isActive
                      ? "border-moyer-gold bg-moyer-gold text-near-black"
                      : isComplete
                        ? "border-moyer-gold bg-near-black text-moyer-gold"
                        : "border-white/25 bg-near-black text-white/60 group-hover:border-moyer-gold"
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`text-center font-head text-[11px] leading-snug sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-white/55 group-hover:text-white"
                  }`}
                >
                  {stageLabels[index] ?? item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-8">
        {/* Featured image + thumbnails */}
        <div className="min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black sm:aspect-[16/9]">
            <Image
              key={image}
              src={`/images/lotus/${image}`}
              alt={`${stage.title}, Lotus fuel tank`}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-contain"
            />

            {stage.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => changeImage(-1)}
                  aria-label="Previous photo"
                  className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-near-black transition-colors hover:bg-moyer-gold"
                >
                  <ArrowLeftIcon size={18} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => changeImage(1)}
                  aria-label="Next photo"
                  className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-near-black transition-colors hover:bg-moyer-gold"
                >
                  <ArrowRightIcon size={18} weight="bold" />
                </button>
              </>
            )}

            <span className="absolute right-3 bottom-3 rounded-md bg-black/70 px-2.5 py-1 text-xs text-white tabular-nums">
              {activeImage + 1} / {stage.images.length}
            </span>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
            {stage.images.map((img, index) => {
              const isActive = activeImage === index;
              return (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View photo ${index + 1} of ${stage.images.length}`}
                  aria-pressed={isActive}
                  className={`relative h-16 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-opacity sm:h-20 sm:w-28 ${
                    isActive
                      ? "border-moyer-gold opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={`/images/lotus/${img}`}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage details */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-head text-sm uppercase tracking-widest text-moyer-gold">
              Stage {activeStage + 1} of {stages.length}
            </p>
            <h3 className="mt-3 font-head text-2xl leading-tight text-white sm:text-3xl">
              {stage.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              {stage.caption}
            </p>
            <div className="mt-6 h-1 w-12 bg-moyer-gold" />
          </div>

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={() => selectStage(activeStage - 1)}
              disabled={activeStage === 0}
              className="inline-flex cursor-pointer items-center gap-2 font-head text-sm text-white transition-colors hover:text-moyer-gold disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeftIcon size={16} weight="bold" />
              Previous
            </button>
            <button
              type="button"
              onClick={() => selectStage(activeStage + 1)}
              disabled={activeStage === stages.length - 1}
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-moyer-gold px-4 py-2.5 font-head text-sm text-near-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next stage
              <ArrowRightIcon size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
