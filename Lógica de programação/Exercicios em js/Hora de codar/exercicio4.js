/*
Programa que calaula a área do retangulo
Data: 25/08/2022
Autor: Guilherme M. Dias
Versão 1.0
*/

var base, altura, res;

base = parseFloat(prompt('Informe a base: '));
altura = parseFloat(prompt('Informe a base: '));
res = base * altura;

document.write('Resultado da base . altura é: ' + res.toFixed(2));