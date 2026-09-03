const destino = "Rio de Janeiro";

const precoPassagem = 320;

const idadePassageiro = 70;

const temMeiaEntrada = idadePassageiro >= 60 || idadePassageiro <= 12;

const fatorDesconto = temMeiaEntrada ? 0.5 : 1;

const valorFinal = precoPassagem * fatorDesconto;

document.getElementById("resultado").textContent =
  `Passagem para ${destino}: R$ ${valorFinal.toFixed(2)}`;