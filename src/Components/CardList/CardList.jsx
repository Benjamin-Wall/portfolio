import React, { useEffect } from "react";
import { Card } from "../Card/Card";

import "./cardlist.css";

import { Loader } from "../Loader/Loader";

import {
  getRepositories,
  selectIsLoading,
  selectRepositories,
} from "../../Features/repositories/repositoriesSlice";
import { useDispatch, useSelector } from "react-redux";

export const CardList = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getRepositories());
  }, [dispatch]);

  return (
    <div className="list">
      {isLoading ? (
        <Loader />
      ) : Array.isArray(repositories) && repositories.length > 0 ? (
        repositories
          .filter((repository) => repository.topics.includes("show-on-website"))
          .map((repository, index) => {
            return (
              <Card
                key={index}
                title={repository.name}
                description={repository.description}
                repository={repository.html_url}
                siteUrl={repository.homepage}
                forks={repository.forks}
                stars={repository.stargazers_count}
              />
            );
          })
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
};
