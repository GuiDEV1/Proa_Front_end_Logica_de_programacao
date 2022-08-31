/*
Programa que ler 2 valores informados pelo usuário, e faz as contas aritiméticas
Adição , subtração, Divisão, Multplicação, porém so serão lidos osm valores 1, 2, 3, 4.
Autor: Guilherme M. Dias.
Data: 30/08/2022.
*/

var n1,n2;

n1 = parseInt(prompt('Digite o primeiro valor: '));
n2 = parseInt(prompt('Digite o segundo valor: '));

if (n1 < 5 && n1 > 0 && n2 < 5 && n2 > 0) {

    document.write('Adição: ' + (n1 + n2 ) + '<hr>');
    document.write('Subtração: ' + (n1 - n2 ) + '<hr>');
    document.write('Divisão: ' + (n1 / n2 ).toFixed(2) + '<hr>');
    document.write('Multplicação: ' + (n1 * n2 ) + '<hr>');
}
else {
    document.write('Informe um valor de 1 a 4!');
}