/*
Programa que ler 3 valores informados pelo usuário e retorna o maior valor para o usuário.
Autor: Guilherme M. Dias
Data: 29/08/2022.
Versão: 1.0. 
*/

var n1, n2, n3,valores,t;

n1 = parseInt(prompt('Informe um valor: '));
n2 = parseInt(prompt('Informe outro valor: '));
n3 = parseInt(prompt('Informe outro valor: '));

if (n1 == n2 || n1 == n3 || n2 == n1 || n2 == n3 || n3 == n1 || n3 == n2) {
    document.write('por favor não informe numeros iguais!')
}

else if (valores == n1,n2,n3) {
    valores = [n1,n2,n3];
    t = Math.max(...valores);
    
    document.write('O maior nunmero é: ' + t);   
}

else {
    document.write('Por favor somente numeros!')
}











