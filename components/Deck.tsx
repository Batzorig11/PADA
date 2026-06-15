"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Deck — the slide-runtime shell. Reimplements the behaviour of the handoff's
 * `deck-stage.js` (which we were told to recreate, not port):
 *
 *  1. Fixed-canvas scaling. Slides are authored at exactly 1920×1080; we scale
 *     the canvas with `transform: scale(min(vw/1920, vh/1080))`, letterboxed on
 *     near-black, recomputed on resize.
 *  2. Keyboard nav. → / Space / PageDown = next; ← / PageUp = prev; Home/End =
 *     first/last. Clamped at the ends.
 *  3. One slide active at a time. All slides stay mounted (state preserved); the
 *     active one gets `data-deck-active` (entrance animations key off this) and
 *     is the only visible one.
 *  4. Deep-linkable index, mirrored to `?slide=N` so refresh keeps position.
 *  5. Print falls back to the @media print rules in globals.css (one page each).
 */
export default function Deck({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const indexRef = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep the URL (?slide=N, 1-indexed) in sync so a refresh keeps position.
  const syncUrl = useCallback((i: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(i + 1));
    window.history.replaceState(null, "", url);
  }, []);

  const flashOverlay = useCallback(() => {
    setOverlayVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOverlayVisible(false), 1800);
  }, []);

  const go = useCallback(
    (target: number, showOverlay = true) => {
      const next = Math.max(0, Math.min(total - 1, target));
      indexRef.current = next;
      setIndex(next);
      syncUrl(next);
      if (showOverlay) flashOverlay();
    },
    [total, syncUrl, flashOverlay]
  );

  // Restore initial index from ?slide= (or #N).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("slide");
    const fromHash = window.location.hash.match(/^#(\d+)$/);
    const raw = fromQuery ?? (fromHash ? fromHash[1] : null);
    if (raw) {
      const n = parseInt(raw, 10) - 1;
      if (!Number.isNaN(n) && n >= 0 && n < total) {
        indexRef.current = n;
        setIndex(n);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fixed-canvas scaling.
  useEffect(() => {
    const fit = () =>
      setScale(
        Math.min(window.innerWidth / 1920, window.innerHeight / 1080)
      );
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          go(indexRef.current + 1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          go(indexRef.current - 1);
          break;
        case "Home":
          e.preventDefault();
          go(0);
          break;
        case "End":
          e.preventDefault();
          go(total - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  // Surface the nav overlay briefly on pointer movement.
  useEffect(() => {
    const onMove = () => flashOverlay();
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [flashOverlay]);

  return (
    <div className="deck-stage">
      <div
        className="deck-canvas"
        style={{ transform: `scale(${scale})` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="deck-slide-wrap"
            {...(i === index ? { "data-deck-active": "" } : {})}
            style={{
              visibility: i === index ? "visible" : "hidden",
              opacity: i === index ? 1 : 0,
            }}
            aria-hidden={i === index ? undefined : true}
          >
            {slide}
          </div>
        ))}
      </div>

      <div
        className="deck-overlay"
        role="toolbar"
        aria-label="Deck controls"
        {...(overlayVisible ? { "data-visible": "" } : {})}
      >
        <button
          type="button"
          aria-label="Previous slide"
          title="Previous (←)"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <span className="count" aria-live="polite">
          <span className="current">{index + 1}</span>
          <span className="sep">/</span>
          <span className="total">{total}</span>
        </span>
        <button
          type="button"
          aria-label="Next slide"
          title="Next (→)"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
