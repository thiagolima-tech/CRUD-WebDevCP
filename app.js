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
function handleCreateDiv(event) {
  event.preventDefault();
  const headFunc = document.querySelector("#headFunc");
  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
    <input type="text" id="nomeInput" placeholder="Nome da jogadora" />
    <input type="text" id="posicaoInput" placeholder="Posição" />
    <input type="text" id="clubeInput" placeholder="Clube" />
    <input type="text" id="fotoInput" placeholder="URL da Foto" />
    <input type="number" id="golsInput" placeholder="Gols" />
    <input type="number" id="assistenciasInput" placeholder="Assistências" />
    <input type="number" id="jogosInput" placeholder="Jogos" />
    <button id="btnCreateCard">Criar</button>
  `;

  headFunc.append(createDiv);
  document
    .querySelector("#btnCreateCard")
    .addEventListener("click", handleCreateCard);
}

function handleCreateCard(event) {
  event.preventDefault();

  const nome = document.getElementById("nomeInput").value.trim();
  const posicao = document.getElementById("posicaoInput").value.trim();
  const clube = document.getElementById("clubeInput").value.trim();
  const foto = document.getElementById("fotoInput").value.trim();
  const gols = parseInt(document.getElementById("golsInput").value);
  const assistencias = parseInt(
    document.getElementById("assistenciasInput").value
  );
  const jogos = parseInt(document.getElementById("jogosInput").value);

  if (!nome) return alert("Digite o nome da jogadora!");

  let localNames = JSON.parse(localStorage.getItem("cards"));

  localNames.unshift({
    nome,
    posicao,
    clube,
    foto,
    gols,
    assistencias,
    jogos,
    favorita: false,
  });

  localStorage.setItem("cards", JSON.stringify(localNames));
  displayCards();
}

function displayCards() {
  const cardsDiv = document.querySelector("#PlayersCards");
  cardsDiv.innerHTML = ``;
  let localNames = JSON.parse(localStorage.getItem("cards"));
  if (!localNames) {
    localNames = names;
    localStorage.setItem("cards", JSON.stringify(names));
  }

  localNames.forEach((element, index) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <img src="${element.foto}"></img>
    <h3>${element.nome}</h3>
    <button class="btnFav">
      <img src="${element.favorita ? './assets/icons/coracao.png' : './assets/icons/contorno-em-forma-de-coracao.png'}"/>
    </button>
    <button class="btnEdit">Editar</button>
    <button class="btnDel">Excluir</button>
    `;
    card.querySelector(".btnDel").addEventListener("click", () => {
      if (confirm("Deseja deletar o post?")) {
        localNames.splice(index, 1);
        localStorage.setItem("cards", JSON.stringify(localNames));
        displayCards();
      }
    });
    card.querySelector(".btnFav").addEventListener("click", () => {
      if (!element.favorita){
        element.favorita = true;
      }
      else {
        element.favorita = false
      }
      localStorage.setItem("cards", JSON.stringify(localNames));
      displayCards()
    });
    card.querySelector(".btnEdit").addEventListener("click", () => {
      element.nome = 
    });
    cardsDiv.append(card);
  });
}

window.onload = function () {
  displayCards();

  document
    .querySelector("#btnCreate")
    .addEventListener("click", handleCreateDiv);
  document
    .querySelector("#btnCreateCard")
    .addEventListener("click", handleCreateCard);
};
