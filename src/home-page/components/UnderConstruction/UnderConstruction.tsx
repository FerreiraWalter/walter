import styles from "./underConstruction.module.css";

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.header}>
          🚧 System Message
          <div className={styles.buttons}>
            <button className={styles.btn}>-</button>
            <button className={styles.btn}>□</button>
            <button className={styles.btn}>×</button>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Page Under Construction</h1>
          <p className={styles.text}>
            Sorry, traveler. This section of the internet is still being built.  
            <br /> Come back later, or watch the magic happen live 👷‍♂️
          </p>
          <p className={styles.footerText}>
            [ SYSTEM STATUS: Upgrading the Future... ]
          </p>
        </div>
      </div>
    </div>
  )
}
