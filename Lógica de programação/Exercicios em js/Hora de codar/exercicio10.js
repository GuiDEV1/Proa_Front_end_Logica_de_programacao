/*
Programa que calcula um circulo
Data: 26/08/2022
Autor: Guilherme M. Dias
Versão: 1.0
*/

var pi, r, res;

pi = parseFloat(prompt("Informe o valor de π : "));
r =  parseFloat(prompt("Informe o valor de R : "));

res = pi * (r ** r);

document.write('o resultado é: ' + res);
