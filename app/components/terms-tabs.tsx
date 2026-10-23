"use client";

import { useState } from "react";
import {
  WrenchIcon,
  PaintBrushIcon,
  ListChecksIcon,
  HammerIcon,
  TruckIcon,
  CaretLeftIcon,
  CaretRightIcon,
  SealCheckIcon,
} from "@phosphor-icons/react";

const terms = [
  {
    label: "Process",
    title: "The Renu Process",
    icon: WrenchIcon,
    items: [
      "Plates may need to be welded on weak, cracked areas or holes to ensure strength, and may be visible.",
      "Inside: Renu is pumped into the tank, rolled, and drained before baking.",
      "Outside: Renu is worked into the rough metal and smoothed out with a brush. Brush strokes may be visible.",
      "Renu is thick and cannot be sprayed on like paint. We need a tight bond.",
    ],
  },
  {
    label: "Painting",
    title: "Show Vehicles & Painting",
    icon: PaintBrushIcon,
    items: [
      "Our main purpose is restoration and rust prevention.",
      "For a show vehicle with a smooth, high gloss finish, we can Renu the inside of the tank and prime the exterior. You must request this method, and it carries a two-year warranty against rust and leaks only.",
      "Tanks may be painted after the Renu process, but must be touch sanded lightly and primed with lacquer primer first.",
      "We accept no responsibility for painting or the finish paint.",
    ],
  },
  {
    label: "Prep",
    title: "Before You Send",
    icon: ListChecksIcon,
    items: [
      "Please remove all parts that do not get processed: sending units, drain plugs, hoses, roll over vents, etc. We prefer not to be responsible for these parts.",
      "Plastic bowls and strainers may be removed from the original tank. Metal bowls will be fabricated to replace them.",
    ],
  },
  {
    label: "Dents",
    title: "Dents & Additional Work",
    icon: HammerIcon,
    items: [
      "We try to remove dents to the best of our ability, but we are not body men and do not have body shop equipment.",
      "If the surface must be perfectly smooth, please discuss this with Joseph before we begin.",
      "Any additional work requested after the original quote will be priced accordingly.",
    ],
  },
  {
    label: "Shipping",
    title: "Shipping",
    icon: TruckIcon,
    items: [
      "We insure every tank against shipping damage, which is rare but possible.",
    ],
  },
];

export default function TermsTabs() {
  const [active, setActive] = useState(0);
  const current = terms[active];

  return (
    <div className="rounded-xl border border-light-gray bg-white p-6  shadow-sm">
      <h2 className="font-head text-xl text-near-black">
        Restoration Info & Terms
      </h2>

      {/* Icon tabs */}
      <div
        role="tablist"
        aria-label="Restoration info and terms"
        className="mt-3 grid grid-cols-5 gap-1.5"
      >
        {terms.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.label}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer flex-col items-center gap-1 rounded-lg px-1 py-2.5 text-[11px] font-semibold transition ${
                isActive
                  ? "bg-moyer-gold text-near-black"
                  : "bg-[#FFF9ED] text-charcoal hover:bg-[#F7EDD8]"
              }`}
            >
              <t.icon size={20} weight={isActive ? "fill" : "regular"} />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Active section (min height keeps the card from jumping) */}
      <div role="tabpanel" className="mt-3 min-h-[310px] lg:min-h-[345px]">
        <h3 className="font-head text-lg text-near-black">{current.title}</h3>
        <ul className="mt-2 space-y-2.5">
          {current.items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-charcoal"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-deep-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Back / Next */}
      <div className="flex items-center justify-between border-t border-light-gray pt-3 mt-3">
        <button
          type="button"
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          disabled={active === 0}
          className="flex cursor-pointer items-center gap-1 text-sm font-medium text-deep-gold disabled:cursor-default disabled:opacity-30"
        >
          <CaretLeftIcon size={14} weight="bold" />
          Back
        </button>

        <div className="flex gap-1.5">
          {terms.map((t, i) => (
            <span
              key={t.label}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-5 bg-deep-gold" : "w-1.5 bg-light-gray"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive((a) => Math.min(terms.length - 1, a + 1))}
          disabled={active === terms.length - 1}
          className="flex cursor-pointer items-center gap-1 text-sm font-medium text-deep-gold disabled:cursor-default disabled:opacity-30"
        >
          Next
          <CaretRightIcon size={14} weight="bold" />
        </button>
      </div>

      {/* Acknowledgment */}
      <div className="mt-4 flex gap-2 rounded-lg bg-[#FFF9ED] p-2">
        <SealCheckIcon size={20} className="mt-0.75 shrink-0 text-moyer-gold" />
        <p className="text-sm leading-relaxed text-charcoal">
          <span className="font-semibold text-near-black">
            Customer acknowledgment:
          </span>{" "}
          signing the intake form confirms you have read and accept these terms.
        </p>
      </div>
    </div>
  );
}
