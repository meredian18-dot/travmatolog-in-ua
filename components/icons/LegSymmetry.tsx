export default function LegSymmetry({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Ground line */}
      <line x1="20" y1="200" x2="180" y2="200" opacity="0.4" />

      {/* Pelvis line */}
      <line x1="55" y1="30" x2="145" y2="30" opacity="0.6" strokeWidth="1.4" />

      {/* Left leg (shorter) */}
      <path d="M70 32 Q66 70 66 105 Q66 115 70 117 L80 117 Q84 115 84 105 Q84 70 80 32 Z" opacity="0.9" />
      <path d="M70 125 Q66 155 66 180 L84 180 Q84 155 80 125 Z" opacity="0.9" />
      {/* Ground gap (shorter leg) */}
      <line x1="60" y1="180" x2="90" y2="180" opacity="0.5" />

      {/* Right leg (reference, full length) */}
      <path d="M120 32 Q116 70 116 110 Q116 122 120 124 L130 124 Q134 122 134 110 Q134 70 130 32 Z" opacity="0.9" />
      <path d="M120 132 Q116 165 116 200 L134 200 Q134 165 130 132 Z" opacity="0.9" />

      {/* Delta bracket between leg ends */}
      <g opacity="0.7">
        <line x1="40" y1="180" x2="40" y2="200" />
        <line x1="35" y1="180" x2="45" y2="180" />
        <line x1="35" y1="200" x2="45" y2="200" />
      </g>

      {/* Labels */}
      <text x="20" y="218" fontSize="7" fill="currentColor" opacity="0.55" fontFamily="sans-serif" letterSpacing="0.1em">
        SHORT
      </text>
      <text x="115" y="218" fontSize="7" fill="currentColor" opacity="0.55" fontFamily="sans-serif" letterSpacing="0.1em">
        REFERENCE
      </text>
    </svg>
  );
}
