import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.skillsContentWrapper, className].join(" ")}>
      <div className={styles.skillsContent}>
        <div className={styles.skillsHeadingWrapper}>
          <div className={styles.skillsHeading}>
            <h1 className={styles.skills}>Skills</h1>
            <div className={styles.openLearning}>
              <div className={styles.iAmVery}>
                I am very open to learning new things
              </div>
              <p className={styles.welcomeToMyContainer}>
                <span>
                  <span>Welcome to my digital portfolio!</span>
                  <b>{` `}</b>
                  <span>{`I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.figmaWelcome}>
          <div className={styles.figmaInstances}>
            <div className={styles.figmaNamesParent}>
              <div className={styles.figmaNames}>
                <h2 className={styles.figma}>Figma</h2>
                <div className={styles.empty}>90%</div>
              </div>
              <div
                className={styles.welcomeToMy}
              >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
            </div>
            <div className={styles.figmaInstancesChild} />
          </div>
          <div className={styles.figmaInstances1}>
            <div className={styles.frameParent}>
              <div className={styles.figmaParent}>
                <h2 className={styles.figma1}>Figma</h2>
                <div className={styles.div}>90%</div>
              </div>
              <div
                className={styles.welcomeToMy1}
              >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
            </div>
            <div className={styles.figmaInstancesItem} />
          </div>
          <div className={styles.figmaInstances2}>
            <div className={styles.frameGroup}>
              <div className={styles.figmaGroup}>
                <h2 className={styles.figma2}>Figma</h2>
                <div className={styles.div1}>90%</div>
              </div>
              <div
                className={styles.welcomeToMy2}
              >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
            </div>
            <div className={styles.figmaInstancesInner} />
          </div>
          <div className={styles.figmaInstances3}>
            <div className={styles.frameContainer}>
              <div className={styles.figmaContainer}>
                <h2 className={styles.figma3}>Figma</h2>
                <div className={styles.div2}>90%</div>
              </div>
              <div
                className={styles.welcomeToMy3}
              >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
            </div>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.figmaInstances4}>
            <div className={styles.frameDiv}>
              <div className={styles.figmaParent1}>
                <h2 className={styles.figma4}>Figma</h2>
                <div className={styles.div3}>90%</div>
              </div>
              <div
                className={styles.welcomeToMy4}
              >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</div>
            </div>
            <div className={styles.figmaInstancesChild1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
