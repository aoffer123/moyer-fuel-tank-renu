// Small angled number badge, reused across the customer-journey and
// process-infographic sections. The clipped corner echoes the "80+ years"
// badge treatment already used on the homepage About-us photo.
export function StepBadge({ number }: { number: string | number }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center font-head text-lg font-bold"
      style={{
        background: "var(--color-moyer-gold)",
        color: "var(--color-near-black)",
        clipPath: "polygon(0 0, 100% 0, 100% 78%, 78% 100%, 0 100%)",
      }}
    >
      {number}
    </span>
  );
}
