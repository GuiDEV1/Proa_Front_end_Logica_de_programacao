/*
Programa que que ler 3 valores e informa a soma dos maiores.
Autor: Guilherme M. Dias.
Data: 29/08/2022.
Versão: 1.0.
*/


var n1, n2, n3;

n1 = parseInt(prompt("Informe um valor: "));
n2 = parseInt(prompt("Informe outro valor: "));
n3 = parseInt(prompt("Informe outro um valor: "));

if (n1 == n2 || n1 == n3 || n2 == n1 || n2 == n3 || n3 == n1 || n3 == n2) {
    document.write('por favor não informe numeros iguais!');
}

else if (n1 > n2 && n2 > n3) {
    document.write('Soma dos dois maiores ' + n1 + n2);
}

else if (n1 > n3 && n3 > n2) {
    document.write( 'Soma dos dois maiores ' +n1 + n3);
}

else {
    document.write( 'Soma dos dois maiores ' +n2 + n3);
} 



