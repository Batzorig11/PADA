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
  Callout,
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
  title: "erxes · Хичээл 16 — Төсөл дуусгах + Сар 1 сэргээх",
};

/**
 * ХИЧЭЭЛ 16 — Төсөл дуусгах + Сар 1 сэргээх
 * 🎯 Алдаа засаж, кодоо өнгөлж, Сар 1 (HTML & CSS)-ийн бүх ойлголтоо бэхжүүлэх.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Polish, debugging, code review
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Сар 1 сэргээх, quiz, эцсийн дадлага
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "18";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн Сар 1-д үзсэн HTML/CSS) ===== */

const FIXED_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <!-- ЗАСВАР: viewport meta нэмсэн -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Засварласан карт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <h2>Гарчиг</h2>
      <p>Энэ карт одоо зөв харагдана.</p>
      <!-- ЗАСВАР: a-д text-decoration авна, inline-block болгоно -->
      <a class="btn" href="#">Дэлгэрэнгүй</a>
    </div>
  </body>
</html>
`;

const FIXED_CSS = `/* ЗАСВАР: box-sizing нэмснээр width + padding хэтрэхгүй */
* { box-sizing: border-box; }

body {
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.card {
  width: 320px;
  padding: 24px;
  margin: 40px auto;
  background: #161b22;
  border-radius: 12px;
}

.btn {
  /* ЗАСВАР: inline элемент padding бүрэн авахаар inline-block */
  display: inline-block;
  padding: 10px 18px;
  margin-top: 12px;
  background: #39d353;
  color: #0d1117;
  border-radius: 8px;
  /* ЗАСВАР: доогуур зураасыг авсан */
  text-decoration: none;
  font-weight: 700;
}
`;

const TESTI_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Сэтгэгдлүүд</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="testi">
      <h2>Хэрэглэгчдийн сэтгэгдэл</h2>
      <div class="grid">
        <article class="quote">
          <p>"Маш хэрэгтэй платформ болсон."</p>
          <p class="who">— Болд, захирал</p>
        </article>
        <article class="quote">
          <p>"Багийн ажил хялбар болсон."</p>
          <p class="who">— Сараа, менежер</p>
        </article>
        <article class="quote">
          <p>"Хэрэглэхэд маш амар."</p>
          <p class="who">— Тэмүүлэн, дизайнер</p>
        </article>
      </div>
    </section>
  </body>
</html>
`;

const TESTI_CSS = `* { box-sizing: border-box; }

body {
  margin: 0;
  background: #0d1117;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.testi {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 24px;
}

.testi h2 {
  text-align: center;
  margin-bottom: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.quote {
  padding: 28px;
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  transition: transform 0.2s;
}

.quote:hover {
  transform: translateY(-6px);
}

.who {
  color: #39d353;
  font-weight: 700;
  margin-bottom: 0;
}
`;

export default function Lesson16() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-16 · төсөл дуусгах · сэргээх</>}
        title={
          <>
            Дуусгаж,
            <br />
            сэргээх
            <Cursor />
          </>
        }
        subtitle="Сар 1-ийн төгсгөл. Төслөө өнгөлж, нийтлэг алдаануудыг засаж, HTML & CSS-ийн бүх ойлголтоо нэг дор сэргээж бэхжүүлнэ."
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
                title: "Landing page",
                desc: "Бүтэн хуудас угссан.",
              },
              {
                idx: "✓",
                title: "Бүх Сар 1 ур чадвар",
                desc: "HTML, CSS, layout, responsive, анимаци.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Өнгөлж, алдаа засаж, сэргээх.",
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
                title: "Debugging",
                desc: "DevTools-оор алдаа олох, засах.",
              },
              {
                idx: "02",
                title: "Code review",
                desc: "Цэвэр кодын зарчмууд.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Сар 1 сэргээх",
                desc: "Бүх ойлголтын зураглал + quiz.",
              },
              {
                idx: "04",
                title: "Эцсийн дадлага",
                desc: "Шинэ section угсрах.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — POLISH & DEBUGGING
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Debugging"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Алдаа засаж
            <br />
            өнгөлөх
          </>
        }
        lead="Код ажиллахгүй байх нь хэвийн. Алдааг хэрхэн системтэйгээр олж засах, цэвэр код бичихийг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: DEVTOOLS */}
      <KeyTerm
        label="Гол ойлголт: DevTools"
        page="05"
        total={TOTAL}
        term="Browser DevTools"
        def={
          <>
            <b>DevTools</b> (F12) нь браузерт суусан хөгжүүлэгчийн багаж.{" "}
            <i>Inspect</i> хийж аль элемент ямар CSS авч байгааг харах, утгыг
            шууд өөрчилж туршихад ашиглана — debugging-ийн гол зэвсэг.
          </>
        }
        note="F12 · Inspect element"
      />

      {/* 06 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 debug", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Олонтаа тааралддаг</Eyebrow>
          <h2 className="slide-title anim anim-2">Нийтлэг CSS алдаанууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Шинж тэмдэг", width: "42%" },
              { head: "Шалтгаан / засвар" },
            ]}
            rows={[
              ["Элемент хайрцгаас хальж байна", "box-sizing: border-box тавь."],
              ["padding нөлөөлөхгүй (a, span)", "inline-block эсвэл block болго."],
              ["Зураг хүрээнээс гарч байна", "img { max-width: 100%; }."],
              ["Утсан дээр жижгэрэхгүй", "viewport meta таг алга."],
              ["Гэнэтийн дээд зай", "margin collapse-ийг сана."],
            ]}
          />
          <CodeCaption>
            Эдгээр 5 алдаа нь шинэхэн хөгжүүлэгчдийн 90%-ийн асуудлыг хамардаг —
            эхэлж эдгээрийг шалга.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · DEBUG АЛХАМ */}
      <Slide
        label="debug алхам"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 debug", topic: "системтэй арга" }}
      >
        <Frame>
          <Eyebrow className="anim">Системтэй арга</Eyebrow>
          <h2 className="slide-title anim anim-2">Алдаа олох 4 алхам</h2>
          <ConceptList
            num
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Inspect хий",
                desc: "Асуудалтай элементийг сонгож, ямар CSS авч байгааг хар.",
              },
              {
                idx: "02",
                title: "Тусгаарла",
                desc: "Аль дүрэм нөлөөлж байгааг нэг нэгээр унтрааж шалга.",
              },
              {
                idx: "03",
                title: "Хязгаарлаж ав",
                desc: "Асуудал HTML дотор уу, CSS дотор уу — нарийсга.",
              },
              {
                idx: "04",
                title: "Зас, дахин шалга",
                desc: "Нэг өөрчлөлт хийгээд үр дүнг шууд хар.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 08 · ЦЭВЭР КОД ЁСТОЙ/ЁСГҮЙ */}
      <Slide
        label="цэвэр код"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 review", topic: "цэвэр код" }}
      >
        <Frame>
          <Eyebrow className="anim">Code review</Eyebrow>
          <h2 className="slide-title anim anim-2">Цэвэр код — ёстой ба ёсгүй</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "Утга бүхий class нэр (.card, .nav).",
              "Семантик таг ашиглах.",
              "Тогтвортой догол мөр (2 зай).",
              "Давтсан CSS-ийг нэгтгэх.",
            ]}
            donts={[
              "Утгагүй нэр (.div1, .red2).",
              "Бүх юмыг div болгох.",
              "Inline style-аар дүүргэх.",
              "Ашиглаагүй код үлдээх.",
            ]}
          />
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Эвдэрсэн хуудсыг засах"
        tasks={[
          <>
            Өгөгдсөн картын <code>width + padding</code> хэтэрч байна —{" "}
            <code>box-sizing: border-box</code> нэмж зас.
          </>,
          <>
            <code>.btn</code> (<code>a</code> элемент)-ийн{" "}
            <code>padding</code> бүрэн авахгүй байна —{" "}
            <code>display: inline-block</code> болго.
          </>,
          <>
            Товчны доогуур зураасыг <code>text-decoration: none</code>-оор ав.
          </>,
          <>
            <code>&lt;head&gt;</code>-д дутуу байгаа <code>viewport</code> meta
            тагийг нэм.
          </>,
          <>
            DevTools (F12)-оор inspect хийж, өөрчлөлт бүрийн үр дүнг хар.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут · засварласан хувилбар"
            files={[
              { name: "index.html", lang: "html", code: FIXED_HTML },
              { name: "style.css", lang: "css", code: FIXED_CSS },
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
        resumeTopic="Сар 1 сэргээх, quiz ба эцсийн дадлага"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — MONTH 1 REVIEW
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Сар 1 сэргээх"
        page="11"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Сар 1
            <br />
            сэргээх
          </>
        }
        lead="HTML-ээс анимаци хүртэл — 15 хичээлийн гол ойлголтуудыг нэг зураглалаар сэргээж, өөрийгөө шалгана."
      />

      {/* 12 · HTML ЗУРАГЛАЛ */}
      <Slide
        label="html зураглал"
        page="12"
        total={TOTAL}
        footer={{ tag: "§02 сэргээх", topic: "HTML" }}
      >
        <Frame>
          <Eyebrow className="anim">7 хоног 1 · HTML</Eyebrow>
          <h2 className="slide-title anim anim-2">HTML — юу сурсан</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Сэдэв", width: "38%" }, { head: "Гол агуулга" }]}
            rows={[
              ["Бүтэц", "DOCTYPE, html/head/body, таг, attribute."],
              ["Контент", "Текст, ul/ol, a (зам), img."],
              ["Хүснэгт ба форм", "table, form, input, label, button."],
              ["Семантик", "header/nav/main/section/footer, хүртээмж."],
            ]}
          />
          <CodeCaption>
            HTML нь хуудасны <b>бүтэц, утга</b> — «юу байна» гэдгийг тодорхойлно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 13 · CSS ЗУРАГЛАЛ */}
      <Slide
        label="css зураглал"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 сэргээх", topic: "CSS" }}
      >
        <Frame>
          <Eyebrow className="anim">7 хоног 2–4 · CSS</Eyebrow>
          <h2 className="slide-title anim anim-2">CSS — юу сурсан</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Сэдэв", width: "38%" }, { head: "Гол агуулга" }]}
            rows={[
              ["Үндэс", "Selector, өнгө, box model, typography, нэгж."],
              ["Байрлал", "display, position, z-index."],
              ["Layout", "Flexbox, Grid."],
              ["Орчин үе", "Responsive (media query), анимаци."],
            ]}
          />
          <CodeCaption>
            CSS нь хуудасны <b>харагдац</b> — «яаж харагдах» гэдгийг
            тодорхойлно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · QUIZ */}
      <Slide
        label="quiz"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 сэргээх", topic: "өөрийгөө шалга" }}
      >
        <Frame>
          <Eyebrow className="anim">Хариултаа бодоорой</Eyebrow>
          <h2 className="slide-title anim anim-2">Жижиг шалгалт</h2>
          <ConceptList
            num
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "block vs inline ялгаа юу вэ?",
                desc: "Аль нь бүтэн мөр эзэлдэг вэ?",
              },
              {
                idx: "02",
                title: "Flexbox vs Grid — хэзээ алийг нь?",
                desc: "Нэг хэмжээст vs хоёр хэмжээст.",
              },
              {
                idx: "03",
                title: "rem ба em-ийн ялгаа?",
                desc: "Аль нь html-ээс хамаардаг вэ?",
              },
              {
                idx: "04",
                title: "Responsive болгох эхний алхам?",
                desc: "Аль meta таг заавал хэрэгтэй вэ?",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 15 · QUIZ ХАРИУ */}
      <Slide
        label="quiz хариу"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 сэргээх", topic: "хариултууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Шалгаж үзээрэй</Eyebrow>
          <h2 className="slide-title anim anim-2">Хариултууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Асуулт", width: "30%" }, { head: "Хариу" }]}
            rows={[
              ["block vs inline", "block бүтэн мөр + хэмжээ авна; inline зэрэгцэнэ."],
              ["Flexbox vs Grid", "Нэг эгнээ → Flex; хуудасны бүтэц → Grid."],
              ["rem vs em", "rem нь html-ээс; em нь элементийн өөрийн хэмжээнээс."],
              ["Responsive", "viewport meta + mobile-first @media."],
            ]}
          />
          <CodeCaption>
            Хэрвээ бүгдийг хариулж чадсан бол Сар 1-ийг бат эзэмшсэн байна!
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="16"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Сэтгэгдлийн section нэмэх"
        tasks={[
          <>
            <code>&lt;section class=&quot;testi&quot;&gt;</code> доторх{" "}
            <code>.grid</code>-д 3 сэтгэгдлийн карт (<code>.quote</code>) бич.
          </>,
          <>
            <code>.grid</code>-ийг <code>auto-fit + minmax</code>-аар responsive
            болго.
          </>,
          <>
            <code>.testi</code>-д <code>max-width</code> + <code>margin: 0
            auto</code> өгч голлуул.
          </>,
          <>
            <code>.quote:hover</code>-т <code>transform</code> нэмж амьд болго.
          </>,
          <>
            box-sizing, viewport — Сар 1-ийн сайн дадлуудыг бүгдийг хэрэглэ.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 25 минут"
            files={[
              { name: "index.html", lang: "html", code: TESTI_HTML },
              { name: "style.css", lang: "css", code: TESTI_CSS },
            ]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 17 · ХУРААНГУЙ / CALLOUT */}
      <Callout
        label="Сар 1 дууслаа"
        page="17"
        total={TOTAL}
        quote={
          <>
            Та одоо <span className="hi">HTML &amp; CSS</span>-ээр бодит,
            responsive хуудас бүтээж чадна. Энэ бол вэб хөгжүүлэгчийн{" "}
            <span className="hi">бат суурь</span>.
          </>
        }
        attr="Сар 1 — HTML &amp; CSS · дууссан"
      />

      {/* 18 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-16 · сар 1 дууслаа</>}
        title={
          <>
            Сар 2 —
            <br />
            JavaScript
            <Cursor />
          </>
        }
        subtitle="Сар 1 дууслаа! Дараагийн сараас JavaScript-ийг үзэж, хуудсаа зөвхөн харагддаг биш, бодитоор ажилладаг, харьцдаг болгож сурна. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 16 — төсөл дуусгах + сар сэргээх</span>
          </>
        }
      />
    </Deck>
  );
}
