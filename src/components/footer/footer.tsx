"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import ExternalLink from "../icons/ExternalLink";
import TitleHead from "../titleHead/TitleHead";
import styles from "./footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} tabIndex={0}>
      <TitleHead title={t.footer.title} subTitle={t.footer.subtitle} />

      <div className={styles.contentBox}>
        <div className={styles.contactLinks}>
          <ul>
            <li>
              <a
                href="/files/KevinHellgrenCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.cv}
                <ExternalLink size={28} />
              </a>
            </li>
            <li>
              <a href="mailto:kevin.hellgren@hotmail.com?subject=Portfolio Contact">
                {t.footer.email}
                <ExternalLink size={28} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kind606">
                {t.footer.github}
                <ExternalLink size={28} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kevin-hellgren-1217212a9">
                {t.footer.linkedin}
                <ExternalLink size={28} />
              </a>
            </li>
            <li>
              <a href="tel:+46721595842">+46 721595842</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.address}>
            <li>KEVIN HELLGREN</li>
            <li>{t.footer.location.city}</li>
            <li>{t.footer.location.country}</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>&copy; 2026 {t.footer.copyright}</p>
    </footer>
  );
}
