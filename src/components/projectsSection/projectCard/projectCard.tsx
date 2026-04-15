import { motion } from "framer-motion";
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
  index?: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const competenciesVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export default function ProjectCard({
  title,
  description,
  githubLink,
  previewLink,
  competencies,
}: ProjectCardProps) {
  return (
    <motion.div className={styles.projectCard} variants={cardVariants}>
      <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        {githubLink ? (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CodeIcon size={24} />
          </motion.a>
        ) : null}
        {previewLink ? (
          <motion.a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live preview"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={24} />
          </motion.a>
        ) : null}
      </div>
      </div>
      <p>{description}</p>
      <motion.div
        className={styles.competencies}
        variants={competenciesVariants}
        initial="hidden"
        animate="visible"
      >
        {competencies.map((competency, index) => (
          <CompetencieCard
            key={index}
            id={competency.id}
            title={competency.title}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
