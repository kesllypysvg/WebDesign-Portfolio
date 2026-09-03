//Primeira aula de Javascript//
/*Vamos aprender a criar as variáveis e conhecer os tipos*/

const nomeDoce ="Brigadeiro";
const preco = 6.7;
const disponivel = true;

console.log(nomeDoce,preco,disponivel);

document.getElementyBId("resultado").textContent=`${nomeDoce} custa R$ ${preco.tofixed(2)}-disponivel: ${disponivel}`;