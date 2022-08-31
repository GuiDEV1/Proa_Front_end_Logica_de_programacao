/*
Programa que ler o ano de nascimento do usuário, e informa
uma menssagem se podera votar ou não este ano.
Autor: Guilherme M. Dias.
Data: 20/08/2022.
Versão: 1.0.
*/

var nome, anoDncs, ano_atual,res;

nome = prompt('Digite seu nome: ');
anoDncs = parseInt(prompt('Digite o ano de nascimento: '));
ano_atual = 2022;

res = ano_atual - anoDncs;

console.log(res);

if (res >= 16 && res < 70) {
    document.write(nome + ' Você possui o direito de votar esse ano, idade aproximada: ' + res);
}
else if (res < 16 && res > 0) {
    document.write(nome + ' Você não possui direito de votar, idade aproximada: ' + res);
}
else if (res >= 70) {
    document.write(nome + ' Você possui direito para votar, porém não é obrigatorio, idade aproximada : ' + res);
}
