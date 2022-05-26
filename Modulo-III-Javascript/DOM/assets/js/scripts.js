let classDarkMode = "dark-mode";
let main = document.getElementById("mainPage");
let button = document.getElementsByTagName("button")[0];
let footer = document.getElementById("footer");
let texto = document.getElementsByClassName("title")[0];

console.log(texto);

function darkMode() {
  changeClass();
  changeText();
}

function changeClass() {
  main.classList.toggle(classDarkMode);
  button.classList.toggle(classDarkMode);
  footer.classList.toggle(classDarkMode);
}

function changeText() {
  let lightMode = "Light Mode";
  let darkMode = "Dark Mode";

  if (main.classList.contains(classDarkMode)) {
    button.innerHTML = lightMode;
    texto.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  texto.innerHTML = lightMode + " ON";
}
