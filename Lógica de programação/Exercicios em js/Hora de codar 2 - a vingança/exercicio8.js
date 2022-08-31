/*
Programa que caclula a média de 4 números informado pelo usuário, 
mas somente se eeses numeros forem maiores que 0 e menor que 10,
ser a média for maior que 5 o usuário recebera 'Você passou no teste'
Autor: Guilherme M. Dias.
Data: 30/08/2022. 
Versão: 1.0.
*/

var n1,n2,n3,n4,res;

n1 = parseInt(prompt('Informe o primeiro número'));
n2 = parseInt(prompt('Informe o segundo número'));
n3 = parseInt(prompt('Informe o terceiro número'));
n4 = parseInt(prompt('Informe o quarto número'));


if (n1 > 0 && n1 < 10 && n2 > 0 && n2 < 10 && n3 > 0 && n3 < 10 && n4 > 0 && n4 < 10  ){
    res = (n1 + n2 + n3 + n4) / 4;

 if (res > 5) {
        document.write('Você passou no teste com a média: ' + res); 
    }   
}

else {
    document.write('Tente novamente!');
}