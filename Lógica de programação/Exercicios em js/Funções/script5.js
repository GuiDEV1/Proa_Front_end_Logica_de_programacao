/*
Programa que converte Celsius para Fahrenheit e vice versa.
Autor: Guilherme M. Dias
Data: 01/10/2022.
Versão: 1.0
*/

function converterCelsiusFahreheit (c) {
    let f = (c * 1.8) + 32;
    return document.getElementById('saida').innerHTML += "A temperatura de: " + c + "° em Celsius convertida para Fahrenheit é: " + f.toFixed(0)+"°F" + "<br>";
}

    //Saida:
    converterCelsiusFahreheit(20);
    converterCelsiusFahreheit(13);
    converterCelsiusFahreheit(32);

    document.getElementById('saida').innerHTML += "<br><hr>";
 /******************************************************************/
 
 function converterFahrenheitCelsius (f) {
  let c = (f - 32) / 1.8;
  return  document.getElementById('saida').innerHTML +="A temperatura de: " + f+"°F em Fahrenheit, convertida para Celsius é:" + c.toFixed(0)+"°" + "<br>";
 }
   
   //saida:
   converterFahrenheitCelsius(90);
   converterFahrenheitCelsius(67);
   converterFahrenheitCelsius(84);
