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
  title: "erxes · Хичээл 04 — Хүснэгт ба форм",
};

/**
 * ХИЧЭЭЛ 04 — Хүснэгт ба форм
 * 🎯 Хэрэглэгчээс мэдээлэл цуглуулж, хүснэгтэн өгөгдөл харуулах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Хүснэгт
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Форм
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "20";

/* ===== Дасгалын бэлэн шийдэл (зөвхөн энэ хичээл хүртэл үзсэн HTML) ===== */

const SCHEDULE_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Хичээлийн хуваарь</title>
  </head>
  <body>
    <h1>Долоо хоногийн хуваарь</h1>

    <table border="1">
      <caption>Даваа гарагийн хичээлийн хуваарь</caption>
      <thead>
        <tr>
          <th colspan="2">Даваа гараг</th>
        </tr>
        <tr>
          <th>Цаг</th>
          <th>Хичээл</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>09:00 - 10:30</td>
          <td>Математик</td>
        </tr>
        <tr>
          <td>10:40 - 12:10</td>
          <td>Англи хэл</td>
        </tr>
        <tr>
          <td>13:00 - 14:30</td>
          <td>Физик</td>
        </tr>
        <tr>
          <td>14:40 - 16:10</td>
          <td>Програмчлал</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

const SIGNUP_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Бүртгүүлэх</title>
  </head>
  <body>
    <h1>Бүртгэлийн форм</h1>

    <form>
      <p>
        <label for="name">Нэр</label>
        <input type="text" id="name" name="name" placeholder="Таны нэр" required />
      </p>

      <p>
        <label for="email">И-мэйл</label>
        <input type="email" id="email" name="email" placeholder="name@example.com" required />
      </p>

      <p>
        <label for="password">Нууц үг</label>
        <input type="password" id="password" name="password" required />
      </p>

      <p>
        <label for="city">Хот</label>
        <select id="city" name="city">
          <option value="ub">Улаанбаатар</option>
          <option value="dk">Дархан</option>
          <option value="ed">Эрдэнэт</option>
        </select>
      </p>

      <p>
        <label for="comment">Сэтгэгдэл</label>
        <textarea id="comment" name="comment" placeholder="Хүсэлт, тэмдэглэл..."></textarea>
      </p>

      <button type="submit">Бүртгүүлэх</button>
    </form>
  </body>
</html>
`;

export default function Lesson04() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-04 · хүснэгт ба форм</>}
        title={
          <>
            Хүснэгт ба
            <br />
            форм
            <Cursor />
          </>
        }
        subtitle="Өгөгдлийг хүснэгтээр эмх цэгцтэй харуулж, хэрэглэгчээс формоор мэдээлэл цуглуулж сурна."
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
          <Eyebrow className="anim">Хичээл 03-аас санах нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "✓",
                title: "Текст ба жагсаалт",
                desc: "strong, em, ul, ol — контентоо хэлбэржүүлж жагсаах.",
              },
              {
                idx: "✓",
                title: "Холбоос ба зураг",
                desc: "<a href>, <img src alt>, relative vs absolute зам.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Өгөгдлийг хүснэгтээр харуулж, формоор цуглуулна.",
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
                title: "Хүснэгтийн бүтэц",
                desc: "table, tr, th, td — мөр ба багана.",
              },
              {
                idx: "02",
                title: "Хүснэгт сайжруулах",
                desc: "thead/tbody, colspan, rowspan.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "03",
                title: "Форм ба input",
                desc: "form, input төрлүүд, label.",
              },
              {
                idx: "04",
                title: "Бусад талбар",
                desc: "select, textarea, button ба атрибутууд.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — ХҮСНЭГТ
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Хүснэгт"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title="Хүснэгт"
        lead="Мөр ба баганаар эмхлэгдсэн өгөгдлийг — үнийн жагсаалт, хуваарь — хүснэгтээр харуулна."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: ХҮСНЭГТ */}
      <KeyTerm
        label="Гол ойлголт: Хүснэгт"
        page="05"
        total={TOTAL}
        term="Хүснэгт · <table>"
        def={
          <>
            <b>Хүснэгт</b> нь өгөгдлийг <i>мөр ба баганаар</i> зохион байгуулдаг.{" "}
            <span className="inline-code">&lt;tr&gt;</span> — мөр,{" "}
            <span className="inline-code">&lt;th&gt;</span> — толгой нүд,{" "}
            <span className="inline-code">&lt;td&gt;</span> — энгийн нүд.
          </>
        }
        note="зөвхөн өгөгдөлд — зохион байгуулалтад биш"
      />

      {/* 06 · ХҮСНЭГТ — КОД БА ҮР ДҮН */}
      <Slide
        label="Хүснэгтийн бүтэц"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 хүснэгт", topic: "table · tr · th · td" }}
      >
        <Frame>
          <Eyebrow className="anim">Код → үр дүн</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Хүснэгтийн үндсэн бүтэц</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
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
                <T.punct>&gt;</T.punct>Хоол
                <T.punct>&lt;/</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>Үнэ
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
                <T.punct>&gt;</T.punct>Бууз
                <T.punct>&lt;/</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={4}>
                <T.punct>&lt;</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>5000₮
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
                    <th style={{ border: "1px solid #ccc", padding: "8px 18px", background: "#f3f3f3" }}>Хоол</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px 18px", background: "#f3f3f3" }}>Үнэ</th>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ccc", padding: "8px 18px" }}>Бууз</td>
                    <td style={{ border: "1px solid #ccc", padding: "8px 18px" }}>5000₮</td>
                  </tr>
                </tbody>
              </table>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>&lt;th&gt;</b> толгой нүд автоматаар тод, голлуулсан харагдана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · thead / tbody / th scope */}
      <Slide
        label="thead ба tbody"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 хүснэгт", topic: "толгой ба бие" }}
      >
        <Frame>
          <Eyebrow className="anim">Хүснэгтийг бүтэцлэх</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>&lt;thead&gt;</code> ба <code>&lt;tbody&gt;</code>
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Таг", width: "26%" },
              { head: "Үүрэг" },
            ]}
            rows={[
              [<code key="t">&lt;thead&gt;</code>, "Толгой мөрүүдийг бүлэглэнэ (баганын нэрс)."],
              [<code key="t">&lt;tbody&gt;</code>, "Үндсэн өгөгдлийн мөрүүдийг бүлэглэнэ."],
              [<code key="t">&lt;tfoot&gt;</code>, "Доод хэсэг — нийлбэр, дүн гэх мэт."],
              [<code key="t">&lt;caption&gt;</code>, "Хүснэгтийн гарчиг (table-ийн дотор эхэнд)."],
              [<code key="t">colspan</code>, "Нэг нүдийг хэд хэдэн баганаар сунгана."],
              [<code key="t">rowspan</code>, "Нэг нүдийг хэд хэдэн мөрөөр сунгана."],
            ]}
          />
          <CodeCaption>
            thead/tbody нь хүснэгтийг <b>уншигдахуйц</b> бөгөөд хүртээмжтэй болгоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · colspan / rowspan КОД */}
      <Slide
        label="colspan ба rowspan"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 хүснэгт", topic: "нүд нэгтгэх" }}
      >
        <Frame>
          <Eyebrow className="anim">Нүд нэгтгэх</Eyebrow>
          <h2 className="slide-title sm anim anim-2">colspan-аар нүд сунгах</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="span.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>th</T.tag> <T.attr>colspan</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;2&quot;</T.str>
                <T.punct>&gt;</T.punct>7 хоног
                <T.punct>&lt;/</T.punct>
                <T.tag>th</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>Даваа
                <T.punct>&lt;/</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>Мягмар
                <T.punct>&lt;/</T.punct>
                <T.tag>td</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>tr</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <table style={{ borderCollapse: "collapse", color: "#111", fontSize: 22 }}>
                <tbody>
                  <tr>
                    <th colSpan={2} style={{ border: "1px solid #ccc", padding: "8px 18px", background: "#f3f3f3" }}>
                      7 хоног
                    </th>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ccc", padding: "8px 18px" }}>Даваа</td>
                    <td style={{ border: "1px solid #ccc", padding: "8px 18px" }}>Мягмар</td>
                  </tr>
                </tbody>
              </table>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>colspan=&quot;2&quot;</b> нэг нүдийг 2 баганын өргөнтэй болгоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 09 · ДАСГАЛ 1 */}
      <Exercise
        label="Дасгал 1"
        page="09"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Хичээлийн хуваарь хүснэгт"
        tasks={[
          <>
            <code>schedule.html</code>-д <code>&lt;table&gt;</code> үүсгэ.
          </>,
          <>
            <code>&lt;thead&gt;</code>-д «Цаг», «Хичээл» гэсэн{" "}
            <code>&lt;th&gt;</code> багана хий.
          </>,
          <>
            <code>&lt;tbody&gt;</code>-д дор хаяж 4 мөр өгөгдөл нэм.
          </>,
          <>
            Дээд талд <code>&lt;caption&gt;</code>-аар гарчиг нэм.
          </>,
          <>
            <code>colspan</code>-аар нэг толгой нүдийг хоёр баганаар сунга.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут"
            files={[{ name: "schedule.html", lang: "html", code: SCHEDULE_HTML }]}
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
        resumeTopic="Форм ба хэрэглэгчийн оролт"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — ФОРМ
          ============================================================ */}

      {/* 11 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Форм"
        page="11"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title="Форм"
        lead="Бүртгүүлэх, нэвтрэх, хайх — хэрэглэгчээс мэдээлэл авах бүх зүйл формоор эхэлдэг."
      />

      {/* 12 · ГОЛ ОЙЛГОЛТ: ФОРМ */}
      <KeyTerm
        label="Гол ойлголт: Форм"
        page="12"
        total={TOTAL}
        term="Форм · <form>"
        def={
          <>
            <b>&lt;form&gt;</b> нь хэрэглэгчээс оролт авах талбаруудыг агуулдаг сав.
            Дотор нь <span className="inline-code">&lt;input&gt;</span>,{" "}
            <span className="inline-code">&lt;textarea&gt;</span>,{" "}
            <span className="inline-code">&lt;button&gt;</span> зэрэг талбарууд
            байна.
          </>
        }
        note="хэрэглэгч → мэдээлэл → сервер"
      />

      {/* 13 · ФОРМ — КОД БА ҮР ДҮН */}
      <Slide
        label="Үндсэн форм"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 форм", topic: "form · input · label" }}
      >
        <Frame>
          <Eyebrow className="anim">Код → үр дүн</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Энгийн форм</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="form.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>form</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line state="hl" indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>label</T.tag>
                <T.punct>&gt;</T.punct>Нэр:
                <T.punct>&lt;/</T.punct>
                <T.tag>label</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>input</T.tag> <T.attr>type</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;text&quot;</T.str> <T.punct>/&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>button</T.tag>
                <T.punct>&gt;</T.punct>Илгээх
                <T.punct>&lt;/</T.punct>
                <T.tag>button</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>form</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <div style={{ color: "#111", fontSize: 22, display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <label>Нэр:</label>
                <input
                  type="text"
                  style={{ border: "1px solid #999", borderRadius: 6, padding: "8px 12px", fontSize: 20, width: "90%" }}
                  readOnly
                />
                <button
                  style={{ background: "#39d353", color: "#06210d", border: 0, borderRadius: 6, padding: "10px 22px", fontSize: 20, fontWeight: 700 }}
                >
                  Илгээх
                </button>
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>&lt;label&gt;</b> талбарт нэр өгч, хүртээмжийг сайжруулна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · INPUT ТӨРЛҮҮД */}
      <Slide
        label="input төрлүүд"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 форм", topic: "input type" }}
      >
        <Frame>
          <Eyebrow className="anim">Нэг таг — олон төрөл</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>&lt;input&gt;</code> төрлүүд
          </h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "type", width: "26%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="t">text</code>, "Энгийн текст — нэр, хаяг."],
              [<code key="t">email</code>, "И-мэйл хаяг — формат автоматаар шалгана."],
              [<code key="t">password</code>, "Нууц үг — оруулсныг далдална."],
              [<code key="t">number</code>, "Зөвхөн тоо."],
              [<code key="t">checkbox</code>, "Олон сонголтоос хэдийг ч сонгох."],
              [<code key="t">radio</code>, "Хэд хэдээс зөвхөн нэгийг сонгох."],
              [<code key="t">date</code>, "Огноо сонгогч."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 15 · LABEL-ийн чухал */}
      <Slide
        label="label холболт"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 форм", topic: "label · for · id" }}
      >
        <Frame>
          <Eyebrow className="anim">Талбар ба нэрийг холбох</Eyebrow>
          <h2 className="slide-title sm anim anim-2">
            <code>label</code>-ийг <code>input</code>-тэй холбох
          </h2>
          <CodeWindow
            numbered
            filename="label.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>label</T.tag> <T.attr>for</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;email&quot;</T.str>
              <T.punct>&gt;</T.punct>И-мэйл:
              <T.punct>&lt;/</T.punct>
              <T.tag>label</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl">
              <T.punct>&lt;</T.punct>
              <T.tag>input</T.tag> <T.attr>id</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;email&quot;</T.str> <T.attr>type</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;email&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>label-ийн for</b> ба <b>input-ийн id</b> ижил байх ёстой — ингэснээр
            нэр дээр дарахад талбар идэвхжинэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · SELECT / TEXTAREA / BUTTON */}
      <Slide
        label="select · textarea · button"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 форм", topic: "бусад талбар" }}
      >
        <Frame>
          <Eyebrow className="anim">Бусад оролтын талбар</Eyebrow>
          <h2 className="slide-title sm anim anim-2">select, textarea, button</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 36 }}>
            <CodeWindow sm filename="more.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>select</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>option</T.tag>
                <T.punct>&gt;</T.punct>УБ
                <T.punct>&lt;/</T.punct>
                <T.tag>option</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>option</T.tag>
                <T.punct>&gt;</T.punct>Дархан
                <T.punct>&lt;/</T.punct>
                <T.tag>option</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>select</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>textarea</T.tag>
                <T.punct>&gt;</T.punct>
                <T.punct>&lt;/</T.punct>
                <T.tag>textarea</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <div style={{ color: "#111", fontSize: 20, display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <select style={{ padding: "8px 12px", fontSize: 19, borderRadius: 6, border: "1px solid #999" }} disabled>
                  <option>УБ</option>
                </select>
                <textarea
                  rows={3}
                  style={{ width: "90%", padding: "8px 12px", fontSize: 18, borderRadius: 6, border: "1px solid #999" }}
                  readOnly
                />
              </div>
            </ResultPane>
          </div>
          <CodeCaption>
            <b>select</b> — унждаг цэс, <b>textarea</b> — урт олон мөрт текст.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 17 · ФОРМЫН ҮНДСЭН АТРИБУТУУД */}
      <Slide
        label="Формын атрибут"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 форм", topic: "атрибутууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Заавал мэдэх</Eyebrow>
          <h2 className="slide-title anim anim-2">Формын үндсэн атрибутууд</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Атрибут", width: "24%" },
              { head: "Аль тагт", width: "22%" },
              { head: "Үүрэг" },
            ]}
            rows={[
              [<code key="t">action</code>, <code key="a">&lt;form&gt;</code>, "Өгөгдөл хаашаа илгээхийг заана."],
              [<code key="t">method</code>, <code key="a">&lt;form&gt;</code>, "Илгээх арга — GET эсвэл POST."],
              [<code key="t">name</code>, <code key="a">&lt;input&gt;</code>, "Талбарын нэр — серверт өгөгдлийн түлхүүр."],
              [<code key="t">placeholder</code>, <code key="a">&lt;input&gt;</code>, "Хоосон үед харагдах сэжүүр текст."],
              [<code key="t">required</code>, <code key="a">&lt;input&gt;</code>, "Заавал бөглөх талбар."],
              [<code key="t">value</code>, <code key="a">&lt;input&gt;</code>, "Анхдагч буюу одоогийн утга."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 18 · ДАСГАЛ 2 */}
      <Exercise
        label="Дасгал 2"
        page="18"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 2"
        title="Бүртгэлийн форм"
        tasks={[
          <>
            <code>signup.html</code>-д <code>&lt;form&gt;</code> үүсгэ.
          </>,
          <>
            Нэр (<code>text</code>), и-мэйл (<code>email</code>), нууц үг
            (<code>password</code>) талбар нэм — <b>label</b> бүгдэд нь.
          </>,
          <>
            Хот сонгох <code>&lt;select&gt;</code> ба сэтгэгдлийн{" "}
            <code>&lt;textarea&gt;</code> нэм.
          </>,
          <>
            Гол талбаруудад <code>required</code> ба <code>placeholder</code> өг.
          </>,
          <>
            Доор нь «Бүртгүүлэх» <code>&lt;button&gt;</code> нэм.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут"
            files={[{ name: "signup.html", lang: "html", code: SIGNUP_HTML }]}
          />
        }
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 19 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 04 · хураангуй"
        title="Хураангуй"
        footer={{ tag: "erxes · хичээл 04 дууслаа", topic: "хүснэгт ба форм" }}
        cards={[
          {
            num: "01",
            title: "Хүснэгт",
            desc: "table, tr, th, td — мөр ба баганаар өгөгдөл харуулна.",
          },
          {
            num: "02",
            title: "Бүтэц",
            desc: "thead/tbody, caption, colspan/rowspan-аар цэгцлэх.",
          },
          {
            num: "03",
            title: "Форм ба input",
            desc: "form доторх input төрлүүд + label холболт.",
          },
          {
            num: "04",
            title: "Атрибутууд",
            desc: "action, method, name, placeholder, required, value.",
          },
        ]}
      />

      {/* 20 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-04 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлээр семантик HTML, хүртээмж (accessibility) ба SEO-г үзэж, хуудсаа утга бүхий бүтэцтэй болгоно. Баярлалаа!"
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 04 — хүснэгт ба форм</span>
          </>
        }
      />
    </Deck>
  );
}
