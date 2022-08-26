/*
Programa que calcula Paralelogramo
Data: 26/08/2022
Autor: Guilherme M. Dias
Versão: 1.0
*/

var base, altura,res;

base = parseFloat(prompt('Informe a base: '));
altura = parseFloat(prompt('Informe a altura: '));

res = base * altura;
document.write('O resultado é: ' + res.toFixed(2))