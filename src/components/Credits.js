import styles from "../styles/Credits.module.css";
import FadeInSection from "./FadeInSection";

export default function Credits() {
  return (
    <FadeInSection>
      <div id={styles.credits}>
        <div className={styles["ending-credits"]}>
          <div>Built and designed by Shashank datta Bezgam. </div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
    </FadeInSection>
  );
}
