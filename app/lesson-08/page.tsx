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
  title: "erxes · Хичээл 08 — Typography ба нэгжүүд",
};

/**
 * ХИЧЭЭЛ 08 — Typography ба нэгжүүд
 * 🎯 Текстээ загварчилж, зөв нэгжийг сонгож сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Typography: font-family, web font, size/weight/line-height, align/decoration
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Нэгжүүд: px vs em/rem vs %/vw/vh
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "20";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const TYPO_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Нийтлэл</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <article class="post">
      <h1 class="title">Тайван хотын өглөө</h1>
      <p class="lead">Богино удиртгал өгүүлбэр энд байрлана.</p>
      <p class="body">
        Үндсэн текст. Уншихад тав тухтай байхын тулд мөр хоорондын
        зай, үсгийн хэмжээг тааруулна.
      </p>
      <a class="more" href="#">Цааш унших</a>
    </article>
  </body>
</html>
`;

const TYPO_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
}

.post {
  width: 560px;
  margin: 40px auto;
  padding: 32px;
  background: #161b22;
  border-radius: 12px;
  /* бүх текстийн үндсэн шрифт */
  font-family: Georgia, serif;
}

.title {
  font-size: 40px;
  font-weight: 700;
  /* үсэг хоорондын зай бага зэрэг нягтруулна */
  letter-spacing: -1px;
}

.lead {
  font-size: 20px;
  color: #9aa4b2;
  font-style: italic;
}

.body {
  font-size: 18px;
  /* мөр хоорондын зай — уншихад чухал */
  line-height: 1.7;
}

.more {
  color: #39d353;
  /* доогуур зураасыг нь авна */
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
`;

const UNITS_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Нэгжүүд</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="hero">
      <h1>Том гарчиг</h1>
      <p>rem ба em нэгжээр хэмжээ тааруулсан текст.</p>
      <a class="btn" href="#">Дэлгэрэнгүй</a>
    </section>
  </body>
</html>
`;

const UNITS_CSS = `html {
  /* үндсэн хэмжээ — rem энэ дээр тулгуурлана */
  font-size: 16px;
}

body {
  background: #0d1117;
  color: #f8fafc;
}

.hero {
  /* дэлгэцийн өндрийн талыг эзэлнэ */
  min-height: 50vh;
  /* дэлгэцийн өргөний 80% */
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background: #161b22;
  border-radius: 12px;
}

.hero h1 {
  /* 16px * 2.5 = 40px */
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.125rem;
  line-height: 1.7;
}

.btn {
  font-size: 1rem;
  /* em нь энэ элементийн font-size-аас хамаарна */
  padding: 0.75em 1.5em;
  background: #39d353;
  color: #0d1117;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
}
`;

export default function Lesson08() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-08 · typography · нэгжүүд</>}
        title={
          <>
            Typography
            <br />
            ба нэгжүүд
            <Cursor />
          </>
        }
        subtitle="Текст бол хуудасны гол агуулга. Шрифт, хэмжээ, мөр хоорондын зайг загварчилж, px / em / rem / % / vw / vh нэгжүүдийн хэзээ алийг нь хэрэглэхийг сурна."
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
                title: "CSS selector ба өнгө",
                desc: "element/.class/#id, color, background.",
              },
              {
                idx: "✓",
                title: "Box model",
                desc: "padding, border, margin, border-radius, shadow.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Текстээ загварчилж, зөв нэгж сонгох.",
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
                title: "font-family ба web font",
                desc: "Шрифтийг сонгож, Google Fonts холбох.",
              },
              {
                idx: "02",
                title: "Хэмжээ ба зай",
                desc: "font-size, weight, line-height, align, decoration.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Үнэмлэхүй нэгж",
                desc: "px — тогтмол хэмжээ.",
              },
              {
                idx: "04",
                title: "Харьцангуй нэгж",
                desc: "em, rem, %, vw, vh — хамааралтай хэмжээ.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — TYPOGRAPHY
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Typography"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Шрифт ба
            <br />
            текст
          </>
        }
        lead="Ямар шрифт сонгох, үсгийн хэмжээ, жин, мөр хоорондын зайг хэрхэн тааруулж текстээ уншихад тав тухтай болгохыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: TYPOGRAPHY */}
      <KeyTerm
        label="Гол ойлголт: Typography"
        page="05"
        total={TOTAL}
        term="Typography"
        def={
          <>
            <b>Typography</b> гэдэг нь текстийг хэрхэн харагдуулах урлаг —
            шрифт, хэмжээ, жин, мөр хоорондын зайг тааруулах явдал. Сайн
            typography нь хуудсыг <i>уншихад хялбар</i>, цэвэрхэн болгоно.
          </>
        }
        note="font-family · font-size · line-height"
      />

      {/* 06 · FONT-FAMILY — КОД БА ҮР ДҮН */}
      <Slide
        label="font-family"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 typography", topic: "font-family" }}
      >
        <Frame>
          <Eyebrow className="anim">Шрифт сонгох</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>font-family</code> — шрифтийн овог
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 32 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>body</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>font-family</T.prop>
                <T.punct>:</T.punct> <T.str>&quot;Inter&quot;</T.str>
                <T.punct>,</T.punct> <T.num>Arial</T.num>
                <T.punct>,</T.punct> <T.num>sans-serif</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 22 }}>
                  serif — Georgia
                </div>
                <div
                  style={{ fontFamily: "Arial, sans-serif", fontSize: 22 }}
                >
                  sans-serif — Arial
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 22 }}>
                  monospace — Courier
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Олон шрифтийг <b>таслалаар</b> жагсаана — эхнийх нь олдохгүй бол
            дараагийнх руу шилжинэ. Төгсгөлд нь <code>serif</code>/
            <code>sans-serif</code> гэх <b>ерөнхий бүлэг</b> заавал тавь.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · WEB FONT — GOOGLE FONTS */}
      <Slide
        label="web font"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 typography", topic: "web font" }}
      >
        <Frame>
          <Eyebrow className="anim">Гадны шрифт холбох</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            Web font — Google Fonts
          </h2>
          <CodeWindow
            numbered
            filename="index.html / style.css"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.com>{"<!-- index.html — <head> дотор -->"}</T.com>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>link</T.tag> <T.attr>rel</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;stylesheet&quot;</T.str>
            </Line>
            <Line indent={6}>
              <T.attr>href</T.attr>
              <T.punct>=</T.punct>
              <T.str>
                &quot;https://fonts.googleapis.com/css2?family=Inter&quot;
              </T.str>{" "}
              <T.punct>/&gt;</T.punct>
            </Line>
            <Line> </Line>
            <Line>
              <T.com>{"/* style.css дотор хэрэглэх */"}</T.com>
            </Line>
            <Line>
              <T.sel>body</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>font-family</T.prop>
              <T.punct>:</T.punct> <T.str>&quot;Inter&quot;</T.str>
              <T.punct>,</T.punct> <T.num>sans-serif</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Эхлээд <code>&lt;head&gt;</code>-д <b>link</b>-ээр шрифтийг татаж
            оруулаад, дараа нь CSS дотор <b>нэрээр</b> нь хэрэглэнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · SIZE / WEIGHT / LINE-HEIGHT */}
      <Slide
        label="size, weight, line-height"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 typography", topic: "хэмжээ · жин · мөрийн зай" }}
      >
        <Frame>
          <Eyebrow className="anim">Хэмжээ ба жин</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>font-size</code> · <code>font-weight</code> ·{" "}
            <code>line-height</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 28 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.title</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>font-size</T.prop>
                <T.punct>:</T.punct> <T.num>32px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>font-weight</T.prop>
                <T.punct>:</T.punct> <T.num>700</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.body</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>line-height</T.prop>
                <T.punct>:</T.punct> <T.num>1.7</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: 12,
                }}
              >
                Жинтэй гарчиг
              </div>
              <div
                style={{ fontSize: 16, lineHeight: 1.7, color: "#9aa4b2" }}
              >
                line-height 1.7 — мөр хоорондын зай нэмэгдэж, урт текст уншихад
                амар болсон. Энэ нь font-size-ийн дахин ихсэлт.
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>font-weight</b>: 400 = энгийн, 700 = тод. <b>line-height</b>{" "}
            нэгжгүй тоо (1.5–1.7) уншихад хамгийн тохиромжтой.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ALIGN / DECORATION / SPACING */}
      <Slide
        label="align, decoration, spacing"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 typography", topic: "байрлал · чимэглэл" }}
      >
        <Frame>
          <Eyebrow className="anim">Байрлал ба чимэглэл</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>text-align</code> · <code>text-decoration</code> ·{" "}
            <code>letter-spacing</code>
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[{ head: "Property", width: "38%" }, { head: "Юу хийдэг" }]}
            rows={[
              [
                <code key="1">text-align: center;</code>,
                "Текстийг голлуулна (left/right/center/justify).",
              ],
              [
                <code key="2">text-decoration: none;</code>,
                "Холбоосын доогуур зураасыг авна / underline нэмнэ.",
              ],
              [
                <code key="3">text-transform: uppercase;</code>,
                "Бүх үсгийг ТОМ болгоно.",
              ],
              [
                <code key="4">letter-spacing: 1px;</code>,
                "Үсэг хоорондын зайг өргөсгөнө/нягтруулна.",
              ],
            ]}
          />
          <CodeCaption>
            <code>text-decoration: none</code> нь холбоосын анхдагч доогуур
            зураасыг арилгахад байнга хэрэглэгддэг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="10"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Нийтлэлийн текст загварчлах"
        tasks={[
          <>
            <code>&lt;article class=&quot;post&quot;&gt;</code> дотор гарчиг,
            удиртгал, үндсэн текст, «Цааш унших» холбоос бич.
          </>,
          <>
            <code>.post</code>-д <code>font-family</code> өгч, бүх текстийн
            шрифтийг тохируул.
          </>,
          <>
            Гарчигт том <code>font-size</code>, <code>font-weight: 700</code>{" "}
            өг.
          </>,
          <>
            Үндсэн текстэд <code>line-height: 1.7</code> тавьж, уншихад тав
            тухтай болго.
          </>,
          <>
            Холбоосын <code>text-decoration</code>-ийг <code>none</code> болгож,{" "}
            <code>text-transform</code>, <code>letter-spacing</code>-ээр
            чимэглэ.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: TYPO_HTML },
              { name: "style.css", lang: "css", code: TYPO_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="px vs em / rem vs % / vw / vh"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — НЭГЖҮҮД
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Нэгжүүд"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            CSS
            <br />
            нэгжүүд
          </>
        }
        lead="px тогтмол, em/rem/%/vw/vh нь өөр зүйлээс хамаарна. Аль нэгжийг хэзээ хэрэглэхийг ойлгоно."
      />

      {/* 13 · ГОЛ ОЙЛГОЛТ: НЭГЖҮҮД */}
      <KeyTerm
        label="Гол ойлголт: нэгжүүд"
        page="13"
        total={TOTAL}
        term="Үнэмлэхүй vs харьцангуй"
        def={
          <>
            <b>Үнэмлэхүй (absolute)</b> нэгж — <span className="inline-code">px</span>{" "}
            — үргэлж ижил хэмжээтэй. <b>Харьцангуй (relative)</b> нэгж —{" "}
            <span className="inline-code">em</span>,{" "}
            <span className="inline-code">rem</span>,{" "}
            <span className="inline-code">%</span>,{" "}
            <span className="inline-code">vw/vh</span> — өөр зүйлээс
            (эх элемент, дэлгэц) хамаарч <i>уян хатан</i> өөрчлөгдөнө.
          </>
        }
        note="px тогтмол · бусад нь хамааралтай"
      />

      {/* 14 · PX — ҮНЭМЛЭХҮЙ */}
      <Slide
        label="px"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 нэгж", topic: "px — тогтмол" }}
      >
        <Frame>
          <Eyebrow className="anim">Үнэмлэхүй нэгж</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>px</code> — пиксел
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 32 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>width</T.prop>
                <T.punct>:</T.punct> <T.num>200px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>font-size</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  width: 200,
                  fontSize: 16,
                  background: "#161b22",
                  border: "2px solid #38bdf8",
                  padding: 16,
                  borderRadius: 8,
                  color: "#f8fafc",
                }}
              >
                width: 200px — хаана ч ижил
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>px</b> нь хэзээ ч өөрчлөгддөггүй тул урьдчилан таамаглахад амар —
            гэхдээ дэлгэцэд тааруулж <i>уян хатан</i> биш.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · EM / REM */}
      <Slide
        label="em / rem"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 нэгж", topic: "em vs rem" }}
      >
        <Frame>
          <Eyebrow className="anim">Шрифтэд тулгуурласан</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>em</code> ба <code>rem</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 28 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>html</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>font-size</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line> </Line>
              <Line>
                <T.sel>h1</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>font-size</T.prop>
                <T.punct>:</T.punct> <T.num>2.5rem</T.num>
                <T.punct>;</T.punct>{" "}
                <T.com>{"/* 40px */"}</T.com> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.btn</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>padding</T.prop>
                <T.punct>:</T.punct> <T.num>0.75em</T.num> <T.num>1.5em</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <CompareTable
              compact
              columns={[{ head: "Нэгж", width: "30%" }, { head: "Юунаас хамаарна" }]}
              rows={[
                [<code key="r">rem</code>, "Үндсэн (html) font-size-аас. Тогтвортой."],
                [<code key="e">em</code>, "Тухайн элементийн өөрийн font-size-аас."],
              ]}
            />
          </div>
          <CodeCaption>
            <b>rem</b> нь үргэлж <code>html</code>-ийн хэмжээнээс тооцох тул
            таамаглахад амар — ихэвчлэн <b>rem</b>-ийг сонгодог.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · % / VW / VH */}
      <Slide
        label="% / vw / vh"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 нэгж", topic: "хувь · дэлгэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Эх элемент ба дэлгэц</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>%</code> · <code>vw</code> · <code>vh</code>
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[{ head: "Нэгж", width: "26%" }, { head: "Утга" }]}
            rows={[
              [
                <code key="1">%</code>,
                "Эх элементийнхээ харгалзах хэмжээний хувь. width: 80% → эхийнхээ 80%.",
              ],
              [
                <code key="2">vw</code>,
                "Дэлгэцийн өргөний 1% (viewport width). 100vw = бүтэн өргөн.",
              ],
              [
                <code key="3">vh</code>,
                "Дэлгэцийн өндрийн 1% (viewport height). 100vh = бүтэн өндөр.",
              ],
            ]}
          />
          <CodeCaption>
            <code>min-height: 100vh</code> нь хэсгийг дэлгэц дүүрэн өндөртэй
            болгох түгээмэл арга. <b>vw/vh</b> нь дэлгэцийн хэмжээнд шууд
            тааруулна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 17 · НЭГЖ ХЭЗЭЭ ХЭРЭГЛЭХ */}
      <Slide
        label="нэгж сонгох"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 нэгж", topic: "аль нэгжийг хэзээ" }}
      >
        <Frame>
          <Eyebrow className="anim">Хураангуй заавар</Eyebrow>
          <h2 className="slide-title anim anim-2">Аль нэгжийг хэзээ?</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Хэрэгцээ", width: "46%" }, { head: "Нэгж" }]}
            rows={[
              ["Тогтмол хүрээ, border, жижиг зай", "px"],
              ["Текстийн хэмжээ (масштаблагдах)", "rem"],
              ["Элементийн дотоод зай (товч г.м)", "em"],
              ["Эх элементийн дагуу өргөн", "%"],
              ["Дэлгэц дүүрэн хэсэг (hero)", "vw / vh"],
            ]}
          />
          <CodeCaption>
            Алтан дүрэм: <b>текстэд rem, дотоод зайд em, layout-д % ба vw/vh</b>{" "}
            — px-ийг зөвхөн тогтмол байх ёстой зүйлд.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 18 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="18"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Нэгжээр hero хэсэг угсрах"
        tasks={[
          <>
            <code>html</code>-д <code>font-size: 16px</code> тавьж, rem-ийн суурь
            тогтоо.
          </>,
          <>
            <code>&lt;section class=&quot;hero&quot;&gt;</code>-д{" "}
            <code>min-height: 50vh</code>, <code>width: 80%</code> өг.
          </>,
          <>
            Гарчгийн <code>font-size</code>-ийг <code>2.5rem</code>, текстийг{" "}
            <code>1.125rem</code> болго.
          </>,
          <>
            Товчны дотоод зайг <code>padding: 0.75em 1.5em</code> гэж{" "}
            <b>em</b>-ээр өг.
          </>,
          <>
            font-size-ийг өөрчлөөд, rem ба em хэрхэн өөрөөр хариу үзүүлж буйг
            ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: UNITS_HTML },
              { name: "style.css", lang: "css", code: UNITS_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 19 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 08 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 08 дууслаа",
          topic: "typography · нэгжүүд",
        }}
        cards={[
          {
            num: "01",
            title: "font-family",
            desc: "Шрифтийг таслалаар жагсааж, ерөнхий бүлгээр төгсгөнө.",
          },
          {
            num: "02",
            title: "Хэмжээ ба зай",
            desc: "font-size, weight, line-height-ээр уншихад амар болгоно.",
          },
          {
            num: "03",
            title: "px vs rem/em",
            desc: "px тогтмол, rem html-ээс, em элементийн өөрийн хэмжээнээс.",
          },
          {
            num: "04",
            title: "% · vw · vh",
            desc: "Эх элемент ба дэлгэцийн хэмжээнд тааруулж масштаблана.",
          },
        ]}
      />

      {/* 20 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-08 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та текстээ загварчилж, зөв нэгж сонгож чадна. Дараагийн хичээлээр display ба position-ийг үзэж, элементүүдийг хуудсан дээр байрлуулж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 08 — typography ба нэгжүүд</span>
          </>
        }
      />
    </Deck>
  );
}
