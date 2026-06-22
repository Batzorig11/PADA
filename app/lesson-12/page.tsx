import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  CompareTable,
  Exercise,
  ExerciseFiles,
  Break,
  Recap,
  ResultPane,
  Slide,
  Frame,
  Eyebrow,
  Cursor,
  CodeWindow,
  CodeCaption,
  Line,
  T,
} from "@/components/slides";

export const metadata = {
  title: "erxes · Хичээл 12 — CSS Grid",
};

/**
 * ХИЧЭЭЛ 12 — CSS Grid
 * 🎯 Grid ашиглан хоёр хэмжээст (мөр + багана) layout угсарч сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — grid-template-columns, fr, repeat, gap
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — minmax, grid-template-areas, Flexbox vs Grid
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "20";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const STATS_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Самбар</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="stats">
      <div class="stat"><p class="num">1,240</p><p>Хэрэглэгч</p></div>
      <div class="stat"><p class="num">98%</p><p>Сэтгэл ханамж</p></div>
      <div class="stat"><p class="num">320</p><p>Захиалга</p></div>
      <div class="stat"><p class="num">₮4.2сая</p><p>Орлого</p></div>
      <div class="stat"><p class="num">12</p><p>Баг</p></div>
      <div class="stat"><p class="num">7</p><p>Төсөл</p></div>
    </section>
  </body>
</html>
`;

const STATS_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.stats {
  display: grid;
  /* 3 тэнцүү багана */
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
}

.stat {
  padding: 24px;
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  text-align: center;
}

.num {
  font-size: 32px;
  font-weight: 700;
  color: #39d353;
  margin: 0 0 6px;
}

.stat p {
  margin: 0;
  color: #9aa4b2;
}
`;

const LAYOUT_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Хуудасны бүтэц</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="page">
      <header class="head">Толгой</header>
      <aside class="side">Хажуу цэс</aside>
      <main class="main">Үндсэн агуулга</main>
      <footer class="foot">Хөл</footer>
    </div>
  </body>
</html>
`;

const LAYOUT_CSS = `body {
  margin: 0;
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.page {
  display: grid;
  /* хажуу 200px, үндсэн үлдсэн зай */
  grid-template-columns: 200px 1fr;
  /* нэрлэсэн талбайгаар бүтэц зурна */
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
  gap: 12px;
  min-height: 100vh;
  padding: 12px;
}

.head { grid-area: head; }
.side { grid-area: side; }
.main { grid-area: main; }
.foot { grid-area: foot; }

.head,
.side,
.main,
.foot {
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 8px;
  padding: 20px;
}
`;

export default function Lesson12() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-12 · css grid</>}
        title={
          <>
            CSS
            <br />
            Grid
            <Cursor />
          </>
        }
        subtitle="Flexbox нэг эгнээ хийдэг бол Grid нь мөр болон баганыг зэрэг удирдана. Бүхэл хуудасны бүтцийг хэдхэн мөрөөр зурж сурна."
        stages={
          <>
            <span className="on">01 · Үндэс</span>
            <span className="sep">→</span>
            <span>02 · JavaScript</span>
            <span className="sep">→</span>
            <span>03 · React &amp; Next.js</span>
          </>
        }
      />

      {/* 02 · СЭРГЭЭН САНАХ */}
      <Slide
        label="Сэргээн санах"
        page="02"
        total={TOTAL}
        footer={{ tag: "танилцуулга", topic: "сэргээн санах" }}
        grid
      >
        <Frame>
          <Eyebrow className="anim">Өмнөх хичээлээс</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "Flexbox",
                desc: "Нэг хэмжээст — мөр эсвэл багана.",
              },
              {
                idx: "✓",
                title: "flex item",
                desc: "grow/shrink/basis, navbar, картын эгнээ.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Хоёр хэмжээст layout — CSS Grid.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 03 · ТӨЛӨВЛӨГӨӨ */}
      <Slide label="Төлөвлөгөө" page="03" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">3 цаг · 20 минут завсарлагатай</Eyebrow>
          <h2 className="slide-title anim anim-2">Өнөөдрийн төлөвлөгөө</h2>
          <ConceptList
            num
            compact
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "grid-template-columns",
                desc: "Багана тодорхойлох, fr нэгж.",
              },
              {
                idx: "02",
                title: "repeat ба gap",
                desc: "Давтах, нүднүүдийн хооронд зай.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "minmax · grid-areas",
                desc: "Уян хатан багана, нэрлэсэн талбай.",
              },
              {
                idx: "04",
                title: "Flexbox vs Grid",
                desc: "Хэзээ алийг нь сонгох вэ.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — GRID BASICS
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Grid үндэс"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Grid
            <br />
            үндэс
          </>
        }
        lead="Контейнерийг grid болгож, хэдэн багана, ямар өргөнтэй байхыг зааж өгнө. fr нэгж ба repeat-ийг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: GRID */}
      <KeyTerm
        label="Гол ойлголт: Grid"
        page="05"
        total={TOTAL}
        term="CSS Grid"
        def={
          <>
            <b>Grid</b> бол <i>хоёр хэмжээст</i> layout систем — мөр болон
            баганыг зэрэг удирдана.{" "}
            <span className="inline-code">display: grid</span> өгөөд{" "}
            <span className="inline-code">grid-template-columns</span>-аар
            баганын бүтцээ тодорхойлно.
          </>
        }
        note="мөр + багана зэрэг"
      />

      {/* 06 · GRID-TEMPLATE-COLUMNS + FR */}
      <Slide
        label="columns + fr"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 grid", topic: "багана · fr" }}
      >
        <Frame>
          <Eyebrow className="anim">Багана тодорхойлох</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>grid-template-columns</code> ба <code>fr</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.grid</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>grid</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>grid-template-columns</T.prop>
                <T.punct>:</T.punct> <T.num>1fr 2fr 1fr</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 1fr",
                  gap: 8,
                }}
              >
                <div style={gcell}>1fr</div>
                <div style={{ ...gcell, background: "#39d353" }}>2fr</div>
                <div style={gcell}>1fr</div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>fr</b> (fraction) нь боломжтой зайн <i>хэсэг</i> — 1fr 2fr 1fr
            гэвэл дунд багана 2 дахин өргөн.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · REPEAT */}
      <Slide
        label="repeat"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 grid", topic: "repeat()" }}
      >
        <Frame>
          <Eyebrow className="anim">Давталтыг товчлох</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>repeat()</code> — олон ижил багана
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.com>{"/* эдгээр хоёр нь ижил */"}</T.com>
              </Line>
              <Line>
                <T.prop>grid-template-columns</T.prop>
                <T.punct>:</T.punct> <T.num>1fr 1fr 1fr 1fr</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl">
                <T.prop>grid-template-columns</T.prop>
                <T.punct>:</T.punct> <T.fn>repeat</T.fn>
                <T.punct>(</T.punct>
                <T.num>4</T.num>
                <T.punct>,</T.punct> <T.num>1fr</T.num>
                <T.punct>)</T.punct>
                <T.punct>;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 8,
                }}
              >
                {["1", "2", "3", "4"].map((n) => (
                  <div key={n} style={gcell}>
                    {n}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <code>repeat(4, 1fr)</code> = «1fr-ийг 4 удаа» — олон багана хийхэд
            цэвэрхэн, алдаа багатай.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · GAP + ROWS */}
      <Slide
        label="gap + rows"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 grid", topic: "gap · мөр" }}
      >
        <Frame>
          <Eyebrow className="anim">Зай ба мөр</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>gap</code> ба <code>grid-template-rows</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.grid</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>grid-template-columns</T.prop>
                <T.punct>:</T.punct> <T.fn>repeat</T.fn>
                <T.punct>(</T.punct>
                <T.num>3</T.num>
                <T.punct>,</T.punct> <T.num>1fr</T.num>
                <T.punct>)</T.punct>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>gap</T.prop>
                <T.punct>:</T.punct> <T.num>12px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                }}
              >
                {["1", "2", "3", "4", "5", "6"].map((n) => (
                  <div key={n} style={gcell}>
                    {n}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Item-ийн тоо баганаас хэтрэхэд Grid <b>шинэ мөр автоматаар</b>{" "}
            үүсгэнэ. <code>gap</code> нь мөр, баганын аль алинд зай тавина.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Статистикийн самбар"
        tasks={[
          <>
            <code>&lt;section class=&quot;stats&quot;&gt;</code> дотор 6 ширхэг{" "}
            <code>.stat</code> карт (том тоо + шошго) бич.
          </>,
          <>
            <code>.stats</code>-д <code>display: grid</code> өг.
          </>,
          <>
            <code>grid-template-columns: repeat(3, 1fr)</code>-ээр 3 тэнцүү
            багана үүсгэ.
          </>,
          <>
            <code>gap</code>-аар нүднүүдийн хооронд зай өг — 6 карт 2 мөр болж
            эгнэхийг ажигла.
          </>,
          <>
            Тоог том <code>font-size</code>, өнгөөр онцолж самбар маягтай болго.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: STATS_HTML },
              { name: "style.css", lang: "css", code: STATS_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      {/* ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Зургийн галерей (grid)"
        tasks={[
          <>
            6 «зураг» (өнгөт хайрцаг)-ийг{" "}
            <code>grid-template-columns: repeat(3, 1fr)</code> ба{" "}
            <code>gap</code>-аар угсар.
          </>,
          <>
            Эхний нэг зургийг <code>grid-column: span 2</code>-оор 2 баганын
            өргөнтэй болго.
          </>,
          <>
            Баганын тоог <code>repeat(auto-fit, minmax(150px, 1fr))</code>{" "}
            болгож responsive болго.
          </>,
          <>
            Цонхыг нарийсгаад баганын тоо хэрхэн өөрөө цөөрч байгааг ажигла.
          </>,
        ]}
        hints={[
          "1fr нь үлдсэн зайг тэнцүү хуваана.",
          "span 2 нь нэг элементийг 2 нүд эзлүүлнэ.",
          "auto-fit + minmax = автомат responsive grid.",
        ]}
        time="⏱ 15 минут"
      />

      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="minmax, grid-areas ба Flexbox vs Grid"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — ADVANCED GRID
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Grid гүнзгий"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Уян хатан
            <br />
            бүтэц
          </>
        }
        lead="minmax-аар автоматаар тохирох багана, grid-template-areas-аар бүхэл хуудасны бүтцийг нэрээр зурна."
      />

      {/* 12 · MINMAX + AUTO-FIT */}
      <Slide
        label="minmax"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 grid", topic: "minmax · auto-fit" }}
      >
        <Frame>
          <Eyebrow className="anim">Өөрөө тохирох багана</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>minmax()</code> ба <code>auto-fit</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.prop>grid-template-columns</T.prop>
                <T.punct>:</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.fn>repeat</T.fn>
                <T.punct>(</T.punct>
                <T.num>auto-fit</T.num>
                <T.punct>,</T.punct>
              </Line>
              <Line indent={4}>
                <T.fn>minmax</T.fn>
                <T.punct>(</T.punct>
                <T.num>180px</T.num>
                <T.punct>,</T.punct> <T.num>1fr</T.num>
                <T.punct>))</T.punct>
                <T.punct>;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(90px, 1fr))",
                  gap: 8,
                }}
              >
                {["1", "2", "3", "4", "5"].map((n) => (
                  <div key={n} style={gcell}>
                    {n}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>minmax(180px, 1fr)</b> — багана хамгийн багадаа 180px, дараа нь
            өснө. <b>auto-fit</b> нь зайнд багтах хэрээр баганын тоог өөрөө
            тааруулна — responsive grid!
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 13 · ГОЛ ОЙЛГОЛТ: GRID-AREAS */}
      <KeyTerm
        label="Гол ойлголт: grid-areas"
        page="14"
        total={TOTAL}
        term="grid-template-areas"
        def={
          <>
            <b>grid-template-areas</b> нь нүд бүрт <i>нэр</i> өгч, бүтцийг
            ASCII зураг шиг бичих боломж олгоно. Дараа нь элемент бүрд{" "}
            <span className="inline-code">grid-area: нэр</span> өгөхөд тэр
            талбайдаа суудаг.
          </>
        }
        note='"head head" / "side main" / "foot foot"'
      />

      {/* 14 · GRID-AREAS КОД БА ҮР ДҮН */}
      <Slide
        label="grid-areas жишээ"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 grid", topic: "хуудасны бүтэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Хуудасны бүтцийг зурах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            Нэрлэсэн талбайгаар layout
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 20 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.prop>grid-template-areas</T.prop>
                <T.punct>:</T.punct>
              </Line>
              <Line indent={2}>
                <T.str>&quot;head head&quot;</T.str>
              </Line>
              <Line indent={2}>
                <T.str>&quot;side main&quot;</T.str>
              </Line>
              <Line indent={2}>
                <T.str>&quot;foot foot&quot;</T.str>
                <T.punct>;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gridTemplateAreas:
                    '"head head" "side main" "foot foot"',
                  gap: 6,
                }}
              >
                <div style={{ ...gcell, gridArea: "head" }}>head</div>
                <div style={{ ...gcell, gridArea: "side", background: "#38bdf8" }}>
                  side
                </div>
                <div style={{ ...gcell, gridArea: "main", background: "#39d353", minHeight: 60 }}>
                  main
                </div>
                <div style={{ ...gcell, gridArea: "foot" }}>foot</div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Бүтэц нь кодоос шууд <b>харагдана</b>. Нэг нэрийг хэд хэдэн нүдэнд
            давтвал тэр талбай нийлж сунана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · FLEXBOX VS GRID */}
      <Slide
        label="flexbox vs grid"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 grid", topic: "хэзээ алийг нь" }}
      >
        <Frame>
          <Eyebrow className="anim">Аль нь хэзээ</Eyebrow>
          <h2 className="slide-title anim anim-2">Flexbox vs Grid</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "", width: "24%" },
              { head: "Flexbox" },
              { head: "Grid" },
            ]}
            rows={[
              ["Хэмжээс", "Нэг (мөр/багана)", "Хоёр (мөр + багана)"],
              ["Тохиромжтой", "Navbar, товчны эгнээ, tag", "Хуудасны бүтэц, gallery"],
              ["Бодох арга", "Контентоос гадагш", "Бүтцээс дотогш"],
              ["Хослуулах", "Grid нүд дотор flex", "Бүгдийг хамт хэрэглэж болно"],
            ]}
          />
          <CodeCaption>
            Дүрэм: <b>хуудасны бүтэц → Grid</b>, <b>нэг эгнээний агуулга →
            Flexbox</b>. Хоёулаа хамт ажиллана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 3"
        page="17"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Хуудасны бүтэц угсрах"
        tasks={[
          <>
            <code>&lt;div class=&quot;page&quot;&gt;</code> дотор{" "}
            <code>header</code>, <code>aside</code>, <code>main</code>,{" "}
            <code>footer</code> бич.
          </>,
          <>
            <code>.page</code>-д <code>display: grid</code> ба{" "}
            <code>grid-template-columns: 200px 1fr</code> өг.
          </>,
          <>
            <code>grid-template-areas</code>-аар head дээр, side+main дунд, foot
            доор гэсэн бүтэц зур.
          </>,
          <>
            Элемент бүрд <code>grid-area</code> нэр өгч талбайд нь суулга.
          </>,
          <>
            <code>min-height: 100vh</code>-аар хуудсыг дэлгэц дүүрэн өндөртэй
            болго.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: LAYOUT_HTML },
              { name: "style.css", lang: "css", code: LAYOUT_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 17 · ХУРААНГУЙ */}
      {/* ДАСГАЛ 4 (§2) */}
      <Exercise
        label="Дасгал 4"
        page="18"
        total={TOTAL}
        tag="Дасгал 4 · хэсэг 2"
        title="grid-template-areas-аар бүтэц угсрах"
        tasks={[
          <>
            <code>header</code>, <code>sidebar</code>, <code>main</code>,{" "}
            <code>footer</code> хэсгүүдийг <code>grid-template-areas</code>-аар
            байрлуул.
          </>,
          <>
            <code>header</code> ба <code>footer</code> бүтэн өргөнийг, дунд нь
            sidebar + main байрлахаар areas зур.
          </>,
          <>
            <code>grid-template-columns</code>-д sidebar-т тогтмол, main-д{" "}
            <code>1fr</code> өг.
          </>,
          <>
            Хэсэг бүрт <code>grid-area</code> нэр оноож газартаа суулга.
          </>,
        ]}
        hints={[
          "areas нь мөр бүрийг хашилтанд зурдаг: \"header header\".",
          "Ижил нэрийг давтан бичвэл тэр хэсэг сунаж байрлана.",
          "Элемент бүрт grid-area: нэр; гэж зааж өгнө.",
        ]}
        time="⏱ 15 минут"
      />

      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 12 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 12 дууслаа",
          topic: "css grid",
        }}
        cards={[
          {
            num: "01",
            title: "grid + fr",
            desc: "grid-template-columns ба fr нэгжээр багана хуваана.",
          },
          {
            num: "02",
            title: "repeat / gap",
            desc: "repeat() давтаж, gap нүднүүдийн зайг өгнө.",
          },
          {
            num: "03",
            title: "minmax / auto-fit",
            desc: "Зайнд тааруулж баганын тоог автоматаар сонгоно.",
          },
          {
            num: "04",
            title: "grid-areas",
            desc: "Бүтцийг нэрээр зурж, бүхэл хуудас угсарна.",
          },
        ]}
      />

      {/* 18 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-12 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та Grid-ээр хоёр хэмжээст layout угсарч чадна. Дараагийн хичээлээр responsive design ба media query-г үзэж, хуудсаа аливаа дэлгэцэд тохирдог болгоно. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 12 — css grid</span>
          </>
        }
      />
    </Deck>
  );
}

const gcell = {
  padding: "16px",
  background: "#21262d",
  color: "#f8fafc",
  borderRadius: 6,
  textAlign: "center",
  fontWeight: 700,
  fontSize: 14,
} as const;
