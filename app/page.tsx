import Image from "next/image";
import Link from "next/link";
import { ProcessStrip } from "./components/process-strip";
import { ServiceExplorer } from "./components/service-explorer";
import { WhyChooseMoyer } from "./components/why-choose-moyer";
import { TestimonialCarousel } from "./components/testimonial-carousel";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { ShopImage } from "./components/shop-image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--color-moyer-gold)" }}>
        <div className="mx-auto max-w-screen-2xl px-8  py-14 sm:py-20">
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p
                className="font-head text-xs sm:text-sm font-bold uppercase tracking-[0.16em]"
                style={{ color: "var(--color-near-black)" }}
              >
                Family-run since 1942
              </p>

              <div className="mt-5 sm:mt-4 h-1 w-12 sm:w-16 bg-near-black" />
              <p
                className="font-base text-sm sm:text-base mt-5 sm:mt-4 tracking-wide"
                style={{ color: "var(--color-near-black)" }}
              >
                Patented no-rust process — no tank too old
              </p>
              <h1
                className="font-head text-3xl sm:text-5xl mt-5 sm:mt-3 max-w-2xl leading-tight"
                style={{ color: "var(--color-near-black)" }}
              >
                We don&apos;t lock in rust. We remove it completely.
              </h1>
              {/* Mobile Shop Image */}
              <div className="mt-8 mb-16 lg:hidden">
                <ShopImage />
              </div>
              <p
                className="mt-5 text-sm sm:text-base leading-6"
                style={{ color: "var(--color-charcoal)" }}
              >
                Moyer Fuel Tank Renu has spent generations repairing and
                restoring gasoline and diesel fuel tanks. From antique cars and
                motorcycles to trucks, tractors, boats, and specialty
                applications, we help preserve original tanks that can be
                difficult — or impossible — to replace.
              </p>
              <div className="mt-9 sm:mt-9 flex w-full gap-3 sm:gap-4">
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

      {/* <section className="bg-warm-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

  
            <div>
              <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-moyer-gold">
                Family-run since 1942
              </p>

              <div className="mt-4 h-1 w-16 bg-moyer-gold" />

              <h2 className="mt-6 font-head text-4xl font-bold leading-[0.95] text-near-black sm:text-5xl lg:text-6xl">
                Restoring the tanks others give up on.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-medium-gray">
                Moyer Fuel Tank Renu has spent generations repairing and restoring
                gasoline and diesel fuel tanks. From antique cars and motorcycles to
                trucks, tractors, boats, and specialty applications, we help preserve
                original tanks that can be difficult — or impossible — to replace.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Family service since 1942",
                  "Preserve hard-to-find original tanks",
                  "Nationwide lifetime warranty",
                  "Ship your tank from anywhere",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-moyer-gold font-head font-bold text-near-black">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-charcoal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/answers" className="btn-solid mt-9 inline-block">
                See How It Works
              </Link>
            </div>


            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(5% 0, 100% 0, 100% 88%, 94% 100%, 0 100%, 0 12%)",
                }}
              >
                <Image
                  src="/images/shop-building.jpg"
                  alt="Moyer Fuel Tank Renu shop in Greensburg, Pennsylvania"
                  width={1057}
                  height={294}
                  className="h-auto w-full object-cover"
                />
              </div>


              <div
                className="
                  absolute -bottom-4 right-4
                  flex h-20 w-24
                  items-center justify-center
                  bg-near-black px-3 text-center
                  shadow-xl
                  sm:h-24 sm:w-28
                "
                style={{
                  clipPath:
                    "polygon(15% 0, 100% 0, 100% 82%, 85% 100%, 0 100%, 0 18%)",
                }}
              >
                <div>
                  <p className="font-head text-2xl font-bold leading-none text-moyer-gold sm:text-3xl">
                    80+
                  </p>
                  <p className="mt-1.5 font-head text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs">
                    Years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why choose Moyer */}
      <WhyChooseMoyer />

      {/* What we work on */}
      <section className="bg-concrete">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2
            className="font-head text-4xl"
            style={{ color: "var(--color-near-black)" }}
          >
            What we work on
          </h2>
          {/* <p className="mt-2 text-sm max-w-lg" style={{ color: "var(--color-medium-gray)" }}>
            Every category gets the same Renu process. Pick one to see what&apos;s
            different about it.
          </p> */}
          <div className="mt-8">
            <ServiceExplorer />
          </div>
        </div>
      </section>

      {/* Our process
      <section style={{ background: "var(--color-moyer-gold)" }}>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-head text-2xl" style={{ color: "var(--color-near-black)" }}>
            Our process
          </h2>
          <p className="mt-2 text-sm max-w-lg" style={{ color: "var(--color-charcoal)" }}>
            The same four steps, whether it&apos;s a tractor tank from the
            1930s or last year&apos;s daily driver.
          </p>
          <div className="mt-10">
            <ProcessStrip />
          </div>
        </div>
      </section> */}

      {/* Location */}
      {/* Location */}
      <section id="visit-moyer" className="bg-moyer-gold scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            {/* Location info */}
            <div>
              <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-near-black">
                Visit Moyer
              </p>

              <h2 className="mt-3 font-head text-3xl font-bold leading-tight text-near-black">
                Find us in Greensburg, Pennsylvania.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-near-black">
                Local customers can bring their tanks directly to the shop. Not
                nearby? Tanks can be shipped to Moyer from anywhere in the
                country.
              </p>

              <div className="mt-7 space-y-2 text-sm text-near-black">
                <p>
                  <strong className="text-near-black">
                    Moyer Fuel Tank Renu
                  </strong>
                </p>

                <p>
                  {/* Put full street address here */}
                  Greensburg, Pennsylvania
                </p>

                <p>
                  <a
                    href="tel:18003289550"
                    className="text-moyer-gold hover:underline"
                  >
                    1-800-328-9550
                  </a>
                </p>
              </div>

              <a
                href="YOUR_GOOGLE_MAPS_DIRECTIONS_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid mt-8"
              >
                Get Directions
              </a>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden border-4 border-moyer-gold">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.058334542368!2d-79.55858592360323!3d40.27445436428579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834d083472958e3%3A0xf8cda68b015c82c0!2sMoyer's%20Gas%20Tank%20Renu!5e0!3m2!1sen!2sus!4v1788900610387!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Moyer's Gas Tank Renu location"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2
            className="font-head text-2xl"
            style={{ color: "var(--color-near-black)" }}
          >
            What customers say
          </h2>
          <p
            className="mt-2 text-sm max-w-lg"
            style={{ color: "var(--color-medium-gray)" }}
          >
            Real reviews from Google, Yelp, the AACA forums, and a few sent
            straight to us.
          </p>
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}
