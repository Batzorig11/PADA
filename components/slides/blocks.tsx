import type { CSSProperties, ReactNode } from "react";
import { Brandbar, Cursor, Eyebrow, Footer, type FooterProps } from "./chrome";
import { TrafficDots } from "./CodeWindow";
import { BreakCountdown } from "./BreakCountdown";

/* =====================================================================
   1 · TITLE SLIDE
   ===================================================================== */
export function TitleSlide({
  prompt,
  title,
  subtitle,
  stages,
  label = "Гарчиг",
  grid = true,
}: {
  prompt: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  stages?: ReactNode;
  label?: string;
  grid?: boolean;
}) {
  return (
    <section
      className={`slide s-title${grid ? " grid" : ""}`}
      data-label={label}
    >
      <div className="prompt anim">{prompt}</div>
      <h1 className="anim anim-2">{title}</h1>
      {subtitle && <p className="subtitle anim anim-3">{subtitle}</p>}
      {stages && <div className="stages anim anim-4">{stages}</div>}
    </section>
  );
}

/** Helper to render the blinking cursor inside a title. */
export { Cursor };

/* =====================================================================
   2 · SECTION DIVIDER
   ===================================================================== */
export function SectionDivider({
  page,
  total,
  ghost,
  section,
  title,
  lead,
  label,
}: {
  page: ReactNode;
  total?: ReactNode;
  ghost: ReactNode;
  section: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  label?: string;
}) {
  return (
    <section className="slide s-divider grid" data-label={label}>
      <Brandbar page={page} total={total} />
      <div className="ghost">{ghost}</div>
      <div className="body">
        <div className="ghost-sm anim">{section}</div>
        <h1 className="anim anim-2">{title}</h1>
        {lead && <p className="anim anim-3">{lead}</p>}
      </div>
    </section>
  );
}

/* =====================================================================
   3 · CONCEPT LIST
   ===================================================================== */
export type ConceptItem = { idx: ReactNode; title: ReactNode; desc: ReactNode };

export function ConceptList({
  items,
  num = false,
  compact = false,
  className = "",
  style,
}: {
  items: ConceptItem[];
  /** `num` drops the leading › marker before each index. */
  num?: boolean;
  /** `compact` tightens padding + type so 5+ items fit one slide. */
  compact?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`concept-list${num ? " num" : ""}${compact ? " compact" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={style}
    >
      {items.map((it, i) => (
        <div className="item" key={i}>
          <div className="idx">{it.idx}</div>
          <div>
            <div className="it-title">{it.title}</div>
            <div className="it-desc">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* =====================================================================
   4 · KEY TERM
   ===================================================================== */
export function KeyTerm({
  page,
  total,
  chip = "Гол ойлголт",
  term,
  def,
  note,
  label,
}: {
  page: ReactNode;
  total?: ReactNode;
  chip?: ReactNode;
  term: ReactNode;
  def: ReactNode;
  note?: ReactNode;
  label?: string;
}) {
  return (
    <section className="slide s-keyterm grid" data-label={label}>
      <Brandbar page={page} total={total} />
      <div className="label-chip anim">{chip}</div>
      <h1 className="anim anim-2">{term}</h1>
      <p className="def anim anim-3">{def}</p>
      {note && <div className="note anim anim-4">{note}</div>}
    </section>
  );
}

/* =====================================================================
   6 · BIG NUMBER / STAT
   ===================================================================== */
export function StatSlide({
  page,
  total,
  num,
  statLabel,
  sub,
  label,
}: {
  page: ReactNode;
  total?: ReactNode;
  num: ReactNode;
  statLabel: ReactNode;
  sub?: ReactNode;
  label?: string;
}) {
  return (
    <section className="slide s-stat grid" data-label={label}>
      <Brandbar page={page} total={total} />
      <div className="bignum anim">{num}</div>
      <div className="stat-label anim anim-2">{statLabel}</div>
      {sub && <div className="stat-sub anim anim-3">{sub}</div>}
    </section>
  );
}

/* =====================================================================
   6b · BREAK / ЗАВСАРЛАГА — mid-lesson pause
   ===================================================================== */
export function Break({
  page,
  total,
  mins = 20,
  chip = "Завсарлага",
  title,
  resumeTopic,
  label = "Завсарлага",
}: {
  page: ReactNode;
  total?: ReactNode;
  mins?: ReactNode;
  chip?: ReactNode;
  /** Defaults to "<mins> минут амарцгаая". */
  title?: ReactNode;
  /** What Part 2 picks up with, shown under the number. */
  resumeTopic?: ReactNode;
  label?: string;
}) {
  return (
    <section className="slide s-break grid" data-label={label}>
      <Brandbar page={page} total={total} />
      <div className="brk-chip anim">{chip}</div>
      <div className="bignum anim anim-2">
        <BreakCountdown minutes={Number(mins) || 20} />
      </div>
      <div className="brk-title anim anim-3">
        {title ?? <>{mins} минут амарцгаая</>}
      </div>
      {resumeTopic && (
        <div className="resume anim anim-4">
          Үргэлжлэл: <b>{resumeTopic}</b>
        </div>
      )}
    </section>
  );
}

/* =====================================================================
   9 · COMPARISON TABLE
   ===================================================================== */
export function CompareTable({
  columns,
  rows,
  compact = false,
  className = "",
  style,
}: {
  columns: { head: ReactNode; width?: string }[];
  rows: ReactNode[][];
  /** `compact` tightens padding + type so more rows fit one slide. */
  compact?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <table
      className={`ctable${compact ? " compact" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={style}
    >
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i} style={c.width ? { width: c.width } : undefined}>
              {c.head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* =====================================================================
   10 · DO'S & DON'TS
   ===================================================================== */
export function DosDonts({
  dos,
  donts,
  doHead = "Зөв",
  dontHead = "Буруу",
  className = "",
  style,
}: {
  dos: ReactNode[];
  donts: ReactNode[];
  doHead?: ReactNode;
  dontHead?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`dos-donts${className ? ` ${className}` : ""}`}
      style={style}
    >
      <div className="dd-col do">
        <div className="dd-head">
          <span className="badge" /> {doHead}
        </div>
        <ul>
          {dos.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
      <div className="dd-col dont">
        <div className="dd-head">
          <span className="badge" /> {dontHead}
        </div>
        <ul>
          {donts.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =====================================================================
   11 · EXERCISE / YOUR TURN
   ===================================================================== */
export function Exercise({
  page,
  total,
  tag = "Дасгал",
  title,
  tasks,
  hints,
  time,
  hintsTitle = "Зөвлөмж",
  aside,
  palette,
  paletteTitle = "Өнгөний кодууд",
  label,
}: {
  page: ReactNode;
  total?: ReactNode;
  tag?: ReactNode;
  title: ReactNode;
  tasks: ReactNode[];
  hints?: ReactNode[];
  time?: ReactNode;
  hintsTitle?: ReactNode;
  /** Replaces the default hints aside (e.g. a target screenshot). */
  aside?: ReactNode;
  /** Hex colour codes shown to students under the exercise. */
  palette?: { hex: string; name?: ReactNode }[];
  paletteTitle?: ReactNode;
  label?: string;
}) {
  return (
    <section className="slide s-exercise grid" data-label={label}>
      <Brandbar page={page} total={total} />
      <div className="exercise-tag anim">{tag}</div>
      <h2 className="anim anim-2">{title}</h2>
      <div className="exercise-grid anim anim-3">
        <div className="task-list">
          {tasks.map((t, i) => (
            <div className="task" key={i}>
              <div>{t}</div>
            </div>
          ))}
        </div>
        <div className="exercise-col">
          {aside ?? (
            <div className="exercise-aside">
              <div className="ea-title">{hintsTitle}</div>
              <ul>
                {(hints ?? []).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              {time && <div className="time">{time}</div>}
            </div>
          )}
          {palette && palette.length > 0 && (
            <div className="exercise-palette">
              <div className="ep-title">{paletteTitle}</div>
              <div className="ep-swatches">
                {palette.map((c, i) => (
                  <div className="ep-swatch" key={i}>
                    <span className="ep-chip" style={{ background: c.hex }} />
                    <span className="ep-hex">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   12 · QUOTE / CALLOUT
   ===================================================================== */
export function Callout({
  page,
  total,
  quote,
  attr,
  mark = "“",
  label,
}: {
  page?: ReactNode;
  total?: ReactNode;
  quote: ReactNode;
  attr?: ReactNode;
  mark?: ReactNode;
  label?: string;
}) {
  return (
    <section className="slide s-callout grid" data-label={label}>
      {page !== undefined && <Brandbar page={page} total={total} />}
      <div className="mark anim">{mark}</div>
      <blockquote className="anim anim-2">{quote}</blockquote>
      {attr && <div className="attr anim anim-3">{attr}</div>}
    </section>
  );
}

/* "remember this" boxed variant — drop inside a Frame. */
export function Remember({
  tag = "Санамж",
  children,
  style,
}: {
  tag?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className="remember" style={style}>
      <div className="r-tag">{tag}</div>
      <p>{children}</p>
    </div>
  );
}

/* =====================================================================
   13 · RECAP
   ===================================================================== */
export type RecapCard = { num: ReactNode; title: ReactNode; desc: ReactNode };

export function Recap({
  page,
  total,
  eyebrow,
  title = "Хураангуй",
  cards,
  footer,
  label = "Хураангуй",
}: {
  page: ReactNode;
  total?: ReactNode;
  eyebrow: ReactNode;
  title?: ReactNode;
  cards: RecapCard[];
  footer?: FooterProps;
  label?: string;
}) {
  return (
    <section className="slide" data-label={label}>
      <Brandbar page={page} total={total} />
      <div className="frame">
        <Eyebrow className="anim">{eyebrow}</Eyebrow>
        <h2 className="slide-title anim anim-2">{title}</h2>
        <div className="recap-grid anim anim-3">
          {cards.map((c, i) => (
            <div className="recap-card" key={i}>
              <span className="rc-check">✓</span>
              <div className="rc-num">{c.num}</div>
              <div className="rc-title">{c.title}</div>
              <div className="rc-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {footer && <Footer tag={footer.tag} topic={footer.topic} />}
    </section>
  );
}

/* =====================================================================
   7 · TERMINAL
   ===================================================================== */
export function Terminal({
  title,
  children,
  className = "",
  style,
}: {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`terminal${className ? ` ${className}` : ""}`} style={style}>
      <div className="term-bar">
        <TrafficDots />
        <span className="title">{title}</span>
      </div>
      <div className="term-body">{children}</div>
    </div>
  );
}

/* Terminal line helpers. `$ ` and `▋` prefixes/suffixes come from CSS. */
export function TermComment({ children }: { children: ReactNode }) {
  return <span className="comment">{children}</span>;
}
export function TermCmd({
  children,
  cursor = false,
}: {
  children?: ReactNode;
  cursor?: boolean;
}) {
  return <span className={`cmd${cursor ? " cursor-line" : ""}`}>{children}</span>;
}
export function TermOut({
  children,
  ok = false,
}: {
  children: ReactNode;
  ok?: boolean;
}) {
  return <span className={`out${ok ? " ok" : ""}`}>{children}</span>;
}

/* =====================================================================
   8 · DIAGRAM — boxes & arrows
   ===================================================================== */
export function Diagram({
  children,
  vert = false,
  className = "",
  style,
}: {
  children: ReactNode;
  vert?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`diagram${vert ? " vert" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Node({
  title,
  sub,
  variant,
  style,
}: {
  title: ReactNode;
  sub?: ReactNode;
  variant?: "accent" | "amber";
  style?: CSSProperties;
}) {
  return (
    <div className={`node${variant ? ` ${variant}` : ""}`} style={style}>
      <div className="n-title">{title}</div>
      {sub && <div className="n-sub">{sub}</div>}
    </div>
  );
}

export function Arrow({
  label,
  down = false,
}: {
  label?: ReactNode;
  down?: boolean;
}) {
  return (
    <div className={`arrow${down ? " down" : ""}`}>
      {label && <span className="lbl">{label}</span>}
    </div>
  );
}

/* =====================================================================
   8b · CODE + LIVE RESULT — result pane (white body)
   ===================================================================== */
export function ResultPane({
  bar = "rendered result",
  children,
  bodyStyle,
}: {
  bar?: ReactNode;
  children: ReactNode;
  bodyStyle?: CSSProperties;
}) {
  return (
    <div className="result-pane">
      <div className="rp-bar">{bar}</div>
      <div className="rp-body" style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
