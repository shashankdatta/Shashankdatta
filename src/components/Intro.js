"use client";

// import ShashankModel from "./3D Model/ShashankModel";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Button from "@mui/material/Button";

import Typist from "react-typist";
import FadeInSection from "./FadeInSection";
// import FractalTree from "./FractalTree";

// Typist Related CSS
import "react-typist/dist/Typist.css";
import "@/styles/MyTypist.css";

import styles from "@/styles/Intro.module.css";

export default function Intro() {
  return (
    <div id={styles.intro}>
      {/* <FractalTree /> */}

      <div className={styles["cmd-style"]}>
        <div
          className={styles["intro-name"]}
        >{`SHDB:~\u00A0\u00A0/$\u00A0`}</div>
        <Typist cursor={{ element: "_" }} avgTypingDelay={120}>
          <span className={styles["intro-title"]}>
            {"hi, "}
            <span className={styles["intro-name"]}>{"shashank"}</span>
            {" here!"}
          </span>
        </Typist>
      </div>
      <FadeInSection>
        <div className={styles["intro-subtitle"]}>
          I create stuff sometimes.
        </div>
        <div className={styles["intro-desc"]}>
          I&apos;m a software engineer and artist based in Toronto. I have great
          interest in full-stack development, artificial intelligence,
          human-computer interactions, and everything in between.
        </div>
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
      </FadeInSection>
    </div>
  );
}
