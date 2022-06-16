import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dfdfdf;
  max-width: 1600px;
  min-width: 350px;
  margin: 0 auto;

  h1,
  h4 {
    padding-bottom: 5px;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /*flex-basis: 100%;*/
  justify-content: ${(props) => (props.align ? props.align : "flex-start")};
  flex: 1;

  @media screen and (max-width: 750px) {
    padding: 20px;
    border-bottom: 1px solid #333;
  }
`;

export const PictureProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  height: 140px;
  background: #242526;
  position: relative;
  margin-top: 120px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Img = styled.img`
  position: absolute;
  width: 250px;
  border-radius: 50%;
  border: 5px solid white;
  top: -125px;
`;

export const ContentProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242526;
  max-width: 1600px;
  margin: 0 auto;
  color: #aeaeae;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  h1 {
    font-size: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    padding-bottom: 5px;
    margin: 0;
  }
`;

export const HideMediumScreen = styled.span`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const HideBigScreen = styled.span`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const userInfo = styled.div`
  text-align: center;
  color: #bebebe;
  margin: 20px 0;

  a {
    color: #58a6ff;
    text-decoration: none;
  }
`;

export const RowTotals = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px 0;
  background-color: #3a3b3c;
  margin-top: 15px;

  h2 {
    color: whitesmoke;
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  h5 {
    color: orange;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin: 10px 0;
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 40px 0 20px 0;
`;

export const ButtonRepo = styled.button`
  width: 135px;
  text-align: center;
  background: ${(props) => (props.active ? "#334f7a" : "#535962")};
  color: whitesmoke;
  border-right: 1px solid #c1c4c9;
  padding: 13px 15px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  font-size: 1.1rem;

  :hover {
    background-color: #215b3c;
  }
`;

export const ButtonStarred = styled.button`
  width: 135px;
  text-align: center;
  background: ${(props) => (props.active ? "#45679e" : "#535962")};
  border-left: 1px solid #c1c4c9;
  padding: 13px 15px;
  color: whitesmoke;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  font-size: 1.1rem;

  :hover {
    background-color: #215b3c;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    color: orange;
    font-size: 2rem;
  }
`;

export const Content = styled.section`
  margin-bottom: 30px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const NoUserCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: beige;
`;
