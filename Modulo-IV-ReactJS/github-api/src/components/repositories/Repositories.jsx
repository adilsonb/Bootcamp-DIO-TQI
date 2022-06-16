import React, { useEffect, useState } from "react";
import useGitHub from "../../hooks/github-hook";
import forkIcon from "../../assets/icons/fork-repo.svg";
import starIcon from "../../assets/icons/star-repo.svg";
import * as S from "./styled";

function sliceDate(e) {
  if (e) {
    return e.slice(0, 10).replace(/-/g, "/");
  }
}

function Repositories() {
  const { gitHubState, getUserRepos, getUserStarred } = useGitHub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    getUserRepos(gitHubState.user.login);
    getUserStarred(gitHubState.user.login);
    setHasUserForSearchrepos(gitHubState.repositories);
  }, [gitHubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.Wrapper>
          {gitHubState.repositories.map((item) => (
            <S.Card key={item.id}>
              <S.CardBody>
                <p>
                  <a
                    href={`https://github.com/${item.full_name}`}
                    target="_blank"
                    rel="noreferrer"
                    title="Click to open link"
                  >
                    {item.name}
                  </a>
                </p>
                <S.Description>{item.description}</S.Description>
              </S.CardBody>
              <S.InfoCard>
                <span>
                  <S.Img src={forkIcon} alt="Forked"></S.Img>
                  {item.forks_count}
                </span>
                <span>Updated {sliceDate(item.updated_at)}</span>
                <span>
                  <S.Img src={starIcon} alt="Repo Stars"></S.Img>
                  {item.stargazers_count}
                </span>
              </S.InfoCard>
            </S.Card>
          ))}
        </S.Wrapper>
      ) : null}
    </>
  );
}

export default Repositories;
