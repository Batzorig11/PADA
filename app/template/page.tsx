import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  StatSlide,
  CompareTable,
  DosDonts,
  Exercise,
  Callout,
  Recap,
  Terminal,
  TermComment,
  TermCmd,
  TermOut,
  Diagram,
  Node,
  Arrow,
  ResultPane,
  Slide,
  Frame,
  Eyebrow,
  Cursor,
  Remember,
  CodeWindow,
  CodeCaption,
  Line,
  T,
} from "@/components/slides";

export const metadata = {
  title: "erxes · Хичээлийн загвар — Компонентийн багц",
};

/**
 * Хоосон компонентийн багц — слайдын төрөл бүрээс нэг нэгээр, орлуулах тексттэй.
 * Шинэ хичээл хийхдээ энэ файлыг хуулж (ж: app/stage-02/page.tsx), хэрэгтэй
 * компонентуудаа үлдээгээд орлуулах текстийг солино. Брандбар дээрх дугаарыг
 * `page` / `total` пропоор тохируулна (эсвэл `page`-г хасвал брандбар алга болно).
 */
export default function Template() {
  const TT = "TT";
  return (
    <Deck>
      {/* ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>шат-NN · сэдэв</>}
        title={
          <>
            Хичээлийн
            <br />
            гарчиг энд
            <Cursor />
          </>
        }
        subtitle="Энэ хичээл юуны тухай болохыг нэг өгүүлбэрээр тайлбарла."
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

      {/* ХЭСГИЙН ХУВААРЬ */}
      <SectionDivider
        label="Хэсгийн хуваарь"
        page="NN"
        total={TT}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Хэсгийн
            <br />
            гарчиг
          </>
        }
        lead="Энэ хэсгийг товч танилцуулах өгүүлбэр."
      />

      {/* ОЙЛГОЛТЫН ЖАГСААЛТ */}
      <Slide label="Ойлголтын жагсаалт" page="NN" total={TT}>
        <Frame>
          <Eyebrow className="anim">Кикер / дэд гарчиг</Eyebrow>
          <h2 className="slide-title anim anim-2">Слайдын гарчиг</h2>
          <ConceptList
            className="anim anim-3"
            items={[
              { idx: "01", title: "Гол санаа", desc: "Энэ санааг дэмжих тайлбар." },
              { idx: "02", title: "Гол санаа", desc: "Энэ санааг дэмжих тайлбар." },
              { idx: "03", title: "Гол санаа", desc: "Энэ санааг дэмжих тайлбар." },
            ]}
          />
        </Frame>
      </Slide>

      {/* ГОЛ ОЙЛГОЛТ */}
      <KeyTerm
        label="Гол ойлголт"
        page="NN"
        total={TT}
        term="НЭР ТОМЪЁО"
        def={
          <>
            <b>Тэргүүн тодорхойлолт.</b> Гол санааг эхэнд нь тавьж, үлдсэн
            тайлбарыг энгийн үгээр энд бичнэ.
          </>
        }
        note="нэмэлт тэмдэглэл, баруун доод буланд"
      />

      {/* ТОМ ТОО / СТАТ */}
      <StatSlide
        label="Том тоо"
        page="NN"
        total={TT}
        num="00"
        statLabel="Энэ тоог тодотгож буй ганц өгүүлбэр."
        sub="Нэмэлт дэмжих мөр."
      />

      {/* КОД ЦОНХ */}
      <Slide
        label="Код цонх"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "сэдэв" }}
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
              <T.punct>&gt;</T.punct>Line бүрт яг нэг л эх мөр бич
              <T.punct>&lt;/</T.punct>
              <T.tag>p</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.com>// .hl тодотгоно · .dim бүдгэрүүлнэ · .add/.del ялгаа</T.com>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Дээрх кодын тухай <b>гол санаа</b> бүхий тайлбар.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* КОД + ҮР ДҮН */}
      <Slide
        label="Код + үр дүн"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "амьд үр дүн" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Код ба түүний үр дүн</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="style.css" lang="css">
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
            <ResultPane bodyStyle={{ background: "#0e120e", textAlign: "center" }}>
              <span style={{ color: "#39d353", fontSize: 28, fontWeight: 700 }}>
                гарсан үр дүн
              </span>
            </ResultPane>
          </div>
        </Frame>
      </Slide>

      {/* ӨМНӨ / ДАРАА */}
      <Slide
        label="Өмнө / дараа"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "өмнө / дараа" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Өмнө ба дараа</h2>
          <div className="compare anim anim-3">
            <div className="bad">
              <div className="col-head">
                <span className="badge" /> Өмнө
              </div>
              <CodeWindow sm filename="file.css">
                <Line state="del" indent={2}>
                  <T.prop>color</T.prop>
                  <T.punct>:</T.punct> <T.num>red</T.num>
                  <T.punct>;</T.punct>
                </Line>
              </CodeWindow>
            </div>
            <div className="good">
              <div className="col-head">
                <span className="badge" /> Дараа
              </div>
              <CodeWindow sm filename="file.css">
                <Line state="add" indent={2}>
                  <T.prop>color</T.prop>
                  <T.punct>:</T.punct> <T.num>var(--accent)</T.num>
                  <T.punct>;</T.punct>
                </Line>
              </CodeWindow>
            </div>
          </div>
        </Frame>
      </Slide>

      {/* ТЕРМИНАЛ */}
      <Slide
        label="Терминал"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "команд мөр" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Терминал блок</h2>
          <Terminal title="zsh — ~/project" className="anim anim-3" style={{ marginTop: 44 }}>
            <TermComment># тайлбар мөр</TermComment>
            <TermCmd>
              <span className="arg">команд</span> аргумент <span className="flag">--flag</span>
            </TermCmd>
            <TermOut ok>амжилттай гаралт</TermOut>
            <TermCmd cursor />
          </Terminal>
        </Frame>
      </Slide>

      {/* ДИАГРАМ */}
      <Slide
        label="Диаграм"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "урсгал" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Хайрцаг ба сум</h2>
          <Diagram className="anim anim-3">
            <Node variant="accent" title="A" sub="эхний зангилаа" />
            <Arrow label="алхам" />
            <Node title="B" sub="хоёр дахь зангилаа" />
          </Diagram>
        </Frame>
      </Slide>

      {/* ХАРЬЦУУЛАХ ХҮСНЭГТ */}
      <Slide
        label="Хүснэгт"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "харьцуулалт" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Харьцуулах хүснэгт</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Багана", width: "24%" },
              { head: "Багана", width: "30%" },
              { head: "Багана" },
            ]}
            rows={[
              [<code key="t">код</code>, "Нүд", "Тухайн мөрийн тайлбар текст."],
              [<code key="t">код</code>, "Нүд", "Тухайн мөрийн тайлбар текст."],
            ]}
          />
        </Frame>
      </Slide>

      {/* ЁСТОЙ / ЁСГҮЙ */}
      <Slide
        label="Ёстой / ёсгүй"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "сайн дадал" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Ёстой ба ёсгүй зүйл</h2>
          <DosDonts
            className="anim anim-3"
            doHead="Ёстой"
            dontHead="Ёсгүй"
            dos={["Сайн дадал.", "Өөр нэг сайн дадал.", "Бас нэг."]}
            donts={["Зайлсхийх алдаа.", "Өөр нэг алдаа.", "Бас нэг."]}
          />
        </Frame>
      </Slide>

      {/* ДАСГАЛ */}
      <Exercise
        label="Дасгал"
        page="NN"
        total={TT}
        title="Дасгалын гарчиг"
        tasks={[
          <>
            Гүйцэтгэх эхний <b>даалгавар</b>.
          </>,
          "Гүйцэтгэх хоёр дахь даалгавар.",
          "Гүйцэтгэх гурав дахь даалгавар.",
        ]}
        hints={["Тус болох зөвлөмж.", "Өөр нэг зөвлөмж.", "Бас нэг зөвлөмж."]}
        time="⏱ NN минут"
      />

      {/* ЭШЛЭЛ / КОЛЛАУТ */}
      <Callout
        label="Эшлэл"
        page="NN"
        total={TT}
        quote={
          <>
            Санахад амар, <span className="hi">гол үг</span> нь онцолсон мөр.
          </>
        }
        attr="зохиогч эсвэл тайлбар тэмдэглэл"
      />

      {/* САНАХ ЗҮЙЛ (хайрцагласан, frame дотор) */}
      <Slide
        label="Санах"
        page="NN"
        total={TT}
        footer={{ tag: "§NN хэсэг", topic: "онцлох" }}
      >
        <Frame>
          <Eyebrow className="anim">Кикер</Eyebrow>
          <h2 className="slide-title anim anim-2">Гол дүгнэлт</h2>
          <Remember style={{ marginTop: 50 }}>
            Энэ слайдаас <b>санах</b> ёстой ганц зүйлийг энгийнээр томьёол.
          </Remember>
        </Frame>
      </Slide>

      {/* ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="NN"
        total={TT}
        eyebrow="Шат NN · юу сурсан"
        footer={{ tag: "erxes · шат NN", topic: "сэдэв" }}
        cards={[
          { num: "01", title: "Санаа", desc: "Эхний санааны нэг мөр хураангуй." },
          { num: "02", title: "Санаа", desc: "Хоёр дахь санааны нэг мөр хураангуй." },
          { num: "03", title: "Санаа", desc: "Гурав дахь санааны нэг мөр хураангуй." },
          { num: "04", title: "Санаа", desc: "Дөрөв дэх санааны нэг мөр хураангуй." },
        ]}
      />

      {/* ХААЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>шат-NN · дууслаа</>}
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
            <span>шат NN — сэдэв</span>
          </>
        }
      />
    </Deck>
  );
}
