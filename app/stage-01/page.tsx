import Image from "next/image";
import Deck from "@/components/Deck";
import {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  StatSlide,
  CompareTable,
  Exercise,
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
  CodeWindow,
  CodeCaption,
  Line,
  T,
} from "@/components/slides";

export const metadata = {
  title: "erxes · Хичээл 01 — Вэб хөгжүүлэлтийн үндэс",
};

const TOTAL = "33";

export default function Stage01() {
  return (
    <Deck>
      {/* 01 · ГАРЧИГ */}
      <TitleSlide
        label="Гарчиг"
        prompt={<>хичээл-01 · вэб хөгжүүлэлтийн үндэс</>}
        title={
          <>
            Вэбийн
            <br />
            үндэс
            <Cursor />
          </>
        }
        subtitle="Вэб сайт юу болох, хаанаас эхтэй, терминал, фронтенд ба бэкенд, HTML, CSS, JavaScript хүртэл — бүрэн эхнээс нь."
        stages={
          <>
            <span className="on">01 · Үндэс</span>
            <span className="sep">→</span>
            <span>02 · JavaScript</span>
            <span className="sep">→</span>
            <span>03 · React &amp; Next.js</span>
          </>
        }
      />

      {/* 02 · ӨНӨӨДРИЙН ТӨЛӨВЛӨГӨӨ */}
      <Slide label="Төлөвлөгөө" page="02" total={TOTAL}>
        <Frame>
          <Eyebrow className="anim">Өнөөдөр · 2–3 цаг</Eyebrow>
          <h2 className="slide-title anim anim-2">Бид юу үзэх вэ?</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "01",
                title: "Вэб сайт гэж юу вэ",
                desc: "Үндэс, гарал үүсэл ба товч түүх.",
              },
              {
                idx: "02",
                title: "Фронтенд ба Бэкенд",
                desc: "Вэбийн харагдах тал ба арын тал.",
              },
              {
                idx: "03",
                title: "Терминал",
                desc: "Команд мөр ба өдөр тутмын үндсэн тушаалууд.",
              },
              {
                idx: "04",
                title: "HTML, CSS, JavaScript",
                desc: "Фронтендийг бүрдүүлэгч гурван хэл.",
              },
              {
                idx: "05",
                title: "Үндсэн HTML таг",
                desc: "Контентоо утга бүхий тагаар бүтэцлэх нь.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 03 · ХЭСЭГ 01 */}
      <SectionDivider
        label="§ Вэб сайт гэж юу вэ"
        page="03"
        total={TOTAL}
        ghost="01"
        section="ХЭСЭГ 01"
        title={
          <>
            Вэб сайт
            <br />
            гэж юу вэ?
          </>
        }
        lead="Эхлээд бид өдөр бүр хэрэглэдэг вэб сайт юунаас бүрддэгийг ойлгоё."
      />

      {/* 04 · ГОЛ ОЙЛГОЛТ: ВЭБ САЙТ */}
      <KeyTerm
        label="Гол ойлголт: Вэб сайт"
        page="04"
        total={TOTAL}
        term="Вэб сайт"
        def={
          <>
            <b>Вэб сайт</b> гэдэг нь интернэтэд байршсан, хоорондоо холбоотой вэб
            хуудсуудын цогц юм. Хөтөч (browser) тэдгээрийг татаж аваад дэлгэцэнд{" "}
            <span className="inline-code">харуулдаг</span>.
          </>
        }
        note="вэб хуудас → вэб сайт → интернэт"
      />

      {/* 05 · ВЭБ ЮУНААС БҮРДДЭГ ВЭ */}
      <Slide
        label="Үндсэн бүрэлдэхүүн"
        page="05"
        total={TOTAL}
        footer={{ tag: "§01 вэб сайт", topic: "бүрэлдэхүүн" }}
      >
        <Frame>
          <Eyebrow className="anim">Үндсэн бүрэлдэхүүн</Eyebrow>
          <h2 className="slide-title anim anim-2">Вэб юунаас бүрддэг вэ?</h2>
          <ConceptList
            num
            className="anim anim-3"
            style={{ marginTop: 48 }}
            items={[
              {
                idx: "01",
                title: "Вэб хуудас",
                desc: "HTML файлд бичигдсэн нэг хуудас контент.",
              },
              {
                idx: "02",
                title: "Хөтөч (Browser)",
                desc: "Chrome, Firefox зэрэг — хуудсыг уншиж дэлгэцэнд зурдаг программ.",
              },
              {
                idx: "03",
                title: "Сервер",
                desc: "Вэбийн файлуудыг хадгалж, хүсэлтээр илгээдэг компьютер.",
              },
              {
                idx: "04",
                title: "Хаяг (URL)",
                desc: "Тухайн хуудас интернэтэд хаана байгааг заадаг хаяг.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 06 · ХҮСЭЛТ БА ХАРИУ */}
      <Slide
        label="Хүсэлт ба хариу"
        page="06"
        total={TOTAL}
        footer={{ tag: "§01 вэб сайт", topic: "хүсэлт / хариу" }}
      >
        <Frame>
          <Eyebrow className="anim">Хүсэлт ба хариу</Eyebrow>
          <h2 className="slide-title anim anim-2">Вэб сайт хэрхэн ирдэг вэ?</h2>
          <Diagram className="anim anim-3">
            <Node variant="accent" title="Хөтөч" sub="клиент · таны төхөөрөмж" />
            <Arrow label="GET хүсэлт" />
            <Node title="Сервер" sub="файлуудыг хадгална" />
          </Diagram>
          <Diagram className="anim anim-4" style={{ marginTop: 40 }}>
            <Node title="Сервер" sub="файлуудыг буцаана" />
            <Arrow label="HTML · CSS · JS" />
            <Node variant="accent" title="Хөтөч" sub="хуудсыг зурна" />
          </Diagram>
          <CodeCaption style={{ marginTop: 54 }}>
            Та хаяг бичихэд хөтөч серверээс файл <b>гуйж</b>, сервер{" "}
            <b>хариулдаг</b>. Энэ нэг л явц бол вэбийн мөн чанар.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 07 · ВЭБИЙН ТҮҮХ */}
      <Slide
        label="Вэбийн түүх"
        page="07"
        total={TOTAL}
        footer={{ tag: "§01 вэб сайт", topic: "түүх" }}
      >
        <Frame>
          <Eyebrow className="anim">Хаанаас эхтэй вэ</Eyebrow>
          <h2 className="slide-title anim anim-2">Вэбийн товч түүх</h2>
          <ConceptList
            num
            compact
            className="anim anim-3"
            items={[
              {
                idx: "1989",
                title: "World Wide Web",
                desc: "Тим Бернерс-Ли ЦЕРН-д вэбийн санааг дэвшүүлэв.",
              },
              {
                idx: "1991",
                title: "Анхны вэб сайт",
                desc: "info.cern.ch хаягаар дэлхийн анхны вэб сайт нийтлэгдэв.",
              },
              {
                idx: "1993",
                title: "Mosaic хөтөч",
                desc: "Зурагтай вэбийг олон нийтэд таниулсан хөтөч гарч ирэв.",
              },
              {
                idx: "1995",
                title: "JavaScript",
                desc: "Вэб интерактив болж, товшилтод хариу үзүүлдэг боллоо.",
              },
              {
                idx: "Өнөөдөр",
                title: "Тэрбум вэб сайт",
                desc: "Гар утас, апп, хиймэл оюунтай холбогдсон асар том ертөнц.",
              },
            ]}
          />
        </Frame>
      </Slide>

      {/* 08 · ГАРАЛ ҮҮСЭЛ */}
      <StatSlide
        label="Гарал үүсэл"
        page="08"
        total={TOTAL}
        num="1989"
        statLabel="онд Тим Бернерс-Ли ЦЕРН-д World Wide Web-ийг зохион бүтээжээ."
        sub="HTML, URL, HTTP — өнөөгийн вэбийн суурь технологиуд тэндээс эхэлсэн."
      />

      {/* 09 · ХЭСЭГ 02 — ФРОНТЕНД БА БЭКЕНД */}
      <SectionDivider
        label="§ Фронтенд ба Бэкенд"
        page="09"
        total={TOTAL}
        ghost="02"
        section="ХЭСЭГ 02"
        title={
          <>
            Фронтенд ба
            <br />
            Бэкенд
          </>
        }
        lead="Нэг вэб сайт хоёр талтай: хэрэглэгчийн харагдах тал ба нуугдсан арын тал."
      />

      {/* 10 · СИСТЕМ ХЭРХЭН АЖИЛЛАДАГ ВЭ */}
      <Slide
        label="Архитектур"
        page="10"
        total={TOTAL}
        footer={{ tag: "§02 фронтенд ба бэкенд", topic: "архитектур" }}
      >
        <Frame>
          <Eyebrow className="anim">Хоёр тал</Eyebrow>
          <h2 className="slide-title anim anim-2">Систем хэрхэн ажилладаг вэ</h2>
          <Diagram className="anim anim-3">
            <Node variant="accent" title="Фронтенд" sub="хэрэглэгч харна · хөтөч" />
            <Arrow label="хүсэлт" />
            <Node title="Бэкенд" sub="сервер · логик" />
            <Arrow label="асуулга" />
            <Node variant="amber" title="Өгөгдлийн сан" sub="мэдээлэл хадгална" />
          </Diagram>
          <CodeCaption style={{ marginTop: 54 }}>
            <b>Фронтенд</b> бол таны нүдэнд харагдах хэсэг, <b>бэкенд</b> бол
            өгөгдөл, логикийг зохицуулдаг далд хэсэг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 11 · ФРОНТЕНД БА БЭКЕНД ХАРЬЦУУЛАЛТ */}
      <Slide
        label="Харьцуулалт"
        page="11"
        total={TOTAL}
        footer={{ tag: "§02 фронтенд ба бэкенд", topic: "харьцуулалт" }}
      >
        <Frame>
          <Eyebrow className="anim">Ялгааг нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Фронтенд ба Бэкенд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Шинж", width: "24%" },
              { head: "Фронтенд", width: "38%" },
              { head: "Бэкенд" },
            ]}
            rows={[
              ["Үүрэг", "Харагдах байдал, харилцан үйлдэл", "Өгөгдөл, логик, аюулгүй байдал"],
              ["Хаана ажилладаг", "Хэрэглэгчийн хөтөч дээр", "Сервер дээр"],
              ["Технологи", "HTML, CSS, JavaScript", "Сервер хэл, өгөгдлийн сан"],
              ["Жишээ", "Товч, форм, хөдөлгөөн", "Нэвтрэлт, төлбөр, хадгалалт"],
            ]}
          />
        </Frame>
      </Slide>

      {/* 12 · ХЭСЭГ 03 — ТЕРМИНАЛ */}
      <SectionDivider
        label="§ Терминал"
        page="12"
        total={TOTAL}
        ghost="03"
        section="ХЭСЭГ 03"
        title="Терминал"
        lead="Хулганаар бус, бичсэн командаар компьютертэйгээ ярилцах нь."
      />

      {/* 13 · ГОЛ ОЙЛГОЛТ: ТЕРМИНАЛ */}
      <KeyTerm
        label="Гол ойлголт: Терминал"
        page="13"
        total={TOTAL}
        term="Терминал"
        def={
          <>
            <b>Терминал</b> (команд мөр) гэдэг нь компьютерт бичгээр{" "}
            <span className="inline-code">тушаал</span> өгдөг цонх юм. Хэдхэн
            команд олон удаа товших, дарахыг орлоно.
          </>
        }
        note="хөгжүүлэгчийн өдөр тутмын зэвсэг"
      />

      {/* 14 · ҮНДСЭН КОМАНДУУД */}
      <Slide
        label="Үндсэн командууд"
        page="14"
        total={TOTAL}
        footer={{ tag: "§03 терминал", topic: "команд мөр" }}
      >
        <Frame>
          <Eyebrow className="anim">Компьютертэйгээ ярих нь</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Үндсэн командууд</h2>
          <Terminal
            title="zsh — ~/projects"
            className="anim anim-3"
            style={{ marginTop: 44 }}
          >
            <TermComment># шинэ хавтас үүсгэх</TermComment>
            <TermCmd>
              <span className="arg">mkdir</span> my-site
            </TermCmd>
            <TermCmd>
              <span className="arg">cd</span> my-site
            </TermCmd>
            <TermComment># файл үүсгэх</TermComment>
            <TermCmd>
              <span className="arg">touch</span> index.html
            </TermCmd>
            <TermCmd>
              <span className="arg">ls</span>
            </TermCmd>
            <TermOut ok>index.html</TermOut>
            <TermCmd cursor />
          </Terminal>
          <CodeCaption>
            <b>mkdir</b> хавтас үүсгэнэ, <b>cd</b> дотор нь орно, <b>ls</b> доторх
            зүйлсийг жагсаана, <b>touch</b> файл үүсгэнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 12 · КОМАНДЫН ТОЛЬ */}
      <Slide
        label="Командын толь"
        page="12"
        total={TOTAL}
        footer={{ tag: "§02 терминал", topic: "толь бичиг" }}
      >
        <Frame>
          <Eyebrow className="anim">Багц толь бичиг</Eyebrow>
          <h2 className="slide-title anim anim-2">Байнга хэрэглэх командууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Команд", width: "22%" },
              { head: "Утга", width: "26%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="t">pwd</code>, "Одоогийн байрлал", "Яг одоо аль хавтаст байгааг харуулна."],
              [<code key="t">ls</code>, "Жагсаах", "Хавтас доторх файл, дэд хавтсыг харуулна."],
              [
                <code key="t">cd</code>,
                "Шилжих",
                <>
                  Өөр хавтас руу орох (<code>cd ..</code> → ухрах).
                </>,
              ],
              [<code key="t">mkdir</code>, "Хавтас үүсгэх", "Шинэ хоосон хавтас үүсгэнэ."],
              [<code key="t">touch</code>, "Файл үүсгэх", "Шинэ хоосон файл үүсгэнэ."],
            ]}
          />
        </Frame>
      </Slide>

      {/* 13 · ЖИЖИГ ТӨСЛИЙН УРСГАЛ */}
      <Slide
        label="Төслийн урсгал"
        page="13"
        total={TOTAL}
        footer={{ tag: "§02 терминал", topic: "урсгал" }}
      >
        <Frame>
          <Eyebrow className="anim">Бодит жишээ</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Жижиг төслийн урсгал</h2>
          <Terminal
            title="zsh — ~/projects"
            className="anim anim-3"
            style={{ marginTop: 44 }}
          >
            <TermComment># хавтас үүсгээд дотор нь орох</TermComment>
            <TermCmd>
              <span className="arg">mkdir</span> my-site <span className="flag">&amp;&amp;</span>{" "}
              <span className="arg">cd</span> my-site
            </TermCmd>
            <TermComment># файлууд үүсгэх</TermComment>
            <TermCmd>
              <span className="arg">touch</span> index.html style.css
            </TermCmd>
            <TermCmd>
              <span className="arg">ls</span>
            </TermCmd>
            <TermOut ok>index.html style.css</TermOut>
            <TermComment># одоо байгаа байрлалаа шалгах</TermComment>
            <TermCmd>
              <span className="arg">pwd</span>
            </TermCmd>
            <TermOut>/Users/erxes/projects/my-site</TermOut>
            <TermCmd cursor />
          </Terminal>
          <CodeCaption>
            Хэдхэн команд нэгдээд нэг ажлын урсгал болж байна — энэ бол өдөр бүр
            давтагдах мөчлөг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 14 · ХЭСЭГ 03 */}
      <SectionDivider
        label="§ Фронтенд ба Бэкенд"
        page="14"
        total={TOTAL}
        ghost="03"
        section="ХЭСЭГ 03"
        title={
          <>
            Фронтенд ба
            <br />
            Бэкенд
          </>
        }
        lead="Нэг вэб сайт хоёр талтай: хэрэглэгчийн харагдах тал ба нуугдсан арын тал."
      />

      {/* 15 · СИСТЕМ ХЭРХЭН АЖИЛЛАДАГ ВЭ */}
      <Slide
        label="Архитектур"
        page="15"
        total={TOTAL}
        footer={{ tag: "§03 фронтенд ба бэкенд", topic: "архитектур" }}
      >
        <Frame>
          <Eyebrow className="anim">Хоёр тал</Eyebrow>
          <h2 className="slide-title anim anim-2">Систем хэрхэн ажилладаг вэ</h2>
          <Diagram className="anim anim-3">
            <Node variant="accent" title="Фронтенд" sub="хэрэглэгч харна · хөтөч" />
            <Arrow label="хүсэлт" />
            <Node title="Бэкенд" sub="сервер · логик" />
            <Arrow label="асуулга" />
            <Node variant="amber" title="Өгөгдлийн сан" sub="мэдээлэл хадгална" />
          </Diagram>
          <CodeCaption style={{ marginTop: 54 }}>
            <b>Фронтенд</b> бол таны нүдэнд харагдах хэсэг, <b>бэкенд</b> бол
            өгөгдөл, логикийг зохицуулдаг далд хэсэг.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 16 · ФРОНТЕНД БА БЭКЕНД ХАРЬЦУУЛАЛТ */}
      <Slide
        label="Харьцуулалт"
        page="16"
        total={TOTAL}
        footer={{ tag: "§03 фронтенд ба бэкенд", topic: "харьцуулалт" }}
      >
        <Frame>
          <Eyebrow className="anim">Ялгааг нь</Eyebrow>
          <h2 className="slide-title anim anim-2">Фронтенд ба Бэкенд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Шинж", width: "24%" },
              { head: "Фронтенд", width: "38%" },
              { head: "Бэкенд" },
            ]}
            rows={[
              ["Үүрэг", "Харагдах байдал, харилцан үйлдэл", "Өгөгдөл, логик, аюулгүй байдал"],
              ["Хаана ажилладаг", "Хэрэглэгчийн хөтөч дээр", "Сервер дээр"],
              ["Технологи", "HTML, CSS, JavaScript", "Сервер хэл, өгөгдлийн сан"],
              ["Жишээ", "Товч, форм, хөдөлгөөн", "Нэвтрэлт, төлбөр, хадгалалт"],
            ]}
          />
        </Frame>
      </Slide>

      {/* 17 · ХЭСЭГ 04 */}
      <SectionDivider
        label="§ HTML, CSS, JavaScript"
        page="17"
        total={TOTAL}
        ghost="04"
        section="ХЭСЭГ 04"
        title={
          <>
            HTML, CSS,
            <br />
            JavaScript
          </>
        }
        lead="Фронтендийг бүрдүүлэгч гурван хэл — бүтэц, загвар, үйлдэл."
      />

      {/* 18 · ЯАГААД ГУРВАН ХЭЛ ВЭ */}
      <StatSlide
        label="Яагаад чухал вэ"
        page="18"
        total={TOTAL}
        num="3"
        statLabel="хэл фронтендийн бараг бүх вэб сайтыг ажиллуулдаг — өнөөдөр та эхнийхийг нь эхэлж байна."
        sub="HTML бүтэц · CSS загвар · JavaScript үйлдэл өгдөг."
      />

      {/* 19 · ГОЛ ОЙЛГОЛТ: HTML */}
      <KeyTerm
        label="Гол ойлголт: HTML"
        page="19"
        total={TOTAL}
        term="HTML"
        def={
          <>
            <b>HyperText Markup Language.</b> Контентоо{" "}
            <span className="inline-code">таг</span>-аар ороож утга өгдөг — энэ нь
            гарчиг, тэр нь догол мөр, энэ нь товч гэдгийг заана.
          </>
        }
        note="программчлалын бус — тэмдэглэгээний хэл"
      />

      {/* 20 · ГОЛ ОЙЛГОЛТ: CSS */}
      <KeyTerm
        label="Гол ойлголт: CSS"
        page="20"
        total={TOTAL}
        term="CSS"
        def={
          <>
            <b>Cascading Style Sheets.</b> Элементүүдийг сонгож, тэдгээр хэрхэн
            харагдахыг — өнгө, хэмжээ, зай, байршлыг —{" "}
            <span className="inline-code">дүрэм</span>-ээр зарлана.
          </>
        }
        note="бүтэц HTML-д · харагдац CSS-д"
      />

      {/* 21 · ГОЛ ОЙЛГОЛТ: JAVASCRIPT */}
      <KeyTerm
        label="Гол ойлголт: JavaScript"
        page="21"
        total={TOTAL}
        term="JavaScript"
        def={
          <>
            <b>JavaScript.</b> Хуудсыг амьд болгодог{" "}
            <span className="inline-code">программчлалын</span> хэл — товч дарахад
            хариу үзүүлэх, контент өөрчлөх, өгөгдөл татах зэргийг гүйцэтгэнэ.
          </>
        }
        note="Шат 02-т дэлгэрэнгүй үзнэ"
      />

      {/* 22 · ГУРВАН ХЭЛ, ГУРВАН ҮҮРЭГ */}
      <Slide
        label="Гурван хэл"
        page="22"
        total={TOTAL}
        footer={{ tag: "§04 html · css · js", topic: "үүрэг" }}
      >
        <Frame>
          <Eyebrow className="anim">Үүргийн хуваарилалт</Eyebrow>
          <h2 className="slide-title anim anim-2">Гурван хэл, гурван үүрэг</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Хэл", width: "20%" },
              { head: "Үүрэг", width: "26%" },
              { head: "Адилтгал — байшин барих" },
            ]}
            rows={[
              ["HTML", "Бүтэц ба контент", "Суурь, хана, өрөө — юу байгаа нь."],
              ["CSS", "Гадаад үзэмж", "Будаг, тавилга, зохион байгуулалт — ямар харагдах нь."],
              ["JavaScript", "Үйлдэл", "Гэрэл, хаалга, ус — юу хийдэг нь."],
            ]}
          />
          <CodeCaption>
            Өнөөдөр <b>HTML ба CSS</b> дээр төвлөрнө. JavaScript бол Шат 02.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 23 · ХЭСЭГ 05 */}
      <SectionDivider
        label="§ Үндсэн HTML таг"
        page="23"
        total={TOTAL}
        ghost="05"
        section="ХЭСЭГ 05"
        title={
          <>
            Үндсэн
            <br />
            HTML таг
          </>
        }
        lead="Контентоо утга бүхий тагуудаар ороож, хуудсаа бүтэцлэе."
      />

      {/* 24 · АНХНЫ HTML ХУУДАС */}
      <Slide
        label="Анхны HTML хуудас"
        page="24"
        total={TOTAL}
        footer={{ tag: "§05 html таг", topic: "суурь · мөр 04" }}
      >
        <Frame>
          <Eyebrow className="anim">Суурь бүтэц</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Анхны HTML хуудас</h2>
          <CodeWindow
            numbered
            sm
            filename="index.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.punct>&lt;!</T.punct>
              <T.kw>DOCTYPE</T.kw> <T.attr>html</T.attr>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>html</T.tag> <T.attr>lang</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;mn&quot;</T.str>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>meta</T.tag> <T.attr>charset</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;UTF-8&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>erxes
              <T.punct>&lt;/</T.punct>
              <T.tag>title</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>head</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>Сайн байна уу!
              <T.punct>&lt;/</T.punct>
              <T.tag>h1</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>body</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>html</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            Тодруулсан <b>charset</b> мөр хөтөчид Юникод уншихыг хэлдэг — ингэснээр{" "}
            <b>Сайн байна уу!</b> зөв харагдана.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 25 · ТАГИЙН БҮТЭЦ */}
      <Slide
        label="Тагийн бүтэц"
        page="25"
        total={TOTAL}
        footer={{ tag: "§05 html таг", topic: "элемент" }}
      >
        <Frame>
          <Eyebrow className="anim">Анхааралтай уншъя</Eyebrow>
          <h2 className="slide-title anim anim-2">Тагийн бүтэц</h2>
          <CodeWindow
            numbered
            filename="profile.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 50 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>a</T.tag> <T.attr>href</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;/signup&quot;</T.str>
              <T.punct>&gt;</T.punct>Бүртгүүлэх
              <T.punct>&lt;/</T.punct>
              <T.tag>a</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <div
            className="diagram anim anim-4"
            style={{ marginTop: 44, justifyContent: "flex-start", gap: 64 }}
          >
            <div>
              <div style={{ fontSize: 30, color: "var(--s-tag)", fontWeight: 700 }}>
                &lt;a&gt;
              </div>
              <div style={{ fontSize: 24, color: "var(--muted)", marginTop: 8 }}>
                нээх таг
              </div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-attr)", fontWeight: 700 }}>
                href=&quot;/signup&quot;
              </div>
              <div style={{ fontSize: 24, color: "var(--muted)", marginTop: 8 }}>
                атрибут
              </div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--fg)", fontWeight: 700 }}>
                Бүртгүүлэх
              </div>
              <div style={{ fontSize: 24, color: "var(--muted)", marginTop: 8 }}>
                контент
              </div>
            </div>
            <div>
              <div style={{ fontSize: 30, color: "var(--s-tag)", fontWeight: 700 }}>
                &lt;/a&gt;
              </div>
              <div style={{ fontSize: 24, color: "var(--muted)", marginTop: 8 }}>
                хаах таг
              </div>
            </div>
          </div>
        </Frame>
      </Slide>

      {/* 26 · БАЙНГА ХЭРЭГЛЭХ ТАГУУД */}
      <Slide
        label="Үндсэн тагууд"
        page="26"
        total={TOTAL}
        footer={{ tag: "§05 html таг", topic: "толь бичиг" }}
      >
        <Frame>
          <Eyebrow className="anim">Эхлэлийн толь бичиг</Eyebrow>
          <h2 className="slide-title anim anim-2">Байнга хэрэглэх тагууд</h2>
          <CompareTable
            className="anim anim-3"
            columns={[
              { head: "Таг", width: "26%" },
              { head: "Утга", width: "26%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [
                <code key="t">&lt;h1&gt;–&lt;h6&gt;</code>,
                "Гарчиг",
                "Гол ба дэд гарчгууд, чухлаас бага руу.",
              ],
              [<code key="t">&lt;p&gt;</code>, "Догол мөр", "Урсгал текстийн блок."],
              [<code key="t">&lt;a&gt;</code>, "Холбоос", "Өөр хуудас, URL руу шилжих."],
              [
                <code key="t">&lt;img&gt;</code>,
                "Зураг",
                <>
                  Зураг харуулах — <code>src</code>, <code>alt</code> шаардлагатай.
                </>,
              ],
              [
                <code key="t">&lt;ul&gt; &lt;li&gt;</code>,
                "Жагсаалт",
                "Холбоотой зүйлсийн цэгэн жагсаалт.",
              ],
              [
                <code key="t">&lt;div&gt; &lt;span&gt;</code>,
                "Сав",
                "Контентыг бүлэглэх ерөнхий саванууд.",
              ],
            ]}
          />
        </Frame>
      </Slide>

      {/* 27 · ТАГУУДЫГ НЭГТГЭХЭД */}
      <Slide
        label="Жишээ"
        page="27"
        total={TOTAL}
        footer={{ tag: "§05 html таг", topic: "жишээ" }}
      >
        <Frame>
          <Eyebrow className="anim">Хэрэглээ</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Тагуудыг нэгтгэхэд</h2>
          <div className="code-split anim anim-3" style={{ marginTop: 44 }}>
            <CodeWindow sm filename="profile.html" lang="html">
              <Line>
                <T.punct>&lt;</T.punct>
                <T.tag>article</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>h1</T.tag>
                <T.punct>&gt;</T.punct>Бат
                <T.punct>&lt;/</T.punct>
                <T.tag>h1</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>Фронтенд хөгжүүлэгч
                <T.punct>&lt;/</T.punct>
                <T.tag>p</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line indent={2}>
                <T.punct>&lt;</T.punct>
                <T.tag>a</T.tag> <T.attr>href</T.attr>
                <T.punct>=</T.punct>
                <T.str>&quot;#&quot;</T.str>
                <T.punct>&gt;</T.punct>Профайл
                <T.punct>&lt;/</T.punct>
                <T.tag>a</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
              <Line>
                <T.punct>&lt;/</T.punct>
                <T.tag>article</T.tag>
                <T.punct>&gt;</T.punct>
              </Line>
            </CodeWindow>
            <ResultPane bodyStyle={{ background: "#fff" }}>
              <h1 style={{ margin: 0, fontSize: 40, color: "#111" }}>Бат</h1>
              <p style={{ margin: "12px 0 0", fontSize: 22, color: "#555" }}>
                Фронтенд хөгжүүлэгч
              </p>
              <a
                href="#"
                style={{ display: "inline-block", marginTop: 18, fontSize: 20, color: "#1a7f37" }}
              >
                Профайл
              </a>
            </ResultPane>
          </div>
          <CodeCaption>
            Цөөн таг нэгдээд утга бүхий жижиг хуудас болж байна — энэ бол HTML-ийн
            мөн чанар.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 28 · ФОРМЫН БҮТЭЦ (ЖИШЭЭ КОД) */}
      <Slide
        label="Формын бүтэц"
        page="28"
        total={TOTAL}
        footer={{ tag: "§05 html таг", topic: "форм" }}
      >
        <Frame>
          <Eyebrow className="anim">Жишээгээр</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Формын бүтэц</h2>
          <CodeWindow
            numbered
            sm
            filename="register.html"
            lang="html"
            className="anim anim-3"
            style={{ marginTop: 40 }}
          >
            <Line>
              <T.punct>&lt;</T.punct>
              <T.tag>form</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>label</T.tag>
              <T.punct>&gt;</T.punct>Бүтэн нэр:
              <T.punct>&lt;/</T.punct>
              <T.tag>label</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>input</T.tag> <T.attr>type</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;text&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>label</T.tag>
              <T.punct>&gt;</T.punct>Имэйл:
              <T.punct>&lt;/</T.punct>
              <T.tag>label</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line state="hl" indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>input</T.tag> <T.attr>type</T.attr>
              <T.punct>=</T.punct>
              <T.str>&quot;email&quot;</T.str> <T.punct>/&gt;</T.punct>
            </Line>
            <Line indent={2}>
              <T.punct>&lt;</T.punct>
              <T.tag>button</T.tag>
              <T.punct>&gt;</T.punct>Бүртгүүлэх
              <T.punct>&lt;/</T.punct>
              <T.tag>button</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
            <Line>
              <T.punct>&lt;/</T.punct>
              <T.tag>form</T.tag>
              <T.punct>&gt;</T.punct>
            </Line>
          </CodeWindow>
          <CodeCaption>
            <b>&lt;form&gt;</b> талбаруудыг багтаана, <b>&lt;label&gt;</b> нэрлэнэ,{" "}
            <b>&lt;input&gt;</b> утга авна, <b>&lt;button&gt;</b> формыг илгээнэ.
          </CodeCaption>
        </Frame>
      </Slide>

      {/* 29 · ФОРМЫН ТАГУУДЫН ТАЙЛБАР */}
      <Slide
        label="Формын тагууд"
        page="29"
        total={TOTAL}
        footer={{ tag: "§05 html таг", topic: "формын тагууд" }}
      >
        <Frame>
          <Eyebrow className="anim">Таг бүрийн утга</Eyebrow>
          <h2 className="slide-title anim anim-2">Формын тагуудын тайлбар</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Таг / төрөл", width: "30%" },
              { head: "Нэр", width: "20%" },
              { head: "Юунд хэрэглэх" },
            ]}
            rows={[
              [<code key="t">&lt;form&gt;</code>, "Форм", "Бүх талбарыг багтааж, илгээх үйлдлийг зохицуулна."],
              [<code key="t">&lt;label&gt;</code>, "Шошго", "Талбарын нэр — хэрэглэгчид юу бичихийг заана."],
              [
                <code key="t">&lt;input type=&quot;text&quot;&gt;</code>,
                "Текст",
                "Бүтэн нэр, нэвтрэх нэр зэрэг энгийн текст.",
              ],
              [
                <code key="t">&lt;input type=&quot;email&quot;&gt;</code>,
                "Имэйл",
                "Имэйл хаяг — форматыг шалгана.",
              ],
              [
                <code key="t">&lt;input type=&quot;password&quot;&gt;</code>,
                "Нууц үг",
                "Бичсэн тэмдэгтийг далдалж харуулна.",
              ],
              [
                <code key="t">&lt;input type=&quot;date&quot;&gt;</code>,
                "Огноо",
                "Төрсөн огноо — календарь сонголт гаргана.",
              ],
              [
                <code key="t">&lt;input type=&quot;radio&quot;&gt;</code>,
                "Радио",
                "Хэдэн хувилбараас нэгийг сонгох (хүйс).",
              ],
              [
                <code key="t">&lt;input type=&quot;checkbox&quot;&gt;</code>,
                "Чекбокс",
                "Тийм / үгүй сонголт (нөхцөл зөвшөөрөх).",
              ],
              [
                <code key="t">&lt;button&gt;</code>,
                "Товч",
                "Форм илгээх (Бүртгүүлэх) эсвэл цэвэрлэх (Цэвэрлэх).",
              ],
            ]}
          />
        </Frame>
      </Slide>

      {/* 30 · ДАСГАЛ: БҮРТГЭЛИЙН ФОРМ */}
      <Exercise
        label="Дасгал: бүртгэлийн форм"
        page="30"
        total={TOTAL}
        title="Бүртгэлийн форм хийх"
        tasks={[
          <>
            <code>register.html</code>-д <code>&lt;form&gt;</code> үүсгэ.
          </>,
          <>
            Нэр, нэвтрэх нэрд <code>type=&quot;text&quot;</code> оролт нэм.
          </>,
          <>
            Имэйл, нууц үгэнд <code>email</code> / <code>password</code> ашигла.
          </>,
          <>
            Огноонд <code>date</code>, хүйст <code>radio</code> нэм.
          </>,
          <>
            <code>checkbox</code> ба <b>Бүртгүүлэх</b> товч нэм.
          </>,
        ]}
        aside={
          <div className="exercise-target anim anim-4">
            <div className="et-cap">Үүнийг хийнэ үү · ⏱ 15 минут</div>
            <div className="et-img">
              <Image
                src="/registration-form.png"
                alt="Бүртгэлийн формын жишээ — Full Name, Email, Username, Password, Date of Birth, Gender, нөхцөл зөвшөөрөх, Register товч"
                width={360}
                height={437}
                priority
              />
            </div>
          </div>
        }
      />

      {/* 31 · ХУРААНГУЙ */}
      <Recap
        label="Хураангуй"
        page="31"
        total={TOTAL}
        eyebrow="Хичээл 01 · хураангуй"
        title="Хураангуй"
        footer={{ tag: "erxes · хичээл 01 дууслаа", topic: "вэбийн үндэс" }}
        cards={[
          {
            num: "01",
            title: "Вэб сайт",
            desc: "Сервер файл илгээж, хөтөч уншиж зурдаг; вэб 1989 оноос эхтэй.",
          },
          {
            num: "02",
            title: "Терминал",
            desc: "mkdir, cd, ls, touch зэрэг командаар хурдан, нямбай ажиллана.",
          },
          {
            num: "03",
            title: "Фронт ба Бэкенд",
            desc: "Харагдах тал ба өгөгдөл, логикийг зохицуулдаг арын тал.",
          },
          {
            num: "04",
            title: "HTML, CSS, JS",
            desc: "Бүтэц, загвар, үйлдэл — фронтендийн гурван хэл ба үндсэн тагууд.",
          },
        ]}
      />

      {/* 32 · ДАРАА НЬ */}
      <Slide label="Дараа нь" page="32" total={TOTAL}>
        <Frame center>
          <Eyebrow variant="amber" className="anim">
            Удахгүй · Шат 02
          </Eyebrow>
          <h2 className="slide-title anim anim-2" style={{ fontSize: 92 }}>
            JavaScript-ээр
            <br />
            амьд болгоё
          </h2>
          <p className="lead anim anim-3">
            Та хуудсыг бүтэцлэж, загварчилж чадна. Дараа нь{" "}
            <span className="hi-amber">үйлдэл</span> нэмж — товшилтод хариулах,
            контент өөрчлөх, хуудсыг амьд болгоно.
          </p>
          <div
            className="stages anim anim-4"
            style={{
              display: "flex",
              gap: 22,
              fontSize: 28,
              color: "var(--muted)",
              marginTop: 60,
            }}
          >
            <span style={{ color: "var(--accent)" }}>✓ 01 Үндэс</span>
            <span style={{ opacity: 0.4 }}>→</span>
            <span style={{ color: "var(--accent2)" }}>02 JavaScript</span>
            <span style={{ opacity: 0.4 }}>→</span>
            <span>03 React &amp; Next.js</span>
          </div>
        </Frame>
      </Slide>

      {/* 31 · АСУУЛТ */}
      <TitleSlide
        label="Асуулт"
        prompt={<>хичээл-01 · дууслаа</>}
        title={
          <>
            Асуулт байна уу?
            <Cursor />
          </>
        }
        subtitle="Танилцуулга хуудсаа өнөө орой хийгээрэй. Дараагийн хичээлд түүнийгээ интерактив болгоно."
        stages={
          <>
            <span className="on">erxes / frontend</span>
            <span className="sep">·</span>
            <span>хичээл 01 — вэбийн үндэс</span>
          </>
        }
      />
    </Deck>
  );
}
