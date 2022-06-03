import styled from "styled-components";
import GlobalStyle from "./themes/globalStyles";
import Quotes from "./components/quotes/Quotes";
import ElevenImage from "./assets/images/eleven.png";

function App() {
  return (
    <>
      <Content>
        <GlobalStyle />
        <Quotes />
        <ElevenImg src={ElevenImage} alt="Eleven image" />
      </Content>
    </>
  );
}

const Content = styled.div`
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const ElevenImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;

  @media (max-width: 1023px) {
    max-width: 100vw;
  }
`;

export default App;
