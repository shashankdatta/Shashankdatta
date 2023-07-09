import About from "@/components/About";
import Credits from "@/components/Credits";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import styles from "./page.module.css";
import SidebarNav from "@/components/SidebarNav";

export default function Home() {
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
