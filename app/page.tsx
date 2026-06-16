import Link from "next/link";
import styles from "./hub.module.css";

type Lesson = {
  num: string;
  title: string;
  desc: string;
  foot: string;
  href?: string;
};

const lessons: Lesson[] = [
  {
    num: "01",
    title: "Вэб хөгжүүлэлтийн үндэс",
    desc: "Вэб сайт юу болох, түүний гарал үүсэл ба түүх, терминал, фронтенд ба бэкенд, HTML / CSS / JavaScript болон үндсэн HTML таг.",
    foot: "Хичээл нээх · 35 слайд",
    href: "/stage-01",
  },
  {
    num: "02",
    title: "HTML гүнзгийрүүлэн",
    desc: "Суурь бүтэц (boilerplate), атрибут, байнга хэрэглэх тагууд болон утга бүхий (семантик) HTML.",
    foot: "Хичээл нээх · 33 слайд",
    href: "/lesson-02",
  },
  {
    num: "03",
    title: "Текст, жагсаалт, холбоос, зураг",
    desc: "Текст форматлах тагууд, жагсаалт (ul/ol), холбоос ба зам (path), зураг — контентоор баялаг хуудас бүтээх нь.",
    foot: "Хичээл нээх · 23 слайд",
    href: "/lesson-03",
  },
  {
    num: "04",
    title: "Хүснэгт ба форм",
    desc: "table / tr / th / td-ээр өгөгдөл харуулж, form, input, label-аар хэрэглэгчээс мэдээлэл цуглуулах нь.",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-04",
  },
  {
    num: "05",
    title: "Семантик HTML ба бүтэц",
    desc: "header / nav / main / footer гэх утга бүхий тагууд, хүртээмж (accessibility) ба SEO-д үзүүлэх нөлөө.",
    foot: "Хичээл нээх · 21 слайд",
    href: "/lesson-05",
  },
  {
    num: "06",
    title: "CSS-тэй танилцах, сонгогч, өнгө",
    desc: "CSS холбох 3 арга, element/class/id сонгогч, specificity ба cascade, өнгө (hex/rgb/hsl) ба background.",
    foot: "Хичээл нээх · 22 слайд",
    href: "/lesson-06",
  },
];

export default function HubPage() {
  return (
    <div className={styles.hub}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.logo}>
            erxes<span>/</span>frontend
          </div>
          <div className={styles.meta}>сургалт · проектор слайд</div>
        </header>

        <div className={styles.eyebrow}>Фронтенд хөгжүүлэлт · анхан шатнаас</div>
        <h1 className={styles.title}>
          Вэбийг
          <br />
          бүтээх нь
          <span className={styles.cursor} />
        </h1>
        <p className={styles.intro}>
          Фронтенд хөгжүүлэлтийн сургалтын бүх хичээл. Хичээлээ бүтэн дэлгэцээр
          нээж, слайд хооронд ← / → товчоор шилжээрэй.
        </p>

        <div className={styles.stages}>
          {lessons.map((lesson) => {
            const live = Boolean(lesson.href);
            const className = `${styles.stage} ${live ? styles.live : styles.soon}`;
            const content = (
              <>
                <span className={styles.badge}>{live ? "Бэлэн" : "Удахгүй"}</span>
                <div className={styles.num}>Хичээл {lesson.num}</div>
                <div className={styles.stTitle}>{lesson.title}</div>
                <div className={styles.stDesc}>{lesson.desc}</div>
                <div className={styles.stFoot}>{lesson.foot}</div>
              </>
            );
            return live ? (
              <Link key={lesson.num} className={className} href={lesson.href!}>
                {content}
              </Link>
            ) : (
              <div key={lesson.num} className={className}>
                {content}
              </div>
            );
          })}
        </div>

        <div className={styles.tools}>
          <Link className={styles.tool} href="/class-intro">
            <span className={styles.k}>›</span> Ангийн танилцуулга — 3 слайд
          </Link>
          <Link className={styles.tool} href="/lesson-template">
            <span className={styles.k}>+</span> 3 цагийн хичээлийн бүтэц — загвар нээх
          </Link>
          <Link className={styles.tool} href="/template">
            <span className={styles.k}>+</span> Компонентийн багц — бүх слайд төрөл
          </Link>
        </div>

        <footer className={styles.footer}>
          <span>erxes · фронтенд хөгжүүлэлтийн сургалт</span>
          <span>Үндэс → JavaScript → React &amp; Next.js</span>
        </footer>
      </div>
    </div>
  );
}
