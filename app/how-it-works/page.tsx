import type { Metadata } from "next";
import Link from "next/link";
import { ProcessTimeline } from "../components/process-timeline";
import { JourneyWave } from "../components/journey-wave";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The Renu restoration process, from de-fuming to quality control, and what's different for motorcycle and antique tanks.",
};

export default function HowItWorks() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section style={{ background: "var(--color-near-black)" }}>
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-16 text-center">
          <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-moyer-gold)" }}>
            How It Works
          </p>
          <h1 className="font-head text-4xl sm:text-5xl mt-3 leading-tight" style={{ color: "var(--color-white)" }}>
            From rusted tank to restored tank.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-base" style={{ color: "var(--color-light-gray)" }}>
            One core Renu process for every tank. Motorcycles and antique
            tanks branch off it in exactly two places \u2014 you&apos;ll see
            them called out as you go.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:18003289550" className="btn-gold">
              Call Before Shipping
            </a>
            <Link href="/answers" className="btn-outline" style={{ borderColor: "var(--color-white)", color: "var(--color-white)" }}>
              Shipping &amp; FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CUSTOMER JOURNEY: BEFORE / DURING / AFTER (light, playful overview) ============ */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-24">
          <h2 className="font-head text-2xl text-center" style={{ color: "var(--color-near-black)" }}>
            What to expect
          </h2>
          <p className="mt-2 text-sm max-w-lg mx-auto text-center" style={{ color: "var(--color-medium-gray)" }}>
            Before, during, and after your tank comes to us.
          </p>

          <div className="mt-16">
            <JourneyWave />
          </div>
        </div>
      </section>

      {/* ============ MAIN TIMELINE: INSIDE THE RENU PROCESS (the centerpiece) ============ */}
      <section style={{ background: "var(--color-white)" }}>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-head text-2xl" style={{ color: "var(--color-near-black)" }}>
            Inside the Renu process
          </h2>
          <p className="mt-2 text-sm max-w-lg" style={{ color: "var(--color-medium-gray)" }}>
            One process, start to finish. The two gold callouts are the only
            points where a motorcycle or antique tank takes a different
            path.
          </p>
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ============ EDUCATIONAL SECTION ============ */}
      <section style={{ background: "var(--color-moyer-gold)" }}>
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="font-head text-3xl sm:text-4xl" style={{ color: "var(--color-white)" }}>
            We don&apos;t coat over rust.
          </h2>
          <p className="mt-3 font-head text-sm" style={{ color: "var(--color-white)" }}>
            Nothing bonds properly to rust.
          </p>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--color-near-black)" }}>
            Every tank is stripped to clean bare metal before any repair or
            coating begins. It&apos;s the only way the Renu process actually
            bonds and lasts.
          </p>
        </div>
      </section>

    </main>
  );
}
