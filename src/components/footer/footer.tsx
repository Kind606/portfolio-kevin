import Image from "next/image";
import TitleHead from "../titleHead/TitleHead";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} tabIndex={0}>
      <TitleHead title="Låt oss prata" subTitle="Kontakt" />

      <div className={styles.contentBox}>
        <div className={styles.contactLinks}>
          <ul>
            <li>
              <a href="mailto:kevin.hellgren@hotmail.com?subject=Portfolio Contact">
                Email
                <Image
                  src="/ExternalLink.svg"
                  alt="Email"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kind606">
                Github
                <Image
                  src="/ExternalLink.svg"
                  alt="Github"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kevin-hellgren-1217212a9">
                LinkedIn
                <Image
                  src="/ExternalLink.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="tel:+46721595842">+46 721595842</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.address}>
            <li>KEVIN HELLGREN</li>
            <li>Alingsås</li>
            <li>Sverige</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; 2026 Kevin&apos;s Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
