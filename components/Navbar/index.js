import React, { useState, useEffect } from "react";
import style from "./navbar.module.scss";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setActive] = useState(false);

  function handleResize() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  }

  useEffect(() => {
    const listener = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  useEffect(() => {
    return () => console.log("i am unmounting");
  }, []);

  useEffect(() => {
    handleResize();
  }, []);
  if (isMobile) {
    return (
      <nav className={style.navbar_mobile}>
        <div className={style.brand_mobile}>Mohit Mohlia</div>
        <a
          href="#"
          className={style.toggle_button}
          onClick={() => setActive(!isActive)}
        >
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </a>
        <div
          style={{ display: isActive ? "flex" : "none" }}
          className={style.link_mobile}
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={style.navbar}>
        <div className={style.brand}>Mohit Mohlia</div>
        <div className={style.link}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
