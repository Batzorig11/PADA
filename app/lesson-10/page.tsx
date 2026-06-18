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
  title: "erxes · Хичээл 10 — Flexbox үндэс",
};

/**
 * ХИЧЭЭЛ 10 — Flexbox үндэс
 * 🎯 Flexbox ашиглан нэг хэмжээст (мөр/багана) layout угсарч сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — flex container/item, justify-content, align-items, gap
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — flex-direction, flex-wrap, бодит layout
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const NAVBAR_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Navbar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="navbar">
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

const NAVBAR_CSS = `body {
  margin: 0;
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.navbar {
  /* хүүхдүүдийг flex-ээр эгнүүлнэ */
  display: flex;
  /* лого зүүн, цэс баруун — хооронд зай тараана */
  justify-content: space-between;
  /* босоо тэнхлэгээр голлуулна */
  align-items: center;
  padding: 16px 32px;
  background: #161b22;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: #39d353;
}

.links {
  display: flex;
  /* холбоосуудын хооронд зай */
  gap: 24px;
}

.links a {
  color: #f8fafc;
  text-decoration: none;
  font-weight: 700;
}
`;

const CARDS_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Картын эгнээ</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="grid">
      <div class="card"><h3>Үндэс</h3><p>HTML ба CSS.</p></div>
      <div class="card"><h3>Логик</h3><p>JavaScript.</p></div>
      <div class="card"><h3>Апп</h3><p>React.</p></div>
      <div class="card"><h3>Next</h3><p>Next.js.</p></div>
    </section>
  </body>
</html>
`;

const CARDS_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.grid {
  display: flex;
  /* зай багтахгүй бол дараагийн мөрөнд буулгана */
  flex-wrap: wrap;
  /* картуудыг голлуулна */
  justify-content: center;
  /* мөр болон баганын хоорондох зай */
  gap: 20px;
  padding: 32px;
}

.card {
  width: 220px;
  padding: 24px;
  background: #161b22;
  border-radius: 12px;
  border: 1px solid #21262d;
}

.card h3 {
  margin: 0 0 8px;
  color: #39d353;
}

.card p {
  margin: 0;
  color: #9aa4b2;
}
`;

export default function Lesson10() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-10 · flexbox · layout</>}
        title={
          <>
            Flexbox
            <br />
            үндэс
            <Cursor />
          </>
        }
        subtitle="Элементүүдийг эгнүүлэх, голлуулах, тэнцүү тараах — энэ бүгдийг Flexbox-оор хялбар хийнэ. Орчин үеийн вэбийн layout-ийн гол хэрэгсэл."
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
                title: "display төрлүүд",
                desc: "block, inline, inline-block.",
              },
              {
                idx: "✓",
                title: "position",
                desc: "relative, absolute, fixed, sticky, z-index.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Олон элементийг хялбар эгнүүлэх — Flexbox.",
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
                title: "Flex container ба item",
                desc: "display: flex, гол ба хөндлөн тэнхлэг.",
              },
              {
                idx: "02",
                title: "Эгнүүлэх",
                desc: "justify-content, align-items, gap.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Чиглэл ба боолт",
                desc: "flex-direction, flex-wrap.",
              },
              {
                idx: "04",
                title: "Бодит layout",
                desc: "Navbar ба картын эгнээ угсрах.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — FLEX CONTAINER
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Flex container"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Flex
            <br />
            container
          </>
        }
        lead="Нэг эцэг элементийг flex болгомогц дотор хүүхдүүд нь эгнэнэ. Тэдгээрийг гол ба хөндлөн тэнхлэгээр хэрхэн зохион байгуулахыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: FLEXBOX */}
      <KeyTerm
        label="Гол ойлголт: Flexbox"
        page="05"
        total={TOTAL}
        term="Flexbox"
        def={
          <>
            <b>Flexbox</b> бол <i>нэг хэмжээст</i> (мөр эсвэл багана) layout-ийн
            систем. Эцэг элементэд{" "}
            <span className="inline-code">display: flex</span> өгмөгц шууд дотор
            хүүхдүүд нь <b>flex item</b> болж эгнэнэ.
          </>
        }
        note="container → item · нэг хэмжээст"
      />

      {/* 06 · CONTAINER / ITEM + AXIS */}
      <Slide
        label="container ба тэнхлэг"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 flex", topic: "container · тэнхлэг" }}
      >
        <Frame>
          <Eyebrow className="anim">display: flex</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            Container, item ба тэнхлэгүүд
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.container</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* шууд хүүхэд бүр = flex item */"}</T.com>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div>
                <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 8 }}>
                  гол тэнхлэг → (main axis)
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {["1", "2", "3"].map((n) => (
                    <div
                      key={n}
                      style={{
                        flex: "0 0 auto",
                        width: 64,
                        height: 64,
                        background: "#39d353",
                        color: "#0d1117",
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>Гол тэнхлэг (main)</b> нь анхдагчаар хэвтээ; <b>хөндлөн тэнхлэг
            (cross)</b> нь түүнтэй перпендикуляр (босоо). Энэ хоёрыг ялгах нь
            бүх зүйлийн түлхүүр.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · JUSTIFY-CONTENT */}
      <Slide
        label="justify-content"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 flex", topic: "justify-content" }}
      >
        <Frame>
          <Eyebrow className="anim">Гол тэнхлэгийн дагуу</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>justify-content</code>
          </h2>
          <div className="anim anim-3" style={{ marginTop: 24 }}>
            {[
              { v: "flex-start", j: "flex-start" },
              { v: "center", j: "center" },
              { v: "space-between", j: "space-between" },
              { v: "space-around", j: "space-around" },
            ].map((row) => (
              <div key={row.v} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 4 }}>
                  {row.v}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: row.j as "center",
                    gap: 8,
                    background: "#161b22",
                    padding: 8,
                    borderRadius: 8,
                  }}
                >
                  {["A", "B", "C"].map((n) => (
                    <div
                      key={n}
                      style={{
                        width: 48,
                        height: 32,
                        background: "#38bdf8",
                        color: "#0d1117",
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <CodeCaption>
            <b>justify-content</b> нь item-уудыг <b>гол тэнхлэгийн</b> дагуу
            байрлуулна — эхэнд, голд, эсвэл зайг тэнцүү тараана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ALIGN-ITEMS */}
      <Slide
        label="align-items"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 flex", topic: "align-items" }}
      >
        <Frame>
          <Eyebrow className="anim">Хөндлөн тэнхлэгийн дагуу</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>align-items</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>align-items</T.prop>
                <T.punct>:</T.punct> <T.num>center</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>justify-content</T.prop>
                <T.punct>:</T.punct> <T.num>center</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 130,
                  background: "#161b22",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    padding: "16px 28px",
                    background: "#39d353",
                    color: "#0d1117",
                    borderRadius: 8,
                    fontWeight: 700,
                  }}
                >
                  Төгс голлосон
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>justify-content: center</b> + <b>align-items: center</b> = ямар ч
            элементийг хайрцгийн яг голд тавих хамгийн амар арга.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · GAP */}
      <Slide
        label="gap"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 flex", topic: "gap" }}
      >
        <Frame>
          <Eyebrow className="anim">Item хоорондын зай</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>gap</code> — зайг цэвэрхэн өгөх
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.row</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>gap</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", gap: 16 }}>
                {["1", "2", "3"].map((n) => (
                  <div
                    key={n}
                    style={{
                      width: 56,
                      height: 56,
                      background: "#f59e0b",
                      color: "#0d1117",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>gap</b> нь item бүрд <code>margin</code> өгөхөөс хамаагүй цэвэрхэн —
            зөвхөн <i>хооронд</i> нь зай тавьдаг, ирмэгт нэмдэггүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="10"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Navbar угсрах"
        tasks={[
          <>
            <code>&lt;header class=&quot;navbar&quot;&gt;</code> дотор зүүн талд
            лого, баруун талд <code>&lt;nav class=&quot;links&quot;&gt;</code>{" "}
            доторх 3 холбоос бич.
          </>,
          <>
            <code>.navbar</code>-д <code>display: flex</code> өгч хүүхдүүдийг
            эгнүүл.
          </>,
          <>
            <code>justify-content: space-between</code>-ээр логог зүүн, цэсийг
            баруунд түлх.
          </>,
          <>
            <code>align-items: center</code>-ээр босоо тэнхлэгт голлуул.
          </>,
          <>
            <code>.links</code>-ийг бас <code>display: flex</code> болгож,{" "}
            <code>gap</code>-аар холбоосуудын зайг өг.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: NAVBAR_HTML },
              { name: "style.css", lang: "css", code: NAVBAR_CSS },
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
        resumeTopic="flex-direction, flex-wrap ба бодит layout"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — DIRECTION & WRAP
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Чиглэл ба боолт"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Чиглэл ба
            <br />
            боолт
          </>
        }
        lead="Эгнэхдээ мөр үү, багана уу? Зай багтахгүй бол яах вэ? flex-direction ба flex-wrap-ийг ашиглан бодит layout угсарна."
      />

      {/* 13 · ГОЛ ОЙЛГОЛТ: FLEX-DIRECTION */}
      <KeyTerm
        label="Гол ойлголт: flex-direction"
        page="13"
        total={TOTAL}
        term="flex-direction"
        def={
          <>
            <b>flex-direction</b> нь <i>гол тэнхлэгийн чиглэлийг</i> солино.{" "}
            <span className="inline-code">row</span> (анхдагч) — хэвтээ,{" "}
            <span className="inline-code">column</span> — босоо. Чиглэлийг
            солихоор justify ба align-ийн тэнхлэг ч сольж байрладаг.
          </>
        }
        note="row (анхдагч) · column"
      />

      {/* 14 · FLEX-DIRECTION */}
      <Slide
        label="flex-direction"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "row vs column" }}
      >
        <Frame>
          <Eyebrow className="anim">Мөр үү, багана уу</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>flex-direction</code>: row vs column
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <div>
              <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 6 }}>
                row — хэвтээ
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  background: "#161b22",
                  padding: 10,
                  borderRadius: 8,
                  marginBottom: 16,
                }}
              >
                {["1", "2", "3"].map((n) => (
                  <div key={n} style={chip}>
                    {n}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 6 }}>
                column — босоо
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  background: "#161b22",
                  padding: 10,
                  borderRadius: 8,
                  width: 120,
                }}
              >
                {["1", "2", "3"].map((n) => (
                  <div key={n} style={chip}>
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <CompareTable
              compact
              columns={[{ head: "direction", width: "34%" }, { head: "Гол тэнхлэг" }]}
              rows={[
                ["row", "Хэвтээ → (зүүнээс баруун). Анхдагч."],
                ["column", "Босоо ↓ (дээрээс доош)."],
              ]}
            />
          </div>
          <CodeCaption>
            <b>column</b> үед <code>justify-content</code> босоо тэнхлэгээр,{" "}
            <code>align-items</code> хэвтээ тэнхлэгээр ажиллаж эхэлнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · FLEX-WRAP */}
      <Slide
        label="flex-wrap"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "flex-wrap" }}
      >
        <Frame>
          <Eyebrow className="anim">Зай багтахгүй бол</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>flex-wrap</code> — дараагийн мөрөнд буулгах
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.grid</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>flex-wrap</T.prop>
                <T.punct>:</T.punct> <T.num>wrap</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>gap</T.prop>
                <T.punct>:</T.punct> <T.num>10px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["1", "2", "3", "4", "5", "6"].map((n) => (
                  <div
                    key={n}
                    style={{
                      width: 70,
                      height: 44,
                      background: "#39d353",
                      color: "#0d1117",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Анхдагчаар flex нь <b>nowrap</b> — нэг мөрөнд шахна.{" "}
            <code>flex-wrap: wrap</code> нь зай дуусахад автоматаар доош
            буулгана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · БҮХ ЗҮЙЛ НЭГ ДЭЭР */}
      <Slide
        label="бүгд хамт"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "картын эгнээ" }}
      >
        <Frame>
          <Eyebrow className="anim">Картын эгнээ</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Бүгдийг нэгтгэх</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.grid</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>flex-wrap</T.prop>
                <T.punct>:</T.punct> <T.num>wrap</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>justify-content</T.prop>
                <T.punct>:</T.punct> <T.num>center</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>gap</T.prop>
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
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 16,
                }}
              >
                {["Үндэс", "Логик", "Апп", "Next"].map((t) => (
                  <div
                    key={t}
                    style={{
                      width: 110,
                      padding: 16,
                      background: "#161b22",
                      border: "1px solid #21262d",
                      borderRadius: 10,
                      color: "#f8fafc",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>flex + wrap + justify-content + gap</b> — энэ дөрөв нь хамгийн
            түгээмэл картын layout-ийн жор.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 17 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="17"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Картын эгнээ угсрах"
        tasks={[
          <>
            <code>&lt;section class=&quot;grid&quot;&gt;</code> дотор 4 ширхэг{" "}
            <code>&lt;div class=&quot;card&quot;&gt;</code> үүсгэж, тус бүрд
            гарчиг, текст бич.
          </>,
          <>
            <code>.grid</code>-д <code>display: flex</code> ба{" "}
            <code>flex-wrap: wrap</code> өг.
          </>,
          <>
            <code>justify-content: center</code> ба <code>gap</code>-аар
            картуудыг голлуулж, зай тарааж өг.
          </>,
          <>
            <code>.card</code>-д <code>width</code>, <code>padding</code>,{" "}
            <code>border-radius</code> өгч хэлбэржүүл.
          </>,
          <>
            Цонхны өргөнийг багасгаж, картууд хэрхэн доош <b>боогдож</b> буйг
            ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: CARDS_HTML },
              { name: "style.css", lang: "css", code: CARDS_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 18 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="18"
        total={TOTAL}
        eyebrow="Хичээл 10 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 10 дууслаа",
          topic: "flexbox үндэс",
        }}
        cards={[
          {
            num: "01",
            title: "display: flex",
            desc: "Эцэг container, шууд хүүхдүүд нь item болж эгнэнэ.",
          },
          {
            num: "02",
            title: "Эгнүүлэх",
            desc: "justify-content (гол), align-items (хөндлөн), gap (зай).",
          },
          {
            num: "03",
            title: "direction",
            desc: "row хэвтээ, column босоо — гол тэнхлэгийг сольдог.",
          },
          {
            num: "04",
            title: "wrap",
            desc: "Зай дуусахад item-ууд дараагийн мөрөнд буудаг.",
          },
        ]}
      />

      {/* 19 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-10 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та Flexbox-оор элементүүдийг эгнүүлж, голлуулж чадна. Дараагийн хичээлээр Flexbox-ийн дадлага хийж, navbar болон картын бодит layout-уудыг гүнзгийрүүлнэ. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 10 — flexbox үндэс</span>
          </>
        }
      />
    </Deck>
  );
}

const chip = {
  width: 48,
  height: 32,
  background: "#38bdf8",
  color: "#0d1117",
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 14,
} as const;
