import type { NextPage } from "next";
import Navigation1 from "../components/navigation1";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const NileshPortfolioHome: NextPage = () => {
  return (
    <div className={styles.nileshPortfolioHome}>
      <Navigation1 />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <img
        className={styles.circleIcon}
        loading="lazy"
        alt=""
        src="/circle.svg"
      />
      <img
        className={styles.circleIcon1}
        loading="lazy"
        alt=""
        src="/circle.svg"
      />
      <img
        className={styles.circleIcon2}
        loading="lazy"
        alt=""
        src="/circle.svg"
      />
      <img
        className={styles.circleIcon3}
        loading="lazy"
        alt=""
        src="/circle.svg"
      />
      <FrameComponent3 />
      <img
        className={styles.circleIcon4}
        loading="lazy"
        alt=""
        src="/circle.svg"
      />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default NileshPortfolioHome;
