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
  title: "erxes · Хичээл 06 — CSS, сонгогч, өнгө",
};

/**
 * ХИЧЭЭЛ 06 — CSS-тэй танилцах, сонгогч, өнгө
 * 🎯 Сонгогч ба cascade ашиглан хуудсаа загварчилж эхлэх.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — CSS гэж юу вэ, холбох арга, сонгогч
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Specificity, өнгө, background
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "22";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const FIRST_CSS_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Эхний CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Сайн байна уу, CSS!</h1>
    <p class="lead">Энэ бол онцолсон тэргүүн догол мөр.</p>
    <p>Энэ бол ердийн догол мөр.</p>
  </body>
</html>
`;

const FIRST_CSS_CSS = `body {
  background: #f4f4f4;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2563eb;
}

.lead {
  color: #16a34a;
}
`;

const CARD_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Карт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <h2>Энгийн карт</h2>
      <p>Энэ бол загварчилсан картын текст.</p>
    </div>

    <div class="card" id="featured">
      <h2>Онцлох карт</h2>
      <p>Энэ картын дэвсгэрийг id сонгогчоор давуулсан.</p>
    </div>
  </body>
</html>
`;

const CARD_CSS = `body {
  background: linear-gradient(#1e293b, #0f172a);
}

.card {
  background: #334155;
  color: #f8fafc;
}

.card h2 {
  color: rgb(56, 189, 248);
}

.card p {
  color: hsl(150, 60%, 75%);
}

/* id сонгогч class-аас давуу — !important хэрэггүй */
#featured {
  background: #4c1d95;
}
`;

export default function Lesson06() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-06 · css · сонгогч · өнгө</>}
        title={
          <>
            CSS-ээр
            <br />
            амьдруулах
            <Cursor />
          </>
        }
        subtitle="HTML бол бүтэц, CSS бол загвар. Хэв загвараа хэрхэн холбох, сонгогчоор элемент сонгох, cascade ба өнгөтэй ажиллаж сурна."
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
          <Eyebrow className="anim">Өмнөх хичээлүүдээс</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "HTML-ийг бүрэн үзлээ",
                desc: "Бүтэц, тагууд, хүснэгт, форм, семантик.",
              },
              {
                idx: "✓",
                title: "class ба id",
                desc: "Элементэд нэр өгдөг атрибутууд — одоо хэрэг болно.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Тэр бүтцээ CSS-ээр өнгө, загвартай болгож эхэлнэ.",
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
                title: "CSS гэж юу вэ",
                desc: "Дүрмийн бүтэц + холбох 3 арга.",
              },
              {
                idx: "02",
                title: "Сонгогч",
                desc: "Element, class, id сонгогч.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Specificity ба cascade",
                desc: "Зөрчилдвөл аль дүрэм ялах вэ?",
              },
              {
                idx: "04",
                title: "Өнгө ба background",
                desc: "hex, rgb, hsl ба дэвсгэр.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — CSS, ХОЛБОХ АРГА, СОНГОГЧ
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ CSS ба сонгогч"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            CSS ба
            <br />
            сонгогч
          </>
        }
        lead="CSS гэж юу болох, түүнийг HTML-тэй хэрхэн холбож, аль элементийг загварчлахаа сонгох вэ?"
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: CSS */}
      <KeyTerm
        label="Гол ойлголт: CSS"
        page="05"
        total={TOTAL}
        term="CSS"
        def={
          <>
            <b>CSS (Cascading Style Sheets)</b> нь HTML элементүүд хэрхэн{" "}
            <i>харагдахыг</i> тодорхойлдог хэл. Өнгө, фонт, зай, байрлал — бүгд
            CSS-ээр. <span className="inline-code">сонгогч {"{"} шинж: утга; {"}"}</span>{" "}
            хэлбэртэй.
          </>
        }
        note="HTML = бүтэц · CSS = загвар"
      />

      {/* 06 · CSS ДҮРМИЙН БҮТЭЦ */}
      <Slide
        label="Дүрмийн бүтэц"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 css", topic: "дүрмийн анатоми" }}
      >
        <Frame>
          <Eyebrow className="anim">Анатоми</Eyebrow>
          <h2 className="slide-title anim anim-2">CSS дүрмийн бүтэц</h2>
          <CodeWindow
            numbered
            filename="style.css"
            lang="css"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.sel>h1</T.sel> <T.punct>{"{"}</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.prop>color</T.prop>
              <T.punct>:</T.punct> <T.num>#39d353</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line indent={2}>
              <T.prop>font-size</T.prop>
              <T.punct>:</T.punct> <T.num>32px</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <div
            className="diagram anim anim-4"
            style={{ marginTop: 40, justifyContent: "flex-start", gap: 56 }}
          >
            <div>
              <div style={{ fontSize: 30, color: "var(--s-sel)", fontWeight: 700 }}>h1</div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>сонгогч</div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-prop)", fontWeight: 700 }}>color</div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>шинж (property)</div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-num)", fontWeight: 700 }}>#39d353</div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>утга (value)</div>
            </div>
          </div>
          <CodeCaption>
            <b>сонгогч</b> юуг, <b>шинж: утга</b> хосууд хэрхэн харагдахыг заана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · CSS ХОЛБОХ 3 АРГА */}
      <Slide
        label="CSS холбох 3 арга"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 css", topic: "холбох арга" }}
      >
        <Frame>
          <Eyebrow className="anim">3 арга</Eyebrow>
          <h2 className="slide-title anim anim-2">CSS-ийг HTML-тэй холбох</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Арга", width: "24%" },
              { head: "Хэрхэн", width: "38%" },
              { head: "Хэзээ" },
            ]}
            rows={[
              [
                "Inline",
                <code key="i">style=&quot;color:red&quot;</code>,
                "Зөвхөн нэг элементэд — багадаа ашигла.",
              ],
              [
                "Internal",
                <code key="t">&lt;style&gt; ... &lt;/style&gt;</code>,
                "head дотор — нэг хуудсанд.",
              ],
              [
                "External",
                <code key="e">&lt;link&gt; style.css</code>,
                "Тусдаа файл — олон хуудсанд (хамгийн зөв).",
              ],
            ]}
          />
          <CodeCaption>
            Жинхэнэ төсөлд <b>External</b> хамгийн түгээмэл — нэг файл, олон хуудас.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · EXTERNAL CSS КОД */}
      <Slide
        label="External CSS"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 css", topic: "link · external" }}
      >
        <Frame>
          <Eyebrow className="anim">Хамгийн зөв арга</Eyebrow>
          <h2 className="slide-title sm anim anim-2">External CSS холбох</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="index.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>head</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>link</T.tag> <T.attr>rel</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;stylesheet&quot;</T.str>
              </Line>
              <Line state="hl" indent={8}>
                <T.attr>href</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;style.css&quot;</T.str> <T.punct>/&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>head</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>body</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>background</T.prop>
                <T.punct>:</T.punct> <T.num>#0d1117</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
          </div>
          <CodeCaption>
            <b>&lt;link&gt;</b>-ийг head дотор бичнэ — нэг .css файлыг олон хуудас
            хуваалцана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ГОЛ ОЙЛГОЛТ: СОНГОГЧ */}
      <KeyTerm
        label="Гол ойлголт: Сонгогч"
        page="09"
        total={TOTAL}
        term="Сонгогч · Selector"
        def={
          <>
            <b>Сонгогч</b> нь аль элементэд загвар хэрэглэхийг сонгоно.{" "}
            <span className="inline-code">h1</span> — тагаар,{" "}
            <span className="inline-code">.lead</span> — class-аар,{" "}
            <span className="inline-code">#title</span> — id-аар.
          </>
        }
        note=". = class · # = id"
      />

      {/* 10 · СОНГОГЧИЙН ТӨРЛҮҮД */}
      <Slide
        label="Сонгогчийн төрлүүд"
        page="10"
        total={TOTAL}
        footer={{ tag: "§01 css", topic: "element · class · id" }}
      >
        <Frame>
          <Eyebrow className="anim">Код → үр дүн</Eyebrow>
          <h2 className="slide-title sm anim anim-2">3 үндсэн сонгогч</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>p</T.sel> <T.punct>{"{"}</T.punct> <T.prop>color</T.prop>
                <T.punct>:</T.punct> <T.num>gray</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line state="hl">
                <T.sel>.lead</T.sel> <T.punct>{"{"}</T.punct> <T.prop>color</T.prop>
                <T.punct>:</T.punct> <T.num>green</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>#title</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>font-size</T.prop>
                <T.punct>:</T.punct> <T.num>40px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <CodeWindow sm filename="index.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>h1</T.tag> <T.attr>id</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;title&quot;</T.str>
                <T.punct>&gt;</T.punct>...
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>p</T.tag> <T.attr>class</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;lead&quot;</T.str>
                <T.punct>&gt;</T.punct>...
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>...
              </Line>
            </CodeWindow>
          </div>
          <CodeCaption>
            <b>p</b> бүх догол, <b>.lead</b> зөвхөн class-тай, <b>#title</b> зөвхөн
            тэр id-тай элементэд.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 11 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="11"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Эхний CSS файл"
        tasks={[
          <>
            <code>style.css</code> үүсгэж, <code>&lt;link&gt;</code>-ээр HTML-тэй
            холбо.
          </>,
          <>
            <code>body</code> сонгогчид background ба фонт өг.
          </>,
          <>
            <code>h1</code>-ийн өнгийг <b>element сонгогчоор</b> өөрчил.
          </>,
          <>
            Нэг догол мөрд <code>class=&quot;lead&quot;</code> өгч,{" "}
            <code>.lead</code>-ийг өөр өнгөтэй болго.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут"
            files={[
              { name: "index.html", lang: "html", code: FIRST_CSS_HTML },
              { name: "style.css", lang: "css", code: FIRST_CSS_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="12"
        total={TOTAL}
        mins={20}
        resumeTopic="Specificity, өнгө ба background"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — SPECIFICITY, ӨНГӨ, BACKGROUND
          ============================================================ */}

      {/* 13 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Cascade ба өнгө"
        page="13"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Cascade ба
            <br />
            өнгө
          </>
        }
        lead="Хоёр дүрэм зөрчилдвөл аль нь ялах вэ? Дараа нь өнгийг хэрхэн зааж өгөхөө үзнэ."
      />

      {/* 14 · ГОЛ ОЙЛГОЛТ: CASCADE */}
      <KeyTerm
        label="Гол ойлголт: Cascade"
        page="14"
        total={TOTAL}
        term="Cascade ба Specificity"
        def={
          <>
            Нэг элементэд олон дүрэм тохирвол <b>specificity</b> (тодорхой байдал)
            өндөр нь ялна. Тэнцвэл <i>сүүлд бичигдсэн</i> дүрэм хүчинтэй — энэ нь
            «cascade» (урсгал).
          </>
        }
        note="id > class > element"
      />

      {/* 15 · SPECIFICITY ЗЭРЭГЛЭЛ */}
      <Slide
        label="Specificity зэрэглэл"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 cascade", topic: "хэн ялах вэ" }}
      >
        <Frame>
          <Eyebrow className="anim">Хэн ялах вэ?</Eyebrow>
          <h2 className="slide-title anim anim-2">Specificity-н зэрэглэл</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Сонгогч", width: "30%" },
              { head: "Жин", width: "20%" },
              { head: "Тайлбар" },
            ]}
            rows={[
              [<code key="e">element</code>, "1", "Хамгийн сул — p, h1, div."],
              [<code key="c">.class</code>, "10", "Дунд зэрэг — давтагдаж болно."],
              [<code key="i">#id</code>, "100", "Хүчтэй — нэг элементэд."],
              [<code key="s">style=&quot;&quot;</code>, "1000", "Inline — маш хүчтэй (болгоомжтой)."],
              [<code key="imp">!important</code>, "∞", "Бүгдийг дарна — зөвхөн онцгой үед."],
            ]}
          />
          <CodeCaption>
            Зөрчил гарвал <b>жин өндөртэй</b> нь ялна — тэнцвэл сүүлийнх нь.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ГОЛ ОЙЛГОЛТ: ӨНГӨ */}
      <KeyTerm
        label="Гол ойлголт: Өнгө"
        page="16"
        total={TOTAL}
        term="Өнгө · Color"
        def={
          <>
            CSS-д өнгийг хэд хэдэн хэлбэрээр зааж болно: нэрээр{" "}
            (<span className="inline-code">red</span>),{" "}
            <span className="inline-code">#rrggbb</span> (hex),{" "}
            <span className="inline-code">rgb()</span>,{" "}
            <span className="inline-code">hsl()</span>. Бүгд ижил өнгийг өөр аргаар
            илэрхийлдэг.
          </>
        }
        note="hex хамгийн түгээмэл"
      />

      {/* 17 · ӨНГӨНИЙ ФОРМАТУУД */}
      <Slide
        label="Өнгөний формат"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 өнгө", topic: "hex · rgb · hsl" }}
      >
        <Frame>
          <Eyebrow className="anim">Нэг өнгө — олон бичлэг</Eyebrow>
          <h2 className="slide-title anim anim-2">Өнгөний форматууд</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Формат", width: "22%" },
              { head: "Жишээ", width: "34%" },
              { head: "Тайлбар" },
            ]}
            rows={[
              [
                "Нэр",
                <code key="n">tomato</code>,
                "Урьдчилан тодорхойлсон ~140 нэр.",
              ],
              [
                "Hex",
                <code key="h">#39d353</code>,
                "Улаан-ногоон-цэнхэр 16-тын тоо.",
              ],
              [
                "RGB",
                <code key="r">rgb(57, 211, 83)</code>,
                "Улаан/ногоон/цэнхэр 0–255.",
              ],
              [
                "RGBA",
                <code key="ra">rgba(57,211,83,.5)</code>,
                "Сүүлийн тоо — тунгалаг байдал (alpha).",
              ],
              [
                "HSL",
                <code key="hsl">hsl(135, 64%, 53%)</code>,
                "Өнгөний түрэг, ханалт, гэрэлтэлт.",
              ],
            ]}
          />
        </Frame>
      </Slide>

      {/* 18 · ӨНГӨ — КОД БА ҮР ДҮН */}
      <Slide
        label="Өнгө код"
        page="18"
        total={TOTAL}
        footer={{ tag: "§02 өнгө", topic: "color · background" }}
      >
        <Frame>
          <Eyebrow className="anim">Код → үр дүн</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Текст ба дэвсгэрийн өнгө</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="card.css" lang="css">
              <Line>
                <T.sel>.card</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>color</T.prop>
                <T.punct>:</T.punct> <T.num>#fff</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>background</T.prop>
                <T.punct>:</T.punct> <T.num>#39d353</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>padding</T.prop>
                <T.punct>:</T.punct> <T.num>20px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  color: "#fff",
                  background: "#39d353",
                  padding: 20,
                  borderRadius: 10,
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                Энэ бол карт
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>color</b> текстийн өнгө, <b>background</b> дэвсгэрийн өнгө.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 19 · BACKGROUND ШИНЖҮҮД */}
      <Slide
        label="background шинжүүд"
        page="19"
        total={TOTAL}
        footer={{ tag: "§02 өнгө", topic: "background" }}
      >
        <Frame>
          <Eyebrow className="anim">Дэвсгэрийн боломжууд</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>background</code> шинжүүд
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Шинж", width: "34%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="c">background-color</code>, "Тогтмол өнгөт дэвсгэр."],
              [<code key="i">background-image</code>, "Дэвсгэрт зураг тавих (url(...))."],
              [<code key="g">linear-gradient()</code>, "Хоёр ба түүнээс олон өнгөний шилжилт."],
              [<code key="s">background-size</code>, "cover / contain — зургийн хэмжээ."],
              [<code key="r">background-repeat</code>, "Зургийг давтах эсэх."],
            ]}
          />
          <CodeCaption>
            Эдгээрийг товчилж нэг <b>background</b> шинжид нэгтгэж бичиж болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 20 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="20"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Карт загварчлах"
        tasks={[
          <>
            Нэг <code>&lt;div class=&quot;card&quot;&gt;</code> дотор гарчиг, текст
            бич.
          </>,
          <>
            <code>.card</code>-д <code>background</code> ба <code>color</code> өг —{" "}
            <b>hex</b> хэлбэрээр.
          </>,
          <>
            Нэг өнгийг <b>rgb()</b>, нөгөөг <b>hsl()</b>-ээр бичиж туршаарай.
          </>,
          <>
            <code>linear-gradient()</code>-ээр дэвсгэрт өнгөний шилжилт нэм.
          </>,
          <>
            <code>!important</code> ашиглахгүйгээр id-аар нэг дүрмийг «давуулж»
            үзээрэй.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: CARD_HTML },
              { name: "style.css", lang: "css", code: CARD_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 21 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="21"
        total={TOTAL}
        eyebrow="Хичээл 06 · хураангуй"
        title="Хураангуй"
        footer={{ tag: "erxes · хичээл 06 дууслаа", topic: "css · сонгогч · өнгө" }}
        cards={[
          {
            num: "01",
            title: "CSS дүрэм",
            desc: "сонгогч { шинж: утга; } — холбох 3 арга (inline/internal/external).",
          },
          {
            num: "02",
            title: "Сонгогч",
            desc: "element, .class, #id — аль элементийг загварчлахаа сонгох.",
          },
          {
            num: "03",
            title: "Cascade",
            desc: "id > class > element; тэнцвэл сүүлд бичсэн нь ялна.",
          },
          {
            num: "04",
            title: "Өнгө",
            desc: "hex, rgb(a), hsl ба background — хуудсаа өнгөлөх.",
          },
        ]}
      />

      {/* 22 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-06 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="CSS-ийн аялал эхэллээ! Дараагийн хичээлээр box model ба зайтай ажиллаж, элементүүдийн хэмжээ, зайг удирдаж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 06 — css, сонгогч, өнгө</span>
          </>
        }
      />
    </Deck>
  );
}
