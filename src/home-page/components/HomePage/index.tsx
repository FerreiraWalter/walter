import styles from "./HomePage.module.css";
import sloth from '../../../assets/sloth.jpeg';

export default function HomePage() {
  return (
    <>
      <div className={styles.profile}>
      <img src={sloth} alt="Sloth" className={styles.profileImg} />
      <div className={styles.info}>
        <h2>
          <strong>Walter Ferreira</strong>
          <p className={styles.infoTitle}>Software Enginner</p>
        </h2>
        <p className={styles.infoMainText}>
        With a degree in Computer Science and over four years of experience developing scalable web applications and APIs using <strong>React, Node.js, TypeScript, and Python.</strong> 
        <br></br><br></br>I have built frontend applications with <strong>React and Next.js</strong>, designed and implemented RESTful APIs and backend services with <strong>Node.js and Python</strong>, and developed automation workflows and <strong>ETL pipelines</strong>.
        <br></br><br></br> I am experienced with <strong>Docker, Kubernetes, CI/CD pipelines, and cloud platforms like Azure and AWS.</strong> Passionate about solving complex problems, I focus on delivering clean, maintainable, and scalable solutions while collaborating effectively in agile environments.
        </p>
        <p>
          <strong>Available for hire:</strong>{" "}
          <a href="mailto:devwalterjr@gmail.com">
            devwalterjr@gmail.com
          </a>
        </p>
        <p>
        <strong>Socials:</strong> <a href="#">Linkedin</a> / <a href="#">Instagram</a>
        </p>
      </div>
    </div>

    <h3>Projects</h3>
    <div className={styles.work}>
      <a target="_blank" href="https://github.com/FerreiraWalter/Teeny-Tiny-ORM">Teeny-Tiny-ORM</a>
      <a target="_blank" href="https://github.com/FerreiraWalter/Teeny-Tiny-Compile">Teeny-Tiny-Compile</a>
      <a target="_blank" href="https://github.com/FerreiraWalter/automatos">Automaton</a>
      <a target="_blank" href="https://github.com/FerreiraWalter/lack">lack</a>
      <a target="_blank" href="https://github.com/FerreiraWalter/SharinganOCR">OCR Sharingan</a>
    </div>
    </>
  )
}