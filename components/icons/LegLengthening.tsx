export default function LegLengthening({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Mechanical axis reference */}
      <line x1="80" y1="10" x2="80" y2="210" strokeDasharray="2 3" opacity="0.35" />

      {/* Femur (top bone) */}
      <path d="M65 20 Q60 50 60 78 Q60 92 65 96 L95 96 Q100 92 100 78 Q100 50 95 20 Z" opacity="0.9" />

      {/* Distraction gap markers */}
      <g opacity="0.7">
        <ellipse cx="80" cy="106" rx="20" ry="3.5" />
        <ellipse cx="80" cy="138" rx="20" ry="3.5" />
      </g>

      {/* Tibia (bottom bone) */}
      <path d="M68 148 Q64 175 64 195 Q64 205 70 205 L90 205 Q96 205 96 195 Q96 175 92 148 Z" opacity="0.9" />

      {/* Distraction arrows */}
      <g opacity="0.85">
        <line x1="130" y1="106" x2="130" y2="138" />
        <path d="M127 109 L130 106 L133 109" />
        <path d="M127 135 L130 138 L133 135" />
      </g>

      {/* Measurement bracket */}
      <g opacity="0.6">
        <line x1="125" y1="106" x2="135" y2="106" />
        <line x1="125" y1="138" x2="135" y2="138" />
      </g>
    </svg>
  );
}
