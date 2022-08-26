/* 
Programa que calcula um a area de um quadrado
Data: 26/08/2022
Autor: Guilherme M. Dias
Versão: 1.0
*/

var lado,res;

lado = parseFloat(prompt('Digite o valor do lado do quedrado: '));
res = lado * lado;

document.write('O resultado é: ' +  res.toFixed(3))