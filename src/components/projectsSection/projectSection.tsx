"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import TitleHead from "../titleHead/TitleHead";
import ProjectCard from "./projectCard/projectCard";
import { projectCardDummy } from "./projectCard/projectCardDummy";
import styles from "./projectSection.module.css";

type ProjectKey = Exclude<
  keyof typeof import("../../contexts/translations/sv").sv.projects,
  "title" | "subtitle"
>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const timelineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const projectRowVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      className={styles.projectsSection}
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <TitleHead title={t.projects.title} subTitle={t.projects.subtitle} />
      <motion.div
        className={styles.projectsContainer}
        variants={containerVariants}
      >
        <motion.div className={styles.timeLine} variants={timelineVariants} />
        {projectCardDummy.map((project, index) => {
          const projectTranslation = t.projects[project.key as ProjectKey];
          return (
            <motion.div
              className={styles.projectRow}
              key={project.id}
              tabIndex={0}
              variants={projectRowVariants}
            >
              <motion.div
                className={styles.timeLineDot}
                variants={dotVariants}
              />
              <ProjectCard
                id={project.id}
                title={projectTranslation.title}
                description={projectTranslation.description}
                githubLink={project.githubLink}
                previewLink={project.previewLink}
                competencies={project.competencies}
                index={index}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
