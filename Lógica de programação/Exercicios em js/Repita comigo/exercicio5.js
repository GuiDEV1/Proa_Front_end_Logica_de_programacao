/* 
Programa que que calcula a média aritimética dos dois números informado
pelo usuário considerendo que o primeiro sempre será menor que o segundo.
Autor: Guilherme M. Dias.
Data: 03/09/2022.
Versão: 1.0.
*/

var n1,n2,i,res;

n1 = parseFloat(prompt('Digite o primeiro valor: '));
n2 = parseFloat(prompt('Digite o primeiro valor: '));


while( n1 > n2) {
   n1 = parseFloat(prompt('Digite o primeiro valor novamente: '));
}

for(i=n1; i < n2;i++) {
   document.getElementById('saida').innerHTML += (i+i) + "<br>";  
}

res = (i+i);


document.getElementById('saida').innerHTML += "<hr>O resultado da média é: " + (i+i /i);   