import React from "react";
import style from "./about.module.scss";
function About() {
  function getAge(dateString) {
    var dates = dateString.split("-");
    var d = new Date();

    var userday = dates[0];
    var usermonth = dates[1];
    var useryear = dates[2];

    var curday = d.getDate();
    var curmonth = d.getMonth() + 1;
    var curyear = d.getFullYear();

    var age = curyear - useryear;

    if (curmonth < usermonth || (curmonth == usermonth && curday < userday)) {
      age--;
    }

    return age;
  }

  return (
    <div id="about">
      <div className={style.about}>
        <section className={style.photo_section}>
          <div className={style.photo}></div>
        </section>
        <section className={style.text_section}>
          <div className={style.text}>
            <div className={style.software_engineer}>Software Engineer</div>
            <div className={style.tech_enthusiast}>Web Developer</div>
            <div className={style.tester}>JavaScript</div>
          </div>
        </section>
      </div>
      <div className={style.intro_div}>
        <section className={style.intro}>
          Hey! I'm Mohit Mohlia, a {getAge("04-12-1996")} year old residing in
          New Delhi, India. Current working as a Senior Software Engineer at
          Edjx. I graduated from NSIT in 2019 from Electronics and Communication
          branch. I consider myself to be an ambivert, and a team player ......
          more about my skills.
        </section>
      </div>
    </div>
  );
}

export default About;
