import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section className={[styles.heroSectionWrapper, className].join(" ")}>
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.uiDesignerParent}>
              <h1 className={styles.uiDesigner}>UI Designer</h1>
              <div className={styles.emptyWrapper}>
                <h1 className={styles.empty}>{`&`}</h1>
              </div>
            </div>
            <div className={styles.frParent}>
              <h1 className={styles.fr}>Fr</h1>
              <div className={styles.frContainer}>
                <div className={styles.ntContainer}>
                  <div className={styles.ntContainerInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.ntParent}>
                    <h1 className={styles.nt}>nt</h1>
                    <h1 className={styles.empty1}>-</h1>
                  </div>
                  <div className={styles.endWrapper}>
                    <h1 className={styles.end}>End</h1>
                  </div>
                  <h1 className={styles.developer}>Developer</h1>
                </div>
                <div className={styles.frContainerInner}>
                  <div className={styles.lineParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.welcomeToMyDigitalPortfoliWrapper}>
                      <div className={styles.welcomeToMyContainer}>
                        <span>{`Welcome to my digital portfolio! `}</span>
                        <b>
                          I'm a Professional Digital Designer and Front-End
                          Developer
                        </b>
                        <span>
                          , and here you'll find a curated collection of my
                          work. From eye-catching logos and sleek brochures to
                          innovative product packaging and dynamic websites,
                          each project reflects my passion for design and
                          dedication to excellence. Explore and enjoy the
                          journey through my creative endeavors!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialContentParent}>
          <div className={styles.socialContent}>
            <img
              className={styles.symbolsIcon}
              loading="lazy"
              alt=""
              src="/symbols.svg"
            />
            <div className={styles.emptyContainer}>
              <div className={styles.empty2}>2024</div>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.behanceLinkWrapper}>
              <div className={styles.behanceLink}>
                <img
                  className={styles.bxlBehanceIcon}
                  loading="lazy"
                  alt=""
                  src="/bxlbehance.svg"
                />
                <div className={styles.behance}>Behance</div>
              </div>
            </div>
            <div className={styles.dribbleParent}>
              <img
                className={styles.dribbleIcon}
                loading="lazy"
                alt=""
                src="/dribble.svg"
              />
              <div className={styles.dribbleWrapper}>
                <div className={styles.dribble}>Dribble</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
