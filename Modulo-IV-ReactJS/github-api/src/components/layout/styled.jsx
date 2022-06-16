import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /*flex-basis: 100%;*/
  height: 50px;
  justify-content: ${(props) => (props.align ? props.align : "flex-start")};
  flex: 1;

  @media screen and (max-width: 750px) {
    justify-content: center;
    margin: 10px 0;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 250px;
  border: 0;
  padding-left: 10px;
  background-color: #333;
  font-size: 1.1rem;
  font-weight: 200;
  color: whitesmoke;

  &:focus {
    background-color: #3a3b3c;
    outline: none;
  }
`;

export const Button = styled.button`
  height: 42px;
  border: 0;
  padding: 0 10px;
  margin-left: 10px;
  color: whitesmoke;
  cursor: pointer;
  background-color: #3f67ac;

  &:hover {
    background-color: #5e367e;
  }
`;

export const Header = styled.header`
  background-color: #242526;
  color: white;
  min-height: 50px;
  padding: 10px 30px;

  h2 {
    color: whitesmoke;
  }

  span {
    color: orange;
  }

  @media screen and (max-width: 500px) {
    h2 {
      text-align: center;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 50px;
  background-color: #18191a;

  @media screen and (max-width: 500px) {
    /*padding: 0;*/
    border-bottom: 1px solid #333;
    overflow-x: hidden;
    padding: 50px 0;
  }
`;

export const Footer = styled.footer`
  padding: 5px 0;
  text-align: center;
  /*color: whitesmoke;*/
  background-color: #242526;
  font-weight: 200;
  font-size: 0.8rem;
  color: #878787;
  line-height: 30px;
`;
