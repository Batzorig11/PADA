import type { CSSProperties, ReactNode } from "react";

/* ---- top brand bar: erxes/frontend logo + page number ---- */
export function Brandbar({
  page,
  total = 30,
}: {
  page: ReactNode;
  total?: ReactNode;
}) {
  return (
    <div className="brandbar">
      <div className="b-logo">
        erxes<span>/</span>frontend
      </div>
      <div className="pagenum">
        <b>{page}</b> / {total}
      </div>
    </div>
  );
}

/* ---- bottom footer: section tag + topic ---- */
export function Footer({ tag, topic }: { tag: ReactNode; topic: ReactNode }) {
  return (
    <div className="footer">
      <span className="tag">{tag}</span>
      <span>{topic}</span>
    </div>
  );
}

/* ---- eyebrow / kicker ---- */
export function Eyebrow({
  children,
  variant,
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "amber";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`eyebrow${variant === "amber" ? " amber" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
}

export type FooterProps = { tag: ReactNode; topic: ReactNode };

/**
 * Generic slide wrapper: <section class="slide …"> with optional brandbar
 * (when `page` is given) and footer. Compose `Frame` + content primitives
 * inside, or use one of the dedicated slide components.
 */
export function Slide({
  className = "",
  label,
  page,
  total,
  footer,
  grid = false,
  children,
}: {
  className?: string;
  label?: string;
  page?: ReactNode;
  total?: ReactNode;
  footer?: FooterProps;
  grid?: boolean;
  children: ReactNode;
}) {
  const classes = ["slide", grid ? "grid" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={classes} data-label={label}>
      {page !== undefined && <Brandbar page={page} total={total} />}
      {children}
      {footer && <Footer tag={footer.tag} topic={footer.topic} />}
    </section>
  );
}

/* ---- standard content box (left/right inset by --px, top/bottom by --py) ---- */
export function Frame({
  center = false,
  className = "",
  style,
  children,
}: {
  center?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const classes = ["frame", center ? "center" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

/* ---- a blinking terminal cursor block (used in titles) ---- */
export function Cursor() {
  return <span className="cursor" />;
}
