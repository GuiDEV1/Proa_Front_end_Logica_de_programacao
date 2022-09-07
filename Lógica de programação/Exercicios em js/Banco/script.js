/*
Programa que simula um banco tendo várias funcionalidades!
como sacar, depositar, ver saldo, extrato, transferência
com validacçao de senha, a senha é 3589.
Autor: Guilherme Mascarenhas Dias.
Data: 07/09/2022.
Versão: 1.1
*/

let x = 0;
var saldo = 100.5; //Float
const nome = prompt("Digite seu nome: "); 
const validar = 3589;
var senha;

alert('É sempre um prazer ter você aqui: ' + nome);



function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção. | 1.saldo) | 2.extrato) | 3.Saque) | 4.Depósito) | 5.Transferência) | 6.Sair'));

    switch (escolha) {
        case 1: escolha === 1;
            ver_saldo();
        break 

        case 2: escolha === 2;
          verExtrato();
        break 
        
        case 3: escolha === 3;
          fazer_saque();

        break 

        case 4: escolha === 4;
         fazer_deposito();

        break 

        case 5: escolha === 5;
        Transferencia();

        break

        case 6: escolha === 6;
        sair();

        break
        
        default: 
        erro();
    }

}
    


function ver_saldo() {
   senha = parseInt(prompt("Digite a senha para continuar: "));

   if(senha === validar) {
        alert('Seu saldo atual é: ' + saldo);
        inicio();
   }
   else {
        alert("Senha incorreta");
        ver_saldo();
   }

   
}

function fazer_deposito() {
    
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número.');
        fazer_deposito();
    }
    else if(deposito <= 0) {
       alert("Operação negada");
       fazer_deposito();
    }
    else {
        saldo += deposito;
        //saldo = saldo + deposito;
        ver_saldo();
    }
}

function fazer_saque() {
    
senha = parseFloat(prompt("Digite sua senha: "));
    
    if (senha === validar) {
        var saque = parseFloat(prompt('Qual o valor para saque?'));

        if (isNaN(saque) || saque === '') {
            alert('Por favor, informe um número:');
            fazer_saque();
        }
        else if (saque <= 0) {
            alert("Valores negativos ou 0 são invalidos tente novamente!");
            fazer_saque();                
        } 
        else if(saque > saldo) {
        alert("Operação negada valor maior que seu limite atual!");
        fazer_saque();
        }
        else {
            saldo -= saque; 
            //saldo = saldo - saque;
            ver_saldo();
        }
    }
     else {
        alert("Senha incorreta!");
        fazer_saque();
     }
 }
    
   


function verExtrato() {
     senha = parseInt(prompt("Digite sua senha: "));

    if(senha === validar) { 
     alert("05/09/2022 Atacado uchiha -43,21 \n 06/09/2022 padaria souls like -10,50 \n 07/09/2022 Banco pac man +600,00 \n 09/09/2022 Transferência pix +1540,14 \n 10/09/2022 Kabum -1030,99 \n 13/09/2022 tranferência pix 3000.00  ");
     inicio();
    }
    else {
        alert("Senha incorreta")
        verExtrato();
    }
}

function Transferencia () {

    senha = parseFloat(prompt("Digite sua senha: "));
  if(senha === validar) {
    var conta = parseInt(prompt("Informe o número da conta bancária: "));
    
    if(isNaN(conta) || conta === '') {
        alert("Conta invalida tente novamente!")
        Transferencia();
    } else {
        alert("Conta valida");
    }

    var transferir = parseFloat(prompt("Digite o valor: "));

    if(transferir <= 0 || transferir > saldo) {
        alert("Operação negada tente novamente");
        Transferencia();
    }

    else {
        saldo -= transferir;
        ver_saldo();
    }
}
   else {
    alert("Senha incorreta!")
    Transferencia();
   }

}

function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("Foi um prazer ter você aqui " + nome);
        window.close();
    } else {
        inicio();
    }
}

inicio();