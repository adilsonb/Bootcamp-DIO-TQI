const API_URL = "https://randomfox.ca/floof/";

const getImage = async () => {
  try {
    const data = await fetch(API_URL);
    const json = await data.json();
    return json.image;
  } catch (e) {
    console.log(e.message);
  }
};

const mudaImagem = async () => {
  const imagem = document.getElementById("imagem");
  imagem.src = await getImage();
};

mudaImagem();
