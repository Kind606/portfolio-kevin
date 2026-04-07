import TitleHead from "../titleHead/TitleHead";
import styles from "./AboutMeSection.module.css";
import CompetencieCard from "./competenciesCard/competencieCard";
import { competencieCardDummy } from "./competenciesCard/competencieDummy";

export default function AboutMeSection() {
  return (
    <div className={styles.aboutMeSection} id="about">
      <div className={styles.aboutMeBox}>
        <TitleHead title="Om mig" subTitle="Kort" />
        <p>
          Jag är en passionerad frontend-utvecklare med över 5 års erfarenhet av
          att skapa engagerande och användarvänliga webbapplikationer. Jag
          brinner för att kombinera kreativ design med robust kodning för att
          leverera högkvalitativa digitala upplevelser.
        </p>
      </div>

      <div className={styles.competenciesBox}>
        <TitleHead title="Kompetenser" subTitle="Tech stack" />

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
