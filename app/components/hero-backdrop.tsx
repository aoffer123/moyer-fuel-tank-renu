// Decorative background for light (cream) sections.
// Usage: put it as the first child of a section that has "relative overflow-hidden",
// and give the section's content wrapper "relative" so it sits on top.
//
// Switch looks with the variant prop:
// "diamond" | "grid" | "rings" | "rivets" | "brushed" | "halftone" | "stripes" | "watermark" | "waves"

import type { CSSProperties } from "react";

export type BackdropVariant =
  | "diamond"
  | "grid"
  | "rings"
  | "rivets"
  | "brushed"
  | "halftone"
  | "stripes"
  | "watermark"
  | "waves";

const GOLD = "184,134,11"; // deep gold as RGB
const gold = (a: number) => `rgba(${GOLD},${a})`;

// Fades a layer in on the left and right edges, clear in the middle
const SIDES =
  "linear-gradient(to right, black 0%, rgba(0,0,0,.6) 14%, transparent 30%, transparent 70%, rgba(0,0,0,.6) 86%, black 100%)";

const masked = (mask: string): CSSProperties => ({
  maskImage: mask,
  WebkitMaskImage: mask,
});

// Diamond-plate (tread plate) tile
const diamondTile = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cg fill='%23B8860B' fill-opacity='0.3'%3E%3Crect x='3' y='6.5' width='12' height='5' rx='2.5' transform='rotate(-45 9 9)'/%3E%3Crect x='21' y='24.5' width='12' height='5' rx='2.5' transform='rotate(45 27 27)'/%3E%3C/g%3E%3Cg fill='%23ffffff' fill-opacity='0.7'%3E%3Crect x='4' y='6.5' width='9' height='1.6' rx='0.8' transform='rotate(-45 9 9)'/%3E%3Crect x='22' y='24.5' width='9' height='1.6' rx='0.8' transform='rotate(45 27 27)'/%3E%3C/g%3E%3C/svg%3E")`;

// Heat-wave tile, like air rising off the bake oven
const waveTile = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='28'%3E%3Cpath d='M0 14 C 20 4, 40 4, 60 14 S 100 24, 120 14' fill='none' stroke='%23B8860B' stroke-opacity='0.32' stroke-width='1.6'/%3E%3C/svg%3E")`;

const glow = (strength = 0.18): CSSProperties => ({
  background: `radial-gradient(ellipse 45% 40% at 50% 60%, ${gold(strength)}, transparent 70%)`,
});

export default function HeroBackdrop({
  variant = "diamond",
}: {
  variant?: BackdropVariant;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Tread plate on the sides */}
      {variant === "diamond" && (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: diamondTile, ...masked(SIDES) }}
          />
          <div className="absolute inset-0" style={glow()} />
        </>
      )}

      {/* Shop-drawing grid, fading toward the edges */}
      {variant === "grid" && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              `linear-gradient(${gold(0.14)} 1px, transparent 1px)`,
              `linear-gradient(90deg, ${gold(0.14)} 1px, transparent 1px)`,
              `linear-gradient(${gold(0.07)} 1px, transparent 1px)`,
              `linear-gradient(90deg, ${gold(0.07)} 1px, transparent 1px)`,
            ].join(","),
            backgroundSize: "96px 96px, 96px 96px, 24px 24px, 24px 24px",
            backgroundPosition: "center top",
            ...masked(
              "radial-gradient(ellipse 75% 70% at 50% 45%, black 35%, transparent 90%)",
            ),
          }}
        />
      )}

      {/* Gold rings spreading out from the slider */}
      {variant === "rings" && (
        <>
          <div className="absolute inset-0" style={glow(0.16)} />
          {[520, 820, 1120, 1420].map((size, i) => (
            <div
              key={size}
              className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: size,
                height: size,
                border: `${i === 0 ? 2 : 1}px solid ${gold(0.22 - i * 0.04)}`,
              }}
            />
          ))}
        </>
      )}

      {/* Riveted metal panels on the sides */}
      {variant === "rivets" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: [
                `radial-gradient(circle, ${gold(0.5)} 2.5px, rgba(255,255,255,.8) 3px, transparent 4px)`,
                `linear-gradient(${gold(0.22)} 1px, transparent 1px)`,
                `linear-gradient(90deg, ${gold(0.22)} 1px, transparent 1px)`,
              ].join(","),
              backgroundSize: "24px 160px, 100% 160px, 240px 100%",
              backgroundPosition: "0 0, 0 12px, 0 0",
              ...masked(SIDES),
            }}
          />
          <div className="absolute inset-0" style={glow()} />
        </>
      )}

      {/* Brushed metal, like the brushed Renu finish */}
      {variant === "brushed" && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(105deg, transparent 25%, rgba(255,255,255,.7) 45%, transparent 60%)",
              `repeating-linear-gradient(0deg, ${gold(0.09)} 0 1px, transparent 1px 3px)`,
              `repeating-linear-gradient(0deg, ${gold(0.06)} 0 1px, transparent 1px 7px)`,
              `linear-gradient(180deg, ${gold(0.1)}, transparent 70%)`,
            ].join(","),
          }}
        />
      )}

      {/* Vintage halftone dots in two corners */}
      {variant === "halftone" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${gold(0.45)} 1.6px, transparent 2.2px)`,
              backgroundSize: "14px 14px",
              ...masked(
                "radial-gradient(circle at 0% 0%, black, transparent 45%), radial-gradient(circle at 100% 100%, black, transparent 45%)",
              ),
            }}
          />
          <div className="absolute inset-0" style={glow(0.14)} />
        </>
      )}

      {/* Black and gold shop stripes across two corners */}
      {variant === "stripes" && (
        <>
          {[
            "-top-6 -left-32 rotate-[-30deg]",
            "-bottom-6 -right-32 rotate-[-30deg]",
          ].map((pos) => (
            <div key={pos} className={`absolute ${pos} w-[520px]`}>
              <div className="h-5 bg-near-black" />
              <div className="h-5 bg-moyer-gold" />
              <div
                className="h-3"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, #141414 0 10px, transparent 10px 20px)",
                  opacity: 0.35,
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0" style={glow(0.14)} />
        </>
      )}

      {/* Giant outlined RENU behind the slider */}
      {variant === "watermark" && (
        <>
          <div className="absolute inset-0" style={glow(0.14)} />
          <div
            className="absolute inset-x-0 top-[38%] text-center font-head leading-none font-bold select-none"
            style={{
              fontSize: "clamp(160px, 30vw, 460px)",
              letterSpacing: "0.04em",
              color: "transparent",
              WebkitTextStroke: `2px ${gold(0.28)}`,
            }}
          >
            RENU
          </div>
        </>
      )}

      {/* Heat waves rising on the sides, like the bake oven */}
      {variant === "waves" && (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: waveTile, ...masked(SIDES) }}
          />
          <div className="absolute inset-0" style={glow()} />
        </>
      )}
    </div>
  );
}
