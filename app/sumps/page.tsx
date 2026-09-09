import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumps",
  description: "Custom sump fabrication for racing fuel tanks.",
};

const placeholders = ["Sump fabrication", "Weld detail", "Installed sump", "Finished tank", "Test fit"];

export default function Sumps() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-deep-gold)" }}>
        For racing setups
      </p>
      <h1 className="font-head text-4xl mt-3" style={{ color: "var(--color-near-black)" }}>
        We can build and install a sump
      </h1>
      <p className="mt-4 text-sm max-w-xl" style={{ color: "var(--color-medium-gray)" }}>
        On a new tank, or one that&apos;s coming through for repair and Renu
        processing anyway. Tell us about your setup when you call and
        we&apos;ll talk through what fits.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {placeholders.map((label) => (
          <div
            key={label}
            className="aspect-square flex items-center justify-center text-center p-3"
            style={{ border: "1px solid var(--color-light-gray)", background: "var(--color-concrete)" }}
          >
            <span className="text-xs" style={{ color: "var(--color-medium-gray)" }}>
              {label}
              <br />
              <span className="opacity-70">photo placeholder</span>
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs" style={{ color: "var(--color-medium-gray)" }}>
        Shop photos go here once you drop the real images into{" "}
        <code>public/images</code>.
      </p>

      <div className="mt-10">
        <a href="tel:18003289550" className="btn-solid">
          Call 1-800-328-9550
        </a>
      </div>
    </main>
  );
}
