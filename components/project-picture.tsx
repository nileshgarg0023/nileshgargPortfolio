import type { NextPage } from "next";
import styles from "./project-picture.module.css";

export type ProjectPictureType = {
  className?: string;
  portfolio?: string;
};

const ProjectPicture: NextPage<ProjectPictureType> = ({
  className = "",
  portfolio,
}) => {
  return (
    <div className={[styles.projectPicture, className].join(" ")}>
      <img
        className={styles.portfolioIcon}
        loading="lazy"
        alt=""
        src={portfolio}
      />
      <div className={styles.portfolio}>
        <div className={styles.projectDetails}>
          <h1 className={styles.headfoxInnovation}>HeadFox Innovation</h1>
          <div className={styles.projectDummyWrapper}>
            <div className={styles.projectDummy}>2019</div>
          </div>
        </div>
        <div className={styles.projectSeparator} />
        <div className={styles.projectInfo}>
          <p
            className={styles.welcomeToMy}
          >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</p>
          <div className={styles.projectSkills}>
            <div className={styles.projectSkillList}>
              <b className={styles.uiuxDesign}>UI/UX Design</b>
              <b className={styles.uiuxDesign1}>UI/UX Design</b>
              <b className={styles.uiuxDesign2}>UI/UX Design</b>
              <b className={styles.uiuxDesign3}>UI/UX Design</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPicture;
