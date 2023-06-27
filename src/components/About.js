import styles from "@/styles/About.module.css";
import FadeInSection from "./FadeInSection";
import Image from "next/image";
import shashank from "@/assets/shashank.jpeg";

export default function About() {
  const one = (
    <p>
      I am currently pursuing a <b>Master's degree</b> in{" "}
      <b>Machine Learning & Artificial Intelligence</b> at{" "}
      <a
        className={styles["about-description"]}
        href="https://www.nyu.edu/about"
        target="_blank"
      >
        NYU
      </a>
      . Prior to this, I earned my <b>Bachelor's degree</b> in{" "}
      <b>Computer Science</b> from{" "}
      <a
        className={styles["about-description"]}
        href="https://www.vt.edu/about"
        target="_blank"
      >
        Virginia Tech
      </a>
      .
    </p>
  );
  const two = (
    <p>
      Outside of work, I&apos;m interested in following the developments of
      science and technology. I also enjoy playing video games, watching anime,
      and working out.
    </p>
  );
  const three = (
    <p>
      <b>Want to chat?</b> Shoot me a message at{" "}
      <a href="mailto:shashankdattabezgum@gmail.com">
        shashankdattabezgum@gmail.com
      </a>{" "}
      and let&apos;s talk.
    </p>
  );
  const desc_items = [one, two];

  const tech_stack = [
    "Next.js",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Javascript ES6+",
    "Python",
    "Java",
    "HTML & CSS",
    "SQL",
    "C/C++",
    "SwiftUI",
  ];

  return (
    <div id={styles.about}>
      <FadeInSection>
        <div className={styles["section-header"]}>
          <span className={styles["section-title"]}>/ about me</span>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            {[one]}
            {"Here are some technologies I have been working with:"}
            <ul className={styles["tech-stack"]}>
              {tech_stack.map(function (tech_item, i) {
                return (
                  <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                );
              })}
            </ul>
            {[two]}
          </div>
          <div className={styles["about-image-wrapper"]}>
            <Image
              src={shashank}
              alt="Shashank's Headshot"
              placeholder="blur"
              className={styles["about-image"]}
              priority
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
