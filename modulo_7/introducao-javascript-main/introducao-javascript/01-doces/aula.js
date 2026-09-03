// primeira aula de JavaScript
// Vamos aprender a criar variáveis e conhecer os tipos de dados.

const nomeDoce = "beijinho"; 
const preco = 6.7;
const disponível = true;

console.log(nomeDoce, preco, disponível);

document.getElementById("resultado").textContent = ` ${nomeDoce} custa R$ ${preco.toFixed(2)} - disponível: ${disponível}`;