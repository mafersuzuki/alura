// Seleciona apenas os botões de reação dentro dos artigos
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    let texto = botao.querySelector("span");

    if (!curtiu) {
      texto.textContent = Number(texto.textContent) + 1;
      curtiu = true;
    } else {
      texto.textContent = Number(texto.textContent) - 1;
      curtiu = false;
    }
  });
});

// Configuração do botão de alternar tema
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
  const corpoPagina = document.body;
  // toggle adiciona a classe se ela não existir, e remove se existir
  corpoPagina.classList.toggle("tema-escuro");
}