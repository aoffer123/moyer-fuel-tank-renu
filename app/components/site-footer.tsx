import Link from "next/link";
import { MapPinIcon, PlusIcon } from "@phosphor-icons/react/ssr";

export function SiteFooter() {
  return (
    <footer className="no-print">
      <div className="data-plate">
        <div className="mx-auto max-w-screen-2xl px-6 pt-10 pb-12 sm:px-8 lg:px-12 lg:pt-12 lg:pb-6">
          {/* Mobile Footer */}
          <div className="lg:hidden">
            {/* Company */}
            <div className="pb-6">
              <h2 className="font-head text-lg text-white">
                Moyer Fuel Tank Renu
              </h2>

              <p className="mt-2 text-sm text-light-gray">
                Family-run since 1942.
              </p>

              <address className="mt-4 flex items-start gap-2.5 not-italic text-sm leading-6 text-light-gray">
                <MapPinIcon
                  size={18}
                  className="mt-0.5 shrink-0 text-moyer-gold"
                />

                <span>
                  2011 Western Avenue
                  <br />
                  Greensburg, PA 15601
                </span>
              </address>
            </div>

            {/* Quick Links */}
            <details className="group border-t border-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-head text-base text-white [&::-webkit-details-marker]:hidden">
                Quick Links
                <PlusIcon
                  size={18}
                  className="text-moyer-gold transition-transform duration-200 group-open:rotate-45"
                />
              </summary>

              <nav
                aria-label="Mobile footer navigation"
                className="flex flex-col gap-3 pb-5 text-sm"
              >
                <Link
                  href="/"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  Home
                </Link>
                <Link
                  href="/our-work"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  Our Work
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  How It Works
                </Link>
                <Link
                  href="/answers"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  FAQs
                </Link>
              </nav>
            </details>

            {/* Customer Resources */}
            <details className="group border-t border-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-head text-base text-white [&::-webkit-details-marker]:hidden">
                Customer Resources
                <PlusIcon
                  size={18}
                  className="text-moyer-gold transition-transform duration-200 group-open:rotate-45"
                />
              </summary>

              <nav
                aria-label="Mobile customer resources"
                className="flex flex-col gap-3 pb-5 text-sm"
              >
                <Link
                  href="/hardcopy"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  Intake Form
                </Link>
                <Link
                  href="/answers"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  Shipping Information
                </Link>
                <Link
                  href="/contact"
                  className="text-light-gray hover:text-moyer-gold"
                >
                  Contact Us
                </Link>
              </nav>
            </details>

            {/* Reach Us */}
            <details className="group border-y border-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-head text-base text-white [&::-webkit-details-marker]:hidden">
                Reach Us
                <PlusIcon
                  size={18}
                  className="text-moyer-gold transition-transform duration-200 group-open:rotate-45"
                />
              </summary>

              <div className="flex flex-col gap-3 pb-5 text-sm text-light-gray">
                <a href="tel:18003289550" className="hover:text-moyer-gold">
                  1-800-328-9550
                </a>

                <a href="tel:7246969391" className="hover:text-moyer-gold">
                  Shop: 724-696-9391
                </a>

                <a
                  href="mailto:moyer@westol.com"
                  className="hover:text-moyer-gold"
                >
                  moyer@westol.com
                </a>

                <p>9 AM–9 PM, every day</p>
              </div>
            </details>
          </div>

          {/* Desktop Footer — unchanged four-column layout */}
          <div className="hidden grid-cols-4 gap-10 text-sm lg:grid">
            {/* Company */}
            <div>
              <h2 className="font-head text-base text-white">
                Moyer Fuel Tank Renu
              </h2>

              <p className="mt-3 leading-relaxed text-light-gray">
                Family-run since 1942.
              </p>

              <address className="mt-3 not-italic leading-relaxed text-light-gray">
                2011 Western Avenue
                <br />
                Greensburg, PA 15601
              </address>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="font-head text-base text-white">Quick Links</h2>

              <nav
                aria-label="Footer navigation"
                className="mt-3 flex flex-col gap-2"
              >
                <Link
                  href="/"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  Home
                </Link>
                <Link
                  href="/our-work"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  Our Work
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  How It Works
                </Link>
                <Link
                  href="/answers"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  FAQs
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h2 className="font-head text-base text-white">
                Customer Resources
              </h2>

              <nav
                aria-label="Customer resources"
                className="mt-3 flex flex-col gap-2"
              >
                <Link
                  href="/hardcopy"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  Intake Form
                </Link>
                <Link
                  href="/answers"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  Shipping Information
                </Link>
                <Link
                  href="/contact"
                  className="text-light-gray transition-colors hover:text-moyer-gold"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-head text-base text-white">Reach Us</h2>

              <div className="mt-3 flex flex-col gap-2 text-light-gray">
                <a href="tel:18003289550" className="hover:text-moyer-gold">
                  1-800-328-9550
                </a>

                <a href="tel:7246969391" className="hover:text-moyer-gold">
                  Shop: 724-696-9391
                </a>

                <a
                  href="mailto:moyer@westol.com"
                  className="break-all hover:text-moyer-gold"
                >
                  moyer@westol.com
                </a>

                <p>9 AM–9 PM, every day</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-5 text-center text-xs text-light-gray lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>
              © {new Date().getFullYear()} Moyer Fuel Tank Renu. All rights
              reserved.
            </p>

            <p>Family-run since 1942</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
