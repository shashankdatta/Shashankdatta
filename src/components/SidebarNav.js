"use client";

import { useState } from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import styles from "../styles/SidebarNav.module.css";
import FadeInSection from "./FadeInSection";
import Link from "next/link";

import { styled } from "@mui/material/styles";

const isMobile =
  typeof window !== "undefined" ? window.innerWidth < 600 : false;

export default function SidebarNav() {
  const expanded = true;
  const [activeKey, setActiveKey] = useState("1");
  const defaultOpenKeys = ["3", "4"];

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  const navlinks = [
    ["intro", "home"],
    ["about", "about"],
    ["experience", "experience"],
    ["projects", "software-creations"],
  ];

  return (
    <div className={styles["sidebar-nav"]}>
      {!isMobile && (
        <Sidenav
          expanded={expanded}
          defaultOpenKeys={defaultOpenKeys}
          activeKey={activeKey}
          onSelect={handleSelect}
          appearance="subtle"
        >
          <Sidenav.Body>
            <div className={styles["sidebar-links"]}>
              {navlinks.map((linkArr, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <a href={`#${linkArr[0]}`}>/{linkArr[1]}</a>
                </FadeInSection>
              ))}
            </div>
          </Sidenav.Body>
        </Sidenav>
      )}
      <div className={styles["sidebar-logos"]}>
        <FadeInSection delay={`${navlinks.length + 1}00ms`}>
          <IconButton
            target="_blank"
            className="github-icon"
            href="mailto:shashankdattabezgum@gmail.com"
            aria-label="github-icon"
            size="small"
          >
            <EmailRoundedIcon
              color="greenBright"
              style={{ fontSize: "35px" }}
              sx={{
                "&:hover": {
                  color: "var(--lightestSlate)",
                },
              }}
            />
          </IconButton>
        </FadeInSection>
        <FadeInSection delay={`${navlinks.length + 2}00ms`}>
          <IconButton
            target="_blank"
            className="github-icon"
            href="https://github.com/shashankdatta"
            aria-label="github-icon"
            size="small"
          >
            <GitHubIcon
              color="greenBright"
              style={{ fontSize: "32px" }}
              sx={{
                "&:hover": {
                  color: "var(--lightestSlate)",
                },
              }}
            />
          </IconButton>
        </FadeInSection>
        <FadeInSection delay={`${navlinks.length + 3}00ms`}>
          <IconButton
            target="_blank"
            href="https://www.linkedin.com/in/shashankdatta/"
            aria-label="linkedin-icon"
            size="small"
          >
            <LinkedInIcon
              color="greenBright"
              style={{ fontSize: "35px" }}
              sx={{
                "&:hover": {
                  color: "var(--lightestSlate)",
                },
              }}
            />
          </IconButton>
        </FadeInSection>
      </div>
    </div>
  );
}
