import type { NextPage } from "next";
import ProjectPicture from "./project-picture";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.portfolioProjectsWrapper, className].join(" ")}>
      <div className={styles.portfolioProjects}>
        <ProjectPicture portfolio="/portfolio@2x.png" />
        <ProjectPicture portfolio="/portfolio-1@2x.png" />
        <ProjectPicture portfolio="/portfolio-2@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent1;
