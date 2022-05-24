function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa01 = {
  nome: "Alice",
  idade: 3,
};

const pessoa02 = {
  nome: "José",
  idade: 52,
};

const animal = {
  nome: "Pipoca",
  idade: 7,
};

console.log(calculaIdade.call(pessoa01, 15));
console.log(calculaIdade.apply(animal, [7]));
