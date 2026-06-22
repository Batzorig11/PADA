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
  title: "erxes · Хичээл 24 — Дадлага: жижиг даалгаврууд",
};

/**
 * ХИЧЭЭЛ 24 — Дадлага: жижиг даалгаврууд
 * 🎯 Массив/объект/алгоритмын дасгалаар логикоо бэхжүүлэх.
 *
 *   ХЭСЭГ 1 — String ба array асуудлууд
 *   ЗАВСАРЛАГА
 *   ХЭСЭГ 2 — Объект боловсруулах ба жижиг алгоритм
 */
const TOTAL = "18";

/* ===== Дасгалын бэлэн шийдэл ===== */

const STRING_JS = `// 1) Текстийг урвуу болгох
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("эрхэс")); // "сэхрэ"

// 2) Эгшиг тоолох
function countVowels(str) {
  const vowels = "аэиоуөүяёюе";
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}
console.log(countVowels("Сайн уу")); // 3

// 3) Массивын хамгийн их утга
function maxOf(arr) {
  return Math.max(...arr);
}
console.log(maxOf([4, 9, 2, 7])); // 9
`;

const OBJECT_JS = `const students = [
  { name: "Болд", grade: 85 },
  { name: "Сараа", grade: 72 },
  { name: "Тэмүүлэн", grade: 90 },
  { name: "Нараа", grade: 64 },
];

// 1) Дундаж дүн (reduce)
const avg =
  students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("Дундаж:", avg); // 77.75

// 2) Тэнцсэн (>= 70) оюутнуудын нэрс
const passed = students
  .filter((s) => s.grade >= 70)
  .map((s) => s.name);
console.log(passed); // ["Болд", "Сараа", "Тэмүүлэн"]

// 3) Хамгийн өндөр дүнтэй оюутан
const top = students.reduce((best, s) =>
  s.grade > best.grade ? s : best
);
console.log(top.name); // "Тэмүүлэн"
`;

export default function Lesson24() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-24 · дадлага</>}
        title={
          <>
            Дадлага —
            <br />
            логик бэхжүүлэх
            <Cursor />
          </>
        }
        subtitle="Шинэ ойлголт үзэхгүй — өмнө сурсан бүхнээ ажилд оруулна. String, массив, объект, жижиг алгоритмаар бодит асуудлуудыг шийдэж, логикоо бэхжүүлнэ."
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
          <Eyebrow className="anim">7 хоног 6-ийн төгсгөл</Eyebrow>
          <h2 className="slide-title anim anim-2">Юу ашиглах вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              { idx: "✓", title: "Давталт + функц", desc: "for, return." },
              { idx: "✓", title: "Массив + аргууд", desc: "map, filter, reduce." },
              {
                idx: "✓",
                title: "Объект",
                desc: "key/value, method, объектын массив.",
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
                title: "String ба массив",
                desc: "Текст боловсруулах, массивын асуудлууд.",
              },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              {
                idx: "02",
                title: "Объект ба алгоритм",
                desc: "Өгөгдөл боловсруулах, жижиг алгоритм.",
              },
              { idx: "★", title: "4 дасгал", desc: "Хэсэг бүрт 2 — нийт 4." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — STRING + ARRAY
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ String · array"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            String ба
            <br />
            массивын дасгал
          </>
        }
        lead="Текст ба массивтай ажиллах түгээмэл аргуудыг сэргээж, бодит асуудлуудыг алхам алхмаар шийднэ."
      />

      {/* 05 · STRING АРГУУД */}
      <KeyTerm
        label="Гол ойлголт: string аргууд"
        page="05"
        total={TOTAL}
        term="String аргууд"
        def={
          <>
            Текст нь олон <b>арга</b>-тай: <code>length</code>,{" "}
            <code>toUpperCase()</code>, <code>includes()</code>,{" "}
            <code>split()</code>, <code>slice()</code>. <code>split(&quot;&quot;)</code>{" "}
            нь текстийг тэмдэгтийн массив болгодог — массивын аргуудтай холбож
            болно.
          </>
        }
        note="split · join · slice · includes"
      />

      {/* 06 · STRING АРГА ХҮСНЭГТ */}
      <Slide
        label="string аргууд"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 string", topic: "түгээмэл аргууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Сэргээх</Eyebrow>
          <h2 className="slide-title anim anim-2">Түгээмэл string аргууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Арга", width: "38%" }, { head: "Үйлдэл" }]}
            rows={[
              ["str.length", "Тэмдэгтийн тоо."],
              ["str.toUpperCase()", "Том үсэг болгох."],
              ['str.includes("a")', "Дотор нь байгаа эсэх (boolean)."],
              ['str.split("")', "Тэмдэгтийн массив болгох."],
              ["arr.join(\"\")", "Массивыг текст болгож нэгтгэх."],
            ]}
          />
          <CodeCaption>
            <code>split → reverse → join</code> гурвалыг холбоход текстийг урвуу
            болгож болно.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · АЛХАМ АЛХМААР БОДОХ */}
      <Slide
        label="бодох арга"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 string", topic: "асуудал задлах" }}
      >
        <Frame>
          <Eyebrow className="anim">Асуудлыг хэрхэн задлах вэ</Eyebrow>
          <h2 className="slide-title anim anim-2">Бодох 4 алхам</h2>
          <ConceptList
            num
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Ойлгох",
                desc: "Оролт юу вэ? Гаралт юу байх ёстой вэ?",
              },
              {
                idx: "02",
                title: "Жишээгээр бодох",
                desc: "Гараар нэг жишээ дээр алхмуудыг бич.",
              },
              {
                idx: "03",
                title: "Кодлох",
                desc: "Алхам бүрийг кодоор бичих.",
              },
              {
                idx: "04",
                title: "Шалгах",
                desc: "console.log-оор олон жишээ дээр турших.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Текст боловсруулах"
        tasks={[
          <>
            <code>reverse(str)</code> функц бичиж текстийг урвуу болго (
            <code>split → reverse → join</code>).
          </>,
          <>
            <code>countVowels(str)</code> функц бичиж эгшгийн тоог буцаа.
          </>,
          <>
            <code>maxOf(arr)</code> функц бичиж массивын хамгийн их утгыг буцаа
            (<code>Math.max(...arr)</code>).
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 18 минут · шийдлийн жишээ"
            files={[{ name: "string.js", lang: "js", code: STRING_JS }]}
          />
        }
      />

      {/* 09 · SPREAD ТАНИЛЦУУЛГА */}
      <Slide
        label="spread"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 string", topic: "spread ..." }}
      >
        <Frame>
          <Eyebrow className="anim">Туслах хэрэгсэл</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>...</code> (spread) ба Math
          </h2>
          <CodeWindow
            numbered
            filename="helpers.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.fn>Math</T.fn>
              <T.punct>.</T.punct>
              <T.fn>max</T.fn>
              <T.punct>(</T.punct>
              <T.num>4</T.num>
              <T.punct>,</T.punct> <T.num>9</T.num>
              <T.punct>,</T.punct> <T.num>2</T.num>
              <T.punct>);</T.punct> <T.com>// 9</T.com>
            </Line>
            <Line state="hl">
              <T.kw>const</T.kw> <T.attr>arr</T.attr> <T.punct>=</T.punct>{" "}
              <T.punct>[</T.punct>
              <T.num>4</T.num>
              <T.punct>,</T.punct> <T.num>9</T.num>
              <T.punct>,</T.punct> <T.num>2</T.num>
              <T.punct>];</T.punct>
            </Line>
            <Line state="hl">
              <T.fn>Math</T.fn>
              <T.punct>.</T.punct>
              <T.fn>max</T.fn>
              <T.punct>(</T.punct>
              <T.punct>...</T.punct>
              <T.attr>arr</T.attr>
              <T.punct>);</T.punct> <T.com>// 9 — массивыг задлана</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>...arr</code> нь массивын элементүүдийг тус тусад нь «задлаж»
            функцэд дамжуулна.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Массивын асуудлууд"
        tasks={[
          <>
            <code>sumArray(arr)</code> функц бичиж бүх тооны нийлбэрийг буцаа
            (reduce).
          </>,
          <>
            <code>onlyEven(arr)</code> функц бичиж зөвхөн тэгш тоонуудыг
            (filter) буцаа.
          </>,
          <>
            <code>removeDuplicates(arr)</code> функц бичиж давхардлыг арилга (
            <code>[...new Set(arr)]</code> ашиглаж болно).
          </>,
        ]}
        hints={[
          "reduce((t, n) => t + n, 0).",
          "filter((n) => n % 2 === 0).",
          "new Set давхардлыг автоматаар арилгана.",
        ]}
        time="⏱ 14 минут"
      />

      {/* ============================================================
          ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="11"
        total={TOTAL}
        mins={20}
        resumeTopic="Объект боловсруулах ба жижиг алгоритм"
      />

      {/* ============================================================
          ХЭСЭГ 2 — ОБЪЕКТ + АЛГОРИТМ
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Объект · алгоритм"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Объект боловсруулах
            <br />
            ба алгоритм
          </>
        }
        lead="Объектуудын массив дээр reduce/filter/map-ийг хослуулж, бодит дата боловсруулалт ба жижиг алгоритмын дасгалуудыг хийнэ."
      />

      {/* 13 · ДАТА БОЛОВСРУУЛАХ ХЭВ МАЯГ */}
      <Slide
        label="дата хэв маяг"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 объект", topic: "нийтлэг хэв маяг" }}
      >
        <Frame>
          <Eyebrow className="anim">Бодит апп-ын логик</Eyebrow>
          <h2 className="slide-title anim anim-2">Дата боловсруулах хэв маяг</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Хэрэгцээ", width: "46%" }, { head: "Арга" }]}
            rows={[
              ["Зарим талбарыг авах", "map((u) => u.name)"],
              ["Нөхцөлөөр шүүх", "filter((u) => u.age >= 18)"],
              ["Нийт/дундаж тооцох", "reduce((sum, u) => sum + u.x, 0)"],
              ["Хамгийн их/бага олох", "reduce((best, u) => ...)"],
            ]}
          />
          <CodeCaption>
            Эдгээрийг <b>chaining</b>-ээр холбоход бараг бүх дата асуудлыг
            шийднэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · АЛГОРИТМ ЖИШЭЭ */}
      <Slide
        label="алгоритм"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 объект", topic: "жижиг алгоритм" }}
      >
        <Frame>
          <Eyebrow className="anim">Сонгодог дасгалууд</Eyebrow>
          <h2 className="slide-title anim anim-2">Жижиг алгоритмууд</h2>
          <ConceptList
            num
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Палиндром",
                desc: "Урвуугаараа адил эсэх (str === reverse(str)).",
              },
              {
                idx: "02",
                title: "FizzBuzz",
                desc: "3/5/15-д хуваагдахаар үг сольж хэвлэх.",
              },
              {
                idx: "03",
                title: "Үг тоолох",
                desc: "Текстийг split хийж length-ийг авах.",
              },
              {
                idx: "04",
                title: "Хамгийн их давтагдсан",
                desc: "Объектоор тоолуур барих.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Оюутнуудын дата боловсруулах"
        tasks={[
          <>
            <code>{"{ name, grade }"}</code> бүхий 4 оюутны массив өгөөд,{" "}
            <code>reduce</code>-ээр дундаж дүнг тооцоол.
          </>,
          <>
            <code>filter + map</code> (chaining)-ээр 70-аас дээш дүнтэй
            оюутнуудын <b>нэрсийн</b> массив гарга.
          </>,
          <>
            <code>reduce</code>-ээр хамгийн өндөр дүнтэй оюутны объектыг ол.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут · шийдлийн жишээ"
            files={[{ name: "students.js", lang: "js", code: OBJECT_JS }]}
          />
        }
      />

      {/* 16 · ДАСГАЛ 4 (§2) */}
      <Exercise
        label="Дасгал 4"
        page="16"
        total={TOTAL}
        tag="Дасгал 4 · хэсэг 2"
        title="Алгоритмын сорилт"
        tasks={[
          <>
            <code>isPalindrome(str)</code> функц бичиж, текст урвуугаараа адил
            эсэхийг (boolean) буцаа.
          </>,
          <>
            <code>wordCount(sentence)</code> функц бичиж, өгүүлбэр дэх үгийн тоог
            буцаа (<code>split(&quot; &quot;)</code>).
          </>,
          <>
            <b>Сорилт:</b> <code>mostFrequent(arr)</code> — массивд хамгийн олон
            давтагдсан элементийг объект тоолуураар ол.
          </>,
        ]}
        hints={[
          "isPalindrome: str === reverse(str).",
          "wordCount: sentence.split(\" \").length.",
          "mostFrequent: const counts = {}; counts[x] = (counts[x] || 0) + 1.",
        ]}
        time="⏱ 16 минут"
      />

      {/* ============================================================
          ХУРААНГУЙ
          ============================================================ */}

      {/* 17 · CALLOUT */}
      <Callout
        label="Дадлагын ач холбогдол"
        page="17"
        total={TOTAL}
        quote={
          <>
            Програмчлал бол <span className="hi">унших биш, бичих</span> ур
            чадвар. Олон жижиг асуудлыг өөрөө шийдэх тусам логик чинь{" "}
            <span className="hi">автомат</span> болно.
          </>
        }
        attr="7 хоног 6 — өгөгдлийн бүтэц · дадлага"
      />

      {/* 18 · АСУУЛТ / ХАРААНГУЙ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-24 · дууслаа</>}
        title={
          <>
            Дараагийнх —
            <br />
            DOM
            <Cursor />
          </>
        }
        subtitle="7 хоног 6 дууслаа! Дараагийн долоо хоногоос DOM үзэж, JavaScript-ээр хуудасны элементүүдийг өөрчилж, хэрэглэгчтэй харьцдаг болгож сурна. Гэртээ алгоритмаа дуусгаарай."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 24 — дадлага: жижиг даалгаврууд</span>
          </>
        }
      />
    </Deck>
  );
}
