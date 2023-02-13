import React from "react";
import "./skill.css";

export const Skill = ({ name, icon }) => {
  return (
    <div className="card-with-blur skill">
      {icon}
      <p>{name}</p>
    </div>
  );
};
