import type { Metadata } from "next";
import { PrintButton } from "../components/print-button";

export const metadata: Metadata = {
  title: "Intake form",
  description: "Print, fill out, sign, and include this form with your tank.",
};

const terms = [
  "Plates may be welded onto weak or cracked spots for extra strength. Those welds may stay visible.",
  "Interior Renu is pumped in, rolled around, and drained off before baking.",
  "Exterior Renu is worked into the roughened metal and brushed smooth by hand, so brush strokes may be visible. It's too thick to spray like paint, because it needs a tight bond. Our job is restoration and rust prevention first.",
  "Have a show vehicle and want a smooth, high-gloss finish instead? We can Renu the interior only and prime the exterior for paint. That option carries a two-year warranty against rust and leaks, and we're not responsible for the final paint job.",
  "Please remove any parts that don't get processed: sending units, drain plugs, hoses, rollover vents. We'd rather not be responsible for those.",
  "Any work requested beyond the original quote is priced separately.",
  "We do our best with dents, but we're not a body shop. If a perfectly smooth surface matters to you, talk to Joseph before we start.",
  "Painting after the Renu process needs a light hand-sand and a lacquer primer first. We're not responsible for the finish paint.",
  "Plastic bowls and strainers can be removed from your original tank. Metal ones get fabricated to replace them.",
  "Every tank is insured against shipping damage, which is rare but possible.",
];

export default function Hardcopy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="no-print">
        <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-deep-gold)" }}>
          Intake form
        </p>
        <h1 className="font-head text-4xl mt-3" style={{ color: "var(--color-near-black)" }}>
          Print it, fill it out, send it with your tank
        </h1>
        <p className="mt-4 text-sm max-w-xl" style={{ color: "var(--color-medium-gray)" }}>
          This is the same form that ships with every tank we receive. Fill
          it out on screen or print a copy, sign it, and pack it in the box.
        </p>
        <PrintButton />
      </div>

      <form className="mt-10 grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" full />
        <Field label="Address" name="address" full />
        <Field label="City, state, ZIP" name="city_state_zip" full />
        <Field label="Telephone, home" name="phone_home" type="tel" />
        <Field label="Telephone, work" name="phone_work" type="tel" />
        <Field label="Email address" name="email" type="email" full />
        <Field label="Vehicle make and year" name="vehicle" />
        <Field label="Quote, if any" name="quote" />
      </form>

      <div className="brand-stripe my-12">
        <span className="b" />
        <span className="g" />
      </div>

      <div>
        <h2 className="font-head text-xl" style={{ color: "var(--color-near-black)" }}>
          Before you sign
        </h2>
        <ul className="mt-4 space-y-3">
          {terms.map((term, i) => (
            <li key={i} className="stamp-item flex items-start gap-3">
              <span className="stamp-mark" />
              <span className="text-sm" style={{ color: "var(--color-charcoal)" }}>
                {term}
              </span>
            </li>
          ))}
        </ul>

        <label className="mt-6 flex items-start gap-3 text-sm" style={{ color: "var(--color-near-black)" }}>
          <input type="checkbox" className="mt-1" />
          <span>I have read and accept the above.</span>
        </label>

        <div className="mt-8 max-w-sm">
          <p className="wo-label">Signature</p>
          <div className="mt-2 border-b" style={{ borderColor: "var(--color-light-gray)", height: "2.25rem" }} />
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  full = false,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={name} className="wo-label block mb-1.5">
        {label}
      </label>
      <input id={name} name={name} type={type} className="wo-field" />
    </div>
  );
}
