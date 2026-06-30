import styles from "../../css/PageHero.module.css";

function PageHero({ title, subtitle }) {
  return (
    <section className={styles.pageHero} aria-labelledby="page-hero-title">
      <div className={styles.media} aria-hidden="true">
        <img src="/Elutuba.JPG" alt="" className={styles.image} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.inner}>
        <h1 id="page-hero-title" className={styles.title}>
          {title}
        </h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
    </section>
  );
}

export default PageHero;
