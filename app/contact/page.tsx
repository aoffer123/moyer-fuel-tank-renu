import type { Metadata } from "next";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "../components/contact-icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Moyer Fuel Tank Renu \u2014 call, email, or send a message about your tank.",
};

const address = "2011 Western Avenue, Greensburg, PA 15601";
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function Contact() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 pt-8 pb-2 text-left">
        <h1
          className="font-head text-4xl mt-3"
          style={{ color: "var(--color-near-black)" }}
        >
          Get in touch before you ship
        </h1>
        <p
          className="mt-4 text-[15px]"
          style={{ color: "var(--color-medium-gray)" }}
        >
          Every quote starts with a conversation. Call, email, or send a message
          below and we&apos;ll help you figure out the best next step for your
          tank.
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl px-6 pt-4 pb-20 rounded-md grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
        {/* Form */}
        <div
          className="p-6 sm:p-8 bg-[#FAFAFA] rounded-lg"
          style={{ border: "1px solid var(--color-light-gray)" }}
        >
          <h2
            className="font-head text-xl"
            style={{ color: "var(--color-near-black)" }}
          >
            Tell us about your tank
          </h2>

          <form className="mt-4 grid gap-5">
            <Field label="Name" name="name" />
            <Field label="Email address" name="email" type="email" />
            <Field label="Phone (optional)" name="phone" type="tel" />
            <Field label="Vehicle or tank type" name="vehicle" />
            <div>
              <label htmlFor="message" className="wo-label block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="wo-field"
                placeholder="What are you working with, and what's going on with it?"
              />
            </div>
            <button type="submit" className="btn-solid justify-self-start">
              Send Message
            </button>
          </form>
        </div>

        {/* Direct contact + office */}
        <div className="flex flex-col gap-10">
          <div>
            <h2
              className="font-head text-xl"
              style={{ color: "var(--color-near-black)" }}
            >
              Prefer to call or email?
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span style={{ color: "var(--color-deep-gold)" }}>
                  <PhoneIcon className="w-5 h-5" />
                </span>
                <a
                  href="tel:18003289550"
                  className="text-sm"
                  style={{ color: "var(--color-near-black)" }}
                >
                  1-800-328-9550
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: "var(--color-deep-gold)" }}>
                  <MailIcon className="w-5 h-5" />
                </span>
                <a
                  href="mailto:moyer@westol.com"
                  className="text-sm"
                  style={{ color: "var(--color-near-black)" }}
                >
                  moyer@westol.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: "var(--color-deep-gold)" }}>
                  <ClockIcon className="w-5 h-5" />
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--color-near-black)" }}
                >
                  9 AM&ndash;9 PM, every day
                </span>
              </li>
            </ul>
          </div>

          {/* Google Maps + Visit the Shop */}
          <div className="overflow-hidden rounded-lg border border-light-gray bg-white">
            {/* Interactive Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.058334542368!2d-79.55858592360323!3d40.27445436428579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834d083472958e3%3A0xf8cda68b015c82c0!2sMoyer's%20Gas%20Tank%20Renu!5e0!3m2!1sen!2sus!4v1788900610387!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Moyer Fuel Tank Renu location"
              className="block w-full"
            />

            {/* Location Details */}
            <div className="p-6">
              <h3 className="font-head text-lg text-near-black">
                Visit the shop
              </h3>

              <p className="mt-2 flex items-start gap-2 text-sm text-medium-gray">
                <span className="mt-0.5 shrink-0 text-deep-gold">
                  <PinIcon className="h-4 w-4" />
                </span>
                {address}
              </p>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-4"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="wo-label block mb-1">
        {label}
      </label>
      <input id={name} name={name} type={type} className="wo-field" />
    </div>
  );
}
