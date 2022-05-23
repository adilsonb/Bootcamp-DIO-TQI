let contador = 0;

const TECLA_MAIS = document.getElementById("btnMais");
const TECLA_MENOS = document.getElementById("btnMenos");

const NUMERO_ATUAL = document.getElementById("numeroAtual");

function adicionar() {
  contador++;
  NUMERO_ATUAL.innerHTML = contador.toString();
}

function subtrair() {
  contador--;
  NUMERO_ATUAL.innerHTML = contador.toString();
}

document.addEventListener(
  "keydown",
  (event) => {
    let tecla = event.key;

    if (tecla === "+") {
        TECLA_MAIS.classList.add("clicked");
      adicionar();
    } else if (tecla === "-") {
        TECLA_MENOS.classList.add("clicked");
      subtrair();
    } else {

    }
  },
    false,
);

document.addEventListener("keyup",
    () => {
                    TECLA_MAIS.classList.remove("clicked");
        TECLA_MENOS.classList.remove("clicked");
    },
    false,
);
