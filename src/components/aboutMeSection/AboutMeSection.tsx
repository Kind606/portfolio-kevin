"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import CompetencieCard from "../competenciesCard/competencieCard";
import { competencieCardDummy } from "../competenciesCard/competencieDummy";
import TitleHead from "../titleHead/TitleHead";
import styles from "./AboutMeSection.module.css";

export default function AboutMeSection() {
  const { t } = useLanguage();

  return (
    <div className={styles.aboutMeSection} id="about" tabIndex={0}>
      <div className={styles.aboutMeBox}>
        <TitleHead title={t.about.title} subTitle={t.about.subtitle} />
        <p>{t.about.description}</p>
      </div>

      <div className={styles.competenciesBox}>
        <TitleHead
          title={t.about.competenciesTitle}
          subTitle={t.about.competenciesSubtitle}
        />

        <div className={styles.competencies}>
          {competencieCardDummy.map((competencie) => (
            <div key={competencie.id}>
              <CompetencieCard title={competencie.title} id={competencie.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
