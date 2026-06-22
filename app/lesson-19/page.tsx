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
  title: "erxes · Хичээл 19 — Давталт",
};

/**
 * ХИЧЭЭЛ 19 — Давталт (Loops)
 * 🎯 Ижил кодыг давталтаар олон удаа ажиллуулах.
 *
 *   ХЭСЭГ 1 — for давталт
 *   ЗАВСАРЛАГА
 *   ХЭСЭГ 2 — while, break/continue, nested
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const FOR_JS = `// 1-ээс 10 хүртэл хэвлэх
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1-ээс 100 хүртэлх нийлбэр
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Нийлбэр:", sum); // 5050

// Зөвхөн тэгш тоонууд
for (let i = 2; i <= 20; i += 2) {
  console.log(i); // 2, 4, 6 ... 20
}
`;

const FIZZ_JS = `// FizzBuzz — 1..30
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// continue — 7-г алгасах
for (let i = 1; i <= 10; i++) {
  if (i === 7) continue;
  console.log(i); // 7 гарахгүй
}
`;

export default function Lesson19() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-19 · давталт</>}
        title={
          <>
            Давталт —
            <br />
            loops
            <Cursor />
          </>
        }
        subtitle="Нэг кодыг гараар 100 удаа бичих үү? Үгүй. Давталт нь ижил үйлдлийг автоматаар давтуулдаг — программчлалын хамгийн хүчтэй хэрэгслийн нэг."
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
              { idx: "✓", title: "Оператор", desc: "+ − * / %, ===, && ||." },
              { idx: "✓", title: "Нөхцөл", desc: "if / else, switch, ternary." },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Кодыг олон удаа давтуулах — for, while.",
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
                title: "for давталт",
                desc: "Эхлэл, нөхцөл, алхам — гурван хэсэг.",
              },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              {
                idx: "02",
                title: "while ба удирдлага",
                desc: "while, do…while, break / continue, nested.",
              },
              { idx: "★", title: "4 дасгал", desc: "Хэсэг бүрт 2 — нийт 4." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — FOR
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ for"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            for
            <br />
            давталт
          </>
        }
        lead="Тодорхой тооны удаа давтахад хамгийн түгээмэл хэрэглэгддэг for давталтын гурван хэсгийг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт: давталт"
        page="05"
        total={TOTAL}
        term="for давталт"
        def={
          <>
            <b>Давталт</b> нь кодын блокыг нөхцөл үнэн байх хооронд дахин дахин
            ажиллуулна. <code>for</code> нь гурван хэсэгтэй:{" "}
            <i>эхлэл</i> (<code>let i = 0</code>), <i>нөхцөл</i> (
            <code>i &lt; 10</code>), <i>алхам</i> (<code>i++</code>).
          </>
        }
        note="эхлэл · нөхцөл · алхам"
      />

      {/* 06 · FOR БҮТЭЦ */}
      <Slide
        label="for бүтэц"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 for", topic: "гурван хэсэг" }}
      >
        <Frame>
          <Eyebrow className="anim">Бүтэц</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>for</code> давталт
          </h2>
          <CodeWindow
            numbered
            filename="for.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line state="hl">
              <T.kw>for</T.kw> <T.punct>(</T.punct>
              <T.kw>let</T.kw> <T.attr>i</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>1</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr> <T.punct>&lt;=</T.punct>{" "}
              <T.num>5</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr>
              <T.punct>++) {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>i</T.attr>
              <T.punct>);</T.punct> <T.com>// 1, 2, 3, 4, 5</T.com>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>i</code> бол <i>тоолуур</i>. Бүр давталтад <code>i++</code> 1-
            ээр өсгөж, <code>i &lt;= 5</code> худал болоход зогсоно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · ХУРИМТЛАЛ */}
      <Slide
        label="хуримтлал"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 for", topic: "нийлбэр хуримтлуулах" }}
      >
        <Frame>
          <Eyebrow className="anim">Түгээмэл хэв маяг</Eyebrow>
          <h2 className="slide-title anim anim-2">Нийлбэр хуримтлуулах</h2>
          <CodeWindow
            numbered
            filename="sum.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>let</T.kw> <T.attr>sum</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>0</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.kw>for</T.kw> <T.punct>(</T.punct>
              <T.kw>let</T.kw> <T.attr>i</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>1</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr> <T.punct>&lt;=</T.punct>{" "}
              <T.num>100</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr>
              <T.punct>++) {"{"}</T.punct>
            </Line>
            <Line indent={2} state="hl">
              <T.attr>sum</T.attr> <T.punct>+=</T.punct> <T.attr>i</T.attr>
              <T.punct>;</T.punct> <T.com>// sum = sum + i</T.com>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>sum</T.attr>
              <T.punct>);</T.punct> <T.com>// 5050</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Давталтаас <b>гадна</b> хувьсагч зарлаж, <b>дотор</b> нь хуримтлуулна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="for-оор тоолох"
        tasks={[
          <>
            <code>for</code>-оор 1-ээс 10 хүртэлх тоог console-д хэвл.
          </>,
          <>
            1-ээс 100 хүртэлх бүх тооны нийлбэрийг хуримтлуулж хэвл (хариу:
            5050).
          </>,
          <>
            <code>i += 2</code> ашиглан 2-оос 20 хүртэлх зөвхөн тэгш тоонуудыг
            хэвл.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "for.js", lang: "js", code: FOR_JS }]}
          />
        }
      />

      {/* 09 · УРВУУ ДАВТАЛТ */}
      <Slide
        label="урвуу давталт"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 for", topic: "буурах давталт" }}
      >
        <Frame>
          <Eyebrow className="anim">Чиглэлээ сонгох</Eyebrow>
          <h2 className="slide-title anim anim-2">Буурах давталт</h2>
          <CodeWindow
            numbered
            filename="down.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.kw>for</T.kw> <T.punct>(</T.punct>
              <T.kw>let</T.kw> <T.attr>i</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>5</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr> <T.punct>&gt;=</T.punct>{" "}
              <T.num>1</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr>
              <T.punct>--) {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>i</T.attr>
              <T.punct>);</T.punct> <T.com>// 5, 4, 3, 2, 1</T.com>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Эхлэлийг том, нөхцөлийг <code>&gt;=</code>, алхмыг{" "}
            <code>i--</code> болгоход давталт буурна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Үржвэрийн хүснэгт"
        tasks={[
          <>
            <code>for</code>-оор 7-гийн үржвэрийн хүснэгтийг хэвл:{" "}
            <code>7 x 1 = 7</code> … <code>7 x 10 = 70</code>.
          </>,
          <>
            10-аас 1 хүртэл <b>буурах</b> давталтаар тоо хэвл.
          </>,
          <>
            <code>n = 6</code> өгөөд <code>for</code>-оор{" "}
            <code>n!</code> (factorial: <code>6*5*4*3*2*1 = 720</code>)-ийг
            тооцоол.
          </>,
        ]}
        hints={[
          "Хэвлэхдээ: console.log(\"7 x \" + i + \" = \" + 7 * i).",
          "Буурах: let i = 10; i >= 1; i--.",
          "Factorial-д let result = 1 зарлаж result *= i.",
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
        resumeTopic="while, break/continue, nested loop"
      />

      {/* ============================================================
          ХЭСЭГ 2 — WHILE + УДИРДЛАГА
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ while"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            while ба
            <br />
            удирдлага
          </>
        }
        lead="Хэдэн удаа давтахаа урьдчилан мэдэхгүй үед while, давталтыг удирдах break / continue ба nested loop-ийг үзнэ."
      />

      {/* 13 · WHILE */}
      <Slide
        label="while"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 while", topic: "while · do…while" }}
      >
        <Frame>
          <Eyebrow className="anim">Нөхцөл үнэн байх хооронд</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>while</code> давталт
          </h2>
          <CodeWindow
            numbered
            filename="while.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>let</T.kw> <T.attr>n</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>1</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.kw>while</T.kw> <T.punct>(</T.punct>
              <T.attr>n</T.attr> <T.punct>&lt;=</T.punct> <T.num>3</T.num>
              <T.punct>) {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>n</T.attr>
              <T.punct>);</T.punct>
            </Line>
            <Line indent={2} state="hl">
              <T.attr>n</T.attr>
              <T.punct>++;</T.punct> <T.com>// ЗААВАЛ өсгө — эс бөгөөс хязгааргүй!</T.com>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>while</code>-д тоолуурыг <b>дотор нь өөрөө</b> өөрчлөх ёстой,
            эс бөгөөс хязгааргүй давталтад орно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · BREAK / CONTINUE / NESTED */}
      <Slide
        label="break / continue"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 while", topic: "break · continue" }}
      >
        <Frame>
          <Eyebrow className="anim">Урсгалыг удирдах</Eyebrow>
          <h2 className="slide-title anim anim-2">break, continue, nested</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Түлхүүр үг", width: "30%" }, { head: "Үйлдэл" }]}
            rows={[
              ["break", "Давталтаас бүрэн гарна."],
              ["continue", "Энэ давталтыг алгасаж, дараагийнх руу."],
              ["nested loop", "Давталт доторх давталт (хүснэгт, матриц)."],
              ["while vs for", "Тоо мэдэхгүй → while; мэддэг → for."],
            ]}
          />
          <CodeCaption>
            Nested loop-д гадна давталт нэг алхах тутамд дотор давталт бүхэлдээ
            ажиллана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="FizzBuzz + continue"
        tasks={[
          <>
            1-ээс 30 хүртэл: 3-д хуваагдвал «Fizz», 5-д «Buzz», хоёуланд нь
            «FizzBuzz», бусад тохиолдолд тоог хэвл.
          </>,
          <>
            <b>Зөвлөгөө:</b> 15-д хуваагдахыг <i>эхэнд</i> шалга, дараа нь 3, 5.
          </>,
          <>
            Тусдаа давталтад <code>continue</code>-ээр 1–10-аас зөвхөн 7-г
            алгасаж хэвл.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут · шийдлийн жишээ"
            files={[{ name: "fizzbuzz.js", lang: "js", code: FIZZ_JS }]}
          />
        }
      />

      {/* 16 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 while", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Болгоомжлох</Eyebrow>
          <h2 className="slide-title anim anim-2">Давталтын нийтлэг алдаа</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Хязгааргүй давталт",
                desc: "while-д тоолуур өсгөхгүй бол хөтөч царцана.",
              },
              {
                idx: "02",
                title: "Off-by-one",
                desc: "< vs <= хольдог — нэгээр илүү/дутуу давтана.",
              },
              {
                idx: "03",
                title: "Гадна/дотор хольдох",
                desc: "Хуримтлуулагчийг давталтын дотор тэглэх алдаа.",
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
        title="Nested loop — од зурах"
        tasks={[
          <>
            Гадна давталт 1–5, дотор давталтаар тухайн мөрөнд <code>i</code>{" "}
            ширхэг <code>*</code> хэвлэж гурвалжин үүсгэ.
          </>,
          <>
            <code>while</code>-аар 10-аас 0 хүртэл 2-оор бууруулж хэвл.
          </>,
          <>
            <code>break</code> ашиглан 1–100-аас эхний 3-д ба 7-д <b>зэрэг</b>{" "}
            хуваагдах тоог олмогц давталтаас гар.
          </>,
        ]}
        hints={[
          "Мөр бүрд: let row = \"\"; дотор давталтад row += \"*\".",
          "while-д тоолуурыг i -= 2 гэж бууруул.",
          "if (i % 3 === 0 && i % 7 === 0) { ...; break; }.",
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
        eyebrow="Хичээл 19 · юу сурсан"
        footer={{ tag: "erxes · хичээл 19", topic: "давталт" }}
        cards={[
          {
            num: "01",
            title: "for",
            desc: "Эхлэл; нөхцөл; алхам — тоо мэдэгдэх үед.",
          },
          {
            num: "02",
            title: "while",
            desc: "Нөхцөл үнэн байх хооронд — тоолуурыг өсгө.",
          },
          {
            num: "03",
            title: "break / continue",
            desc: "Давталтаас гарах / алгасах.",
          },
          {
            num: "04",
            title: "nested loop",
            desc: "Давталт доторх давталт — хүснэгт, бүтэц.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-19 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлд функц үзэж, кодоо нэрлэсэн, дахин ашиглах боломжтой хэсгүүдэд хуваана. Гэртээ FizzBuzz-аа өргөтгөж туршаарай."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 19 — давталт</span>
          </>
        }
      />
    </Deck>
  );
}
