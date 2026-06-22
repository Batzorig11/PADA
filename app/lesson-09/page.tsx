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
  title: "erxes · Хичээл 09 — Display ба position",
};

/**
 * ХИЧЭЭЛ 09 — Display ба position
 * 🎯 display ба position ашиглан элементүүдийг хуудсан дээр байрлуулж сурах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — display: block/inline/inline-block, overflow
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — position (static/relative/absolute/fixed/sticky), z-index
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "21";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML/CSS) ===== */

const NAV_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Цэс</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav class="menu">
      <a class="item" href="#">Нүүр</a>
      <a class="item" href="#">Бүтээгдэхүүн</a>
      <a class="item" href="#">Үнэ</a>
      <a class="item" href="#">Холбоо барих</a>
    </nav>
  </body>
</html>
`;

const NAV_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.menu {
  background: #161b22;
  padding: 12px;
}

.item {
  /* холбоос анхдагчаар inline — хэмжээ авахгүй.
     inline-block болгож padding өгөх боломжтой болгоно */
  display: inline-block;
  padding: 10px 18px;
  margin-right: 6px;
  color: #f8fafc;
  background: #21262d;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
}
`;

const BADGE_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Карт ба тэмдэг</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <span class="badge">Шинэ</span>
      <h2>Бүтээгдэхүүн</h2>
      <p>Энэ картын баруун дээд буланд тэмдэг наалдсан.</p>
    </div>
  </body>
</html>
`;

const BADGE_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.card {
  /* absolute хүүхдийн тулгуур цэг болгоно */
  position: relative;
  width: 320px;
  margin: 60px auto;
  padding: 24px;
  background: #161b22;
  border-radius: 12px;
}

.badge {
  /* .card-аас хэмжиж баруун дээд буланд байрлуулна */
  position: absolute;
  top: -12px;
  right: -12px;
  padding: 6px 12px;
  background: #39d353;
  color: #0d1117;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
}
`;

const PLAY_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>display туршилт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>display туршилт</h1>

    <p>Доорх гурван шошго:</p>
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag block">JS</span>

    <p>Урт текст бүхий жижиг хайрцаг:</p>
    <div class="box">
      Энэ хайрцаг богино боловч урт текст агуулж байна. Тиймээс overflow: auto
      үед гүйлгэх зураас гарч ирнэ. Доош гүйлгэж үлдсэн хэсгийг үзээрэй. Мөр
      нэмэгдэх тусам хайрцаг өсөхгүй, харин дотроо гүйлгэгдэнэ.
    </div>
  </body>
</html>
`;

const PLAY_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
  padding: 24px;
}

/* span анхдагчаар inline — дээд/доод padding бусдыг түлхэхгүй.
   inline-block болгоход зэрэгцсэн хэвээр бүрэн хэмжээ авна */
.tag {
  display: inline-block;
  padding: 10px 18px;
  margin-right: 6px;
  background: #21262d;
  border-radius: 8px;
  font-weight: 700;
}

/* энэ шошгыг block болгоход бүтэн мөр эзэлж, дараагийн мөрөнд бууна */
.tag.block {
  display: block;
  margin-top: 10px;
}

.box {
  height: 120px;
  width: 280px;
  margin-top: 12px;
  padding: 12px;
  background: #161b22;
  border: 2px solid #38bdf8;
  border-radius: 8px;
  overflow: auto;
  line-height: 1.7;
}
`;

const BIGCARD_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Карт ба дээш товч</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <span class="badge">ШИНЭ</span>
      <h2>Бүтээгдэхүүн</h2>
      <p>
        Картын баруун дээд буланд badge наалдсан. Доорх «Дээш» товч хуудас
        гүйлгэхэд дэлгэцэд тогтож үлдэнэ.
      </p>
    </div>

    <a class="top-btn" href="#">Дээш ↑</a>
  </body>
</html>
`;

const BIGCARD_CSS = `body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.card {
  /* absolute хүүхдийн тулгуур цэг */
  position: relative;
  width: 320px;
  margin: 60px auto;
  padding: 24px;
  background: #161b22;
  border-radius: 12px;
}

.badge {
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 2;
  padding: 6px 12px;
  background: #39d353;
  color: #0d1117;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
}

/* дэлгэцийн доод баруун буланд тогтоно — гүйлгэхэд хөдлөхгүй */
.top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  padding: 12px 18px;
  background: #38bdf8;
  color: #0d1117;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}
`;

export default function Lesson09() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-09 · display · position</>}
        title={
          <>
            Display ба
            <br />
            position
            <Cursor />
          </>
        }
        subtitle="Элементүүд яагаад зарим нь мөр дүүргэж, зарим нь зэрэгцэн байрладаг вэ? display-ийн төрлүүд ба position-оор элементийг яг хүссэн газартаа байрлуулж сурна."
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
                title: "Box model",
                desc: "padding, border, margin, box-sizing.",
              },
              {
                idx: "✓",
                title: "Typography ба нэгж",
                desc: "font, line-height, px/rem/em/%/vw/vh.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Элементүүдийг хэрхэн байрлуулах вэ?",
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
                title: "display",
                desc: "block · inline · inline-block.",
              },
              {
                idx: "02",
                title: "overflow",
                desc: "Багтахгүй контентыг яах вэ?",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "position",
                desc: "static · relative · absolute · fixed · sticky.",
              },
              {
                idx: "04",
                title: "z-index",
                desc: "Аль элемент дээр гарч харагдах вэ?",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — DISPLAY
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ display"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            display
            <br />
            төрлүүд
          </>
        }
        lead="Элемент мөр дүүргэх үү, эсвэл зэрэгцэх үү — энэ нь display-ээс хамаарна. block, inline, inline-block-ийн ялгааг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: DISPLAY */}
      <KeyTerm
        label="Гол ойлголт: display"
        page="05"
        total={TOTAL}
        term="display"
        def={
          <>
            <b>display</b> нь элемент хуудсан дээр хэрхэн зай эзлэхийг тодорхойлно.{" "}
            <span className="inline-code">block</span> элемент бүтэн мөр эзэлнэ,{" "}
            <span className="inline-code">inline</span> зөвхөн контентынхоо хэрээр,{" "}
            <span className="inline-code">inline-block</span> зэрэгцэх боловч
            хэмжээ авна.
          </>
        }
        note="block · inline · inline-block"
      />

      {/* 06 · BLOCK vs INLINE */}
      <Slide
        label="block vs inline"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 display", topic: "block vs inline" }}
      >
        <Frame>
          <Eyebrow className="anim">Мөр дүүргэх үү, зэрэгцэх үү</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>block</code> vs <code>inline</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 28 }}>
            <ResultPane>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 6 }}>
                  block — тус тусдаа мөр
                </div>
                <div style={{ background: "#21262d", padding: 10, marginBottom: 6, borderRadius: 6 }}>
                  div 1
                </div>
                <div style={{ background: "#21262d", padding: 10, borderRadius: 6 }}>
                  div 2
                </div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: "#9aa4b2", marginBottom: 6 }}>
                  inline — зэрэгцэн урсана
                </div>
                <span style={{ background: "#21262d", padding: "4px 8px", borderRadius: 4 }}>
                  span
                </span>{" "}
                <span style={{ background: "#21262d", padding: "4px 8px", borderRadius: 4 }}>
                  span
                </span>{" "}
                <span style={{ background: "#21262d", padding: "4px 8px", borderRadius: 4 }}>
                  span
                </span>
              </div>
            </ResultPane>
            <CompareTable
              compact
              columns={[{ head: "display", width: "32%" }, { head: "Зан төлөв" }]}
              rows={[
                ["block", "Бүтэн мөр эзэлнэ. width/height авна. ж: div, p, h1."],
                ["inline", "Контентынхоо хэрээр. width/height авахгүй. ж: span, a."],
              ]}
            />
          </div>
          <CodeCaption>
            <b>inline</b> элементэд <code>width</code>, дээш-доош{" "}
            <code>margin</code> нөлөөлдөггүй — энэ нь нийтлэг «яагаад
            ажиллахгүй байна?» алдааны эх үүсвэр.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · INLINE-BLOCK */}
      <Slide
        label="inline-block"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 display", topic: "inline-block" }}
      >
        <Frame>
          <Eyebrow className="anim">Хоёрын дундах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>inline-block</code> — зэрэгцэх + хэмжээ
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 28 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.tag</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>display</T.prop>
                <T.punct>:</T.punct> <T.num>inline-block</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>padding</T.prop>
                <T.punct>:</T.punct> <T.num>8px</T.num> <T.num>16px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["HTML", "CSS", "JS"].map((t) => (
                  <span
                    key={t}
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      background: "#39d353",
                      color: "#0d1117",
                      borderRadius: 8,
                      fontWeight: 700,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>inline-block</b> нь зэрэгцэн байрлах боловч{" "}
            <code>width</code>, <code>height</code>, <code>padding</code>{" "}
            бүрэн авна — цэс, шошго (tag) хийхэд тохиромжтой.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · OVERFLOW */}
      <Slide
        label="overflow"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 display", topic: "overflow" }}
      >
        <Frame>
          <Eyebrow className="anim">Багтахгүй контент</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>overflow</code> — хэтэрсэн контентыг яах вэ
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 28 }}>
            <CompareTable
              compact
              columns={[{ head: "Утга", width: "34%" }, { head: "Үр дүн" }]}
              rows={[
                ["visible", "Анхдагч — контент хайрцгаас гарч харагдана."],
                ["hidden", "Хэтэрсэн хэсгийг таслаж нуу."],
                ["scroll", "Үргэлж гүйлгэх зураас (scrollbar) гарна."],
                ["auto", "Шаардлагатай үед л scrollbar гарна."],
              ]}
            />
            <ResultPane>
              <div
                style={{
                  height: 120,
                  width: "100%",
                  overflow: "auto",
                  background: "#161b22",
                  border: "2px solid #38bdf8",
                  borderRadius: 8,
                  padding: 12,
                  color: "#f8fafc",
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                overflow: auto — энэ хайрцаг богино боловч урт текст агуулж байна.
                Тиймээс гүйлгэх зураас автоматаар гарч ирнэ. Доош гүйлгэж үлдсэн
                хэсгийг үзээрэй. Мөр нэмэгдэх тусам хайрцаг өсөхгүй, харин дотроо
                гүйлгэгдэнэ. Энэ нь тогтмол өндөртэй блокт тохиромжтой.
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Тогтмол өндөртэй хайрцагт урт контент байвал <b>overflow: auto</b>{" "}
            нь хамгийн аюулгүй сонголт.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 (§1 дасал — display туршилт) */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="display төрлүүдийг туршиж ойлгох"
        tasks={[
          <>
            Гурван <code>&lt;span&gt;</code>-д <code>padding</code> өгөөд, яагаад
            дээд/доод зай нөлөөлөхгүй байгааг ажигла.
          </>,
          <>
            Тэдгээрийг <code>display: inline-block</code> болгож, зэрэгцсэн
            хэвээр padding бүрэн авахыг хар.
          </>,
          <>
            Нэг <code>&lt;span&gt;</code>-ийг <code>display: block</code> болгож,
            бүтэн мөр эзлэхийг ажигла.
          </>,
          <>
            Жижиг хайрцагт урт текст хийж <code>overflow: auto</code> өгч гүйлгэх
            боломжтой болго.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут"
            files={[
              { name: "index.html", lang: "html", code: PLAY_HTML },
              { name: "style.css", lang: "css", code: PLAY_CSS },
            ]}
          />
        }
      />

      {/* 10 · ДАСГАЛ 2 (§1 бүтээх — хэвтээ цэс) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Хэвтээ цэс угсрах"
        tasks={[
          <>
            <code>&lt;nav class=&quot;menu&quot;&gt;</code> дотор 4 ширхэг{" "}
            <code>&lt;a class=&quot;item&quot;&gt;</code> холбоос бич.
          </>,
          <>
            <code>.item</code> холбоос анхдагчаар inline тул{" "}
            <code>padding</code> бүрэн авахгүйг ажигла.
          </>,
          <>
            <code>.item</code>-д <code>display: inline-block</code> өгч,
            холбоосуудыг зэрэгцүүлэн байрлуул.
          </>,
          <>
            <code>padding</code>, <code>background</code>,{" "}
            <code>border-radius</code> нэмж товч хэлбэртэй болго.
          </>,
          <>
            <code>text-decoration: none</code>-оор доогуур зураасыг ав.
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
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="position ба z-index"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — POSITION
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ position"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            position
            <br />ба z-index
          </>
        }
        lead="Элементийг хэвийн урсгалаас гаргаж, яг хүссэн координат руу шилжүүлэх — position-ийн 5 утга ба давхцлыг удирдах z-index."
      />

      {/* 12 · ГОЛ ОЙЛГОЛТ: POSITION */}
      <KeyTerm
        label="Гол ойлголт: position"
        page="13"
        total={TOTAL}
        term="position"
        def={
          <>
            <b>position</b> нь элементийг хэвийн урсгалд үлдээх үү эсвэл{" "}
            <i>top/right/bottom/left</i>-ээр шилжүүлэх үү гэдгийг тодорхойлно.{" "}
            <span className="inline-code">relative</span> өөрөөсөө,{" "}
            <span className="inline-code">absolute</span> эх элементээсээ
            хэмжиж шилжинэ.
          </>
        }
        note="static · relative · absolute · fixed · sticky"
      />

      {/* 13 · POSITION УТГУУД */}
      <Slide
        label="position утгууд"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 position", topic: "5 утга" }}
      >
        <Frame>
          <Eyebrow className="anim">5 утга</Eyebrow>
          <h2 className="slide-title anim anim-2">position-ийн утгууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Утга", width: "26%" }, { head: "Зан төлөв" }]}
            rows={[
              ["static", "Анхдагч. Хэвийн урсгал. top/left нөлөөлөхгүй."],
              ["relative", "Өөрийнхөө хэвийн байрлалаас хазайна. Тулгуур болж чадна."],
              ["absolute", "Урсгалаас гарна. Хамгийн ойрын relative эхээсээ хэмжинэ."],
              ["fixed", "Дэлгэцэд тогтоно. Гүйлгэхэд хөдлөхгүй (ж: тогтсон header)."],
              ["sticky", "Гүйлгэх хүртэл хэвийн, дараа нь наалдан тогтоно."],
            ]}
          />
          <CodeCaption>
            <b>absolute</b>-ийг хэрэглэхээс өмнө эх элементэд{" "}
            <code>position: relative</code> тавихаа мартаж болохгүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · RELATIVE + ABSOLUTE */}
      <Slide
        label="relative + absolute"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 position", topic: "relative тулгуур · absolute" }}
      >
        <Frame>
          <Eyebrow className="anim">Хамгийн түгээмэл хослол</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>relative</code> эх + <code>absolute</code> хүүхэд
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.card</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>position</T.prop>
                <T.punct>:</T.punct> <T.num>relative</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line> </Line>
              <Line>
                <T.sel>.badge</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.prop>position</T.prop>
                <T.punct>:</T.punct> <T.num>absolute</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>top</T.prop>
                <T.punct>:</T.punct> <T.num>-12px</T.num>
                <T.punct>;</T.punct> <T.prop>right</T.prop>
                <T.punct>:</T.punct> <T.num>-12px</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div
                style={{
                  position: "relative",
                  width: 200,
                  padding: 20,
                  background: "#161b22",
                  borderRadius: 12,
                  color: "#f8fafc",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    right: -12,
                    padding: "6px 12px",
                    background: "#39d353",
                    color: "#0d1117",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  Шинэ
                </span>
                Карт
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Эх элемент <b>relative</b> болсон тул тэмдэг (badge){" "}
            <b>картаасаа</b> хэмжиж буланд наалдсан — дэлгэцээс биш.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · FIXED + STICKY */}
      <Slide
        label="fixed + sticky"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 position", topic: "fixed · sticky" }}
      >
        <Frame>
          <Eyebrow className="anim">Гүйлгэхэд тогтох</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>fixed</code> ба <code>sticky</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CompareTable
              compact
              columns={[{ head: "Утга", width: "28%" }, { head: "Үр дүн" }]}
              rows={[
                [
                  "fixed",
                  "Дэлгэцэд бэхлэгдэнэ. Хуудас гүйлгэхэд байрандаа хэвээр. Жишээ: дээд header, чат товч.",
                ],
                [
                  "sticky",
                  "Эхэндээ хэвийн, тодорхой цэгт хүрэхэд наалдан тогтоно. Жишээ: гүйлгэхэд дагах хүснэгтийн гарчиг.",
                ],
              ]}
            />
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.header</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>position</T.prop>
                <T.punct>:</T.punct> <T.num>sticky</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>top</T.prop>
                <T.punct>:</T.punct> <T.num>0</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line>
                <T.punct>{"}"}</T.punct>
              </Line>
            </CodeWindow>
          </div>
          <CodeCaption>
            <b>sticky</b>-д <code>top</code> заавал хэрэгтэй — «хаана хүрэхэд
            наалдахыг» зааж өгнө.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · Z-INDEX */}
      <Slide
        label="z-index"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 position", topic: "z-index" }}
      >
        <Frame>
          <Eyebrow className="anim">Аль нь дээр вэ</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>z-index</code> — давхцлын дараалал
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.back</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>z-index</T.prop>
                <T.punct>:</T.punct> <T.num>1</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.sel>.front</T.sel> <T.punct>{"{"}</T.punct>{" "}
                <T.prop>z-index</T.prop>
                <T.punct>:</T.punct> <T.num>2</T.num>
                <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
              </Line>
              <Line>
                <T.com>{"/* том тоо нь дээр гарч харагдана */"}</T.com>
              </Line>
            </CodeWindow>
            <ResultPane>
              <div style={{ position: "relative", height: 120 }}>
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 120,
                    height: 80,
                    background: "#38bdf8",
                    borderRadius: 8,
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 40,
                    left: 60,
                    width: 120,
                    height: 80,
                    background: "#39d353",
                    borderRadius: 8,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0d1117",
                    fontWeight: 700,
                  }}
                >
                  z-index: 2
                </div>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>z-index</b> нь зөвхөн <code>position</code> заасан (static биш)
            элементэд л ажиллана. Том тоо урд талд.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 18 · ДАСГАЛ 3 (§2 дасал — тэмдэгтэй карт) */}
      <Exercise
        label="Дасгал 3"
        page="18"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Тэмдэгтэй карт байрлуулах"
        tasks={[
          <>
            <code>&lt;div class=&quot;card&quot;&gt;</code> дотор{" "}
            <code>&lt;span class=&quot;badge&quot;&gt;Шинэ&lt;/span&gt;</code>,
            гарчиг, текст бич.
          </>,
          <>
            <code>.card</code>-д <code>position: relative</code> өгч, тулгуур
            болго.
          </>,
          <>
            <code>.badge</code>-д <code>position: absolute</code>,{" "}
            <code>top</code>, <code>right</code> өгч баруун дээд буланд
            байрлуул.
          </>,
          <>
            <code>border-radius: 999px</code>-ээр тэмдгийг бөмбөлөг хэлбэртэй
            болго.
          </>,
          <>
            <code>top</code>/<code>right</code>-ийн утгыг өөрчилж, тэмдэг хэрхэн
            шилжиж буйг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: BADGE_HTML },
              { name: "style.css", lang: "css", code: BADGE_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 19 · ДАСГАЛ 4 (§2 бүтээх — badge + fixed товч + z-index) */}
      <Exercise
        label="Дасгал 4"
        page="19"
        total={TOTAL}
        tag="Дасгал 4 · хэсэг 2"
        title="Badge ба «дээш» товч байрлуулах"
        tasks={[
          <>
            Картад <code>position: relative</code> өгч, дотор нь «ШИНЭ» badge-ийг{" "}
            <code>position: absolute</code>-аар баруун дээд буланд тавь.
          </>,
          <>
            <code>top</code>, <code>right</code> утгуудаар badge-ийн яг байрлалыг
            тохируул.
          </>,
          <>
            «Дээш ↑» товчийг <code>position: fixed</code>-ээр дэлгэцийн доод
            баруун буланд тогтоо.
          </>,
          <>
            <code>z-index</code>-ээр badge ба товчийг бусад агуулгын дээр гаргаж
            давхцлыг зохицуул.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[
              { name: "index.html", lang: "html", code: BIGCARD_HTML },
              { name: "style.css", lang: "css", code: BIGCARD_CSS },
            ]}
          />
        }
      />

      <Recap
        label="Хураангуй"
        page="20"
        total={TOTAL}
        eyebrow="Хичээл 09 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 09 дууслаа",
          topic: "display · position · z-index",
        }}
        cards={[
          {
            num: "01",
            title: "display",
            desc: "block мөр дүүргэнэ, inline зэрэгцэнэ, inline-block хоёулаа.",
          },
          {
            num: "02",
            title: "overflow",
            desc: "Багтахгүй контентыг hidden/scroll/auto-аар удирдана.",
          },
          {
            num: "03",
            title: "position",
            desc: "relative эх + absolute хүүхэд — хамгийн түгээмэл хослол.",
          },
          {
            num: "04",
            title: "z-index",
            desc: "Том тоотой элемент урд талд гарч харагдана.",
          },
        ]}
      />

      {/* 21 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-09 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Одоо та элементийг хүссэн газартаа байрлуулж чадна. Дараагийн хичээлээр Flexbox-ыг үзэж, элементүүдийг хялбар, уян хатан эгнүүлж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 09 — display ба position</span>
          </>
        }
      />
    </Deck>
  );
}
