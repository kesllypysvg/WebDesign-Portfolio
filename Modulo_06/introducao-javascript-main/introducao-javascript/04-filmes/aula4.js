const titulofilme="Aventura Espacial";
const classificacaoMinima= 12;
const idadeEspectador= 14;
const podeAssistir= idadeEspectador >=classificacaoMinima;
console.log(podeAssistir);
document.getElementById("resultado").textContent = 
`${tituloFilme} (${classificacaoMinima} anos)-
 idade $ {idadeEspectador:pode assistir? $(podeAssistir);       