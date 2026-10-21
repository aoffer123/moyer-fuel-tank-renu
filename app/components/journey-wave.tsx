"use client";

import { motion } from "motion/react";
import { BoxIcon, TruckIcon, WrenchIcon } from "./phase-icons";


const phases = [
  {
    title: "Before",
    description:
      "Call Moyer, prepare your tank, and ship it in or drop it off. Joseph inspects it in person and gives you an exact quote before anything starts.",
    Icon: BoxIcon,
  },
  {
    title: "During",
    description:
      "De-fumed, sandblasted, repaired, and sealed with the Renu coating, then heat-cured to set.",
    Icon: WrenchIcon,
  },
  {
    title: "After",
    description:
      "Quality-checked, packaged, and shipped back to you \u2014 backed by a nationwide lifetime warranty.",
    Icon: TruckIcon,
  },
];

export function JourneyWave() {
  return (
    <div className="relative">
      {/* connector, aligned to the 3 column centers (1/6, 3/6, 5/6) and
          sized to the icon row only, not the text below it */}
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="hidden sm:block absolute left-0 w-full"
        style={{ top: "12px", height: "72px" }}
        aria-hidden="true"
      >
        <path
          d="M 16.67,34 C 28,34 38,6 50,6 C 62,6 72,34 83.33,34"
          fill="none"
          stroke="var(--color-light-gray)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative grid sm:grid-cols-3 gap-14 sm:gap-6">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col items-center text-center ${i === 1 ? "sm:-translate-y-10" : ""}`}
          >
            {/* icon with a small numbered badge \u2014 no giant watermark competing with the copy */}
            <div
              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-light-gray)",
                boxShadow: "0 4px 14px rgba(17,17,17,0.08)",
                color: "var(--color-deep-gold)",
              }}
            >
              <phase.Icon className="w-6 h-6" />
              <span
                className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full font-head"
                style={{
                  width: "22px",
                  height: "22px",
                  fontSize: "11px",
                  background: "var(--color-near-black)",
                  color: "var(--color-white)",
                  border: "2px solid var(--color-warm-white)",
                }}
              >
                {i + 1}
              </span>
            </div>

            <div className="mt-4">
              <h3 className="font-head text-lg" style={{ color: "var(--color-near-black)" }}>
                {phase.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed max-w-[220px] mx-auto"
                style={{ color: "var(--color-medium-gray)" }}
              >
                {phase.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
