/*
Programa que ler 6 notas de um aluno pelo usuário e retorna a média para o usuário.
Autor: Guilherme M. Dias.
Data: 03/09/2022
Versão: 1.0.
*/

var n1,n2,n3,n4,n5,n6,calc,nome;

nome = prompt("Digite o nome do aluno: "); 
n1 = parseFloat(prompt("Digite a primeira nota: "));
n2 = parseFloat(prompt("Digite a segunda nota: "));
n3 = parseFloat(prompt("Digite a terceira nota: "));
n4 = parseFloat(prompt("Digite a quarta nota: "));
n5 = parseFloat(prompt("Digite a quinta nota: "));
n6 = parseFloat(prompt("Digite a sexta nota: "));



if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <=10 && n4 >= 0 && n4 <= 10 && n5 >= 0 && n5 <= 10 && n6 >= 0 && n6 <= 10 ) {
    calc = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
    document.getElementById('saida').innerHTML = "Aluno: " + nome + " a média foi de: " + Math.ceil(calc); 
}
else {
    while(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 && n4 > 10 || n5 < 0 || n5 > 10 || n6 < 0 || n6 > 10 ) {
        
        alert("Digite numeros de 0 a 10, repita o proceso")

        n1 = parseFloat(prompt("Digite a primeira nota: "));
        n2 = parseFloat(prompt("Digite a segunda nota: "));
        n3 = parseFloat(prompt("Digite a terceira nota: "));
        n4 = parseFloat(prompt("Digite a quarta nota: "));
        n5 = parseFloat(prompt("Digite a quinta nota: "));
        n6 = parseFloat(prompt("Digite a sexta nota: "));
        
        calc = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
        document.getElementById('saida').innerHTML = "Aluno: " + nome + " a média foi de: " + Math.ceil(calc); 
    }
}








