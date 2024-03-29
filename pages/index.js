import Image from "next/image";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import About from "../components/about";
import Projects from "../components/projects";
import bulbOff from "../public/bulboff.png";
import bulbOn from "../public/bulbon.png";
import Skills from "../components/skills";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const localStorageTheme = localStorage.getItem("app-theme");
    console.log(
      "dark theme",
      window.matchMedia("(prefers-color-scheme:dark)").matches
    );
    setTheme(
      localStorageTheme
        ? localStorageTheme
        : window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  function switchTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
  }

  return (
    <div className={styles.app} data-theme={theme}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <div className={styles.theme_toggle_switch}>
        <Image
          //className={styles.theme_toggle_switch}
          onClick={switchTheme}
          src={theme === "light" ? bulbOff : bulbOn}
          width="80"
          height="80"
        />
      </div>
    </div>
  );
}
