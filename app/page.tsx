import Image from "next/image";
import Link from "next/link";
import { ProcessStrip } from "./components/process-strip";
import { ServiceExplorer } from "./components/service-explorer";
import { WhyChooseMoyer } from "./components/why-choose-moyer";
import { TestimonialCarousel } from "./components/testimonial-carousel";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/ssr";
import { ShopImage } from "./components/shop-image";
import { WhatWeWorkOn } from "./components/what-we-work-on";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--color-moyer-gold)" }}>
        <div className="mx-auto max-w-screen-2xl px-8  py-14 sm:py-24">
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p
                className="font-head text-xs sm:text-sm font-bold uppercase tracking-[0.16em]"
                style={{ color: "var(--color-near-black)" }}
              >
                Family-run since 1942
              </p>

              <div className="mt-5 sm:mt-6 h-1 w-12 sm:w-16 bg-near-black" />
              <p
                className="font-base text-sm sm:text-base mt-5 sm:mt-6 tracking-wide"
                style={{ color: "var(--color-near-black)" }}
              >
                Patented no-rust process — no tank too old
              </p>
              <h1
                className="font-head text-3xl sm:text-5xl mt-5 sm:mt-6 max-w-2xl leading-tight"
                style={{ color: "var(--color-near-black)" }}
              >
                We don&apos;t lock in rust. We remove it completely.
              </h1>
              {/* Mobile Shop Image */}
              <div className="mt-8 mb-16 lg:hidden">
                <ShopImage />
              </div>
              <p
                className="mt-5 sm:mt-6 text-sm sm:text-base leading-6"
                style={{ color: "var(--color-charcoal)" }}
              >
                Moyer Fuel Tank Renu has spent generations repairing and
                restoring gasoline and diesel fuel tanks. From antique cars and
                motorcycles to trucks, tractors, boats, and specialty
                applications, we help preserve original tanks that can be
                difficult — or impossible — to replace.
              </p>
              <div className="mt-9 sm:mt-10 flex w-full gap-3 sm:gap-4">
                <Link href="/our-work" className="btn-solid min-w-0 flex-1">
                  View Our Work
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>

                <Link
                  href="/how-it-works"
                  className="btn-outline min-w-0 flex-1"
                >
                  How It Works
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>
              </div>
            </div>
            {/* Desktop Shop Image - RIGHT COLUMN */}
            <div className="hidden lg:block">
              <ShopImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Moyer */}
      <WhyChooseMoyer />

      <WhatWeWorkOn />

      {/* Testimonials */}
      <section className="bg-[#FFF9ED]">
        <div className="mx-auto max-w-7xl px-8 py-16 sm:px-6 sm:py-24">
          <TestimonialCarousel />
        </div>
      </section>
      {/* Location */}
      <section id="visit-moyer" className="bg-moyer-gold scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            {/* Location info */}
            <div>
              <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-near-black">
                Visit Moyer
              </p>

              <h2 className="mt-3 font-head text-3xl leading-tight text-near-black sm:text-4xl">
                Find us in Greensburg, Pennsylvania.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-near-black">
                Local customers can bring their tanks directly to the shop. Not
                nearby? Tanks can be shipped to Moyer from anywhere in the
                country.
              </p>

              {/* Address Card */}
              <div className="mt-6 rounded-lg border border-near-black/15 bg-white/75 p-4 sm:bg-transparent sm:border-0 sm:p-0">
                <h3 className="font-head text-lg text-near-black">
                  Moyer Fuel Tank Renu
                </h3>

                <div className="mt-3 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPinIcon
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-deep-gold"
                    />
                    <p className="text-sm leading-6 text-near-black">
                      2011 Western Avenue
                      <br />
                      Greensburg, PA 15601
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <PhoneIcon
                      size={20}
                      weight="fill"
                      className="shrink-0 text-deep-gold"
                    />
                    <a
                      href="tel:18003289550"
                      className="text-sm text-near-black hover:underline"
                    >
                      1-800-328-9550
                    </a>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2011+Western+Avenue%2C+Greensburg%2C+PA+15601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid mt-5 w-full justify-center sm:w-auto"
                >
                  Get Directions
                  <ArrowUpRightIcon size={16} weight="bold" />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-lg border border-near-black/10 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.058334542368!2d-79.55858592360323!3d40.27445436428579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834d083472958e3%3A0xf8cda68b015c82c0!2sMoyer's%20Gas%20Tank%20Renu!5e0!3m2!1sen!2sus!4v1788900610387!5m2!1sen!2sus"
                className="block h-[280px] w-full sm:h-[350px] lg:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Moyer Fuel Tank Renu location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
