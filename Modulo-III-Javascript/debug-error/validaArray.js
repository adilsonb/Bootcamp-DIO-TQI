function validaArray(array, num) {
  try {
    if (!array && !num) throw new ReferenceError("Informe o array e o número!");

    if (typeof array !== "object") throw new TypeError("Informe um array!");

    if (typeof num !== "number") throw new TypeError("Informe um número!");

    if (array.length !== num)
      throw new RangeError(
        `O tamanho do array é: ${array.length}, que é diferente do número informado: ${num}`
      );

    return array;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Erro do tipo: ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Erro do tipo: TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Erro do tipo: RangeError");
      console.log(e.message);
    } else {
      console.log("Tipo de erro inesperado: " + e);
    }
  }
}

console.log(validaArray([5, 6], 3));
