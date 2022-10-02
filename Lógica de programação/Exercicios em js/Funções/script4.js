/*
Programa que calcula propriedades de um círculo.
Primeira função calcula a Circuderencia.
Segunda função calcula a Area:
Autor: Guilherme Mascarenahs Dias.
Data: 01/10/2022.
Versão: 1.0
*/

    function calcularCircunferencia (metro) {
        const pi = 3.14;
        let calc = (pi * metro);
        return document.getElementById('saida').innerHTML += "A circuferêcia é: " + calc.toFixed(2) + "<br>" ;
    }

    // Saida:
    calcularCircunferencia(7);
    calcularCircunferencia(5);
    calcularCircunferencia(11);

    document.getElementById('saida').innerHTML += "<br><hr>"

    /************************************************************************/
    
    function calcularArea (r) {
     const pi = 3.14;   
     let calcR = (r ** 2);
     let res = (calcR * pi);
     return document.getElementById('saida').innerHTML += "A área é: " + res + "<br>";
    }
  
    //Saida:
    calcularArea(6);
    calcularArea(9);
    calcularArea(7);