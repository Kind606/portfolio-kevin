"use client";

import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
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
                <Image
                  src="/ExternalLink.svg"
                  alt="CV"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="mailto:kevin.hellgren@hotmail.com?subject=Portfolio Contact">
                {t.footer.email}
                <Image
                  src="/ExternalLink.svg"
                  alt="Email"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kind606">
                {t.footer.github}
                <Image
                  src="/ExternalLink.svg"
                  alt="Github"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kevin-hellgren-1217212a9">
                {t.footer.linkedin}
                <Image
                  src="/ExternalLink.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
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
