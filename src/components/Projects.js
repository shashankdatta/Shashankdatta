"use client";

import styles from "@/styles/Projects.module.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

export default function Projects() {
  const spotlightProjects = {
    "No Man's Land": {
      title: "no man's land",
      desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
      techStack: "C# (UNITY)",
      link: "https://github.com/slakh96/no-mans-land",
      open: "https://gazijarin.itch.io/no-mans-land",
      image: "/assets/nomansland.png",
    },
    Truth: {
      title: "truth",
      desc: "A three.js simulation of the planet system revolving around a monolith.",
      techStack: "JAVASCRIPT (THREE.JS)",
      link: "https://github.com/gazijarin/truth",
      open: "https://gazijarin.github.io/Truth/",
      image: "/assets/truth.png",
    },
    "Tall Tales": {
      title: "tall tales",
      desc: "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
      techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
      link: "https://github.com/gazijarin/TallTales",
      open: "https://talltales.herokuapp.com/",
      image: "/assets/talltales.png",
    },
    Portfolio: {
      title: "portfolio.js",
      desc: "A small JS library that helps with clear and succinct data presentation.",
      techStack: "NODE.JS (EXPRESS.JS)",
      link: "https://github.com/gazijarin/Portfolio.js",
      open: "https://afternoon-ocean-92382.herokuapp.com/",
      image: "/assets/portfolio.png",
    },
  };

  const projects = {
    "TDSB Homework Management Interface": {
      desc: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
      link: "https://github.com/gazijarin/TDSBHomeworkManagement",
      open: "https://tdsb-app.herokuapp.com/",
    },
    "Adam A.I.": {
      desc: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
      techStack: "Javascript, HTML / CSS",
      link: "https://github.com/gazijarin/adamai",
      open: "https://gazijarin.github.io/AdamAI/",
    },
    "Distributed Logging and Monitoring System": {
      desc: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
      techStack: "Node.js (Express.js), React.js, PostgreSQL",
      link: "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System",
    },
    "Odin Bot": {
      desc: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      techStack: "Javascript, Node.js, Natural NLP, Telegram API",
      link: "https://github.com/gazijarin/OdinBot",
      open: "",
    },
    "Game Centre": {
      desc: "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      techStack: "Java, Android Studio",
      link: "https://github.com/gazijarin/gamecentre",
      open: "",
    },
    "Minimax Stonehenge": {
      desc: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      techStack: "Python",
      link: "https://github.com/gazijarin/stonehenge",
      open: "",
    },
  };

  return (
    <div id={styles.projects}>
      <div className="section-header">
        <span className="section-title">/ software-creations</span>
      </div>
      <Carousel>
        {Object.keys(spotlightProjects).map((key, i) => (
          <Carousel.Item key={key}>
            <Image
              className="d-block w-100"
              src={spotlightProjects[key]["image"]}
              alt={key}
            />
            <div className="caption-bg">
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <p>
                  {spotlightProjects[key]["desc"]}
                  <p className={styles.techStack}>
                    {spotlightProjects[key]["techStack"]}
                  </p>
                </p>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                ></ExternalLinks>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="project-container">
        <ul className={styles["projects-grid"]}>
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={key} delay={`${i + 1}00ms`}>
              <li className={styles["projects-card"]}>
                <div className={styles["card-header"]}>
                  <div className={styles["folder-icon"]}>
                    <FolderOpenRoundedIcon
                      style={{ fontSize: 35 }}
                    ></FolderOpenRoundedIcon>
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  ></ExternalLinks>
                </div>

                <div className={styles["card-title"]}>{key}</div>
                <div className={styles["card-desc"]}>
                  {projects[key]["desc"]}
                </div>
                <div className={styles["card-tech"]}>
                  {projects[key]["techStack"]}
                </div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}
