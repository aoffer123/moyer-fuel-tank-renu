import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Moyer Fuel Tank Renu — patented no-rust gas tank restoration",
    template: "%s — Moyer Fuel Tank Renu",
  },
  description:
    "Family-run since 1942. Patented Renu process repairs and restores gasoline and diesel fuel tanks so they never rust again. Nationwide, lifetime warranty.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
