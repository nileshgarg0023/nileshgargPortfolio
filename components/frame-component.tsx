import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.testimonialContentWrapper, className].join(" ")}
    >
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialHeader}>
          <div className={styles.testimonialHeading}>
            <img
              className={styles.dummyIcon}
              loading="lazy"
              alt=""
              src="/frame-12@2x.png"
            />
            <div className={styles.testimonialTitle}>
              <div className={styles.testimonialsParent}>
                <h1 className={styles.testimonials}>Testimonials</h1>
                <p
                  className={styles.welcomeToMy}
                >{`Welcome to my digital portfolio! I'm a Professional Digital Designer and Front-End Developer, and here you'll find a curated collection of my work. `}</p>
              </div>
              <div className={styles.testimonialSliderContainer}>
                <div className={styles.testimonialSlides}>
                  <div className={styles.testimonialSlideItems} />
                  <div className={styles.testimonialSlideItems1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialAuthor}>
              <div className={styles.june192020}>JUNE 19,2020</div>
              <div className={styles.cxoHeadfoxInnovation}>
                CXO Headfox Innovation
              </div>
            </div>
          </div>
          <div className={styles.testimonialQuote}>
            <div className={styles.authorProfile}>
              <img
                className={styles.profilePictureIcon}
                loading="lazy"
                alt=""
                src="/ellipse-4@2x.png"
              />
              <div className={styles.authorName}>
                <div className={styles.authorNameContainer}>
                  <h3 className={styles.navneetAggarwal}>Navneet Aggarwal</h3>
                  <div className={styles.cxoHeadfoxInnovation1}>
                    CXO, Headfox Innovation
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.iAmVeryContainer}>
              <span>
                <span className={styles.iAmVery}>
                  I am very pleased with the end result of the web design
                  created by
                </span>
                <span className={styles.thisAgencyThey}>
                  this agency. They understand the vision and mission of my
                  business,
                </span>
                <span className={styles.andHaveSucceeded}>
                  and have succeeded in turning it into a website that is modern
                  and
                </span>
                <span className={styles.easyToUse}>
                  easy to use. Apart from that, the team is also responsive and
                  ready to
                </span>
                <span className={styles.helpWheneverA}>
                  help whenever a repair or update is needed.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
