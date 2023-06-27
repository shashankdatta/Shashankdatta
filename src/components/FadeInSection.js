"use client";

import { useInView } from "react-intersection-observer";
import styles from "@/styles/FadeInSection.module.css";

export default function FadeInSection(props) {
  const { ref: domRef, inView: isVisible } = useInView({ triggerOnce: true });

  return (
    <div
      className={`${styles["fade-in-section"]} ${
        isVisible ? styles["is-visible"] : ""
      }`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
