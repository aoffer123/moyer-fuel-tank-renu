"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { StepBadge } from "./step-badge";
import {
  DefumeIcon,
  AccessIcon,
  SandblastIcon,
  RepairIcon,
  InteriorRenuIcon,
  CureIcon,
  ExteriorFinishIcon,
  QualityControlIcon,
} from "./process-step-icons";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  // Only steps 2 and 7 carry a branch \u2014 the two points where a motorcycle
  // or antique tank's path actually diverges.
  branch?: string;
  branchLink?: boolean;
};

const steps: Step[] = [
  {
    number: "01",
    title: "De-fume & inspect",
    description: "Fumes cleared in our oven, tank inspected before anything else happens.",
    Icon: DefumeIcon,
  },
  {
    number: "02",
    title: "Access the interior",
    description: "Blasting starts wherever the tank allows entry.",
    Icon: AccessIcon,
    branch:
      "Some motorcycle and antique tanks have filler openings too restrictive to properly reach the interior. When necessary, the tank is opened to allow complete access.",
  },
  {
    number: "03",
    title: "Sandblast",
    description: "Inside and out, down to bare metal. Nothing bonds to rust, not even Renu.",
    Icon: SandblastIcon,
  },
  {
    number: "04",
    title: "Repair",
    description: "Welds, patches, and pinhole repairs, then reblasted so Renu has clean metal to bond to.",
    Icon: RepairIcon,
  },
  {
    number: "05",
    title: "Interior Renu",
    description: "Red interior coating, rolled for even coverage, baked at 360\u00b0F.",
    Icon: InteriorRenuIcon,
  },
  {
    number: "06",
    title: "Cure",
    description: "Baked to set before the exterior coat goes on.",
    Icon: CureIcon,
  },
  {
    number: "07",
    title: "Exterior finish",
    description: "Black Renu coating, baked again.",
    Icon: ExteriorFinishIcon,
    branch:
      "For motorcycle and antique tanks, the bottom receives the full exterior Renu treatment while the visible top is primed and left ready for paint.",
    branchLink: true,
  },
  {
    number: "08",
    title: "Quality control",
    description: "Checked over, boxed, and on its way back to you.",
    Icon: QualityControlIcon,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 65%"],
  });

  return (
    <div ref={containerRef} className="relative">
      {/* base spine, desktop: centered; mobile: left-aligned, no alternating */}
      <div
        className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px]"
        style={{ background: "var(--color-light-gray)" }}
        aria-hidden="true"
      />
      <div
        className="sm:hidden absolute left-[22px] top-2 bottom-2 w-[2px]"
        style={{ background: "var(--color-light-gray)" }}
        aria-hidden="true"
      />
      {/* gold fill, grows with scroll position through this section */}
      <motion.div
        className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] origin-top"
        style={{ background: "var(--color-moyer-gold)", scaleY: scrollYProgress }}
        aria-hidden="true"
      />
      <motion.div
        className="sm:hidden absolute left-[22px] top-2 bottom-2 w-[2px] origin-top"
        style={{ background: "var(--color-moyer-gold)", scaleY: scrollYProgress }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-10 sm:gap-14">
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative grid grid-cols-[44px_1fr] sm:grid-cols-[1fr_44px_1fr] gap-x-4 sm:gap-x-8 items-start"
            >
              <div className="relative z-10 flex sm:col-start-2 sm:justify-center">
                <StepBadge number={step.number} />
              </div>

              <div className={isLeft ? "sm:col-start-1 sm:text-right" : "sm:col-start-3"}>
                <div
                  className="inline-flex w-12 h-12 items-center justify-center mb-3"
                  style={{ background: "var(--color-concrete)", color: "var(--color-deep-gold)" }}
                >
                  <step.Icon className="w-7 h-7" />
                </div>
                <h3 className="font-head text-lg" style={{ color: "var(--color-near-black)" }}>
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-medium-gray)" }}>
                  {step.description}
                </p>

                {step.branch && (
                  <div
                    className={`mt-4 py-3 px-4 inline-block text-left max-w-sm border-moyer-gold ${
                      isLeft ? "border-l-[3px] sm:border-l-0 sm:border-r-[3px]" : "border-l-[3px]"
                    }`}
                    style={{ background: "var(--color-concrete)" }}
                  >
                    <p
                      className="font-head text-xs font-bold uppercase tracking-wide"
                      style={{ color: "var(--color-deep-gold)" }}
                    >
                      Motorcycle &amp; antique
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                      {step.branch}
                    </p>
                    {step.branchLink && (
                      <Link
                        href="/motorcycle"
                        className="mt-2 inline-block font-head text-xs"
                        style={{ color: "var(--color-near-black)", borderBottom: "1.5px solid var(--color-moyer-gold)" }}
                      >
                        Full motorcycle &amp; antique walkthrough
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
