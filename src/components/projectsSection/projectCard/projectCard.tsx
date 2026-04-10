import CompetencieCard, {
  CompetencieCardProps,
} from "../../competenciesCard/competencieCard";
import CodeIcon from "../../icons/CodeIcon";
import ExternalLink from "../../icons/ExternalLink";
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
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub"
        >
          <CodeIcon size={24} />
        </a>
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live preview"
        >
          <ExternalLink size={24} />
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
