import type { Metadata } from "next";
import BeforeAfterSlider from "../components/before-after-slider";
import LotusStepper from "../components/our-work-stepper";
import PhotoGallery from "../components/photo-gallery";
import HeroBackdrop from "../components/hero-backdrop";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real before-and-after photos from the shop, including a full restoration of a Lotus gas tank.",
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
    images: [
      "Lotus-9.jpg",
      "Lotus-10.jpg",
      "Lotus-11.jpg",
      "Lotus-13.jpg",
      "Lotus-14.jpg",
    ],
  },
  {
    title: "Renu applied to the outside and baked",
    caption: "Written lifetime warranty: the tank will not leak or rust.",
    images: ["Lotus-15.jpg", "Lotus-16.jpg", "Lotus-17.jpg"],
  },
];

// Motorcycle tank photos (bike-1.jpg through bike-11.jpg).
// To give one photo its own caption, change its line below, for example:
//   { n: 3, title: "Harley tank, sandblasted", caption: "Down to bare metal inside and out." },
const BIKE_TITLE = "Motorcycle tank";
const BIKE_CAPTION =
  "Bike tanks are opened up so we can blast the inside, then welded closed, coated with Renu, and baked.";

const bikePhotos = [
  { n: 1 },
  { n: 2 },
  { n: 3 },
  { n: 4 },
  { n: 5 },
  { n: 6 },
  { n: 7 },
  { n: 8 },
  { n: 9 },
  { n: 10 },
  { n: 11 },
].map((p: { n: number; title?: string; caption?: string }) => ({
  src: `/images/bike-${p.n}.jpg`,
  alt: `${p.title ?? BIKE_TITLE}, photo ${p.n}`,
  title: p.title ?? BIKE_TITLE,
  caption: p.caption ?? BIKE_CAPTION,
}));

// Every photo for the gallery. Add new shop photos to this list.
// title + caption show under the photo when it's opened full size (both optional).
const galleryImages = [
  {
    src: "/images/tank-finished.png",
    alt: "Finished tank with a glossy Renu coating",
    title: "Finished Renu coating",
    caption:
      "Baked on and backed by a written lifetime warranty against rust and leaks.",
  },
  {
    src: "/images/tank-before.png",
    alt: "Antique gas tank, rusted through",
    title: "As it came in",
    caption: "Rusted through. Most shops would call this one a loss.",
  },
  {
    src: "/images/tank-sandblasted.png",
    alt: "Sandblasted and repaired gas tank",
    title: "Sandblasted and repaired",
    caption:
      "Blasted down to bare metal inside and out, with the holes patched before coating.",
  },
  {
    src: "/images/volvo-1.jpg",
    alt: "Open Volvo gas tank with a glossy Renu coating",
    title: "Volvo tank, inside",
    caption:
      "The inside of a Volvo tank after the Renu coating was pumped in, rolled, and baked.",
  },
  {
    src: "/images/volvo-2.jpg",
    alt: "Close-up of Volvo gas tank with Renu coating",
    title: "Volvo tank, up close",
    caption: "An even coat in every corner, around the baffles and the pickup.",
  },
  ...bikePhotos,
  ...lotusStages.flatMap((stage) =>
    stage.images.map((img) => ({
      src: `/images/lotus/${img}`,
      alt: `Lotus gas tank: ${stage.title.toLowerCase()}`,
      title: `Lotus tank: ${stage.title.toLowerCase()}`,
      caption: stage.caption,
    })),
  ),
];

export default function OurWork() {
  return (
    <main>
      {/* 1. BEFORE & AFTER (light cream) */}
      <section className="relative overflow-hidden bg-[#FFF9ED]">
        <HeroBackdrop variant="brushed" />
        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="text-center">
            <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-deep-gold">
              Our work
            </p>
            <h1 className="mt-3 font-head text-3xl text-near-black sm:text-5xl">
              Real tanks. Real restorations.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-medium-gray sm:text-base">
              Drag the slider to see what the Renu process does to a tank most
              shops would turn away.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <BeforeAfterSlider
              beforeSrc="/images/tank-before.png"
              beforeAlt="Original antique gas tank, rusted through"
              afterSrc="/images/tank-finished.png"
              afterAlt="Completed Renu process, glossy dark finish"
            />
            <p className="mt-6 text-center font-head text-2xl text-near-black">
              Yes, this is the same tank.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LOTUS CASE STUDY (dark, gold stripe on top) */}
      <section className="border-t-[6px] border-moyer-gold bg-near-black">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="text-center">
            <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-moyer-gold">
              Case study
            </p>
            <h2 className="mt-3 font-head text-3xl text-white sm:text-4xl">
              A Lotus gas tank, start to finish
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/65">
              Follow one original Lotus tank from the day it arrived through the
              finished Renu process.
            </p>
          </div>

          <div className="mt-10">
            <LotusStepper stages={lotusStages} />
          </div>
        </div>
      </section>

      {/* 3. PHOTO GALLERY (warm concrete) */}
      <section className="bg-concrete">
        <div className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="font-head text-sm font-bold uppercase tracking-[0.16em] text-deep-gold">
              Gallery
            </p>
            <h2 className="mt-3 font-head text-3xl text-near-black sm:text-4xl">
              More from the shop
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-medium-gray">
              Tap any photo to see it full size.
            </p>
          </div>

          <div className="mt-10">
            <PhotoGallery images={galleryImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
