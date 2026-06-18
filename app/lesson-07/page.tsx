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
  title: "erxes · Хичээл 07 — Box model ба зай",
};

/**
 * ХИЧЭЭЛ 07 — Box model ба зай
 * 🎯 Box model ашиглан элементийн хэмжээ, зайг нарийн удирдаж сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Box model: content/padding/border/margin, box-sizing
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — margin collapse, border-radius, shadow
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "23";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const BOX_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Box model</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <h2>Box model</h2>
      <p>content → padding → border → margin.</p>
    </div>

    <div class="card">
      <h2>Хоёр дахь карт</h2>
      <p>margin нь хоёр картын хооронд зай үүсгэнэ.</p>
    </div>
  </body>
</html>
`;

const BOX_CSS = `* {
  /* өргөнд padding, border-ийг оруулж тооцно */
  box-sizing: border-box;
}

body {
  background: #0d1117;
  color: #f8fafc;
}

.card {
  width: 320px;
  /* content-ийн дотор тал руух зай */
  padding: 24px;
  /* контентыг тойрсон шугам */
  border: 2px solid #39d353;
  /* картуудын хоорондох гадна зай */
  margin: 20px;
  background: #161b22;
}
`;

const DECO_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Profile карт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="profile">
      <div class="avatar">A</div>
      <h2>Анударь</h2>
      <p>Frontend суралцагч</p>
    </div>
  </body>
</html>
`;

const DECO_CSS = `body {
  background: #0d1117;
}

.profile {
  width: 280px;
  /* margin: дээш-доош 40px, хажуу талд auto (голлуулна) */
  margin: 40px auto;
  padding: 32px;
  background: #161b22;
  color: #f8fafc;
  text-align: center;
  /* булангуудыг бөөрөнхийлнө */
  border-radius: 16px;
  /* зөөлөн сүүдэр — гүн мэдрэгдэнэ */
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}

.avatar {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  /* 50% → төгс дугуй */
  border-radius: 50%;
  background: #39d353;
  color: #0d1117;
  font-size: 32px;
  line-height: 72px;
}
`;

export default function Lesson07() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-07 · box model · зай</>}
        title={
          <>
            Box model
            <br />
            ба зай
            <Cursor />
          </>
        }
        subtitle="Элемент болгон бол хайрцаг. Content, padding, border, margin гэсэн давхаргуудыг ойлгож, элементийн хэмжээ, зайг нарийн удирдаж сурна."
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
                title: "CSS дүрэм ба selector",
                desc: "element, .class, #id — элемент сонгох.",
              },
              {
                idx: "✓",
                title: "Өнгө ба background",
                desc: "color, hex/rgb/hsl, дэвсгэр.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Элементүүдийн хэмжээ ба хоорондох зайг удирдах.",
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
                title: "Box model гэж юу вэ",
                desc: "content · padding · border · margin.",
              },
              {
                idx: "02",
                title: "box-sizing",
                desc: "Өргөнийг хэрхэн тооцох вэ?",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "margin collapse",
                desc: "Зэрэгцээ margin-ууд яагаад нэгддэг вэ?",
              },
              {
                idx: "04",
                title: "border-radius ба shadow",
                desc: "Булан бөөрөнхийлөх, сүүдэр нэмэх.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — BOX MODEL, BOX-SIZING
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Box model"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Box
            <br />
            model
          </>
        }
        lead="Хуудсан дахь элемент бүр бол хайрцаг. Тэр хайрцаг ямар давхаргаас бүрдэх, өргөнийг нь хэрхэн тооцохыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: BOX MODEL */}
      <KeyTerm
        label="Гол ойлголт: Box model"
        page="05"
        total={TOTAL}
        term="Box model"
        def={
          <>
            HTML элемент бүр <b>тэгш өнцөгт хайрцаг</b> хэлбэртэй. Тэр хайрцаг 4
            давхаргаас бүрдэнэ:{" "}
            <span className="inline-code">content</span> (агуулга) →{" "}
            <span className="inline-code">padding</span> (дотор зай) →{" "}
            <span className="inline-code">border</span> (хүрээ) →{" "}
            <span className="inline-code">margin</span> (гадна зай).
          </>
        }
        note="content → padding → border → margin"
      />

      {/* 06 · BOX MODEL ДАВХАРГУУД (ДИАГРАМ) */}
      <Slide
        label="Box model давхаргууд"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 box model", topic: "4 давхарга" }}
      >
        <Frame>
          <Eyebrow className="anim">Гаднаас дотогш</Eyebrow>
          <h2 className="slide-title anim anim-2">Box model-ийн давхаргууд</h2>
          <div
            className="anim anim-3"
            style={{
              marginTop: 36,
              display: "flex",
              gap: 48,
              alignItems: "center",
            }}
          >
            {/* Vizual nested boxes */}
            <div
              style={{
                background: "rgba(245, 158, 11, 0.18)",
                border: "2px dashed #f59e0b",
                padding: 28,
                borderRadius: 8,
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: 14, color: "#f59e0b", marginBottom: 8 }}>
                margin
              </div>
              <div
                style={{
                  background: "rgba(57, 211, 83, 0.16)",
                  padding: 26,
                  borderRadius: 6,
                }}
              >
                <div
                  style={{ fontSize: 14, color: "#39d353", marginBottom: 8 }}
                >
                  padding
                </div>
                <div
                  style={{
                    border: "3px solid #38bdf8",
                    borderRadius: 4,
                    padding: 22,
                  }}
                >
                  <div
                    style={{
                      background: "#334155",
                      color: "#f8fafc",
                      padding: "16px 24px",
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    content
                  </div>
                </div>
              </div>
            </div>
            <CompareTable
              compact
              columns={[
                { head: "Давхарга", width: "32%" },
                { head: "Юу вэ" },
              ]}
              rows={[
                ["content", "Жинхэнэ агуулга — текст, зураг."],
                ["padding", "Content ба border хоорондын дотор зай."],
                ["border", "Хайрцгийг тойрсон шугам (хүрээ)."],
                ["margin", "Хайрцгаас гадагшаа — хөршүүдтэйгээ зай."],
              ]}
            />
          </div>
          <CodeCaption>
            <b>padding</b> дотор тал руу, <b>margin</b> гадагшаа — энэ хоёрыг
            андуурч болохгүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · PADDING — КОД БА ҮР ДҮН */}
      <Slide
        label="padding"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 box model", topic: "padding" }}
      >
        <Frame>
          <Eyebrow className="anim">Дотор зай</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>padding</code> — content-ийн дотор зай
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>background</T.prop>
                <T.punct>:</T.punct> <T.num>#39d353</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>padding</T.prop>
                <T.punct>:</T.punct> <T.num>24px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  background: "#39d353",
                  color: "#0d1117",
                  padding: 24,
                  borderRadius: 6,
                  fontWeight: 700,
                }}
              >
                Энэ текстийг тойруулж дотор зай үүслээ
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>padding</b> нь дэвсгэр өнгийг хамт томруулна — текст ирмэгт нааж
            наалдахаас сэргийлнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · BORDER — КОД БА ҮР ДҮН */}
      <Slide
        label="border"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 box model", topic: "border" }}
      >
        <Frame>
          <Eyebrow className="anim">Хүрээ</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>border</code> — өргөн · төрөл · өнгө
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>border</T.prop>
                <T.punct>:</T.punct> <T.num>3px</T.num> <T.num>solid</T.num>{" "}
                <T.num>#38bdf8</T.num>
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
                  border: "3px solid #38bdf8",
                  padding: 20,
                  borderRadius: 4,
                  color: "#f8fafc",
                  fontWeight: 600,
                }}
              >
                3px solid #38bdf8 хүрээ
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>border: өргөн төрөл өнгө</b> — төрөл нь <code>solid</code>,{" "}
            <code>dashed</code>, <code>dotted</code> байж болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · MARGIN — КОД БА ҮР ДҮН */}
      <Slide
        label="margin"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 box model", topic: "margin" }}
      >
        <Frame>
          <Eyebrow className="anim">Гадна зай</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>margin</code> — элементүүдийн хоорондын зай
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>padding</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>margin</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ background: "#0d1117", padding: 4 }}>
                <div
                  style={{
                    background: "#334155",
                    color: "#f8fafc",
                    padding: 16,
                    margin: 16,
                    borderRadius: 4,
                  }}
                >
                  Карт 1
                </div>
                <div
                  style={{
                    background: "#334155",
                    color: "#f8fafc",
                    padding: 16,
                    margin: 16,
                    borderRadius: 4,
                  }}
                >
                  Карт 2
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>margin</b> хайрцгийн гадна тал руу зай үүсгэнэ — дэвсгэр өнгөгүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ГОЛ ОЙЛГОЛТ: BOX-SIZING */}
      <KeyTerm
        label="Гол ойлголт: box-sizing"
        page="10"
        total={TOTAL}
        term="box-sizing"
        def={
          <>
            Анхдагчаар <span className="inline-code">width</span> нь зөвхөн{" "}
            <b>content</b>-ийг хэмждэг тул padding ба border нэмэхэд хайрцаг{" "}
            <i>томордог</i>. <span className="inline-code">box-sizing:
            border-box</span> нь padding ба border-ийг өргөнд <b>дотор нь</b>{" "}
            тооцдог — хэмжээ урьдчилан таамаглахад амар болно.
          </>
        }
        note="* { box-sizing: border-box; }"
      />

      {/* 11 · CONTENT-BOX vs BORDER-BOX */}
      <Slide
        label="content-box vs border-box"
        page="11"
        total={TOTAL}
        footer={{ tag: "§01 box-sizing", topic: "өргөн хэрхэн тооцох вэ" }}
      >
        <Frame>
          <Eyebrow className="anim">width: 200px + padding: 20px</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            content-box vs border-box
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 32 }}>
            <ResultPane>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <div
                    style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}
                  >
                    content-box (анхдагч) → нийт <b>240px</b>
                  </div>
                  <div
                    style={{
                      boxSizing: "content-box",
                      width: 200,
                      padding: 20,
                      background: "#f59e0b",
                      color: "#0d1117",
                      borderRadius: 4,
                      fontWeight: 700,
                    }}
                  >
                    200 + 20 + 20
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}
                  >
                    border-box → нийт яг <b>200px</b>
                  </div>
                  <div
                    style={{
                      boxSizing: "border-box",
                      width: 200,
                      padding: 20,
                      background: "#39d353",
                      color: "#0d1117",
                      borderRadius: 4,
                      fontWeight: 700,
                    }}
                  >
                    padding дотор нь
                  </div>
                </div>
              </div>
            </ResultPane>
            <CompareTable
              compact
              columns={[
                { head: "box-sizing", width: "42%" },
                { head: "Нийт өргөн" },
              ]}
              rows={[
                [<code key="c">content-box</code>, "width + padding + border"],
                [<code key="b">border-box</code>, "яг width (padding дотор нь)"],
              ]}
            />
          </div>
          <CodeCaption>
            Олонх төсөл эхэндээ{" "}
            <code>* {"{"} box-sizing: border-box; {"}"}</code> тавьдаг — амьдрал
            хялбар болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 12 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="12"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Хайрцаг угсрах"
        tasks={[
          <>
            Дээд талд <code>* {"{ box-sizing: border-box; }"}</code> бич.
          </>,
          <>
            Хоёр <code>&lt;div class=&quot;card&quot;&gt;</code> үүсгэж, дотор нь
            гарчиг, текст бич.
          </>,
          <>
            <code>.card</code>-д <code>padding</code> өгч, content ирмэгээс
            салгаж хар.
          </>,
          <>
            <code>border</code> нэмж (<b>өргөн төрөл өнгө</b>), дараа нь{" "}
            <code>margin</code>-аар хоёр картын хоорондох зайг үүсгэ.
          </>,
          <>
            <code>width</code> өгөөд box-sizing-ийг{" "}
            <code>content-box</code> ↔ <code>border-box</code> сольж, ялгааг
            ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: BOX_HTML },
              { name: "style.css", lang: "css", code: BOX_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="13"
        total={TOTAL}
        mins={20}
        resumeTopic="margin collapse, border-radius ба shadow"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — MARGIN COLLAPSE, BORDER-RADIUS, SHADOW
          ============================================================ */}

      {/* 14 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Зай ба чимэглэл"
        page="14"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Зай ба
            <br />
            чимэглэл
          </>
        }
        lead="margin яагаад заримдаа нэгддэг вэ? Дараа нь булан бөөрөнхийлж, сүүдэр нэмж хайрцгаа гоё болгоно."
      />

      {/* 15 · ГОЛ ОЙЛГОЛТ: MARGIN COLLAPSE */}
      <KeyTerm
        label="Гол ойлголт: margin collapse"
        page="15"
        total={TOTAL}
        term="Margin collapse"
        def={
          <>
            Хоёр элементийн <b>дээш-доош</b> (vertical) margin зэрэгцэхэд тэдгээр
            нэмэгддэггүй — оронд нь <i>илүү томыг</i> нь авч <b>нэгддэг</b>{" "}
            (collapse). Жнь: 30px + 20px = 50px биш, <b>30px</b>.
          </>
        }
        note="зөвхөн дээш-доош margin · хажуу талд үгүй"
      />

      {/* 16 · MARGIN COLLAPSE — ЖИШЭЭ */}
      <Slide
        label="margin collapse жишээ"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 зай", topic: "хоёр margin нэгдэх нь" }}
      >
        <Frame>
          <Eyebrow className="anim">30px + 20px = ?</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Margin хэрхэн нэгдэх вэ</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.top</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>margin-bottom</T.prop>
                <T.punct>:</T.punct> <T.num>30px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.bottom</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>margin-top</T.prop>
                <T.punct>:</T.punct> <T.num>20px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* зай нь 50px БИШ — 30px */"}</T.com>
              </Line>
            </CodeWindow>
            <CompareTable
              compact
              columns={[
                { head: "Тохиолдол", width: "52%" },
                { head: "Үр дүн" },
              ]}
              rows={[
                ["Дээш-доош margin зэрэгцэх", "Томыг нь авна (collapse)"],
                ["Хажуугийн (left/right) margin", "Нэмэгдэнэ — collapse үгүй"],
                ["padding эсвэл border байвал", "collapse болохгүй"],
              ]}
            />
          </div>
          <CodeCaption>
            Гэнэтийн зай гарвал <b>margin collapse</b>-ийг санаарай — нийтлэг
            «алдаа» биш, дүрэм.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 17 · MARGIN/PADDING ТОВЧ БИЧЛЭГ */}
      <Slide
        label="shorthand"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 зай", topic: "товч бичлэг" }}
      >
        <Frame>
          <Eyebrow className="anim">Нэг мөрөнд 4 тал</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>margin</code> / <code>padding</code> товч бичлэг
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Бичлэг", width: "42%" },
              { head: "Утга" },
            ]}
            rows={[
              [<code key="1">margin: 16px;</code>, "4 тал бүгд 16px."],
              [
                <code key="2">margin: 10px 20px;</code>,
                "Дээш-доош 10px · хажуу 20px.",
              ],
              [
                <code key="3">margin: 10px 20px 30px;</code>,
                "Дээш 10 · хажуу 20 · доош 30.",
              ],
              [
                <code key="4">margin: 5px 10px 15px 20px;</code>,
                "Дээш · баруун · доош · зүүн (цагийн зүүн).",
              ],
              [
                <code key="5">margin: 0 auto;</code>,
                "Дээш-доош 0 · хажуу auto → голлуулна.",
              ],
            ]}
          />
          <CodeCaption>
            Цагийн зүүний дагуу: <b>дээш → баруун → доош → зүүн</b>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 18 · BORDER-RADIUS — КОД БА ҮР ДҮН */}
      <Slide
        label="border-radius"
        page="18"
        total={TOTAL}
        footer={{ tag: "§02 чимэглэл", topic: "border-radius" }}
      >
        <Frame>
          <Eyebrow className="anim">Булан бөөрөнхийлөх</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>border-radius</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 32 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.card</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>border-radius</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.pill</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>border-radius</T.prop>
                <T.punct>:</T.punct> <T.num>999px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.circle</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>border-radius</T.prop>
                <T.punct>:</T.punct> <T.num>50%</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    background: "#39d353",
                    color: "#0d1117",
                    padding: "20px 24px",
                    borderRadius: 16,
                    fontWeight: 700,
                  }}
                >
                  16px
                </div>
                <div
                  style={{
                    background: "#38bdf8",
                    color: "#0d1117",
                    padding: "12px 24px",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  pill
                </div>
                <div
                  style={{
                    background: "#f59e0b",
                    color: "#0d1117",
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  50%
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>50%</b> нь дөрвөлжин элементийг төгс дугуй болгоно — avatar-д
            тохиромжтой.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 19 · ГОЛ ОЙЛГОЛТ: BOX-SHADOW */}
      <KeyTerm
        label="Гол ойлголт: box-shadow"
        page="19"
        total={TOTAL}
        term="box-shadow"
        def={
          <>
            <b>box-shadow</b> нь хайрцагт сүүдэр нэмж, гүн (depth) мэдрэгдүүлнэ.
            Бичлэг:{" "}
            <span className="inline-code">
              box-shadow: x y blur өнгө;
            </span>{" "}
            — хэвтээ шилжилт, босоо шилжилт, бүдгэрэлт, өнгө.
          </>
        }
        note="0 8px 24px rgba(0,0,0,.4)"
      />

      {/* 20 · BOX-SHADOW — КОД БА ҮР ДҮН */}
      <Slide
        label="box-shadow"
        page="20"
        total={TOTAL}
        footer={{ tag: "§02 чимэглэл", topic: "box-shadow" }}
      >
        <Frame>
          <Eyebrow className="anim">Гүн ба өргөлт</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>box-shadow</code>-ийн утгууд
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 32 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.com>{"/* x y — өнгө заагаагүй → текстийн өнгө */"}</T.com>
              </Line>
              <Line>
                <T.sel>.a</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>box-shadow</T.prop>
                <T.punct>:</T.punct> <T.num>5px</T.num> <T.num>10px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* x y өнгө → саарал */"}</T.com>
              </Line>
              <Line state="hl">
                <T.sel>.b</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>box-shadow</T.prop>
                <T.punct>:</T.punct> <T.num>5px</T.num> <T.num>10px</T.num>{" "}
                <T.num>#888888</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* x y өнгө → улаан */"}</T.com>
              </Line>
              <Line>
                <T.sel>.c</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>box-shadow</T.prop>
                <T.punct>:</T.punct> <T.num>5px</T.num> <T.num>10px</T.num>{" "}
                <T.num>red</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* x y blur өнгө → зөөлөн улаан */"}</T.com>
              </Line>
              <Line state="hl">
                <T.sel>.d</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>box-shadow</T.prop>
                <T.punct>:</T.punct> <T.num>5px</T.num> <T.num>10px</T.num>{" "}
                <T.num>15px</T.num> <T.num>red</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#f3f5f8" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 22,
                  color: "#0d1117",
                }}
              >
                <div style={{ ...shadowBox, boxShadow: "5px 10px" }}>
                  5px 10px
                </div>
                <div style={{ ...shadowBox, boxShadow: "5px 10px #888888" }}>
                  5px 10px #888888
                </div>
                <div style={{ ...shadowBox, boxShadow: "5px 10px red" }}>
                  5px 10px red
                </div>
                <div style={{ ...shadowBox, boxShadow: "5px 10px 15px red" }}>
                  5px 10px 15px red
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>box-shadow: x y blur өнгө</b> — x y нь хэвтээ, босоо шилжилт.
            Өнгийг заахгүй бол <b>текстийн өнгийг</b> өвлөнө. Гурав дахь утга
            болох <b>blur</b> их байх тусам сүүдэр зөөлөн тархана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 21 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="21"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Profile карт чимэглэх"
        tasks={[
          <>
            <code>&lt;div class=&quot;profile&quot;&gt;</code> дотор дугуй
            avatar, нэр, тайлбар бич.
          </>,
          <>
            <code>.profile</code>-ийг <code>margin: 40px auto</code>-аар
            хуудасны голд байрлуул.
          </>,
          <>
            <code>border-radius</code>-аар картын булангуудыг бөөрөнхийл.
          </>,
          <>
            <code>.avatar</code>-ийг <code>border-radius: 50%</code>-аар төгс
            дугуй болго.
          </>,
          <>
            <code>box-shadow</code> нэмж картыг хуудаснаас «өргөгдсөн» харагдуул.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: DECO_HTML },
              { name: "style.css", lang: "css", code: DECO_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 22 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="22"
        total={TOTAL}
        eyebrow="Хичээл 07 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 07 дууслаа",
          topic: "box model · зай · чимэглэл",
        }}
        cards={[
          {
            num: "01",
            title: "Box model",
            desc: "content → padding → border → margin — элемент бүр хайрцаг.",
          },
          {
            num: "02",
            title: "box-sizing",
            desc: "border-box нь padding/border-ийг өргөнд дотор нь тооцно.",
          },
          {
            num: "03",
            title: "margin collapse",
            desc: "Дээш-доош margin нэмэгдэхгүй — томыг нь авч нэгдэнэ.",
          },
          {
            num: "04",
            title: "Чимэглэл",
            desc: "border-radius булан бөөрөнхийлж, box-shadow гүн нэмнэ.",
          },
        ]}
      />

      {/* 23 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-07 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та элементийн хэмжээ, зайг бүрэн удирдаж чадна. Дараагийн хичээлээр typography ба нэгжүүдийг (px, em, rem, %) үзэж, текстээ загварчилж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 07 — box model ба зай</span>
          </>
        }
      />
    </Deck>
  );
}

const shadowBox = {
  border: "1px solid #0d1117",
  padding: "10px 14px",
  background: "#ffffff",
  fontWeight: 700,
  fontSize: 14,
  width: "fit-content",
} as const;
