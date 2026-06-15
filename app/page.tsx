import Link from "next/link";
import styles from "./hub.module.css";

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
          Гурван шаттай фронтенд хөгжүүлэлтийн сургалт — бүрэн эхнээс нь. Шатыг
          бүтэн дэлгэцээр нээж, слайд хооронд ← / → товчоор шилжээрэй.
        </p>

        <div className={styles.stages}>
          <Link className={`${styles.stage} ${styles.live}`} href="/stage-01">
            <span className={styles.badge}>Бэлэн</span>
            <div className={styles.num}>01</div>
            <div className={styles.stTitle}>Вэб хөгжүүлэлтийн үндэс</div>
            <div className={styles.stDesc}>
              Вэб сайт юу болох, түүний гарал үүсэл ба түүх, терминал, фронтенд ба
              бэкенд, HTML / CSS / JavaScript болон үндсэн HTML таг.
            </div>
            <div className={styles.stFoot}>Хичээл нээх · 36 слайд</div>
          </Link>

          <div className={`${styles.stage} ${styles.soon}`}>
            <span className={styles.badge}>Удахгүй</span>
            <div className={styles.num}>02</div>
            <div className={styles.stTitle}>JavaScript</div>
            <div className={styles.stDesc}>
              Хувьсагч, функц, DOM ба үйл явдал — хуудсыг хариу үйлдэлтэй, амьд
              болгох нь.
            </div>
            <div className={styles.stFoot}>Загвараас үүсгэх</div>
          </div>

          <div className={`${styles.stage} ${styles.soon}`}>
            <span className={styles.badge}>Удахгүй</span>
            <div className={styles.num}>03</div>
            <div className={styles.stTitle}>React &amp; Next.js</div>
            <div className={styles.stDesc}>
              Компонент, төлөв, чиглүүлэлт — орчин үеийн фреймворкоор бодит апп
              бүтээх нь.
            </div>
            <div className={styles.stFoot}>Загвараас үүсгэх</div>
          </div>
        </div>

        <div className={styles.tools}>
          <Link className={styles.tool} href="/class-intro">
            <span className={styles.k}>01</span> Ангийн танилцуулга — 3 слайд
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
