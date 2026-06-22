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
  title: "erxes · Хичээл 14 — Transition, transform, animation",
};

/**
 * ХИЧЭЭЛ 14 — Transition, transform, animation
 * 🎯 Hover төлөв, transition, transform ба @keyframes-ээр хөдөлгөөн нэмж сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — :hover/:focus, transition
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — transform, @keyframes animation
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "20";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const BTN_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Товч</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <a class="btn" href="#">Дэлгэрэнгүй</a>
  </body>
</html>
`;

const BTN_CSS = `body {
  background: #0d1117;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  background: #39d353;
  color: #0d1117;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  /* өөрчлөлтийг 0.2s-д зөөлрүүлнэ */
  transition: background 0.2s, transform 0.2s;
}

/* хулганаар дээгүүр нь очиход */
.btn:hover {
  background: #2bb344;
  /* бага зэрэг дээш өргөгдөнө */
  transform: translateY(-3px);
}
`;

const CARD_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Хөдөлгөөнт карт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <span class="badge">Шинэ</span>
      <h2>Бүтээгдэхүүн</h2>
      <p>Хулганаар дээгүүр нь очвол карт өргөгдөнө.</p>
    </div>
  </body>
</html>
`;

const CARD_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.card {
  position: relative;
  width: 300px;
  padding: 28px;
  background: #161b22;
  border-radius: 16px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
}

.badge {
  position: absolute;
  top: -12px;
  right: -12px;
  padding: 6px 12px;
  background: #39d353;
  color: #0d1117;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  /* pulse анимацийг давтаж тоглуулна */
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
`;

export default function Lesson14() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-14 · transition · animation</>}
        title={
          <>
            Хөдөлгөөн ба
            <br />
            анимаци
            <Cursor />
          </>
        }
        subtitle="Статик хуудсыг амьд болгоё. :hover төлөв, transition-аар зөөлөн шилжилт, transform-аар хувиргалт, @keyframes-ээр бүрэн анимаци хийж сурна."
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
                title: "Layout",
                desc: "Flexbox, Grid, responsive design.",
              },
              {
                idx: "✓",
                title: "Чимэглэл",
                desc: "border-radius, box-shadow, өнгө.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Хуудсанд хөдөлгөөн ба харилцаа нэмэх.",
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
                title: ":hover ба :focus",
                desc: "Хэрэглэгчийн үйлдэлд хариу өгөх.",
              },
              {
                idx: "02",
                title: "transition",
                desc: "Өөрчлөлтийг зөөлөн болгох.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "transform",
                desc: "scale · rotate · translate.",
              },
              {
                idx: "04",
                title: "@keyframes",
                desc: "Олон шаттай анимаци.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — STATES & TRANSITION
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Төлөв ба transition"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Төлөв ба
            <br />
            transition
          </>
        }
        lead="Хэрэглэгч хулгана хүргэх, талбар сонгоход хариу үзүүлэх. Тэр өөрчлөлтийг transition-аар зөөлөн болгоно."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: PSEUDO-CLASS */}
      <KeyTerm
        label="Гол ойлголт: :hover / :focus"
        page="05"
        total={TOTAL}
        term=":hover · :focus"
        def={
          <>
            <b>Pseudo-class</b> нь элементийн <i>тодорхой төлвийг</i> сонгоно.{" "}
            <span className="inline-code">:hover</span> — хулгана дээр нь
            байх үед,{" "}
            <span className="inline-code">:focus</span> — талбар идэвхжсэн
            (сонгогдсон) үед хэрэглэгдэх CSS-ийг өгнө.
          </>
        }
        note=".btn:hover { … }"
      />

      {/* 06 · :HOVER / :FOCUS */}
      <Slide
        label=":hover :focus"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 төлөв", topic: ":hover · :focus" }}
      >
        <Frame>
          <Eyebrow className="anim">Үйлдэлд хариу</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>:hover</code> ба <code>:focus</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.btn</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>background</T.prop>
                <T.punct>:</T.punct> <T.num>#39d353</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line state="hl">
                <T.sel>.btn:hover</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>background</T.prop>
                <T.punct>:</T.punct> <T.num>#2bb344</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 8 }}>
                  ↓ дээгүүр нь оч
                </div>
                <span className="hoverbtn">Hover хийнэ үү</span>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>:focus</b> нь гар (keyboard)-аар талбар сонгоход харагддаг тул
            хүртээмжид (accessibility) чухал — битгий бүрэн ав.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · ГОЛ ОЙЛГОЛТ: TRANSITION */}
      <KeyTerm
        label="Гол ойлголт: transition"
        page="07"
        total={TOTAL}
        term="transition"
        def={
          <>
            <b>transition</b> нь property өөрчлөгдөхөд хооронд нь <i>хугацаа
            өгч</i> зөөлрүүлнэ. Бичлэг:{" "}
            <span className="inline-code">
              transition: property duration;
            </span>{" "}
            — юу, хэр удаан шилжихийг заана.
          </>
        }
        note="transition: background 0.2s;"
      />

      {/* 08 · TRANSITION ХЭСГҮҮД */}
      <Slide
        label="transition утгууд"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 transition", topic: "утгууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Юу · хэр удаан · яаж</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>transition</code>-ийн хэсгүүд
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[{ head: "Хэсэг", width: "34%" }, { head: "Утга" }]}
            rows={[
              [<code key="1">property</code>, "Юуг шилжүүлэх (background, transform, all)."],
              [<code key="2">duration</code>, "Хэр удаан (0.2s, 300ms)."],
              [<code key="3">timing</code>, "Хурдны муруй (ease, linear)."],
              [
                <code key="4">transition: all 0.3s ease;</code>,
                "Бүх өөрчлөлтийг 0.3s-д зөөлрүүлнэ.",
              ],
            ]}
          />
          <CodeCaption>
            <b>transition</b>-ийг үргэлж <i>анхны (hover биш)</i> дүрэмд бич —
            тэгвэл орох, гарах хоёр тал зөөлөн болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Амьд товч"
        tasks={[
          <>
            <code>&lt;a class=&quot;btn&quot;&gt;</code> товч үүсгэж,{" "}
            <code>padding</code>, <code>background</code>,{" "}
            <code>border-radius</code> өг.
          </>,
          <>
            <code>.btn</code>-д <code>transition: background 0.2s, transform
            0.2s</code> нэм.
          </>,
          <>
            <code>.btn:hover</code> дотор <code>background</code>-ийг бараан
            болго.
          </>,
          <>
            Мөн <code>transform: translateY(-3px)</code>-ээр товчийг дээш
            өргө.
          </>,
          <>
            Hover хийхэд өөрчлөлт огцом биш, зөөлөн болж буйг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: BTN_HTML },
              { name: "style.css", lang: "css", code: BTN_CSS },
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
        title="Холбоосын hover анимаци"
        tasks={[
          <>
            Холбоост <code>:hover</code> дээр өнгө ба арын дэвсгэрийг өөрчил.
          </>,
          <>
            <code>transition: all 0.3s ease</code> нэмж шилжилтийг зөөлрүүл.
          </>,
          <>
            <code>:focus</code> төлөв нэмж, гарын товчлуураар сонгоход ч
            харагдуул.
          </>,
          <>
            <code>transition-duration</code>-ийг 0.1s ба 0.6s болгож хурдны
            ялгааг мэдэр.
          </>,
        ]}
        hints={[
          "transition-ийг анхдагч (hover биш) төлөв дээр зарлана.",
          ":focus нь хүртээмжид чухал — зөвхөн hover хангалтгүй.",
          "ease, linear, ease-in-out — хурдны муруйнууд.",
        ]}
        time="⏱ 15 минут"
      />

      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="transform ба @keyframes анимаци"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — TRANSFORM & ANIMATION
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ transform ба анимаци"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            transform ба
            <br />
            анимаци
          </>
        }
        lead="Элементийг томруулах, эргүүлэх, шилжүүлэх. Дараа нь @keyframes-ээр өөрөө давтагдах анимаци хийнэ."
      />

      {/* 12 · TRANSFORM */}
      <Slide
        label="transform"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 transform", topic: "scale · rotate · translate" }}
      >
        <Frame>
          <Eyebrow className="anim">Хувиргалт</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>transform</code> — scale · rotate · translate
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CompareTable
              compact
              columns={[{ head: "Функц", width: "44%" }, { head: "Үйлдэл" }]}
              rows={[
                [<code key="1">scale(1.2)</code>, "1.2 дахин томруулна."],
                [<code key="2">rotate(15deg)</code>, "15° эргүүлнэ."],
                [<code key="3">translate(10px, 0)</code>, "Байрнаас нь шилжүүлнэ."],
              ]}
            />
            <ResultPane>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ ...box, transform: "scale(1.2)" }}>scale</div>
                <div style={{ ...box, transform: "rotate(15deg)", background: "#39d353" }}>
                  rotate
                </div>
                <div style={{ ...box, transform: "translateY(-10px)", background: "#f59e0b" }}>
                  move
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>transform</b> нь элементийн жинхэнэ зайг өөрчлөхгүй (хөршөө
            түлхэхгүй) тул анимацид хурдан, гөлгөр ажилладаг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 13 · TRANSFORM + TRANSITION */}
      <Slide
        label="transform + transition"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 transform", topic: "карт өргөх" }}
      >
        <Frame>
          <Eyebrow className="anim">Хослуулах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Hover дээр карт өргөх</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.card</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>transition</T.prop>
                <T.punct>:</T.punct> <T.num>transform 0.25s</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
              <Line state="hl">
                <T.sel>.card:hover</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>transform</T.prop>
                <T.punct>:</T.punct> <T.num>translateY(-8px)</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div className="liftcard">Hover хийж өргө</div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>transition + transform</b> = картын сонгодог «өргөгдөх» эффект.
            box-shadow-г хамт нэмбэл илүү гүн мэдрэгдэнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · ГОЛ ОЙЛГОЛТ: @KEYFRAMES */}
      <KeyTerm
        label="Гол ойлголт: @keyframes"
        page="15"
        total={TOTAL}
        term="@keyframes"
        def={
          <>
            <b>@keyframes</b> нь анимацийн <i>шатуудыг</i> (0%-аас 100%)
            тодорхойлно. Дараа нь элементэд{" "}
            <span className="inline-code">animation: нэр хугацаа</span> өгч
            тоглуулна. transition нэг шилжилт хийдэг бол keyframes олон шаттай.
          </>
        }
        note="animation: pulse 1.5s infinite;"
      />

      {/* 15 · @KEYFRAMES КОД БА ҮР ДҮН */}
      <Slide
        label="@keyframes жишээ"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 анимаци", topic: "pulse" }}
      >
        <Frame>
          <Eyebrow className="anim">Давтагдах анимаци</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>@keyframes</code>-ээр pulse
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.kw>@keyframes</T.kw> <T.fn>pulse</T.fn> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.num>0%</T.num> <T.punct>{"{"}</T.punct> <T.prop>transform</T.prop>
                <T.punct>:</T.punct> <T.num>scale(1)</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.num>50%</T.num> <T.punct>{"{"}</T.punct> <T.prop>transform</T.prop>
                <T.punct>:</T.punct> <T.num>scale(1.15)</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.num>100%</T.num> <T.punct>{"{"}</T.punct> <T.prop>transform</T.prop>
                <T.punct>:</T.punct> <T.num>scale(1)</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="pulsebadge">Шинэ</span>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>infinite</b> нь анимацийг төгсгөлгүй давтана.{" "}
            <code>0% / 50% / 100%</code> шатуудын хооронд браузер автоматаар
            гүйцээнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 3"
        page="17"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Хөдөлгөөнт карт"
        tasks={[
          <>
            <code>&lt;div class=&quot;card&quot;&gt;</code> дотор{" "}
            <code>.badge</code> (Шинэ), гарчиг, текст бич;{" "}
            <code>position: relative</code> өг.
          </>,
          <>
            <code>.card</code>-д <code>transition</code> нэмж,{" "}
            <code>.card:hover</code>-т <code>transform: translateY(-8px)</code>{" "}
            ба <code>box-shadow</code> өг.
          </>,
          <>
            <code>.badge</code>-ийг <code>position: absolute</code>-аар баруун
            дээд буланд байрлуул.
          </>,
          <>
            <code>@keyframes pulse</code> тодорхойлж scale-ийг 1 → 1.15 → 1
            болго.
          </>,
          <>
            <code>.badge</code>-д <code>animation: pulse 1.5s infinite</code>{" "}
            өгч цохилуул.
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

      {/* 17 · ХУРААНГУЙ */}
      {/* ДАСГАЛ 4 (§2) */}
      <Exercise
        label="Дасгал 4"
        page="18"
        total={TOTAL}
        tag="Дасгал 4 · хэсэг 2"
        title="Spinner ба keyframes анимаци"
        tasks={[
          <>
            <code>@keyframes spin</code> зарлаж, <code>0%</code> →{" "}
            <code>transform: rotate(0)</code>, <code>100%</code> →{" "}
            <code>rotate(360deg)</code> бич.
          </>,
          <>
            Дугуй элементэд <code>animation: spin 1s linear infinite</code> өгч
            эргэлдүүл.
          </>,
          <>
            Картад <code>:hover</code> дээр <code>transform: scale(1.05)</code>{" "}
            өгч томсго.
          </>,
          <>
            <code>@keyframes pulse</code> үүсгэж opacity-г 1 → 0.4 → 1 болгож
            «амьсгалах» эффект хий.
          </>,
        ]}
        hints={[
          "infinite нь анимацийг тасралтгүй давтана.",
          "transform: scale нь элементийг томруулна/жижигрүүлнэ.",
          "@keyframes-д 0% ба 100%-ийг заавал зааж өг.",
        ]}
        time="⏱ 15 минут"
      />

      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 14 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 14 дууслаа",
          topic: "transition · transform · animation",
        }}
        cards={[
          {
            num: "01",
            title: ":hover / :focus",
            desc: "Хэрэглэгчийн үйлдэлд хариу үзүүлэх төлвүүд.",
          },
          {
            num: "02",
            title: "transition",
            desc: "Property-ийн өөрчлөлтийг хугацаагаар зөөлрүүлнэ.",
          },
          {
            num: "03",
            title: "transform",
            desc: "scale, rotate, translate-ээр элемент хувиргана.",
          },
          {
            num: "04",
            title: "@keyframes",
            desc: "Олон шаттай, давтагддаг анимаци үүсгэнэ.",
          },
        ]}
      />

      {/* 18 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-14 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та хуудсаа амьд, харилцаатай болголоо. Энэ нь Сар 1-ийн сүүлчийн шинэ сэдэв — дараагийн хоёр хичээлээр сурсан бүхнээ нэгтгэж бүтэн landing page төсөл бүтээнэ. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 14 — transition, transform, animation</span>
          </>
        }
      />
    </Deck>
  );
}

const box = {
  width: 56,
  height: 56,
  background: "#38bdf8",
  color: "#0d1117",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 12,
} as const;
