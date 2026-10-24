"use client";

import { useState } from "react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  QuotesIcon,
} from "@phosphor-icons/react";
import { testimonials } from "../lib/testimonials";
import { StarRow } from "./star-row";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  function go(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  if (testimonials.length === 0) return null;

  return (
    <div className="w-full">
      {/* Heading and navigation */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-head text-sm uppercase tracking-[0.14em] text-deep-gold">
            Customer Experiences
          </p>

          <h2 className="mt-2 font-head text-3xl text-near-black sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-2 text-sm text-medium-gray">
            Decades of craftsmanship, backed by the words of the people we've
            helped
          </p>
        </div>

        {/* Previous / Next */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-light-gray bg-white text-near-black transition-colors hover:border-moyer-gold hover:bg-[#FFF9ED]"
          >
            <CaretLeftIcon size={18} weight="bold" />
          </button>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonials"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-moyer-gold text-near-black transition-colors hover:bg-deep-gold"
          >
            <CaretRightIcon size={18} weight="bold" />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({
          length: Math.min(3, testimonials.length),
        }).map((_, offset) => {
          const t = testimonials[(index + offset) % testimonials.length];

          return (
            <div
              key={t.slug}
              className={`
                flex h-full flex-col justify-between
                rounded-xl border border-light-gray
                bg-white p-6 shadow-sm
                sm:p-7
                ${offset === 1 ? "hidden sm:flex" : ""}
                ${offset === 2 ? "hidden lg:flex" : ""}
              `}
            >
              {/* Quote and stars */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <QuotesIcon
                    size={30}
                    weight="fill"
                    className="text-moyer-gold/40 rotate-180"
                  />

                  {t.rating && <StarRow count={t.rating} />}
                </div>

                {/* Review text */}
                <blockquote className="mt-5">
                  <p className="font-body text-sm leading-7 text-charcoal">
                    {t.excerpt}
                  </p>
                </blockquote>
              </div>

              {/* Customer */}
              <div className="mt-8">
                <p className="font-head text-lg text-near-black">{t.name}</p>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-medium-gray">
                  {t.location && <span>{t.location}</span>}

                  {t.location && t.date && <span>·</span>}

                  {t.date && <span>{t.date}</span>}

                  {t.source && (
                    <>
                      <span>·</span>
                      <span>{t.source}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.slug}
            type="button"
            aria-label={`Show testimonials starting with ${t.name}`}
            aria-current={index === i ? "true" : undefined}
            onClick={() => setIndex(i)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${
              index === i
                ? "w-6 bg-moyer-gold"
                : "w-2 bg-light-gray hover:bg-medium-gray"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
