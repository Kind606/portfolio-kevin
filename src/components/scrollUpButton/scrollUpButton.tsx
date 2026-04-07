"use client";

import Image from "next/image";
import styles from "./scrollUpButton.module.css";
import { useScrollUpButton } from "./scrollUpButtonHook";

export default function ScrollUpButton() {
  const { isVisible } = useScrollUpButton();

  return (
    <a
      href="#"
      className={`${styles.scrollUpButton} ${isVisible ? styles.visible : ""}`}
      aria-label="Scroll to top"
    >
      <Image
        src="/ChevronsDown.svg"
        alt="Scroll Up"
        width={24}
        height={24}
        className={styles.icon}
      />
    </a>
  );
}
