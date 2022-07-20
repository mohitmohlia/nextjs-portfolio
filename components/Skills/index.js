import style from "./skills.module.scss";

export default function Skills() {
  return (
    <div className={style.skills_container} id="skills">
      <div className={style.progressBar_container}>
        <div className={style.progressBar_text}>Javascript</div>
        <div className={style.container}>
          <div className={style.javascript_bar}></div>
        </div>
        <div className={style.progressBar_text}>React</div>
        <div className={style.container}>
          <div className={style.react_bar}></div>
        </div>
        <div className={style.progressBar_text}>HTML + CSS, SCSS</div>
        <div className={style.container}>
          <div className={style.HTMLCSS_bar}></div>
        </div>
        <div className={style.progressBar_text}>NextJs</div>
        <div className={style.container}>
          <div className={style.NextJS_bar}></div>
        </div>
      </div>
    </div>
  );
}
