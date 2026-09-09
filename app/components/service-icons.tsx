type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AutoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M5 20 L7 13 Q8 11 11 11 H21 Q24 11 25 13 L27 20" />
      <rect x="4" y="20" width="24" height="5" rx="1.5" />
      <circle cx="10" cy="25" r="2.2" />
      <circle cx="22" cy="25" r="2.2" />
      <path d="M9 15 H23" />
    </svg>
  );
}

export function MotorcycleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <circle cx="8" cy="23" r="3.5" />
      <circle cx="24" cy="23" r="3.5" />
      <path d="M11.5 23 H20 L24 15 H17" />
      <path d="M13 15 H19 L21 11 H15 Z" />
      <path d="M8 23 L13 15" />
    </svg>
  );
}

export function TractorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <circle cx="10" cy="24" r="4.5" />
      <circle cx="24" cy="24" r="2.8" />
      <path d="M14.5 24 H21.5" />
      <path d="M12 19 V12 H19 L22 19" />
      <path d="M19 12 V8 H23" />
    </svg>
  );
}

export function BoatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M6 20 H26 L23 27 H9 Z" />
      <path d="M16 20 V8" />
      <path d="M16 8 L23 18" />
      <path d="M16 11 L10 18" />
    </svg>
  );
}

export function SumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M16 5 L18.5 10 L24 10.8 L20 14.6 L21 20 L16 17.3 L11 20 L12 14.6 L8 10.8 L13.5 10 Z" />
    </svg>
  );
}
