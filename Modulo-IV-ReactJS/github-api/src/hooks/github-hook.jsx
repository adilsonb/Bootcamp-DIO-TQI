import { useContext } from "react";
import { GitHubContext } from "../providers/github-provider";

const useGitHub = () => {
  const { gitHubState, getUser, getUserStarred, getUserRepos } =
    useContext(GitHubContext);
  return { gitHubState, getUser, getUserStarred, getUserRepos };
};

export default useGitHub;
