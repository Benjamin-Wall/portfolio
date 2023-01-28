import React from "react";
import "./card.css";

import {
  GoMarkGithub,
  GoRepoForked,
  GoLinkExternal,
  GoStar,
} from "react-icons/go";

export const Card = ({
  title,
  description,
  repository,
  siteUrl,
  forks,
  stars,
}) => {
  return (
    <div className="card">
      <h2>
        {title.replace(/-/g, " ").replace(/\w\S*/g, (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </h2>
      <p>{description}</p>
      <div className="button-wrapper">
        <button>
          <a href={repository}>
            <GoMarkGithub style={{ fontSize: "25px" }} />
          </a>
        </button>
        <button>
          <a href={siteUrl}>
            <GoLinkExternal style={{ fontSize: "25px" }} />
          </a>
        </button>
        <button>
          <GoRepoForked style={{ fontSize: "25px" }} />
          <span>{forks < 1 ? 0 : forks}</span>
        </button>
        <button>
          <GoStar style={{ fontSize: "25px" }} />
          <span>{stars < 1 ? 0 : stars}</span>
        </button>
      </div>
    </div>
  );
};
