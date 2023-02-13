import React from "react";

import { CardList } from "../CardList/CardList";

export const Projects = () => {
  return (
    <>
      <h1 className="heading">🔨 Projects: </h1>
      <p id="projects-desc">
        Below are some projects that i have completed along my path of Web
        Development <br />
        (This part uses the GitHub API to get all my repositories marked with
        the tag "show-on-website")
      </p>
      <CardList />
    </>
  );
};
