/*
Programa que ler 6 valores pelo usuário,  Todos numeros lidos com valor inferior a 72 serão somados.
Autor: Guilherme M. Dias.
Data: 30/08/2022
Versão: 1.0
*/
var n1, n2, n3, n4 , n5, n6;

n1 = parseInt(prompt('Informe um valor: '));
n2 = parseInt(prompt('Informe outro valor: '));
n3 = parseInt(prompt('Informe outro valor: '));
n4 = parseInt(prompt('Informe outro valor: '));
n5 = parseInt(prompt('Informe outro valor: '));
n6 = parseInt(prompt('Informe outro valor: '));
 
document.write('Todos valores informados pelo usuário: '+ n1 + ' ' + n2 + ' ' + n3 + ' ' + n4 + ' ' + n5 + ' ' + n6 + ' <br> <hr>')


if (n1 < 72 && n2 < 72 && n3 < 72 && n4 < 72 < n5 < 72 && n6 < 72) {
    document.write('resultdado da soma é: ' + (n1 + n2 + n3 + n4 + n5 + n6));
}

else {
    document.write('Os numeros informados a cima são maiores que 72!!');
}


