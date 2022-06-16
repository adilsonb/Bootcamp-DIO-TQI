import React from "react";
import * as S from "./styled";

function NoUser() {
  return (
    <S.Card>
      <h1>Invalid Username!</h1>
      <h2>Enter a valid GitHub username.</h2>
    </S.Card>
  );
}

export default NoUser;
