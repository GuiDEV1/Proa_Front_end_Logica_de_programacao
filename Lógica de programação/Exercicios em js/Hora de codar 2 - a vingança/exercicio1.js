/*
 Programa que o usuário informa dois numeros , e retrona o maior numero
 Data: 26/08/2022
 Autor: Guilherme M. Dias
 Versão: 1.0
*/
var n1, n2;

n1 = parseInt(prompt("Informe o primeiro valor: "));
n2 = parseInt(prompt("Informe o primeiro valor: "));

if (n1 === n2) {
    document.write('Eles são iguais!');
}

else if (n1 > n2) {
    document.write('o maior numero é: ' + n1);
}

else if (n2 > n1) {
    document.write('o maior numero é: ' + n2);
}

else {
    document.write('Erro tente novamente!');
}
