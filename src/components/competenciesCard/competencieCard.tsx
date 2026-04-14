import { motion } from "framer-motion";
import styles from "./competenciesCard.module.css";

export type CompetencieCardProps = {
  id: number;
  title: string;
  index?: number;
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export default function CompetencieCard({ title }: CompetencieCardProps) {
  return (
    <motion.div
      className={styles.competencieCard}
      variants={cardVariants}
    >
      <h3>{title}</h3>
    </motion.div>
  );
}
