/* 
Programa que calcula o peso ideal imc.
Autor: Guilherme M. Dias.
Data: 31/08/2022.
*/

var  altura,nome,calculo;

sexo = prompt('Qual seu sexo ?: ');
nome = prompt('Digite seu nome');
altura = parseFloat(prompt('Digite sua altura em centimetros: '));
//peso = parseFloat(prompt('Digite seu peso: '));
altura = altura / 100;

if (sexo === 'masculino') {
    calculo = (72.7 * altura) - 58;
    document.write(nome + ' Seu peso ideal é: ' + calculo.toFixed(2));
}
else if (sexo === 'feminino') {
    calculo = (62.1 * altura) - 44.7;
    document.write(nome + ' Seu peso ideal é: ' + calculo.toFixed(2));
}
else {
    document.write('Erro tente novamente!!')
}
