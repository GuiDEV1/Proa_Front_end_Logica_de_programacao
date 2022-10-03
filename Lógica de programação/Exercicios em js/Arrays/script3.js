/* 
Programa que que contém  um inventário para cada um dos aventureiros dentro de um array.
Autor: Guilherme M. Dias
Data: 03/10/2022
Versão: 1.0
*/

// Ponto inicial:

var drofo = ['anel da invisibilidade','par de botas mágicas','par de botas mágicas','porção do sono','porção da inocência','porção da inocência'];
var torper = ['capa de  invisibilidade','pedra do despertar','varinha das varinhas','porção da inocência','porção da mentira','porção da mentira','porção ant-inteligência'];

//  Torper consumiu uma das poções da mentira
    delete torper[5];

// Torper perdeu sua pedra
    delete torper[1];

// ganhou um par de botas mágicas do Drofo
    torper.push('um par de botas mágica');

// Drofo perdeu o par de botas por ter dado ao Torper
    delete drofo[2]

// achou um escudo mágico e uma espada mágica. 
    torper.push('Escudo mágico','Espada mágica');



document.getElementById('saida').innerHTML = 'Items de Drofo no final da jornada: ' + drofo + "<hr>";
document.getElementById('saida').innerHTML += 'Items de Torper no final da jornada: ' + torper + "<br>";