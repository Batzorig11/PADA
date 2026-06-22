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
  {
    num: "07",
    title: "Box model ба зай",
    desc: "content / padding / border / margin, box-sizing, margin collapse, border-radius ба box-shadow — элементийн хэмжээ, зайг удирдах нь.",
    foot: "Хичээл нээх · 23 слайд",
    href: "/lesson-07",
  },
  {
    num: "08",
    title: "Typography ба нэгжүүд",
    desc: "font-family ба web font, font-size / weight / line-height, text-align / decoration, px vs em / rem vs % / vw / vh нэгжүүд.",
    foot: "Хичээл нээх · 22 слайд",
    href: "/lesson-08",
  },
  {
    num: "09",
    title: "Display ба position",
    desc: "block / inline / inline-block, overflow, position (static/relative/absolute/fixed/sticky) ба z-index — элементийг байрлуулах нь.",
    foot: "Хичээл нээх · 21 слайд",
    href: "/lesson-09",
  },
  {
    num: "10",
    title: "Flexbox үндэс",
    desc: "display: flex, flex container / item, justify-content, align-items, gap, flex-direction ба flex-wrap — нэг хэмжээст layout.",
    foot: "Хичээл нээх · 21 слайд",
    href: "/lesson-10",
  },
  {
    num: "11",
    title: "Flexbox layout дадлага",
    desc: "flex-grow / shrink / basis, flex товч бичлэг, align-self — navbar ба тэнцүү картын эгнээ зэрэг бодит UI угсрах.",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-11",
  },
  {
    num: "12",
    title: "CSS Grid",
    desc: "grid-template-columns, fr, repeat, gap, minmax / auto-fit ба grid-template-areas — хоёр хэмжээст хуудасны бүтэц.",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-12",
  },
  {
    num: "13",
    title: "Responsive design ба media query",
    desc: "viewport, @media breakpoints, mobile-first, уян нэгж ба зураг, display-аар нуух/харуулах.",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-13",
  },
  {
    num: "14",
    title: "Transition, transform, animation",
    desc: ":hover / :focus, transition, transform (scale/rotate/translate) ба @keyframes — хуудсанд хөдөлгөөн нэмэх.",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-14",
  },
  {
    num: "15",
    title: "Төсөл: Landing page",
    desc: "Бүтэц төлөвлөх, header / hero / features / CTA / footer угсрах, responsive болгох — бүтэн төсөл (заавартай).",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-15",
  },
  {
    num: "16",
    title: "Төсөл дуусгах + Сар 1 сэргээх",
    desc: "Debugging (DevTools), нийтлэг алдаа, code review, Сар 1-ийн ойлголт сэргээх ба жижиг шалгалт.",
    foot: "Хичээл нээх · 20 слайд",
    href: "/lesson-16",
  },
  {
    num: "17",
    title: "JavaScript танилцах, хувьсагч, төрөл",
    desc: "JS-ийг script-ээр холбох, console.log, let / const хувьсагч, string / number / boolean төрлүүд ба typeof.",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-17",
  },
  {
    num: "18",
    title: "Оператор ба нөхцөл",
    desc: "Арифметик / харьцуулах / логик оператор, truthy / falsy, if / else if / else, switch ба ternary.",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-18",
  },
  {
    num: "19",
    title: "Давталт",
    desc: "for давталтын гурван хэсэг, while / do…while, break / continue ба nested loop.",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-19",
  },
  {
    num: "20",
    title: "Функц",
    desc: "Функц зарлах, параметр ба return, scope (local / global) ба arrow function.",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-20",
  },
  {
    num: "21",
    title: "Массив",
    desc: "Массив үүсгэх, index ба length, push / pop / shift / unshift / splice ба давталтаар алхах.",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-21",
  },
  {
    num: "22",
    title: "Массивын аргууд (map / filter / reduce)",
    desc: "forEach, map, filter, find, reduce ба аргуудыг дараалуулж холбох (chaining).",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-22",
  },
  {
    num: "23",
    title: "Объект",
    desc: "key / value, dot vs bracket, nested бүтэц, method, this ба объектуудын массив.",
    foot: "Хичээл нээх · 19 слайд",
    href: "/lesson-23",
  },
  {
    num: "24",
    title: "Дадлага: жижиг даалгаврууд",
    desc: "String / массивын асуудлууд, объект боловсруулах, жижиг алгоритм (палиндром, FizzBuzz, дата боловсруулалт).",
    foot: "Хичээл нээх · 18 слайд",
    href: "/lesson-24",
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
