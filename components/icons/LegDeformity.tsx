export default function LegDeformity({ className = "" }: { className?: string }) {
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
      {/* Mechanical axis (reference, vertical) */}
      <line x1="80" y1="20" x2="80" y2="200" strokeDasharray="2 3" opacity="0.35" />

      {/* Femur axis (slightly off vertical, varus) */}
      <line x1="80" y1="25" x2="92" y2="105" strokeWidth="1.6" />

      {/* Knee joint */}
      <circle cx="92" cy="110" r="5" fill="currentColor" opacity="0.85" />

      {/* Tibia axis (angled, varus) */}
      <line x1="92" y1="115" x2="76" y2="195" strokeWidth="1.6" />

      {/* Angle arc indicator */}
      <path d="M85 122 A 18 18 0 0 1 102 115" opacity="0.7" />

      {/* Hip joint marker */}
      <circle cx="80" cy="25" r="3.5" fill="currentColor" opacity="0.85" />

      {/* Ankle marker */}
      <circle cx="76" cy="195" r="3.5" fill="currentColor" opacity="0.85" />

      {/* Annotations dots */}
      <circle cx="80" cy="25" r="9" opacity="0.25" />
      <circle cx="76" cy="195" r="9" opacity="0.25" />
    </svg>
  );
}
