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
  title: "erxes · Хичээл 02 — HTML гүнзгийрүүлэн",
};

const TOTAL = "33";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML) ===== */

const ABOUT_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Миний тухай</title>
  </head>
  <body>
    <header>
      <h1>Болд Бат</h1>
    </header>

    <nav>
      <a href="about.html">Миний тухай</a>
      <a href="projects.html">Төслүүд</a>
      <a href="contact.html">Холбоо барих</a>
    </nav>

    <main>
      <p>
        Сайн байна уу! Би вэб хөгжүүлэлт сурч буй оюутан. Энэ хуудсаар
        өөрийгөө танилцуулж байна.
      </p>

      <h2>Миний чадварууд</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </main>

    <footer>
      <p>Холбоо барих: bold@example.com</p>
    </footer>
  </body>
</html>
`;

const RECIPE_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Өндөгтэй будаа</title>
  </head>
  <body>
    <header>
      <h1>Өндөгтэй будаа</h1>
    </header>

    <main>
      <h2>Орц</h2>
      <ul>
        <li>Цагаан будаа — 1 аяга</li>
        <li>Өндөг — 2 ширхэг</li>
        <li>Ногоон сонгино</li>
        <li>Давс, цөцгийн тос</li>
      </ul>

      <h2>Хийх алхмууд</h2>
      <ol>
        <li>Будаагаа угааж чанна.</li>
        <li>Тогоонд тос хайлуулна.</li>
        <li>Өндгөө хуурна.</li>
        <li>Будаатай хольж амтална.</li>
      </ol>

      <h2>Шим тэжээл</h2>
      <table border="1">
        <tr>
          <th>Шим тэжээл</th>
          <th>Хэмжээ</th>
        </tr>
        <tr>
          <td>Илчлэг</td>
          <td>420 ккал</td>
        </tr>
        <tr>
          <td>Уураг</td>
          <td>15 г</td>
        </tr>
      </table>
    </main>

    <footer>
      <p>Зохиогч: Сараа</p>
      <a href="recipes.html">Бусад жор үзэх</a>
    </footer>
  </body>
</html>
`;

export default function Lesson02() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-02 · html гүнзгийрүүлэн</>}
        title={
          <>
            HTML-ийг
            <br />
            гүнзгийрүүлэн
            <Cursor />
          </>
        }
        subtitle="HTML суурь бүтэц (boilerplate), атрибут, байнга хэрэглэдэг тагууд, болон утга бүхий (семантик) HTML — нэг хичээлд."
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

      {/* 02 · ӨМНӨХ ХИЧЭЭЛЭЭС */}
      <Slide
        label="Сэргээн санах"
        page="02"
        total={TOTAL}
        footer={{ tag: "танилцуулга", topic: "сэргээн санах" }}
        grid
      >
        <Frame>
          <Eyebrow className="anim">Хичээл 01-ээс санах нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "HTML бол бүтэц",
                desc: "Контентоо тагаар ороож, юу болохыг нь хөтөчид хэлдэг.",
              },
              {
                idx: "✓",
                title: "Таг = нээх + контент + хаах",
                desc: "<p>Текст</p> — нээх таг, контент, хаах таг.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Суурь бүтэц, атрибут, илүү олон таг, утга бүхий HTML.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 03 · ӨНӨӨДРИЙН ТӨЛӨВЛӨГӨӨ */}
      <Slide label="Төлөвлөгөө" page="03" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">Өнөөдөр · 4 хэсэг</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид юу үзэх вэ?</h2>
          <ConceptList
            num
            compact
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "HTML суурь бүтэц (boilerplate)",
                desc: "Хуудас бүр эхэлдэг стандарт араг яс.",
              },
              {
                idx: "02",
                title: "Атрибут",
                desc: "Тагт нэмэлт мэдээлэл, тохиргоо өгөх нь.",
              },
              {
                idx: "03",
                title: "Байнга хэрэглэх тагууд",
                desc: "Текст, жагсаалт, хүснэгт, зураг, холбоос.",
              },
              {
                idx: "04",
                title: "Семантик HTML",
                desc: "Утга бүхий тагаар хуудсаа зөв бүтэцлэх нь.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 04 · ХЭСЭГ 01 — BOILERPLATE */}
      <SectionDivider
        label="§ Суурь бүтэц"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            HTML
            <br />
            суурь бүтэц
          </>
        }
        lead="Хуудас бүр давтагддаг нэг стандарт араг яснаас эхэлдэг — үүнийг boilerplate гэнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: BOILERPLATE */}
      <KeyTerm
        label="Гол ойлголт: Boilerplate"
        page="05"
        total={TOTAL}
        term="Boilerplate"
        def={
          <>
            <b>Boilerplate</b> гэдэг нь HTML хуудас бүрт давтагддаг{" "}
            <span className="inline-code">суурь бүтэц</span> юм. Контентоо бичихээс
            өмнө хөтөчид хуудсаа хэрхэн уншихыг хэлдэг стандарт араг яс.
          </>
        }
        note="бүх хуудас эндээс эхэлдэг"
      />

      {/* 06 · BOILERPLATE КОД */}
      <Slide
        label="Boilerplate код"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 суурь бүтэц", topic: "index.html" }}
      >
        <Frame>
          <Eyebrow className="anim">Стандарт араг яс</Eyebrow>
          <h2 className="slide-title sm anim anim-2">HTML5 boilerplate</h2>
          <CodeWindow
            numbered
            sm
            filename="index.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.punct>&lt;!</T.punct>
              <T.kw>DOCTYPE</T.kw> <T.attr>html</T.attr>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>html</T.tag> <T.attr>lang</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;mn&quot;</T.str>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>meta</T.tag> <T.attr>charset</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;UTF-8&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>meta</T.tag> <T.attr>name</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;viewport&quot;</T.str> <T.attr>content</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;width=device-width, initial-scale=1&quot;</T.str>{" "}
              <T.punct>/&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>Миний хуудас
              <T.punct>&lt;/</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>Сайн байна уу!
              <T.punct>&lt;/</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>html</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Тодруулсан <b>viewport</b> мөр хуудсыг гар утсан дээр зөв хэмжээтэй
            харуулдаг — орчин үеийн хуудас бүрт зайлшгүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · BOILERPLATE МӨР БҮР */}
      <Slide
        label="Мөр бүрийн утга"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 суурь бүтэц", topic: "мөр бүрийн утга" }}
      >
        <Frame>
          <Eyebrow className="anim">Мөр мөрөөр нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Боулерплэйт юу хийдэг вэ?</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Мөр", width: "34%" },
              { head: "Юу хийдэг" },
            ]}
            rows={[
              [
                <code key="t">&lt;!DOCTYPE html&gt;</code>,
                "Энэ бол орчин үеийн HTML5 хуудас гэдгийг хөтөчид хэлнэ.",
              ],
              [
                <code key="t">&lt;html lang=&quot;mn&quot;&gt;</code>,
                "Бүх хуудсыг ороох үндэс таг; хэлийг монгол гэж заана.",
              ],
              [
                <code key="t">&lt;head&gt;</code>,
                "Харагдахгүй мэта мэдээлэл — тохиргоо, гарчиг, холбоосууд.",
              ],
              [
                <code key="t">&lt;meta charset&gt;</code>,
                "Юникод (UTF-8) — кирилл, эможи зөв харагдана.",
              ],
              [
                <code key="t">&lt;meta viewport&gt;</code>,
                "Гар утас, таблет дээр зөв өргөнтэй харуулна.",
              ],
              [
                <code key="t">&lt;title&gt;</code>,
                "Хөтчийн таб дээр гарах хуудасны нэр.",
              ],
              [
                <code key="t">&lt;body&gt;</code>,
                "Хэрэглэгчид харагдах бүх контент энд орно.",
              ],
            ]}
          />
        </Frame>
      </Slide>

      {/* 08 · HEAD vs BODY */}
      <Slide
        label="head ба body"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 суурь бүтэц", topic: "head / body" }}
      >
        <Frame>
          <Eyebrow className="anim">Хоёр үндсэн хэсэг</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>&lt;head&gt;</code> ба <code>&lt;body&gt;</code>
          </h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Шинж", width: "24%" },
              { head: "<head>", width: "38%" },
              { head: "<body>" },
            ]}
            rows={[
              ["Харагдах уу", "Үгүй — далд мэдээлэл", "Тийм — хуудасны контент"],
              [
                "Юу агуулдаг",
                "charset, viewport, title, CSS холбоос",
                "Текст, зураг, товч, форм, бүх таг",
              ],
              [
                "Зориулалт",
                "Хөтөч ба хайлтын системд зориулсан",
                "Хүн хэрэглэгчид зориулсан",
              ],
            ]}
          />
          <CodeCaption>
            <b>head</b> бол тайз ард байгаа тохиргоо, <b>body</b> бол тайзан дээр
            харагдах жүжиг гэж бодоорой.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ХЭСЭГ 02 — АТРИБУТ */}
      <SectionDivider
        label="§ Атрибут"
        page="09"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title="Атрибут"
        lead="Тагт нэмэлт мэдээлэл, тохиргоо өгдөг бяцхан тохируулга."
      />

      {/* 10 · ГОЛ ОЙЛГОЛТ: АТРИБУТ */}
      <KeyTerm
        label="Гол ойлголт: Атрибут"
        page="10"
        total={TOTAL}
        term="Атрибут"
        def={
          <>
            <b>Атрибут (attribute)</b> нь нээх тагийн дотор бичигдэж, тухайн
            элементэд нэмэлт мэдээлэл өгдөг.{" "}
            <span className="inline-code">нэр=&quot;утга&quot;</span> хэлбэртэй
            бичигдэнэ.
          </>
        }
        note="нэр=&quot;утга&quot; · нээх тагийн дотор"
      />

      {/* 11 · АТРИБУТЫН БҮТЭЦ */}
      <Slide
        label="Атрибутын бүтэц"
        page="11"
        total={TOTAL}
        footer={{ tag: "§02 атрибут", topic: "бүтэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Анхааралтай уншъя</Eyebrow>
          <h2 className="slide-title anim anim-2">Атрибутын бүтэц</h2>
          <CodeWindow
            numbered
            filename="page.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 44 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>img</T.tag> <T.attr>src</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;cat.jpg&quot;</T.str> <T.attr>alt</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;Муур&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
          </CodeWindow>
          <div
            className="diagram anim anim-4"
            style={{ marginTop: 44, justifyContent: "flex-start", gap: 56 }}
          >
            <div>
              <div style={{ fontSize: 30, color: "var(--s-tag)", fontWeight: 700 }}>
                img
              </div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>
                таг
              </div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-attr)", fontWeight: 700 }}>
                src
              </div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>
                атрибутын нэр
              </div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-str)", fontWeight: 700 }}>
                &quot;cat.jpg&quot;
              </div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>
                утга
              </div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-attr)", fontWeight: 700 }}>
                alt
              </div>
              <div style={{ fontSize: 22, color: "var(--muted)", marginTop: 8 }}>
                өөр нэг атрибут
              </div>
            </div>
          </div>
          <CodeCaption>
            Нэг тагт <b>хэд хэдэн атрибут</b> зэрэг өгч болно — зайгаар тусгаарлана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 12 · БАЙНГА ХЭРЭГЛЭХ АТРИБУТУУД */}
      <Slide
        label="Атрибутын толь"
        page="12"
        total={TOTAL}
        footer={{ tag: "§02 атрибут", topic: "толь бичиг" }}
      >
        <Frame>
          <Eyebrow className="anim">Багц толь бичиг</Eyebrow>
          <h2 className="slide-title anim anim-2">Байнга хэрэглэх атрибутууд</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Атрибут", width: "20%" },
              { head: "Аль тагт", width: "26%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="t">href</code>, <code key="a">&lt;a&gt;</code>, "Холбоос аль хаяг руу заахыг тодорхойлно."],
              [
                <code key="t">src</code>,
                <>
                  <code>&lt;img&gt;</code>, <code>&lt;script&gt;</code>
                </>,
                "Зураг, файлын эх сурвалжийн зам.",
              ],
              [<code key="t">alt</code>, <code key="a">&lt;img&gt;</code>, "Зураг ачаалагдахгүй үед гарах орлох текст."],
              [
                <code key="t">type</code>,
                <>
                  <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code>
                </>,
                "Талбарын төрөл — text, email, password гэх мэт.",
              ],
              [<code key="t">id</code>, "бүх таг", "Тухайн элементийн давтагдашгүй нэр."],
              [<code key="t">class</code>, "бүх таг", "CSS-д зориулсан бүлгийн нэр (давтагдаж болно)."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 13 · ГЛОБАЛ АТРИБУТ — id ба class */}
      <Slide
        label="id ба class"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 атрибут", topic: "id / class" }}
      >
        <Frame>
          <Eyebrow className="anim">Хаа сайгүй хэрэглэгддэг</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>id</code> ба <code>class</code>
          </h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="page.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>h1</T.tag> <T.attr>id</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;title&quot;</T.str>
                <T.punct>&gt;</T.punct>Гарчиг
                <T.punct>&lt;/</T.punct>
                <T.tag>h1</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>p</T.tag> <T.attr>class</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;lead&quot;</T.str>
                <T.punct>&gt;</T.punct>Эхний догол
                <T.punct>&lt;/</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>p</T.tag> <T.attr>class</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;lead&quot;</T.str>
                <T.punct>&gt;</T.punct>Хоёр дахь догол
                <T.punct>&lt;/</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bar="ялгаа" bodyStyle={{ background: "#0e120e" }}>
              <div style={{ color: "#e6edf3", fontSize: 22, lineHeight: 1.7 }}>
                <b style={{ color: "#39d353" }}>id</b> — нэг хуудсанд{" "}
                <b>зөвхөн нэг</b> удаа.
                <br />
                <span style={{ color: "#8b949e" }}>(давтагдашгүй)</span>
                <br />
                <br />
                <b style={{ color: "#39d353" }}>class</b> — олон элементэд{" "}
                <b>дахин дахин</b>.
                <br />
                <span style={{ color: "#8b949e" }}>(бүлэглэхэд)</span>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>id</b> бол паспортын дугаар шиг ганц, <b>class</b> бол ангийн нэр
            шиг олонд хамаатай.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · ХЭСЭГ 03 — ИЛҮҮ ОЛОН ТАГ */}
      <SectionDivider
        label="§ Илүү олон таг"
        page="14"
        total={TOTAL}
        ghost="03"
        section="ХЭСЭГ 03"
        title={
          <>
            Байнга
            <br />
            хэрэглэх тагууд
          </>
        }
        lead="Текст, жагсаалт, хүснэгт — өдөр тутам хэрэглэгддэг тагуудаа нэмье."
      />

      {/* 15 · ТЕКСТ ФОРМАТЛАХ ТАГУУД */}
      <Slide
        label="Текст тагууд"
        page="15"
        total={TOTAL}
        footer={{ tag: "§03 тагууд", topic: "текст" }}
      >
        <Frame>
          <Eyebrow className="anim">Текст хэлбэржүүлэх</Eyebrow>
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
              [<code key="t">&lt;strong&gt;</code>, "Тод", "Чухал текстийг тодоор онцлох."],
              [<code key="t">&lt;em&gt;</code>, "Налуу", "Өргөлт нэмж онцлох (italic)."],
              [<code key="t">&lt;br&gt;</code>, "Мөр таслах", "Шинэ мөр рүү шилжих (хаах таггүй)."],
              [<code key="t">&lt;hr&gt;</code>, "Зураас", "Сэдэв тусгаарлах хэвтээ зураас."],
              [
                <code key="t">&lt;span&gt;</code>,
                "Мөр доторх сав",
                "Текстийн хэсгийг ороож, тусад нь загварчлах.",
              ],
            ]}
          />
        </Frame>
      </Slide>

      {/* 16 · ЖАГСААЛТ */}
      <Slide
        label="Жагсаалт"
        page="16"
        total={TOTAL}
        footer={{ tag: "§03 тагууд", topic: "жагсаалт" }}
      >
        <Frame>
          <Eyebrow className="anim">Цэгэн ба дугаартай</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Жагсаалтын тагууд</h2>
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
                <T.punct>&gt;</T.punct>HTML
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>CSS
                <T.punct>&lt;/</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>li</T.tag>
                <T.punct>&gt;</T.punct>JavaScript
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
              <ul style={{ margin: 0, paddingLeft: 28, color: "#111", fontSize: 24, lineHeight: 1.8 }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>&lt;ul&gt;</b> цэгэн жагсаалт, <b>&lt;ol&gt;</b> дугаартай жагсаалт,{" "}
            <b>&lt;li&gt;</b> жагсаалтын мөр бүр.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 17 · ХҮСНЭГТ */}
      <Slide
        label="Хүснэгт"
        page="17"
        total={TOTAL}
        footer={{ tag: "§03 тагууд", topic: "хүснэгт" }}
      >
        <Frame>
          <Eyebrow className="anim">Мөр ба багана</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Хүснэгтийн тагууд</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="table.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>table</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>Нэр
                <T.punct>&lt;/</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>Нас
                <T.punct>&lt;/</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;/</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>Бат
                <T.punct>&lt;/</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>20
                <T.punct>&lt;/</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;/</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>table</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <table style={{ borderCollapse: "collapse", color: "#111", fontSize: 22 }}>
                <tbody>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "8px 18px" }}>Нэр</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px 18px" }}>Нас</th>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ccc", padding: "8px 18px" }}>Бат</td>
                    <td style={{ border: "1px solid #ccc", padding: "8px 18px" }}>20</td>
                  </tr>
                </tbody>
              </table>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>&lt;table&gt;</b> хүснэгт, <b>&lt;tr&gt;</b> мөр, <b>&lt;th&gt;</b>{" "}
            толгой нүд, <b>&lt;td&gt;</b> энгийн нүд.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 18 · ТАГУУДЫН ТОЙМ ТОЛЬ */}
      <Slide
        label="Тагуудын тойм"
        page="18"
        total={TOTAL}
        footer={{ tag: "§03 тагууд", topic: "тойм толь" }}
      >
        <Frame>
          <Eyebrow className="anim">Нэг дороос харах нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Тагуудын тойм толь</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Бүлэг", width: "24%" },
              { head: "Тагууд", width: "36%" },
              { head: "Юунд" },
            ]}
            rows={[
              [
                "Гарчиг",
                <code key="t">&lt;h1&gt;–&lt;h6&gt;</code>,
                "Гол ба дэд гарчгууд.",
              ],
              ["Текст", <code key="t">&lt;p&gt; &lt;strong&gt; &lt;em&gt;</code>, "Догол мөр, онцлох текст."],
              ["Жагсаалт", <code key="t">&lt;ul&gt; &lt;ol&gt; &lt;li&gt;</code>, "Цэгэн ба дугаартай жагсаалт."],
              ["Хүснэгт", <code key="t">&lt;table&gt; &lt;tr&gt; &lt;td&gt;</code>, "Мөр, баганатай өгөгдөл."],
              ["Холбоос ба зураг", <code key="t">&lt;a&gt; &lt;img&gt;</code>, "Шилжих холбоос, зураг."],
              ["Сав", <code key="t">&lt;div&gt; &lt;span&gt;</code>, "Контентыг бүлэглэх саванууд."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 19 · ХЭСЭГ 04 — СЕМАНТИК HTML */}
      <SectionDivider
        label="§ Семантик HTML"
        page="19"
        total={TOTAL}
        ghost="04"
        section="ХЭСЭГ 04"
        title={
          <>
            Семантик
            <br />
            HTML
          </>
        }
        lead="Зүгээр л div биш — утга бүхий тагаар хуудсаа бүтэцлэх нь."
      />

      {/* 20 · ГОЛ ОЙЛГОЛТ: СЕМАНТИК HTML */}
      <KeyTerm
        label="Гол ойлголт: Семантик HTML"
        page="20"
        total={TOTAL}
        term="Семантик HTML"
        def={
          <>
            <b>Семантик HTML</b> гэдэг нь хэсэг бүрийн <i>утгыг</i> илэрхийлдэг таг
            ашиглах явдал. <span className="inline-code">&lt;div&gt;</span> биш,{" "}
            <span className="inline-code">&lt;header&gt;</span>,{" "}
            <span className="inline-code">&lt;nav&gt;</span>,{" "}
            <span className="inline-code">&lt;main&gt;</span> гэх мэт.
          </>
        }
        note="нэр нь л зориулалтаа хэлдэг"
      />

      {/* 21 · DIV SOUP vs СЕМАНТИК */}
      <Slide
        label="div soup vs семантик"
        page="21"
        total={TOTAL}
        footer={{ tag: "§04 семантик", topic: "өмнө / дараа" }}
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
            Хоёулаа адил харагдана — гэхдээ баруун талынх нь <b>юу болохоо</b>{" "}
            өөрөө хэлж байна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 22 · СЕМАНТИК ТАГУУД */}
      <Slide
        label="Семантик тагууд"
        page="22"
        total={TOTAL}
        footer={{ tag: "§04 семантик", topic: "толь бичиг" }}
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
              [<code key="t">&lt;header&gt;</code>, "Толгой", "Хуудасны дээд хэсэг — лого, гарчиг."],
              [<code key="t">&lt;nav&gt;</code>, "Цэс", "Шилжих холбоосуудын блок."],
              [<code key="t">&lt;main&gt;</code>, "Гол хэсэг", "Хуудасны үндсэн контент (нэг удаа)."],
              [<code key="t">&lt;section&gt;</code>, "Хэсэг", "Сэдвээр нь бүлэглэсэн хэсэг."],
              [<code key="t">&lt;article&gt;</code>, "Бие даасан", "Дангаараа утгатай контент (нийтлэл)."],
              [<code key="t">&lt;aside&gt;</code>, "Хажуу", "Нэмэлт мэдээлэл, хажуугийн блок."],
              [<code key="t">&lt;footer&gt;</code>, "Хөл", "Хуудасны доод хэсэг — холбоо барих, эрх."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 23 · ХУУДАСНЫ БҮТЭЦ ДИАГРАМ */}
      <Slide
        label="Хуудасны бүтэц"
        page="23"
        total={TOTAL}
        footer={{ tag: "§04 семантик", topic: "хуудасны бүтэц" }}
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
              <SemBox tag="<main>" desc="гол контент" grow accent />
              <SemBox tag="<aside>" desc="хажуугийн блок" width={280} />
            </div>
            <SemBox tag="<footer>" desc="холбоо барих · эрх" />
          </div>
          <CodeCaption>
            Энэ бүтэц бараг бүх вэб хуудсанд давтагддаг — таг бүр өөрийн байрандаа.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 24 · ЯАГААД СЕМАНТИК ЧУХАЛ ВЭ */}
      <Slide
        label="Яагаад чухал вэ"
        page="24"
        total={TOTAL}
        footer={{ tag: "§04 семантик", topic: "ач холбогдол" }}
      >
        <Frame>
          <Eyebrow className="anim">3 шалтгаан</Eyebrow>
          <h2 className="slide-title anim anim-2">Яагаад семантик чухал вэ?</h2>
          <ConceptList
            num
            compact
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Хүртээмж (accessibility)",
                desc: "Дэлгэц уншигч программ хараагүй хэрэглэгчид хуудсыг зөв уншиж өгнө.",
              },
              {
                idx: "02",
                title: "Хайлтын систем (SEO)",
                desc: "Google хуудасны бүтцийг ойлгож, илүү зөв индексжүүлнэ.",
              },
              {
                idx: "03",
                title: "Уншигдах байдал",
                desc: "Бусад хөгжүүлэгч (болон ирээдүйн чи) кодыг хурдан ойлгоно.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 25 · ЁСТОЙ / ЁСГҮЙ */}
      <Slide
        label="Сайн дадал"
        page="25"
        total={TOTAL}
        footer={{ tag: "§04 семантик", topic: "сайн дадал" }}
      >
        <Frame>
          <Eyebrow className="anim">Дүгнэж хэлбэл</Eyebrow>
          <h2 className="slide-title anim anim-2">Сайн дадал</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={[
              "Зориулалтад нь тохирох тагийг сонгох.",
              "Зургийн alt атрибутыг үргэлж бичих.",
              "Хуудсаа header / main / footer-ээр бүтэцлэх.",
            ]}
            donts={[
              "Бүх зүйлийг div-ээр хийх.",
              "Гарчгийг зөвхөн томруулсан p-ээр орлуулах.",
              "Тагуудыг буруу үүрэгт ашиглах.",
            ]}
          />
        </Frame>
      </Slide>

      {/* 26 · ДАСГАЛ */}
      <Exercise
        label="Дасгал: тухайн миний хуудас"
        page="26"
        total={TOTAL}
        title="Семантик хуудас бүтээх"
        tasks={[
          <>
            <code>about.html</code>-д бүрэн <b>boilerplate</b> бичиж эхэл.
          </>,
          <>
            <code>&lt;header&gt;</code>-т нэрээ <code>&lt;h1&gt;</code>-ээр бич.
          </>,
          <>
            <code>&lt;nav&gt;</code>-т 2-3 <code>&lt;a&gt;</code> холбоос нэм.
          </>,
          <>
            <code>&lt;main&gt;</code>-д өөрийгөө танилцуулсан <code>&lt;p&gt;</code>{" "}
            ба чадварын <code>&lt;ul&gt;</code> нэм.
          </>,
          <>
            <code>&lt;footer&gt;</code>-т холбоо барих мэдээлэл нэм.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15-20 минут"
            files={[{ name: "about.html", lang: "html", code: ABOUT_HTML }]}
          />
        }
      />

      {/* 27 · ХЭСЭГ 05 — ДАДЛАГА */}
      <SectionDivider
        label="§ Дадлага"
        page="27"
        total={TOTAL}
        ghost="05"
        section="ХЭСЭГ 05"
        title={
          <>
            Сурснаа
            <br />
            бататгая
          </>
        }
        lead="Хэдэн жижиг дасгалаар өнөөдрийн мэдлэгээ шалгаж бэхжүүлье."
      />

      {/* 28 · АЛДААГ ОЛ */}
      <Slide
        label="Алдааг ол"
        page="28"
        total={TOTAL}
        footer={{ tag: "§05 дадлага", topic: "алдааг ол" }}
      >
        <Frame>
          <Eyebrow className="anim">Дасгал 1</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Алдааг ол</h2>
          <CodeWindow
            numbered
            sm
            filename="cat.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.punct>&lt;!</T.punct>
              <T.kw>DOCTYPE</T.kw> <T.attr>html</T.attr>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>html</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>Муурын хуудас
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>img</T.tag> <T.attr>src</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;cat.jpg&quot;</T.str>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>Тавтай морил
              <T.punct>&lt;/</T.punct>
              <T.tag>h2</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>html</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Энэ кодонд <b>4 алдаа</b> нуугдаж байна — хосоороо олж засаарай.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 29 · АЛДААГ ОЛ — ХАРИУ */}
      <Slide
        label="Алдааг ол — хариу"
        page="29"
        total={TOTAL}
        footer={{ tag: "§05 дадлага", topic: "хариу" }}
      >
        <Frame>
          <Eyebrow className="anim">Дасгал 1 · хариу</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Засварласан код</h2>
          <CodeWindow
            numbered
            sm
            filename="cat.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.punct>&lt;!</T.punct>
              <T.kw>DOCTYPE</T.kw> <T.attr>html</T.attr>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="add">
              <T.punct>&lt;</T.punct>
              <T.tag>html</T.tag> <T.attr>lang</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;mn&quot;</T.str>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="add" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>Муурын хуудас
              <T.punct>&lt;/</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="add" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>img</T.tag> <T.attr>src</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;cat.jpg&quot;</T.str> <T.attr>alt</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;Муур&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
            <Line state="add" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>Тавтай морил
              <T.punct>&lt;/</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>html</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>lang</b> нэмсэн · <b>&lt;/title&gt;</b> хаасан · зурагт <b>alt</b>{" "}
            нэмсэн · <b>&lt;h1&gt;</b>-ийг зөв хаасан.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 30 · ӨӨРИЙГӨӨ ШАЛГА */}
      <Slide
        label="Өөрийгөө шалга"
        page="30"
        total={TOTAL}
        footer={{ tag: "§05 дадлага", topic: "өөрийгөө шалга" }}
      >
        <Frame>
          <Eyebrow className="anim">Дасгал 2 · аман хариулт</Eyebrow>
          <h2 className="slide-title anim anim-2">Өөрийгөө шалга</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "?",
                title: "boilerplate-ийн хамгийн эхний мөр юу вэ?",
                desc: "Сэжүүр: хөтөчид «энэ бол HTML5» гэдгийг хэлдэг.",
              },
              {
                idx: "?",
                title: "href атрибут аль тагт хэрэглэгддэг вэ?",
                desc: "Сэжүүр: хаашаа шилжихийг заадаг.",
              },
              {
                idx: "?",
                title: "id ба class хоёрын ялгаа юу вэ?",
                desc: "Сэжүүр: аль нь нэг удаа, аль нь олон удаа?",
              },
              {
                idx: "?",
                title: "<div class=\"nav\">-ийг аль семантик тагаар солих вэ?",
                desc: "Сэжүүр: цэс, холбоосуудын блок.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 31 · СОРИЛ — БҮТЭЦ ЗУРАХ */}
      <Exercise
        label="Сорил: жорын хуудас"
        page="31"
        total={TOTAL}
        tag="Дасгал 3 · сорил"
        title="Жорын хуудас бүтээх"
        tasks={[
          <>
            <code>recipe.html</code>-д бүрэн <b>boilerplate</b> бичиж эхэл.
          </>,
          <>
            <code>&lt;header&gt;</code>-т хоолны нэрийг <code>&lt;h1&gt;</code>-ээр бич.
          </>,
          <>
            <code>&lt;main&gt;</code>-д орцыг <code>&lt;ul&gt;</code>, алхмуудыг{" "}
            <code>&lt;ol&gt;</code>-оор жагсаа.
          </>,
          <>
            Шим тэжээлийн мэдээллийг <code>&lt;table&gt;</code>-ээр харуул.
          </>,
          <>
            <code>&lt;footer&gt;</code>-т зохиогчийн нэр, <code>&lt;a&gt;</code>{" "}
            холбоос нэм.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20-25 минут"
            files={[{ name: "recipe.html", lang: "html", code: RECIPE_HTML }]}
          />
        }
      />

      {/* 32 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="32"
        total={TOTAL}
        eyebrow="Хичээл 02 · хураангуй"
        title="Хураангуй"
        footer={{ tag: "erxes · хичээл 02 дууслаа", topic: "html гүнзгийрүүлэн" }}
        cards={[
          {
            num: "01",
            title: "Boilerplate",
            desc: "DOCTYPE, html, head, body — хуудас бүрийн суурь араг яс.",
          },
          {
            num: "02",
            title: "Атрибут",
            desc: "нэр=\"утга\" хэлбэрээр тагт нэмэлт мэдээлэл өгнө (href, src, id, class).",
          },
          {
            num: "03",
            title: "Тагууд",
            desc: "Текст, жагсаалт, хүснэгт, холбоос, зураг — өргөн хэрэглээний тагууд.",
          },
          {
            num: "04",
            title: "Семантик",
            desc: "header, nav, main, footer — утга бүхий тагаар зөв бүтэцлэх нь.",
          },
        ]}
      />

      {/* 33 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-02 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээл дээр CSS-ээр энэ бүтцээ загварчилж эхэлнэ. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 02 — html гүнзгийрүүлэн</span>
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
