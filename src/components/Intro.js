"use client";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Typist from "react-typist";
import FadeInSection from "./FadeInSection";

// Typist Related CSS
import "react-typist/dist/Typist.css";
import "@/styles/MyTypist.css";

import styles from "@/styles/Intro.module.css";

export default function Intro() {
  return (
    <div id="intro" className={styles.intro}>
      <div className={styles["cmd-style"]}>
        <div className={styles["intro-name"]}>{`SHDB:-/$\u00A0`}</div>
        <Typist cursor={{ element: "_" }} avgTypingDelay={120}>
          <span className={styles["intro-title"]}>
            {"hi, "}
            <span className={styles["intro-name"]}>{"shashank"}</span>
            {" here"}
          </span>
        </Typist>
      </div>
      <FadeInSection>
        <div className={styles["intro-subtitle"]}>
          Coding with a Dash of Caffeine.
        </div>
        <div className={styles["intro-desc"]}>
          I&apos;m a software engineer with a passion for full-stack
          development, artificial intelligence, and machine learning. Let&apos;s
          build something amazing together!
        </div>
        <Box display="flex" className={styles["contant-btn-box"]}>
          <Button
            variant="outlined"
            startIcon={<EmailRoundedIcon />}
            href="mailto:shashankdattabezgum@gmail.com"
            color="greenBright"
            size="extraLarge"
            sx={{
              fontWeight: "bolder",
              textTransform: "unset !important",
            }}
          >
            Say hi!
          </Button>
        </Box>
      </FadeInSection>
    </div>
  );
}
