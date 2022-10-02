/*
Funções que calcula anos humanos em animais.
Autor: Guilherme M. Dias.
Data: 28/08/2022.
Versão: 1.0

*/


alert("Bem vindo!");

var opcao = parseInt(prompt("Escolha uma opção: 1 calcular idade humana do seu pet: | 2 calcular idade humana de um kanguru: | 3 calcular idade humana de uma baleia: "));

switch(opcao) {
 case 1: 
    calcularPet();
break;
 
 case 2: 
  calcularcanguru();
break;

 case 3:
    calcularBaleia();
break;

default:
    document.getElementById('saida').innerHTML = "<h4>Erro tente denovo!!</h4>";

}


function calcularPet() {
 let idadePet = parseInt(prompt("Digite a idade do seu dog: "));
 let conversaoPetP = 12.5;
 let conversaoPetM = 10.5;
 let conversaoPetG = 9;
 let res ;
 let opcao = parseInt(prompt("Selecione o porte do seu dog para efetuar o calculo: 1 para porte pequeno | 2 para porte médio | 3 para porte Grande."));

  switch(opcao) {
    case 1:
        res = (idadePet * conversaoPetP);
        document.getElementById('saida').innerHTML = "A idade do seu Dog de " + idadePet + " anos, em anos humanos são: " + res.toFixed(0) + " anos de idade"; 
       break;
    case 2:
        res = (idadePet * conversaoPetM);  
        document.getElementById('saida').innerHTML = "A idade do seu Dog de " + idadePet + " anos, em anos humanos são: " + res.toFixed(0) + " anos de idade"; 
       break;
    case 3:
        res = (idadePet * conversaoPetG);   
        document.getElementById('saida').innerHTML = "A idade do seu Dog de " + idadePet + " anos, em anos humanos são: " + res.toFixed(0) + " anos de idade"; 
       break;
    default:
        document.getElementById('saida').innerHTML = "Erro tente denovo";   
    }
 
}



/* 
Eu pesquisei e fiz os calculos de outra forma entao irei ta deixando tres saidas comentadas aqui no código
dividindo por classes como montei no código acima.

Saida: pequeno porte 

A idade do seu Dog de 4 anos, em anos humanos são: 50 anos de idade.

Saida: médio porte 

A idade do seu Dog de 3 anos, em anos humanos são: 32 anos de idade

Saida: grande porte 

A idade do seu Dog de 5 anos, em anos humanos são: 45 anos de idade
*/

function calcularCanguru () {
  let idadeKanguru = parseInt(prompt("Digite a idade do Kanguru: "));
  let converto = 5;

 

  if(idadecanguru > 0 && idadecanguru <= 18) {
    let res = idadecanguru * converto;
    document.getElementById('saida').innerHTML = "A idade do Kanguro de: " + idadecanguru + " anos, em idade humana é: " + res;
  }
  else {
    document.getElementById('saida').innerHTML = "Numero Digitado maior que 18 ou caracter errado!";
  }
}



/* 
Saida: 
A idade do Kanguro de: 2 anos, em idade humana é: 10
A idade do Kanguro de: 2 anos, em idade humana é: 10
A idade do Kanguro de: 2 anos, em idade humana é: 10
*/

function calcularBaleia () {
let idadeBaleia = parseInt(prompt("Digite a idade da baleia: "));
let converto = 22;

    if (idadeBaleia > 0 && idadeBaleia <= 93) {
    let res = (idadeBaleia + converto);
    document.getElementById('saida').innerHTML = "A baleia com a idade de: " + idadeBaleia + " anos, em idade humana é: " + res;
    }
    else {
        document.getElementById('saida').innerHTML = " A idade média que uma baleia chega é de 93 anos digite um valor igual ou menos a 93, e somente números!";
}
}

/* 
Saida: 
A baleia com a idade de: 3 anos, em idade humana é: 25
A baleia com a idade de: 32 anos, em idade humana é: 54
A baleia com a idade de: 6 anos, em idade humana é: 28
*/
