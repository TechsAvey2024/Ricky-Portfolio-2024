import styles from "./ProjectsStyles.module.css";
import firstProject from "../../assets/yahtzee.png";
import Pairs from "../../assets/av-a-card-go.png";
import infinite from "../../assets/infinite-horizons.png";
import Snake from "../../assets/snake.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={firstProject}
          link="https://techsavey2024.github.io/Yahtzee-js/"
          h3="Yahtzee Game"
          h4="Board Game"
          p="HTML/CSS & JS"
        />
        <ProjectCard
          src={Pairs}
          link="https://techsavey2024.github.io/Av-a-card-go/"
          h3="Av-A-Card-Go"
          h4="Pairs Game"
          p="HTML/CSS & JS"
        />
        <ProjectCard
          src={infinite}
          link="https://github.com/TechsAvey2024/infinite-horizons"
          h3="Infinite Horizon"
          h4="Web Blog Page"
          p="EJS, Express & Node.js"
        />
        <ProjectCard
          src={Snake}
          link="https://techsavey2024.github.io/Snake-js/"
          h3="Snake"
          h4="Snake Game"
          p="HTML/CSS & JS"
        />
      </div>
    </section>
  );
}

export default Projects;
