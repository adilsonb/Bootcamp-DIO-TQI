function substituiPares(numero) {
  if (!Number(numero)) return console.log("Informe um número!");

  let array = Array.from(Array(numero).keys());

  console.log(`O array atual é: ${array}\n`);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(`Substituindo o número ${array[i]} por 0.`);
      array[i] = 0;
    }
  }

  console.log(`\nO novo array, substuindo os pares por 0 é: ${array}`);
}

substituiPares(10);
