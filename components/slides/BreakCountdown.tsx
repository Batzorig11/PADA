"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Live MM:SS countdown for the break slide's big number.
 *
 * The deck keeps every slide mounted (only the active one is visible), so the
 * timer must not run on mount — it starts when the break slide becomes the
 * active slide (detected via the `data-deck-active` attribute the Deck sets on
 * the `.deck-slide-wrap`) and resets whenever the slide is left and revisited.
 * Click the number to pause / resume.
 */
export function BreakCountdown({ minutes = 20 }: { minutes?: number }) {
  const total = Math.max(0, Math.round(minutes * 60));
  const ref = useRef<HTMLSpanElement>(null);
  const [secs, setSecs] = useState(total);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);

  // Track whether this slide is the active one.
  useEffect(() => {
    const wrap = ref.current?.closest(".deck-slide-wrap");
    if (!wrap) return;
    const update = () => setActive(wrap.hasAttribute("data-deck-active"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(wrap, {
      attributes: true,
      attributeFilter: ["data-deck-active"],
    });
    return () => mo.disconnect();
  }, []);

  // Reset to full whenever the slide (re)activates.
  useEffect(() => {
    if (active) {
      setSecs(total);
      setPaused(false);
    }
  }, [active, total]);

  // Tick once per second while active, running and above zero.
  useEffect(() => {
    if (!active || paused || secs <= 0) return;
    const id = setInterval(() => {
      setSecs((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [active, paused, secs]);

  const mm = Math.floor(secs / 60);
  const ss = secs % 60;
  const text = `${mm}:${String(ss).padStart(2, "0")}`;

  return (
    <span
      ref={ref}
      className="brk-countdown"
      onClick={() => setPaused((p) => !p)}
      title={paused ? "Үргэлжлүүлэх" : "Түр зогсоох"}
      data-done={secs === 0 ? "" : undefined}
      data-paused={paused && secs > 0 ? "" : undefined}
    >
      {text}
    </span>
  );
}
