import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Real before-and-after photos from the shop, including a full restoration of a Lotus gas tank.",
};

const lotusStages = [
  {
    title: "As received",
    caption: "Rusted through, exactly the kind of tank most shops turn away.",
    images: ["Lotus-1 (1).jpg", "Lotus-2.jpg"],
  },
  {
    title: "Defumed and sandblasted, inside and out",
    caption: "Down to bare metal. Nothing bonds to rust, not even Renu.",
    images: [
      "Lotus-3.jpg",
      "Lotus-4.jpg",
      "Lotus-5.jpg",
      "Lotus-6.jpg",
      "Lotus-7.jpg",
      "Lotus-8.jpg",
    ],
  },
  {
    title: "Repaired and prepatched",
    caption: "Renu pumped in, rolled, and drained.",
    images: ["Lotus-9.jpg", "Lotus-10.jpg", "Lotus-11.jpg", "Lotus-13.jpg", "Lotus-14.jpg"],
  },
  {
    title: "Renu applied to the outside and baked",
    caption: "Written lifetime warranty \u2014 tank will not leak or rust.",
    images: ["Lotus-15.jpg", "Lotus-16.jpg", "Lotus-17.jpg"],
  },
];

export default function OurWork() {
  return (
    <main className="bg-warm-white">
      <div className="mx-auto max-w-2xl px-6 pt-16 pb-4 text-center">
        <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-deep-gold)" }}>
          Our work
        </p>
        <h1 className="font-head text-4xl mt-3" style={{ color: "var(--color-near-black)" }}>
          Real tanks. Real restorations.
        </h1>
        <p className="mt-4 text-sm" style={{ color: "var(--color-medium-gray)" }}>
          A look at what comes out of the shop {"\u2014"} before, during, and
          after the Renu process.
        </p>
      </div>

      {/* Featured before/after */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <PhotoFrame src="/images/tank-before.png" alt="Original antique gas tank, rusted through" caption="Original condition" />
          <PhotoFrame src="/images/tank-sandblasted.png" alt="Sandblasted and repaired gas tank" caption="Sandblasted & repaired" />
          <PhotoFrame src="/images/tank-finished.png" alt="Completed Renu process, glossy dark finish" caption="Completed Renu process" />
        </div>
        <p className="mt-6 text-center font-head text-lg" style={{ color: "var(--color-near-black)" }}>
          Yes, this is the same tank.
        </p>
      </section>

      <div className="brand-stripe">
        <span className="b" />
        <span className="g" />
      </div>

      {/* Case study: Lotus gas tank */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-head text-sm tracking-wide" style={{ color: "var(--color-deep-gold)" }}>
          Case study
        </p>
        <h2 className="font-head text-2xl mt-2" style={{ color: "var(--color-near-black)" }}>
          A Lotus gas tank, start to finish
        </h2>
        <p className="mt-2 text-sm max-w-lg" style={{ color: "var(--color-medium-gray)" }}>
          Every photo from one real job, in order.
        </p>

        <div className="mt-12 flex flex-col gap-14">
          {lotusStages.map((stage) => (
            <div key={stage.title}>
              <h3 className="font-head text-lg" style={{ color: "var(--color-near-black)" }}>
                {stage.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--color-medium-gray)" }}>
                {stage.caption}
              </p>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {stage.images.map((img) => (
                  <div
                    key={img}
                    className="relative aspect-[4/3]"
                    style={{ border: "1px solid var(--color-light-gray)", background: "var(--color-concrete)" }}
                  >
                    <Image
                      src={`/images/lotus/${img}`}
                      alt={`${stage.title} \u2014 Lotus gas tank`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function PhotoFrame({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div>
      <div
        className="relative aspect-[4/3]"
        style={{ border: "1px solid var(--color-light-gray)", background: "var(--color-concrete)" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <p
        className="mt-2 text-center font-head text-sm"
        style={{ color: "var(--color-near-black)" }}
      >
        {caption}
      </p>
    </div>
  );
}
