import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import workExperienceData from "../../data/workExperience.json";

import style from "./projects.module.scss";

function Projects() {
  console.log({ workExperienceData });
  return (
    <div id="projects" className={style.projects_container}>
      <h1 className={style.projects_heading}>Work Experience </h1>
      <VerticalTimeline className={style.verticalTimeline} animate={false}>
        {workExperienceData.map((data, index) => {
          return (
            <VerticalTimelineElement date={data.timeline} key={index}>
              <h1 className="heading">{data.heading}</h1>
              <h3 className="style.subHeading">{data.subHeading}</h3>
              <p className="intro">{data.intro}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Projects;
