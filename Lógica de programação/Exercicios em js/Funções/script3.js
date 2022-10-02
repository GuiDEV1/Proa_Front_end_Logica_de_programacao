/*
Programa que calcula a quantidade de lanche consumida 
pelo resto da vida com base em uma idade maxima.
Autor: Guilherme M. Dias.
Data: 01/10/2022.
Versão: 1.0
*/


function calcularMeuLanche (idade, qtdDelacnhePorDia) {
  const idade_maxima = 77 - idade;
  let calc = qtdDelacnhePorDia * 365; // Multplicando a quantidade de lanche por dias no ano.
  let res =  idade_maxima * calc; // calcula a quantidade de lanches que irei consumir para o resto da vida.
  return document.getElementById('saida').innerHTML += "Você consume: " + qtdDelacnhePorDia + " lanches por dia com a idade de: " + idade + " anos com base nisso até a idade de 77 anos, calculando com sua idade atual voce consumira até o fimd a vida: " + res + " lanches!" + '<br>';
}

// saida: 
calcularMeuLanche('21','3');
calcularMeuLanche('13','5');
calcularMeuLanche('31','2');
