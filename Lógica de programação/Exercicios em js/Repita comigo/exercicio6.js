/*
Programa que ler 2 anotas de um aluno, calcula e imprimi a média 
final, logo ao fim do programa sera possivel realizar outra media de
outro aluno de forma automatizada.
Autor: Guilherme Mascarenhas Dias.
Data: 03/09/2022.
Versão: 1.0.
*/

var nota1,nota2,calc,nome,opcao;


nome = prompt('Digite o nome do aluno: ');
nota1 = parseInt(prompt("Digite a primeira nota: "));
nota2 = parseInt(prompt("Digite a segunda nota: "));

calc = (nota1 + nota2) / 2;

if (calc >= 9.5) {
    document.getElementById('saida').innerHTML += nome + " aluno aprovado média: " + calc + '<br>';
    opcao = prompt(nome + ' Quer calcular a média de mais um aluno? digite s ou n:  '); 
     
   while(opcao === 's' ) {
    if(calc >= 9.5){
            nome = prompt('Digite o nome do aluno: ');
            nota1 = parseInt(prompt("Digite a primeira nota: "));
            nota2 = parseInt(prompt("Digite a segunda nota: "));
            document.getElementById('saida').innerHTML += nome+  " aluno aprovado média: " + calc + '<br>';
            opcao = prompt('Quer calcular a média de mais um aluno? digite s ou n:  ');
    } 
   } 
}