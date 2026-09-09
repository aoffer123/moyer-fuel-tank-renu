"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/answers", label: "Answers" },
  { href: "/motorcycle", label: "Motorcycle" },
  { href: "/hardcopy", label: "Hardcopy" },
  { href: "/sumps", label: "Sumps" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="no-print">
      <div className="data-plate">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-head text-lg tracking-wide" style={{ color: "var(--color-white)" }}>
              MOYER <span style={{ color: "var(--color-moyer-gold)" }}>FUEL TANK RENU</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-5 text-sm">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`stencil-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="tel:18003289550"
            className="btn-gold text-sm py-2 px-4"
          >
            1-800-328-9550
          </a>
        </div>
      </div>

    </header>
  );
}
