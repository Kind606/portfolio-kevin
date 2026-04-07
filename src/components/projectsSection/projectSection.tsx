import TitleHead from "../titleHead/TitleHead";
import ProjectCard from "./projectCard/projectCard";
import { projectCardDummy } from "./projectCard/projectCardDummy";
import styles from "./projectSection.module.css";

export default function ProjectsSection() {
  return (
    <div className={styles.projectsSection} id="projects">
      <TitleHead title="Mina arbeten" subTitle="Portfolio" />
      <div className={styles.projectsContainer}>
        {projectCardDummy.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            previewLink={project.previewLink}
            competencies={project.competencies}
          />
        ))}
      </div>
    </div>
  );
}
