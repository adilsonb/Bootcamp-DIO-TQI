const alunos = [
  {
    aluno: "Adilson",
    nota: 9,
  },
  {
    aluno: "Maria",
    nota: 10,
  },
  {
    aluno: "Murilo",
    nota: 5,
  },
  {
    aluno: "Joana",
    nota: 9,
  },
  {
    aluno: "João",
    nota: 3,
  },
];

function alunosAprovados(array, media) {
  let aprovados = [];
  let reprovados = [];

  for (let i = 0; i < array.length; i++) {
    const { aluno, nota } = array[i];

    if (nota >= media) {
      aprovados.push(aluno);
    } else {
      reprovados.push(aluno);
    }
  }

  console.log("Alunos Aprovados:\n" + aprovados + "\n");
  console.log("Alunos Reprovados:\n" + reprovados);
}

alunosAprovados(alunos, 6);
