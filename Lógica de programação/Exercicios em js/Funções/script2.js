/*
Funções que calcula anos humanos em animais e exibe nome e espécie.
Autor: Guilherme M. Dias.
Data: 28/08/2022.
Versão: 1.0




alert("Bem vindo!");

var opcao = parseInt(prompt("Escolha uma opção: 1 calcular idade humana do seu pet: | 2 calcular idade humana de um kanguru: | 3 calcular idade humana de uma baleia: "));

switch(opcao) {
 case 1: 
    calcularPet();
break;
 
 case 2: 
  calcularCanguru();
break;

 case 3:
    calcularBaleia();
break;

default:
    document.getElementById('saida').innerHTML = "<h4>Erro tente denovo!!</h4>";

}
*/

function calcularPet() {
 let nome_dog = prompt("Digite o nome do seu pet: ");
 let especiePet = prompt("Digite a espécie do seu pet");  
 let idadePet = parseInt(prompt("Digite a idade do seu dog: "));
 let conversaoPetP = 12.5;
 let conversaoPetM = 10.5;
 let conversaoPetG = 9;
 let res ;
 let opcao = parseInt(prompt("Selecione o porte do seu dog para efetuar o calculo: 1 para porte pequeno | 2 para porte médio | 3 para porte Grande."));

  switch(opcao) {
    case 1:
        res = (idadePet * conversaoPetP);
        document.getElementById('saida').innerHTML = "Seu pet: " + nome_dog + " da espécie: " + especiePet + " tem em anos de verdade: " + idadePet + " anos, e em anos humanos são: " + res.toFixed(0) + " anos de idade"; 
       break;
    case 2:
        res = (idadePet * conversaoPetM);  
        document.getElementById('saida').innerHTML = "Seu pet: " + nome_dog + " da espécie: " + especiePet + " tem em anos de verdade: " + idadePet + " anos, e em anos humanos são: " + res.toFixed(0) + " anos de idade"; 
       break;
    case 3:
        res = (idadePet * conversaoPetG);   
        document.getElementById('saida').innerHTML = "Seu pet: " + nome_dog + " da espécie: " + especiePet + " tem em anos de verdade: " + idadePet + " anos, e em anos humanos são: " + res.toFixed(0) + " anos de idade"; 
       break;
    default:
        document.getElementById('saida').innerHTML = "Erro tente denovo";   
    }
 
}

/* 
 
Saida: pequeno porte 

Seu pet: Astrucio da espécie: Poodle tem em anos de verdade: 1 anos, e em anos humanos são: 13 anos de idade

Saida: médio porte 

Seu pet: Rarona Zoro da espécie: Chow Chow tem em anos de verdade: 6 anos, e em anos humanos são: 63 anos de idade

Saida: grande porte 

Seu pet: Jack da espécie: Pitbull tem em anos de verdade: 2 anos, e em anos humanos são: 18 anos de idade
*/

function calcularCanguru () {
  let nome_Canguru = prompt("Digite o nome do kanguru: ");  
  let especieCanguru = prompt("Digite a espécie do kanguru: ");
  let idadeCanguru = parseInt(prompt("Digite a idade do Kanguru: "));
  let converto = 5;

 

  if(idadeCanguru > 0 && idadeCanguru <= 18) {
    let res = idadeCanguru * converto;
    document.getElementById('saida').innerHTML = "O kanguru: " + nome_Canguru + " da espécie: " + especieCanguru +" com a idade de verdade de: " + idadeCanguru + " anos, em idade humana é: " + res;
  }
  else {
    document.getElementById('saida').innerHTML = "Numero Digitado maior que 18 ou caracter errado!";
  }
}

/* 
Saida: 
O kanguru: Tyr da espécie: Canguru-vermelho com a idade de verdade de: 3 anos, em idade humana é: 15
O kanguru: Rock da espécie: canguru-cinza-oriental com a idade de verdade de: 6 anos, em idade humana é: 30
O kanguru: Boney da espécie: canguru-antilopine com a idade de verdade de: 1 anos, em idade humana é: 5
*/

function calcularBaleia () {
let nomeBaleia = prompt("Digite o nome da baleia: ");
let especieBaleia = prompt("Qual espécie da baleia: ");   
let idadeBaleia = parseInt(prompt("Digite a idade da baleia: "));
let converto = 22;

    if (idadeBaleia > 0 && idadeBaleia <= 93) {
    let res = (idadeBaleia + converto);
    document.getElementById('saida').innerHTML = "A baleia " + nomeBaleia + " da espécie " + especieBaleia + " com a idade de: " + idadeBaleia + " anos, em idade humana é: " + res;
    }
    else {
        document.getElementById('saida').innerHTML = " A idade média que uma baleia chega é de 93 anos digite um valor igual ou menos a 93, e somente números!";
}
}

calcularBaleia();

/*
Saida:
A baleia Laboon da espécie baleia azul com a idade de: 13 anos, em idade humana é: 35
A baleia Crocodile da espécie Jubarte com a idade de: 40 anos, em idade humana é: 62
A baleia Nami da espécie Baleia de Bryde com a idade de: 93 anos, em idade humana é: 115
*/