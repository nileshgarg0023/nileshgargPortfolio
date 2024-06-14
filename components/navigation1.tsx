import type { NextPage } from "next";
import styles from "./navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.nLogoWrapper}>
        <img
          className={styles.nLogoIcon}
          loading="lazy"
          alt=""
          src="/n-logo.svg"
        />
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <a className={styles.aboutMe}>About Me</a>
          <a className={styles.aboutMe1}>About Me</a>
          <a className={styles.aboutMe2}>About Me</a>
          <a className={styles.aboutMe3}>About Me</a>
        </div>
      </div>
      <div className={styles.designerFrontEndDeveloperParent}>
        <a className={styles.designerFrontContainer}>
          <p className={styles.designerFront}>DESIGNER / FRONT END DEVELOPER</p>
          <p className={styles.portfolio2010}>PORTFOLIO / 2010 — 2024</p>
        </a>
        <a className={styles.availableForFreelanceContainer}>
          <span>
            <p className={styles.availableForFreelance}>
              AVAILABLE FOR FREELANCE
            </p>
            <p className={styles.projectsInApr}>PROJECTS IN APR 2024</p>
          </span>
        </a>
        <a className={styles.contactsupportcom917891300}>
          <span className={styles.contactsupportcom9178913001}>
            <p className={styles.contactsupportcom}>CONTACT@SUPPORT.COM</p>
            <p className={styles.p}>+917891300920</p>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navigation1;
