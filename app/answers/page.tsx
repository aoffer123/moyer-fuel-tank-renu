import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Answers",
  description: "Shipping, process, and pricing questions for gas tank restoration.",
};

const sections = [
  {
    q: "How do I get my tank there?",
    a: [
      "Wash it out with a degreasing detergent, like dish soap. If gasoline won't drain, punch a small hole in one corner so the tank can dry out completely.",
      "Once it's dry, bag it in a large garbage or leaf bag and seal it with tape.",
      "An appliance store is usually the best source for a box big enough to fit your tank. Measure the length plus the girth, and try to keep the total under 130 inches, or shipping costs more.",
      "You can track the tank in transit. We know it's hard to part with something irreplaceable, but we haven't lost one yet.",
      "Print the intake form and include it with your tank.",
    ],
  },
  {
    q: "What happens once it arrives?",
    a: [
      "Joseph will call you with an exact cost once he's seen the tank in person. It's very hard to quote sight unseen. If you decide not to go ahead, we'll ship it right back.",
      "We photograph your tank when it arrives. Shipping keeps a copy, the shop keeps a copy, and any instructions you sent travel with the photos.",
      "The tank is de-fumed in our oven until no fumes remain, then thoroughly sandblasted inside and out. Nothing bonds to rust, not even Renu, so the tank has to be clean bare metal before we start.",
      "Repairs happen at this stage. Almost anything is fixable. The one exception is metal so thin you can crush it by hand.",
      "Pinholes get pre-patched with a thicker material that mushrooms through the hole and bonds the inside coat to the outside. That patch is baked, then the tank is filled with the red interior Renu and rolled for an even coat, baked at 360°F for six minutes.",
      "Once it's cooled, the black exterior Renu goes on the top half by hand and gets baked again. Then it's flipped, the bottom half is coated, and baked a third time, so top and bottom cure evenly.",
      "Quality control checks it over, it gets boxed, and it's on the way home.",
    ],
  },
  {
    q: "How much does it cost?",
    a: [
      "It depends on the tank. We work on cars, trucks, motorcycles, tractors, boats, motor homes, oil pans, ATVs, snowmobiles, and more, and every one is a little different.",
      "Most tanks land between $295 and $395, depending on condition and how much repair is needed before the Renu process even starts.",
      "Tell us what you've got and we can give you a ballpark before you ship anything.",
    ],
  },
];

export default function Answers() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-deep-gold)" }}>
        Answers
      </p>
      <h1 className="font-head text-4xl mt-3" style={{ color: "var(--color-near-black)" }}>
        Our most common question isn&apos;t &quot;how much.&quot; It&apos;s &quot;how do I get it there.&quot;
      </h1>
      <p className="mt-4 text-sm" style={{ color: "var(--color-medium-gray)" }}>
        The second most common question really is &quot;how much,&quot; so that&apos;s in
        here too.
      </p>

      <div className="mt-10">
        {sections.map((section, i) => (
          <details
            key={section.q}
            open={i === 0}
            className="border-t"
            style={{ borderColor: "var(--color-light-gray)" }}
          >
            <summary className="font-head text-xl py-5 cursor-pointer" style={{ color: "var(--color-near-black)" }}>
              {section.q}
            </summary>
            <div className="pb-6 space-y-3">
              {section.a.map((p, idx) => (
                <p key={idx} className="text-sm leading-relaxed" style={{ color: "var(--color-medium-gray)" }}>
                  {p}
                </p>
              ))}
            </div>
          </details>
        ))}
        <div className="border-t" style={{ borderColor: "var(--color-light-gray)" }} />
      </div>

      <div className="mt-10 p-5" style={{ border: "1px solid var(--color-light-gray)", background: "var(--color-concrete)" }}>
        <p className="text-sm" style={{ color: "var(--color-near-black)" }}>
          Didn&apos;t find your answer? Call{" "}
          <a href="tel:18003289550" className="underline">
            1-800-328-9550
          </a>{" "}
          or email{" "}
          <a href="mailto:moyer@westol.com" className="underline">
            moyer@westol.com
          </a>{" "}
          any time.
        </p>
      </div>
    </main>
  );
}
