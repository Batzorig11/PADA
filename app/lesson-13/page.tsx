import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  CompareTable,
  DosDonts,
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
  title: "erxes · Хичээл 13 — Responsive design ба media query",
};

/**
 * ХИЧЭЭЛ 13 — Responsive design ба media query
 * 🎯 Хуудсаа аливаа дэлгэцийн хэмжээнд тохирдог болгож сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — viewport, @media, breakpoint, mobile-first
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — responsive нэгж, responsive зураг, нуух/харуулах
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "20";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const GRID_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Responsive grid</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="grid">
      <div class="card">1</div>
      <div class="card">2</div>
      <div class="card">3</div>
      <div class="card">4</div>
      <div class="card">5</div>
      <div class="card">6</div>
    </section>
  </body>
</html>
`;

const GRID_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

/* Mobile-first: эхлээд 1 багана */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 24px;
}

.card {
  padding: 32px;
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}

/* таблет: 2 багана */
@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* десктоп: 3 багана */
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

const NAV_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Responsive navbar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="nav">
      <div class="logo">erxes</div>
      <nav class="links">
        <a href="#">Нүүр</a>
        <a href="#">Үнэ</a>
        <a href="#">Холбоо барих</a>
      </nav>
    </header>
  </body>
</html>
`;

const NAV_CSS = `body {
  margin: 0;
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

/* Mobile-first: босоо овоолно */
.nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: #161b22;
}

.logo {
  font-weight: 700;
  color: #39d353;
  font-size: 22px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.links a {
  color: #f8fafc;
  text-decoration: none;
}

/* десктоп: хэвтээ эгнэнэ */
@media (min-width: 700px) {
  .nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .links {
    flex-direction: row;
    gap: 24px;
  }
}
`;

export default function Lesson13() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-13 · responsive · media query</>}
        title={
          <>
            Responsive
            <br />
            design
            <Cursor />
          </>
        }
        subtitle="Утас, таблет, том дэлгэц — нэг л хуудас бүгдэд тохирох ёстой. media query-ээр дэлгэцийн өргөнд хариу үзүүлж, mobile-first зарчмаар бүтээж сурна."
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
                title: "Flexbox ба Grid",
                desc: "Нэг ба хоёр хэмжээст layout.",
              },
              {
                idx: "✓",
                title: "Нэгжүүд",
                desc: "px, rem, em, %, vw, vh.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Layout-ыг дэлгэц бүрд тохируулах.",
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
                title: "viewport ба @media",
                desc: "Дэлгэцийн өргөнд хариу үзүүлэх.",
              },
              {
                idx: "02",
                title: "Breakpoint · mobile-first",
                desc: "Жижигээс томруу бүтээх.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Responsive нэгж ба зураг",
                desc: "max-width, %, уян зураг.",
              },
              {
                idx: "04",
                title: "Нуух / харуулах",
                desc: "Дэлгэцээс хамаарч элемент удирдах.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — MEDIA QUERY
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ media query"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            media
            <br />
            query
          </>
        }
        lead="Дэлгэцийн өргөнөөс хамаарч өөр CSS хэрэглэх арга. viewport meta, @media ба mobile-first зарчмыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: RESPONSIVE */}
      <KeyTerm
        label="Гол ойлголт: responsive"
        page="05"
        total={TOTAL}
        term="Responsive design"
        def={
          <>
            <b>Responsive design</b> гэдэг нь нэг хуудас <i>бүх дэлгэцэд</i>{" "}
            тохирч өөрчлөгдөхийг хэлнэ. Эхлээд <code>&lt;head&gt;</code>-д{" "}
            <span className="inline-code">
              meta name=&quot;viewport&quot;
            </span>{" "}
            тавьж, дараа нь <span className="inline-code">@media</span>-ээр
            өргөнд хариу үзүүлнэ.
          </>
        }
        note='<meta name="viewport" content="width=device-width">'
      />

      {/* 06 · @MEDIA SYNTAX */}
      <Slide
        label="@media"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 media", topic: "@media дүрэм" }}
      >
        <Frame>
          <Eyebrow className="anim">Нөхцөлт CSS</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>@media</code> дүрмийн бүтэц
          </h2>
          <CodeWindow
            numbered
            filename="style.css"
            lang="css"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.com>{"/* энгийн (бүх дэлгэцэд) */"}</T.com>
            </Line>
            <Line>
              <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>font-size</T.prop>
              <T.punct>:</T.punct> <T.num>16px</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
            <Line> </Line>
            <Line state="hl">
              <T.kw>@media</T.kw> <T.punct>(</T.punct>
              <T.prop>min-width</T.prop>
              <T.punct>:</T.punct> <T.num>900px</T.num>
              <T.punct>)</T.punct> <T.punct>{"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>font-size</T.prop>
              <T.punct>:</T.punct> <T.num>24px</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>min-width: 900px</b> = «дэлгэц 900px-ээс <i>өргөн</i> бол» энэ
            CSS-ийг нэм. Дотор нь ердийн CSS дүрэм бичнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · MOBILE-FIRST */}
      <Slide
        label="mobile-first"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 media", topic: "mobile-first" }}
      >
        <Frame>
          <Eyebrow className="anim">Жижигээс томруу</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Mobile-first зарчим</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[{ head: "Арга", width: "34%" }, { head: "Утга" }]}
            rows={[
              [
                <code key="1">min-width</code>,
                "Жижиг дэлгэц анхдагч, томд нэмж өөрчилнө (mobile-first).",
              ],
              [
                <code key="2">max-width</code>,
                "Том дэлгэц анхдагч, жижигт нэмж өөрчилнө (desktop-first).",
              ],
            ]}
          />
          <CodeCaption>
            <b>Mobile-first</b> (min-width) нь өнөөдрийн стандарт — энгийн
            кодоор хамгийн жижиг дэлгэцийг бичээд, томруу нь breakpoint-оор
            нэмнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · BREAKPOINTS */}
      <Slide
        label="breakpoints"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 media", topic: "нийтлэг breakpoint" }}
      >
        <Frame>
          <Eyebrow className="anim">Хаана таслах вэ</Eyebrow>
          <h2 className="slide-title anim anim-2">Нийтлэг breakpoint-ууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Төхөөрөмж", width: "34%" },
              { head: "Ойролцоо өргөн" },
            ]}
            rows={[
              ["Утас (phone)", "< 600px"],
              ["Таблет (tablet)", "600px – 900px"],
              ["Лаптоп / десктоп", "900px – 1200px"],
              ["Том дэлгэц", "> 1200px"],
            ]}
          />
          <CodeCaption>
            Эдгээр нь хатуу дүрэм биш — <b>контент эвдрэх</b> цэг дээр
            breakpoint тавь. Олонтаа 600px ба 900px хангалттай.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Responsive картын grid"
        tasks={[
          <>
            <code>&lt;head&gt;</code>-д <code>viewport</code> meta таг тавь.
          </>,
          <>
            <code>.grid</code>-д <code>display: grid</code> өгч, анхдагчаар{" "}
            <code>grid-template-columns: 1fr</code> (1 багана) болго.
          </>,
          <>
            <code>@media (min-width: 600px)</code> дотор 2 багана болго.
          </>,
          <>
            <code>@media (min-width: 900px)</code> дотор 3 багана болго.
          </>,
          <>
            Цонхны өргөнийг өөрчилж, баганын тоо хэрхэн солигдож буйг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: GRID_HTML },
              { name: "style.css", lang: "css", code: GRID_CSS },
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
        title="Mobile-first breakpoint-ууд"
        tasks={[
          <>
            Картын grid-ийг <b>анхдагчаар</b> (mobile) 1 баганатай бич.
          </>,
          <>
            <code>@media (min-width: 768px)</code>-д 2 багана,{" "}
            <code>min-width: 1024px</code>-д 3 багана болго.
          </>,
          <>
            Breakpoint бүрд <code>gap</code> ба гарчгийн <code>font-size</code>-
            ийг өсгө.
          </>,
          <>
            DevTools-ийн responsive горимоор өргөнийг өөрчилж шилжилтийг ажигла.
          </>,
        ]}
        hints={[
          "Mobile-first = жижиг дэлгэцийг үндсэн загвар болгож, min-width-ээр томруулна.",
          "Breakpoint түгээмэл: 768px (таблет), 1024px (десктоп).",
          "Зөвхөн @media доторх дүрэм тухайн өргөнөөс хойш үйлчилнэ.",
        ]}
        time="⏱ 15 минут"
      />

      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="Responsive нэгж, зураг ба нуух/харуулах"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — UNITS & IMAGES
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Уян элементүүд"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Уян
            <br />
            элементүүд
          </>
        }
        lead="media query гэлтгүй элементийг өөрөө уян болгох нэгж ба зургийн заль. Дараа нь дэлгэцээс хамаарч нуух/харуулах."
      />

      {/* 12 · RESPONSIVE UNITS */}
      <Slide
        label="responsive нэгж"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 уян", topic: "max-width · %" }}
      >
        <Frame>
          <Eyebrow className="anim">Өөрөө уян</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            Уян нэгж ба <code>max-width</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.container</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>width</T.prop>
                <T.punct>:</T.punct> <T.num>90%</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>max-width</T.prop>
                <T.punct>:</T.punct> <T.num>1100px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>margin</T.prop>
                <T.punct>:</T.punct> <T.num>0 auto</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <CompareTable
              compact
              columns={[{ head: "Нэгж", width: "30%" }, { head: "Хэрэглээ" }]}
              rows={[
                [<code key="1">%</code>, "Эцгийн дагуу уян өргөн."],
                [<code key="2">max-width</code>, "Том дэлгэцэд хэт өргөсөхөөс хязгаарлана."],
                [<code key="3">rem</code>, "Масштаблагдах текст."],
              ]}
            />
          </div>
          <CodeCaption>
            <b>width: 90% + max-width: 1100px</b> — жижиг дэлгэцэд уян,
            том дэлгэцэд тогтсон өргөнтэй болгох сонгодог жор.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 13 · RESPONSIVE IMAGE */}
      <Slide
        label="responsive зураг"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 уян", topic: "уян зураг" }}
      >
        <Frame>
          <Eyebrow className="anim">Зургийг хүрээнд багтаах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Responsive зураг</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>img</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>max-width</T.prop>
                <T.punct>:</T.punct> <T.num>100%</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>height</T.prop>
                <T.punct>:</T.punct> <T.num>auto</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>block</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  width: "100%",
                  height: 110,
                  background:
                    "linear-gradient(135deg, #39d353, #38bdf8)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0d1117",
                  fontWeight: 700,
                }}
              >
                зураг — эцгийнхээ өргөнд багтана
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>max-width: 100%</b> + <b>height: auto</b> — зураг хэзээ ч хүрээнээс
            хальж гарахгүй, харьцаагаа хадгална.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · HIDE / SHOW */}
      <Slide
        label="нуух / харуулах"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 уян", topic: "display: none" }}
      >
        <Frame>
          <Eyebrow className="anim">Дэлгэцээс хамаарч</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            media query доторх <code>display: none</code>
          </h2>
          <CodeWindow
            numbered
            filename="style.css"
            lang="css"
            className="anim anim-3"
            style={{ marginTop: 32 }}
          >
            <Line>
              <T.com>{"/* утсан дээр нуух */"}</T.com>
            </Line>
            <Line>
              <T.sel>.desktop-only</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>display</T.prop>
              <T.punct>:</T.punct> <T.num>none</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
            <Line> </Line>
            <Line state="hl">
              <T.kw>@media</T.kw> <T.punct>(</T.punct>
              <T.prop>min-width</T.prop>
              <T.punct>:</T.punct> <T.num>900px</T.num>
              <T.punct>)</T.punct> <T.punct>{"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.sel>.desktop-only</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>display</T.prop>
              <T.punct>:</T.punct> <T.num>block</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>display: none</b> нь элементийг бүрэн нуудаг — жижиг дэлгэцэд
            илүүдэл хэсгийг хасахад тохиромжтой.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ЁСТОЙ / ЁСГҮЙ */}
      <Slide
        label="зөвлөмж"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 уян", topic: "сайн дадал" }}
      >
        <Frame>
          <Eyebrow className="anim">Responsive зөвлөмж</Eyebrow>
          <h2 className="slide-title anim anim-2">Ёстой ба ёсгүй</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "viewport meta таг тавих.",
              "Mobile-first (min-width) бичих.",
              "% ба max-width хослуулах.",
              "Зурагт max-width: 100% өгөх.",
            ]}
            donts={[
              "viewport meta мартах.",
              "Бүх юмыг тогтмол px-ээр бичих.",
              "Хэт олон breakpoint нэмэх.",
              "Зөвхөн өөрийн дэлгэц дээр шалгах.",
            ]}
          />
        </Frame>
      </Slide>

      {/* 16 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 3"
        page="17"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Responsive navbar"
        tasks={[
          <>
            <code>&lt;header class=&quot;nav&quot;&gt;</code> дотор лого ба{" "}
            <code>.links</code> доторх 3 холбоос бич (viewport meta мартуузай).
          </>,
          <>
            Анхдагчаар (утас) <code>.nav</code> ба <code>.links</code>-ийг{" "}
            <code>flex-direction: column</code>-оор босоо овоол.
          </>,
          <>
            <code>@media (min-width: 700px)</code> дотор тэдгээрийг{" "}
            <code>flex-direction: row</code> болго.
          </>,
          <>
            Десктоп дээр <code>justify-content: space-between</code>,{" "}
            <code>align-items: center</code> өг.
          </>,
          <>
            Цонхыг нарийсгаж, цэс босоо овоологдож буйг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: NAV_HTML },
              { name: "style.css", lang: "css", code: NAV_CSS },
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
        title="Responsive hero ба зураг"
        tasks={[
          <>
            Hero доторх зурагт <code>max-width: 100%</code>,{" "}
            <code>height: auto</code> өгч хальж гарахаас сэргийл.
          </>,
          <>
            Жижиг дэлгэцэд (<code>max-width: 600px</code>) дэлгэрэнгүй цэсийг{" "}
            <code>display: none</code>-оор нуу.
          </>,
          <>
            Гарчгийн хэмжээг <code>clamp(1.5rem, 5vw, 3rem)</code>-ээр уян хатан
            болго.
          </>,
          <>
            Hero-г жижиг дэлгэцэд босоо (<code>flex-direction: column</code>)
            болго.
          </>,
        ]}
        hints={[
          "max-width: 100% нь зургийг эх элементээсээ хэтрэхгүй болгоно.",
          "clamp(min, дэлгэцэд хамаарах, max) — уян хатан хэмжээ.",
          "display: none нь элементийг бүрэн нууна.",
        ]}
        time="⏱ 15 минут"
      />

      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 13 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 13 дууслаа",
          topic: "responsive · media query",
        }}
        cards={[
          {
            num: "01",
            title: "viewport + @media",
            desc: "meta таг тавиад, өргөнд хариу үзүүлэх дүрэм бичнэ.",
          },
          {
            num: "02",
            title: "Mobile-first",
            desc: "Жижиг анхдагч, min-width-ээр томруу нэмж бүтээнэ.",
          },
          {
            num: "03",
            title: "Уян нэгж",
            desc: "% + max-width + rem нь өөрөө уян хуудас өгнө.",
          },
          {
            num: "04",
            title: "Зураг ба нуух",
            desc: "max-width: 100%, display: none-ээр элемент удирдана.",
          },
        ]}
      />

      {/* 18 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-13 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та хуудсаа аливаа дэлгэцэд тохирдог болголоо. Дараагийн хичээлээр transition, transform, animation-аар хуудсандаа хөдөлгөөн ба амьд харилцаа нэмж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 13 — responsive design</span>
          </>
        }
      />
    </Deck>
  );
}
