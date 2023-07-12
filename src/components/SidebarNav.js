"use client";

import { useState } from "react";
import { Sidenav, Nav } from "rsuite";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import styles from "@/styles/SidebarNav.module.css";
import FadeInSection from "./FadeInSection";
import Link from "next/link";

const isMobile =
  typeof window !== "undefined" ? window.innerWidth < 600 : false;

export default function SidebarNav() {
  const [activeKey, setActiveKey] = useState("1");

  const navlinks = [
    ["intro", "home"],
    ["about", "about"],
    ["experience", "experience"],
    ["projects", "software-creations"],
  ];

  return (
    <div className={styles["sidebar-nav"]}>
      {!isMobile && (
        <Sidenav appearance="subtle">
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <div className={styles["sidebar-links"]}>
                {navlinks.map((linkArr, i) => (
                  <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <Nav.Item as="div">
                      <Link href={`#${linkArr[0]}`}>/{linkArr[1]}</Link>
                    </Nav.Item>
                  </FadeInSection>
                ))}
              </div>
            </Nav>
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
              style={{ fontSize: "49px" }}
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
              style={{ fontSize: "45px" }}
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
              style={{ fontSize: "50px" }}
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
