import React from "react";

const getQuotes = async () => {
  //return fetch(process.env.REACT_APP_API).then((response) => response.json());
  //.then((data) => console.log(data));

  return (response = await fetch(process.env.REACT_APP_API));
};

export default getQuotes;
