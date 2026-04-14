"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import CompetencieCard from "../competenciesCard/competencieCard";
import { competencieCardDummy } from "../competenciesCard/competencieDummy";
import TitleHead from "../titleHead/TitleHead";
import styles from "./AboutMeSection.module.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function AboutMeSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      className={styles.aboutMeSection}
      id="about"
      tabIndex={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className={styles.aboutMeBox} variants={sectionVariants}>
        <TitleHead title={t.about.title} subTitle={t.about.subtitle} />
        <p>{t.about.description}</p>
      </motion.div>

      <motion.div className={styles.competenciesBox} variants={sectionVariants}>
        <TitleHead
          title={t.about.competenciesTitle}
          subTitle={t.about.competenciesSubtitle}
        />

        <motion.div
          className={styles.competencies}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {competencieCardDummy.map((competencie, index) => (
            <CompetencieCard
              key={competencie.id}
              title={competencie.title}
              id={competencie.id}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
