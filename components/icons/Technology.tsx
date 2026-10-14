export default function Technology({ className = "" }: { className?: string }) {
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
      {/* Bone outline (vertical, simplified) */}
      <path d="M70 20 Q66 60 66 100 Q66 130 66 170 Q66 195 72 200 L88 200 Q94 195 94 170 Q94 130 94 100 Q94 60 90 20 Z" opacity="0.45" />

      {/* Intramedullary rod (PRECICE-style) */}
      <rect x="76" y="30" width="8" height="160" rx="2" strokeWidth="1.6" />

      {/* Proximal locking screws */}
      <line x1="58" y1="48" x2="102" y2="48" strokeWidth="1.4" />
      <circle cx="58" cy="48" r="2.5" fill="currentColor" />
      <circle cx="102" cy="48" r="2.5" fill="currentColor" />
      <line x1="58" y1="64" x2="102" y2="64" strokeWidth="1.4" />
      <circle cx="58" cy="64" r="2.5" fill="currentColor" />
      <circle cx="102" cy="64" r="2.5" fill="currentColor" />

      {/* Internal magnetic mechanism */}
      <g opacity="0.85">
        <line x1="78" y1="105" x2="82" y2="105" />
        <line x1="78" y1="115" x2="82" y2="115" />
        <circle cx="80" cy="110" r="2" fill="currentColor" />
      </g>

      {/* Distal locking screws */}
      <line x1="58" y1="158" x2="102" y2="158" strokeWidth="1.4" />
      <circle cx="58" cy="158" r="2.5" fill="currentColor" />
      <circle cx="102" cy="158" r="2.5" fill="currentColor" />
      <line x1="58" y1="174" x2="102" y2="174" strokeWidth="1.4" />
      <circle cx="58" cy="174" r="2.5" fill="currentColor" />
      <circle cx="102" cy="174" r="2.5" fill="currentColor" />

      {/* Annotations */}
      <g opacity="0.55">
        <line x1="110" y1="56" x2="125" y2="56" />
        <text x="128" y="59" fontSize="7" fill="currentColor" fontFamily="sans-serif" letterSpacing="0.08em">
          PROXIMAL
        </text>
        <line x1="110" y1="166" x2="125" y2="166" />
        <text x="128" y="169" fontSize="7" fill="currentColor" fontFamily="sans-serif" letterSpacing="0.08em">
          DISTAL
        </text>
      </g>
    </svg>
  );
}
