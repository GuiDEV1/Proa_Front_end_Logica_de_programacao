/*
Programa que recebe 4 valores pelo usuário e retorna o primeiro numero, o ultimo e o maior de todos.
Autor:> Guilherme M. Dias.
Data: 29/08/2022.
Versão: 1.0.
*/

var n1,n2,n3,n4,res,t;

n1 = parseInt(prompt('Informe outro valor: '));
n2 = parseInt(prompt('Informe outro valor: '));
n3 = parseInt(prompt('Informe outro valor: '));
n4 = parseInt(prompt('Informe outro valor: '));

if (n1 == n2 || n1 == n3 || n1 == n4 || n2 == n1 || n2 == n3 || n2 == n4 || n3 == n1 || n3 == n2 || n3 == n4 || n4 == n1 || n4 == n2 || n4 == n3 ) {
    document.write('Por favor não informe números iguais!!');
    
}

else  {
    res = [n1,n2,n3,n4];
t = Math.max(...res);

document.write('Primeiro valor : ' + n1 + '<br>' + ' Ultimo valor ' + n4 + '<br>' +
 ' Maior valor digitado: ' + t);
}






