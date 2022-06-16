import * as S from "./styled";
import useGitHub from "../../hooks/github-hook";
import { useState } from "react";

function Header() {
  const { getUser } = useGitHub();
  const [usernameSearch, setUsernameSearch] = useState();
  const { gitHubState } = useGitHub();

  const submitGetUser = () => {
    if (!usernameSearch) return;
    return getUser(usernameSearch);
  };

  return (
    <S.Header>
      <S.Row>
        <S.Column>
          <h2>
            <span>{gitHubState.user.name}</span> GitHub Profile
          </h2>
        </S.Column>
        <S.Column align="flex-end">
          <S.Input
            type="text"
            onChange={(event) => setUsernameSearch(event.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submitGetUser();
              }
            }}
          ></S.Input>
          <S.Button onClick={submitGetUser}>Search</S.Button>
        </S.Column>
      </S.Row>
    </S.Header>
  );
}

export default Header;
