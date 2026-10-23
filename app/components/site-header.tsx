"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MapPinIcon,
  ArrowRightIcon,
  ListIcon,
  XIcon,
  MapTrifoldIcon,
  MapPinAreaIcon,
  NavigationArrowIcon,
  MapPinSimpleAreaIcon,
} from "@phosphor-icons/react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/answers", label: "FAQs" },
  // { href: "/motorcycle", label: "Motorcycle" },
  { href: "/hardcopy", label: "Intake Form" },
  // { href: "/sumps", label: "Sumps" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when navigating to another page
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="no-print sticky top-0 z-50 lg:static">
      <div className="data-plate">
        <div className="px-6 lg:px-12 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className="font-head text-lg tracking-wide"
              style={{ color: "var(--color-white)" }}
            >
              MOYER{" "}
              <span style={{ color: "var(--color-moyer-gold)" }}>
                FUEL TANK RENU
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex flex-wrap items-center justify-center gap-5 text-sm"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`stencil-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Visit Button */}
          <div className="hidden lg:block shrink-0">
            <Link href="/#visit-moyer" className="btn-header text-sm">
              <MapPinIcon size={18} weight="bold" />
              Visit Our Shop
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center p-2 text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <XIcon size={28} weight="regular" />
            ) : (
              <ListIcon size={28} weight="regular" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-white/10 px-6 pb-6 pt-4"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-head px-3 py-3 text-base tracking-wide transition-colors ${
                      isActive
                        ? "border-l-2 border-moyer-gold bg-white/5 text-white"
                        : "border-l-2 border-transparent text-light-gray hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile Visit Button */}
              <Link
                href="/#visit-moyer"
                onClick={() => setMenuOpen(false)}
                className="btn-header mt-5 flex w-full items-center justify-center gap-2 text-sm"
              >
                <MapPinIcon size={18} weight="bold" />
                Visit Our Shop
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
