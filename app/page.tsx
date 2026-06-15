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
    title: "CSS-ээр загварчлах",
    desc: "Сонгогч, өнгө, зай, фонт болон байршил — HTML бүтцээ амьд харагдуулах нь.",
    foot: "Удахгүй",
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
          <Link className={styles.tool} href="/template">
            <span className={styles.k}>+</span> Шинэ хичээл — загвар нээх
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
