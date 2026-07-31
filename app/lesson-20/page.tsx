import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  CompareTable,
  Exercise,
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
              { idx: "★", title: "2 дасгал", desc: "Нийт 2 дадлагын хэсэг." },
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

      {/* 07 · ФУНКЦИЙН СИНТАКС */}
      <Slide
        label="функцийн синтакс"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 функц", topic: "синтакс · бүтэц" }}
      >
        <Frame>
          <Eyebrow className="anim">Бүтцийг нэг дор харах</Eyebrow>
          <h2 className="slide-title anim anim-2">Функцийн синтакс</h2>
          <div className="lesson-teaching-split anim anim-3">
            <div>
              <CodeWindow numbered sm filename="syntax.js" lang="js">
                <Line>
                  <T.kw>function</T.kw> <T.fn>functionName</T.fn>
                  <T.punct>(</T.punct>
                  <T.attr>param1</T.attr>
                  <T.punct>,</T.punct> <T.attr>param2</T.attr>
                  <T.punct>) {"{"}</T.punct>
                </Line>
                <Line indent={2}>
                  <T.kw>const</T.kw> <T.attr>result</T.attr>{" "}
                  <T.punct>=</T.punct> <T.attr>param1</T.attr>{" "}
                  <T.punct>+</T.punct> <T.attr>param2</T.attr>
                  <T.punct>;</T.punct>
                </Line>
                <Line indent={2} state="hl">
                  <T.kw>return</T.kw> <T.attr>result</T.attr>
                  <T.punct>;</T.punct>
                </Line>
                <Line>
                  <T.punct>{"}"}</T.punct>
                </Line>
                <Line>
                  <T.kw>const</T.kw> <T.attr>answer</T.attr>{" "}
                  <T.punct>=</T.punct> <T.fn>functionName</T.fn>
                  <T.punct>(</T.punct>
                  <T.num>4</T.num>
                  <T.punct>,</T.punct> <T.num>6</T.num>
                  <T.punct>);</T.punct>
                </Line>
              </CodeWindow>
              <CodeCaption style={{ marginTop: 20 }}>
                Зарлахдаа бүтцийг тодорхойлно; <b>дуудахад</b> код ажиллана.
              </CodeCaption>
            </div>
            <ConceptList
              num
              compact
              items={[
                {
                  idx: "01",
                  title: <code>function</code>,
                  desc: "Функц зарлах түлхүүр үг.",
                },
                {
                  idx: "02",
                  title: <code>functionName</code>,
                  desc: "Дуудахад хэрэглэх нэр.",
                },
                {
                  idx: "03",
                  title: <code>(param1, param2)</code>,
                  desc: "Оролтын параметрүүд.",
                },
                {
                  idx: "04",
                  title: "Бие + return",
                  desc: "Ажлыг хийж, үр дүнг буцаана.",
                },
                {
                  idx: "05",
                  title: <code>functionName(4, 6)</code>,
                  desc: "Аргумент өгч функцийг дуудна.",
                },
              ]}
            />
          </div>
        </Frame>
      </Slide>

      {/* 08 · ПАРАМЕТР ба АРГУМЕНТ */}
      <Slide
        label="параметр ба аргумент"
        page="08"
        total={TOTAL}
        footer={{ tag: "§01 функц", topic: "параметр · аргумент" }}
      >
        <Frame>
          <Eyebrow className="anim">Оролтыг нэрлэх ба утга өгөх</Eyebrow>
          <h2 className="slide-title anim anim-2">Параметр ба аргумент</h2>
          <div className="lesson-teaching-split anim anim-3">
            <div>
              <CodeWindow numbered sm filename="parameters.js" lang="js">
                <Line>
                  <T.kw>function</T.kw> <T.fn>greet</T.fn>
                  <T.punct>(</T.punct>
                  <T.attr>name</T.attr>
                  <T.punct>,</T.punct> <T.attr>mark</T.attr>{" "}
                  <T.punct>=</T.punct> <T.str>&quot;!&quot;</T.str>
                  <T.punct>) {"{"}</T.punct>
                </Line>
                <Line indent={2}>
                  <T.kw>return</T.kw> <T.str>&quot;Сайн уу, &quot;</T.str>{" "}
                  <T.punct>+</T.punct> <T.attr>name</T.attr>{" "}
                  <T.punct>+</T.punct> <T.attr>mark</T.attr>
                  <T.punct>;</T.punct>
                </Line>
                <Line>
                  <T.punct>{"}"}</T.punct>
                </Line>
                <Line state="hl">
                  <T.fn>greet</T.fn>
                  <T.punct>(</T.punct>
                  <T.str>&quot;Ану&quot;</T.str>
                  <T.punct>,</T.punct> <T.str>&quot;?&quot;</T.str>
                  <T.punct>);</T.punct>
                </Line>
                <Line>
                  <T.fn>greet</T.fn>
                  <T.punct>(</T.punct>
                  <T.str>&quot;Тэмүүжин&quot;</T.str>
                  <T.punct>);</T.punct>
                </Line>
              </CodeWindow>
              <CodeCaption style={{ marginTop: 20 }}>
                <code>name</code> утгаа <code>“Ану”</code>-гаас,{" "}
                <code>mark</code> утгаа <code>“?”</code>-оос авна.
              </CodeCaption>
            </div>
            <ConceptList
              num
              compact
              items={[
                {
                  idx: "01",
                  title: "Параметр",
                  desc: <>Зарлах үеийн нэр: <code>name, mark</code>.</>,
                },
                {
                  idx: "02",
                  title: "Аргумент",
                  desc: <>Дуудах үеийн утга: <code>“Ану”, “?”</code>.</>,
                },
                {
                  idx: "03",
                  title: "Байрлал",
                  desc: "Зүүнээс баруун тийш дарааллаар таарна.",
                },
                {
                  idx: "04",
                  title: "Анхдагч утга",
                  desc: <>Аргументгүй бол <code>mark = “!”</code>.</>,
                },
              ]}
            />
          </div>
        </Frame>
      </Slide>

      {/* 09 · RETURN */}
      <Slide
        label="return"
        page="09"
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

      {/* 10 · ОЛОН ПАРАМЕТР */}
      <Slide
        label="олон параметр"
        page="10"
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

      {/* 11 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="11"
        total={TOTAL}
        tag="Дасгал 1 · 10 бодлого"
        title="Функц бичих дадлага"
        taskColumns={2}
        tasks={[
          <>
            <code>sayHello()</code> — <b>“Сайн уу!”</b> текст буцаа.
          </>,
          <>
            <code>double(n)</code> — тоог 2-оор үржүүлж буцаа.
          </>,
          <>
            <code>square(n)</code> — тооны квадратыг буцаа.
          </>,
          <>
            <code>area(w, h)</code> — тэгш өнцөгтийн талбайг буцаа.
          </>,
          <>
            <code>perimeter(w, h)</code> — периметрийг буцаа.
          </>,
          <>
            <code>greet(name)</code> — <b>“Сайн уу, [нэр]!”</b> текст буцаа.
          </>,
          <>
            <code>fullName(first, last)</code> — бүтэн нэрийг буцаа.
          </>,
          <>
            <code>minutesToSeconds(min)</code> — секунд рүү хөрвүүл.
          </>,
          <>
            <code>celsiusToF(c)</code> — <code>c × 9/5 + 32</code> тооц.
          </>,
          <>
            <code>welcome(name = &quot;зочин&quot;)</code> — аргументтай ба
            аргументгүй дууд.
          </>,
        ]}
      />

      {/* ============================================================
          ЗАВСАРЛАГА
          ============================================================ */}
      <Break
        page="12"
        total={TOTAL}
        mins={20}
        resumeTopic="Scope ба arrow function"
      />

      {/* ============================================================
          ХЭСЭГ 2 — SCOPE + ARROW
          ============================================================ */}

      {/* 13 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ Scope · arrow"
        page="13"
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

      {/* 14 · SCOPE */}
      <KeyTerm
        label="Гол ойлголт: scope"
        page="14"
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

      {/* 15 · ФУНКЦИЙН 3 ХЭЛБЭР */}
      <Slide
        label="3 хэлбэр"
        page="15"
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

      {/* 17 · ДАСГАЛ 2 (§2) */}
      <Exercise
        label="Дасгал 2"
        page="17"
        total={TOTAL}
        tag="Дасгал 2 · 10 бодлого"
        title="Ахисан функцийн сорилт"
        taskColumns={2}
        tasks={[
          <>
            <code>scopeTest()</code> дотор <code>let secret = 42</code> зарла.
            Гаднаас хэвлэхэд гарах алдааг урьдчилан таамаглаж, шалтгааныг бич.
          </>,
          <>
            <code>discount(price, percent)</code> arrow функц бич.{" "}
            <code>discount(100000, 15)</code> нь <b>85000</b> буцаана.
          </>,
          <>
            <code>finalPrice(price, percent)</code> дотроос{" "}
            <code>discount()</code>-ийг дуудаж эцсийн үнэ буцаа.
          </>,
          <>
            <code>minOfThree(a, b, c)</code> бич. <code>Math.min</code>{" "}
            ашиглалгүй <code>minOfThree(8, 3, 5)</code> → <b>3</b>.
          </>,
          <>
            <code>middleOfThree(a, b, c)</code> дундах утгыг буцаа.{" "}
            <code>sort</code> ашиглалгүй <code>middleOfThree(9, 2, 5)</code> →{" "}
            <b>5</b>.
          </>,
          <>
            <code>grade(score)</code>: 90+ → A, 80+ → B, 70+ → C, 60+ → D,
            бусад → F.
          </>,
          <>
            <code>calculatePrice(price, discount = 0, tax = 10)</code>: эхлээд
            хямдрал, дараа нь татвар тооц.
          </>,
          <>
            <code>isLeapYear(year)</code> бич. <b>2000 → true</b>,{" "}
            <b>1900 → false</b> болох дүрмийг зөв хэрэгжүүл.
          </>,
          <>
            <code>factorial(n)</code>-ийг давталтаар бод.{" "}
            <code>factorial(0)</code> → <b>1</b>, <code>factorial(5)</code> →{" "}
            <b>120</b>.
          </>,
          <>
            <code>calculator(a, b, operator)</code>-т <code>switch</code>{" "}
            ашиглан +, −, ×, ÷ үйлдэл болон 0-д хуваах алдааг зохицуул.
          </>,
        ]}
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
