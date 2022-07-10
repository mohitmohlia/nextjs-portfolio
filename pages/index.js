import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import About from "../components/About";
import Projects from "../components/Projects";
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
    <div className="app" data-theme={theme}>
      <Navbar />
      <About />
      {/* <Projects /> */}
      <button className={styles.theme_toggle_switch} onClick={switchTheme}>
        switch to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}
