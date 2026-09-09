"use client";

import { useState } from "react";
import { AutoIcon, MotorcycleIcon, TractorIcon, BoatIcon, SumpIcon } from "./service-icons";

const categories = [
  {
    label: "Auto & truck tanks",
    Icon: AutoIcon,
    blurb:
      "The tank we see most — sedans, pickups, everything in between. Full sandblast, repair, and a three-coat Renu process, top and bottom.",
    price: "$295–$395 typical",
  },
  {
    label: "Motorcycle tanks",
    Icon: MotorcycleIcon,
    blurb:
      "Tighter access means a few extra steps. We sometimes open part of the tank to blast the interior, then weld it back in and reblast the weld before coating.",
    price: "$300–$395 typical",
  },
  {
    label: "Tractor tanks",
    Icon: TractorIcon,
    blurb:
      "Antique tractors, and some antique cars, go through the same process as motorcycle tanks. Some of our oldest jobs have been tractor tanks from the 1930s.",
    price: "$300–$395 typical",
  },
  {
    label: "Marine & boat tanks",
    Icon: BoatIcon,
    blurb:
      "Boats, motor homes, ATVs, snowmobiles, even oil pans — if it holds gasoline or diesel, there's a decent chance we've already restored one like it.",
    price: "Priced after Joseph sees it",
  },
  {
    label: "Custom sumps",
    Icon: SumpIcon,
    blurb:
      "Running a racing setup? We can build and install a sump on a new tank, or on one that's already coming through for repair and Renu processing.",
    price: "Priced per setup",
  },
];

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Tank categories">
        {categories.map((cat, i) => {
          const isActive = i === active;
          return (
            <button
              key={cat.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2 font-head text-sm transition-colors"
              style={{
                background: isActive ? "var(--color-moyer-gold)" : "var(--color-white)",
                color: "var(--color-near-black)",
                border: `1.5px solid ${isActive ? "var(--color-moyer-gold)" : "var(--color-light-gray)"}`,
              }}
            >
              <cat.Icon className="w-5 h-5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className="mt-6 p-6 sm:p-8 grid sm:grid-cols-[auto_1fr] gap-6 items-start"
        style={{ background: "var(--color-white)", border: "1px solid var(--color-light-gray)" }}
        aria-live="polite"
      >
        <span
          className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
          style={{ border: "2px solid var(--color-moyer-gold)", color: "var(--color-near-black)" }}
        >
          <current.Icon className="w-7 h-7" />
        </span>
        <div>
          <h3 className="font-head text-xl" style={{ color: "var(--color-near-black)" }}>
            {current.label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-medium-gray)" }}>
            {current.blurb}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="font-head text-sm" style={{ color: "var(--color-deep-gold)" }}>
              {current.price}
            </span>
            <a href="tel:18003289550" className="btn-solid text-sm">
              Call 1-800-328-9550
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
