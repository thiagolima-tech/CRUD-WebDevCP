let names = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

// fazer botão com contador e cada clique ordena por posição ou por jogadora e guardar essa contagem no local storage
// Botão editar que transforma o texto em um input e cria um botão cancelar
// Botão excluir com alert de confirmação
const btnTeste = document.getElementById("btnMultiUse");
btnTeste.addEventListener("click", (event) => {
  event.preventDefault();
  names.unshift({
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  });
  displayCards();
});

function displayCards() {
  const cardsDiv = document.querySelector("#PlayersCards");
  cardsDiv.innerHTML = ``;
  const localNames = JSON.parse(localStorage.getItem("cards")) || names;

  localNames.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <img src="${element.foto}"></img>
    <h3>${element.nome}</h3>
    `;
    cardsDiv.append(card);
  });

  localStorage.setItem("cards", JSON.stringify(names));
}

window.onload = function () {
  displayCards();
};
