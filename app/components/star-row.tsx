export function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width="14"
          height="14"
          fill={i < count ? "var(--color-moyer-gold)" : "none"}
          stroke="var(--color-moyer-gold)"
          strokeWidth="1"
        >
          <path d="M10 1.5 L12.5 7 L18.5 7.7 L14 11.8 L15.3 18 L10 14.8 L4.7 18 L6 11.8 L1.5 7.7 L7.5 7 Z" />
        </svg>
      ))}
    </div>
  );
}
