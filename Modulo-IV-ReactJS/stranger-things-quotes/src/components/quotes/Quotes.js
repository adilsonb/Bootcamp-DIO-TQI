import { useEffect, useState } from "react";
import styled from "styled-components";
import randomBackground from "../backgrounds/randomBackground";

const urlAPI = "https://strangerthings-quotes.vercel.app/api/quotes";

function Quotes() {
  const [quote, setQuote] = useState([]);

  const quotes = async () => {
    randomBackground();
    const response = await fetch(urlAPI);
    setQuote(await response.json());
  };

  useEffect(() => {
    quotes();
  }, []);

  return (
    <>
      <Wrapper>
        {quote.map((data, index) => (
          <Blockquote key={index}>{data.quote}</Blockquote>
        ))}
        {quote.map((data, index) => (
          <Cite key={index}>- {data.author}</Cite>
        ))}
        <Button onClick={() => quotes()}>Nova citação</Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

const Blockquote = styled.div`
  font-size: 3rem;
  text-align: center;
  color: whitesmoke;
  font-family: "Stranger Things", sans-serif;
  word-spacing: 1rem;

  @media (max-width: 1023px) {
    margin-top: 50px;
    font-size: 2rem;
    word-spacing: normal;
  }
`;

const Cite = styled.cite`
  font-size: 1.5rem;
  text-align: center;
  color: whitesmoke;
  font-family: "Stranger Things", sans-serif;
  padding: 30px 0;
`;

const Button = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-family: "Stranger Things", sans-serif;
  background-color: #3b1955;
  color: whitesmoke;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #48057b;
  }
`;

export default Quotes;
