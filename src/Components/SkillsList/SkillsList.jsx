import React from "react";
import "./skilllist.css";

import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactrouter, SiRedux } from "react-icons/si";
import { Skill } from "../Skill/Skill";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 style={{ fontSize: "25px" }} />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt style={{ fontSize: "25px" }} />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript style={{ fontSize: "25px" }} />,
  },
  {
    name: "React",
    icon: <FaReact style={{ fontSize: "25px" }} />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter style={{ fontSize: "25px" }} />,
  },
  {
    name: "Redux",
    icon: <SiRedux style={{ fontSize: "25px" }} />,
  },
];

export const SkillsList = () => {
  return (
    <>
      <h1 className="heading">🧰 Skills: </h1>
      <p>
        Currently i mainly have experience with Front-End Development. This
        includes the following:
      </p>
      <div className="skill-list">
        {skills.map((skill, index) => {
          return (
            <Skill
            key={index}
              name={skill.name}
              icon={skill.icon}
            />
          );
        })}
      </div>
    </>
  );
};
