import type { CSSProperties, ReactNode } from "react";

/* Traffic-light dots shared by code windows and terminals. */
export function TrafficDots() {
  return (
    <>
      <span className="dot" style={{ background: "#ff5f56" }} />
      <span className="dot" style={{ background: "#ffbd2e" }} />
      <span className="dot" style={{ background: "#27c93f" }} />
    </>
  );
}

/**
 * Syntax tokens. In a production codebase you'd reach for Shiki/Prism themed
 * to these token colours, but the teaching feature here is per-line
 * step-highlighting (`.hl` / `.dim` / `.add` / `.del`), so we keep the spans
 * explicit and composable. Token colours come from the --s-* CSS variables.
 */
type TkProps = { children: ReactNode };
const tk = (cls: string) =>
  function Token({ children }: TkProps) {
    return <span className={cls}>{children}</span>;
  };

export const T = {
  kw: tk("tk-kw"),
  str: tk("tk-str"),
  fn: tk("tk-fn"),
  tag: tk("tk-tag"),
  attr: tk("tk-attr"),
  num: tk("tk-num"),
  com: tk("tk-com"),
  punct: tk("tk-punct"),
  sel: tk("tk-sel"),
  prop: tk("tk-prop"),
};

type LineState = "hl" | "dim" | "add" | "del";

/**
 * A single source line inside a <pre>. Whitespace in <pre> is literal, so pass
 * indentation explicitly, e.g. `<Line indent={2}>…</Line>` or a leading
 * `{"  "}` string. Each Line must hold exactly one source line.
 */
export function Line({
  children,
  state,
  indent = 0,
  gutter = false,
}: {
  children?: ReactNode;
  state?: LineState;
  indent?: number;
  gutter?: boolean;
}) {
  return (
    <span className={`line${state ? ` ${state}` : ""}`}>
      {gutter && <span className="gut" />}
      {indent > 0 ? " ".repeat(indent) : null}
      {children}
    </span>
  );
}

/**
 * The core component. Titlebar (traffic lights + filename + language tag) over
 * a <pre> of <Line> children.
 *
 * Modifiers: `numbered` (CSS-counter gutter), `sm` (27px font).
 */
export function CodeWindow({
  filename,
  lang,
  numbered = false,
  sm = false,
  className = "",
  style,
  children,
}: {
  filename?: ReactNode;
  lang?: string;
  numbered?: boolean;
  sm?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const classes = [
    "codewin",
    numbered ? "numbered" : "",
    sm ? "sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style}>
      <div className="titlebar">
        <TrafficDots />
        {filename && (
          <span className="fname">
            <b>{filename}</b>
          </span>
        )}
        {lang && <span className="lang">{lang}</span>}
      </div>
      <pre>{children}</pre>
    </div>
  );
}

/** Caption rendered below a code window (`→ ` accent prefix added in CSS). */
export function CodeCaption({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <p className="code-caption" style={style}>
      {children}
    </p>
  );
}
