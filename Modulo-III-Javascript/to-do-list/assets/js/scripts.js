let contador = 0;

let inputTarefa = document.getElementById("inputTarefa");
let listaTarefas = document.getElementById("listaTarefas");

function adicionarTarefa() {
  contador++;

  let chkID = "id_" + contador;

  if (inputTarefa.value !== "") {
    let container = document.createElement("div");
    container.className = "itens-lista";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = chkID;

    let label = document.createElement("label");
    label.htmlFor = chkID;
    label.appendChild(document.createTextNode(inputTarefa.value));
    container.appendChild(checkbox);
    container.appendChild(label);
    listaTarefas.appendChild(container);
  }
}
