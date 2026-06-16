---
name: create-lesson
description: Author a new lecture for the erxes Frontend Lecture Platform (a Next.js fixed-canvas slide deck). Use whenever building/creating a lesson, slide deck, lesson page, or an exercise for this course. Scaffolds app/lesson-NN/page.tsx from the template, composes slide components from @/components/slides, follows CURRICULUM.md, writes all copy in Mongolian (Cyrillic), and provides each exercise's reference solution as copy-to-clipboard files (via the ExerciseFiles component) instead of screenshots — code that only uses what students have already been taught.
---

# Creating a lesson

You are authoring one 3-hour lecture as a slide deck for the **erxes beginner
front-end course** (HTML & CSS → JavaScript → React & Next.js). Decks are Next.js
App Router pages rendered on a fixed **1920×1080** canvas, clicked through with ← / →.

**All lecture copy is Mongolian (Cyrillic). Keep it that way.** Code samples stay in
English (that's how code is written), but every heading, explanation, task, and
caption is Mongolian.

## Before you write anything

1. **Find the lesson in `CURRICULUM.md`** (repo root). It lists all 48 lessons with a
   goal + 3–5 topics each. The lesson you're building must cover exactly its topics —
   no more, no less.
2. **Establish what students already know.** This is the single most important step and
   it governs both content and exercise solutions. Read the curriculum entries for
   *every prior lesson* and skim the prior `app/lesson-*/page.tsx` decks. Build a list:
   "by this lesson, students can use X, Y, Z and nothing else." A concept that appears
   later in the curriculum **does not exist yet** for this lesson.
3. **Read the template** `app/lesson-template/page.tsx` — it is the 3-hour scaffold
   (opening → Part 1 → 20-min break → Part 2 → recap → Q&A) with the correct slide
   order, page numbering, and Mongolian placeholders. `app/template/page.tsx` is the
   full kit showing one of every slide type.

## Workflow

1. **Scaffold:** copy `app/lesson-template/page.tsx` to `app/lesson-NN/page.tsx`
   (match the curriculum number). Keep the 5-phase structure.
2. **Compose slides** by importing from `@/components/slides` (barrel). Available
   types: `TitleSlide`, `SectionDivider`, `KeyTerm`, `ConceptList`, `Slide`+`Frame`,
   `CodeWindow`/`Line`/`T`/`CodeCaption`, `Diagram`/`Node`/`Arrow`, `CompareTable`,
   `DosDonts`, `StatSlide`, `Callout`, `Remember`, `Terminal`, `ResultPane`,
   `Exercise`, `ExerciseFiles`, `Break`, `Recap`. **Compose existing components — do
   not invent new CSS or slide types** unless a needed type genuinely doesn't exist
   (then ask first).
3. **Page numbering:** set `const TOTAL = "<n>"` to the final slide count and give every
   slide a sequential `page="NN"`. Omit `page` to hide the brandbar on a slide
   (title/section/break slides). Recount `TOTAL` after you finish.
4. **Code blocks:** one `<Line>` = one source line; wrap tokens in `T.tag`/`T.attr`/
   `T.str`/`T.kw`/`T.fn`/`T.num`/`T.com`/`T.punct`/`T.sel`/`T.prop`. Use the `indent`
   prop for leading spaces (whitespace in `<pre>` is literal). Per-line teaching states:
   `state="hl" | "dim" | "add" | "del"`.
5. **Structure each half** as: section divider → teach (KeyTerm / code / concept /
   diagram) → a hands-on `Exercise`. Put the bigger build as the final exercise.
6. **Register on the hub:** add (or flip) the lesson's card in the `lessons` array in
   `app/page.tsx`. Giving it an `href: "/lesson-NN"` makes it show as "Бэлэн" (live);
   no href shows "Удахгүй" (soon). Update `desc` and the `foot` slide count.
7. **Verify:** run `npm run build` (must pass) and spot-check the route with
   `npm run dev`. Confirm no slide overflows the 1920×1080 frame and the copy buttons
   copy the right code.

## Exercise solutions — reference code, not screenshots

Every hands-on `Exercise` should ship the **reference solution as real code**, surfaced
through the **`ExerciseFiles`** component in the exercise's `aside`. Do **not** add
target screenshots/images — they look bad and mislead. `ExerciseFiles` shows only each
file's **name/path + a "Код хуулах" (copy) button**; the code itself is never displayed
on the slide, it's copied to the clipboard on click. This keeps the slide clean while
giving the instructor the exact, correct answer on demand.

**The strict rule — solution code may only use what has been taught up to this lesson.**
Every line of the reference solution must trace to a concept already introduced (check
`CURRICULUM.md` + prior decks). The classic mistakes to avoid:

- Styling an HTML exercise with CSS *before CSS has been taught* (e.g. a registration
  form exercise whose "solution" sets colors/fonts — students can't do that yet).
- Using a JS array method, React hook, or Next feature from a later lesson.
- "Cleaning up" with syntax (arrow functions, destructuring, async/await, flexbox, grid)
  that hasn't been introduced.

If you can't point to the lesson that taught a construct, it must not appear in the
solution. An honest, plain solution that matches the curriculum teaches more than a
polished one that uses things students haven't seen. See
`references/writing-solutions.md` for what's unlocked when and how to keep solutions
beginner-correct. **Read it before writing any solution code.**

### How to wire solutions into an Exercise

Pass `ExerciseFiles` via the `aside` prop (it replaces the default hints panel):

```tsx
import { Exercise, ExerciseFiles } from "@/components/slides";

<Exercise
  label="Сорил" page="NN" total={TOTAL}
  tag="Дасгал · сорил" title="…"
  tasks={[ /* Mongolian task list */ ]}
  aside={
    <ExerciseFiles
      className="anim anim-4"
      caption="⏱ 20-25 минут"
      files={[
        { name: "recipe.html", lang: "html", code: RECIPE_HTML },
        // add css/js files only once those have been taught
      ]}
    />
  }
/>
```

- Hold each solution in a `const` string (template literal) near the bottom of the page,
  or inline. The whole string is what gets copied — make it a complete, runnable file.
- `name` is the filename/path shown on the slide; `lang` is an optional chip
  (`"html"`/`"css"`/`"js"`); `code` is the full reference solution (hidden).
- List one entry per file the student should produce. For a pre-CSS HTML lesson that's
  usually a single `.html` file; later lessons may add `.css` / `.js`.

### Verify every solution before finishing

For each file, walk the checklist in `references/writing-solutions.md`. The core test:

> Read the solution line by line. For each tag, property, or construct, name the lesson
> that taught it. If any line has no answer, rewrite it using only taught features (or
> drop it). Confirm the solution actually satisfies the exercise `tasks`, and that the
> copy button copies a complete, valid file.
