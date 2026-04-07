import AboutMeSection from "../components/aboutMeSection/AboutMeSection";
import Footer from "../components/footer/footer";
import LandingSection from "../components/landingSection/LandingSection";
import ProjectsSection from "../components/projectsSection/projectSection";
import ScrollUpButton from "../components/scrollUpButton/scrollUpButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <LandingSection />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
      <ScrollUpButton />
    </main>
  );
}
