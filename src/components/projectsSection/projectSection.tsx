"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import TitleHead from "../titleHead/TitleHead";
import ProjectCard from "./projectCard/projectCard";
import { projectCardDummy } from "./projectCard/projectCardDummy";
import styles from "./projectSection.module.css";

type ProjectKey = Exclude<
  keyof typeof import("../../contexts/translations/sv").sv.projects,
  "title" | "subtitle"
>;

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <div className={styles.projectsSection} id="projects">
      <TitleHead title={t.projects.title} subTitle={t.projects.subtitle} />
        <div className={styles.timeLine} />
        <div className={styles.projectsContainer}>
          {projectCardDummy.map((project) => {
            const projectTranslation = t.projects[project.key as ProjectKey];
            return (
              <div className={styles.projectRow} key={project.id} tabIndex={0}>
                <div className={styles.timeLineDot} />
                <ProjectCard
                  id={project.id}
                  title={projectTranslation.title}
                  description={projectTranslation.description}
                  githubLink={project.githubLink}
                  previewLink={project.previewLink}
                  competencies={project.competencies}
                />
              </div>
            );
          })}
        </div>
    </div>
  );
}
