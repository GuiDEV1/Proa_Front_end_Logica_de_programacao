/*
Programa que imprimi todas tabuadas de 1 a x, x é o numero informado pelo usuário.
Autor: Guilherme M. Dias.
Data: 04/09/2022.
Versão 1.0
*/

var n1,n2,i,m;



n1 = 1;
n2 = parseInt(prompt("Digite o número x: "));


for(i=n1;i <= n2; i++) {
    //console.log(i);

   for(m=n1; m <= 10;m++) {
     document.getElementById("saida").innerHTML += i + " x " + m + " = " + i*m + '<p>' ;
   } 
}

