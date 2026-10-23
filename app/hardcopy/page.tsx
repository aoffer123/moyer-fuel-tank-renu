import type { Metadata } from "next";
import {
  DownloadIcon,
  FilePdfIcon,
  ArrowSquareOutIcon,
  PencilSimpleLineIcon,
  PackageIcon,
  PrinterIcon,
  CaretDownIcon,
  SealCheckIcon,
} from "@phosphor-icons/react/ssr";
import PrintButton from "../components/print-form";
import TermsTabs from "../components/terms-tabs";

export const metadata: Metadata = {
  title: "Fuel Tank Intake Form",
  description:
    "Download and complete the Moyer Fuel Tank Renu intake form before shipping your tank.",
};

const PDF_PATH = "/documents/moyer-fuel-tank-intake-form.pdf";

const steps = [
  {
    icon: PrinterIcon,
    title: "Download & print",
    text: "Grab the PDF and print a copy of the intake form.",
  },
  {
    icon: PencilSimpleLineIcon,
    title: "Fill out & sign",
    text: "Add your contact and vehicle info, then sign the acknowledgment.",
  },
  {
    icon: PackageIcon,
    title: "Ship it with your tank",
    text: "Place the completed form inside the box with your fuel tank.",
  },
];

const terms = [
  {
    title: "The Renu Process",
    items: [
      "Plates may need to be welded on weak, cracked areas or holes to ensure strength, and may be visible.",
      "Inside: Renu is pumped into the tank, rolled, and drained before baking.",
      "Outside: Renu is worked into the rough metal and smoothed out with a brush. Brush strokes may be visible.",
      "Renu is thick and cannot be sprayed on like paint. We need a tight bond.",
    ],
  },
  {
    title: "Show Vehicles & Painting",
    items: [
      "Our main purpose is restoration and rust prevention.",
      "For a show vehicle with a smooth, high gloss finish, we can Renu the inside of the tank and prime the exterior. You must request this method, and it carries a two-year warranty against rust and leaks only.",
      "Tanks may be painted after the Renu process, but must be touch sanded lightly and primed with lacquer primer first.",
      "We accept no responsibility for painting or the finish paint.",
    ],
  },
  {
    title: "Before You Send",
    items: [
      "Please remove all parts that do not get processed: sending units, drain plugs, hoses, roll over vents, etc. We prefer not to be responsible for these parts.",
      "Plastic bowls and strainers may be removed from the original tank. Metal bowls will be fabricated to replace them.",
    ],
  },
  {
    title: "Dents & Additional Work",
    items: [
      "We try to remove dents to the best of our ability, but we are not body men and do not have body shop equipment.",
      "If the surface must be perfectly smooth, please discuss this with Joseph before we begin.",
      "Any additional work requested after the original quote will be priced accordingly.",
    ],
  },
  {
    title: "Shipping",
    items: [
      "We insure every tank against shipping damage, which is rare but possible.",
    ],
  },
];

export default function Hardcopy() {
  return (
    <div className="bg-[#FFF9ED]">
      <main className="mx-auto max-w-screen-2xl px-8 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-20">
        {/* Page header */}
        <header>
          <p className="text-xs font-semibold tracking-[0.2em] text-deep-gold uppercase">
            Before you ship
          </p>
          <h1 className="mt-2 font-head text-4xl text-near-black">
            Fuel Tank Intake Form
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-medium-gray">
            Every tank we receive needs a completed, signed intake form.
            Download it, fill it out, and include the printed copy in the box
            with your tank.
          </p>
        </header>

        {/* Download card (full width) */}
        <div className="mt-3 rounded-xl border border-light-gray bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#FFF9ED] text-deep-gold">
                <FilePdfIcon size={30} />
              </div>
              <div>
                <h2 className="font-head text-lg leading-tight text-near-black">
                  Moyer Fuel Tank Intake Form
                </h2>
                <p className="mt-0.5 text-sm text-medium-gray">
                  PDF · 1 page · Printable
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={PDF_PATH}
                download="moyer-fuel-tank-intake-form.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-near-black px-5 py-2.5 font-head text-sm text-white sm:w-[180px] transition-colors hover:bg-charcoal"
              >
                <DownloadIcon size={16} weight="bold" />
                Download Form
              </a>

              <PrintButton
                pdfPath={PDF_PATH}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-near-black bg-white px-5 py-2.5 font-head text-sm text-near-black sm:w-[180px] transition-colors hover:bg-[#F7F6F2]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
          {/* Left column: preview */}
          <div>
            {/* Preview */}
            <section aria-labelledby="preview-heading">
              <div className="overflow-hidden rounded-xl border border-light-gray bg-white shadow-sm">
                <div className="flex items-center justify-between gap-3 border-b border-light-gray px-5 py-3">
                  <h2
                    id="preview-heading"
                    className="font-head text-lg text-near-black"
                  >
                    Form Preview
                  </h2>
                  <a
                    href={PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-1.5 text-sm font-medium text-deep-gold underline-offset-4 hover:underline sm:flex"
                  >
                    Full screen
                    <ArrowSquareOutIcon size={14} weight="bold" />
                  </a>
                </div>

                <div className="bg-[#525659]">
                  <iframe
                    src={`${PDF_PATH}#toolbar=0&navpanes=0&view=Fit`}
                    title="Moyer Fuel Tank Intake Form Preview"
                    className="block h-[560px] w-full sm:h-[820px] lg:h-[980px]"
                  />
                </div>
              </div>

              <p className="mt-3 text-sm text-medium-gray">
                Preview not loading?{" "}
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-deep-gold underline underline-offset-4"
                >
                  Open the PDF directly
                </a>
                .
              </p>
            </section>
          </div>

          {/* Right column: how it works + terms */}
          <aside className="space-y-6">
            {/* Steps card */}
            <div className="rounded-xl border border-light-gray bg-white p-6 shadow-sm">
              <h2 className="font-head text-xl text-near-black">
                How it works
              </h2>

              <ol className="mt-5 space-y-5">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-near-black font-head text-base text-moyer-gold">
                      {i + 1}
                    </div>
                    <div className="pt-0.5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-near-black">
                        <step.icon size={16} className="text-deep-gold" />
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <TermsTabs />
          </aside>
        </div>
      </main>
    </div>
  );
}
