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
  title: "erxes · Хичээл 05 — Семантик HTML ба бүтэц",
};

/**
 * ХИЧЭЭЛ 05 — Семантик HTML ба баримтын бүтэц
 * 🎯 Утга бүхий, хүртээмжтэй тагаар хуудсаа бүтэцлэх.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Семантик тагууд ба бүтэц
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Хүртээмж (accessibility) ба SEO
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "21";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML) ===== */

const SEMANTIC_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Миний блог</title>
  </head>
  <body>
    <header>
      <h1>Миний блог</h1>
    </header>

    <nav>
      <a href="index.html">Нүүр</a>
      <a href="about.html">Миний тухай</a>
      <a href="contact.html">Холбоо барих</a>
    </nav>

    <main>
      <section>
        <h2>Сүүлийн нийтлэлүүд</h2>

        <article>
          <h3>HTML суралцаж эхэллээ</h3>
          <p>Энэ долоо хоногт HTML-ийн үндсэн тагуудтай танилцлаа.</p>
        </article>

        <article>
          <h3>Семантик таг гэж юу вэ</h3>
          <p>Семантик таг нь хуудсанд утга, бүтэц өгдөг.</p>
        </article>
      </section>
    </main>

    <footer>
      <p>© 2026 Миний блог</p>
    </footer>
  </body>
</html>
`;

const TRAVEL_A11Y_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Миний аяллын блог</title>
    <meta name="description" content="Монголын дуртай аялах газруудын тухай хувийн блог." />
  </head>
  <body>
    <header>
      <h1>Миний аяллын блог</h1>
    </header>

    <nav>
      <a href="index.html">Нүүр</a>
      <a href="about.html">Миний тухай</a>
    </nav>

    <main>
      <section>
        <h2>Очсон газрууд</h2>

        <article>
          <h3>Хөвсгөл нуур</h3>
          <p>Тунгалаг ус, эргэн тойрны нарс модтой үзэсгэлэнт газар.</p>
          <img src="images/khovsgol.jpg" alt="Хөвсгөл нуурын тунгалаг ус, эрэг дагуух нарс мод" />
        </article>

        <article>
          <h3>Говь</h3>
          <p>Элсэн манхан, нар жаргах гайхамшигтай төрх.</p>
          <img src="images/gobi.jpg" alt="Говийн элсэн манхан нар жаргах үед" />
        </article>
      </section>
    </main>

    <footer>
      <p>Холбоо барих: travel@example.com</p>
    </footer>
  </body>
</html>
`;

export default function Lesson05() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-05 · семантик html · хүртээмж · seo</>}
        title={
          <>
            Утга бүхий
            <br />
            бүтэц
            <Cursor />
          </>
        }
        subtitle="Зүгээр л div биш — header, nav, main, footer гэх мэт утга бүхий тагаар хуудсаа бүтэцлэж, хүртээмж ба SEO-гоо сайжруулна."
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
          <Eyebrow className="anim">Хичээл 04-өөс санах нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "Хүснэгт",
                desc: "table, tr, th, td — өгөгдлийг эмхтэй харуулах.",
              },
              {
                idx: "✓",
                title: "Форм",
                desc: "input, label, select — хэрэглэгчээс мэдээлэл авах.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Хуудсаа утга бүхий тагаар бүтэцлэх — хүн, машинд ойлгомжтой.",
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
                title: "Семантик гэж юу вэ",
                desc: "div soup vs утга бүхий тагууд.",
              },
              {
                idx: "02",
                title: "Хуудасны бүтэц",
                desc: "header, nav, main, section, article, aside, footer.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Хүртээмж (accessibility)",
                desc: "Дэлгэц уншигч, landmark, бүгдэд хүрэх вэб.",
              },
              {
                idx: "04",
                title: "SEO",
                desc: "Семантик бүтэц хайлтын системд хэрхэн нөлөөлдөг.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — СЕМАНТИК ТАГУУД БА БҮТЭЦ
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Семантик тагууд"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Семантик
            <br />
            тагууд
          </>
        }
        lead="Таг бүр өөрийн нэрээрээ юу болохоо хэлдэг — энэ нь хүн, хөтөч, хайлтын системд тус болно."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: СЕМАНТИК HTML */}
      <KeyTerm
        label="Гол ойлголт: Семантик HTML"
        page="05"
        total={TOTAL}
        term="Семантик HTML"
        def={
          <>
            <b>Семантик HTML</b> гэдэг нь хэсэг бүрийн <i>утгыг</i> илэрхийлдэг таг
            ашиглах явдал. <span className="inline-code">&lt;div&gt;</span> биш,{" "}
            <span className="inline-code">&lt;header&gt;</span>,{" "}
            <span className="inline-code">&lt;nav&gt;</span>,{" "}
            <span className="inline-code">&lt;main&gt;</span> — нэр нь л зориулалтаа
            хэлнэ.
          </>
        }
        note="харагдах байдал ижил — утга нь өөр"
      />

      {/* 06 · DIV SOUP vs СЕМАНТИК */}
      <Slide
        label="div soup vs семантик"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 семантик", topic: "өмнө / дараа" }}
      >
        <Frame>
          <Eyebrow className="anim">Ялгааг харьцуул</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Зөвхөн div vs семантик</h2>
          <div className="compare anim anim-3" style={{ marginTop: 28 }}>
            <div className="bad">
              <div className="col-head">
                <span className="badge" /> Зөвхөн div
              </div>
              <CodeWindow sm filename="page.html" lang="html">
                <Line state="del">
                  <T.punct>&lt;</T.punct>
                  <T.tag>div</T.tag> <T.attr>class</T.attr>
                  <T.punct>=</T.punct>
                  <T.str>&quot;header&quot;</T.str>
                  <T.punct>&gt;</T.punct>...
                  <T.punct>&lt;/</T.punct>
                  <T.tag>div</T.tag>
                  <T.punct>&gt;</T.punct>
                </Line>
                <Line state="del">
                  <T.punct>&lt;</T.punct>
                  <T.tag>div</T.tag> <T.attr>class</T.attr>
                  <T.punct>=</T.punct>
                  <T.str>&quot;nav&quot;</T.str>
                  <T.punct>&gt;</T.punct>...
                  <T.punct>&lt;/</T.punct>
                  <T.tag>div</T.tag>
                  <T.punct>&gt;</T.punct>
                </Line>
                <Line state="del">
                  <T.punct>&lt;</T.punct>
                  <T.tag>div</T.tag> <T.attr>class</T.attr>
                  <T.punct>=</T.punct>
                  <T.str>&quot;main&quot;</T.str>
                  <T.punct>&gt;</T.punct>...
                  <T.punct>&lt;/</T.punct>
                  <T.tag>div</T.tag>
                  <T.punct>&gt;</T.punct>
                </Line>
              </CodeWindow>
            </div>
            <div className="good">
              <div className="col-head">
                <span className="badge" /> Семантик
              </div>
              <CodeWindow sm filename="page.html" lang="html">
                <Line state="add">
                  <T.punct>&lt;</T.punct>
                  <T.tag>header</T.tag>
                  <T.punct>&gt;</T.punct>...
                  <T.punct>&lt;/</T.punct>
                  <T.tag>header</T.tag>
                  <T.punct>&gt;</T.punct>
                </Line>
                <Line state="add">
                  <T.punct>&lt;</T.punct>
                  <T.tag>nav</T.tag>
                  <T.punct>&gt;</T.punct>...
                  <T.punct>&lt;/</T.punct>
                  <T.tag>nav</T.tag>
                  <T.punct>&gt;</T.punct>
                </Line>
                <Line state="add">
                  <T.punct>&lt;</T.punct>
                  <T.tag>main</T.tag>
                  <T.punct>&gt;</T.punct>...
                  <T.punct>&lt;/</T.punct>
                  <T.tag>main</T.tag>
                  <T.punct>&gt;</T.punct>
                </Line>
              </CodeWindow>
            </div>
          </div>
          <CodeCaption>
            Хоёулаа адил харагдана — гэхдээ баруун талынх нь <b>юу болохоо</b> өөрөө
            хэлж байна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · СЕМАНТИК ТАГУУД */}
      <Slide
        label="Семантик тагууд"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 семантик", topic: "толь бичиг" }}
      >
        <Frame>
          <Eyebrow className="anim">Утга бүхий тагууд</Eyebrow>
          <h2 className="slide-title anim anim-2">Семантик тагууд</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Таг", width: "26%" },
              { head: "Утга", width: "24%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="t">&lt;header&gt;</code>, "Толгой", "Хуудас/хэсгийн дээд хэсэг — лого, гарчиг."],
              [<code key="t">&lt;nav&gt;</code>, "Цэс", "Шилжих холбоосуудын блок."],
              [<code key="t">&lt;main&gt;</code>, "Гол хэсэг", "Хуудасны үндсэн контент (нэг удаа)."],
              [<code key="t">&lt;section&gt;</code>, "Хэсэг", "Сэдвээр нь бүлэглэсэн хэсэг."],
              [<code key="t">&lt;article&gt;</code>, "Бие даасан", "Дангаараа утгатай контент (нийтлэл)."],
              [<code key="t">&lt;aside&gt;</code>, "Хажуу", "Нэмэлт мэдээлэл, хажуугийн блок."],
              [<code key="t">&lt;footer&gt;</code>, "Хөл", "Доод хэсэг — холбоо барих, эрх."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 08 · SECTION vs ARTICLE */}
      <Slide
        label="section vs article"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 семантик", topic: "section / article" }}
      >
        <Frame>
          <Eyebrow className="anim">Байнга андуурдаг хос</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>&lt;section&gt;</code> ба <code>&lt;article&gt;</code>
          </h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Шинж", width: "24%" },
              { head: "<section>", width: "38%" },
              { head: "<article>" },
            ]}
            rows={[
              ["Утга", "Сэдвээр бүлэглэсэн хэсэг", "Бие даасан, дангаар утгатай"],
              ["Жишээ", "«Үйлчилгээ» хэсэг", "Блог нийтлэл, мэдээ, сэтгэгдэл"],
              [
                "Сорил",
                "Гарчигтай боловч дангаараа утгагүй",
                "Тусдаа хуудсанд тавьж болох уу?",
              ],
            ]}
          />
          <CodeCaption>
            Сорил: <b>тусад нь авч болохуйц</b> бол <b>article</b>, эс бөгөөс{" "}
            <b>section</b>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ХУУДАСНЫ БҮТЭЦ ДИАГРАМ */}
      <Slide
        label="Хуудасны бүтэц"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 семантик", topic: "хуудасны бүтэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Зураглал</Eyebrow>
          <h2 className="slide-title anim anim-2">Семантик хуудасны бүтэц</h2>
          <div
            className="anim anim-3"
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 1100,
            }}
          >
            <SemBox tag="<header>" desc="лого · гарчиг" />
            <SemBox tag="<nav>" desc="цэс · холбоосууд" />
            <div style={{ display: "flex", gap: 12 }}>
              <SemBox tag="<main>" desc="гол контент · section / article" grow accent />
              <SemBox tag="<aside>" desc="хажуугийн блок" width={300} />
            </div>
            <SemBox tag="<footer>" desc="холбоо барих · эрх" />
          </div>
          <CodeCaption>
            Энэ бүтэц бараг бүх вэб хуудсанд давтагддаг — таг бүр өөрийн байрандаа.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="10"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="div-ийг семантик болгох"
        tasks={[
          <>
            Багшаас өгсөн <code>div soup</code> хуудсыг ав.
          </>,
          <>
            <code>div class=&quot;header&quot;</code>-ийг{" "}
            <code>&lt;header&gt;</code>-ээр сольё.
          </>,
          <>
            Цэс, гол контент, хөлийг <code>nav</code> / <code>main</code> /{" "}
            <code>footer</code> болго.
          </>,
          <>
            Гол контентыг <code>&lt;section&gt;</code>-уудад хувааж, нийтлэлийг{" "}
            <code>&lt;article&gt;</code>-аар ороо.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут"
            files={[{ name: "index.html", lang: "html", code: SEMANTIC_HTML }]}
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
        resumeTopic="Хүртээмж (accessibility) ба SEO"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — ХҮРТЭЭМЖ БА SEO
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Хүртээмж ба SEO"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Хүртээмж
            <br />
            ба SEO
          </>
        }
        lead="Семантик бүтэц яагаад чухал вэ? — бүх хэрэглэгч, бүх хайлтын систем хуудсыг зөв ойлгохын тулд."
      />

      {/* 13 · ГОЛ ОЙЛГОЛТ: ХҮРТЭЭМЖ */}
      <KeyTerm
        label="Гол ойлголт: Хүртээмж"
        page="13"
        total={TOTAL}
        term="Хүртээмж · Accessibility (a11y)"
        def={
          <>
            <b>Хүртээмж</b> гэдэг нь хараагүй, сонсголгүй, эсвэл хулгана хэрэглэж
            чадахгүй хүн ч хуудсыг ашиглаж чадахыг хэлнэ. Семантик таг нь{" "}
            <span className="inline-code">дэлгэц уншигч</span> программд хуудсыг
            зөв «уншиж» өгөхөд тусална.
          </>
        }
        note="вэб бүгдэд зориулагдсан"
      />

      {/* 14 · СЕМАНТИК ХЭРХЭН ТУС БОЛДОГ ВЭ */}
      <Slide
        label="Хүртээмжид тус болох нь"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 хүртээмж", topic: "landmark · уншигч" }}
      >
        <Frame>
          <Eyebrow className="anim">Дэлгэц уншигчийн нүдээр</Eyebrow>
          <h2 className="slide-title anim anim-2">Семантик яаж тус болдог вэ?</h2>
          <ConceptList
            num
            compact
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Landmark — чиглүүлэгч цэгүүд",
                desc: "header, nav, main, footer нь уншигчид «энэ хэсэг рүү шууд оч» гэх боломж өгнө.",
              },
              {
                idx: "02",
                title: "Гарчгийн шатлал",
                desc: "h1 → h2 → h3 дараалал нь хуудсыг агуулгын жагсаалт мэт уншуулна.",
              },
              {
                idx: "03",
                title: "alt ба label",
                desc: "Зураг, талбар бүр үгээр тайлбарлагдсан байх ёстой.",
              },
              {
                idx: "04",
                title: "Гарын товчоор зорчих",
                desc: "Tab товчоор холбоос, талбар хооронд логик дарааллаар шилжинэ.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 15 · ГОЛ ОЙЛГОЛТ: SEO */}
      <KeyTerm
        label="Гол ойлголт: SEO"
        page="15"
        total={TOTAL}
        term="SEO · хайлтын оновчлол"
        def={
          <>
            <b>SEO (Search Engine Optimization)</b> нь хуудсыг Google зэрэг
            хайлтын системд илүү сайн харагдуулах ажил. Семантик бүтэц нь хайлтын
            робот хуудасны <i>аль хэсэг нь чухал вэ</i> гэдгийг ойлгоход тусална.
          </>
        }
        note="зөв бүтэц = илүү дээш эрэмбэ"
      />

      {/* 16 · SEO-Д ҮЗҮҮЛЭХ НӨЛӨӨ */}
      <Slide
        label="SEO нөлөө"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 SEO", topic: "хайлтын систем" }}
      >
        <Frame>
          <Eyebrow className="anim">Хайлтын систем юу хардаг вэ</Eyebrow>
          <h2 className="slide-title anim anim-2">SEO-д нөлөөлөх хүчин зүйл</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Элемент", width: "30%" },
              { head: "SEO-д үзүүлэх нөлөө" },
            ]}
            rows={[
              [<code key="t">&lt;title&gt;</code>, "Хайлтын үр дүнгийн гол гарчиг — хамгийн чухал."],
              [<code key="t">&lt;h1&gt;</code>, "Хуудасны үндсэн сэдвийг роботод хэлнэ."],
              [<code key="t">meta description</code>, "Үр дүнгийн доорх тайлбар текст."],
              [<code key="t">alt текст</code>, "Зургийг хайлтад индексжүүлэхэд тус болно."],
              [<code key="t">Семантик бүтэц</code>, "Контентын ач холбогдол, шатлалыг тодорхой болгоно."],
              [<code key="t">Утга бүхий холбоос</code>, "«энд дар» биш — тодорхой текст."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 17 · META ТАГ КОД */}
      <Slide
        label="meta таг"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 SEO", topic: "head доторх мета" }}
      >
        <Frame>
          <Eyebrow className="anim">head доторх SEO</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Гол meta тагууд</h2>
          <CodeWindow
            numbered
            filename="index.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>Гэрийн хоолны жор — Амттан
              <T.punct>&lt;/</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl">
              <T.punct>&lt;</T.punct>
              <T.tag>meta</T.tag> <T.attr>name</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;description&quot;</T.str>
            </Line>
            <Line state="hl" indent={6}>
              <T.attr>content</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;Энгийн гэрийн хоолны жорууд&quot;</T.str>{" "}
              <T.punct>/&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>title</b> ба <b>meta description</b> нь хайлтын үр дүнд шууд
            харагддаг — тодорхой, сэдэлтэй бичээрэй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 18 · ЁСТОЙ / ЁСГҮЙ */}
      <Slide
        label="Сайн дадал"
        page="18"
        total={TOTAL}
        footer={{ tag: "§02 SEO", topic: "сайн дадал" }}
      >
        <Frame>
          <Eyebrow className="anim">Дүгнэж хэлбэл</Eyebrow>
          <h2 className="slide-title anim anim-2">Хүртээмж ба SEO-н сайн дадал</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "Хуудас бүрт ганц утга бүхий h1 тавих.",
              "Зураг бүрт тодорхой alt бичих.",
              "Семантик landmark (header/main/footer) ашиглах.",
              "title ба meta description-ийг утгатай бичих.",
            ]}
            donts={[
              "Бүх зүйлийг div-ээр хийх.",
              "Гарчгийг зөвхөн томруулсан текстээр дуурайх.",
              "h1-ийг хуудсанд олон удаа давтах.",
              "«энд дар» гэсэн утгагүй холбоос бичих.",
            ]}
          />
        </Frame>
      </Slide>

      {/* 19 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="19"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Хуудсаа хүртээмжтэй болгох"
        tasks={[
          <>
            Хичээл 03-ын <b>аяллын блог</b> хуудсаа нээ.
          </>,
          <>
            Семантик landmark (<code>header</code>, <code>nav</code>,{" "}
            <code>main</code>, <code>footer</code>)-аар бүтэцлэ.
          </>,
          <>
            <code>&lt;title&gt;</code> ба <code>meta description</code> нэм.
          </>,
          <>
            Зураг бүрийн <code>alt</code>, холбоос бүрийн текстийг шалгаж засварла.
          </>,
          <>
            Гарчгийн шатлал (<code>h1 → h2 → h3</code>) логик эсэхийг шалга.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[{ name: "travel.html", lang: "html", code: TRAVEL_A11Y_HTML }]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 20 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="20"
        total={TOTAL}
        eyebrow="Хичээл 05 · хураангуй"
        title="Хураангуй"
        footer={{ tag: "erxes · хичээл 05 дууслаа", topic: "семантик · хүртээмж · seo" }}
        cards={[
          {
            num: "01",
            title: "Семантик HTML",
            desc: "div биш — утга бүхий тагаар хуудсаа бүтэцлэх.",
          },
          {
            num: "02",
            title: "Хуудасны бүтэц",
            desc: "header, nav, main, section, article, aside, footer.",
          },
          {
            num: "03",
            title: "Хүртээмж",
            desc: "Landmark, гарчгийн шатлал, alt/label — бүгдэд хүрэх вэб.",
          },
          {
            num: "04",
            title: "SEO",
            desc: "title, meta, семантик бүтэц — хайлтын системд илүү ойлгомжтой.",
          },
        ]}
      />

      {/* 21 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-05 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="HTML-ийн аяллаа дуусгалаа! Дараагийн хичээлээс CSS-ээр энэ бүтцээ амьд, өнгөлөг болгож эхэлнэ. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 05 — семантик html ба бүтэц</span>
          </>
        }
      />
    </Deck>
  );
}

/* Жижиг туслах — семантик хуудасны бүтцийн хайрцаг. */
function SemBox({
  tag,
  desc,
  grow = false,
  accent = false,
  width,
}: {
  tag: string;
  desc: string;
  grow?: boolean;
  accent?: boolean;
  width?: number;
}) {
  return (
    <div
      style={{
        flex: grow ? 1 : undefined,
        width,
        minHeight: accent ? 150 : 84,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        padding: "14px 20px",
        borderRadius: 12,
        border: `1px solid ${accent ? "var(--accent)" : "var(--border)"}`,
        background: accent ? "rgba(57,211,83,0.08)" : "rgba(255,255,255,0.02)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 28,
          fontWeight: 700,
          color: "var(--s-tag)",
        }}
      >
        {tag}
      </span>
      <span style={{ fontSize: 20, color: "var(--muted)" }}>{desc}</span>
    </div>
  );
}
