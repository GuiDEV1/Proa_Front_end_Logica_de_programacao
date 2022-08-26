/*
 Programa que informa o nome e idade so usúario
 Data: 25/08/2022
 Autor: Guilherme M. Dias
 Versão: 1.0
 */

 var nome, idade;

 nome = prompt('Digite seu nome: ');
 idade = parseInt(prompt('Digite sua idade: '));

 document.write('Olá ' + nome + '<br>' + ' Sua idade é: ' + idade + ' anos');