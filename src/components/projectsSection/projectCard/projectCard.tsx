import Image from "next/image";
import CompetencieCard, {
  CompetencieCardProps,
} from "../../competenciesCard/competencieCard";
import styles from "./projectCard.module.css";
export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  previewLink: string;
  competencies: CompetencieCardProps[];
};

export default function ProjectCard({
  title,
  description,
  githubLink,
  previewLink,
  competencies,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard} tabIndex={0}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Image src="/Code.svg" alt="GitHub Link" width={24} height={24} />
        </a>
        <a href={previewLink} target="_blank" rel="noopener noreferrer">
          <Image
            src="/ExternalLink.svg"
            alt="Live Preview Link"
            width={24}
            height={24}
          />
        </a>
      </div>
      <p>{description}</p>
      <div className={styles.competencies}>
        {competencies.map((competency, index) => (
          <CompetencieCard
            key={index}
            id={competency.id}
            title={competency.title}
          />
        ))}
      </div>
    </div>
  );
}
