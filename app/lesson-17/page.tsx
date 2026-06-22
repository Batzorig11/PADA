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
  title: "erxes · Хичээл 17 — JavaScript танилцах, хувьсагч, төрөл",
};

/**
 * ХИЧЭЭЛ 17 — JavaScript танилцах, хувьсагч, өгөгдлийн төрөл
 * 🎯 JS-ийг ажиллуулж, хувьсагч ба үндсэн (primitive) төрлүүдтэй ажиллах.
 *
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 — JS юу хийдэг, script, console
 *   ~1:20–1:40  ЗАВСАРЛАГА
 *   ~1:40–2:50  ХЭСЭГ 2 — Хувьсагч ба өгөгдлийн төрөл
 *   ~2:50–3:00  Хураангуй ба асуулт
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const HELLO_HTML = `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <title>Анхны JS</title>
  </head>
  <body>
    <h1>JavaScript эхлэл</h1>

    <!-- Скриптийг body-ийн төгсгөлд тавина -->
    <script src="app.js"></script>
  </body>
</html>
`;

const HELLO_JS = `// 1) Console дээр мессеж хэвлэх
console.log("Сайн уу, JavaScript!");

// 2) Тооцоолол хийгээд хэвлэх
console.log(2 + 3);

// 3) Дэлгэц дээр alert харуулах
alert("Эхний скрипт ажиллалаа!");
`;

const VARS_JS = `// Профайлын мэдээлэл — тохирох төрлийг сонго
const name = "Болд";          // string
let age = 25;                  // number
const isStudent = true;        // boolean
let course = "Frontend";       // string

// typeof-оор төрлийг шалга
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"

// let-ийг дахин оноож болно
age = 26;
console.log(name + " — " + age + " настай");
// "Болд — 26 настай"
`;

export default function Lesson17() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-17 · javascript эхлэл</>}
        title={
          <>
            JavaScript
            <br />
            танилцах
            <Cursor />
          </>
        }
        subtitle="Сар 2 эхэллээ! Одоо хуудсаа зөвхөн харагддаг биш, бодитоор ажилладаг болгоно. Өнөөдөр JS-ийг ажиллуулж, хувьсагч ба үндсэн төрлүүдийг үзнэ."
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
          <Eyebrow className="anim">Өмнөх сараас</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              { idx: "✓", title: "HTML", desc: "Хуудасны бүтэц — «юу байна»." },
              { idx: "✓", title: "CSS", desc: "Харагдац — «яаж харагдах»." },
              {
                idx: "→",
                title: "JavaScript",
                desc: "Зан төлөв — «юу хийх, хэрхэн харьцах».",
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
                title: "JS юу хийдэг",
                desc: "script таг, console.log, эхний код.",
              },
              {
                idx: "—",
                title: "Завсарлага",
                desc: "Дунд нь 20 минут амарна.",
              },
              {
                idx: "02",
                title: "Хувьсагч ба төрөл",
                desc: "let / const, string / number / boolean, typeof.",
              },
              {
                idx: "★",
                title: "4 дасгал",
                desc: "Хэсэг бүрт 2 — нийт 4 гараар хийх дасгал.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — JS ЮУ ХИЙДЭГ
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ JS эхлэл"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            JS-ийг
            <br />
            ажиллуулах
          </>
        }
        lead="JavaScript юу хийдэг вэ, түүнийг хуудсанд хэрхэн холбож, console дээр анхны кодоо ажиллуулахыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ: JS */}
      <KeyTerm
        label="Гол ойлголт: JavaScript"
        page="05"
        total={TOTAL}
        term="JavaScript"
        def={
          <>
            <b>JavaScript</b> бол хөтөч дотор ажилладаг програмчлалын хэл. HTML
            бүтэц, CSS харагдацыг өгдөг бол JS нь хуудсыг <i>интерактив</i>{" "}
            болгодог — товч дарах, өгөгдөл өөрчлөх, тооцоолол хийх.
          </>
        }
        note="хөтчийн доторх хэл"
      />

      {/* 06 · SCRIPT ТАГ */}
      <Slide
        label="script таг"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 эхлэл", topic: "script холбох" }}
      >
        <Frame>
          <Eyebrow className="anim">JS-ийг хуудсанд холбох</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>&lt;script&gt;</code> таг
          </h2>
          <CodeWindow
            numbered
            filename="index.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct> текстийн дараа
            </Line>
            <Line state="hl">
              <T.punct>&lt;</T.punct>
              <T.tag>script</T.tag> <T.attr>src</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;app.js&quot;</T.str>
              <T.punct>&gt;&lt;/</T.punct>
              <T.tag>script</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Гаднах файлыг <code>src</code>-ээр холбоно. Скриптийг ихэвчлэн{" "}
            <code>&lt;/body&gt;</code>-ийн өмнө тавьдаг — ингэснээр HTML эхэлж
            ачаалагдана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · CONSOLE.LOG */}
      <Slide
        label="console.log"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 эхлэл", topic: "console" }}
      >
        <Frame>
          <Eyebrow className="anim">Хөгжүүлэгчийн анхны багаж</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>console.log()</code>
          </h2>
          <CodeWindow
            numbered
            filename="app.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.str>&quot;Сайн уу!&quot;</T.str>
              <T.punct>);</T.punct>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.num>2</T.num> <T.punct>+</T.punct> <T.num>3</T.num>
              <T.punct>);</T.punct> <T.com>// 5</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>console.log()</code> нь утгыг <b>DevTools-ийн Console</b> (F12)
            таб дээр хэвлэдэг — кодоо шалгах гол арга.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Анхны скриптээ ажиллуул"
        tasks={[
          <>
            <code>index.html</code> үүсгэж, <code>&lt;/body&gt;</code>-ийн өмнө{" "}
            <code>&lt;script src=&quot;app.js&quot;&gt;</code> холбо.
          </>,
          <>
            <code>app.js</code>-д <code>console.log()</code>-оор «Сайн уу,
            JavaScript!» гэж хэвл.
          </>,
          <>
            <code>2 + 3</code>-ыг тооцоолж console-д хэвлээд, DevTools (F12) →
            Console дээр үр дүнг хар.
          </>,
          <>
            <code>alert(&quot;...&quot;)</code>-аар дэлгэц дээр мессеж гарга.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[
              { name: "index.html", lang: "html", code: HELLO_HTML },
              { name: "app.js", lang: "js", code: HELLO_JS },
            ]}
          />
        }
      />

      {/* 09 · CONSOLE METHODS */}
      <Slide
        label="console аргууд"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 эхлэл", topic: "console аргууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Console-ийн бусад арга</Eyebrow>
          <h2 className="slide-title anim anim-2">Туслах аргууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Арга", width: "38%" }, { head: "Юунд хэрэгтэй" }]}
            rows={[
              ["console.log()", "Энгийн утга хэвлэх."],
              ["console.warn()", "Шар анхааруулга харуулах."],
              ["console.error()", "Улаан алдаа харуулах."],
              ["console.table()", "Массив/объектыг хүснэгтээр харуулах."],
            ]}
          />
          <CodeCaption>
            Эхлэхдээ <code>console.log()</code> хангалттай — бусдыг нь сүүлд
            хэрэгтэй үед хэрэглэнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Console-оор тооцоолох"
        tasks={[
          <>
            Console дээр өөрийнхөө нэр, насыг тус тусад нь хэвл.
          </>,
          <>
            Нэг жилд хэдэн цаг байдгийг тооцоол:{" "}
            <code>365 * 24</code> гэж console-д хэвл.
          </>,
          <>
            <code>console.warn()</code> ба <code>console.error()</code>-ийг тус
            бүрд нь нэг удаа дуудаж, өнгөний ялгааг ажигла.
          </>,
        ]}
        hints={[
          "Текстийг хашилтанд бичнэ: console.log(\"Болд\").",
          "Тоог хашилтгүй бичнэ: console.log(365 * 24).",
          "Console (F12)-оо нээгээд эхэл.",
        ]}
        time="⏱ 10 минут"
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="Хувьсагч ба өгөгдлийн төрөл"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — ХУВЬСАГЧ БА ТӨРӨЛ
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Хувьсагч"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Хувьсагч ба
            <br />
            өгөгдлийн төрөл
          </>
        }
        lead="Өгөгдлийг санах ойд хадгалах хувьсагч, тэдгээрийн төрлүүд (string, number, boolean…) ба typeof-ийг үзнэ."
      />

      {/* 13 · ГОЛ ОЙЛГОЛТ: ХУВЬСАГЧ */}
      <KeyTerm
        label="Гол ойлголт: хувьсагч"
        page="13"
        total={TOTAL}
        term="let ба const"
        def={
          <>
            <b>Хувьсагч</b> нь өгөгдлийг нэрлэж хадгалдаг «хайрцаг».{" "}
            <code>const</code> — утга нь өөрчлөгдөхгүй; <code>let</code> — дараа
            нь дахин оноож болно. <code>var</code> бол хуучин арга, өнөөдөр
            хэрэглэхгүй.
          </>
        }
        note="const · let · (var ✗)"
      />

      {/* 14 · ТӨРЛҮҮД */}
      <Slide
        label="төрлүүд"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 төрөл", topic: "primitive төрлүүд" }}
      >
        <Frame>
          <Eyebrow className="anim">Үндсэн (primitive) төрлүүд</Eyebrow>
          <h2 className="slide-title anim anim-2">Өгөгдлийн төрлүүд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Төрөл", width: "30%" }, { head: "Жишээ" }]}
            rows={[
              ["string", '"Болд", \'сайн уу\' — текст, хашилтанд.'],
              ["number", "25, 3.14, -7 — бүхэл ба бутархай."],
              ["boolean", "true / false — үнэн эсэх."],
              ["undefined", "Утга өгөөгүй хувьсагч."],
              ["null", "Зориуд «хоосон» гэж тавьсан утга."],
            ]}
          />
          <CodeCaption>
            <code>typeof x</code> нь хувьсагчийн төрлийг текстээр буцаана —{" "}
            жишээ нь <code>typeof 25</code> → <code>&quot;number&quot;</code>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · КОД: ХУВЬСАГЧ ОНООХ */}
      <Slide
        label="код"
        page="15"
        total={TOTAL}
        footer={{ tag: "§02 төрөл", topic: "let / const" }}
      >
        <Frame>
          <Eyebrow className="anim">Тунхаглах ба оноох</Eyebrow>
          <h2 className="slide-title anim anim-2">Хувьсагч үүсгэх</h2>
          <CodeWindow
            numbered
            filename="vars.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>name</T.attr> <T.punct>=</T.punct>{" "}
              <T.str>&quot;Болд&quot;</T.str>
              <T.punct>;</T.punct> <T.com>// string</T.com>
            </Line>
            <Line>
              <T.kw>let</T.kw> <T.attr>age</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>25</T.num>
              <T.punct>;</T.punct> <T.com>// number</T.com>
            </Line>
            <Line>
              <T.kw>const</T.kw> <T.attr>isStudent</T.attr> <T.punct>=</T.punct>{" "}
              <T.kw>true</T.kw>
              <T.punct>;</T.punct> <T.com>// boolean</T.com>
            </Line>
            <Line state="hl">
              <T.attr>age</T.attr> <T.punct>=</T.punct> <T.num>26</T.num>
              <T.punct>;</T.punct> <T.com>// let-ийг дахин оноож болно</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>const</code>-д дахин оноох гэвэл алдаа гарна. Өөрчлөгдөх утгад{" "}
            <code>let</code> ашигла.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="16"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Профайл хувьсагч"
        tasks={[
          <>
            Өөрийнхөө <code>name</code> (string), <code>age</code> (number),{" "}
            <code>isStudent</code> (boolean), <code>course</code> (string)
            хувьсагчдыг үүсгэ.
          </>,
          <>
            Аль нь өөрчлөгдөхгүй вэ — <code>const</code>, аль нь өөрчлөгдөж
            болох вэ — <code>let</code>-ийг зөв сонго.
          </>,
          <>
            <code>typeof</code>-оор төрөл бүрийг console-д хэвлэ.
          </>,
          <>
            <code>name + &quot; — &quot; + age</code> хэлбэрээр нэг мөр болгож
            хэвл.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "vars.js", lang: "js", code: VARS_JS }]}
          />
        }
      />

      {/* 17 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="17"
        total={TOTAL}
        footer={{ tag: "§02 төрөл", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Эхлэгчдийн алдаа</Eyebrow>
          <h2 className="slide-title anim anim-2">Болгоомжлох зүйлс</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Тоо vs текст",
                desc: '"5" + 3 = "53" (string), 5 + 3 = 8 (number).',
              },
              {
                idx: "02",
                title: "const дахин оноох",
                desc: "const-д утга дахин өгвөл TypeError гарна.",
              },
              {
                idx: "03",
                title: "Нэр оноохгүй ашиглах",
                desc: "Тунхаглаагүй хувьсагч → ReferenceError.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 18 · ДАСГАЛ 4 (§2) */}
      <Exercise
        label="Дасгал 4"
        page="18"
        total={TOTAL}
        tag="Дасгал 4 · хэсэг 2"
        title="Төрлийг таних"
        tasks={[
          <>
            <code>&quot;5&quot; + 3</code> ба <code>5 + 3</code>-ыг console-д
            хэвлээд, яагаад өөр гарч буйг тайлбарла.
          </>,
          <>
            Утга өгөөгүй <code>let x;</code> үүсгээд <code>typeof x</code>-ийг
            хэвл — юу гарах вэ?
          </>,
          <>
            <code>const</code> хувьсагчид дахин утга оноож үзээд, гарч буй
            алдааны нэрийг console дээр уншиж тэмдэглэ.
          </>,
        ]}
        hints={[
          "string + number → string болж нийлдэг (concatenation).",
          "Утга өгөөгүй бол typeof → \"undefined\".",
          "Алдааны нэрийг анхаар: TypeError, ReferenceError.",
        ]}
        time="⏱ 10 минут"
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      {/* 19 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="19"
        total={TOTAL}
        eyebrow="Хичээл 17 · юу сурсан"
        footer={{ tag: "erxes · хичээл 17", topic: "JS эхлэл" }}
        cards={[
          {
            num: "01",
            title: "JS холбох",
            desc: "<script src> + console.log() = эхний код.",
          },
          {
            num: "02",
            title: "Console",
            desc: "log / warn / error — кодоо шалгах багаж.",
          },
          {
            num: "03",
            title: "let / const",
            desc: "Өгөгдлийг нэрлэж хадгалах хувьсагч.",
          },
          {
            num: "04",
            title: "Төрлүүд",
            desc: "string, number, boolean, null, undefined + typeof.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-17 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлд оператор ба нөхцөл (if/else) үзэж, кодоо «шийдвэр гаргадаг» болгоно. Гэртээ console дээр хувьсагчуудаар тоглож үзээрэй."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 17 — JS танилцах, хувьсагч, төрөл</span>
          </>
        }
      />
    </Deck>
  );
}
