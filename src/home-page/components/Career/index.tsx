import styles from "./Career.module.css"

function Career() {
  return (
    <div className={styles.careerContainer}>
    <h2 className={styles.title}>💼 Career Timeline</h2>

    <div className={styles.jobBox}>
      <h3>ExxonMobil</h3>
      <p><strong>Mid-level Full-stack Developer</strong> (Oct 2024 – Present)</p>
      <ul>
        <li>Developed front-end dashboards in React with Charts.js for real-time monitoring.</li>
        <li>Migrated from Excel spreadsheets to a proprietary data visualization platform.</li>
        <li>Built ETL pipelines in Python (Pandas) to integrate third-party data into Snowflake.</li>
        <li>Managed database tables and views ensuring consistency and scalability.</li>
      </ul>
    </div>

    <div className={styles.jobBox}>
      <h3>Ubots</h3>
      <p><strong>Junior Full-stack Developer</strong> (May 2023 – Sep 2024)</p>
      <ul>
        <li>Integrated LangChain + ChatGPT in Python to summarize chatbot conversations.</li>
        <li>Developed APIs using Node.js, Golang, and Spring Boot for scalable services.</li>
        <li>Built React and Angular front-ends following Figma layouts and usability standards.</li>
        <li>Automated deployments using Docker, Kubernetes, and CI/CD pipelines.</li>
        <li>Provided mentorship and improved system observability with logging tools.</li>
      </ul>
    </div>

    <div className={styles.jobBox}>
      <h3>Grupo Soma</h3>
      <p><strong>Full-stack Developer</strong> (Jun 2021 – May 2023)</p>
      <ul>
        <li>Developed React/Next.js apps with TypeScript, Redux, and Context API.</li>
        <li>Created Node.js backends using Express, Fastify, Prisma ORM, and Knex.</li>
        <li>Migrated legacy ETLs from Pentaho to Python + Airflow, reducing processing time.</li>
        <li>Improved CI/CD automation, code reviews, and test coverage practices.</li>
      </ul>
    </div>

    <div className={styles.skillsBox}>
      <h3>🧠 Core Stack</h3>
      <p><strong>Languages:</strong> JavaScript, TypeScript, Golang, Java, Python</p>
      <p><strong>Frameworks:</strong> React, Next.js, Express, Fastify, Prisma, TypeORM</p>
      <p><strong>Databases:</strong> PostgreSQL, MySQL, Redis</p>
      <p><strong>DevOps:</strong> Docker, Kubernetes, Grafana, CI/CD pipelines</p>
      <p><strong>Practices:</strong> Clean Code, TDD, DDD, Git</p>
    </div>
  </div>
  )
}

export default Career
