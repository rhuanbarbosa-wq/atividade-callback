const botao = document.querySelector("#btnConfirmar");
const paragrafo = document.querySelector("#mensagem");


function confirmarAcao() {
  paragrafo.textContent = "Ação confirmada!";
}

botao.addEventListener("click", confirmarAcao);