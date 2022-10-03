/* 
Programa que ler 12 números informados pelo usuário
e armazena em dois arrays um com os números acima de 50. 
Outro com números abaixo de 50.
Autor:Guilherme M. Dias
Data: 02/10/2022
Versão: 1.0
*/

var numeros ;
var valorAcimaDe50 = [];
var valorAbaixoDe50 = [];

for (var i = 1; i <= 12; i++) {
    numeros = parseInt(prompt("Digite um numero: "));
  if(numeros > 50) {
    valorAcimaDe50.push(numeros);
  }
  else if (numeros < 50) {
    valorAbaixoDe50.push(numeros);
  } 
  
}

document.getElementById('saida').innerHTML = "Valores acima de 50: " + valorAcimaDe50 + "<br>";
document.getElementById('saida').innerHTML += "Valores abaixo de 50: " + valorAbaixoDe50;
