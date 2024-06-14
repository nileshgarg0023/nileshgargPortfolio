import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.contactContentWrapper, className].join(" ")}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.touch}>
            <div className={styles.getInTouchParent}>
              <div className={styles.getInTouch}>
                <div className={styles.getInTouchInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.getInTouch1}>GET IN TOUCH WITH ME</div>
              </div>
              <p className={styles.hiThereIm}>
                Hi there! I'm passionate about all things digital and web
                design. With over 3 years of experience in the industry, I've
                had the pleasure of collaborating with agencies and enthusiastic
                individuals to solve problems through beautiful design. Dive
                into my portfolio to see the creativity and expertise I bring to
                every project!
              </p>
            </div>
            <div className={styles.touchChild} />
          </div>
          <div className={styles.experience}>
            <div className={styles.emptyParent}>
              <b className={styles.empty}>{`3+ `}</b>
              <div className={styles.yearsOfExperienceContainer}>
                <span>
                  <p className={styles.yearsOf}>Years Of</p>
                  <p className={styles.experience1}>Experience</p>
                </span>
              </div>
            </div>
            <div className={styles.customer}>
              <div className={styles.empty1}>100+</div>
              <div className={styles.satisfiedCustomer}>Satisfied Customer</div>
            </div>
          </div>
        </div>
        <div className={styles.touchButtonWrapper}>
          <div className={styles.touchButton}>
            <img
              className={styles.getInTouch2}
              loading="lazy"
              alt=""
              src="/get-in-touch@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
