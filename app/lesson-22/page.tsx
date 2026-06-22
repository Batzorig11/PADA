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
  title: "erxes · Хичээл 22 — Массивын аргууд (map / filter / reduce)",
};

/**
 * ХИЧЭЭЛ 22 — Массивын аргууд: map, filter, reduce
 * 🎯 Өндөр зэрэглэлийн аргуудаар өгөгдлийг хувиргах.
 *
 *   ХЭСЭГ 1 — forEach, map
 *   ЗАВСАРЛАГА
 *   ХЭСЭГ 2 — filter, find, reduce, chaining
 */
const TOTAL = "19";

/* ===== Дасгалын бэлэн шийдэл ===== */

const MAP_JS = `const nums = [1, 2, 3, 4];

// forEach — алхам бүрд үйлдэл (буцаахгүй)
nums.forEach((n) => console.log(n * 10));

// map — ШИНЭ массив буцаана
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]

const names = ["bold", "saraa"];
const upper = names.map((name) => name.toUpperCase());
console.log(upper); // ["BOLD", "SARAA"]
`;

const FILTER_JS = `const nums = [5, 12, 8, 130, 44];

// filter — нөхцөлд тэнцсэн элементүүд
const big = nums.filter((n) => n >= 10);
console.log(big); // [12, 130, 44]

// find — нөхцөлд тэнцсэн ЭХНИЙ элемент
const first = nums.find((n) => n > 100);
console.log(first); // 130

// reduce — нэг утга болгож хураах
const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 199

// Chaining — холбож хэрэглэх
const result = nums
  .filter((n) => n >= 10)
  .map((n) => n * 2);
console.log(result); // [24, 260, 88]
`;

export default function Lesson22() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-22 · массивын аргууд</>}
        title={
          <>
            map · filter
            <br />
            reduce
            <Cursor />
          </>
        }
        subtitle="for давталтаар бичдэг ихэнх зүйлийг нэг мөрөөр, илүү ойлгомжтой бичиж болно. Эдгээр гурван арга нь орчин үеийн JavaScript-ийн зүрх."
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
              { idx: "✓", title: "Массив", desc: "[ ], index, length." },
              { idx: "✓", title: "Arrow function", desc: "(x) => x * 2." },
              {
                idx: "→",
                title: "Өнөөдөр",
                desc: "Массивыг хувиргах хүчтэй аргууд.",
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
                title: "forEach ба map",
                desc: "Алхах ба хувиргах.",
              },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              {
                idx: "02",
                title: "filter · find · reduce",
                desc: "Шүүх, олох, хураах, chaining.",
              },
              { idx: "★", title: "4 дасгал", desc: "Хэсэг бүрт 2 — нийт 4." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ХЭСЭГ 1 — forEach + map
          ============================================================ */}

      {/* 04 · SECTION DIVIDER 1 */}
      <SectionDivider
        label="§ map"
        page="04"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            forEach ба
            <br />
            map
          </>
        }
        lead="Массивын элемент бүрд функц ажиллуулах forEach, элемент бүрийг хувиргаж ШИНЭ массив үүсгэх map-ийг үзнэ."
      />

      {/* 05 · ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт: callback"
        page="05"
        total={TOTAL}
        term="Callback функц"
        def={
          <>
            Эдгээр арга нь <b>callback</b> — өөр функцэд дамжуулсан функц авдаг.
            Элемент бүрд тэр callback-ийг ажиллуулна.{" "}
            <code>arr.map((item) =&gt; ...)</code> гэдэг нь «элемент бүрд энэ
            үйлдлийг хий» гэсэн үг.
          </>
        }
        note="arr.method((item) => ...)"
      />

      {/* 06 · forEach vs map */}
      <Slide
        label="forEach vs map"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 map", topic: "forEach vs map" }}
      >
        <Frame>
          <Eyebrow className="anim">Гол ялгаа</Eyebrow>
          <h2 className="slide-title anim anim-2">forEach ба map</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "forEach", width: "50%" }, { head: "map" }]}
            rows={[
              ["Элемент бүрд үйлдэл хийнэ", "Элемент бүрийг хувиргана"],
              ["Юу ч буцаахгүй", "ШИНЭ массив буцаана"],
              ["Хэвлэх, өөрчлөхөд", "Шинэ өгөгдөл үүсгэхэд"],
              ["= for давталтын орлуулга", "= хувиргалтын for"],
            ]}
          />
          <CodeCaption>
            Шинэ массив <b>хэрэгтэй</b> бол <code>map</code>; зүгээр л үйлдэл
            хийх бол <code>forEach</code>.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · map КОД */}
      <Slide
        label="map код"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 map", topic: "map жишээ" }}
      >
        <Frame>
          <Eyebrow className="anim">Хувиргах</Eyebrow>
          <h2 className="slide-title anim anim-2">
            <code>map</code> жишээ
          </h2>
          <CodeWindow
            numbered
            filename="map.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 36 }}
          >
            <Line>
              <T.kw>const</T.kw> <T.attr>nums</T.attr> <T.punct>=</T.punct>{" "}
              <T.punct>[</T.punct>
              <T.num>1</T.num>
              <T.punct>,</T.punct> <T.num>2</T.num>
              <T.punct>,</T.punct> <T.num>3</T.num>
              <T.punct>];</T.punct>
            </Line>
            <Line state="hl">
              <T.kw>const</T.kw> <T.attr>doubled</T.attr> <T.punct>=</T.punct>{" "}
              <T.attr>nums</T.attr>
              <T.punct>.</T.punct>
              <T.fn>map</T.fn>
              <T.punct>((</T.punct>
              <T.attr>n</T.attr>
              <T.punct>)</T.punct> <T.punct>=&gt;</T.punct> <T.attr>n</T.attr>{" "}
              <T.punct>*</T.punct> <T.num>2</T.num>
              <T.punct>);</T.punct>
            </Line>
            <Line>
              <T.fn>console</T.fn>
              <T.punct>.</T.punct>
              <T.fn>log</T.fn>
              <T.punct>(</T.punct>
              <T.attr>doubled</T.attr>
              <T.punct>);</T.punct> <T.com>// [2, 4, 6]</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>map</code> анхны массивыг <b>өөрчлөхгүй</b> — үргэлж шинэ
            массив буцаана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 08 · ДАСГАЛ 1 (§1) */}
      <Exercise
        label="Дасгал 1"
        page="08"
        total={TOTAL}
        tag="Дасгал 1 · хэсэг 1"
        title="forEach ба map"
        tasks={[
          <>
            <code>[1, 2, 3, 4]</code>-ийн элемент бүрийг <code>forEach</code>-оор
            10 дахин ихэсгэж хэвл.
          </>,
          <>
            <code>map</code>-оор тэдгээрийг 2 дахин ихэсгэсэн{" "}
            <b>шинэ массив</b> үүсгэж хэвл.
          </>,
          <>
            <code>[&quot;bold&quot;, &quot;saraa&quot;]</code>-г{" "}
            <code>map</code> + <code>toUpperCase()</code>-аар том үсэг болго.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 15 минут · шийдлийн жишээ"
            files={[{ name: "map.js", lang: "js", code: MAP_JS }]}
          />
        }
      />

      {/* 09 · map → UI */}
      <Slide
        label="map → UI"
        page="09"
        total={TOTAL}
        footer={{ tag: "§01 map", topic: "яагаад чухал" }}
      >
        <Frame>
          <Eyebrow className="anim">Урагшаа харах</Eyebrow>
          <h2 className="slide-title anim anim-2">map яагаад чухал вэ?</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Өгөгдөл → HTML",
                desc: "Массивыг картын жагсаалт болгож хувиргах.",
              },
              {
                idx: "02",
                title: "React-ийн үндэс",
                desc: "React-д жагсаалт render хийхэд map гол үүрэгтэй.",
              },
              {
                idx: "03",
                title: "Цэвэр, богино",
                desc: "for давталтаас илүү уншигдахуйц.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 10 · ДАСГАЛ 2 (§1) */}
      <Exercise
        label="Дасгал 2"
        page="10"
        total={TOTAL}
        tag="Дасгал 2 · хэсэг 1"
        title="Үнэ хувиргах"
        tasks={[
          <>
            Үнийн массив <code>[100, 250, 400]</code> өгөөд, <code>map</code>-
            оор 10% НӨАТ нэмсэн шинэ массив үүсгэ.
          </>,
          <>
            Тоонуудын массивыг <code>map</code>-оор «$N» текст массив болго.
          </>,
          <>
            Үр дүнг console-д хэвлэж, анхны массив <b>хэвээрээ</b> байгааг шалга.
          </>,
        ]}
        hints={[
          "НӨАТ: price * 1.1.",
          "Текст болгох: (p) => \"$\" + p.",
          "Анхны массивыг дахин хэвлээд өөрчлөгдөөгүйг хар.",
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
        resumeTopic="filter, find, reduce, chaining"
      />

      {/* ============================================================
          ХЭСЭГ 2 — filter / find / reduce
          ============================================================ */}

      {/* 12 · SECTION DIVIDER 2 */}
      <SectionDivider
        label="§ filter · reduce"
        page="12"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            filter, find,
            <br />
            reduce
          </>
        }
        lead="Нөхцөлөөр шүүх filter, эхнийг олох find, бүх элементийг нэг утга болгож хураах reduce ба тэдгээрийг холбохыг үзнэ."
      />

      {/* 13 · filter / find */}
      <Slide
        label="filter / find"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 filter", topic: "filter · find" }}
      >
        <Frame>
          <Eyebrow className="anim">Нөхцөлөөр сонгох</Eyebrow>
          <h2 className="slide-title anim anim-2">filter ба find</h2>
          <CompareTable
            className="anim anim-3"
            columns={[{ head: "Арга", width: "30%" }, { head: "Юу буцаах" }]}
            rows={[
              ["filter", "Нөхцөлд тэнцсэн БҮХ элемент (массив)."],
              ["find", "Нөхцөлд тэнцсэн ЭХНИЙ элемент (нэг утга)."],
              ["some", "Ядаж нэг нь тэнцэх үү? (boolean)."],
              ["every", "Бүгд тэнцэх үү? (boolean)."],
            ]}
          />
          <CodeCaption>
            Callback нь <b>boolean</b> буцаах ёстой — <code>true</code> бол тэр
            элемент үлдэнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · reduce + chaining */}
      <Slide
        label="reduce / chaining"
        page="14"
        total={TOTAL}
        footer={{ tag: "§02 filter", topic: "reduce · chaining" }}
      >
        <Frame>
          <Eyebrow className="anim">Хураах ба холбох</Eyebrow>
          <h2 className="slide-title anim anim-2">reduce ба chaining</h2>
          <CodeWindow
            numbered
            filename="reduce.js"
            lang="js"
            className="anim anim-3"
            style={{ marginTop: 24 }}
          >
            <Line>
              <T.com>// reduce — массивыг нэг утга болгох</T.com>
            </Line>
            <Line state="hl">
              <T.kw>const</T.kw> <T.attr>sum</T.attr> <T.punct>=</T.punct>{" "}
              <T.attr>nums</T.attr>
              <T.punct>.</T.punct>
              <T.fn>reduce</T.fn>
              <T.punct>((</T.punct>
              <T.attr>total</T.attr>
              <T.punct>,</T.punct> <T.attr>n</T.attr>
              <T.punct>)</T.punct> <T.punct>=&gt;</T.punct>{" "}
              <T.attr>total</T.attr> <T.punct>+</T.punct> <T.attr>n</T.attr>
              <T.punct>,</T.punct> <T.num>0</T.num>
              <T.punct>);</T.punct>
            </Line>
            <Line>
              <T.com>// chaining — дараалуулж холбох</T.com>
            </Line>
            <Line>
              <T.attr>nums</T.attr>
              <T.punct>.</T.punct>
              <T.fn>filter</T.fn>
              <T.punct>((</T.punct>
              <T.attr>n</T.attr>
              <T.punct>)</T.punct> <T.punct>=&gt;</T.punct> <T.attr>n</T.attr>{" "}
              <T.punct>&gt;</T.punct> <T.num>10</T.num>
              <T.punct>).</T.punct>
              <T.fn>map</T.fn>
              <T.punct>((</T.punct>
              <T.attr>n</T.attr>
              <T.punct>)</T.punct> <T.punct>=&gt;</T.punct> <T.attr>n</T.attr>{" "}
              <T.punct>*</T.punct> <T.num>2</T.num>
              <T.punct>);</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <code>reduce</code>-ийн <code>0</code> бол эхлэлийн утга.{" "}
            <b>Chaining</b>: эхлээд шүүгээд, дараа нь хувиргана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 15 · ДАСГАЛ 3 (§2) */}
      <Exercise
        label="Дасгал 3"
        page="15"
        total={TOTAL}
        tag="Дасгал 3 · хэсэг 2"
        title="Шүүх, олох, хураах"
        tasks={[
          <>
            <code>[5, 12, 8, 130, 44]</code>-аас <code>filter</code>-ээр 10-аас
            их элементүүдийг ав.
          </>,
          <>
            <code>find</code>-аар 100-аас их эхний элементийг ол.
          </>,
          <>
            <code>reduce</code>-аар бүх элементийн нийлбэрийг тооцоол.
          </>,
        ]}
        aside={
          <ExerciseFiles
            className="anim anim-4"
            caption="⏱ 20 минут · шийдлийн жишээ"
            files={[{ name: "filter.js", lang: "js", code: FILTER_JS }]}
          />
        }
      />

      {/* 16 · НИЙТЛЭГ АЛДАА */}
      <Slide
        label="нийтлэг алдаа"
        page="16"
        total={TOTAL}
        footer={{ tag: "§02 filter", topic: "нийтлэг алдаа" }}
      >
        <Frame>
          <Eyebrow className="anim">Болгоомжлох</Eyebrow>
          <h2 className="slide-title anim anim-2">Нийтлэг алдаа</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "map vs forEach хольдог",
                desc: "forEach undefined буцаана — map шинэ массив буцаана.",
              },
              {
                idx: "02",
                title: "return мартах",
                desc: "Хаалттай callback-д return хэрэгтэй: { return n*2; }.",
              },
              {
                idx: "03",
                title: "reduce-д эхлэл өгөхгүй",
                desc: "Хоёр дахь аргумент (0)-ийг мартвал алдаа гарч болзошгүй.",
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
        title="Chaining — дэлгүүрийн өгөгдөл"
        tasks={[
          <>
            Үнийн массив өгөөд, <code>filter</code>-ээр зөвхөн 1000-аас дээш
            үнэтэйг авч, <code>map</code>-оор 10% хямдруулсан массив гарга
            (chaining).
          </>,
          <>
            Дараа нь <code>reduce</code>-ээр тэр хямдруулсан үнийн нийт дүнг
            тооцоол.
          </>,
          <>
            <code>some</code> ба <code>every</code>-ийг ашиглан «ядаж нэг нь
            5000-аас их үү?», «бүгд 0-ээс их үү?»-г шалга.
          </>,
        ]}
        hints={[
          ".filter(...).map(...) дараалуулж холбоно.",
          "reduce((t, n) => t + n, 0).",
          "some/every нь boolean буцаана.",
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
        eyebrow="Хичээл 22 · юу сурсан"
        footer={{ tag: "erxes · хичээл 22", topic: "массивын аргууд" }}
        cards={[
          {
            num: "01",
            title: "map",
            desc: "Элемент бүрийг хувиргаж шинэ массив.",
          },
          {
            num: "02",
            title: "filter / find",
            desc: "Нөхцөлөөр шүүх / эхнийг олох.",
          },
          {
            num: "03",
            title: "reduce",
            desc: "Бүх элементийг нэг утга болгож хураах.",
          },
          {
            num: "04",
            title: "chaining",
            desc: "Аргуудыг дараалуулж холбох.",
          },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-22 · дууслаа</>}
        title={
          <>
            Асуулт
            <br />
            байна уу?
            <Cursor />
          </>
        }
        subtitle="Дараагийн хичээлд объект (object) үзэж, нэртэй талбаруудтай бүтэцтэй өгөгдөл загварчилж сурна. Гэртээ map/filter/reduce-ээ дадлагаж."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 22 — массивын аргууд</span>
          </>
        }
      />
    </Deck>
  );
}
