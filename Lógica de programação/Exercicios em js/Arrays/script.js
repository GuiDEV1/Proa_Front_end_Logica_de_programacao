/* 
Programa que ler 20 numeros e armazena em um array
e o final imprime os 20 valores.
Autor: Guilherme M. Dias.
Data: 01/10/2022.
Versão: 1.0.
*/

var numeros;
var qtd = [];

  for(var i=1; i <= 20; i++) {
     numeros = prompt("Sera que vai?????");
      qtd.push(numeros);   
 }

document.getElementById('saida').innerHTML = "Os numeros digitados: " + qtd;