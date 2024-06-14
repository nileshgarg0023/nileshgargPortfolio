import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.experienceContentWrapper, className].join(" ")}>
      <div className={styles.experienceContent}>
        <div className={styles.experienceDetails}>
          <div className={styles.experienceItem}>
            <div className={styles.figmaExperience}>
              <div className={styles.figmaItem}>
                <h2 className={styles.figma}>Figma</h2>
                <div className={styles.figma1}>90%</div>
              </div>
              <div
                className={styles.welcomeToMy}
              >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
            </div>
            <div className={styles.separator} />
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillName}>
              <h2 className={styles.figma2}>Figma</h2>
              <div className={styles.div}>90%</div>
            </div>
            <div
              className={styles.welcomeToMy1}
            >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
          </div>
          <div className={styles.separator1} />
        </div>
        <div className={styles.experiencesHeading}>
          <h1 className={styles.myExperiences}>My Experiences</h1>
          <div className={styles.experiencesDescription}>
            <b className={styles.letsWorkTogether}>
              Let’s work together I am open to Part-time/Freelance
            </b>
            <p className={styles.welcomeToMyContainer}>
              <span>
                <span>Welcome to my digital portfolio!</span>
                <b>{` `}</b>
                <span>{`I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</span>
              </span>
            </p>
          </div>
          <button className={styles.button}>
            <div className={styles.downloadResume}>Download Resume</div>
            <img
              className={styles.cloudDownloadOutlineIcon}
              alt=""
              src="/clouddownloadoutline.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
