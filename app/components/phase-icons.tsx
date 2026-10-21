type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M16 4 L28 10 L16 16 L4 10 Z" />
      <path d="M4 10 V22 L16 28 V16" />
      <path d="M28 10 V22 L16 28" />
      <path d="M10 7 L22 13" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M21 6 A5 5 0 1 0 26 11 L21 16 L16 11 Z" />
      <path d="M16 16 L7 25 A2.2 2.2 0 0 0 10 28 L19 19" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M3 10 H18 V21 H3 Z" />
      <path d="M18 14 H24 L28 18 V21 H18 Z" />
      <circle cx="9" cy="23.5" r="2.3" />
      <circle cx="23" cy="23.5" r="2.3" />
    </svg>
  );
}
