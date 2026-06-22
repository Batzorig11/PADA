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
  title: "erxes · Хичээл 18 — Оператор ба нөхцөл",
};

/**
 * ХИЧЭЭЛ 18 — Оператор ба нөхцөл
 * 🎯 Кодоор шийдвэр гаргах — оператор, харьцуулалт, if/else, switch, ternary.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — Операторууд ба truthy/falsy
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — if/else, switch, ternary
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const CALC_JS = `const a = 8;
const b = 3;

console.log(a + b);   // 11
console.log(a - b);   // 5
console.log(a * b);   // 24
console.log(a / b);   // 2.666...
console.log(a % b);   // 2  (үлдэгдэл)

// Харьцуулалт нь boolean буцаана
console.log(a > b);   // true
console.log(a === b); // false
console.log(a !== b); // true

// === (хатуу тэнцүү) vs == (зөөлөн)
console.log(5 === "5"); // false (төрөл өөр)
console.log(5 == "5");  // true  (хувиргадаг — болгоомжтой!)
`;

const GRADE_JS = `const score = 78;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Дүн: " + grade); // "Дүн: C"

// Ternary хувилбар — тэнцсэн эсэх
const status = score >= 60 ? "Тэнцсэн" : "Унасан";
console.log(status); // "Тэнцсэн"
`;

export default function Lesson18() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-18 · оператор ба нөхцөл</>}
        title={
          <>
            Шийдвэр
            <br />
            гаргах код
            <Cursor />
          </>
        }
        subtitle="Код нь зөвхөн дарааллаар ажиллахаас гадна «хэрэв … бол …» гэж шийдвэр гаргаж чадна. Өнөөдөр оператор, харьцуулалт, if/else, switch, ternary үзнэ."
        stages={
          <>
            <span>01 · Үндэс</span>
            <span className="sep">→</span>
            <span className="on">02 · JavaScript</span>
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
              { idx: "✓", title: "Хувьсагч", desc: "let / const." },
              {
                idx: "✓",
                title: "Төрлүүд",
                desc: "string, number, boolean…",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Эдгээр утгаар тооцоолж, шийдвэр гаргах.",
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
                title: "Операторууд",
                desc: "Арифметик, харьцуулалт, логик, truthy/falsy.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "02",
                title: "Нөхцөл",
                desc: "if / else if / else, switch, ternary.",
              },
              {
                idx: "★",
                title: "4 дасгал",
                desc: "Хэсэг бүрт 2 — нийт 4.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — ОПЕРАТОРУУД
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Операторууд"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Операторууд ба
            <br />
            харьцуулалт
          </>
        }
        lead="Арифметик, оноох, харьцуулах, логик операторууд ба «truthy / falsy» гэсэн ойлголтыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт: оператор"
        page="05"
        total={TOTAL}
        term="Оператор"
        def={
          <>
            <b>Оператор</b> нь утгуудтай үйлдэл хийдэг тэмдэгт. Арифметик (
            <code>+ - * / %</code>), харьцуулах (<code>&gt; &lt; === !==</code>),
            логик (<code>&amp;&amp; || !</code>). Харьцуулалт нь үргэлж{" "}
            <code>boolean</code> буцаана.
          </>
        }
        note="+ − * / % · === · && || !"
      />

      {/* 06 · ОПЕРАТОРЫН ТӨРӨЛ */}
      <Slide
        label="операторын төрөл"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 оператор", topic: "төрлүүд" }}
      >
        <Frame>
          <Eyebrow className="anim">Бүлгүүд</Eyebrow>
          <h2 className="slide-title anim anim-2">Операторын төрлүүд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Бүлэг", width: "32%" }, { head: "Жишээ" }]}
            rows={[
              ["Арифметик", "+  −  *  /  %  (үлдэгдэл)"],
              ["Оноох", "=  +=  −=  *=  ++  −−"],
              ["Харьцуулах", ">  <  >=  <=  ===  !=="],
              ["Логик", "&&  (ба)  ||  (эсвэл)  !  (үгүй)"],
            ]}
          />
          <CodeCaption>
            <code>===</code> нь <b>төрөл ба утгыг</b> хоёуланг шалгана —{" "}
            <code>==</code>-аас илүү найдвартай тул <b>үргэлж ===</b> ашигла.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · TRUTHY / FALSY */}
      <Slide
        label="truthy / falsy"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 оператор", topic: "truthy / falsy" }}
      >
        <Frame>
          <Eyebrow className="anim">Boolean-д хувирах</Eyebrow>
          <h2 className="slide-title anim anim-2">Truthy ба Falsy</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Falsy (худал)", width: "50%" }, { head: "Truthy (үнэн)" }]}
            rows={[
              ["false, 0", "Бусад бүх тоо (1, −5)"],
              ['"" (хоосон текст)', '"a", " " (текст)'],
              ["null, undefined", "[], {} (хоосон ч гэсэн)"],
              ["NaN", "Бараг бүх зүйл truthy"],
            ]}
          />
          <CodeCaption>
            Нөхцөлд тоо/текст тавихад JS түүнийг <b>truthy эсэх</b>-ийг шалгана.{" "}
            Зөвхөн 6 falsy утгыг л санаж аваарай.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Тооны машин console дээр"
        tasks={[
          <>
            <code>a = 8</code>, <code>b = 3</code> гэж зарлаад{" "}
            <code>+ − * / %</code> бүгдийн үр дүнг хэвл.
          </>,
          <>
            <code>a {">"} b</code>, <code>a === b</code>, <code>a !== b</code>-г
            хэвлэж, boolean буцааж буйг ажигла.
          </>,
          <>
            <code>5 === &quot;5&quot;</code> ба <code>5 == &quot;5&quot;</code>-
            ийг хэвлээд, яагаад ялгаатай байгааг тайлбарла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "calc.js", lang: "js", code: CALC_JS }]}
          />
        }
      />

      {/* 09 · ЛОГИК ОПЕРАТОР */}
      <Slide
        label="логик оператор"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 оператор", topic: "&& || !" }}
      >
        <Frame>
          <Eyebrow className="anim">Нөхцөлүүдийг нэгтгэх</Eyebrow>
          <h2 className="slide-title anim anim-2">Логик операторууд</h2>
          <CodeWindow
            numbered
            filename="logic.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>age</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>20</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.com>// && — хоёулаа үнэн байх ёстой</T.com>
            </Line>
            <Line state="hl">
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>age</T.attr> <T.punct>&gt;=</T.punct> <T.num>18</T.num>{" "}
              <T.punct>&amp;&amp;</T.punct> <T.attr>age</T.attr>{" "}
              <T.punct>&lt;</T.punct> <T.num>65</T.num>
              <T.punct>);</T.punct> <T.com>// true</T.com>
            </Line>
            <Line>
              <T.com>// || — ядаж нэг нь үнэн</T.com>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>age</T.attr> <T.punct>&lt;</T.punct> <T.num>13</T.num>{" "}
              <T.punct>||</T.punct> <T.attr>age</T.attr> <T.punct>&gt;</T.punct>{" "}
              <T.num>60</T.num>
              <T.punct>);</T.punct> <T.com>// false</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>!</code> нь boolean-ийг эсрэгээр эргүүлнэ:{" "}
            <code>!true === false</code>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Логик ба truthy дасгал"
        tasks={[
          <>
            <code>age</code> хувьсагч зарлаад, <code>age &gt;= 18 &amp;&amp; age
            &lt; 65</code> «насанд хүрсэн ажилтан эсэх»-ийг хэвл.
          </>,
          <>
            Доорх утгуудыг тус бүрд нь <code>Boolean(x)</code>-оор шалга:{" "}
            <code>0</code>, <code>&quot;&quot;</code>, <code>&quot;a&quot;</code>
            , <code>null</code>, <code>42</code>.
          </>,
          <>
            <code>!</code>-ийг ашиглан нэг boolean утгыг эсрэгээр нь хэвл.
          </>,
        ]}
        hints={[
          "Boolean(0) → false, Boolean(\"a\") → true.",
          "Falsy 6: false, 0, \"\", null, undefined, NaN.",
          "&& бол «ба», || бол «эсвэл».",
        ]}
        time="⏱ 10 минут"
      />

      {/* ============================================================
          ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="if / else, switch, ternary"
      />

      {/* ============================================================
          ХЭСЭГ 2 — НӨХЦӨЛ
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Нөхцөл"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Нөхцөлт
            <br />
            салаалалт
          </>
        }
        lead="if / else if / else-ээр кодын урсгалыг салаалуулж, switch ба ternary гэсэн товч хувилбаруудыг үзнэ."
      />

      {/* 13 · IF / ELSE */}
      <Slide
        label="if / else"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 нөхцөл", topic: "if / else" }}
      >
        <Frame>
          <Eyebrow className="anim">Хэрэв … бол …</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>if / else if / else</code>
          </h2>
          <CodeWindow
            numbered
            filename="if.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 30 }}
          >
            <Line>
              <T.kw>if</T.kw> <T.punct>(</T.punct>
              <T.attr>hour</T.attr> <T.punct>&lt;</T.punct> <T.num>12</T.num>
              <T.punct>) {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.str>&quot;Өглөөний мэнд&quot;</T.str>
              <T.punct>);</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct> <T.kw>else if</T.kw> <T.punct>(</T.punct>
              <T.attr>hour</T.attr> <T.punct>&lt;</T.punct> <T.num>18</T.num>
              <T.punct>) {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.str>&quot;Өдрийн мэнд&quot;</T.str>
              <T.punct>);</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct> <T.kw>else</T.kw> <T.punct>{"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.str>&quot;Оройн мэнд&quot;</T.str>
              <T.punct>);</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Дээрээс доош шалгаж, <b>эхний үнэн</b> нөхцөлийн блокийг ажиллуулаад
            зогсоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · SWITCH ба TERNARY */}
      <Slide
        label="switch / ternary"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 нөхцөл", topic: "switch · ternary" }}
      >
        <Frame>
          <Eyebrow className="anim">Товч хувилбарууд</Eyebrow>
          <h2 className="slide-title anim anim-2">switch ба ternary</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Хэрэгсэл", width: "30%" }, { head: "Хэзээ хэрэглэх" }]}
            rows={[
              ["if / else", "Хүрээ, нийлмэл нөхцөл (>=, &&)."],
              ["switch", "Нэг утгыг олон тогтмол утгатай тааруулах."],
              ["ternary ?:", "Богино «нэг бол энэ, үгүй бол тэр»."],
            ]}
          />
          <CodeWindow
            filename="ternary.js"
            lang="js"
            className="anim anim-4"
            style={{ marginTop: 24 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>msg</T.attr> <T.punct>=</T.punct>{" "}
              <T.attr>age</T.attr> <T.punct>&gt;=</T.punct> <T.num>18</T.num>{" "}
              <T.punct>?</T.punct> <T.str>&quot;Тийм&quot;</T.str>{" "}
              <T.punct>:</T.punct> <T.str>&quot;Үгүй&quot;</T.str>
              <T.punct>;</T.punct>
            </Line>
          </CodeWindow>
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Дүнгийн систем"
        tasks={[
          <>
            <code>score</code> хувьсагч зарлаад <code>if / else if</code>-ээр{" "}
            90+ → A, 80+ → B, 70+ → C, 60+ → D, бусад → F гэж тооцоол.
          </>,
          <>
            Үр дүнг <code>&quot;Дүн: &quot; + grade</code> хэлбэрээр console-д
            хэвл.
          </>,
          <>
            <code>ternary</code>-аар <code>score &gt;= 60 ? &quot;Тэнцсэн&quot;
            : &quot;Унасан&quot;</code> гэж тооцоолж хэвл.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут · шийдлийн жишээ"
            files={[{ name: "grade.js", lang: "js", code: GRADE_JS }]}
          />
        }
      />

      {/* 16 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 нөхцөл", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Болгоомжлох</Eyebrow>
          <h2 className="slide-title anim anim-2">Нийтлэг алдаанууд</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "= vs ===",
                desc: "if (x = 5) бол оноох! if (x === 5) гэж шалга.",
              },
              {
                idx: "02",
                title: "== төрөл хувиргадаг",
                desc: "0 == \"\" → true гэх мэт гэнэтийн үр дүн. === ашигла.",
              },
              {
                idx: "03",
                title: "switch-д break мартах",
                desc: "break байхгүй бол доош «унаж» үргэлжилнэ.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 17 · ДАСГАЛ 4 (§2) */}
      <Exercise
        label="Дасгал 4"
        page="17"
        total={TOTAL}
        tag="Дасгал 4 · хэсэг 2"
        title="Гарагийн нэр (switch)"
        tasks={[
          <>
            <code>day</code> хувьсагчид 1–7 хүртэлх тоо өг.
          </>,
          <>
            <code>switch (day)</code>-ээр 1 → «Даваа» … 7 → «Ням» болгож
            хэвл. <code>break</code>-ийг мартуузай.
          </>,
          <>
            <code>default</code>-д «Буруу өдөр» гэж бич, дараа нь{" "}
            <code>day = 9</code> туршиж үз.
          </>,
        ]}
        hints={[
          "case 1: ... break; case 2: ... break;",
          "default нь бусад бүх тохиолдолд ажиллана.",
          "case-ийн утгыг === -ээр тааруулдаг.",
        ]}
        time="⏱ 10 минут"
      />

      {/* ============================================================
          ХУРААНГУЙ
          ============================================================ */}

      {/* 18 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="18"
        total={TOTAL}
        eyebrow="Хичээл 18 · юу сурсан"
        footer={{ tag: "erxes · хичээл 18", topic: "оператор ба нөхцөл" }}
        cards={[
          {
            num: "01",
            title: "Операторууд",
            desc: "Арифметик, харьцуулах, логик (&& || !).",
          },
          {
            num: "02",
            title: "=== vs ==",
            desc: "Үргэлж хатуу === ашигла.",
          },
          {
            num: "03",
            title: "truthy / falsy",
            desc: "6 falsy утга — бусад нь truthy.",
          },
          {
            num: "04",
            title: "Нөхцөл",
            desc: "if / else if / else, switch, ternary.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-18 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлд давталт (loop) үзэж, ижил кодыг олон удаа давтуулж сурна. Гэртээ дүнгийн системээ өргөтгөж туршаарай."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 18 — оператор ба нөхцөл</span>
          </>
        }
      />
    </Deck>
  );
}
