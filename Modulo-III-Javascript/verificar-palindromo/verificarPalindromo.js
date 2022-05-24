function verificaPalindromo(word) {
  if (!word) return "Informe uma palavra!";

  let palindromo = word.split("").reverse().join("");

  let compara = word === palindromo ? "é" : "não é";

  let resposta = `A palavra "${word}" de trás para frente é "${palindromo}", portanto ela ${compara} um palíndromo.`;

  console.log(resposta);
}

verificaPalindromo("radar");
