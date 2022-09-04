/*

Programa em que o usuário informa 10 valores, e retorna
para o usuário quantos desses valores estão entre (24 e 42)
e quantos deles estão fora dese intervalo.

*/

var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,i,total;

n1 = parseInt(prompt("Digite o primeiro valor: "));
n2 = parseInt(prompt("Digite o segundo valor: "));
n3 = parseInt(prompt("Digite o terceiro valor: "));
n4 = parseInt(prompt("Digite o quarto valor: "));
n5 = parseInt(prompt("Digite o quinto valor: "));
n6 = parseInt(prompt("Digite o sexto valor: "));
n7 = parseInt(prompt("Digite o sétimo valor: "));
n8 = parseInt(prompt("Digite o oitavo valor: "));
n9 = parseInt(prompt("Digite o nono valor: "));
n10 = parseInt(prompt("Digite o décimo valor: "));

total = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];

for (i=0;i <= 10; i++) {
   //console.log(total[i]);

   if(total[i] >= 24 && total[i] <= 42) {
      document.getElementById('saida').innerHTML += "Exibindo os números de 24 a 42: " + total[i] + "<hr>";
   }

   else {
    document.getElementById('saida').innerHTML += "Exibindo os números menor que 24 e maior que 42: " + total[i] + "<hr>" ;
   }
}

