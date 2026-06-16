import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  Exercise,
  Break,
  Recap,
  Diagram,
  Node,
  Arrow,
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
  title: "erxes · 3 цагийн хичээлийн бүтэц — загвар",
};

/**
 * 3 ЦАГИЙН ХИЧЭЭЛИЙН БҮТЭЦ (загвар / scaffold).
 *
 * Нийт 180 минут = 160 минут хичээл + 20 минут завсарлага дунд нь.
 *   ~0:00–0:10  Нээлт ба төлөвлөгөө
 *   ~0:10–1:20  ХЭСЭГ 1 (заах + дасгал)        — ~70 мин
 *   ~1:20–1:40  ЗАВСАРЛАГА                      — 20 мин
 *   ~1:40–2:50  ХЭСЭГ 2 (заах + дасгал)        — ~70 мин
 *   ~2:50–3:00  Хураангуй ба асуулт
 *
 * Шинэ хичээл хийхдээ энэ файлыг хуулж (ж: app/lesson-NN/page.tsx), орлуулах
 * текстийг солиод хэсэг бүрийн контент слайдыг сэдэвтээ тааруулж нэмж/хасна.
 * Брандбар дээрх дугаарыг доорх `page` дугаар + `TOTAL`-оор тохируулна.
 */
const TOTAL = "15";

export default function LessonTemplate() {
  return (
    <Deck>
      {/* ~0:00–0:10 · НЭЭЛТ БА ТӨЛӨВЛӨГӨӨ */}

      {/* Гарчиг — энэ хичээл юуны тухай, сургалтын аль үед явж буй */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-NN · сэдэв</>}
        title={
          <>
            Хичээлийн
            <br />
            гарчиг энд
            <Cursor />
          </>
        }
        subtitle="Энэ 3 цагийн хичээл юуны тухай болохыг нэг өгүүлбэрээр тайлбарла."
        stages={
          <>
            <span className="on">01 · Шат</span>
            <span className="sep">→</span>
            <span>02 · Шат</span>
            <span className="sep">→</span>
            <span>03 · Шат</span>
          </>
        }
      />

      {/* Төлөвлөгөө — өнөөдрийн урсгал, завсарлагыг тодорхой дурдана */}
      <Slide label="Төлөвлөгөө" page="01" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">3 цаг · 20 минут завсарлагатай</Eyebrow>
          <h2 className="slide-title anim anim-2">Өнөөдрийн төлөвлөгөө</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              { idx: "01", title: "Хэсэг 1", desc: "Эхний хагасын гол сэдэв (~70 мин)." },
              { idx: "—", title: "Завсарлага", desc: "Дунд нь 20 минут амарна." },
              { idx: "02", title: "Хэсэг 2", desc: "Хоёр дахь хагасын гол сэдэв (~70 мин)." },
              { idx: "03", title: "Дасгал ба хураангуй", desc: "Гараар хийж, өнөөдрийг дүгнэнэ." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ============================================================
          ~0:10–1:20 · ХЭСЭГ 1 — заах (~55 мин) + дасгал (~15 мин)
          ============================================================ */}

      <SectionDivider
        label="Хэсэг 1"
        page="02"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Хэсэг 1-ийн
            <br />
            гарчиг
          </>
        }
        lead="Энэ хагаст юу үзэхийг товч танилцуулах өгүүлбэр."
      />

      {/* Контент 1 — гол ойлголт */}
      <KeyTerm
        label="Гол ойлголт"
        page="03"
        total={TOTAL}
        term="НЭР ТОМЪЁО"
        def={
          <>
            <b>Тэргүүн тодорхойлолт.</b> Гол санааг эхэнд нь тавьж, үлдсэн тайлбарыг
            энгийн үгээр энд бичнэ.
          </>
        }
        note="нэмэлт тэмдэглэл"
      />

      {/* Контент 2 — код, тайлбартай */}
      <Slide
        label="Код"
        page="04"
        total={TOTAL}
        footer={{ tag: "§1 хэсэг", topic: "сэдэв" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Код, тайлбартай</h2>
          <CodeWindow
            numbered
            filename="example.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 50 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>p</T.tag>
              <T.punct>&gt;</T.punct>Жишээ кодын мөр
              <T.punct>&lt;/</T.punct>
              <T.tag>p</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Дээрх кодын тухай <b>гол санаа</b> бүхий тайлбар.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* Контент 3 — жагсаалт */}
      <Slide label="Жагсаалт" page="05" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Гол санаанууд</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              { idx: "01", title: "Санаа", desc: "Энэ санааг дэмжих тайлбар." },
              { idx: "02", title: "Санаа", desc: "Энэ санааг дэмжих тайлбар." },
              { idx: "03", title: "Санаа", desc: "Энэ санааг дэмжих тайлбар." },
            ]}
          />
        </Frame>
      </Slide>

      {/* Контент 4 — диаграм */}
      <Slide label="Диаграм" page="06" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Урсгалын диаграм</h2>
          <Diagram className="anim anim-3">
            <Node variant="accent" title="A" sub="эхний зангилаа" />
            <Arrow label="алхам" />
            <Node title="B" sub="хоёр дахь зангилаа" />
          </Diagram>
        </Frame>
      </Slide>

      {/* Дасгал 1 — гараар хийх (~15 мин) */}
      <Exercise
        label="Дасгал 1"
        page="07"
        total={TOTAL}
        title="Хэсэг 1-ийн дасгал"
        tasks={[
          <>
            Гүйцэтгэх эхний <b>даалгавар</b>.
          </>,
          "Гүйцэтгэх хоёр дахь даалгавар.",
          "Гүйцэтгэх гурав дахь даалгавар.",
        ]}
        hints={["Тус болох зөвлөмж.", "Өөр нэг зөвлөмж."]}
        time="⏱ 15 минут"
      />

      {/* ============================================================
          ~1:20–1:40 · ЗАВСАРЛАГА — 20 минут
          ============================================================ */}
      <Break
        page="08"
        total={TOTAL}
        mins={20}
        resumeTopic="Хэсэг 2-ын гарчиг"
      />

      {/* ============================================================
          ~1:40–2:50 · ХЭСЭГ 2 — заах (~55 мин) + дасгал (~15 мин)
          ============================================================ */}

      <SectionDivider
        label="Хэсэг 2"
        page="09"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Хэсэг 2-ын
            <br />
            гарчиг
          </>
        }
        lead="Энэ хагаст юу үзэхийг товч танилцуулах өгүүлбэр."
      />

      {/* Контент 1 — гол ойлголт */}
      <KeyTerm
        label="Гол ойлголт"
        page="10"
        total={TOTAL}
        term="НЭР ТОМЪЁО"
        def={
          <>
            <b>Тэргүүн тодорхойлолт.</b> Гол санааг эхэнд нь тавьж, үлдсэн тайлбарыг
            энгийн үгээр энд бичнэ.
          </>
        }
        note="нэмэлт тэмдэглэл"
      />

      {/* Контент 2 — код, тайлбартай */}
      <Slide
        label="Код"
        page="11"
        total={TOTAL}
        footer={{ tag: "§2 хэсэг", topic: "сэдэв" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Код, тайлбартай</h2>
          <CodeWindow
            numbered
            filename="example.css"
            lang="css"
            className="anim anim-3"
            style={{ marginTop: 50 }}
          >
            <Line>
              <T.sel>.box</T.sel> <T.punct>{"{"}</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.prop>color</T.prop>
              <T.punct>:</T.punct> <T.num>#39d353</T.num>
              <T.punct>;</T.punct>
            </Line>
            <Line>
              <T.punct>{"}"}</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Дээрх кодын тухай <b>гол санаа</b> бүхий тайлбар.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* Контент 3 — жагсаалт */}
      <Slide label="Жагсаалт" page="12" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Гол санаанууд</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              { idx: "01", title: "Санаа", desc: "Энэ санааг дэмжих тайлбар." },
              { idx: "02", title: "Санаа", desc: "Энэ санааг дэмжих тайлбар." },
              { idx: "03", title: "Санаа", desc: "Энэ санааг дэмжих тайлбар." },
            ]}
          />
        </Frame>
      </Slide>

      {/* Контент 4 — диаграм */}
      <Slide label="Диаграм" page="13" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Урсгалын диаграм</h2>
          <Diagram className="anim anim-3">
            <Node variant="accent" title="A" sub="эхний зангилаа" />
            <Arrow label="алхам" />
            <Node title="B" sub="хоёр дахь зангилаа" />
          </Diagram>
        </Frame>
      </Slide>

      {/* Дасгал 2 — гараар хийх (~15 мин) */}
      <Exercise
        label="Дасгал 2"
        page="14"
        total={TOTAL}
        title="Хэсэг 2-ын дасгал"
        tasks={[
          <>
            Гүйцэтгэх эхний <b>даалгавар</b>.
          </>,
          "Гүйцэтгэх хоёр дахь даалгавар.",
          "Гүйцэтгэх гурав дахь даалгавар.",
        ]}
        hints={["Тус болох зөвлөмж.", "Өөр нэг зөвлөмж."]}
        time="⏱ 15 минут"
      />

      {/* ============================================================
          ~2:50–3:00 · ХУРААНГУЙ БА АСУУЛТ
          ============================================================ */}

      <Recap
        label="Хураангуй"
        page="15"
        total={TOTAL}
        eyebrow="Хичээл NN · юу сурсан"
        footer={{ tag: "erxes · хичээл NN", topic: "сэдэв" }}
        cards={[
          { num: "01", title: "Санаа", desc: "Эхний санааны нэг мөр хураангуй." },
          { num: "02", title: "Санаа", desc: "Хоёр дахь санааны нэг мөр хураангуй." },
          { num: "03", title: "Санаа", desc: "Гурав дахь санааны нэг мөр хураангуй." },
          { num: "04", title: "Санаа", desc: "Дөрөв дэх санааны нэг мөр хураангуй." },
        ]}
      />

      {/* Хаалт */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-NN · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Хаалтын мөр — дараагийн хичээлийн өмнө юу хийхийг сануул."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл NN — сэдэв</span>
          </>
        }
      />
    </Deck>
  );
}
