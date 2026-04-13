"use client";

import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import ChevronsDownIcon from "../icons/ChevronsDownIcon";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
  const { t } = useLanguage();

  return (
    <div className={styles.landingSection}>
      <div className={styles.orbsContainer}>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
      </div>
      <h2>{t.landing.role}</h2>
      <div className={styles.textContainer}>
        <div className={styles.intro}>
          <span>{t.landing.greeting}</span>
          <h1>{t.landing.name}</h1>
        </div>

        <p className={styles.infoText}>{t.landing.description}</p>
      </div>

      <div className={styles.scrollDown}>
        <a href="#about">
          <ChevronsDownIcon size={24} />
          {t.landing.scrollDown}
        </a>
      </div>
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
    </div>
  );
}
