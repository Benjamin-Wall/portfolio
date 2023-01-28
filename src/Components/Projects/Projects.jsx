import React from "react";
import "./projects.css";

import { CardList } from "../CardList/CardList";

export const Projects = () => {
  return (
    <>
      <h1 id="projects">🔨 Projects: </h1>
      <p id="projects-desc">
        Below are some projects that i have completed along my path of Web
        Development <br />
        (This part uses the GitHub API to get all my public repositories!)
      </p>
      <CardList />
    </>
  );
};
