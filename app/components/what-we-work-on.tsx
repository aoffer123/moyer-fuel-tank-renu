"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import {
  AutoIcon,
  MotorcycleIcon,
  TractorIcon,
  BoatIcon,
  SumpIcon,
} from "./service-icons";

type Category = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  blurb: string;
  details: string[];
  image?: string; // optional photo shown when the panel is open
};

const categories: Category[] = [
  {
    label: "Auto & truck",
    Icon: AutoIcon,
    blurb:
      "Sedans, pickups, and everything in between. The tank we see most often.",
    details: [
      "Defumed in our oven, then sandblasted inside and out",
      "Holes and weak spots repaired before coating",
      "Three bakes: inside, top half, then bottom",
    ],
    image: "/images/volvo-1.jpg",
  },
  {
    label: "Motorcycle",
    Icon: MotorcycleIcon,
    blurb:
      "Tight access takes extra steps, so bike tanks get opened up to reach every inch.",
    details: [
      "A section is opened so we can blast the inside",
      "Welded closed, then the seam is reblasted",
      "Top half primed and ready for your paint",
    ],
    image: "/images/bike-1.jpg",
  },
  {
    label: "Tractor",
    Icon: TractorIcon,
    blurb:
      "Antique tractor tanks, some going back to the 1930s, get the same careful process as our bike tanks.",
    details: [
      "Keep the original tank, no reproduction needed",
      "Opened up and blasted inside when access is tight",
      "Sealed against rust and leaks for good",
    ],
  },
  {
    label: "Marine & more",
    Icon: BoatIcon,
    blurb:
      "If it holds gas or diesel, there's a good chance we've restored one like it.",
    details: ["Boats and motor homes", "ATVs and snowmobiles", "Even oil pans"],
  },
  {
    label: "Custom sumps",
    Icon: SumpIcon,
    blurb:
      "Running a racing setup? We build and install sumps for serious fuel delivery.",
    details: [
      "Built onto a brand-new tank",
      "Or added to a tank already in for Renu",
      "Priced per setup",
    ],
  },
];

const steps = [
  {
    title: "Ship it in",
    text: "Send your tank with the printed intake form.",
  },
  {
    title: "Get a real quote",
    text: "We inspect it and call you with the exact cost.",
  },
  {
    title: "You decide",
    text: "Change your mind? We ship it right back.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function WhatWeWorkOn() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-near-black">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 sm:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-moyer-gold">
            What we work on
          </p>
          <h2 className="mt-3 font-head text-3xl leading-tight text-white sm:text-5xl">
            If it holds fuel, we can save it.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
            Every tank gets the same Renu process. Pick a kind to see
            what&apos;s different about it.
          </p>
        </div>

        {/* DESKTOP (xl and up): expanding panels */}
        <div className="mt-12 hidden h-[460px] gap-3 xl:flex">
          {categories.map((cat, i) => {
            const on = i === active;
            const { Icon } = cat;
            return (
              <div
                key={cat.label}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative min-w-0 overflow-hidden rounded-xl border transition-[flex-grow,border-color,background-color] duration-500 ease-out ${
                  on
                    ? "grow-[5] border-moyer-gold/70 bg-white/[0.06]"
                    : "grow cursor-pointer border-white/10 bg-white/[0.03] hover:border-white/30"
                }`}
                style={{ flexBasis: 0 }}
              >
                {/* Collapsed face */}
                <button
                  type="button"
                  onFocus={() => setActive(i)}
                  aria-expanded={on}
                  aria-label={cat.label}
                  className={`absolute inset-0 flex cursor-pointer flex-col justify-between p-5 text-left transition-opacity duration-300 ${
                    on ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-moyer-gold text-moyer-gold transition group-hover:bg-moyer-gold group-hover:text-near-black">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-head text-sm text-moyer-gold">
                      {pad(i + 1)}
                    </span>
                    <span className="mt-1 block font-head text-xl leading-tight text-white">
                      {cat.label}
                    </span>
                  </span>
                </button>

                {/* Open face */}
                <div
                  className={`absolute inset-0 grid grid-cols-[minmax(320px,1fr)_minmax(0,1fr)] transition-opacity duration-300 ${
                    on
                      ? "opacity-100 delay-200"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="flex flex-col p-8">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-moyer-gold text-near-black">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="font-head text-sm text-moyer-gold">
                        {pad(i + 1)} / {pad(categories.length)}
                      </span>
                    </div>
                    <h3 className="mt-6 font-head text-3xl text-white">
                      {cat.label}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/70">
                      {cat.blurb}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {cat.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-sm leading-6 text-white/85"
                        >
                          <CheckIcon
                            size={18}
                            weight="bold"
                            className="mt-0.5 shrink-0 text-moyer-gold"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative m-3 overflow-hidden rounded-lg bg-white/[0.04]">
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={`${cat.label} tank restored by Moyer`}
                        fill
                        sizes="500px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Icon className="h-40 w-40 text-moyer-gold/25" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PHONE, TABLET, SMALL LAPTOP: accordion */}
        <div className="mt-10 space-y-3 xl:hidden">
          {categories.map((cat, i) => {
            const on = i === active;
            const { Icon } = cat;
            return (
              <div
                key={cat.label}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  on
                    ? "border-moyer-gold/70 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(on ? -1 : i)}
                  aria-expanded={on}
                  className="flex w-full cursor-pointer items-center gap-4 p-4 text-left"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-moyer-gold transition ${
                      on ? "bg-moyer-gold text-near-black" : "text-moyer-gold"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex-1 font-head text-xl text-white">
                    {cat.label}
                  </span>
                  <CaretDownIcon
                    size={18}
                    weight="bold"
                    className={`text-moyer-gold transition-transform ${
                      on ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-4 pb-5">
                      {cat.image && (
                        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
                          <Image
                            src={cat.image}
                            alt={`${cat.label} tank restored by Moyer`}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <p className="text-sm leading-6 text-white/70">
                        {cat.blurb}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {cat.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-sm leading-6 text-white/85"
                          >
                            <CheckIcon
                              size={16}
                              weight="bold"
                              className="mt-1 shrink-0 text-moyer-gold"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How quoting works */}
        <div className="mt-14 rounded-xl bg-moyer-gold px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-near-black/70">
                How quoting works
              </p>
              <h3 className="mt-2 font-head text-3xl leading-tight text-near-black">
                Every tank is different, so every quote is too.
              </h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:18003289550"
                className="btn-solid justify-center whitespace-nowrap"
              >
                <PhoneIcon size={16} weight="fill" />
                1-800-328-9550
              </a>
              <Link
                href="/hardcopy"
                className="btn-outline justify-center whitespace-nowrap"
              >
                Get the intake form
                <ArrowRightIcon size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <ol className="relative mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {/* Dashed line connecting the steps */}
            <div
              aria-hidden="true"
              className="absolute top-6 right-[16%] left-[16%] hidden border-t-2 border-dashed border-near-black/30 sm:block"
            />
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative flex gap-4 sm:flex-col sm:items-center sm:text-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-near-black font-head text-lg text-moyer-gold ring-4 ring-moyer-gold">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-head text-xl text-near-black sm:mt-3">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-near-black/80">
                    {s.text}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
