function comparaNumeros(valor1, valor2) {
  let num1 = Number(valor1);
  let num2 = Number(valor2);

  let textoSaoIguais;
  let textoMaiorDez;
  let textoMenorVinte;

  if (num1 && num2) {
    if (num1 === num2) {
      textoSaoIguais = "iguais";
    } else {
      textoSaoIguais = "diferentes";
    }

    let somaNumeros = num1 + num2;

    if (somaNumeros > 10) {
      textoMaiorDez = "maior que";
    } else if (somaNumeros === 10) {
      textoMaiorDez = "igual a";
    } else {
      textoMaiorDez = "menor que";
    }

    if (somaNumeros > 20) {
      textoMenorVinte = "maior que";
    } else if (somaNumeros === 20) {
      textoMenorVinte = "igual a";
    } else {
      textoMenorVinte = "menor que";
    }

    let resposta = `Os números ${num1} e ${num2} são ${textoSaoIguais}. Sua soma é ${somaNumeros} que é ${textoMaiorDez} 10 e ${textoMenorVinte} 20.`;

    console.log(resposta);
  } else {
    console.log("Você precisa informar dois números!");
  }
}

comparaNumeros(11, 8);
