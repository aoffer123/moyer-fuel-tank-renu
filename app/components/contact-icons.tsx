type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M9 4 L13 4 L15 10 L12 12 A16 16 0 0 0 20 20 L22 17 L28 19 L28 23 A4 4 0 0 1 24 27 C13 27 5 19 5 8 A4 4 0 0 1 9 4 Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <rect x="4" y="7" width="24" height="18" rx="1" />
      <path d="M5 8.5 L16 17 L27 8.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9 V16 L21 19" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M16 4 C10 4 6 8.5 6 13.5 C6 20.5 16 29 16 29 C16 29 26 20.5 26 13.5 C26 8.5 22 4 16 4 Z" />
      <circle cx="16" cy="13.5" r="3.5" />
    </svg>
  );
}
