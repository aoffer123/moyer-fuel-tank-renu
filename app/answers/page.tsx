import type { Metadata } from "next";
import { FAQTabs } from "../components/faq-tabs";

export const metadata: Metadata = {
  title: "Answers",
  description:
    "Shipping, process, and pricing questions for gas tank restoration.",
};

const faqGroups = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "Can my tank be repaired?",
        a: [
          "In most cases, yes. Moyer specializes in restoring tanks that are badly rusted, leaking, damaged, or difficult to replace. Even severely damaged original tanks can often be saved.",
          "The main exception is metal that has become so thin that it can no longer be safely repaired. If you're unsure, give us a call and tell us what you're working with.",
        ],
      },
      {
        q: "What types of tanks do you work on?",
        a: [
          "We work on gasoline and diesel tanks for cars, trucks, motorcycles, tractors, boats, motor homes, ATVs, snowmobiles, and other specialty applications.",
        ],
      },
      {
        q: "Do I need to call before sending my tank?",
        a: [
          "We recommend calling before you ship. Tell us what kind of tank you have and what condition it's in, and we'll help you determine the best next step.",
        ],
      },
      {
        q: "Can you give me a quote before seeing the tank?",
        a: [
          "We can usually discuss a general price range, but an exact price is difficult to determine until the tank is inspected in person. The amount of rust, damage, previous repairs, and other conditions can change the amount of work required.",
        ],
      },
      {
        q: "What if my tank looks too far gone?",
        a: [
          "Don't assume it can't be saved. Restoring badly damaged and hard-to-replace tanks is what we specialize in. Give us a call before giving up on the original.",
        ],
      },
    ],
  },

  {
    title: "Shipping",
    questions: [
      {
        q: "How do I prepare my tank for shipping?",
        a: [
          "Wash the tank with a degreasing detergent, such as dish soap, and make sure it is completely drained and dry before packaging it.",
        ],
      },
      {
        q: "What if gasoline won't drain completely?",
        a: [
          "If gasoline will not drain, a small hole can be made in a lower corner so the tank can empty and dry completely before shipment.",
        ],
      },
      {
        q: "How should I package my tank?",
        a: [
          "Once the tank is completely dry, place it in a large garbage or leaf bag and seal the bag with tape. Use a sturdy box with enough protection to keep the tank secure during shipping. Appliance stores can be a good source for larger boxes.",
        ],
      },
      {
        q: "Which shipping carriers can I use?",
        a: [
          "Customers can ship tanks to Moyer from around the country. UPS, FedEx, and USPS are common options.",
        ],
      },
      {
        q: "Is there a maximum package size I should stay under?",
        a: [
          "Try to keep the package's length plus girth under 130 inches when possible. Oversized packages can cost considerably more to ship.",
        ],
      },
      {
        q: "What should I include with my tank?",
        a: [
          "Print the intake form and place it in the package with your tank. Include your contact information and any important instructions about the tank.",
        ],
      },
    ],
  },

  {
    title: "Pricing & Payment",
    questions: [
      {
        q: "How much does it cost?",
        a: [
          "Pricing depends on the size, condition, and amount of repair work the tank requires. Most tanks typically fall between $295 and $395, but every tank is different.",
          "Call us before shipping and we can discuss what you have and give you a better idea of what to expect.",
        ],
      },
      {
        q: "Why can't you give me an exact price over the phone?",
        a: [
          "Rust and damage aren't always visible from the outside. We need to inspect the actual tank before we can determine exactly what repairs are required.",
        ],
      },
      {
        q: "What if I decide not to have the work done?",
        a: [
          "If you decide not to proceed after the tank has been inspected and priced, we'll arrange to send the tank back to you.",
        ],
      },
      {
        q: "What payment methods do you accept?",
        a: [
          "Major credit cards are accepted, including Visa, Mastercard, American Express, and Discover.",
        ],
      },
    ],
  },

  {
    title: "The Renu Process",
    questions: [
      {
        q: "What is the Renu process?",
        a: [
          "The Renu process restores the existing tank by removing rust and corrosion, repairing damaged metal, applying the Renu treatment, and curing the coating. The goal is to preserve the original tank rather than simply covering up the existing damage.",
        ],
      },
      {
        q: "Is Renu just an epoxy or temporary tank sealer?",
        a: [
          "No. The Renu process is not intended as a temporary coating over existing rust. The tank is thoroughly prepared and stripped before the coating is applied and cured.",
        ],
      },
      {
        q: "Do you coat over rust?",
        a: [
          "No. Rust and corrosion have to be removed first. The tank is sandblasted to clean metal before repairs and the Renu coating are applied.",
        ],
      },
      {
        q: "What happens when my tank arrives?",
        a: [
          "We inspect and photograph the tank, determine what repairs are required, and contact you with the exact cost. Once approved, the tank goes through the restoration process.",
          "For a step-by-step explanation, visit our How It Works page.",
        ],
      },
      {
        q: "Can you repair holes and pinholes?",
        a: [
          "Yes. Damage is repaired after the tank has been stripped so the condition of the metal can be properly evaluated. Pinholes and other damaged areas are repaired before the final coating process.",
        ],
      },
      {
        q: "Will my tank need to be opened?",
        a: [
          "Not every tank needs to be opened. Some tanks, particularly motorcycles and certain antique tanks, have openings that are too restrictive to properly access the entire interior. When necessary, the tank is opened so it can be completely cleaned and restored.",
        ],
      },
    ],
  },

  {
    title: "Motorcycle & Antique Tanks",
    questions: [
      {
        q: "Is the motorcycle process different?",
        a: [
          "The core Renu process is the same, but motorcycle tanks have two important differences. Some may need to be opened to properly access the interior, and the exterior finish is handled differently because the visible portion of the tank is normally painted.",
        ],
      },
      {
        q: "Why do some motorcycle tanks need to be opened?",
        a: [
          "Some motorcycle tanks have narrow filler openings that do not provide enough access to properly clean and restore the entire interior. In those cases, the tank may need to be carefully opened during restoration.",
        ],
      },
      {
        q: "How is a motorcycle tank finished on the outside?",
        a: [
          "The bottom receives the full exterior Renu treatment. The visible upper portion is primed and left ready for the customer's final paint finish.",
        ],
      },
      {
        q: "Do antique tractors use the motorcycle process?",
        a: [
          "Some antique tractor tanks use the same modified process used for motorcycle tanks.",
        ],
      },
      {
        q: "What about antique car tanks?",
        a: [
          "Some antique automobile tanks may also require the motorcycle-style process depending on the tank's construction and interior access.",
        ],
      },
    ],
  },

  {
    title: "Warranty & Results",
    questions: [
      {
        q: "Does the restoration include a warranty?",
        a: [
          "Renu-processed tanks are backed by a nationwide lifetime warranty.",
        ],
      },
      {
        q: "Will my restored tank rust again?",
        a: [
          "The Renu process is designed to permanently protect the processed tank against rust and corrosion and is backed by the lifetime warranty.",
        ],
      },
      {
        q: "Why restore my original tank instead of buying a replacement?",
        a: [
          "Original tanks can be difficult or impossible to replace, especially on antique, classic, and unusual vehicles. Restoring the original preserves the correct fit and original equipment rather than relying on a generic aftermarket replacement.",
        ],
      },
    ],
  },

  {
    title: "Replacement Tanks & Specialty Work",
    questions: [
      {
        q: "Do you have replacement tanks in stock?",
        a: [
          "Moyer maintains an inventory of hundreds of processed replacement tanks. Call with your vehicle information to find out whether a suitable tank is currently available.",
        ],
      },
      {
        q: "Can you build a custom sump?",
        a: [
          "Yes. Custom sump fabrication is available for certain racing and performance applications. Contact us to discuss what you're building.",
        ],
      },
    ],
  },
];

export default function Answers() {
  return (
    <main className="mx-auto max-w-screen-2xl px-8 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-20">
      <h1
        className="mt-3 font-head text-4xl"
        style={{ color: "var(--color-near-black)" }}
      >
        Frequently Asked Questions
      </h1>
      <p className="mt-2 font-body text-sm text-medium-gray">
        Select a question below to learn more.
      </p>
      <FAQTabs groups={faqGroups} />
      <div
        className="mt-10 rounded-lg p-5 sm:mt-14"
        style={{
          border: "1px solid var(--color-light-gray)",
          background: "var(--color-concrete)",
        }}
      >
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
