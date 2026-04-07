import styles from "./TitleHead.module.css";

export type TitleHeadProps = {
  title: string;
  subTitle?: string;
};

export default function TitleHead({ title, subTitle }: TitleHeadProps) {
  return (
    <div className={styles.titleHead}>
      {subTitle && <span>{subTitle}</span>}
      <h2>{title}</h2>
    </div>
  );
}
