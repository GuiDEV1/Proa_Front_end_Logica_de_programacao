/* 
Programa que calcula losango
Data: 26/08/2022
Autor: Guilherme M. Dias
Versão 1.0
*/

var diagonalMaior, diagonalMenor, res;

diagonalMaior = parseFloat(prompt('Digite o valor de diagonal maior: '));
diagonalMenor = parseFloat(prompt('Digite o valor de diagonal menor: '));

res = (diagonalMaior * diagonalMenor) / 2;

document.write('O resultado é: ' + res.toFixed(2));