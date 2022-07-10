import React from "react";
import style from "./about.module.scss";
function About() {
  return (
    <div id="about" className={style.about}>
      <section className={style.section}>
        <div className={style.photo}></div>
      </section>
      <section className={style.section}>
        <div className={style.section_text}> some text to impress</div>
      </section>
    </div>
  );
}

export default About;
