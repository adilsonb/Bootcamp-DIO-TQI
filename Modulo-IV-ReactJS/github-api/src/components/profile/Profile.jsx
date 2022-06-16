import React, { useEffect, useState } from "react";
import useGitHub from "../../hooks/github-hook";
import Repositories from "../repositories/Repositories";
import Starreds from "../starreds/Starreds";
import * as S from "./styled";
import NoData from "../nodata/NoData";
import NoUser from "../nouser/NoUser";

function sliceDate(e) {
  if (e) {
    return e.slice(0, 10).replace(/-/g, "/");
  }
}

function Profile() {
  const { gitHubState, getUserRepos, getUserStarred } = useGitHub();
  const [showRepo, setShowRepo] = useState(true);
  const [showStarred, setShowStarred] = useState(false);
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);
  const [validUser, setValidUser] = useState(false);

  let countStarred = 0;

  useEffect(() => {
    getUserRepos(gitHubState.user.login);
    getUserStarred(gitHubState.user.login);
    setHasUserForSearchrepos(gitHubState.repositories);
    setValidUser(gitHubState.validUser);
  }, [gitHubState.user.login, gitHubState.validUser]);

  useEffect(() => {
    if (validUser === false) {
      setValidUser(gitHubState.validUser);
      setHasUserForSearchrepos(false);
    }
  }, [gitHubState.user.login, gitHubState.validUser]);

  if (gitHubState.starred.length > 0) {
    countStarred = gitHubState.starred.length;
  }

  return (
    <>
      {validUser ? (
        <>
          <S.Wrapper>
            <S.PictureProfile>
              <S.Img src={gitHubState.user.avatar} alt="Teste" />
            </S.PictureProfile>
          </S.Wrapper>
          <S.ContentProfile>
            <S.userInfo>
              <h1>{gitHubState.user.name}</h1>
              <h2>
                <a
                  href={`https://github.com/${gitHubState.user.login}`}
                  target="_blank"
                  alt={`Link to ${gitHubState.user.name} profile`}
                >
                  {gitHubState.user.login}
                </a>
              </h2>

              <h4>
                <span>Location: {gitHubState.user.location}</span>

                <S.HideMediumScreen> • </S.HideMediumScreen>

                <S.HideBigScreen>
                  <br />
                </S.HideBigScreen>

                <span>
                  Member Since: {sliceDate(gitHubState.user.created_at)}
                </span>
              </h4>
            </S.userInfo>

            <S.RowTotals>
              <S.Column>
                <h2>{gitHubState.user.followers}</h2>
                <h5>Followers</h5>
              </S.Column>
              <S.Column>
                <h2>{gitHubState.user.following}</h2>
                <h5>Following</h5>
              </S.Column>
              <S.Column>
                <h2>{gitHubState.user.public_gists}</h2>
                <h5>Gists</h5>
              </S.Column>
              <S.Column>
                <h2>{gitHubState.user.public_repos}</h2>
                <h5>Repos</h5>
              </S.Column>
              <S.Column>
                <h2>{countStarred}</h2>
                <h5>Starred</h5>
              </S.Column>
            </S.RowTotals>

            <S.ButtonWrapper>
              <S.ButtonRepo
                active={showRepo}
                onClick={() => {
                  setShowRepo(true), setShowStarred(false);
                }}
              >
                Repositories
              </S.ButtonRepo>
              <S.ButtonStarred
                active={showStarred}
                onClick={() => {
                  setShowStarred(true), setShowRepo(false);
                }}
              >
                Starreds
              </S.ButtonStarred>
            </S.ButtonWrapper>

            <S.Content show={showRepo}>
              <S.Title>
                <h2>Repositories</h2>
              </S.Title>
              <Repositories />
            </S.Content>

            <S.Content show={showStarred}>
              <S.Title>
                <h2>Starreds</h2>
              </S.Title>
              <Starreds />
            </S.Content>
          </S.ContentProfile>
        </>
      ) : (
        <>{validUser === false ? <NoUser /> : <NoData />}</>
      )}
    </>
  );
}

export default Profile;
