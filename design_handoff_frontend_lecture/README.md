# Handoff: erxes Frontend Lecture Platform

## Overview
A projector-ready lecture platform for teaching a beginner front-end course at **erxes**. The course runs in three stages — **HTML & CSS → JavaScript → React & Next.js**. The deliverable is a reusable slide-deck system: a shared theme, a blank component kit ("template"), one fully built example lecture (Stage 01), and a hub page that links the stages.

Visual direction is **"Terminal Green"** — a near-black code-editor aesthetic, monospace throughout, terminal-green primary accent. Slides are a fixed **1920×1080** canvas designed to be projected and clicked through (← / →).

## About the Design Files
The files in `design-files/` are **design references created in HTML/CSS** — working prototypes that show the intended look and behaviour. They are **not** meant to be shipped verbatim. Your task is to **recreate these designs inside the target codebase** (a **Next.js** app is the stated target) using its established patterns, component conventions, and font loading — or, if the project is greenfield, to scaffold a Next.js app and implement them there.

The good news: the styling is already framework-agnostic, class-based CSS with design tokens as CSS variables, so the port is mechanical. Specific Next.js notes are in every relevant section below and at the top of `design-files/theme.css`.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are all specified here and present in the files. Recreate the UI pixel-perfectly. Exact hex values, font sizes, and spacing are listed in **Design Tokens** and per-component below.

---

## Internationalization (IMPORTANT)
Course content is taught in **Mongolian (Cyrillic)**. The chosen typeface **JetBrains Mono fully covers Mongolian Cyrillic** including the extended letters **Ө ө / Ү ү**. **Noto Sans Mono** is loaded as a fallback ("no-tofu" safety net). Keep both in the font stack. Always set `<html lang="mn">` (or the appropriate locale) and ensure `<meta charset="UTF-8">`. Verified strings that must render correctly: `Сайн байна уу!`, `Вэб хөгжүүлэлт`, `Үсэг, өгүүлбэр, бүтэц`.

---

## Architecture / Files

| File | Role |
|------|------|
| `theme.css` | The entire design system — tokens + every component class. Port to `globals.css`. |
| `index.html` | Course hub / landing page. Links to each stage and the template. |
| `Stage 01 — HTML & CSS.html` | The example lecture, 30 slides, every component used in context. The reference for "what good looks like." |
| `Lecture Template.html` | Blank component kit — one of each component with placeholder text and an HTML comment above each documenting its slots. |
| `deck-stage.js` | The slide-deck shell web component (`<deck-stage>`): scaling/letterboxing, keyboard nav, thumbnail rail, print-to-PDF. **Third-party scaffold — replace, don't port** (see Deck Shell section). |

### Recommended Next.js structure
```
app/
  layout.tsx            // loads fonts via next/font/google, imports globals.css
  page.tsx              // the hub (index.html)
  stage-01/page.tsx     // Stage 01 lecture
  stage-02/page.tsx     // (future)
styles/
  globals.css           // <- theme.css tokens + component classes
components/
  Deck.tsx              // slide shell: scaling, keyboard nav (replaces deck-stage.js)
  slides/               // one component per slide type
    TitleSlide.tsx  SectionDivider.tsx  ConceptList.tsx  KeyTerm.tsx
    StatSlide.tsx   CodeWindow.tsx      CodeResult.tsx   BeforeAfter.tsx
    Terminal.tsx    Diagram.tsx         CompareTable.tsx DosDonts.tsx
    Exercise.tsx    Callout.tsx         Remember.tsx     Recap.tsx
```
Each `.slide` in the HTML maps 1:1 to a slide component. Props are just the text/code slots called out per component below.

---

## Design Tokens

Port these verbatim. In the HTML they live in `:root` in `theme.css`.

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#080a08` | Stage background (near-black) |
| `--panel` | `#0e120e` | Card / code-window body |
| `--panel2` | `#121a12` | Raised titlebars, ghost fills |
| `--border` | `#203020` | Hairlines |
| `--border-lit` | `#2c452c` | Brighter hairline / node borders |
| `--fg` | `#d4e6d0` | Primary text |
| `--fg-dim` | `#9fc09a` | Secondary text |
| `--muted` | `#6f8a6a` | Tertiary text / line numbers |
| `--accent` | `#39d353` | **Primary — terminal green** |
| `--accent2` | `#e3b341` | Secondary — amber (warnings, "coming up") |
| `--danger` | `#f7768e` | Errors / "don't" / removed lines |

### Syntax-highlight tokens
| Token | Hex | Applies to |
|-------|-----|-----------|
| `--s-kw` | `#e3b341` | keywords |
| `--s-str` | `#39d353` | strings |
| `--s-fn` | `#7fd6a0` | functions |
| `--s-tag` | `#39d353` | HTML tags |
| `--s-attr` | `#b7e36a` | attributes |
| `--s-num` | `#b7e36a` | numbers |
| `--s-com` | `#4f6b4f` | comments (italic) |
| `--s-punct` | `#9fc09a` | punctuation |
| `--s-sel` | `#7fd6a0` | CSS selectors |
| `--s-prop` | `#b7e36a` | CSS properties |

### Typography
- **Font family:** `'JetBrains Mono', 'Noto Sans Mono', ui-monospace, 'SF Mono', 'Cascadia Code', Menlo, Consolas, monospace`
- Single typeface for everything (headings + body + code) — this is core to the aesthetic.
- **Next.js:** load with `next/font/google`:
  ```ts
  import { JetBrains_Mono, Noto_Sans_Mono } from 'next/font/google'
  const mono = JetBrains_Mono({ subsets: ['latin','cyrillic','cyrillic-ext'], weight: ['400','500','700','800'], variable: '--font-mono' })
  const notoMono = Noto_Sans_Mono({ subsets: ['latin','cyrillic'], weight: ['400','700'], variable: '--font-noto-mono' })
  ```
  **Note the `cyrillic` and `cyrillic-ext` subsets** — required for Mongolian. Then set `--font-mono` in CSS to `var(--font-mono), var(--font-noto-mono), monospace`.

### Type scale (at 1920×1080, 1:1 px)
| Role | Size / weight / line-height | Notes |
|------|------|------|
| Title slide H1 | 150px / 800 / 0.96 | `text-transform: uppercase; letter-spacing: -0.02em` |
| Section divider H1 | 110px / 800 / 0.98 | uppercase |
| Key-term H1 | 132px / 800 / 0.98 | uppercase, `-0.02em` |
| Big stat number | 380px / 800 / 0.82 | color `--accent` |
| Slide title (`.slide-title`) | 76px / 800 / 1.02 | `.sm` variant = 60px |
| Quote (`blockquote`) | 78px / 700 / 1.18 | |
| Lead paragraph (`.lead`) | 36px / 400 / 1.45 | color `--fg-dim` |
| Eyebrow / kicker | 26px / 500 | uppercase, `letter-spacing: 0.16em`, accent, 42×3px rule before |
| Code (`.codewin pre`) | 32px / 1.62 | `.sm` = 27px |
| Body / list copy | 30–34px / ~1.45 | |
| Brandbar / footer | 22px / 20px | muted |

### Shape & geometry
- `--radius: 3px`, `--radius-lg: 4px` (very low rounding — sharp, terminal feel).
- Slide padding: `--px: 130px` (horizontal), `--py: 96px` (top). `.frame` uses these for the standard content box.
- Brandbar pinned `top: 54px`; footer pinned `bottom: 52px`, both inset by `--px`.

### Texture (optional)
- `.slide.grid` overlays a 64×64px faint grid (two linear-gradients at `--border`, opacity 0.18).
- `.slide::after` radial vignette for depth — `radial-gradient(ellipse 90% 70% at 50% 42%, transparent 55%, rgba(0,0,0,0.45))`.

---

## The Deck Shell (replace, don't port)
`deck-stage.js` is a **third-party starter scaffold** that provides the slide runtime: it scales the fixed 1920×1080 `<section class="slide">` children to fit any viewport (letterboxing on black), handles ← / → / Home keyboard nav, a thumbnail rail, and print-to-PDF (one page per slide). **Do not copy this file** — recreate its behavior idiomatically:

**Required deck behaviors to reimplement:**
1. **Fixed-canvas scaling.** Each slide is authored at exactly 1920×1080. Wrap in a full-viewport stage with `background:#050705`; compute `scale = min(vw/1920, vh/1080)` and apply `transform: scale()` to the slide, centered (letterbox). Recompute on resize.
2. **Keyboard nav.** → / Space / PageDown = next; ← / PageUp = prev; Home = first. Clamp at ends.
3. **One slide visible at a time.** Render the active slide; set a `data-deck-active` attribute on it (the entrance animations key off this — see below).
4. **Deep-linkable index** (nice-to-have): keep current slide in the URL (`?slide=12` or hash) so refresh keeps position.
5. **Print to PDF** (nice-to-have): a print stylesheet that lays one slide per page at full size.

**Entrance animation contract:** elements with class `.anim` start at `opacity:0; translateY(22px)` and rise into place via the `rise` keyframe **only** when an ancestor has `[data-deck-active]` and `prefers-reduced-motion: no-preference`. Stagger classes `.anim-2 / .anim-3 / .anim-4` add 0.08s/0.16s/0.24s delays. This gating means **print and reduced-motion show the final state** (content visible), never the pre-animation hidden state — preserve this when you reimplement.

---

## Components (Screens / Views)

All components are a `<section class="slide ...">`. Most use a `.brandbar` (top: erxes/frontend logo + page number) and many a `.footer` (section tag + topic). The example lecture (`Stage 01`) shows each in context — reference it for exact copy. Below: the structure, slots, and styling of each.

### 1 · Title (`.slide.s-title`)
- **Purpose:** open the lecture / close it ("Questions?").
- **Slots:** `.prompt` (small green line, prefixed with `$ `), `h1` (150px uppercase, may contain `<br>` and a blinking `.cursor` block), `.subtitle` (40px, `--fg-dim`), `.stages` (the 3-stage progress row; current stage gets `.on` = accent, separators `→` with `.sep` at 0.4 opacity).
- Vertically centered, padded by `--px`. `.cursor` is a 0.6em×0.92em accent block blinking at 1.1s steps.

### 2 · Section Divider (`.slide.s-divider`)
- **Purpose:** chapter break.
- **Slots:** `.ghost` (giant outlined number, ~460px, transparent fill + `-webkit-text-stroke: 2px --border-lit`, absolute right, vertically centered), `.ghost-sm` ("SECTION 0N" eyebrow), `h1` (110px uppercase), `p` (38px framing line).

### 3 · Concept List (`.slide` + `.concept-list`)
- **Purpose:** ordered points with a title + description each.
- **Structure:** `.eyebrow` + `.slide-title`, then `.concept-list` of `.item` rows. Each `.item` = `.idx` (number, accent, prefixed `›` — add `.num` to `.concept-list` to drop the `›`) + a block with `.it-title` (44px/600) and `.it-desc` (30px, `--fg-dim`). Rows separated by `1px --border` top borders; vertical padding 28px.

### 4 · Two-Column Bullets (`.slide` + `ul.bullets`)
- **Purpose:** denser short points. CSS `columns: 2; column-gap: 90px`. `li` = 34px, `--fg-dim`, custom `▹` marker in accent, `<b>` term in `--fg`.

### 5 · Key Term (`.slide.s-keyterm`)
- **Purpose:** define one term, big.
- **Slots:** `.label-chip` (pill, amber, prefixed `//`), `h1` (132px uppercase — the term), `.def` (46px definition, `<b>` lead in accent), `.note` (absolute bottom-right aside).

### 6 · Big Number / Stat (`.slide.s-stat`)
- **Slots:** `.bignum` (380px accent), `.stat-label` (48px), `.stat-sub` (30px muted). Left-aligned, vertically centered.

### 7 · Code Window (`.codewin`)
- **The core component.** Structure: `.titlebar` (three traffic-light `.dot`s at #ff5f56/#ffbd2e/#27c93f, `.fname` with `<b>` filename, `.lang` tag right-aligned) + `<pre>` of `.line` spans.
- **Critical authoring rule:** each `.line` must be a single source line — whitespace inside `<pre>` is literal. Indent with leading spaces inside the span.
- **Modifiers:** `.numbered` (gutter line numbers via CSS counter), `.sm` (27px font).
- **Line states:** `.hl` (highlighted/focused — accent tint + 4px left bar), `.dim` (de-emphasized, opacity 0.34), `.add` / `.del` (diff green/red tints).
- **Syntax tokens:** wrap code in `<span class="tk-tag|tk-attr|tk-str|tk-kw|tk-fn|tk-num|tk-com|tk-punct|tk-sel|tk-prop">`. (In a real codebase, prefer a syntax highlighter like Shiki/Prism themed to these token colors rather than hand-spanning — but keep the `.hl/.dim/.add/.del` line-state layer on top, since step-highlighting is a teaching feature.)
- **Caption:** `.code-caption` below (30px, `→ ` accent prefix).

### 8 · Code + Live Result (`.code-split`)
- Two-column grid: left `.codewin.sm`, right `.result-pane` (white `#fff` body with `.rp-bar` label + `.rp-body`) showing the actual rendered output. Used to show CSS/HTML producing a visible result.

### 9 · Before / After (`.compare`)
- Two-column grid. `.bad` column (red, `✕` badge, `Before`) and `.good` column (green, `✓` badge, `After`), each containing a `.codewin.sm`. Use `.del` / `.add` line states inside.

### 10 · Terminal (`.terminal`)
- Darker (`#050705`) window with `.term-bar` titlebar. Body lines: `.comment` (italic, `--s-com`), `.cmd` (auto `$ ` accent prefix; `.flag` amber, `.arg` attr-green inside), `.out` (muted; `.ok` = green), `.cursor-line` (trailing blinking `▋`).

### 11 · Diagram (`.diagram`)
- Boxes & arrows. `.node` (panel box; `.accent` = green border + inset ring, `.amber` variant) with `.n-title` + `.n-sub`. `.arrow` = 200px horizontal connector with a CSS triangle head and optional `.lbl` chip (boxed, sits above the line). `.arrow.down` = vertical variant. `.diagram.vert` stacks. Used for client/server flow and the DOM tree (nested via flex columns).
- Box-model diagram (slide 20) is built from nested padded `<div>`s with dashed borders in danger/amber/accent/`--border-lit`, labels top-left of each layer.

### 12 · Comparison Table (`.ctable`)
- Full-width. `thead th` = 23px uppercase accent, brighter bottom border. `td` first-child = `--fg`/600, rest `--fg-dim`. Row hover = faint accent wash. Inline `<code>` / `.inline-code` = panel2 bg, accent text, small border.

### 13 · Do's & Don'ts (`.dos-donts`)
- Two columns: `.dd-col.do` (green header, `✓` badge, `+` bullet markers) and `.dd-col.dont` (red header, `✕` badge, `−` markers). Header has a tinted background; list items separated by dashed borders.

### 14 · Exercise (`.slide.s-exercise`)
- **Slots:** `.exercise-tag` ("Your turn" — solid accent pill on bg, `▶` prefix), `h2` (72px), then `.exercise-grid` (1.1fr / 0.9fr): left `.task-list` (`.task` rows auto-numbered `01, 02…` via counter, leading-zero, accent), right `.exercise-aside` (panel with amber left border, `.ea-title` "Hints", `ul`, and a `.time` row `⏱ NN minutes`).

### 15 · Quote / Callout (`.slide.s-callout`)
- **Slots:** `.mark` (giant `"` in `--border-lit`), `blockquote` (78px/700; wrap key words in `.hi` = accent), `.attr` (muted, `// ` prefix). Vertically centered.

### 16 · Remember (boxed) (`.remember`)
- A boxed callout you drop inside a `.frame`: panel bg, 4px accent left border, `.r-tag` "Remember" with `★` prefix, `p` at 46px/600 with `<b>` in accent. Good mid-content emphasis vs. the full-bleed quote.

### 17 · Recap (`.recap-grid`)
- 2×2 grid of `.recap-card` (panel boxes). Each: `.rc-num` (accent), `.rc-title` (38px uppercase), `.rc-desc` (27px dim), and an absolute `.rc-check` ✓ top-right.

### Hub page (`index.html`)
- **Purpose:** course landing / launcher (this is a normal responsive page, **not** a 1920×1080 slide).
- **Layout:** centered max-width 1280px column; `header` (logo + meta), eyebrow + `h1` (clamp 48–112px uppercase with blinking cursor), intro paragraph, then a 3-column `.stages` grid (collapses to 1 column under 880px).
- **Stage cards:** `.stage.live` (Stage 01 — green "Ready" badge, hover lifts `translateY(-4px)` + green border, `→` foot arrow that slides on hover, links to the lecture) and `.stage.soon` (Stages 02/03 — muted "Soon" badge, 0.72 opacity, no link yet). A `.tools` row links to the template.
- Background: same near-black + 64px grid + radial fade as the slides.

---

## Interactions & Behavior
- **Navigation:** ← / → (and Space / PageUp-Down / Home) move between slides; see Deck Shell. Clicking a hub stage card opens that lecture.
- **Entrance animations:** `.anim` rise-in, staggered by `.anim-2/3/4`, gated on `[data-deck-active]` + `prefers-reduced-motion`. ~0.5s, `cubic-bezier(0.2,0.7,0.2,1)`, `both` fill.
- **Blinking cursor:** `.cursor` and `.cursor-line::after` blink at 1.1s `steps(1)`; disabled under reduced-motion.
- **Hover states:** hub stage cards (lift + accent border + arrow slide); table rows (faint accent wash); hub tool/links (accent border + brighter text). Slides themselves are static once entered.
- **Responsive:** slides scale as a whole (fixed canvas, never reflow). Only the hub page is fluid/responsive.

## State Management
Minimal. The only real state is **current slide index** (integer), driven by keyboard/navigation, ideally mirrored to the URL for refresh-safety. No data fetching. Slide content is static. If you build an authoring layer later, slide content could come from MDX/JSON, but that's out of scope for this handoff.

## Assets
- **Fonts:** JetBrains Mono + Noto Sans Mono (Google Fonts) — load via `next/font/google` with cyrillic subsets. No other web fonts.
- **Icons/emoji:** a few inline glyphs only (`✓ ✕ + − › ▹ ★ ⏱ ▶ ▋ → "`). No icon library, no image assets, no SVGs to extract. Traffic-light dots are plain colored circles.
- **Logo:** "erxes/frontend" set in type (the `/` is accent-colored) — no image file.

## Files (in this bundle)
- `design-files/theme.css` — design system (port to `globals.css`)
- `design-files/index.html` — hub page reference
- `design-files/Stage 01 — HTML & CSS.html` — example lecture, all components in context
- `design-files/Lecture Template.html` — blank component kit with inline slot docs
- `design-files/deck-stage.js` — deck runtime reference (reimplement, don't copy)

## Suggested first prompt to Claude Code
> Read `design_handoff_frontend_lecture/README.md` and the files in `design-files/`. Set up (or use our existing) Next.js app: load JetBrains Mono + Noto Sans Mono via next/font with cyrillic subsets, port `theme.css` into `globals.css`, and build a `Deck` component that scales fixed 1920×1080 slides to the viewport with ← / → nav. Then implement each slide-type as a component under `components/slides/`, matching the tokens and specs in the README. Recreate the Stage 01 lecture and the hub page pixel-perfectly. Keep Mongolian Cyrillic rendering intact.
