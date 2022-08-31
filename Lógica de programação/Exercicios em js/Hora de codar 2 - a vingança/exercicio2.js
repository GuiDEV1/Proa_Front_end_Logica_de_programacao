/*
Programa que ler um valor informado pelo usuário, e diz se o valor é negativo zero ou positivo
Autor: Guilherme M. Dias.
Data: 29/08/2022.
Versão: 1.0.
*/ 

var valor = parseInt(prompt('Informe um valor numérico, e o programa informarar se o valor ira ser 0 negativo ou positivo.'));


if (valor === 0) {
    document.write('valor informado é: ' + valor);
}

else if (valor < 0) {
    document.write('valor informado é: ' + valor + ' do tipo negativo');
} 

else {
    document.write('Valor informado  é: ' + valor + ' do tipo positivo');
}