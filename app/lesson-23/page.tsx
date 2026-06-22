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
  title: "erxes · Хичээл 23 — Объект",
};

/**
 * ХИЧЭЭЛ 23 — Объект (Objects)
 * 🎯 Бүтэцтэй өгөгдлийг объектоор загварчлах.
 *
 *   ХЭСЭГ 1 — key/value, dot vs bracket
 *   ЗАВСАРЛАГА
 *   ХЭСЭГ 2 — nested, method, this, объектын массив
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const OBJ_JS = `// Объект — key: value хосууд
const user = {
  name: "Болд",
  age: 25,
  isStudent: true,
};

// dot notation
console.log(user.name); // "Болд"

// bracket notation
console.log(user["age"]); // 25

// Утга өөрчлөх / нэмэх
user.age = 26;
user.city = "Улаанбаатар";

console.log(user);
// { name: "Болд", age: 26, isStudent: true, city: "Улаанбаатар" }
`;

const METHOD_JS = `const account = {
  owner: "Сараа",
  balance: 1000,

  // method — объект доторх функц
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  describe() {
    return this.owner + ": " + this.balance + "₮";
  },
};

console.log(account.deposit(500)); // 1500
console.log(account.describe());   // "Сараа: 1500₮"

// Объектын массив
const users = [
  { name: "Болд", age: 25 },
  { name: "Сараа", age: 30 },
];
users.forEach((u) => console.log(u.name + " — " + u.age));
`;

export default function Lesson23() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-23 · объект</>}
        title={
          <>
            Объект —
            <br />
            бүтэцтэй өгөгдөл
            <Cursor />
          </>
        }
        subtitle="Массив бол эрэмбэтэй жагсаалт. Гэхдээ нэг хэрэглэгчийн нэр, нас, имэйлийг хамт хадгалахад? Объект нь нэртэй талбаруудтай өгөгдлийг загварчилдаг."
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
              { idx: "✓", title: "Массив", desc: "Эрэмбэтэй жагсаалт [ ]." },
              {
                idx: "✓",
                title: "Аргууд",
                desc: "map, filter, reduce.",
              },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Нэртэй талбартай өгөгдөл — объект { }.",
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
                title: "Объект үндэс",
                desc: "key/value, dot vs bracket, өөрчлөх.",
              },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              {
                idx: "02",
                title: "Method ба бүтэц",
                desc: "nested, method, this, объектын массив.",
              },
              { idx: "★", title: "4 дасгал", desc: "Хэсэг бүрт 2 — нийт 4." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — ОБЪЕКТ ҮНДЭС
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ Объект"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            key / value,
            <br />
            dot vs bracket
          </>
        }
        lead="Объект юу болох, key:value хосоор хэрхэн өгөгдөл хадгалах, талбарт dot ба bracket-ээр хэрхэн хандахыг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт: объект"
        page="05"
        total={TOTAL}
        term="Объект (Object)"
        def={
          <>
            <b>Объект</b> нь <code>key: value</code> хосуудын цуглуулга,{" "}
            <code>{"{ }"}</code> дотор. Массив <i>index</i>-ээр хандвал объект{" "}
            <i>key (нэр)</i>-ээр хандана — жинхэнэ ертөнцийн зүйлийг загварчлахад
            тохиромжтой.
          </>
        }
        note="{ key: value } · нэрээр хандах"
      />

      {/* 06 · ХАНДАХ */}
      <Slide
        label="хандах"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 объект", topic: "dot vs bracket" }}
      >
        <Frame>
          <Eyebrow className="anim">Талбарт хандах</Eyebrow>
          <h2 className="slide-title anim anim-2">dot ба bracket</h2>
          <CodeWindow
            numbered
            filename="object.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 30 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>user</T.attr> <T.punct>=</T.punct>{" "}
              <T.punct>{"{"}</T.punct> <T.prop>name</T.prop>
              <T.punct>:</T.punct> <T.str>&quot;Болд&quot;</T.str>
              <T.punct>,</T.punct> <T.prop>age</T.prop>
              <T.punct>:</T.punct> <T.num>25</T.num> <T.punct>{"}"};</T.punct>
            </Line>
            <Line state="hl">
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>user</T.attr>
              <T.punct>.</T.punct>
              <T.prop>name</T.prop>
              <T.punct>);</T.punct> <T.com>// dot → &quot;Болд&quot;</T.com>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>user</T.attr>
              <T.punct>[</T.punct>
              <T.str>&quot;age&quot;</T.str>
              <T.punct>]);</T.punct> <T.com>// bracket → 25</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>dot</code> нь энгийн, түгээмэл. <code>bracket</code> нь key
            хувьсагчид байх эсвэл зайтай үед хэрэгтэй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · НЭМЭХ / ӨӨРЧЛӨХ */}
      <Slide
        label="нэмэх / өөрчлөх"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 объект", topic: "өөрчлөх" }}
      >
        <Frame>
          <Eyebrow className="anim">Талбар удирдах</Eyebrow>
          <h2 className="slide-title anim anim-2">Нэмэх, өөрчлөх, устгах</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Үйлдэл", width: "42%" }, { head: "Жишээ" }]}
            rows={[
              ["Унших", "user.name"],
              ["Өөрчлөх", 'user.age = 26'],
              ["Нэмэх", 'user.city = "УБ"'],
              ["Устгах", "delete user.age"],
              ["Шалгах", '"name" in user'],
            ]}
          />
          <CodeCaption>
            Байхгүй talbar-т хандвал <code>undefined</code> буцаана — алдаа
            гарахгүй.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="Хэрэглэгчийн объект"
        tasks={[
          <>
            <code>name</code>, <code>age</code>, <code>isStudent</code> талбартай{" "}
            <code>user</code> объект үүсгэ.
          </>,
          <>
            <code>name</code>-ийг dot-оор, <code>age</code>-ийг bracket-ээр
            хэвл.
          </>,
          <>
            <code>age</code>-ийг өөрчилж, <code>city</code> талбар нэмээд объектыг
            бүхэлд нь хэвл.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "object.js", lang: "js", code: OBJ_JS }]}
          />
        }
      />

      {/* 09 · МАССИВ vs ОБЪЕКТ */}
      <Slide
        label="массив vs объект"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 объект", topic: "хэзээ алийг" }}
      >
        <Frame>
          <Eyebrow className="anim">Хэзээ алийг нь?</Eyebrow>
          <h2 className="slide-title anim anim-2">Массив vs объект</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Массив [ ]", width: "50%" }, { head: "Объект { }" }]}
            rows={[
              ["Эрэмбэтэй жагсаалт", "Нэртэй талбарууд"],
              ["index-ээр хандана (0, 1…)", "key-ээр хандана (name…)"],
              ["Ижил төрлийн олон зүйл", "Нэг зүйлийн шинж чанарууд"],
              ["оюутнуудын нэрс", "нэг оюутны мэдээлэл"],
            ]}
          />
          <CodeCaption>
            Ихэнхдээ хосолдог: <b>объектуудын массив</b> — жишээ нь оюутан бүр
            объект, бүгд массивд.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Бүтээгдэхүүний карт"
        tasks={[
          <>
            <code>title</code>, <code>price</code>, <code>inStock</code>{" "}
            (boolean) талбартай <code>product</code> объект үүсгэ.
          </>,
          <>
            «[title] — [price]₮» хэлбэрээр нэг мөр болгож console-д хэвл.
          </>,
          <>
            <code>inStock</code>-ийг шалгаж <code>ternary</code>-аар «Байгаа»
            эсвэл «Дууссан» гэж хэвл.
          </>,
        ]}
        hints={[
          "Текст нийлүүлэх: product.title + \" — \" + product.price.",
          "product.inStock ? \"Байгаа\" : \"Дууссан\".",
          "Талбарт dot-оор хандана.",
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
        resumeTopic="Nested, method, this, объектын массив"
      />

      {/* ============================================================
          ХЭСЭГ 2 — METHOD + THIS
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ method · this"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Method, this,
            <br />
            объектын массив
          </>
        }
        lead="Объект дотор үүрлэсэн (nested) өгөгдөл, функц-талбар (method), this түлхүүр үг ба объектуудын массивтай ажиллахыг үзнэ."
      />

      {/* 13 · NESTED */}
      <Slide
        label="nested"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 method", topic: "үүрлэсэн өгөгдөл" }}
      >
        <Frame>
          <Eyebrow className="anim">Объект доторх объект/массив</Eyebrow>
          <h2 className="slide-title anim anim-2">Үүрлэсэн (nested) бүтэц</h2>
          <CodeWindow
            numbered
            filename="nested.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 24 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>user</T.attr> <T.punct>= {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.prop>name</T.prop>
              <T.punct>:</T.punct> <T.str>&quot;Болд&quot;</T.str>
              <T.punct>,</T.punct>
            </Line>
            <Line indent={2}>
              <T.prop>address</T.prop>
              <T.punct>: {"{"}</T.punct> <T.prop>city</T.prop>
              <T.punct>:</T.punct> <T.str>&quot;УБ&quot;</T.str>
              <T.punct>,</T.punct> <T.prop>zip</T.prop>
              <T.punct>:</T.punct> <T.num>16000</T.num> <T.punct>{"}"},</T.punct>
            </Line>
            <Line indent={2}>
              <T.prop>hobbies</T.prop>
              <T.punct>:</T.punct> <T.punct>[</T.punct>
              <T.str>&quot;ном&quot;</T.str>
              <T.punct>,</T.punct> <T.str>&quot;код&quot;</T.str>
              <T.punct>],</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"};</T.punct>
            </Line>
            <Line state="hl">
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>user</T.attr>
              <T.punct>.</T.punct>
              <T.prop>address</T.prop>
              <T.punct>.</T.punct>
              <T.prop>city</T.prop>
              <T.punct>);</T.punct> <T.com>// &quot;УБ&quot;</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Гүн рүү алхахдаа dot-оо холбоно:{" "}
            <code>user.address.city</code>, <code>user.hobbies[0]</code>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · METHOD + THIS */}
      <Slide
        label="method · this"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 method", topic: "method · this" }}
      >
        <Frame>
          <Eyebrow className="anim">Объект доторх функц</Eyebrow>
          <h2 className="slide-title anim anim-2">method ба this</h2>
          <CodeWindow
            numbered
            filename="method.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 24 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>account</T.attr>{" "}
              <T.punct>= {"{"}</T.punct>
            </Line>
            <Line indent={2}>
              <T.prop>owner</T.prop>
              <T.punct>:</T.punct> <T.str>&quot;Сараа&quot;</T.str>
              <T.punct>,</T.punct> <T.prop>balance</T.prop>
              <T.punct>:</T.punct> <T.num>1000</T.num>
              <T.punct>,</T.punct>
            </Line>
            <Line indent={2} state="hl">
              <T.fn>describe</T.fn>
              <T.punct>() {"{"}</T.punct>
            </Line>
            <Line indent={4} state="hl">
              <T.kw>return</T.kw> <T.kw>this</T.kw>
              <T.punct>.</T.punct>
              <T.prop>owner</T.prop> <T.punct>+</T.punct>{" "}
              <T.str>&quot;: &quot;</T.str> <T.punct>+</T.punct> <T.kw>this</T.kw>
              <T.punct>.</T.punct>
              <T.prop>balance</T.prop>
              <T.punct>;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>{"}"},</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"};</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>method</code> бол объектын талбар болсон функц.{" "}
            <code>this</code> нь «энэ объект өөрөө»-г заана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Дансны объект (method + this)"
        tasks={[
          <>
            <code>owner</code>, <code>balance</code> талбартай{" "}
            <code>account</code> объект үүсгэ.
          </>,
          <>
            <code>deposit(amount)</code> method нэмж, <code>this.balance</code>-д
            нэмж шинэ үлдэгдлийг буцаа.
          </>,
          <>
            <code>describe()</code> method нэмж, эзэн ба үлдэгдлийг текст болгож
            буцаа. Хоёуланг дуудаж шалга.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут · шийдлийн жишээ"
            files={[{ name: "method.js", lang: "js", code: METHOD_JS }]}
          />
        }
      />

      {/* 16 · ОБЪЕКТЫН МАССИВ */}
      <Slide
        label="объектын массив"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 method", topic: "объектын массив" }}
      >
        <Frame>
          <Eyebrow className="anim">Хамгийн түгээмэл бүтэц</Eyebrow>
          <h2 className="slide-title anim anim-2">Объектуудын массив</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Жагсаалт + бүтэц",
                desc: "[ { name, age }, { name, age } ] — API өгөгдлийн хэлбэр.",
              },
              {
                idx: "02",
                title: "map-аар хувиргах",
                desc: "users.map((u) => u.name) — зөвхөн нэрсийг ав.",
              },
              {
                idx: "03",
                title: "filter-ээр шүүх",
                desc: "users.filter((u) => u.age >= 18).",
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
        title="Оюутнуудын массив"
        tasks={[
          <>
            <code>{"{ name, age, grade }"}</code> бүхий 4 оюутны объектыг нэг
            массивд хий.
          </>,
          <>
            <code>map</code>-аар зөвхөн нэрсийн массив гарга.
          </>,
          <>
            <code>filter</code>-аар grade 80-аас дээш оюутнуудыг авч,{" "}
            <code>forEach</code>-оор «[нэр]: [grade]» хэлбэрээр хэвл.
          </>,
        ]}
        hints={[
          "users.map((u) => u.name).",
          "users.filter((u) => u.grade >= 80).",
          "Объектуудын массив = жинхэнэ апп өгөгдлийн хэлбэр.",
        ]}
        time="⏱ 14 минут"
      />

      {/* ============================================================
          ХУРААНГУЙ
          ============================================================ */}

      {/* 18 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="18"
        total={TOTAL}
        eyebrow="Хичээл 23 · юу сурсан"
        footer={{ tag: "erxes · хичээл 23", topic: "объект" }}
        cards={[
          {
            num: "01",
            title: "Объект",
            desc: "{ key: value } — нэртэй талбарууд.",
          },
          {
            num: "02",
            title: "Хандах",
            desc: "dot (.name) ба bracket ([\"name\"]).",
          },
          {
            num: "03",
            title: "method ба this",
            desc: "Объект доторх функц; this = энэ объект.",
          },
          {
            num: "04",
            title: "Объектын массив",
            desc: "API өгөгдлийн жишиг хэлбэр.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-23 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлд бүх үзсэнээ нэгтгэж, жижиг даалгавар, алгоритмаар дадлага хийнэ. Гэртээ объектуудын массив дээр map/filter дадлагаж."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 23 — объект</span>
          </>
        }
      />
    </Deck>
  );
}
