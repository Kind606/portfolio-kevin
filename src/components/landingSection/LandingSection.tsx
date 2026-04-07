import Image from "next/image";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
  return (
    <div className={styles.landingSection}>
      <h2>FRONTEND DEVELOPER</h2>
      <div className={styles.intro}>
        <span>Hej, jag är</span>
        <h1>Kevin Hellgren</h1>
      </div>

      <p className={styles.infoText}>
        Jag bygger snabba, tillgängliga och visuellt tilltalande webbupplevelser
        med moderna teknologier.
      </p>

      <div className={styles.scrollDown}>
        <a href="#projects">
          <Image
            src="/ChevronsDown.svg"
            alt="Scroll Down"
            width={24}
            height={24}
          />
          scrolla ner
        </a>
      </div>
      <Image
        src="/KevinPortfolio.png"
        alt="Landing Image"
        width={400}
        height={400}
        className={styles.landingImage}
      />
    </div>
  );
}
