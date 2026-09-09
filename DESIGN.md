# Design notes

## Brand pivot
This version replaces the earlier dark "work order" concept with the real
Moyer Fuel Tank Renu brand: the exact palette from the client's color sheet,
and a layout structurally modeled on the reference screenshot the client
supplied (gold hero, black utility bar, icon row, about section, colored
service section). The real shop photo (Western Avenue, Greensburg, PA) is
used full-width under the hero instead of a stock photo.

## Tokens (`app/globals.css` `@theme` block)
| Token | Hex | Use |
|---|---|---|
| `--color-moyer-gold` | `#D3A126` | Primary / brand yellow |
| `--color-deep-gold` | `#A97A16` | Hover state / dark accent |
| `--color-near-black` | `#111111` | Primary dark, nav/footer bg |
| `--color-charcoal` | `#252525` | Secondary dark, body text on gold |
| `--color-warm-white` | `#F7F6F2` | Main background |
| `--color-concrete` | `#E8E5DE` | Secondary background (About us, cards) |
| `--color-medium-gray` | `#686868` | Muted body text |
| `--color-light-gray` | `#D4D0C8` | Borders, dividers |
| `--color-white` | `#FFFFFF` | Pure white |

Type is unchanged: **Oswald** for headlines (it matches the bold condensed
lettering actually painted on the shop's signage), **Work Sans** for body.

`.brand-stripe` is a small horizontal black/gold divider that echoes the
shop building's own painted bands, used between sections instead of a
generic rule.

## Homepage structure (mirrors the reference screenshot, adapted to content
that's actually true of this business)
1. **Hero** — gold background, headline + subcopy + two CTAs (no stock
   photo; see below).
2. **Real shop photo**, full width, in place of the reference's stock
   "hands on an engine" image.
3. **Quote bar** — black bar overlapping the photo, in place of the
   reference's "Find an auto shop" search bar. Adapted to how this business
   actually works: a vehicle-type and condition select plus a "Call for a
   quote" button, since Joseph prices tanks by phone after seeing them, not
   through an automated calculator. The dropdowns are structural/visual,
   not wired to any logic yet.
4. **Service icon row** — 5 hand-drawn line icons (`app/components/service-icons.tsx`)
   for auto, motorcycle, tractor, marine, and sump work, replacing the
   reference's generic repair-shop icons.
5. **About us** — a pull-quote (the shop's real "we don't lock in rust, we
   eliminate it" line) instead of a second stock photo, paired with the
   "since 1942" copy.
6. **Our process** — gold section, the 4-stage `ProcessStrip` SVG,
   recolored to the new palette (see below).
7. Trust checklist and quick-links grid, carried over from the previous
   version, recolored.

## Process strip recoloring
The brand palette has no red, so the illustrative "rusted tank" stage uses
a deep-gold/charcoal speckle instead of rust-red, and the "Renu coated"
stage uses solid Moyer Gold rather than the real product's red interior
coating. This is a stylized brand diagram, not a literal color reference
for the actual Renu product.

## Content sourcing
Unchanged from the previous version — see git history / prior DESIGN.md
notes. Copy is rewritten from the real gas-tank.com pages, not copied
verbatim.

## Known gaps / next steps
- Quote bar selects don't do anything yet — they're a visual/structural
  match to the reference, not wired to a quote engine.
- Sump gallery still has placeholder tiles; drop real photos into
  `public/images` and swap them in.
- No backend on the hardcopy form (matches the shop's real print-and-mail
  workflow).
- The shop photo is a small (1057×294) vintage scan — it'll look soft at
  very large screen widths. A higher-resolution rescan would sharpen it up.
