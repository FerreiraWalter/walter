import Career from "./components/Career";
import HomePage from "./components/HomePage";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import { useState } from "react";

import styles from "./Home.module.css";

export default function Home() {
  const [activePage, setActivePage] = useState<string>("Home");

  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <HomePage />;
      case "Studies":
        return <UnderConstruction />;
      case "Career":
        return <Career />;
      case "Travels":
        return <UnderConstruction />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.window}>
        <div className={styles.windowHeader}>
          <span>{":-)"}</span>
          <div className={styles.headerButtons}>
            <button className={styles.windowButtons}>-</button>
            <button className={styles.windowButtons}>□</button>
            <button className={styles.windowButtons}>×</button>
          </div>
        </div>

        <div className={styles.nav}>
          {/* {["Home", "Studies", "Tools", "Resume/CV"].map((item) => (
              <button key={item} className={styles.navButton}>
                {item}
              </button>
            ))} */}
          <button
            onClick={() => setActivePage("Home")}
            className={styles.navButton}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage("Studies")}
            className={styles.navButton}
          >
            Studies
          </button>
          <button
            onClick={() => setActivePage("Career")}
            className={styles.navButton}
          >
            Career
          </button>
          <button
            onClick={() => setActivePage("Travels")}
            className={styles.navButton}
          >
            Travels
          </button>
          <a
            download={true}
            href="/WalterFerreiraRamosEN.pdf"
            className={styles.navButton}
          >
            <span>Resume/CV</span>
          </a>
        </div>

        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
}
