type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// shared small tank silhouette, reused across every step icon so the set
// reads as one family (same base shape as the homepage process strip)
const TANK = "M8,20 Q8,10 18,10 L34,10 Q44,10 44,20 L44,30 Q44,38 34,38 L18,38 Q8,38 8,30 Z";
const NECK = "M20,4 H28 V10 H20 Z";

export function DefumeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} />
      <path d={NECK} />
      <path d="M14 2 Q12 -1 14 -4" transform="translate(0,4)" />
      <path d="M24 2 Q22 -1 24 -4" transform="translate(0,4)" />
      <path d="M34 2 Q32 -1 34 -4" transform="translate(0,4)" />
      <circle cx="38" cy="30" r="6" />
      <path d="M42.5 34.5 L46 38" />
    </svg>
  );
}

export function AccessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} />
      <path d={NECK} strokeDasharray="2 2" />
      <path d="M24 14 V24" strokeDasharray="2 2" />
      <path d="M24 24 L20 20 M24 24 L28 20" />
    </svg>
  );
}

export function SandblastIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} />
      <path d={NECK} />
      <path d="M2 8 L9 16" />
      <circle cx="4" cy="4" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="6" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RepairIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} />
      <path d={NECK} />
      <path d="M8 27 L18 27 L21 21 L26 31 L29 25 L44 25" />
      <path d="M30 12 L32 16 L28 17 L31 21" strokeWidth="1.2" />
    </svg>
  );
}

export function InteriorRenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} />
      <path d={NECK} />
      <path d="M17 -2 L24 6 L31 -2" transform="translate(0,4)" />
      <path d="M24 4 V12" transform="translate(0,4)" />
      <path d="M10 30 H42" strokeDasharray="2 2" />
    </svg>
  );
}

export function CureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <rect x="2" y="2" width="44" height="44" rx="2" />
      <path d={TANK} transform="translate(0,1) scale(0.82)" />
      <path d="M8 8 Q10 5 8 2" strokeWidth="1.2" />
      <path d="M40 8 Q42 5 40 2" strokeWidth="1.2" />
    </svg>
  );
}

export function ExteriorFinishIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} fill="currentColor" fillOpacity="0.12" />
      <path d={NECK} />
      <path d="M13 15 L17 23" strokeWidth="1.2" opacity="0.6" />
      <path d="M2 8 H8 V16 H2 Z" />
      <path d="M8 12 H12" />
    </svg>
  );
}

export function QualityControlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d={TANK} />
      <path d={NECK} />
      <circle cx="38" cy="30" r="8" />
      <path d="M34.5 30 L37 32.5 L42 27" />
    </svg>
  );
}
