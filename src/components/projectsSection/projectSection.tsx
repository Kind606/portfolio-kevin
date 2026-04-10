"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import TitleHead from "../titleHead/TitleHead";
import ProjectCard from "./projectCard/projectCard";
import { projectCardDummy } from "./projectCard/projectCardDummy";
import styles from "./projectSection.module.css";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <div className={styles.projectsSection} id="projects">
      <TitleHead title={t.projects.title} subTitle={t.projects.subtitle} />
      <div className={styles.projectsContainer}>
        {projectCardDummy.map((project) => {
          const projectKey =
            project.id === 1
              ? "gymPlanner"
              : project.id === 2
                ? "postApp"
                : "pixelGame";
          const projectTranslation = t.projects[projectKey];

          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={projectTranslation.title}
              description={projectTranslation.description}
              githubLink={project.githubLink}
              previewLink={project.previewLink}
              competencies={project.competencies}
            />
          );
        })}
      </div>
    </div>
  );
}
