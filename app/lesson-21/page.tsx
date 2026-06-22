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
  title: "erxes · Хичээл 21 — Массив",
};

/**
 * ХИЧЭЭЛ 21 — Массив (Arrays)
 * 🎯 Олон утгыг нэг хувьсагчид жагсааж, удирдах.
 *
 *   ХЭСЭГ 1 — Массив үүсгэх, index, length
 *   ЗАВСАРЛАГА
 *   ХЭСЭГ 2 — Аргууд (push/pop…) ба давталтаар алхах
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const ARR_JS = `// Массив үүсгэх
const fruits = ["алим", "гадил", "усан үзэм"];

// Index-ээр хандах (0-оос эхэлдэг!)
console.log(fruits[0]);  // "алим"
console.log(fruits[2]);  // "усан үзэм"

// Урт (length)
console.log(fruits.length); // 3

// Сүүлийн элемент
console.log(fruits[fruits.length - 1]); // "усан үзэм"

// Утга солих
fruits[1] = "интоор";
console.log(fruits); // ["алим", "интоор", "усан үзэм"]
`;

const ARR_METHODS_JS = `const nums = [10, 20, 30];

// Төгсгөлд нэмэх / хасах
nums.push(40);    // [10, 20, 30, 40]
nums.pop();       // [10, 20, 30]

// Эхэнд нэмэх / хасах
nums.unshift(5);  // [5, 10, 20, 30]
nums.shift();     // [10, 20, 30]

// Давталтаар алхах
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("Нийлбэр:", sum); // 60

// includes / indexOf
console.log(nums.includes(20)); // true
console.log(nums.indexOf(30));  // 2
`;

export default function Lesson21() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-21 · массив</>}
        title={
          <>
            Массив —
            <br />
            жагсаалт хадгалах
            <Cursor />
          </>
        }
        subtitle="Нэг хувьсагчид нэг утга. Гэхдээ 100 оюутны нэрийг яах вэ? Массив нь олон утгыг эрэмбэтэйгээр нэг газар хадгалдаг — өгөгдлийн хамгийн чухал бүтэц."
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
          <Eyebrow className="anim">7 хоног 6 эхэллээ</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид хаана байна вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              { idx: "✓", title: "Хувьсагч", desc: "Нэг утга хадгалах." },
              { idx: "✓", title: "Давталт + функц", desc: "Логик бичих." },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Олон утгыг нэг дор — массив.",
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
                title: "Массив үүсгэх",
                desc: "Index, length, утга солих.",
              },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              {
                idx: "02",
                title: "Аргууд ба давталт",
                desc: "push/pop/shift/unshift/splice, for-оор алхах.",
              },
              { idx: "★", title: "4 дасгал", desc: "Хэсэг бүрт 2 — нийт 4." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — МАССИВ ҮНДЭС
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Массив"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Массив үүсгэх,
            <br />
            index, length
          </>
        }
        lead="Массив юу болох, элементэд index-ээр хэрхэн хандах, length-ийг хэрхэн ашиглахыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт: массив"
        page="05"
        total={TOTAL}
        term="Массив (Array)"
        def={
          <>
            <b>Массив</b> нь эрэмбэтэй утгуудын жагсаалт, <code>[ ]</code> дотор
            таслалаар тусгаарлана. Элемент бүр <i>index</i>-тэй бөгөөд index{" "}
            <b>0-оос</b> эхэлдэг — эхнийх нь <code>[0]</code>.
          </>
        }
        note="[ ] · index 0-оос"
      />

      {/* 06 · INDEX */}
      <Slide
        label="index"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 массив", topic: "index хандалт" }}
      >
        <Frame>
          <Eyebrow className="anim">0-оос эхэлдэг</Eyebrow>
          <h2 className="slide-title anim anim-2">Index-ээр хандах</h2>
          <CodeWindow
            numbered
            filename="index.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>fruits</T.attr> <T.punct>=</T.punct>{" "}
              <T.punct>[</T.punct>
              <T.str>&quot;алим&quot;</T.str>
              <T.punct>,</T.punct> <T.str>&quot;гадил&quot;</T.str>
              <T.punct>,</T.punct> <T.str>&quot;үзэм&quot;</T.str>
              <T.punct>];</T.punct>
            </Line>
            <Line state="hl">
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>fruits</T.attr>
              <T.punct>[</T.punct>
              <T.num>0</T.num>
              <T.punct>]);</T.punct> <T.com>// &quot;алим&quot;</T.com>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>fruits</T.attr>
              <T.punct>.</T.punct>
              <T.attr>length</T.attr>
              <T.punct>);</T.punct> <T.com>// 3</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Сүүлийн элемент үргэлж <code>arr[arr.length - 1]</code> — учир нь
            index 0-оос эхэлдэг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · УТГА СОЛИХ */}
      <Slide
        label="утга солих"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 массив", topic: "өөрчлөх" }}
      >
        <Frame>
          <Eyebrow className="anim">const ч гэсэн өөрчилж болно</Eyebrow>
          <h2 className="slide-title anim anim-2">Элемент солих</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Үйлдэл", width: "42%" }, { head: "Жишээ" }]}
            rows={[
              ["Элемент унших", "arr[1]"],
              ["Элемент солих", 'arr[1] = "шинэ"'],
              ["Урт авах", "arr.length"],
              ["Сүүлийнх", "arr[arr.length - 1]"],
            ]}
          />
          <CodeCaption>
            <code>const</code> массивын <b>элементийг</b> өөрчилж болно — зөвхөн
            хувьсагчийг <i>бүхэлд нь</i> дахин оноож болохгүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Массивтай танилцах"
        tasks={[
          <>
            3 жимсний нэртэй <code>fruits</code> массив үүсгэ.
          </>,
          <>
            Эхний ба сүүлийн элементийг (index ашиглан) console-д хэвл.
          </>,
          <>
            <code>fruits.length</code>-ийг хэвлэж, дараа нь хоёр дахь элементийг
            өөр жимсээр сольж массивыг дахин хэвл.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "array.js", lang: "js", code: ARR_JS }]}
          />
        }
      />

      {/* 09 · ОЛОН ТӨРӨЛ */}
      <Slide
        label="янз бүрийн утга"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 массив", topic: "холимог утга" }}
      >
        <Frame>
          <Eyebrow className="anim">Массивд юу хадгалж болох вэ?</Eyebrow>
          <h2 className="slide-title anim anim-2">Холимог агуулга</h2>
          <CodeWindow
            numbered
            filename="mixed.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>scores</T.attr> <T.punct>=</T.punct>{" "}
              <T.punct>[</T.punct>
              <T.num>90</T.num>
              <T.punct>,</T.punct> <T.num>75</T.num>
              <T.punct>,</T.punct> <T.num>88</T.num>
              <T.punct>];</T.punct>
            </Line>
            <Line>
              <T.kw>const</T.kw> <T.attr>mixed</T.attr> <T.punct>=</T.punct>{" "}
              <T.punct>[</T.punct>
              <T.str>&quot;Болд&quot;</T.str>
              <T.punct>,</T.punct> <T.num>25</T.num>
              <T.punct>,</T.punct> <T.kw>true</T.kw>
              <T.punct>];</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Массив дотор тоо, текст, boolean — ямар ч төрлийг хольж хадгалж
            болно. Гэхдээ ихэвчлэн <b>нэг төрлийн</b> утга хадгалдаг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Оноо ба дундаж"
        tasks={[
          <>
            5 шалгалтын <code>scores</code> массив үүсгэ.
          </>,
          <>
            <code>for</code>-оор бүх онооны нийлбэрийг тооцоол.
          </>,
          <>
            Нийлбэрийг <code>scores.length</code>-д хувааж дунджийг хэвл.
          </>,
        ]}
        hints={[
          "for (let i = 0; i < scores.length; i++).",
          "sum += scores[i] гэж хуримтлуул.",
          "avg = sum / scores.length.",
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
        resumeTopic="Массивын аргууд ба давталтаар алхах"
      />

      {/* ============================================================
          ХЭСЭГ 2 — АРГУУД
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Аргууд"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Массивын
            <br />
            аргууд
          </>
        }
        lead="Элемент нэмэх/хасах аргууд (push, pop, shift, unshift, splice) ба массивыг давталтаар алхахыг үзнэ."
      />

      {/* 13 · НЭМЭХ / ХАСАХ */}
      <Slide
        label="нэмэх / хасах"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 аргууд", topic: "push / pop / shift" }}
      >
        <Frame>
          <Eyebrow className="anim">Элемент нэмэх ба хасах</Eyebrow>
          <h2 className="slide-title anim anim-2">Үндсэн аргууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Арга", width: "32%" }, { head: "Үйлдэл" }]}
            rows={[
              ["push(x)", "Төгсгөлд нэмнэ."],
              ["pop()", "Төгсгөлөөс хасна."],
              ["unshift(x)", "Эхэнд нэмнэ."],
              ["shift()", "Эхнээс хасна."],
              ["splice(i, n)", "i-ээс n ширхгийг хасна/нэмнэ."],
            ]}
          />
          <CodeCaption>
            <code>push</code>/<code>pop</code> нь хурдан (төгсгөл);{" "}
            <code>shift</code>/<code>unshift</code> нь бусдыг шилжүүлдэг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · ДАВТАЛТААР АЛХАХ */}
      <Slide
        label="давталтаар алхах"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 аргууд", topic: "for · for…of" }}
      >
        <Frame>
          <Eyebrow className="anim">Бүх элементээр явах</Eyebrow>
          <h2 className="slide-title anim anim-2">Массивыг давтах</h2>
          <CodeWindow
            numbered
            filename="loop.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 30 }}
          >
            <Line>
              <T.com>// 1) Сонгодог for</T.com>
            </Line>
            <Line>
              <T.kw>for</T.kw> <T.punct>(</T.punct>
              <T.kw>let</T.kw> <T.attr>i</T.attr> <T.punct>=</T.punct>{" "}
              <T.num>0</T.num>
              <T.punct>;</T.punct> <T.attr>i</T.attr> <T.punct>&lt;</T.punct>{" "}
              <T.attr>arr</T.attr>
              <T.punct>.</T.punct>
              <T.attr>length</T.attr>
              <T.punct>;</T.punct> <T.attr>i</T.attr>
              <T.punct>++) {"{"} ... {"}"}</T.punct>
            </Line>
            <Line state="hl">
              <T.com>// 2) for…of — энгийн, цэвэр</T.com>
            </Line>
            <Line state="hl">
              <T.kw>for</T.kw> <T.punct>(</T.punct>
              <T.kw>const</T.kw> <T.attr>item</T.attr> <T.kw>of</T.kw>{" "}
              <T.attr>arr</T.attr>
              <T.punct>) {"{"}</T.punct>
            </Line>
            <Line indent={2} state="hl">
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>item</T.attr>
              <T.punct>);</T.punct>
            </Line>
            <Line state="hl">
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>for…of</code> нь элемент бүрийг шууд өгдөг — index хэрэггүй
            бол хамгийн цэвэр арга.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Массивыг удирдах"
        tasks={[
          <>
            <code>nums = [10, 20, 30]</code>-д <code>push(40)</code>,{" "}
            <code>pop()</code>, <code>unshift(5)</code>, <code>shift()</code>{" "}
            хийж алхам бүрийн дараа массивыг хэвл.
          </>,
          <>
            <code>for</code>-оор бүх элементийн нийлбэрийг тооцоол.
          </>,
          <>
            <code>includes(20)</code> ба <code>indexOf(30)</code>-ийг хэвлэж үр
            дүнг ажигла.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 18 минут · шийдлийн жишээ"
            files={[{ name: "methods.js", lang: "js", code: ARR_METHODS_JS }]}
          />
        }
      />

      {/* 16 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 аргууд", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Болгоомжлох</Eyebrow>
          <h2 className="slide-title anim anim-2">Массивын нийтлэг алдаа</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Index 1-ээс эхлүүлэх",
                desc: "Index 0-оос эхэлнэ — эхнийх нь arr[0].",
              },
              {
                idx: "02",
                title: "Хязгаараас хальж хандах",
                desc: "Байхгүй index → undefined буцаана.",
              },
              {
                idx: "03",
                title: "length === сүүлийн index",
                desc: "Сүүлийн index нь length - 1.",
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
        title="Хамгийн их утга олох"
        tasks={[
          <>
            Тооны массив өгөөд <code>for…of</code>-оор хамгийн их утгыг ол.
          </>,
          <>
            Текстийн массивыг <code>for…of</code>-оор алхаж, тус бүрийг «N-р
            оюутан: [нэр]» хэлбэрээр хэвл.
          </>,
          <>
            <code>splice</code>-ээр массиваас нэг элемент хасаж, өөр байрлалд
            нэмж туршиж үз.
          </>,
        ]}
        hints={[
          "let max = arr[0]; дотор нь if (item > max) max = item.",
          "for…of-д index хэрэгтэй бол тоолуур тусад нь нэм.",
          "splice(index, 1) — нэг элемент хасна.",
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
        eyebrow="Хичээл 21 · юу сурсан"
        footer={{ tag: "erxes · хичээл 21", topic: "массив" }}
        cards={[
          {
            num: "01",
            title: "Массив",
            desc: "[ ] доторх эрэмбэтэй жагсаалт.",
          },
          {
            num: "02",
            title: "Index ба length",
            desc: "0-оос эхэлнэ; сүүлийнх нь length - 1.",
          },
          {
            num: "03",
            title: "Аргууд",
            desc: "push / pop / shift / unshift / splice.",
          },
          {
            num: "04",
            title: "Алхах",
            desc: "for ба for…of-оор бүх элементээр явах.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-21 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлд массивын хүчирхэг аргууд — map, filter, reduce-ийг үзэж, өгөгдлийг богино, цэвэр кодоор хувиргаж сурна."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 21 — массив</span>
          </>
        }
      />
    </Deck>
  );
}
