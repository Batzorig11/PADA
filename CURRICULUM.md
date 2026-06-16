# Сургалтын төлөвлөгөө — Frontend Web Development

**Frontend веб хөгжүүлэлтийн анхан шатны курс / Beginner front-end course curriculum**

## Тойм / Overview

| | |
|---|---|
| **Үргэлжлэх хугацаа / Duration** | 3 сар / 3 months |
| **Хуваарь / Schedule** | 7 хоногт 4 өдөр / 4 days a week |
| **Хичээлийн уртраг / Per lesson** | 3 цаг (20 мин завсарлагатай) / 3 hours (with 20-min break) |
| **Нийт хичээл / Total lessons** | 48 (сар бүр 16) |
| **Нийт цаг / Total contact hours** | 144 цаг |

**Хичээлийн бүтэц / Lesson structure:** Блок A (80 мин) → Завсарлага (20 мин) → Блок B (80 мин) = 160 мин заах цаг.

**Сар бүрийн агуулга / Monthly themes:**
- **Сар 1 — HTML & CSS**
- **Сар 2 — JavaScript**
- **Сар 3 — React & Next.js**

> Хичээл бүр нэг **Зорилго / Goal** болон 3–5 **Сэдэв / Topics**-тэй. Хичээл 1 нь аль хэдийн бэлэн `/stage-01` слайдтай тохирно. Сар бүр төслөөр төгсдөг.

---

## 🗓 Сар 1 — HTML & CSS (Month 1)

### 7 хоног 1 — HTML үндэс / Week 1 — HTML foundations

- **Хичээл 1 — Вэб хөгжүүлэлтийн үндэс** (Web development foundations) *(= /stage-01)*
  - 🎯 Goal: Understand how the web works and set up the dev environment.
  - Интернэт ба browser хэрхэн ажилладаг / Frontend vs backend / Terminal ба командууд / Editor (VS Code) тохиргоо / HTML-CSS-JS-ийн үүрэг
- **Хичээл 2 — HTML бүтэц ба үндсэн таг** (HTML structure & basic tags)
  - 🎯 Goal: Write a valid HTML document from scratch.
  - `<!DOCTYPE>`, `html/head/body` / Heading ба paragraph / Attribute / Comment / Nesting & indentation
- **Хичээл 3 — Текст, жагсаалт, холбоос, зураг** (Text, lists, links, images)
  - 🎯 Goal: Build a content-rich page with media and navigation.
  - Текст форматлах таг / `ul/ol/li` / `<a>` ба замчлал (relative/absolute) / `<img>`, alt / Path ойлголт
- **Хичээл 4 — Хүснэгт ба форм** (Tables & forms)
  - 🎯 Goal: Collect user input and present tabular data.
  - `table/tr/td/th` / `form`, `input` төрлүүд / `label`, `select`, `textarea`, `button` / Form-ийн үндсэн attribute

### 7 хоног 2 — CSS үндэс / Week 2 — CSS fundamentals

- **Хичээл 5 — Семантик HTML ба баримтын бүтэц** (Semantic HTML & structure)
  - 🎯 Goal: Structure pages with meaningful, accessible markup.
  - `header/nav/main/section/article/footer` / Semantic vs `div` / Accessibility үндэс / SEO-д үзүүлэх нөлөө
- **Хичээл 6 — CSS-тэй танилцах, селектор, өнгө** (CSS intro, selectors, colors)
  - 🎯 Goal: Apply styles using selectors and the cascade.
  - CSS холбох 3 арга / Element/class/id селектор / Specificity & cascade / Color (hex/rgb/hsl) / background
- **Хичээл 7 — Box model ба зай** (Box model & spacing)
  - 🎯 Goal: Control layout space precisely with the box model.
  - content/padding/border/margin / `box-sizing` / margin collapse / border, border-radius / shadow
- **Хичээл 8 — Typography ба нэгжүүд** (Typography & units)
  - 🎯 Goal: Style text and choose the right units.
  - font-family, web fonts / size/weight/line-height/spacing / px vs em/rem vs %/vw/vh / text alignment & decoration

### 7 хоног 3 — Layout / Week 3 — Layout

- **Хичээл 9 — Display ба position** (Display & positioning)
  - 🎯 Goal: Place elements using display and positioning.
  - block/inline/inline-block / `position` (static/relative/absolute/fixed/sticky) / z-index / overflow
- **Хичээл 10 — Flexbox үндэс** (Flexbox basics)
  - 🎯 Goal: Build one-dimensional layouts with flexbox.
  - flex container/item / justify-content, align-items / direction, wrap / gap
- **Хичээл 11 — Flexbox layout дадлага** (Flexbox layout practice)
  - 🎯 Goal: Compose real UI sections (navbar, card grid) with flexbox.
  - Navbar / Card layout / flex-grow/shrink/basis / Дадлагын даалгавар
- **Хичээл 12 — CSS Grid**
  - 🎯 Goal: Build two-dimensional layouts with grid.
  - grid-template rows/columns / fr, repeat, minmax / gap / grid areas / Flexbox vs Grid хэзээ

### 7 хоног 4 — Responsive & төсөл / Week 4 — Responsive & project

- **Хичээл 13 — Responsive design ба media query**
  - 🎯 Goal: Make layouts adapt to any screen size.
  - Mobile-first / `@media` breakpoints / Responsive units / Responsive image / Жишээ тохируулга
- **Хичээл 14 — Transition, transform, animation**
  - 🎯 Goal: Add motion and interactive states.
  - `:hover/:focus` / transition / transform (scale/rotate/translate) / `@keyframes` animation
- **Хичээл 15 — Төсөл: Landing page** (Project build)
  - 🎯 Goal: Apply HTML+CSS to build a complete responsive landing page.
  - Бүтэц төлөвлөх / Section-уудыг угсрах / Responsive болгох / Дадлага (заавартай)
- **Хичээл 16 — Төсөл дуусгах + сар сэргээх** (Project finish + Month 1 review)
  - 🎯 Goal: Finish, polish, and review Month 1 concepts.
  - Polish & debugging / Code review / Month 1 ойлголт сэргээх / Жижиг шалгалт/quiz

---

## 🗓 Сар 2 — JavaScript (Month 2)

### 7 хоног 5 — JS үндэс / Week 5 — JS basics

- **Хичээл 17 — JavaScript танилцах, хувьсагч, төрөл** (Intro, variables, data types)
  - 🎯 Goal: Run JS and work with variables and primitive types.
  - JS юу хийдэг / `<script>`, console / let/const/var / string/number/boolean/null/undefined / typeof
- **Хичээл 18 — Оператор ба нөхцөл** (Operators & conditionals)
  - 🎯 Goal: Make decisions in code.
  - Arithmetic/assignment/comparison/logical / truthy/falsy / `if/else if/else` / `switch` / ternary
- **Хичээл 19 — Давталт** (Loops)
  - 🎯 Goal: Repeat work with loops.
  - `for` / `while`, `do...while` / `break`/`continue` / nested loop / Дадлага
- **Хичээл 20 — Функц** (Functions)
  - 🎯 Goal: Write reusable functions.
  - Declaration vs expression / параметр ба return / scope / arrow function танилцуулга

### 7 хоног 6 — Өгөгдлийн бүтэц / Week 6 — Data structures

- **Хичээл 21 — Массив** (Arrays)
  - 🎯 Goal: Store and manipulate lists of data.
  - Array үүсгэх, index / push/pop/shift/unshift/splice / length / давталтаар алхах
- **Хичээл 22 — Массивын аргууд** (Array methods: map/filter/reduce)
  - 🎯 Goal: Transform data with higher-order array methods.
  - forEach / map / filter / find / reduce / chaining
- **Хичээл 23 — Объект** (Objects)
  - 🎯 Goal: Model structured data with objects.
  - key/value / dot vs bracket / nested object/array / method / `this` танилцуулга
- **Хичээл 24 — Дадлага: жижиг даалгаврууд** (Practice: mini exercises)
  - 🎯 Goal: Strengthen logic with array/object/algorithm drills.
  - String/array асуудлууд / Объект боловсруулах / Жижиг алгоритм / Code review

### 7 хоног 7 — DOM / Week 7 — The DOM

- **Хичээл 25 — DOM танилцах, элемент сонгох** (DOM intro & selection)
  - 🎯 Goal: Read and traverse the page from JS.
  - DOM tree / `querySelector(All)`, getElementById / textContent/innerHTML / attribute унших
- **Хичээл 26 — DOM өөрчлөх ба event** (DOM manipulation & events)
  - 🎯 Goal: Make pages interactive.
  - Элемент үүсгэх/нэмэх/устгах / classList, style / `addEventListener` / event object & bubbling
- **Хичээл 27 — Форм ба баталгаажуулалт** (Forms & validation)
  - 🎯 Goal: Capture and validate user input with JS.
  - Form value унших / submit event, preventDefault / Validation logic / Алдааны мессеж харуулах
- **Хичээл 28 — Төсөл: интерактив компонент** (Project: interactive component)
  - 🎯 Goal: Build a real interactive app (Todo / Calculator).
  - Бүтэц төлөвлөх / Event-ээр удирдах / State (хувьсагчаар) / Дадлага угсрах

### 7 хоног 8 — Орчин үеийн JS ба Async / Week 8 — Modern JS & async

- **Хичээл 29 — Орчин үеийн JS** (ES6+ features)
  - 🎯 Goal: Write cleaner modern JavaScript.
  - Arrow function гүнзгий / destructuring / spread/rest / template literal / `import/export` танилцуулга
- **Хичээл 30 — Async: callback ба promise**
  - 🎯 Goal: Understand asynchronous code.
  - Synchronous vs async / setTimeout / callback ба "callback hell" / Promise (then/catch)
- **Хичээл 31 — Fetch API, JSON, async/await**
  - 🎯 Goal: Fetch data from a real API.
  - JSON бүтэц / `fetch` / async/await / try/catch / Response боловсруулах
- **Хичээл 32 — Төсөл: API өгөгдөл татах апп + сар сэргээх** (Project + Month 2 review)
  - 🎯 Goal: Build a data-driven app (e.g. weather/movies) and review Month 2.
  - API сонгох ба татах / DOM-д харуулах / Loading/error төлөв / Month 2 сэргээх

---

## 🗓 Сар 3 — React & Next.js (Month 3)

### 7 хоног 9 — React үндэс / Week 9 — React basics

- **Хичээл 33 — React танилцах, тохиргоо, JSX** (React intro, setup, JSX)
  - 🎯 Goal: Understand why React exists and write JSX.
  - SPA ба компонентын санаа / Vite-аар төсөл үүсгэх / JSX дүрэм / `{expression}` / component render
- **Хичээл 34 — Компонент ба props** (Components & props)
  - 🎯 Goal: Build reusable components that take props.
  - Function component / props дамжуулах / children / компонент задлах / reuse
- **Хичээл 35 — State ба useState** (State & useState)
  - 🎯 Goal: Add interactive state to components.
  - State гэж юу вэ / `useState` / state шинэчлэх / re-render ойлголт / props vs state
- **Хичээл 36 — Event, нөхцөлт ба жагсаалт render** (Events, conditional & list rendering)
  - 🎯 Goal: Handle events and render dynamic lists.
  - onClick/onChange / conditional rendering (&&, ternary) / `.map()` render / `key` prop

### 7 хоног 10 — React гүнзгий / Week 10 — React deeper

- **Хичээл 37 — useEffect ба side effect** (useEffect & side effects)
  - 🎯 Goal: Run side effects and handle component lifecycle.
  - Side effect гэж юу вэ / `useEffect` / dependency array / cleanup / нийтлэг алдаа
- **Хичээл 38 — React дахь форм** (Forms in React)
  - 🎯 Goal: Build controlled forms.
  - controlled input / multiple input удирдах / validation / submit боловсруулах
- **Хичээл 39 — State өргөх ба компонент бүрдүүлэлт** (Lifting state & composition)
  - 🎯 Goal: Share state between components cleanly.
  - "Lifting state up" / props drilling / компонент бүрдүүлэлт / архитектур төлөвлөх
- **Хичээл 40 — React-д өгөгдөл татах** (Data fetching in React)
  - 🎯 Goal: Fetch and display API data in React.
  - useEffect + fetch / loading/error state / render / жижиг dashboard дадлага

### 7 хоног 11 — Next.js / Week 11 — Next.js

- **Хичээл 41 — Custom hook ба useContext** (Custom hooks & Context)
  - 🎯 Goal: Reuse logic and share global state.
  - Custom hook бичих / `useContext` / global state санаа / хэзээ хэрэглэх
- **Хичээл 42 — Next.js танилцах, App Router, file routing**
  - 🎯 Goal: Understand Next.js and file-based routing.
  - Next.js яагаад / төсөл үүсгэх / App Router бүтэц / `app/` folder routing / `page.tsx`
- **Хичээл 43 — Page, layout, navigation** (Pages, layouts, Link)
  - 🎯 Goal: Build multi-page apps with shared layouts.
  - Routes ба nested route / `layout.tsx` / `<Link>` navigation / dynamic route `[id]`
- **Хичээл 44 — Server ба Client компонент, өгөгдөл татах** (Server/Client components & fetching)
  - 🎯 Goal: Choose the right component type and fetch data server-side.
  - Server vs Client component / `"use client"` / server дээр data татах / metadata үндэс

### 7 хоног 12 — Эцсийн төсөл / Week 12 — Final project

- **Хичээл 45 — Next-д styling ба API route** (Styling & API routes)
  - 🎯 Goal: Style a Next app and add backend endpoints.
  - CSS Modules / (Tailwind танилцуулга) / `route.ts` API / эцсийн төслийн төлөвлөгөө
- **Хичээл 46 — Эцсийн төсөл — бүтээх 1** (Final project build 1)
  - 🎯 Goal: Scaffold the final project (routing, layout, components).
  - Шаардлага тодорхойлох / бүтэц угсрах / компонент бичих / заавартай дадлага
- **Хичээл 47 — Эцсийн төсөл — бүтээх 2** (Final project build 2)
  - 🎯 Goal: Complete features, data, and styling of the final project.
  - Data холбох / styling / debugging / deploy (Vercel) танилцуулга
- **Хичээл 48 — Төсөл хамгаалах + курс дүгнэх + дараагийн алхам** (Presentation + review + next steps)
  - 🎯 Goal: Present projects, review the whole course, and plan what's next.
  - Төсөл танилцуулга / Feedback / Курс сэргээх / Дараагийн суралцах зам (TS, Git, тест, гэх мэт)
