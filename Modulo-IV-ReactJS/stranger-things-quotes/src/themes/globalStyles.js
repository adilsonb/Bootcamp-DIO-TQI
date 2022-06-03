import { createGlobalStyle } from "styled-components";
import StrangerThings from "../assets/fonts/StrangerThings-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Stranger Things';
    src: url(${StrangerThings});
  }

  body {
    margin: 0;
    padding: 0;        
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
