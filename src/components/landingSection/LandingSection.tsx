"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import ChevronsDownIcon from "../icons/ChevronsDownIcon";
import styles from "./LandingSection.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const orbVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  }),
};

export default function LandingSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      className={styles.landingSection}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.orbsContainer}>
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={styles.orb}
            variants={orbVariants}
            custom={index}
          />
        ))}
      </div>
      <motion.h2 variants={itemVariants}>{t.landing.role}</motion.h2>
      <motion.div className={styles.textContainer} variants={itemVariants}>
        <div className={styles.intro}>
          <span>{t.landing.greeting}</span>
          <h1>{t.landing.name}</h1>
        </div>

        <p className={styles.infoText}>{t.landing.description}</p>
      </motion.div>

      <motion.div className={styles.scrollDown} variants={itemVariants}>
        <a href="#about">
          <ChevronsDownIcon size={24} />
          {t.landing.scrollDown}
        </a>
      </motion.div>
      <motion.div
        variants={imageVariants}
        className={styles.landingImageWrapper}
      >
        <Image
          src="/KevinPortfolio.png"
          alt="Profile Image"
          width={1280}
          height={1280}
          quality={95}
          priority
          sizes="(max-width: 768px) 0px, (max-width: 1200px) 30vw, 480px"
          className={styles.landingImage}
        />
      </motion.div>
    </motion.div>
  );
}
