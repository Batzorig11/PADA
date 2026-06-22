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
  title: "erxes · Хичээл 20 — Функц",
};

/**
 * ХИЧЭЭЛ 20 — Функц (Functions)
 * 🎯 Дахин ашиглах боломжтой функц бичих.
 *
 *   ХЭСЭГ 1 — Функц зарлах, параметр, return
 *   ЗАВСАРЛАГА
 *   ХЭСЭГ 2 — Scope ба arrow function
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const FUNC_JS = `// Тэгш өнцөгтийн талбай
function area(width, height) {
  return width * height;
}
console.log(area(5, 3)); // 15

// Мэндчилгээ
function greet(name) {
  return "Сайн уу, " + name + "!";
}
console.log(greet("Болд")); // "Сайн уу, Болд!"

// Анхдагч утга (default parameter)
function greet2(name = "зочин") {
  return "Тавтай морил, " + name;
}
console.log(greet2());        // "Тавтай морил, зочин"
console.log(greet2("Сараа")); // "Тавтай морил, Сараа"
`;

const ARROW_JS = `// 1) Энгийн функц
function double(n) {
  return n * 2;
}

// 2) Функц илэрхийлэл
const triple = function (n) {
  return n * 3;
};

// 3) Arrow function — товч
const square = (n) => n * n;

console.log(double(4)); // 8
console.log(triple(4)); // 12
console.log(square(4)); // 16

// Хэд хэдэн параметртэй arrow
const add = (a, b) => a + b;
console.log(add(2, 5)); // 7
`;

export default function Lesson20() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-20 · функц</>}
        title={
          <>
            Функц —
            <br />
            дахин ашиглах код
            <Cursor />
          </>
        }
        subtitle="Функц нь кодыг нэрлэсэн, дахин ашиглаж болох багц болгож хувааж өгдөг. Нэг удаа бичээд, олон удаа дуудна — цэвэр кодын суурь."
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
              { idx: "✓", title: "Нөхцөл", desc: "if / else, switch." },
              { idx: "✓", title: "Давталт", desc: "for, while." },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Кодыг нэрлэж, багцлах — функц.",
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
                title: "Функц зарлах",
                desc: "Параметр, аргумент, return.",
              },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              {
                idx: "02",
                title: "Scope ба arrow",
                desc: "Хувьсагчийн хүрээ, arrow function.",
              },
              { idx: "★", title: "4 дасгал", desc: "Хэсэг бүрт 2 — нийт 4." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — ФУНКЦ ЗАРЛАХ
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Функц"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Функц зарлах,
            <br />
            параметр, return
          </>
        }
        lead="Функц хэрхэн зарлаж, оролт (параметр) авч, үр дүн (return) буцаадгийг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт: функц"
        page="05"
        total={TOTAL}
        term="Функц"
        def={
          <>
            <b>Функц</b> нь нэг ажил гүйцэтгэдэг, нэрлэсэн кодын блок.{" "}
            <i>Параметр</i>-ээр оролт авч, <code>return</code>-ээр үр дүн буцаана.
            Нэг удаа бичээд, дуудах бүрд дахин ажиллана.
          </>
        }
        note="оролт → боловсруулалт → return"
      />

      {/* 06 · ЗАРЛАХ ба ДУУДАХ */}
      <Slide
        label="зарлах · дуудах"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 функц", topic: "declaration · call" }}
      >
        <Frame>
          <Eyebrow className="anim">Тодорхойлох ба дуудах</Eyebrow>
          <h2 className="slide-title anim anim-2">Функц зарлах</h2>
          <CodeWindow
            numbered
            filename="func.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 30 }}
          >
            <Line>
              <T.kw>function</T.kw> <T.fn>area</T.fn>
              <T.punct>(</T.punct>
              <T.attr>width</T.attr>
              <T.punct>,</T.punct> <T.attr>height</T.attr>
              <T.punct>) {"{"}</T.punct>
            </Line>
            <Line indent={2} state="hl">
              <T.kw>return</T.kw> <T.attr>width</T.attr> <T.punct>*</T.punct>{" "}
              <T.attr>height</T.attr>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
            <Line>
              <T.com>// дуудах — аргумент дамжуулна</T.com>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.fn>area</T.fn>
              <T.punct>(</T.punct>
              <T.num>5</T.num>
              <T.punct>,</T.punct> <T.num>3</T.num>
              <T.punct>));</T.punct> <T.com>// 15</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>width, height</code> — <b>параметр</b> (зарлахад);{" "}
            <code>5, 3</code> — <b>аргумент</b> (дуудахад).
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · RETURN */}
      <Slide
        label="return"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 функц", topic: "return утга" }}
      >
        <Frame>
          <Eyebrow className="anim">Утга буцаах</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>return</code> гэж юу вэ?
          </h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Зүйл", width: "38%" }, { head: "Тайлбар" }]}
            rows={[
              ["return утга", "Функцийн үр дүнг гадагш буцаана."],
              ["return-ийн дараах код", "Ажиллахгүй — функц тэндээ зогсоно."],
              ["return байхгүй", "Функц undefined буцаана."],
              ["console.log ≠ return", "log хэвлэдэг; return утга өгдөг."],
            ]}
          />
          <CodeCaption>
            <code>return</code>-гүй функц зүгээр л үйлдэл хийнэ;{" "}
            <code>return</code>-тэй функцийн үр дүнг хувьсагчид хадгалж болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Анхны функцууд"
        tasks={[
          <>
            <code>area(width, height)</code> функц бичиж, тэгш өнцөгтийн талбайг
            буцаа.
          </>,
          <>
            <code>greet(name)</code> функц бичиж «Сайн уу, [нэр]!» текст буцаа.
          </>,
          <>
            <code>greet2(name = &quot;зочин&quot;)</code> анхдагч утгатай
            функц бичиж, аргументгүй ба аргументтэй хоёуланг дууд.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "func.js", lang: "js", code: FUNC_JS }]}
          />
        }
      />

      {/* 09 · ОЛОН ПАРАМЕТР */}
      <Slide
        label="олон параметр"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 функц", topic: "логик + return" }}
      >
        <Frame>
          <Eyebrow className="anim">Нөхцөл + функц</Eyebrow>
          <h2 className="slide-title anim anim-2">Логик буцаах функц</h2>
          <CodeWindow
            numbered
            filename="isAdult.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.kw>function</T.kw> <T.fn>isAdult</T.fn>
              <T.punct>(</T.punct>
              <T.attr>age</T.attr>
              <T.punct>) {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.kw>return</T.kw> <T.attr>age</T.attr> <T.punct>&gt;=</T.punct>{" "}
              <T.num>18</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.fn>isAdult</T.fn>
              <T.punct>(</T.punct>
              <T.num>20</T.num>
              <T.punct>));</T.punct> <T.com>// true</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Харьцуулалтын үр дүн (boolean)-ийг шууд <code>return</code> хийж
            болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Туслах функцууд"
        tasks={[
          <>
            <code>isEven(n)</code> функц бичиж, тоо тэгш эсэхийг (boolean) буцаа.
          </>,
          <>
            <code>max(a, b)</code> функц бичиж, томыг нь буцаа (
            <code>if</code> эсвэл ternary).
          </>,
          <>
            <code>celsiusToF(c)</code> функц бичиж,{" "}
            <code>c * 9/5 + 32</code>-оор Фаренгейт болго.
          </>,
        ]}
        hints={[
          "isEven: return n % 2 === 0.",
          "max: return a > b ? a : b.",
          "Дуудаж console.log хийж шалга.",
        ]}
        time="⏱ 12 минут"
      />

      {/* ============================================================
          ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="Scope ба arrow function"
      />

      {/* ============================================================
          ХЭСЭГ 2 — SCOPE + ARROW
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Scope · arrow"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Scope ба
            <br />
            arrow function
          </>
        }
        lead="Хувьсагч хаана «харагдах» вэ (scope), функц бичих өөр хэлбэрүүд ба орчин үеийн arrow function-ийг үзнэ."
      />

      {/* 13 · SCOPE */}
      <KeyTerm
        label="Гол ойлголт: scope"
        page="13"
        total={TOTAL}
        term="Scope (хүрээ)"
        def={
          <>
            <b>Scope</b> нь хувьсагч хаана хүчинтэй болохыг заана. Функцийн{" "}
            <i>дотор</i> зарласан хувьсагч зөвхөн тэр функц дотор «харагдана»
            (local). Гадна зарласан нь хаа сайгүй харагдана (global).
          </>
        }
        note="local · global"
      />

      {/* 14 · ФУНКЦИЙН 3 ХЭЛБЭР */}
      <Slide
        label="3 хэлбэр"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 arrow", topic: "declaration · expression · arrow" }}
      >
        <Frame>
          <Eyebrow className="anim">Нэг функц — гурван бичлэг</Eyebrow>
          <h2 className="slide-title anim anim-2">Функц бичих хэлбэрүүд</h2>
          <CodeWindow
            numbered
            filename="forms.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 24 }}
          >
            <Line>
              <T.com>// 1) Declaration</T.com>
            </Line>
            <Line>
              <T.kw>function</T.kw> <T.fn>double</T.fn>
              <T.punct>(</T.punct>
              <T.attr>n</T.attr>
              <T.punct>) {"{"} </T.punct>
              <T.kw>return</T.kw> <T.attr>n</T.attr> <T.punct>*</T.punct>{" "}
              <T.num>2</T.num>
              <T.punct>; {"}"}</T.punct>
            </Line>
            <Line>
              <T.com>// 2) Expression</T.com>
            </Line>
            <Line>
              <T.kw>const</T.kw> <T.fn>triple</T.fn> <T.punct>=</T.punct>{" "}
              <T.kw>function</T.kw> <T.punct>(</T.punct>
              <T.attr>n</T.attr>
              <T.punct>) {"{"} </T.punct>
              <T.kw>return</T.kw> <T.attr>n</T.attr> <T.punct>*</T.punct>{" "}
              <T.num>3</T.num>
              <T.punct>; {"}"};</T.punct>
            </Line>
            <Line state="hl">
              <T.com>// 3) Arrow — хамгийн товч</T.com>
            </Line>
            <Line state="hl">
              <T.kw>const</T.kw> <T.fn>square</T.fn> <T.punct>=</T.punct>{" "}
              <T.punct>(</T.punct>
              <T.attr>n</T.attr>
              <T.punct>)</T.punct> <T.punct>=&gt;</T.punct> <T.attr>n</T.attr>{" "}
              <T.punct>*</T.punct> <T.attr>n</T.attr>
              <T.punct>;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Arrow function-д нэг мөр <code>return</code> бол хаалт ба{" "}
            <code>return</code> хоёрыг хасч болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Arrow function руу хөрвүүлэх"
        tasks={[
          <>
            <code>double</code>, <code>triple</code>, <code>square</code>{" "}
            функцийг гурван хэлбэрээр (declaration / expression / arrow) бич.
          </>,
          <>
            <code>add(a, b)</code>-г <b>arrow</b> хэлбэрээр нэг мөрөөр бич.
          </>,
          <>
            Бүгдийг дуудаж <code>console.log</code>-оор үр дүнг шалга.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 18 минут · шийдлийн жишээ"
            files={[{ name: "arrow.js", lang: "js", code: ARROW_JS }]}
          />
        }
      />

      {/* 16 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 arrow", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Болгоомжлох</Eyebrow>
          <h2 className="slide-title anim anim-2">Функцийн нийтлэг алдаа</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "return мартах",
                desc: "Утга буцаахгүй бол хувьсагч undefined болно.",
              },
              {
                idx: "02",
                title: "Дуудахдаа () мартах",
                desc: "greet vs greet() — эхнийх нь функцийг өөрийг нь заана.",
              },
              {
                idx: "03",
                title: "Local-ыг гадна хэрэглэх",
                desc: "Функц доторх хувьсагч гадна харагдахгүй.",
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
        title="Scope-ийг туршиж ойлгох"
        tasks={[
          <>
            Функц <b>дотор</b> <code>let secret = 42</code> зарлаад, функцийн{" "}
            <b>гадна</b> <code>console.log(secret)</code> хийж — ямар алдаа
            гарахыг тэмдэглэ.
          </>,
          <>
            <code>discount(price, percent)</code> arrow функц бичиж, хямдруулсан
            үнийг буцаа.
          </>,
          <>
            Дотроо <code>discount</code>-ийг дуудаж эцсийн нийт үнийг тооцоолдог{" "}
            <code>total(price)</code> функц бич (функц дотроос функц дуудах).
          </>,
        ]}
        hints={[
          "Local хувьсагчийг гадна дуудвал ReferenceError.",
          "discount = (price, percent) => price * (1 - percent / 100).",
          "Функцийг бусад функц дотроос дуудаж болно.",
        ]}
        time="⏱ 12 минут"
      />

      {/* ============================================================
          ХУРААНГУЙ
          ============================================================ */}

      {/* 18 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="18"
        total={TOTAL}
        eyebrow="Хичээл 20 · юу сурсан"
        footer={{ tag: "erxes · хичээл 20", topic: "функц" }}
        cards={[
          {
            num: "01",
            title: "Функц зарлах",
            desc: "function нэр(параметр) { ... }.",
          },
          {
            num: "02",
            title: "return",
            desc: "Үр дүнг буцаах — log-оос ялгаатай.",
          },
          {
            num: "03",
            title: "Scope",
            desc: "Local vs global хувьсагч.",
          },
          {
            num: "04",
            title: "Arrow function",
            desc: "const f = (x) => x * 2 — товч хэлбэр.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-20 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="7 хоног 5 дууслаа! Дараагийн долоо хоногт массив (array) үзэж, олон утгыг нэг хувьсагчид жагсааж сурна. Гэртээ туслах функцуудаа бичиж дадлагаж."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 20 — функц</span>
          </>
        }
      />
    </Deck>
  );
}
