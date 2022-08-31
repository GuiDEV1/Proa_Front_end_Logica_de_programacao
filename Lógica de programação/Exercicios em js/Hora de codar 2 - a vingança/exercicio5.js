/*
Programa que ler 6 valores informados pelo usuário, caclula uma média aritimética.
Autor: Guilherme M. Dias.
Data: 29/08/2022.
Versão: 1.0.
*/

var n1,n2,n3,n4,n5,n6,res;

n1 = parseInt(prompt('Digite um valor: '));
n2 = parseInt(prompt('Digite outro valor: '));
n3 = parseInt(prompt('Digite outro valor: '));
n4 = parseInt(prompt('Digite outro valor: '));
n5 = parseInt(prompt('Digite outro valor: '));
n6 = parseInt(prompt('Digite outro valor: '));

res = (n1 + n2 + n3 + n4 + n5 + n6) / 6;

document.write('A média desses valores são: ' + res.toFixed(2));
