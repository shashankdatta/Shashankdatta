import styles from "@/styles/Experience.module.css";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

export default function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <FadeInSection>
        <div className={styles["section-header"]}>
          <span className={styles["section-title"]}>/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
}
