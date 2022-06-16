import React, { createContext, useCallback, useState } from "react";
import apiGitHub from "../services/api-github";

export const GitHubContext = createContext({
  loading: false,
  user: {},
  starred: [],
  repositories: [],
});

const GitHubProvider = ({ children }) => {
  const [gitHubState, setGitHubState] = useState({
    hasUser: false,
    validUser: undefined,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
      created_at: undefined,
    },
    starred: [],
  });

  const getUser = (username) => {
    setGitHubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    apiGitHub
      .get(`users/${username}`)
      .then(({ data }) => {
        setGitHubState((prevState) => ({
          ...prevState,
          hasUser: true,
          validUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            created_at: data.created_at,
          },
        }));
      })
      .finally(() => {
        setGitHubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      })
      .catch((error) => {
        setGitHubState((prevState) => ({
          ...prevState,
          validUser: false,
        }));
        console.log("Error Username API");
      });
  };

  const getUserStarred = (username) => {
    apiGitHub
      .get(`users/${username}/starred`)
      .then(({ data }) => {
        //console.log("data: " + JSON.stringify(data));
        setGitHubState((prevState) => ({
          ...prevState,
          starred: data,
        }));
      })
      .catch((error) => {
        setGitHubState((prevState) => ({
          ...prevState,
          validUser: false,
        }));
        console.log("Error Starred API");
      });
  };

  const getUserRepos = (username) => {
    apiGitHub
      .get(`users/${username}/repos`)
      .then(({ data }) => {
        //console.log("data: " + JSON.stringify(data));
        setGitHubState((prevState) => ({
          ...prevState,
          repositories: data,
        }));
      })
      .catch((error) => {
        setGitHubState((prevState) => ({
          ...prevState,
          validUser: false,
        }));
        console.log("Error Repository API");
      });
  };

  const contextValue = {
    gitHubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubProvider;
