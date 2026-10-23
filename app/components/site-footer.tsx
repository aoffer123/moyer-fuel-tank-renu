import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="no-print">
      <div className="data-plate">
        <div className="mx-auto max-w-screen-2xl px-8 pt-12 pb-6 sm:px-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-sm lg:grid-cols-4 lg:gap-10">
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
                <a
                  href="tel:18003289550"
                  className="transition-colors hover:text-moyer-gold"
                >
                  1-800-328-9550
                </a>

                <a
                  href="tel:7246969391"
                  className="transition-colors hover:text-moyer-gold"
                >
                  Shop: 724-696-9391
                </a>

                <a
                  href="mailto:moyer@westol.com"
                  className="break-all transition-colors hover:text-moyer-gold"
                >
                  moyer@westol.com
                </a>

                <p>9 AM–9 PM, every day</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-5 text-xs text-light-gray sm:flex-row sm:items-center sm:justify-between">
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
