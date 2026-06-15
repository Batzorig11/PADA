# erxes · Frontend Lecture Platform

A projector-ready lecture deck for the erxes beginner front-end course
(**HTML & CSS → JavaScript → React & Next.js**). Built with Next.js (App
Router) from the design handoff in `design_handoff_frontend_lecture/`.

Visual direction is **"Terminal Green"** — near-black, monospace throughout,
terminal-green accent. Slides are authored at a fixed **1920×1080** canvas and
scaled to fit any viewport, clicked through with **← / →**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Routes

| Route        | What it is                                                                       |
|--------------|----------------------------------------------------------------------------------|
| `/`          | Course hub / launcher (responsive page) — in Mongolian                           |
| `/stage-01`  | Lesson 01 — **Вэб хөгжүүлэлтийн үндэс**, 31 slides (web basics & history, terminal, frontend/backend, HTML/CSS/JS, basic HTML tags) |
| `/template`  | Blank component kit — one of every slide type with Mongolian placeholders        |

All UI and lecture content is **Mongolian (Cyrillic)**.

## Project layout

```
app/
  layout.tsx          # loads JetBrains Mono + Noto Sans Mono via next/font (cyrillic subsets)
  globals.css         # the whole design system (ported from theme.css) + deck shell styles
  page.tsx            # hub
  hub.module.css      # hub-only scoped styles
  stage-01/page.tsx   # the example lecture
  template/page.tsx   # the component kit
components/
  Deck.tsx            # slide runtime: 1920×1080 scaling, ←/→ nav, ?slide= URL sync
  slides/
    chrome.tsx        # Slide, Frame, Brandbar, Footer, Eyebrow, Cursor
    CodeWindow.tsx    # CodeWindow, Line, syntax tokens (T.tag, T.attr, …), CodeCaption
    blocks.tsx        # TitleSlide, SectionDivider, ConceptList, KeyTerm, StatSlide,
                      # CompareTable, DosDonts, Exercise, Callout, Remember, Recap,
                      # Terminal, Diagram/Node/Arrow, ResultPane
    index.ts          # barrel — import everything from "@/components/slides"
```

## Authoring a new lecture

1. Copy `app/template/page.tsx` to a new route, e.g. `app/stage-02/page.tsx`.
2. Keep the slide components you need, drop the rest, and replace the
   placeholder copy.
3. Wrap the slides in `<Deck>`; each direct child is one slide.
4. Set the brandbar page numbers via the `page` / `total` props (or omit `page`
   to hide the brandbar on a slide).
5. Flip the hub card for that stage from `soon` to `live` in `app/page.tsx`.

### Code blocks

Each `<Line>` is exactly one source line (whitespace in `<pre>` is literal — use
the `indent` prop for leading spaces). Wrap tokens in `T.tag` / `T.attr` /
`T.str` / `T.kw` / `T.fn` / `T.num` / `T.com` / `T.punct` / `T.sel` / `T.prop`.
Per-line teaching states: `state="hl"` (focus), `"dim"`, `"add"`, `"del"`.

### Internationalisation

Content is taught in **Mongolian (Cyrillic)**. `<html lang="mn">` is set in
`layout.tsx`, and the fonts load the `cyrillic` + `cyrillic-ext` subsets (covers
Ө ө / Ү ү). Keep both fonts in the stack.

## Notes

- The deck reimplements the handoff's `deck-stage.js` behaviour idiomatically
  (scaling, keyboard nav, deep-linkable `?slide=`, print-to-PDF). The original
  script was a reference only and is **not** used.
- Entrance animations (`.anim`, staggered by `.anim-2/3/4`) are gated on
  `[data-deck-active]` + `prefers-reduced-motion`, so print and reduced-motion
  always show the final state.
# PADA
