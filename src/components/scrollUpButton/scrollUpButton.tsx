"use client";

import ChevronsDownIcon from "../icons/ChevronsDownIcon";
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
      <ChevronsDownIcon size={24} />
    </a>
  );
}
