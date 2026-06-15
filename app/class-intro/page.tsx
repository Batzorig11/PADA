import Deck from "@/components/Deck";
import {
  CompareTable,
  ConceptList,
  Exercise,
  Frame,
  Eyebrow,
  Slide,
} from "@/components/slides";

export const metadata = {
  title: "erxes · Ангийн танилцуулга",
};

const TOTAL = "03";

export default function ClassIntro() {
  return (
    <Deck>
      <Slide
        label="Хуваарь ба дүрэм"
        page="01"
        total={TOTAL}
        footer={{ tag: "танилцуулга", topic: "хуваарь / дүрэм" }}
        grid
      >
        <Frame>
          <Eyebrow className="anim">Хичээлийн хуваарь</Eyebrow>
          <h2 className="slide-title anim anim-2">Хуваарь ба дүрэм</h2>
          <ConceptList
            compact
            className="anim anim-3"
            items={[
              {
                idx: "09",
                title: "Даваагаас Пүрэв гараг",
                desc: "Хичээл үргэлж 09:00-д эхэлж, 12:00-д дуусна.",
              },
              {
                idx: "PC",
                title: "Академийн компьютерийг цэвэр байлгах",
                desc: "Компьютерийг зөв хэрэглэж, дараагийн сурагч ашиглахад бэлэн үлдээнэ.",
              },
              {
                idx: "OK",
                title: "Явахаасаа өмнө ширээгээ цэгцлэх",
                desc: "Гарахын өмнө ширээгээ цэвэрлэж, бүх зүйлийг байранд нь тавина.",
              },
            ]}
          />
        </Frame>
      </Slide>

      <Slide
        label="Компьютер ба Wi-Fi нэвтрэлт"
        page="02"
        total={TOTAL}
        footer={{ tag: "танилцуулга", topic: "компьютер / wi-fi" }}
        grid
      >
        <Frame>
          <Eyebrow className="anim">Нэвтрэх мэдээлэл</Eyebrow>
          <h2 className="slide-title sm anim anim-2">Компьютер ба Wi-Fi</h2>
          <CompareTable
            compact
            className="anim anim-3"
            columns={[
              { head: "Хэрэглэх зүйл", width: "32%" },
              { head: "Мэдээлэл" },
            ]}
            rows={[
              ["Компьютерийн хэрэглэгчийн нэр", <code key="u">PADA-1-9-XX</code>],
              ["Компьютерийн нууц үг", <code key="p">padA-XX</code>],
              ["Wi-Fi нэр", <code key="w">Erxes mongolia</code>],
              ["Wi-Fi нууц үг", <code key="wp">Erxes$999</code>],
            ]}
          />
          <p className="lead anim anim-4" style={{ maxWidth: 1180 }}>
            <b>XX</b>-ийн оронд өөрт оноогдсон компьютерийн дугаараа ашиглана.
          </p>
        </Frame>
      </Slide>

      <Exercise
        label="Танилцах дасгал"
        page="03"
        total={TOTAL}
        tag="Танилцах дасгал"
        title="Нэрээ зургаар илэрхийл"
        tasks={[
          <>
            Өөрийн нэрийг үсгээр шууд бичихгүйгээр цаасан дээр зургаар илэрхийл.
          </>,
          <>
            Зургаа ашиглан өөрийгөө ангийнхандаа танилцуул.
          </>,
          <>
            Бусад нь зураг ба танилцуулгаас чиний нэрийг таана.
          </>,
        ]}
        hintsTitle="Зорилго"
        hints={[
          "Бие биенийхээ нэрийг тогтоох.",
          "Ангийн өмнө ярих дадал эхлүүлэх.",
          "Богино, нөхөрсөг, хөгжилтэй байлгах.",
        ]}
        time="10-15 минут"
      />
    </Deck>
  );
}
