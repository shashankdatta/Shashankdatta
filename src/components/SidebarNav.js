"use client";

import { useState } from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "../styles/SidebarNav.module.css";
import FadeInSection from "./FadeInSection";

const isMobile =
  typeof window !== "undefined" ? window.innerWidth < 600 : false;

export default function SidebarNav() {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  const links = [
    <a key="1" href="#intro">
      /home
    </a>,
    <a key="2" href="#about">
      /about
    </a>,
    <a key="3" href="#experience">
      /experience
    </a>,
    <a key="4" href="#projects">
      /software-creations
    </a>,
  ];

  return (
    <div className={styles["sidebar-nav"]}>
      {!isMobile && (
        <Sidenav
          expanded={expanded}
          defaultOpenKeys={["3", "4"]}
          activeKey={activeKey}
          onSelect={handleSelect}
          appearance="subtle"
        >
          <Sidenav.Body>
            <div className="sidebar-links">
              {links.map((link, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <div>{link}</div>
                </FadeInSection>
              ))}
            </div>
          </Sidenav.Body>
        </Sidenav>
      )}
      <div className={styles["sidebar-logos"]} href="/">
        <a href="mailto:shashankdattabezgum@gmail.com">
          <EmailRoundedIcon style={{ fontSize: 20 }} />
        </a>
        <a href="https://github.com/shashankdatta">
          <GitHubIcon style={{ fontSize: 19 }} />
        </a>
        <a href="https://www.linkedin.com/in/shashankdatta/">
          <LinkedInIcon style={{ fontSize: 21 }} />
        </a>
      </div>
    </div>
  );
}
