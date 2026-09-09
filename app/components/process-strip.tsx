type Stage = {
  label: string;
  caption: string;
  fill: string;
  pattern?: "rust" | "hatch" | "none";
};

const TANK_PATH =
  "M14,46 Q14,20 40,20 L84,20 Q110,20 110,46 L110,66 Q110,92 84,92 L40,92 Q14,92 14,66 Z";

const stages: Stage[] = [
  {
    label: "Original condition",
    caption: "Rusted through, leaking, written off by most shops.",
    fill: "var(--color-charcoal)",
    pattern: "rust",
  },
  {
    label: "Sandblasted",
    caption: "Inside and out, down to bare metal. Rust has nothing left to hide in.",
    fill: "var(--color-light-gray)",
    pattern: "hatch",
  },
  {
    label: "Renu coated",
    caption: "Baked on at 360°, three separate coats, top and bottom.",
    fill: "var(--color-moyer-gold)",
    pattern: "none",
  },
  {
    label: "No more rust",
    caption: "Same original tank. Nationwide, lifetime warranty against rust.",
    fill: "var(--color-near-black)",
    pattern: "none",
  },
];

export function ProcessStrip() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 620 200"
        className="w-full min-w-[560px] h-auto"
        role="img"
        aria-label="Four stage tank restoration process: original condition, sandblasted, Renu coated, finished with no more rust"
      >
        <defs>
          <pattern id="rust-fleck" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="var(--color-charcoal)" />
            <circle cx="3" cy="4" r="1.4" fill="var(--color-deep-gold)" opacity="0.9" />
            <circle cx="10" cy="9" r="1.9" fill="var(--color-moyer-gold)" opacity="0.75" />
            <circle cx="7" cy="12" r="1" fill="var(--color-deep-gold)" opacity="0.6" />
          </pattern>
          <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="var(--color-light-gray)" />
            <line x1="0" y1="0" x2="0" y2="8" stroke="var(--color-medium-gray)" strokeWidth="1.4" />
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-deep-gold)" />
          </marker>
        </defs>

        {stages.map((stage, i) => {
          const x = i * 155;
          const fillId =
            stage.pattern === "rust"
              ? "url(#rust-fleck)"
              : stage.pattern === "hatch"
              ? "url(#hatch)"
              : stage.fill;
          const labelColor = stage.label === "Renu coated" ? "var(--color-near-black)" : "var(--color-near-black)";

          return (
            <g key={stage.label} transform={`translate(${x}, 0)`}>
              <path d={TANK_PATH} fill={fillId} stroke="var(--color-near-black)" strokeWidth="1.5" />
              <rect x="55" y="10" width="14" height="14" fill={fillId} stroke="var(--color-near-black)" strokeWidth="1.5" />
              {stage.label === "No more rust" && (
                <rect x="14" y="83" width="96" height="4" fill="var(--color-moyer-gold)" />
              )}
              <text x="62" y="118" textAnchor="middle" className="font-head" fontSize="13" fill={labelColor}>
                {stage.label}
              </text>
              <foreignObject x="0" y="128" width="140" height="60">
                <p className="font-body text-xs leading-snug text-center" style={{ color: "var(--color-medium-gray)" }}>
                  {stage.caption}
                </p>
              </foreignObject>
              {i < stages.length - 1 && (
                <path d="M124,45 L146,45" stroke="var(--color-deep-gold)" strokeWidth="2" markerEnd="url(#arrow)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
