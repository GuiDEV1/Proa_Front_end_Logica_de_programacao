/*
var carteira_de_matias = "";
var carteira_de_matias = "RG";
var carteira_de_matias = "Cartão de crédito";
var carteira_de_matias = 0.50;
var carteira_de_matias = 5000;
*/

var exemplo = "Alguma coisa";
var carteira_de_matias = ["rg","Cartão de credito", 0.5, 5000];
var alunos = ["Matias","Marcos","Murilo","João marcos","Martinha"];
             //0      1        2         2
var cesta = ["maça","banana","pastel","mexerica",["Melancia",funcao()] ];

function funcao () {
  return "macarrão";
}


console.log(exemplo);
console.log(carteira_de_matias);
console.log("Elemento Array " + carteira_de_matias[1]);

console.log(cesta[4][1]);

/*
if (alunos[5] == cesta[0]) {
    alert("tudo =certo");
}
else {
    alert("tudo legal");
}
*/

var contador = 0;
/*
while (contador < alunos.length) {
    document.getElementById('saida').innerHTML += "Este aluno foi a aula hoje " + alunos[contador] + "<br>";
    contador++;
}
*/

if (alunos.includes("Matias")) {
    document.getElementById('saida').innerHTML = "Matias foi encontrado";
}
else {
    document.getElementById('saida').innerHTML = "Não foi encontrado";
}
