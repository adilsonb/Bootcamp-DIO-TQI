import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  min-height: 150px;
  width: 350px;
  border: 1px solid #595959;
  margin: 20px;
  background-color: #3a3b3c;

  a {
    color: #58a6ff;
    font-size: 1.2em;
    font-weight: 300;
  }
`;

export const CardBody = styled.div`
  padding: 10px;
`;

export const Description = styled.div`
  margin-top: 10px;
`;

export const InfoCard = styled.div`
  position: absolute;
  color: gray;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 10px;
  font-size: 0.9rem;
  line-height: 20px;
`;

export const Img = styled.img`
  width: 16px;
  height: auto;
  margin-right: 5px;
`;
