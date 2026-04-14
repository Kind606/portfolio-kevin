"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import ExternalLink from "../icons/ExternalLink";
import TitleHead from "../titleHead/TitleHead";
import styles from "./footer.module.css";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const linksContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const addressItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <motion.footer
      className={styles.footer}
      tabIndex={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10px" }}
      variants={footerVariants}
    >
      <TitleHead title={t.footer.title} subTitle={t.footer.subtitle} />

      <div className={styles.contentBox}>
        <div className={styles.contactLinks}>
          <motion.ul
            variants={linksContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.li variants={linkItemVariants}>
              {lang === "en" ? (
                <a
                  href="/files/EnglishKevinHellgrenCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.cv}
                  <ExternalLink size={28} />
                </a>
              ) : (
                <a
                  href="/files/KevinHellgrenCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.cv}
                  <ExternalLink size={28} />
                </a>
              )}
            </motion.li>
            <motion.li variants={linkItemVariants}>
              <a href="mailto:kevin.hellgren@hotmail.com?subject=Portfolio Contact">
                {t.footer.email}
                <ExternalLink size={28} />
              </a>
            </motion.li>
            <motion.li variants={linkItemVariants}>
              <a href="https://github.com/Kind606">
                {t.footer.github}
                <ExternalLink size={28} />
              </a>
            </motion.li>
            <motion.li variants={linkItemVariants}>
              <a href="https://www.linkedin.com/in/kevin-hellgren-1217212a9">
                {t.footer.linkedin}
                <ExternalLink size={28} />
              </a>
            </motion.li>
            <motion.li variants={linkItemVariants}>
              <a href="tel:+46721595842">+46 721595842</a>
            </motion.li>
          </motion.ul>
        </div>
        <div>
          <motion.ul
            className={styles.address}
            variants={linksContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.li variants={addressItemVariants}>KEVIN HELLGREN</motion.li>
            <motion.li variants={addressItemVariants}>
              {t.footer.location.city}
            </motion.li>
            <motion.li variants={addressItemVariants}>
              {t.footer.location.country}
            </motion.li>
          </motion.ul>
        </div>
      </div>
      <p className={styles.copyright}>&copy; 2026 {t.footer.copyright}</p>
    </motion.footer>
  );
}
