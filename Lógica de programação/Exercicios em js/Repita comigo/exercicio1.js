/* 
 Programa que ler 2 valores informado pelo usuário e se o 
 segundo valor informado for igual ou menor que zero, deve
 ser lido um novo valor, ou seja para os segundo valor não
 pode ser aceito valor 0 ou negativo,  programa deve imprimir o 
 resultado da divisão do primeiro valor lido pelo segundo valor.
 Autor: Guilherme M. Dias.
 Data: 02/09/2022
 Versão: 1.0.
*/

var n1,n2,res;
n1 = parseFloat(prompt('Digite o primeiro número: '));
n2 = parseFloat(prompt('Digite o segundo número: '));


while (n2 == 0) {
    n2 = parseFloat(prompt('Digite o segundo número novamente, obs: valor não pode ser 0 ou negativo: '));
}

res = (n1 / n2);

document.getElementById('saida').innerHTML = "O resultado foi: " + res.toFixed(2);




