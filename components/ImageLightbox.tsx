"use client";

import { useEffect, useState } from "react";

export default function ImageLightbox({
  images,
  className,
  imgClassName = "w-full h-auto",
  aspect,
  fit = "cover",
  letterboxBg = "bg-black",
}: {
  images: string[];
  className?: string;
  imgClassName?: string;
  /** Tailwind aspect-ratio class (e.g. "aspect-[3/4]"). When set, every thumbnail sits in this uniform box instead of keeping its natural size. */
  aspect?: string;
  /** "cover" crops to fill the box (default); "contain" letterboxes so nothing is cropped. */
  fit?: "cover" | "contain";
  /** Background shown behind a "contain"-fit image where it doesn't fill the box. */
  letterboxBg?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // A grid sized for more photos than we actually have leaves empty trailing
  // columns (or a short last row), pinning the real ones to the left. Any
  // count that wouldn't cleanly fill the grid's own column count instead
  // renders as one centered row, every item capped to a sensible width —
  // except a lone educational diagram (fit="contain"), which spans the full
  // row so it stays legible.
  const gridColsMatch = (className ?? "").match(/grid-cols-(\d+)/g);
  const maxGridCols = gridColsMatch
    ? Math.max(...gridColsMatch.map((c) => parseInt(c.replace("grid-cols-", ""), 10)))
    : images.length;
  const strippedClassName = (className ?? "")
    .replace(/\bgrid\b|grid-cols-\d+|sm:grid-cols-\d+/g, "")
    .trim();
  const tilesEvenly = images.length > 0 && images.length % maxGridCols === 0;
  const isLoneDiagram = images.length === 1 && fit === "contain";
  const needsCenteredRow = images.length > 0 && !tilesEvenly && !isLoneDiagram;

  const gapMatch = (className ?? "").match(/gap-(\d+)/);
  const gapRem = gapMatch ? parseInt(gapMatch[1], 10) * 0.25 : 0.75;
  const perItemMaxWidthRem = images.length === 1 ? 36 : 22;

  const wrapperClassName = isLoneDiagram || needsCenteredRow ? strippedClassName : className;
  const wrapperStyle = needsCenteredRow
    ? {
        display: "grid",
        gridTemplateColumns: `repeat(${images.length}, minmax(0, ${perItemMaxWidthRem}rem))`,
        justifyContent: "center" as const,
        gap: `${gapRem}rem`,
      }
    : undefined;
  const singleItemClassName = "w-full";

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length]);

  return (
    <>
      <div className={wrapperClassName} style={wrapperStyle}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`block ${singleItemClassName} self-start rounded-[8px] overflow-hidden border border-hairline cursor-zoom-in transition-opacity hover:opacity-90 ${aspect ?? ""} ${aspect && fit === "contain" ? letterboxBg : ""}`}
          >
            <img
              src={src}
              alt=""
              className={aspect ? (fit === "contain" ? "w-full h-full object-contain" : "w-full h-full object-cover") : imgClassName}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl leading-none transition-colors"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
                aria-label="Previous"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl leading-none transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
                }}
                aria-label="Next"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl leading-none transition-colors"
              >
                ›
              </button>
            </>
          )}

          <img
            src={images[openIndex]}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
