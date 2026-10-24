"use client";

import { motion } from "motion/react";

const reasons = [
  {
    stat: "1942",
    title: "Family-run since 1942",
    description:
      "Honest, specialized service backed by generations of hands-on fuel tank restoration experience.",
  },
  {
    stat: "LIFETIME",
    title: "Nationwide lifetime warranty",
    description:
      "Renu-processed tanks are built for long-term use and backed by a nationwide lifetime warranty.",
  },
  {
    stat: "300+",
    title: "Processed tanks in stock",
    description:
      "Hundreds of processed replacement tanks for classic cars, trucks, motorcycles, tractors, marine applications, and more.",
  },
];

const additionalReasons = [
  "Preserve the original tank instead of settling for a generic aftermarket replacement",
  "Nationwide shipping through UPS, FedEx, or USPS",
  "Auto, truck, tractor, motorcycle, ATV, motor home, and marine applications",
  "Custom sump fabrication available for racing applications",
];

export function WhyChooseMoyer() {
  return (
    <section className="overflow-hidden bg-warm-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-head text-3xl sm:text-4xl leading-tight sm:leading-none text-near-black">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-4 max-w-sm sm:max-w-xl font-body text-sm sm:text-base leading-relaxed text-medium-gray">
            Fuel tank restoration has been our specialty for generations.
            Experience, proven restoration, and nationwide service all in one
            place.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 justify-items-center gap-5 sm:gap-6 md:grid-cols-3 md:items-start">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.stat}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              whileHover={{ y: -10 }}
              className={`
              group relative flex w-full max-w-[340px] md:max-w-none
              min-h-[260px] md:min-h-[360px]
              overflow-hidden rounded-2xl sm:rounded-3xl
              border border-light-gray bg-concrete
              px-5 py-6 sm:px-7 sm:py-10
              text-center transition-shadow duration-300
              hover:shadow-xl
              ${index === 1 ? "md:mt-16" : ""}
            `}
            >
              {/* Decorative background circles */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    absolute h-64 w-64 rounded-full
                    border-[28px] border-moyer-gold/5
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
                <div
                  className="
                    absolute h-40 w-40 rounded-full
                    border-[20px] border-moyer-gold/10
                    transition-transform duration-500
                    group-hover:scale-125
                  "
                />
              </div>

              {/* Content */}
              <div className="relative z-10 m-auto">
                {/* Small badge */}
                <div
                  className="
                  mx-auto mb-4 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12
                  items-center justify-center rounded-full bg-near-black
                  transition-transform duration-300
                  group-hover:rotate-6 group-hover:scale-110
                "
                >
                  <div className="h-3 w-3 rotate-45 border-2 border-moyer-gold" />
                </div>

                <p
                  className="
                    font-head text-xl sm:text-4xl font-extrabold leading-none
                    text-near-black
                  "
                >
                  {reason.stat}
                </p>

                <h3 className="mt-3 sm:mt-5 font-head text-[20px] sm:text-2xl font-bold text-near-black">
                  {reason.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[270px] sm:max-w-xs font-body text-[13px] sm:text-sm leading-[1.6] text-medium-gray">
                  {reason.description}
                </p>
              </div>

              {/* Gold hover line */}
              <div
                className="
                  absolute bottom-0 left-0 h-1 w-0
                  bg-moyer-gold
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </motion.article>
          ))}
        </div>

        {/* Additional reasons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mt-12 border-y border-light-gray py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

            <div>
              <p className="font-head text-3xl font-bold text-near-black">
                More reasons customers choose Moyer
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {additionalReasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1.5 h-3 w-3 shrink-0 rotate-45 bg-moyer-gold" />

                  <p className="text-sm leading-6 text-medium-gray">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div> */}

        {/* CTA
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mt-16 flex flex-col gap-6 bg-near-black
            px-8 py-10 md:flex-row md:items-center md:justify-between
            lg:px-12
          "
        >
          <div>
            <p className="font-head text-3xl font-bold text-white md:text-4xl">
              Have a tank you&apos;re not sure can be saved?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-light-gray">
              Give us a call and tell us what you&apos;re working with.
              We&apos;ll help you figure out the best next step.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="tel:+1XXXXXXXXXX"
              className="
                bg-moyer-gold px-6 py-3
                font-head text-lg font-bold text-near-black
                transition-colors
                hover:bg-deep-gold
              "
            >
              Call for a Quote
            </a>

            <a
              href="/how-it-works"
              className="
                border border-white px-6 py-3
                font-head text-lg font-bold text-white
                transition-colors
                hover:bg-white hover:text-near-black
              "
            >
              See How It Works
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
