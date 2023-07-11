"use client";
import About from "@/components/About";
import Credits from "@/components/Credits";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import styles from "./page.module.css";
import SidebarNav from "@/components/SidebarNav";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <div id={styles.content}>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
      <SidebarNav />
    </main>
  );
}
