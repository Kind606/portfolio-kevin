import styles from "./competenciesCard.module.css";

export type CompetencieCardProps = {
  id: number;
  title: string;
};

export default function CompetencieCard({ title }: CompetencieCardProps) {
  return (
    <div className={styles.competencieCard}>
      <h3>{title}</h3>
    </div>
  );
}
