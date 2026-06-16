"use client";

import { useState, type ReactNode } from "react";

/**
 * A solution file the student should end up with. `code` is the full reference
 * solution; it is NOT shown on the slide — only the filename/path and a copy
 * button are rendered. Clicking the button copies `code` to the clipboard.
 */
export type SolutionFile = {
  /** Filename or path shown on the slide, e.g. "recipe.html" or "css/style.css". */
  name: string;
  /** Full reference code, copied to clipboard on click. Never rendered on screen. */
  code: string;
  /** Optional language chip, e.g. "html" / "css" / "js". */
  lang?: string;
};

function FileRow({ name, code, lang }: SolutionFile) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable (e.g. print) — no-op */
    }
  };

  return (
    <div className={`ef-file${copied ? " is-copied" : ""}`}>
      <span className="ef-glyph" aria-hidden>
        ▣
      </span>
      <span className="ef-name">{name}</span>
      {lang && <span className="ef-lang">{lang}</span>}
      <button type="button" className="ef-copy" onClick={copy}>
        {copied ? "Хуулсан ✓" : "Код хуулах"}
      </button>
    </div>
  );
}

/**
 * Drop-in replacement for the old target-screenshot in an `Exercise`'s `aside`.
 * Lists the reference solution files (name + path + copy button) without ever
 * displaying the code on the slide — the instructor copies it on demand.
 */
export function ExerciseFiles({
  title = "Бэлэн жишээ код",
  caption,
  files,
  className = "",
}: {
  title?: ReactNode;
  /** Optional line under the list, e.g. an estimated time. */
  caption?: ReactNode;
  files: SolutionFile[];
  className?: string;
}) {
  return (
    <div className={`exercise-files${className ? ` ${className}` : ""}`}>
      <div className="ef-title">{title}</div>
      <div className="ef-list">
        {files.map((f, i) => (
          <FileRow key={i} {...f} />
        ))}
      </div>
      {caption && <div className="ef-note">{caption}</div>}
    </div>
  );
}
