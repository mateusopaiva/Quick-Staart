import { questions } from "./questions.js";

var revelarRespostaButton = document.querySelector('#revelarResposta');
var atualizarPerguntaButton = document.querySelector('#atualizarPergunta');
var cardContainer = document.querySelector("#cardContainer");

function toggleBlur() {
    var resposta = document.querySelector("#resposta");
    resposta.classList.toggle("blur");
}

function buscarInformacao() {
    var valorAleatorio = Math.floor(Math.random() * questions.length);
    var perguntaAleatoria = questions[valorAleatorio];
    proximaPergunta(perguntaAleatoria);
}

function proximaPergunta(proximaPergunta) {
    cardContainer.innerHTML = "";

    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

    cardDiv.innerHTML = `
        <div class="card-cabecalho centralizar">
            <h1 class="card-titulo">${proximaPergunta.title}?</h1>
        </div>
        <div id="resposta" class="card-conteudo blur">
            <p>${proximaPergunta.description}</p>
        </div>
    `;

    cardContainer.appendChild(cardDiv);
}

revelarRespostaButton.addEventListener("click", toggleBlur);
atualizarPerguntaButton.addEventListener("click", buscarInformacao);

window.addEventListener("load", buscarInformacao);
