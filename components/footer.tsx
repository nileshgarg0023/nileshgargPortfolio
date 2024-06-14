import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerCallToAction}>
          <div className={styles.haveAProject}>HAVE A PROJECT IN MIND?</div>
          <h1 className={styles.letsTalk}>Let’s Talk</h1>
        </div>
        <div className={styles.footerDescription}>
          <div className={styles.footerSummary}>
            <div className={styles.sloganContainer}>
              <p className={styles.letsStartMaking}>
                Let’s Start Making Something Amazing Togeather
              </p>
            </div>
            <div className={styles.projectButton}>
              <div className={styles.projectButtonBackground} />
              <h3 className={styles.startAProject}>Start A Project</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerNavigation}>
        <div className={styles.separator} />
        <div className={styles.footerInfo}>
          <img
            className={styles.nLogoIcon}
            loading="lazy"
            alt=""
            src="/n-logo-1.svg"
          />
          <div className={styles.footerLinks}>
            <div className={styles.pageLinks}>
              <div className={styles.linkOneTitleParent}>
                <div className={styles.linkOneTitle}>
                  <h3 className={styles.pages}>Pages</h3>
                  <div className={styles.linkOneItems}>
                    <a className={styles.aboutMe}>About Me</a>
                    <a className={styles.aboutMe1}>About Me</a>
                    <a className={styles.aboutMe2}>About Me</a>
                    <a className={styles.aboutMe3}>About Me</a>
                    <a className={styles.aboutMe4}>About Me</a>
                  </div>
                </div>
                <div className={styles.linkTwoTitle}>
                  <h3 className={styles.pages1}>Pages</h3>
                  <div className={styles.linkTwoItems}>
                    <a className={styles.aboutMe5}>About Me</a>
                    <a className={styles.aboutMe6}>About Me</a>
                    <a className={styles.aboutMe7}>About Me</a>
                  </div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <img
                  className={styles.socialIcons}
                  loading="lazy"
                  alt=""
                  src="/frame-21@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.separator1} />
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <div className={styles.contactItems}>
                <h3 className={styles.address}>Address</h3>
                <div className={styles.rajasthanIndia}>Rajasthan, India</div>
              </div>
              <div className={styles.contactItems1}>
                <h3 className={styles.email}>Email</h3>
                <div className={styles.nileshgarg0023gmailcom}>
                  Nileshgarg0023@gmail.com
                </div>
              </div>
              <div className={styles.phoneNumber}>
                <h3 className={styles.phone}>Phone</h3>
                <div className={styles.placeholder}>+91 7891300920</div>
              </div>
            </div>
            <div className={styles.copyrightNotice}>
              <div className={styles.copyright2024ProfecientByParent}>
                <div className={styles.copyright2024Profecient}>
                  © Copyright 2024 Profecient by 
                </div>
                <div className={styles.nileshGarg}>Nilesh Garg</div>
                <div className={styles.allRightsReserved}>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
