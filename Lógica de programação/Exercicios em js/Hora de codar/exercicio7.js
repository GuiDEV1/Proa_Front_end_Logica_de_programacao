/*
Programa que calcula Trapézio
Data: 26/08/2022
Autor: Guilherme M. Dias
Versão: 1.0
*/

var baseMaior, baseMenor, h, res;

baseMaior = parseFloat(prompt('Digite a base maior: '));
baseMenor = parseFloat(prompt('Digite a base menor: '));
h = parseFloat(prompt('Digite a altura: '));

res =  (baseMaior + baseMenor) * h / 2;

document.write('O resultado é: ' + res.toFixed(2));

