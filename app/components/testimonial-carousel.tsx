"use client";

import { useState } from "react";
import Link from "next/link";
import { testimonials } from "../lib/testimonials";
import { StarRow } from "./star-row";


export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <div>
      <div
        className="p-6 sm:p-8"
        style={{ background: "var(--color-white)", border: "1px solid var(--color-light-gray)" }}
        aria-live="polite"
      >
        {t.rating && <StarRow count={t.rating} />}
        <p
          className="font-head text-xl sm:text-2xl mt-4 leading-snug"
          style={{ color: "var(--color-near-black)" }}
        >
          &ldquo;{t.excerpt}&rdquo;
        </p>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
          <span className="font-head" style={{ color: "var(--color-near-black)" }}>
            {t.name}
          </span>
          {t.location && <span style={{ color: "var(--color-medium-gray)" }}>{t.location}</span>}
          <span style={{ color: "var(--color-medium-gray)" }}>{t.date}</span>
          {t.source && (
            <span style={{ color: "var(--color-medium-gray)" }}>&middot; {t.source}</span>
          )}
        </div>
        <Link
          href={`/testimonials#${t.slug}`}
          className="mt-4 inline-block font-head text-sm"
          style={{ color: "var(--color-near-black)", borderBottom: "2px solid var(--color-moyer-gold)" }}
        >
          Read the full review
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="btn-outline text-sm py-2 px-4"
        >
          Prev
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setIndex(i)}
              className="rounded-full"
              style={{
                width: "8px",
                height: "8px",
                background: i === index ? "var(--color-moyer-gold)" : "var(--color-light-gray)",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="btn-outline text-sm py-2 px-4"
        >
          Next
        </button>
      </div>
    </div>
  );
}
