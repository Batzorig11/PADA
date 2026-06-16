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
  Diagram,
  Node,
  Arrow,
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
  title: "erxes · Хичээл 03 — Текст, жагсаалт, холбоос, зураг",
};

/**
 * ХИЧЭЭЛ 03 — Текст, жагсаалт, холбоос, зураг
 * 🎯 Контент ба медиатай баялаг хуудас зурах: текст форматлах, жагсаалт,
 *    холбоос ба зам (path), зураг.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Текст форматлах ба жагсаалт
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Холбоос, зам, зураг
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "23";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML) ===== */

const RECIPE_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Өндөгтэй будаа</title>
  </head>
  <body>
    <h1>Өндөгтэй будаа</h1>
    <p>Хурдан бөгөөд амар хийдэг өглөөний хоол.</p>

    <p>Бэлдэх хугацаа: <strong>15 минут</strong></p>

    <h2>Орц</h2>
    <ul>
      <li>Цагаан будаа — 1 аяга</li>
      <li>Өндөг — 2 ширхэг</li>
      <li>Ногоон сонгино</li>
      <li>Давс, цөцгийн тос</li>
    </ul>

    <hr />

    <h2>Хийх алхмууд</h2>
    <ol>
      <li>Будаагаа угааж чанна.</li>
      <li>Тогоонд тос хайлуулна.</li>
      <li>Өндгөө хийж хуурна.</li>
      <li>Будаатай хольж амтална.</li>
    </ol>
  </body>
</html>
`;

const TRAVEL_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Миний аялал</title>
  </head>
  <body>
    <h1>Миний аяллын блог</h1>
    <p>Сүүлийн жилд очсон дуртай газруудаа энд хуваалцлаа.</p>

    <h2>Очсон газрууд</h2>
    <ul>
      <li>Хөвсгөл нуур</li>
      <li>Говийн Тэрэлж</li>
      <li>Алтай таван богд</li>
    </ul>

    <img src="images/khovsgol.jpg" alt="Хөвсгөл нуурын тунгалаг ус, эргэн тойрны нарс мод" />
    <img src="images/gobi.jpg" alt="Говийн элсэн манхан нар жаргах үед" />

    <p>
      Миний тухай дэлгэрэнгүйг <a href="about.html">энэ хуудаснаас</a> уншаарай.
    </p>
    <p>
      Аяллын зөвлөгөөг
      <a href="https://www.legendtour.mn" target="_blank">Legend Tour сайтаас</a>
      үзэж болно.
    </p>
  </body>
</html>
`;

export default function Lesson03() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-03 · текст · жагсаалт · холбоос · зураг</>}
        title={
          <>
            Контентоор
            <br />
            баялаг хуудас
            <Cursor />
          </>
        }
        subtitle="Текст форматлах тагууд, жагсаалт, холбоос ба зам (path), болон зураг — мэдээлэл, медиа, замчлал бүхий жинхэнэ хуудас бүтээе."
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
          <Eyebrow className="anim">Хичээл 02-оос санах нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "Boilerplate ба бүтэц",
                desc: "DOCTYPE, html, head, body — хуудас бүрийн араг яс.",
              },
              {
                idx: "✓",
                title: "Атрибут",
                desc: "нэр=\"утга\" хэлбэрээр тагт нэмэлт мэдээлэл өгдөг.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Тэр араг ясыг текст, жагсаалт, холбоос, зургаар дүүргэнэ.",
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
                title: "Текст форматлах тагууд",
                desc: "strong, em, br, hr, span — текстээ хэлбэржүүлэх.",
              },
              {
                idx: "02",
                title: "Жагсаалт",
                desc: "ul / ol / li — цэгэн, дугаартай, үүрлэсэн жагсаалт.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Холбоос ба зам",
                desc: "<a>, href, relative vs absolute path.",
              },
              {
                idx: "04",
                title: "Зураг",
                desc: "<img>, src, alt ба зургийн зам.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — ТЕКСТ ФОРМАТЛАХ БА ЖАГСААЛТ
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Текст ба жагсаалт"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Текст ба
            <br />
            жагсаалт
          </>
        }
        lead="Хуудасны гол агуулга бол текст. Эхлээд түүнийгээ хэлбэржүүлж, цэгцтэй жагсаая."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: ТЕКСТ ФОРМАТЛАХ */}
      <KeyTerm
        label="Гол ойлголт: Текст форматлах"
        page="05"
        total={TOTAL}
        term="Текст форматлах таг"
        def={
          <>
            <b>Текст форматлах тагууд</b> нь догол мөрийн дотор үг, өгүүлбэрийг{" "}
            <span className="inline-code">онцлох</span>, тусгаарлах зорилготой.
            Тэд утга нэмдэг —{" "}
            <span className="inline-code">&lt;strong&gt;</span> зүгээр л тод биш,
            «энэ чухал» гэсэн утгатай.
          </>
        }
        note="харагдах байдал биш — утгаа бод"
      />

      {/* 06 · ТЕКСТ ФОРМАТЛАХ ТАГУУД */}
      <Slide
        label="Текст тагууд"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 текст", topic: "форматлах тагууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Хэлбэржүүлэх таг</Eyebrow>
          <h2 className="slide-title anim anim-2">Текст форматлах тагууд</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Таг", width: "26%" },
              { head: "Утга", width: "24%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="t">&lt;strong&gt;</code>, "Тод", "Чухал текстийг онцлох (утгаар)."],
              [<code key="t">&lt;em&gt;</code>, "Налуу", "Өргөлт нэмж онцлох (emphasis)."],
              [<code key="t">&lt;br&gt;</code>, "Мөр таслах", "Шинэ мөр рүү шилжих (хаах таггүй)."],
              [<code key="t">&lt;hr&gt;</code>, "Зураас", "Сэдэв тусгаарлах хэвтээ зураас."],
              [<code key="t">&lt;span&gt;</code>, "Мөр доторх сав", "Текстийн хэсгийг ороож тусад нь загварчлах."],
              [<code key="t">&lt;small&gt;</code>, "Жижиг", "Тайлбар, эрхийн мэдээлэл гэх мэт."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 07 · ТЕКСТ ФОРМАТ — КОД БА ҮР ДҮН */}
      <Slide
        label="Текст код"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 текст", topic: "код ба үр дүн" }}
      >
        <Frame>
          <Eyebrow className="anim">Код → үр дүн</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Текстээ хэлбэржүүлэх нь</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="text.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>HTML бол{" "}
                <T.punct>&lt;</T.punct>
                <T.tag>strong</T.tag>
                <T.punct>&gt;</T.punct>бүтэц
                <T.punct>&lt;/</T.punct>
                <T.tag>strong</T.tag>
                <T.punct>&gt;</T.punct>,
              </Line>
              <Line>
                CSS бол{" "}
                <T.punct>&lt;</T.punct>
                <T.tag>em</T.tag>
                <T.punct>&gt;</T.punct>загвар
                <T.punct>&lt;/</T.punct>
                <T.tag>em</T.tag>
                <T.punct>&gt;</T.punct>.
                <T.punct>&lt;/</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>hr</T.tag> <T.punct>/&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>small</T.tag>
                <T.punct>&gt;</T.punct>2026 он
                <T.punct>&lt;/</T.punct>
                <T.tag>small</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <div style={{ color: "#111", fontSize: 24, lineHeight: 1.7 }}>
                <p style={{ margin: 0 }}>
                  HTML бол <strong>бүтэц</strong>, CSS бол <em>загвар</em>.
                </p>
                <hr style={{ border: 0, borderTop: "1px solid #ccc", margin: "16px 0" }} />
                <small style={{ color: "#666" }}>2026 он</small>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>&lt;strong&gt;</b> тод, <b>&lt;em&gt;</b> налуу — гэхдээ гол нь
            тэдний нэмдэг <b>утга</b>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ГОЛ ОЙЛГОЛТ: ЖАГСААЛТ */}
      <KeyTerm
        label="Гол ойлголт: Жагсаалт"
        page="08"
        total={TOTAL}
        term="Жагсаалт"
        def={
          <>
            <b>Жагсаалт</b> нь холбоотой зүйлсийг цэгцтэй харуулдаг.{" "}
            <span className="inline-code">&lt;ul&gt;</span> — дараалал хамаагүй
            (цэгэн), <span className="inline-code">&lt;ol&gt;</span> — дараалал
            чухал (дугаартай). Мөр бүр нь{" "}
            <span className="inline-code">&lt;li&gt;</span>.
          </>
        }
        note="ul / ol дотор зөвхөн li"
      />

      {/* 09 · ЖАГСААЛТ — КОД БА ҮР ДҮН */}
      <Slide
        label="Жагсаалт"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 жагсаалт", topic: "ul · ol · li" }}
      >
        <Frame>
          <Eyebrow className="anim">Цэгэн ба дугаартай</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Хоёр төрлийн жагсаалт</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="list.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>ul</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>Сүү
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>Талх
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>ul</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>ol</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>Усаа буцалга
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>Цай хийнэ
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>ol</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <div style={{ color: "#111", fontSize: 23 }}>
                <ul style={{ margin: "0 0 16px", paddingLeft: 28, lineHeight: 1.7 }}>
                  <li>Сүү</li>
                  <li>Талх</li>
                </ul>
                <ol style={{ margin: 0, paddingLeft: 28, lineHeight: 1.7 }}>
                  <li>Усаа буцалга</li>
                  <li>Цай хийнэ</li>
                </ol>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>ul</b> — цэг, <b>ol</b> — дугаар. Дараалал чухал юу? гэдгээр сонгоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ҮҮРЛЭСЭН ЖАГСААЛТ */}
      <Slide
        label="Үүрлэсэн жагсаалт"
        page="10"
        total={TOTAL}
        footer={{ tag: "§01 жагсаалт", topic: "үүрлэх" }}
      >
        <Frame>
          <Eyebrow className="anim">Жагсаалт доторх жагсаалт</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Үүрлэсэн жагсаалт</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="nested.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>ul</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>Frontend
              </Line>
              <Line state="hl" indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>ul</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line state="hl" indent={6}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>HTML
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line state="hl" indent={6}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>CSS
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line state="hl" indent={4}>
                <T.punct>&lt;/</T.punct>
                <T.tag>ul</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>ul</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <ul style={{ margin: 0, paddingLeft: 28, color: "#111", fontSize: 23, lineHeight: 1.7 }}>
                <li>
                  Frontend
                  <ul style={{ paddingLeft: 26 }}>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </li>
              </ul>
            </ResultPane>
          </div>
          <CodeCaption>
            Дотор жагсаалтыг <b>&lt;li&gt;</b>-ийн дотор бичнэ — гадна нь биш.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 11 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="11"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Хоолны жор бичих"
        tasks={[
          <>
            <code>recipe.html</code>-д <b>boilerplate</b> бичиж эхэл.
          </>,
          <>
            Гарчгийг <code>&lt;h1&gt;</code>, нэг өгүүлбэр тайлбарыг{" "}
            <code>&lt;p&gt;</code>-ээр бич.
          </>,
          <>
            Орцыг <code>&lt;ul&gt;</code> (цэгэн) жагсаалтаар бич.
          </>,
          <>
            Хийх алхмуудыг <code>&lt;ol&gt;</code> (дугаартай) жагсаалтаар бич.
          </>,
          <>
            Хоол бэлдэх <b>хугацааг</b> <code>&lt;strong&gt;</code>-аар онцол.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут"
            files={[{ name: "recipe.html", lang: "html", code: RECIPE_HTML }]}
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
        resumeTopic="Холбоос, зам ба зураг"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — ХОЛБООС, ЗАМ, ЗУРАГ
          ============================================================ */}

      {/* 13 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Холбоос ба зураг"
        page="13"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Холбоос,
            <br />
            зам, зураг
          </>
        }
        lead="Вэбийг «вэб» болгодог зүйл бол холбоос. Дээр нь зураг нэмж хуудсаа амьд болгоё."
      />

      {/* 14 · ГОЛ ОЙЛГОЛТ: ХОЛБООС */}
      <KeyTerm
        label="Гол ойлголт: Холбоос"
        page="14"
        total={TOTAL}
        term="Холбоос · <a>"
        def={
          <>
            <b>Anchor таг</b> <span className="inline-code">&lt;a&gt;</span> нь нэг
            хуудаснаас нөгөө рүү шилжих холбоос үүсгэдэг. Хаашаа очихыг{" "}
            <span className="inline-code">href</span> атрибут заана.
          </>
        }
        note="href = hypertext reference"
      />

      {/* 15 · <a> КОД */}
      <Slide
        label="<a> код"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 холбоос", topic: "a · href" }}
      >
        <Frame>
          <Eyebrow className="anim">Холбоосын бүтэц</Eyebrow>
          <h2 className="slide-title anim anim-2">Холбоос хэрхэн бичих вэ?</h2>
          <CodeWindow
            numbered
            filename="links.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>a</T.tag> <T.attr>href</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;https://erxes.io&quot;</T.str>
              <T.punct>&gt;</T.punct>erxes сайт
              <T.punct>&lt;/</T.punct>
              <T.tag>a</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl">
              <T.punct>&lt;</T.punct>
              <T.tag>a</T.tag> <T.attr>href</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;about.html&quot;</T.str> <T.attr>target</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;_blank&quot;</T.str>
              <T.punct>&gt;</T.punct>Бидний тухай
              <T.punct>&lt;/</T.punct>
              <T.tag>a</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>href</b> хаашаа очихыг заана. <b>target=&quot;_blank&quot;</b> шинэ
            таб дээр нээнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ЗАМ — RELATIVE vs ABSOLUTE */}
      <Slide
        label="Зам · relative vs absolute"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 холбоос", topic: "зам (path)" }}
      >
        <Frame>
          <Eyebrow className="anim">Хоёр төрлийн зам</Eyebrow>
          <h2 className="slide-title anim anim-2">Relative ба absolute зам</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Төрөл", width: "22%" },
              { head: "Жишээ", width: "38%" },
              { head: "Тайлбар" },
            ]}
            rows={[
              [
                "Absolute",
                <code key="a">https://site.com/about.html</code>,
                "Бүтэн хаяг — өөр сайт руу заахад.",
              ],
              [
                "Relative",
                <code key="r">about.html</code>,
                "Одоогийн файлтай ижил хавтаснаас.",
              ],
              [
                "Дэд хавтас",
                <code key="s">pages/about.html</code>,
                "Доош нэг хавтас орох.",
              ],
              [
                "Дээш гарах",
                <code key="u">../index.html</code>,
                "../ нэг хавтас дээш гарна.",
              ],
              [
                "Үндэснээс",
                <code key="root">/images/logo.png</code>,
                "/ сайтын үндсээс эхэлнэ.",
              ],
            ]}
          />
        </Frame>
      </Slide>

      {/* 17 · ЗАМЫН ОЙЛГОЛТ — ДИАГРАМ */}
      <Slide
        label="Замын ойлголт"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 холбоос", topic: "хавтасны бүтэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Хавтас хооронд шилжих</Eyebrow>
          <h2 className="slide-title anim anim-2">Зам гэдэг нь чиглэл</h2>
          <Diagram className="anim anim-3" vert style={{ marginTop: 40 }}>
            <Node variant="accent" title="index.html" sub="одоо энд байна" />
            <Arrow label="about.html" down />
            <Node title="about.html" sub="ижил хавтаст хөрш" />
            <Arrow label="pages/contact.html" down />
            <Node title="pages/ → contact.html" sub="дэд хавтас руу" />
            <Arrow label="../home.html" down />
            <Node variant="amber" title="../ → дээш" sub="эцэг хавтас руу буцах" />
          </Diagram>
          <CodeCaption>
            <b>../</b> = «нэг шат дээш», хавтасны нэр + <b>/</b> = «дотогш».
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 18 · ГОЛ ОЙЛГОЛТ: ЗУРАГ */}
      <KeyTerm
        label="Гол ойлголт: Зураг"
        page="18"
        total={TOTAL}
        term="Зураг · <img>"
        def={
          <>
            <b>&lt;img&gt;</b> таг хуудсанд зураг оруулдаг. Энэ нь{" "}
            <i>хаах таггүй</i> (void) таг.{" "}
            <span className="inline-code">src</span> — зургийн зам,{" "}
            <span className="inline-code">alt</span> — зураг ачаалагдахгүй бол
            гарах орлох текст.
          </>
        }
        note="src ба alt — хоёулаа зайлшгүй"
      />

      {/* 19 · <img> КОД БА ҮР ДҮН */}
      <Slide
        label="<img> код"
        page="19"
        total={TOTAL}
        footer={{ tag: "§02 зураг", topic: "img · src · alt" }}
      >
        <Frame>
          <Eyebrow className="anim">Зураг оруулах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Зураг хэрхэн оруулах вэ?</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="gallery.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>img</T.tag>
              </Line>
              <Line indent={2}>
                <T.attr>src</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;images/cat.jpg&quot;</T.str>
              </Line>
              <Line state="hl" indent={2}>
                <T.attr>alt</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;Цонхон дээр сууж буй муур&quot;</T.str>
              </Line>
              <Line indent={2}>
                <T.attr>width</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;300&quot;</T.str> <T.punct>/&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <div
                style={{
                  width: 220,
                  height: 150,
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg,#bfe6c4,#7bc98a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1a3a22",
                  fontSize: 56,
                }}
              >
                🐱
              </div>
              <div style={{ marginTop: 12, color: "#666", fontSize: 18 }}>
                width=300 → 300px өргөн
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>alt</b> нь хараагүй хэрэглэгч ба зураг ачаалагдаагүй үед <b>заавал</b>{" "}
            хэрэгтэй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 20 · alt ЯАГААД ЧУХАЛ ВЭ */}
      <Slide
        label="alt-ын ач холбогдол"
        page="20"
        total={TOTAL}
        footer={{ tag: "§02 зураг", topic: "alt сайн дадал" }}
      >
        <Frame>
          <Eyebrow className="anim">Зургийн сайн дадал</Eyebrow>
          <h2 className="slide-title anim anim-2">alt-ыг зөв бичих нь</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "Зургийг товч, тодорхой үгээр дүрсэл.",
              "Зургийн утга/зорилгод тулгуурла.",
              "Чимэглэлийн зурагт хоосон alt=\"\" өг.",
            ]}
            donts={[
              "alt-ыг огт бичихгүй орхих.",
              "«зураг», «image» гэж бичих (илүүц).",
              "Файлын нэрийг (cat.jpg) шууд тавих.",
            ]}
          />
        </Frame>
      </Slide>

      {/* 21 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="21"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Аяллын блог хуудас"
        tasks={[
          <>
            <code>travel.html</code>-д гарчиг, танилцуулга <code>&lt;p&gt;</code>{" "}
            бич.
          </>,
          <>
            Очсон газруудаа <code>&lt;ul&gt;</code> жагсаалтаар харуул.
          </>,
          <>
            Газар бүрт <code>&lt;img&gt;</code> зураг нэм — <b>alt заавал</b>.
          </>,
          <>
            <code>&lt;a&gt;</code>-аар <code>about.html</code> руу{" "}
            <b>relative</b> холбоос үүсгэ.
          </>,
          <>
            Гадны сайт руу нэг <b>absolute</b> холбоос{" "}
            (<code>target=&quot;_blank&quot;</code>) нэм.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15-20 минут"
            files={[{ name: "travel.html", lang: "html", code: TRAVEL_HTML }]}
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
        eyebrow="Хичээл 03 · хураангуй"
        title="Хураангуй"
        footer={{ tag: "erxes · хичээл 03 дууслаа", topic: "текст · жагсаалт · холбоос · зураг" }}
        cards={[
          {
            num: "01",
            title: "Текст формат",
            desc: "strong, em, br, hr, span — текстээ утгатай хэлбэржүүлэх.",
          },
          {
            num: "02",
            title: "Жагсаалт",
            desc: "ul цэгэн, ol дугаартай, li мөр бүр; үүрлэж болно.",
          },
          {
            num: "03",
            title: "Холбоос ба зам",
            desc: "<a href> · relative vs absolute · ../ дээш, / үндэснээс.",
          },
          {
            num: "04",
            title: "Зураг",
            desc: "<img src alt> — alt заавал, зам зөв бичих нь чухал.",
          },
        ]}
      />

      {/* 23 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-03 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлээр хүснэгт ба формоор өгөгдөл харуулж, хэрэглэгчээс мэдээлэл цуглуулж сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 03 — текст, жагсаалт, холбоос, зураг</span>
          </>
        }
      />
    </Deck>
  );
}
