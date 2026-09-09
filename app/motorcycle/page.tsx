import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motorcycle tanks",
  description: "Restoration process for motorcycle, tractor, and some antique car gas tanks.",
};

const steps = [
  "Joseph assesses your tank and calls with an exact cost before anything starts. Not ready to go ahead? We ship it right back.",
  "The tank goes in our oven until every fume is gone and it's safe to work on.",
  "Any after-market coating gets burned out first. Pour-in liners don't solve the rust problem, and they add to prep time.",
  "The exterior is blasted to bare metal, stripping paint, filler, and rust.",
  "We figure out the best way to reach the interior for blasting. Sometimes that means opening part of the tank.",
  "Inside and out get fully blasted. Nothing bonds to rust, not even Renu.",
  "Any section we opened gets welded back in, then ground and blasted so the weld takes a good bond too.",
  "Welds and pinholes get a thick pre-patch, feathered smooth, and baked to set.",
  "Holes are taped, the tank is filled with red interior Renu, rolled for even coverage, drained, and baked.",
  "The bottom half gets black exterior Renu and a third bake, so top and bottom cure evenly. Two-year warranty against rust and leaks.",
  "Once it's cooled, two coats of primer go on the top half so it's paint-ready and won't rust in the meantime.",
];

export default function Motorcycle() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-deep-gold)" }}>
        Motorcycle, tractor &amp; some antique car tanks
      </p>
      <h1 className="font-head text-4xl mt-3" style={{ color: "var(--color-near-black)" }}>
        A slightly different process
      </h1>
      <p className="mt-4 text-sm max-w-xl" style={{ color: "var(--color-medium-gray)" }}>
        Smaller tanks and tighter access mean a few extra steps compared to a
        full-size automobile tank. Here&apos;s the order we work in.
      </p>

      <ol className="mt-10 space-y-6">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="step-num">{i + 1}</span>
            <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--color-charcoal)" }}>
              {step}
            </p>
          </li>
        ))}
      </ol>

      <div className="brand-stripe my-12">
        <span className="g" style={{ flex: "0 0 68%" }} />
        <span className="b" style={{ flex: 1 }} />
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="font-head text-xl" style={{ color: "var(--color-near-black)" }}>
            If you&apos;re painting it yourself
          </h2>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--color-medium-gray)" }}>
            <li>Hand-sand lightly with 180 grit or finer.</li>
            <li>Apply two coats of lacquer primer.</li>
            <li>Finish with the paint of your choice.</li>
            <li>Never use lacquer thinner on it, at any stage.</li>
          </ul>
          <p className="mt-3 text-sm" style={{ color: "var(--color-medium-gray)" }}>
            If there&apos;s body filler hiding under old paint, we have to
            blast it off, since oven heat will pop it loose anyway.
            Replacing that filler is on whoever handles the final paint job.
          </p>
        </div>
        <div>
          <h2 className="font-head text-xl" style={{ color: "var(--color-near-black)" }}>
            Cost
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--color-medium-gray)" }}>
            A complete bike tank typically runs{" "}
            <strong style={{ color: "var(--color-near-black)" }}>$300–$395</strong>,
            depending on condition and how much repair it needs before we
            start.
          </p>
          <p className="mt-3 text-sm" style={{ color: "var(--color-medium-gray)" }}>
            Brush strokes may be visible on the exterior. Renu is thick and
            worked in by hand, not sprayed like paint, because it needs a
            tight bond. If you want a smooth show finish instead, ask about
            coating the interior only and priming the exterior for paint.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a href="tel:18003289550" className="btn-solid">
          Call 1-800-328-9550
        </a>
      </div>
    </main>
  );
}
