import LandingSection from "../components/landingSection/LandingSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingSection />
    </div>
  );
}
