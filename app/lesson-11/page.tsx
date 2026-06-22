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
  title: "erxes · Хичээл 11 — Flexbox layout дадлага",
};

/**
 * ХИЧЭЭЛ 11 — Flexbox layout дадлага
 * 🎯 flex item-ийн шинжүүдээр бодит UI (navbar, картын эгнээ) угсарч сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — flex item: grow / shrink / basis, flex shorthand
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Бодит layout: navbar ба картын эгнээ
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "20";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const COMMENT_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Сэтгэгдэл</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="comment">
      <div class="avatar">A</div>
      <div class="body">
        <h3>Анударь</h3>
        <p>Энэ хичээл маш ойлгомжтой болжээ. Баярлалаа!</p>
      </div>
    </div>
  </body>
</html>
`;

const COMMENT_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.comment {
  display: flex;
  /* item-ууд дээд талаасаа эгнэнэ */
  align-items: flex-start;
  gap: 16px;
  width: 460px;
  margin: 40px auto;
  padding: 20px;
  background: #161b22;
  border-radius: 12px;
}

.avatar {
  /* өсөхгүй, багасахгүй, 48px-д тогтоно */
  flex: 0 0 48px;
  height: 48px;
  background: #39d353;
  color: #0d1117;
  border-radius: 50%;
  text-align: center;
  line-height: 48px;
  font-weight: 700;
}

.body {
  /* үлдсэн зайг бүгдийг эзэлнэ */
  flex: 1;
}

.body h3 {
  margin: 0 0 6px;
}

.body p {
  margin: 0;
  line-height: 1.6;
  color: #9aa4b2;
}
`;

const PRICING_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Үнийн багц</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="plans">
      <div class="plan">
        <h3>Үндсэн</h3>
        <p class="price">₮0</p>
        <p>Эхлэгчдэд.</p>
      </div>
      <div class="plan">
        <h3>Про</h3>
        <p class="price">₮29,000</p>
        <p>Идэвхтэй хэрэглэгчдэд.</p>
      </div>
      <div class="plan">
        <h3>Баг</h3>
        <p class="price">₮99,000</p>
        <p>Багаар ажиллахад.</p>
      </div>
    </section>
  </body>
</html>
`;

const PRICING_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.plans {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px;
}

.plan {
  /* тэнцүү өргөнтэй: өснө, багасна, 240px суурьтай */
  flex: 1 1 240px;
  padding: 28px;
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  text-align: center;
}

.plan h3 {
  margin: 0 0 12px;
  color: #39d353;
}

.price {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
}

.plan p {
  color: #9aa4b2;
}
`;

export default function Lesson11() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-11 · flexbox дадлага</>}
        title={
          <>
            Flexbox
            <br />
            layout дадлага
            <Cursor />
          </>
        }
        subtitle="Өнгөрсөн хичээлийн Flexbox-ийг бодит UI болгож хувиргана. flex item яаж өсч багасахыг ойлгож, navbar болон картын эгнээг гараараа угсарна."
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
                title: "display: flex",
                desc: "container → item, гол ба хөндлөн тэнхлэг.",
              },
              {
                idx: "✓",
                title: "Эгнүүлэх",
                desc: "justify-content, align-items, gap, wrap.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "item-ийн өсөлт ба бодит layout угсрах.",
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
                title: "flex-grow / shrink / basis",
                desc: "item хэрхэн өсч, багасч, суурь авах вэ.",
              },
              {
                idx: "02",
                title: "flex товч бичлэг",
                desc: "flex: 1 гэдгийн утга.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Navbar угсрах",
                desc: "Уян хатан толгой хэсэг.",
              },
              {
                idx: "04",
                title: "Картын эгнээ",
                desc: "Тэнцүү өргөнтэй үнийн багцууд.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — FLEX ITEM
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Flex item"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Flex item
            <br />
            өсөлт
          </>
        }
        lead="Container зайг тарааж өгөхөөс гадна item бүр өөрөө хэр өсч багасахаа шийдэж чадна. grow, shrink, basis-ийг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: FLEX ITEM */}
      <KeyTerm
        label="Гол ойлголт: flex item"
        page="05"
        total={TOTAL}
        term="grow · shrink · basis"
        def={
          <>
            <b>flex-basis</b> нь item-ийн эхлэх хэмжээ.{" "}
            <b>flex-grow</b> нь үлдсэн зайг хэрхэн хуваан <i>өсөхийг</i>,{" "}
            <b>flex-shrink</b> нь зай дутахад хэрхэн <i>багасахыг</i> заана.
          </>
        }
        note="flex: grow shrink basis"
      />

      {/* 06 · FLEX-GROW */}
      <Slide
        label="flex-grow"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 item", topic: "flex-grow" }}
      >
        <Frame>
          <Eyebrow className="anim">Үлдсэн зайг эзлэх</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>flex-grow</code> — өсөлтийн харьцаа
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.a</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>flex-grow</T.prop>
                <T.punct>:</T.punct> <T.num>1</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.b</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>flex-grow</T.prop>
                <T.punct>:</T.punct> <T.num>2</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* b нь a-аас 2 дахин их зай авна */"}</T.com>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ ...cell, flexGrow: 1 }}>grow: 1</div>
                <div style={{ ...cell, flexGrow: 2, background: "#39d353" }}>
                  grow: 2
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>flex-grow: 0</b> (анхдагч) — өсөхгүй. Тоо нь үлдсэн зайг хуваах{" "}
            <i>харьцаа</i> болохоос пиксел биш.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · FLEX-SHRINK + FLEX-BASIS */}
      <Slide
        label="flex-shrink, flex-basis"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 item", topic: "shrink · basis" }}
      >
        <Frame>
          <Eyebrow className="anim">Багасах ба суурь</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>flex-shrink</code> ба <code>flex-basis</code>
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[{ head: "Property", width: "34%" }, { head: "Утга" }]}
            rows={[
              [
                <code key="1">flex-basis: 200px;</code>,
                "Item-ийн эхлэх (суурь) хэмжээ — width-ийн оронд.",
              ],
              [
                <code key="2">flex-shrink: 1;</code>,
                "Зай дутахад багасахыг зөвшөөрнө (анхдагч).",
              ],
              [
                <code key="3">flex-shrink: 0;</code>,
                "Хэзээ ч багасахгүй — лого, дүрс зэрэгт.",
              ],
            ]}
          />
          <CodeCaption>
            <code>flex-shrink: 0</code> нь логог шахагдахаас хамгаалах түгээмэл
            арга. <b>flex-basis</b> бол «эхлэлийн өргөн».
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · FLEX SHORTHAND */}
      <Slide
        label="flex shorthand"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 item", topic: "flex товч бичлэг" }}
      >
        <Frame>
          <Eyebrow className="anim">Гурвыг нэгтгэх</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>flex</code> товч бичлэг
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[{ head: "Бичлэг", width: "40%" }, { head: "Утга" }]}
            rows={[
              [
                <code key="1">flex: 1;</code>,
                "grow:1 shrink:1 basis:0 — үлдсэн зайг тэнцүү эзэлнэ.",
              ],
              [
                <code key="2">flex: 0 0 200px;</code>,
                "Өсөхгүй, багасахгүй, яг 200px-д тогтоно.",
              ],
              [
                <code key="3">flex: 1 1 240px;</code>,
                "240px суурьтай, өсч багасч чадна (карт layout).",
              ],
            ]}
          />
          <CodeCaption>
            <b>flex: 1</b> нь хамгийн түгээмэл — «үлдсэн зайг бүгдийг ав» гэсэн
            утга. Тэнцүү багана хийхэд ашиглана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Сэтгэгдлийн карт (media object)"
        tasks={[
          <>
            <code>&lt;div class=&quot;comment&quot;&gt;</code> дотор зүүн талд{" "}
            <code>.avatar</code>, баруун талд <code>.body</code> (нэр + текст)
            бич.
          </>,
          <>
            <code>.comment</code>-д <code>display: flex</code>,{" "}
            <code>gap</code>, <code>align-items: flex-start</code> өг.
          </>,
          <>
            <code>.avatar</code>-д <code>flex: 0 0 48px</code> өгч, тогтмол
            хэмжээтэй дугуй болго.
          </>,
          <>
            <code>.body</code>-д <code>flex: 1</code> өгч, үлдсэн өргөнийг
            бүгдийг эзлүүл.
          </>,
          <>
            Текстийг уртасгаад avatar шахагдахгүй, body л өргөсөж буйг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: COMMENT_HTML },
              { name: "style.css", lang: "css", code: COMMENT_CSS },
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
        title="Уян навбар угсрах"
        tasks={[
          <>
            <code>&lt;nav&gt;</code>-д <code>display: flex</code>,{" "}
            <code>align-items: center</code> өг.
          </>,
          <>
            <code>justify-content: space-between</code>-ээр логог зүүн, цэсийг
            баруун талд байрлуул.
          </>,
          <>
            Цэсний холбоосуудыг өөр flex контейнерт хийж <code>gap</code>-аар
            зайчил.
          </>,
          <>
            Логоны хэсэгт <code>flex-grow: 1</code> өгөөд цэсийг хамгийн баруун
            тийш түлхэх өөр аргыг туршиж үз.
          </>,
        ]}
        hints={[
          "space-between нь захын зүйлсийг хоёр тийш түлхэнэ.",
          "align-items: center нь босоо тэнхлэгт голлуулна.",
          "Цэсийг flex дотор flex (давхар) болгож болно.",
        ]}
        time="⏱ 15 минут"
      />

      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="Navbar ба картын эгнээ угсрах"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — БОДИТ LAYOUT
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Бодит layout"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Бодит
            <br />
            layout
          </>
        }
        lead="Сурсан бүхнээ нэгтгэж, жинхэнэ хуудсанд тааралддаг navbar болон картын эгнээг угсарна."
      />

      {/* 12 · NAVBAR ЗАГВАР */}
      <Slide
        label="navbar загвар"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "navbar бүтэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Толгой хэсэг</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Navbar-ийн бүтэц</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.navbar</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>align-items</T.prop>
                <T.punct>:</T.punct> <T.num>center</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>gap</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.spacer</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>flex</T.prop>
                <T.punct>:</T.punct> <T.num>1</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#161b22",
                  padding: "12px 16px",
                  borderRadius: 8,
                }}
              >
                <div style={{ color: "#39d353", fontWeight: 700 }}>erxes</div>
                <div style={{ flex: 1 }} />
                <div style={{ color: "#9aa4b2" }}>Нүүр</div>
                <div style={{ color: "#9aa4b2" }}>Үнэ</div>
                <div
                  style={{
                    background: "#39d353",
                    color: "#0d1117",
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontWeight: 700,
                  }}
                >
                  Нэвтрэх
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>flex: 1</b> бүхий хоосон <code>.spacer</code> нь логог зүүн,
            бусдыг баруунд түлхэх энгийн арга.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 13 · КАРТЫН ЭГНЭЭ */}
      <Slide
        label="картын эгнээ"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "тэнцүү багана" }}
      >
        <Frame>
          <Eyebrow className="anim">Тэнцүү өргөн</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Тэнцүү картын эгнээ</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.cards</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>flex</T.num>
                <T.punct>;</T.punct> <T.prop>gap</T.prop>
                <T.punct>:</T.punct> <T.num>16px</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.card</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>flex</T.prop>
                <T.punct>:</T.punct> <T.num>1 1 240px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", gap: 12 }}>
                {["Үндсэн", "Про", "Баг"].map((t) => (
                  <div
                    key={t}
                    style={{
                      flex: "1 1 0",
                      padding: 16,
                      background: "#161b22",
                      border: "1px solid #21262d",
                      borderRadius: 8,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>flex: 1 1 240px</b> — карт бүр 240px-аас эхэлж, өргөнийг тэнцүү
            хуваана. Зай дутвал доош боогдоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · ALIGN-SELF */}
      <Slide
        label="align-self"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "align-self" }}
      >
        <Frame>
          <Eyebrow className="anim">Ганц item-ийг өөрөөр</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>align-self</code> — нэг item-ийг тусгайлах
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>align-items</T.prop>
                <T.punct>:</T.punct> <T.num>flex-start</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.special</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>align-self</T.prop>
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
                  alignItems: "flex-start",
                  gap: 8,
                  height: 120,
                  background: "#161b22",
                  borderRadius: 8,
                  padding: 8,
                }}
              >
                <div style={cell}>top</div>
                <div style={{ ...cell, alignSelf: "center", background: "#39d353" }}>
                  center
                </div>
                <div style={cell}>top</div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>align-self</b> нь зөвхөн тухайн item-д container-ийн{" "}
            <code>align-items</code>-ийг дарж шинэ байрлал өгнө.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ЁСТОЙ / ЁСГҮЙ */}
      <Slide
        label="зөвлөмж"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 layout", topic: "сайн дадал" }}
      >
        <Frame>
          <Eyebrow className="anim">Дадлагын зөвлөмж</Eyebrow>
          <h2 className="slide-title anim anim-2">Flexbox — ёстой ба ёсгүй</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "Зайд gap ашиглах.",
              "Тэнцүү баганад flex: 1 хэрэглэх.",
              "Лого/дүрст flex-shrink: 0 өгөх.",
              "wrap-аар жижиг дэлгэцэд боох.",
            ]}
            donts={[
              "Item бүрд margin-аар зай тохируулах.",
              "Бүх юмыг px-ээр хатуу тогтоох.",
              "Хоёр хэмжээст grid-ийг flex-ээр албадах.",
              "align ба justify-г андуурах.",
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
        title="Үнийн багцын эгнээ"
        tasks={[
          <>
            <code>&lt;section class=&quot;plans&quot;&gt;</code> дотор 3 ширхэг{" "}
            <code>.plan</code> карт (нэр, үнэ, тайлбар) бич.
          </>,
          <>
            <code>.plans</code>-д <code>display: flex</code>,{" "}
            <code>flex-wrap: wrap</code>, <code>gap</code> өг.
          </>,
          <>
            <code>.plan</code>-д <code>flex: 1 1 240px</code> өгч, тэнцүү
            өргөнтэй болго.
          </>,
          <>
            Үнийг том <code>font-size</code>-ээр онцолж,{" "}
            <code>text-align: center</code> хий.
          </>,
          <>
            Цонхыг нарийсгаад картууд хэрхэн доош боогдож буйг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: PRICING_HTML },
              { name: "style.css", lang: "css", code: PRICING_CSS },
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
        title="grow / shrink / basis тааруулах"
        tasks={[
          <>
            3 картыг нэг flex эгнээнд тавьж, бүгдэд нь <code>flex: 1</code> өгч
            тэнцүү өргөнтэй болго.
          </>,
          <>
            Дунд картыг <code>flex: 2</code> болгож, бусдаасаа 2 дахин өргөн
            болго.
          </>,
          <>
            <code>flex-basis</code>-ээр карт бүрийн анхны өргөнг тогтоож, дараа
            нь <code>flex-grow</code>-аар үлдсэн зайг хуваа.
          </>,
          <>
            Цонхыг нарийсгаад <code>flex-shrink</code> картуудыг хэрхэн
            багасгаж байгааг ажигла.
          </>,
        ]}
        hints={[
          "flex: 1 = flex-grow:1; flex-shrink:1; flex-basis:0.",
          "flex: 2 элемент үлдсэн зайнаас 2 дахин их хувь авна.",
          "flex-basis нь grow/shrink хийхээс өмнөх 'эхлэлийн' өргөн.",
        ]}
        time="⏱ 15 минут"
      />

      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 11 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 11 дууслаа",
          topic: "flex item · бодит layout",
        }}
        cards={[
          {
            num: "01",
            title: "grow / shrink / basis",
            desc: "Item хэрхэн өсч, багасч, ямар суурьтай болохыг удирдана.",
          },
          {
            num: "02",
            title: "flex: 1",
            desc: "Үлдсэн зайг тэнцүү эзлэх хамгийн түгээмэл бичлэг.",
          },
          {
            num: "03",
            title: "Navbar",
            desc: "align-items: center + spacer/space-between-ээр угсарна.",
          },
          {
            num: "04",
            title: "Картын эгнээ",
            desc: "flex: 1 1 240px + wrap = тэнцүү, боогддог багана.",
          },
        ]}
      />

      {/* 18 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-11 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та Flexbox-оор бодит UI угсарч чадна. Дараагийн хичээлээр CSS Grid-ийг үзэж, хоёр хэмжээст (мөр + багана) layout хийж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 11 — flexbox layout дадлага</span>
          </>
        }
      />
    </Deck>
  );
}

const cell = {
  flex: "1 1 auto",
  padding: "12px",
  background: "#38bdf8",
  color: "#0d1117",
  borderRadius: 6,
  textAlign: "center",
  fontWeight: 700,
  fontSize: 14,
} as const;
