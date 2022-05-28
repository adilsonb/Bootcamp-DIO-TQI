const cards = document.querySelectorAll(".card");
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let blockBoard = false;
let tentativas = 0;

function flipCard() {
  if (blockBoard) return;
  if (this === primeiraCarta) return;

  this.classList.add("flip");
  if (!cartaVirada) {
    cartaVirada = true;
    primeiraCarta = this;
    return;
  }

  tentativas++;
  document.getElementById("total").innerHTML = tentativas.toString();
  segundaCarta = this;
  cartaVirada = false;
  matchCard();
}

function matchCard() {
  if (primeiraCarta.dataset.card === segundaCarta.dataset.card) {
    disableCards();
    return;
  }
  desviraCarta();
}

function disableCards() {
  primeiraCarta.removeEventListener("click", flipCard);
  segundaCarta.removeEventListener("click", flipCard);
  resetBoard();
}

function desviraCarta() {
  blockBoard = true;
  setTimeout(() => {
    primeiraCarta.classList.remove("flip");
    segundaCarta.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [cartaVirada, blockBoard] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}

(function randomiza() {
  cards.forEach((card) => {
    let posicaoAleatoria = Math.floor(Math.random() * 12);
    card.style.order = posicaoAleatoria.toString();
  });
})();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function jogarNovamente() {
  document.location.reload(true);
}

function desistir() {
  document.getElementsByTagName("h2")[0].innerHTML = "Você desistiu!";
  for (let i = 0; i < cards.length; ++i) {
    cards[i].removeEventListener("click", flipCard);
    cards[i].classList.add("flip");
  }
}
