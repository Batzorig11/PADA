import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  Diagram,
  Node,
  Arrow,
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
  title: "erxes · Хичээл 15 — Төсөл: Landing page",
};

/**
 * ХИЧЭЭЛ 15 — Төсөл: Landing page
 * 🎯 Сар 1-д сурсан HTML+CSS-ээ нэгтгэж бүтэн responsive landing page бүтээх.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Бүтэц төлөвлөх, header + hero угсрах
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Features, footer, responsive ба polish
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "18";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн Сар 1-д үзсэн HTML/CSS) ===== */

const TOP_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>erxes — Landing</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="nav">
      <div class="logo">erxes</div>
      <nav class="links">
        <a href="#features">Боломжууд</a>
        <a href="#cta">Үнэ</a>
      </nav>
      <a class="btn" href="#cta">Эхлэх</a>
    </header>

    <section class="hero">
      <h1>Бизнесээ нэг дороос удирд</h1>
      <p>Борлуулалт, харилцагч, маркетингаа нэг платформоос.</p>
      <a class="btn btn-lg" href="#cta">Үнэгүй эхлэх</a>
    </section>
  </body>
</html>
`;

const TOP_CSS = `* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #f8fafc;
  background: #0d1117;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 40px;
  background: #161b22;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: #39d353;
}

.links {
  display: flex;
  gap: 24px;
  /* логог зүүн, btn-ийг баруунд түлхэнэ */
  margin-right: auto;
  margin-left: 24px;
}

.links a {
  color: #9aa4b2;
  text-decoration: none;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #39d353;
  color: #0d1117;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s, background 0.2s;
}

.btn:hover {
  background: #2bb344;
  transform: translateY(-2px);
}

.hero {
  text-align: center;
  padding: 80px 24px;
  max-width: 760px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.75rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1.25rem;
  color: #9aa4b2;
  margin-bottom: 32px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.1rem;
}

@media (max-width: 600px) {
  .nav { flex-wrap: wrap; }
  .hero h1 { font-size: 2rem; }
}
`;

const FULL_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>erxes — Landing</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="nav">
      <div class="logo">erxes</div>
      <nav class="links">
        <a href="#features">Боломжууд</a>
        <a href="#cta">Үнэ</a>
      </nav>
      <a class="btn" href="#cta">Эхлэх</a>
    </header>

    <section class="hero">
      <h1>Бизнесээ нэг дороос удирд</h1>
      <p>Борлуулалт, харилцагч, маркетингаа нэг платформоос.</p>
      <a class="btn btn-lg" href="#cta">Үнэгүй эхлэх</a>
    </section>

    <section class="features" id="features">
      <h2>Гол боломжууд</h2>
      <div class="grid">
        <article class="card">
          <h3>CRM</h3>
          <p>Харилцагчдаа нэг дороос удирд.</p>
        </article>
        <article class="card">
          <h3>Маркетинг</h3>
          <p>Имэйл, кампанит ажил автоматжуул.</p>
        </article>
        <article class="card">
          <h3>Дэмжлэг</h3>
          <p>Хэрэглэгчийн асуултад хурдан хариул.</p>
        </article>
      </div>
    </section>

    <section class="cta" id="cta">
      <h2>Өнөөдөр эхэлцгээе</h2>
      <a class="btn btn-lg" href="#">Бүртгүүлэх</a>
    </section>

    <footer class="foot">
      <p>© 2026 erxes. Бүх эрх хуулиар хамгаалагдсан.</p>
    </footer>
  </body>
</html>
`;

const FULL_CSS = `* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #f8fafc;
  background: #0d1117;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 40px;
  background: #161b22;
}

.logo { font-size: 24px; font-weight: 700; color: #39d353; }

.links { display: flex; gap: 24px; margin-right: auto; margin-left: 24px; }
.links a { color: #9aa4b2; text-decoration: none; }

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #39d353;
  color: #0d1117;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s, background 0.2s;
}
.btn:hover { background: #2bb344; transform: translateY(-2px); }
.btn-lg { padding: 16px 32px; font-size: 1.1rem; }

.hero { text-align: center; padding: 80px 24px; max-width: 760px; margin: 0 auto; }
.hero h1 { font-size: 2.75rem; line-height: 1.2; }
.hero p { font-size: 1.25rem; color: #9aa4b2; margin-bottom: 32px; }

.features { max-width: 1000px; margin: 0 auto; padding: 60px 24px; }
.features h2 { text-align: center; font-size: 2rem; margin-bottom: 32px; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.card {
  padding: 28px;
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-6px); }
.card h3 { margin-top: 0; color: #39d353; }
.card p { color: #9aa4b2; }

.cta { text-align: center; padding: 60px 24px; background: #161b22; }
.cta h2 { font-size: 1.75rem; margin-bottom: 24px; }

.foot { text-align: center; padding: 32px; color: #9aa4b2; }

@media (max-width: 600px) {
  .nav { flex-wrap: wrap; }
  .hero h1 { font-size: 2rem; }
}
`;

export default function Lesson15() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-15 · төсөл · landing page</>}
        title={
          <>
            Төсөл:
            <br />
            Landing page
            <Cursor />
          </>
        }
        subtitle="Сар 1-д сурсан бүхнээ нэг газар нэгтгэе. HTML бүтэц, CSS загвар, layout, responsive, анимаци — бүгдийг ашиглан бодит landing page бүтээнэ."
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
          <Eyebrow className="anim">Сар 1-ийн ур чадвар</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид юу мэддэг болсон бэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "HTML бүтэц",
                desc: "Семантик таг, форм, зураг, холбоос.",
              },
              {
                idx: "✓",
                title: "CSS загвар",
                desc: "Selector, өнгө, box model, typography.",
              },
              {
                idx: "✓",
                title: "Layout ба хөдөлгөөн",
                desc: "Flexbox, Grid, responsive, transition.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Бүгдийг нэгтгэж бодит хуудас бүтээх.",
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
                title: "Бүтэц төлөвлөх",
                desc: "Section-уудаа цаасан дээр зурах.",
              },
              {
                idx: "02",
                title: "Header + Hero",
                desc: "Дээд цэс ба гол хэсгийг угсрах.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Features + Footer",
                desc: "Боломжуудын grid ба хөл.",
              },
              {
                idx: "04",
                title: "Responsive + polish",
                desc: "Дэлгэцэд тааруулж, өнгөлгөө.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — PLAN + HEADER/HERO
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Бүтэц"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Төлөвлөж
            <br />
            эхлэх
          </>
        }
        lead="Кодоо бичихээсээ өмнө хуудсаа section болгон хувааж төлөвлөнө. Дараа нь header ба hero хэсгийг угсарна."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: LANDING PAGE */}
      <KeyTerm
        label="Гол ойлголт: landing page"
        page="05"
        total={TOTAL}
        term="Landing page"
        def={
          <>
            <b>Landing page</b> бол зочин хамгийн түрүүнд хардаг, нэг
            тодорхой <i>зорилготой</i> (бүртгүүлэх, худалдан авах) хуудас.
            Ихэвчлэн <b>hero → боломжууд → CTA → footer</b> гэсэн дараалалтай.
          </>
        }
        note="hero · features · CTA · footer"
      />

      {/* 06 · БҮТЭЦ ДИАГРАМ */}
      <Slide
        label="бүтэц"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 бүтэц", topic: "section-ууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Дээрээс доош</Eyebrow>
          <h2 className="slide-title anim anim-2">Хуудасны бүтэц</h2>
          <Diagram vert className="anim anim-3">
            <Node variant="accent" title="header" sub="лого + цэс + товч" />
            <Arrow down />
            <Node title="hero" sub="том гарчиг + CTA" />
            <Arrow down />
            <Node title="features" sub="боломжуудын grid" />
            <Arrow down />
            <Node title="footer" sub="хаяг + эрх" />
          </Diagram>
          <CodeCaption>
            Эхлээд бүтцээ тодорхойлбол код бичихэд хялбар — section бүрийг тус
            тусад нь угсарна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · СЕМАНТИК ХҮРЭЭ */}
      <Slide
        label="семантик хүрээ"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 бүтэц", topic: "семантик скелет" }}
      >
        <Frame>
          <Eyebrow className="anim">Утга бүхий таг</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Семантик скелет</h2>
          <CodeWindow
            numbered
            filename="index.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 32 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>header</T.tag>
              <T.punct>&gt;</T.punct> ... <T.punct>&lt;/</T.punct>
              <T.tag>header</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>section</T.tag> <T.attr>class</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;hero&quot;</T.str>
              <T.punct>&gt;</T.punct> ... <T.punct>&lt;/</T.punct>
              <T.tag>section</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>section</T.tag> <T.attr>class</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;features&quot;</T.str>
              <T.punct>&gt;</T.punct> ... <T.punct>&lt;/</T.punct>
              <T.tag>section</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>footer</T.tag>
              <T.punct>&gt;</T.punct> ... <T.punct>&lt;/</T.punct>
              <T.tag>footer</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>header</code>, <code>section</code>, <code>footer</code> зэрэг
            семантик таг (Хичээл 05) нь бүтцийг уншихад ойлгомжтой болгоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · HERO ХЭСЭГ */}
      <Slide
        label="hero"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 бүтэц", topic: "hero хэсэг" }}
      >
        <Frame>
          <Eyebrow className="anim">Гол анхаарал татах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Hero хэсэг</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 24 }}>
            <CodeWindow sm filename="style.css" lang="css">
              <Line>
                <T.sel>.hero</T.sel> <T.punct>{"{"}</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>text-align</T.prop>
                <T.punct>:</T.punct> <T.num>center</T.num>
                <T.punct>;</T.punct>
              </Line>
              <Line indent={2}>
                <T.prop>max-width</T.prop>
                <T.punct>:</T.punct> <T.num>760px</T.num>
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
            <ResultPane>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
                  Бизнесээ нэг дороос удирд
                </div>
                <div style={{ color: "#9aa4b2", marginBottom: 16, fontSize: 14 }}>
                  Нэг платформоос бүгдийг.
                </div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    background: "#39d353",
                    color: "#0d1117",
                    borderRadius: 8,
                    fontWeight: 700,
                  }}
                >
                  Үнэгүй эхлэх
                </span>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            Hero нь <b>max-width + margin: 0 auto</b>-аар голлоно, төв байрлалд
            гарчиг ба CTA товч тавина.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Header ба Hero угсрах"
        tasks={[
          <>
            <code>&lt;header class=&quot;nav&quot;&gt;</code> дотор лого, цэс
            (<code>.links</code>), «Эхлэх» товч бич.
          </>,
          <>
            <code>.nav</code>-ийг <code>display: flex</code>,{" "}
            <code>align-items: center</code> болго; логог зүүн, товчийг баруунд
            түлх.
          </>,
          <>
            <code>&lt;section class=&quot;hero&quot;&gt;</code> дотор том гарчиг,
            тайлбар, CTA товч бич.
          </>,
          <>
            <code>.btn</code>-д <code>transition</code> ба{" "}
            <code>:hover</code> өгч амьд болго.
          </>,
          <>
            <code>* {"{ box-sizing: border-box; }"}</code> тавьж,{" "}
            <code>viewport</code> meta мартуузай.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 25 минут"
            files={[
              { name: "index.html", lang: "html", code: TOP_HTML },
              { name: "style.css", lang: "css", code: TOP_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="10"
        total={TOTAL}
        mins={20}
        resumeTopic="Features, footer, responsive ба polish"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — SECTIONS + RESPONSIVE
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Section-ууд"
        page="11"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Дуусгаж
            <br />
            өнгөлөх
          </>
        }
        lead="Боломжуудын grid, CTA ба footer-ийг нэмж, бүхэл хуудсыг responsive болгож өнгөлнө."
      />

      {/* 12 · FEATURES GRID */}
      <Slide
        label="features grid"
        page="12"
        total={TOTAL}
        footer={{ tag: "§02 section", topic: "боломжуудын grid" }}
      >
        <Frame>
          <Eyebrow className="anim">Боломжууд</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Features — responsive grid</h2>
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
                <T.punct>:</T.punct>
              </Line>
              <Line indent={4}>
                <T.fn>repeat</T.fn>
                <T.punct>(</T.punct>
                <T.num>auto-fit, minmax(220px, 1fr)</T.num>
                <T.punct>)</T.punct>
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                  gap: 10,
                }}
              >
                {["CRM", "Маркетинг", "Дэмжлэг"].map((t) => (
                  <div
                    key={t}
                    style={{
                      padding: 16,
                      background: "#161b22",
                      border: "1px solid #21262d",
                      borderRadius: 10,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>auto-fit + minmax</b> нь media query-гүйгээр өөрөө responsive
            болдог — багана зайнд тааруулж өөрчлөгдөнө.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 13 · CTA + FOOTER */}
      <Slide
        label="cta + footer"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 section", topic: "CTA ба footer" }}
      >
        <Frame>
          <Eyebrow className="anim">Үйлдэлд уриалах</Eyebrow>
          <h2 className="slide-title sm anim anim-2">CTA ба Footer</h2>
          <CodeWindow
            numbered
            filename="index.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 28 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>section</T.tag> <T.attr>class</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;cta&quot;</T.str>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>h2</T.tag>
              <T.punct>&gt;</T.punct>Өнөөдөр эхэлцгээе
              <T.punct>&lt;/</T.punct>
              <T.tag>h2</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>a</T.tag> <T.attr>class</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;btn btn-lg&quot;</T.str>
              <T.punct>&gt;</T.punct>Бүртгүүлэх
              <T.punct>&lt;/</T.punct>
              <T.tag>a</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>section</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>CTA</b> (call-to-action) нь зочинг дараагийн алхам руу уриална.
            Footer-т эрх, холбоо барих мэдээллээ тавина.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · RESPONSIVE PASS */}
      <Slide
        label="responsive"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 polish", topic: "responsive" }}
      >
        <Frame>
          <Eyebrow className="anim">Жижиг дэлгэцэд</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Responsive болгох</h2>
          <CodeWindow
            numbered
            filename="style.css"
            lang="css"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line state="hl">
              <T.kw>@media</T.kw> <T.punct>(</T.punct>
              <T.prop>max-width</T.prop>
              <T.punct>:</T.punct> <T.num>600px</T.num>
              <T.punct>)</T.punct> <T.punct>{"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.sel>.nav</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>flex-wrap</T.prop>
              <T.punct>:</T.punct> <T.num>wrap</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.sel>.hero h1</T.sel> <T.punct>{"{"}</T.punct>{" "}
              <T.prop>font-size</T.prop>
              <T.punct>:</T.punct> <T.num>2rem</T.num>
              <T.punct>;</T.punct> <T.punct>{"}"}</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Утсан дээр гарчгийг жижигрүүлж, цэсийг боож, grid нь auto-fit-ээр
            өөрөө багана буулгана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · POLISH ЁСТОЙ/ЁСГҮЙ */}
      <Slide
        label="polish"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 polish", topic: "өнгөлгөө" }}
      >
        <Frame>
          <Eyebrow className="anim">Сүүлийн өнгөлгөө</Eyebrow>
          <h2 className="slide-title anim anim-2">Polish — ёстой ба ёсгүй</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "Зай (padding) тогтвортой байлгах.",
              "Товч/картад hover нэмэх.",
              "Өнгийг цөөн, тогтвортой барих.",
              "Олон дэлгэцэд шалгах.",
            ]}
            donts={[
              "Хэт олон өнгө, фонт хольох.",
              "Текстийг ирмэгт нааж тавих.",
              "viewport meta-г мартах.",
              "Зөвхөн нэг хэмжээнд шалгах.",
            ]}
          />
        </Frame>
      </Slide>

      {/* 16 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="16"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Landing page-ээ дуусгах"
        tasks={[
          <>
            <code>&lt;section class=&quot;features&quot;&gt;</code> дотор 3
            боломжийн карт <code>.grid</code>-д байрлуул.
          </>,
          <>
            <code>.grid</code>-д <code>auto-fit + minmax</code> ашиглаж
            responsive болго.
          </>,
          <>
            <code>.cta</code> хэсэг ба <code>&lt;footer&gt;</code> нэм.
          </>,
          <>
            <code>@media (max-width: 600px)</code>-аар утсан дээрх харагдацыг
            засварла.
          </>,
          <>
            Картад <code>:hover</code> + <code>transform</code> нэмж өнгөлгөө
            хий.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 30 минут"
            files={[
              { name: "index.html", lang: "html", code: FULL_HTML },
              { name: "style.css", lang: "css", code: FULL_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 17 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="17"
        total={TOTAL}
        eyebrow="Хичээл 15 · хураангуй"
        title="Хураангуй"
        footer={{
          tag: "erxes · хичээл 15 дууслаа",
          topic: "landing page төсөл",
        }}
        cards={[
          {
            num: "01",
            title: "Төлөвлөлт",
            desc: "Хуудсаа section болгон хувааж эхэлнэ.",
          },
          {
            num: "02",
            title: "Section угсрах",
            desc: "header, hero, features, CTA, footer.",
          },
          {
            num: "03",
            title: "Responsive",
            desc: "auto-fit ба media query-ээр дэлгэцэд тааруулна.",
          },
          {
            num: "04",
            title: "Polish",
            desc: "hover, transition, тогтвортой зай, өнгө.",
          },
        ]}
      />

      {/* 18 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-15 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Та анхны бүтэн хуудсаа угслаа! Дараагийн хичээлээр төслөө дуусгаж, алдаа засаж, Сар 1-ийн бүх ойлголтоо сэргээж бэхжүүлнэ. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 15 — төсөл: landing page</span>
          </>
        }
      />
    </Deck>
  );
}
