import style from "./skills.module.scss";
import Image from "next/image";
import JS from "../../public/js.png";
import HTML from "../../public/html.png";
// import NEXTJS from "../../public/nextjs.png";
import NEXTJSSVG from "../../public/nextjs.svg";
import REACT from "../../public/react.png";
import REDUX from "../../public/redux.png";
export default function Skills() {
  return (
    <div className={style.skills_container} id="skills">
      <div className={style.skills_heading}>Top Skills</div>
      <div className={style.progressBar_container}>
        <div className={style.progressBar_text}>Javascript</div>
        <div className={style.container}>
          <div className={style.javascript_bar}>
            <Image src={JS} width="30" height={"30"} />
          </div>
        </div>
        <div className={style.progressBar_text}>React</div>
        <div className={style.container}>
          <div className={style.react_bar}>
            <Image src={REACT} width="30" height={"30"} />
          </div>
        </div>
        <div className={style.progressBar_text}>Redux</div>
        <div className={style.container}>
          <div className={style.redux_bar}>
            <Image src={REDUX} width="30" height={"30"} />
          </div>
        </div>
        <div className={style.progressBar_text}>HTML + CSS, SCSS</div>
        <div className={style.container}>
          <div className={style.HTMLCSS_bar}>
            <Image src={HTML} width="30" height={"30"} />
          </div>
        </div>
        <div className={style.progressBar_text}>NextJs</div>
        <div className={style.container}>
          <div className={style.NextJS_bar}>
            <Image src={NEXTJSSVG} width="30" height={"30"} />
          </div>
        </div>
      </div>
    </div>
  );
}
