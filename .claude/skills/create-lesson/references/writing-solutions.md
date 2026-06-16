# Writing exercise solution code

Each `Exercise` ships its reference solution as real files through the `ExerciseFiles`
component (filename + copy button; code hidden on the slide). This file is the rule book
for *what that code may contain*. The one principle: **the solution may only use what
students have been taught up to this lesson.**

---

## 1. The cumulative-skill rule

Before writing a solution, list what students know by this point (read `CURRICULUM.md`
in order + skim prior `app/lesson-*` decks). Then write the solution using **only** that
vocabulary. If a construct isn't on the list, you may not use it — even if it would be
"better" code.

The most common failure is **styling HTML before CSS exists**. In Month 1 the HTML
lessons (boilerplate, text/lists/links/images, tables/forms, semantic HTML) come
*before* the CSS lessons. A solution for any of those is a **pure `.html` file with no
CSS at all** — no `<style>`, no `style=""`, no `class` used for styling, no colors, no
fonts, no layout. It will render as plain black serif text in the browser, and that is
correct. Don't apologize for it on the slide; that's exactly what the student produces.

---

## 2. What unlocks when (gate by curriculum order)

Confirm exact order in `CURRICULUM.md`; this is the intent:

- **HTML lessons before "CSS intro" (≈ L1–L5):** HTML only. No CSS of any kind.
  Allowed: the tags taught so far (`html/head/body`, headings, `p`, `ul/ol/li`, `a`,
  `img`, `table`, form controls, semantic tags) and the `border="1"` table attribute.
- **After "CSS intro · selectors · colors":** may add a `.css` file (or `<style>`) using
  selectors + `color`/`background` only.
- **After "Box model & spacing":** padding, margin, border, `border-radius`, box-sizing.
- **After "Typography & units":** `font-family`, sizes, weights, line-height, alignment.
- **After "Flexbox" / "CSS Grid":** those layout techniques.
- **Month 2 (JavaScript):** gate JS features by lesson — no `map/filter/reduce` before
  the array-methods lesson, no `fetch`/`async`/`await` before the async lessons, no
  arrow functions / destructuring / spread before the modern-JS lesson. Styling in JS
  exercises is still limited to CSS taught in Month 1.
- **Month 3 (React/Next):** no hook before it's taught (`useState` → `useEffect` →
  `useContext`/custom hooks), no Next feature (App Router, `<Link>`, server components,
  API routes) before its lesson. Styling follows whatever was introduced.

When unsure whether something is allowed yet, **leave it out** and solve it with taught
features.

---

## 3. Keep it beginner-correct

- Write the file the way a student following the tasks would — clear, conventional,
  minimal. Don't show off.
- Match the exercise `tasks` exactly: same elements, same order, same content. The
  solution is the answer key to those specific tasks.
- Keep content Mongolian (Cyrillic) where it's visible text; keep code/identifiers in
  English. Comments, if any, are short and Mongolian.
- Make each file **complete and runnable on its own** — a student should be able to copy
  it into the named file and open/run it directly. For HTML, that means a full document
  (`<!DOCTYPE html>` … `</html>`), not a fragment.
- Indent with 2 spaces, like the rest of the course.

---

## 4. Where to put the code in the page

Hold each solution in a `const` template literal (near the bottom of the
`app/lesson-NN/page.tsx`, after the component), then reference it from `ExerciseFiles`:

```tsx
const RECIPE_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Жор</title>
  </head>
  <body>
    <h1>Өндөгтэй будаа</h1>
    <!-- … only tags taught so far … -->
  </body>
</html>
`;
```

Then `files={[{ name: "recipe.html", lang: "html", code: RECIPE_HTML }]}`.
Add `.css`/`.js` entries only once those topics have been taught.

---

## 5. Final verification checklist

Run this on every solution file before finishing:

1. **Provenance (most important):** read it line by line; for each tag/property/construct
   name the lesson that taught it. Any line with no answer → rewrite with taught
   features or remove. For pre-CSS HTML lessons there must be **zero CSS**.
2. **Matches the tasks:** every task in the exercise is satisfied; nothing extra that the
   tasks didn't ask for.
3. **Complete & runnable:** it's a whole file the student can copy and open/run as-is.
4. **Language:** visible text is Mongolian (Cyrillic); code identifiers English.
5. **Wired correctly:** referenced via the `aside` prop using `ExerciseFiles` with the
   right `name`/`lang`/`code`, and the copy button copies the full file.
