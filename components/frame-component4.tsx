import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.whatIDoContentWrapper, className].join(" ")}>
      <div className={styles.whatIDoContent}>
        <div className={styles.whatIDoWrapper}>
          <h1 className={styles.whatIDo}>What I Do ?</h1>
        </div>
        <div className={styles.graphicDesign}>
          <textarea
            className={styles.designInstances}
            placeholder="Graphic Design"
            rows={13}
            cols={20}
          />
          <div className={styles.designInstances1}>
            <div className={styles.graphicDesign1}>Graphic Design</div>
          </div>
          <textarea
            className={styles.designInstances2}
            placeholder="Graphic Design"
            rows={13}
            cols={20}
          />
          <textarea
            className={styles.designInstances3}
            placeholder="Graphic Design"
            rows={13}
            cols={20}
          />
          <textarea
            className={styles.designInstances4}
            placeholder="Graphic Design"
            rows={13}
            cols={20}
          />
          <textarea
            className={styles.designInstances5}
            placeholder="Graphic Design"
            rows={13}
            cols={20}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
