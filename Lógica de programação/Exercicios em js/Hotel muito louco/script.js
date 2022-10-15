/*
Programa que é feito com vários outros programas utilizando
partes indepedentes, uma plataforma para fuincionários de hotel usarem, 
não os hospedes.
Autor: Guilherme M. Dias
Data 16/09/2022
versão 1.0
*/


var nomeHotel = prompt("Digite o nome do hotel: ");
alert("O nome do hotel: " + nomeHotel);

const usuario = prompt("Digite um usuário: ");
alert("Seja bem vindo ao Hotel " + nomeHotel + " " + usuario + " " + "é um imenso prazer ter você aqui.");


 // Função para validar a senha se validado chama a função inicio . 
 function validacao () {
  const validacaoSenha = 2678;
  var senha = parseFloat(prompt("Digite uma senha: "));

    
  if (senha === validacaoSenha) {
    inicio();
 }

 else {
   alert("senha incorreta tente novamente!")
   validacao();
 }

 }

 validacao();

 
function inicio () {
   let opcao = parseInt(prompt("Escolha uma opção : 1: Quantos quartos são? | 2: como soletra | 3: com 's' ou com 'z' | 4: Festa ou trabalho? | 5: Hora de comer | 6: Auditório para quantos | 7: Que horas você pode? | 8: Álcool ou gasolina | 9: Ar puro, finalmente | 10 sair"));


   switch (opcao) {
        case 1 :
          quantidadeQuartos();
         break
        case 2:
          comoSoletra();
          break
        case 3 :
          comSouZ();
          break
        case 4 :
          festaOuTrabalho();
          break
        case 5:
          horaDeComer();
          break
        case 6 :
          auditorioParaQuantos();
          break
        case 7:
          queHorasVocePode();
          break    
        case 8 :
          alcoolOuGasolina();
          break
        case 9 :
          arPuroFinalmente();
          break
        case 10: 
           sair();
           break  
        default :
        erro();             
   }

}







function quantidadeQuartos() {
    let diaria = parseInt(prompt("Qual valor padrão da diaria?: "));
    let dias = parseInt(prompt("Quantos dias serão necessarios?: "));

    if(diaria <=0 ) {
      alert("Valor invalido tente novamente! ");
    }
    else if (dias > 0 && dias <= 30) {
     let calc = dias * diaria;
     alert("O valor de " + dias + " dias de hospedagem é de: " + calc);
     let nome = prompt("Qual é nome do hóspede: ");

     let validar = prompt(usuario + " Você confirma a hospedagem para " + nome + " por" +dias + ' dias' + " digite S/N");

      if(validar === "S" || validar === "s") {
        alert("Hospedagem de " + nome + " foi realizada")
      }
      else {
        alert("Operação cancelda");
        quantidadeQuartos();
      }
    }

    let opcao = prompt("Gostaria de continuar ? digite S/N");

    if (opcao === 's' || opcao === 'S') {
        quantidadeQuartos();
    }
    else {
      inicio();
    }
}




function comoSoletra(){

  var gratuidadeHospedes = [];
  var total = [];
  var nome_hospedes = [];
  var parar = "s";

   
  while(parar === "S" || parar === "s") {  
   
    var diaria = parseInt(prompt("Qual é o valor padrão da diaria: "));  
    var nome = prompt("Digite o nome do hospede: ");
    var idadeHospede = parseInt(prompt("Digite a idade do hospede: "));



     if (diaria <= 0 || idadeHospede === null) {
        erro();
     }

    else if(idadeHospede > 0 && idadeHospede < 6) {
         gratuidadeHospedes.push(idadeHospede);
         nome_hospedes.push(nome);
         alert(nome + " cadastrada(o) com sucesso possui gratuidade.");
     }

     else if(idadeHospede > 60) {
        nome_hospedes.push(nome);
        diaria = (diaria /2);
        total.push(diaria);
        alert(nome_hospedes + " cadastrada(o) com sucesso possui desconto pela metade do valor.");
     }

     else {
      nome_hospedes.push(nome);
      total.push(diaria);
      alert(nome_hospedes + " cadastrado com sucesso.")
     }

     parar = prompt("Para para digite 'N' para continuar digite 'S'.")
  } 

  // função que soma os valores do array
   let res =  total.reduce(function(res, total){
    return res + total;
   }); 


   alert(nome_hospedes +  (" o total de hospedagens é: R$" + res) +" "+gratuidadeHospedes.length + ", gratuidade(s)")
   
   if( parar !== "s" || parar !== "S") {
      inicio();
   }
}


function comSouZ () {
  var hospedes = [];

 function inicio1 () {
  var opcao = parseInt(prompt("Escolha uma opção 1: cadastrar | 2: pesquisar | 3: sair"));

  switch(opcao) {
     case 1:
      cadastrar();
      break

      case 2:
      pesquisar();
      break

      case 3:
      sair();    
  }
}

 inicio1();
  
    function cadastrar () {

      let opcao1 = 's';

      while (hospedes.length < 15 && opcao1 == 's') {
        let i = 0;
        i++;
        let nome = prompt("Qual nome do hospede");
        hospedes.push(nome);
        alert("Hospede " + nome + " foi cadastrado com secesso! ");
        

        opcao1 = prompt("Gostaria de continuar digite S/N ");

      }    

       if(hospedes.length >= 5) {
            alert("Valor maximo atingido: \n" + hospedes);
            inicio1(); 
       }
       else {
        alert(" nomes registrados: \n" + hospedes);
        inicio1();
       } 
    }


    function pesquisar(){
          let pesquisar = prompt("Digite o nome que deseja pesquisar: ")
       
          if(hospedes.includes(pesquisar)) {
             alert(pesquisar + " foi encontrado!");
             inicio1();
          }
          else {
            alert(pesquisar + " não foi encontrado!");
            inicio1();
          }
    }

    function sair(){
        inicio();
    }

    
 
    
}



function festaOuTrabalho () {
  let  horasTrabalho =  parseInt(prompt("Qual a duração do evento?"));
  let  precoGarconH = 10.50;
  let numerosDeGarcon = parseInt(prompt("Quantos garçons serão necessários?"));
   
   if (horasTrabalho === null || horasTrabalho === '' || numerosDeGarcon === null || numerosDeGarcon === '') {
      erro();
   }

   else {
     // calculando horas x trabalho 
     let precoTotal =  (horasTrabalho * precoGarconH);
     let res = (numerosDeGarcon * precoTotal);
     alert("custo total: R$:" + res);  

     var continuar = prompt("Gostaria de efetuar a reserva S/N");
      if(continuar === "s" || continuar === 'S') {
          alert("reserva efetuada com sucesso.")
          inicio();
      }    
      
      else {
        alert("Operação cancelada")
        inicio();
      }

   }
}



function horaDeComer (){
  var qtdDeCvds = parseInt(prompt("Qual o numero de convidados para o evento? "));



  if (qtdDeCvds < 0 || isNaN(qtdDeCvds)) {
      erro();
  }

  else if (qtdDeCvds > 360) {
    alert("Quantidade de convidados superior à capacidade máxima");
    inicio();
  }

  else if (qtdDeCvds <= 360) {
  //  let lcafe = 0.2;
  //  let lagua = 0.5;
  //  let salgados = 7;
   let rescoffe = (qtdDeCvds * 0.2) * 0.80;
   let resagua = (qtdDeCvds * 0.5) * 0.40;
   let ressalgados = (qtdDeCvds * 7) * 34;

   alert("Total: R$"+(rescoffe + resagua + ressalgados));

    let opcao = prompt("Aceita os valores digite S/N");

     if (opcao === 's' || opcao === "S") {
      alert("Reserva efetuada com sucesso!");
         inicio();
     }
     else {
      alert("Reserva não efetuada!");
      inicio();
     }

  }
}


function auditorioParaQuantos () {
  let qtdDeCvds = parseInt(prompt("Qual o numero de convidados: "));
  let auitorio1 = 150;
  let auitorio2 = 350;


   if(qtdDeCvds <= 0 || qtdDeCvds > 350 || isNaN(qtdDeCvds)) {
      alert("Quantidade de convidados superior á capacidade maxima.");
      auditorioParaQuantos();
   }
   else if (qtdDeCvds <= 250) {
     
      if (qtdDeCvds >= 150) {
        let cadeiras = (qtdDeCvds - auitorio1);
        alert("Use o audítorio Laranja" + `inclua mais ${cadeiras} cadeiras`);
        let opcao = prompt("Gostaria de efetuar a reserva? S/N");

         if (opcao === "s" || opcao === "s") {
           alert("Reserva reaizada com sucesso ")
           inicio();
         }
         else {
          alert("Reserva cancelada!")
          inicio();
         }

      } 

   }
   else if (qtdDeCvds <= auitorio2 ) {
    alert("Use o auditorio colorado!")
    let opcao = prompt("Gostaria de efetuar a reserva? S/N");

    if (opcao === "s" || opcao === "s") {
      alert("Reserva reaizada com sucesso ")
      inicio();
    }
    else {
     alert("Reserva cancelada!")
     inicio();
    }

   }
}


function queHorasVocePode() {

  function inicio1 () {
    let opcao = prompt("Qual o dia do evento ?");

    switch (opcao) {
      case "segunda feira":
        segunda();
        break

      case "terca feira":
        terca();
        break
        
      case "quarta feira":
        quarta();
        break
        
      case "quinta feira":
        quinta();
        break
        
      case "sexta feira":
        sexta();
        break
        
      case "sabado":
        sabado();
        break
        
      case "domingo":
        domingo();
        break
        
      default:
        erro();  

    }
  }
  inicio1();

   function segunda () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 23) {
      alert(`Restaurante reservado para ${empresa} segunda às ${horas}hs`);
      inicio();
     }
     else {
      alert(`horario invalido empresa ${empresa} tente novamente!`);
      inicio();
     }
   }

   function terca () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 23) {
      alert(`Restaurante reservado para ${empresa} terca às ${horas}hs`);
      inicio();
     }
     else {
      alert(`horario invalido empresa ${empresa} tente novamente!`);
      inicio();
     }
   }

   function quarta () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 23) {
      alert(`Restaurante reservado para ${empresa} quarta às ${horas}hs`);
      inicio();
     }
     else {
      alert(`horario invalido empresa ${empresa} tente novamente!`);
      inicio();
     }
   }
   
   function quinta () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 23) {
      alert(`Restaurante reservado para ${empresa} quinta às ${horas}hs`);
      inicio();
     }
     else {
      alert(`horario invalido empresa ${empresa} tente novamente!`);
      inicio();
     }
   }

   function sexta () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 23) {
      alert(`Restaurante reservado para ${empresa} sexta às ${horas}hs`);
      inicio();
     }
     else {
      alert(`horario invalido empresa ${empresa} tente novamente!`);
      inicio();
     }
   }

   function sabado () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 15) {
      alert(`Restaurante reservado para ${empresa} sabado às ${horas}hs`);
      inicio();
     }
     else {
      alert(`Restaurante não atende a esse horario nos sabados , atendemos das 7hrs as 15hrs`);
      inicio();
     }
   }

   function domingo () {
    let horas = parseInt(prompt("Qual é a hora do evento: "));
    let empresa = prompt("Qual nome da empresa: ");

     if (isNaN(horas)) {
        erro();
     }
     else if (horas >= 7 && horas <= 15) {
      alert(`Restaurante reservado para ${empresa} domingo às ${horas}hs`);
      inicio();
     }
     else {
      alert(`Restaurante não atende a esse horario nos domingos, atendemos das 7hrs as 15hrs`);
      inicio();
     }
   }


}



function alcoolOuGasolina(){
  alert("okay!!!")
  inicio();
}

function arPuroFinalmente() {
    var menor_valor_base = 19888867900;   // variável base para começar a atribuição de menor valor no If
  var nome_empresa_menor = [];		// Array para armmazenar o nome da empresa de menor valor
  var menor_valor = [];			// Array para armmazenar o menor valor de serviço da empresa.

  do {
    var nome_Empresa = prompt("Qual o nome da empresa?");
    var valor_Aparelhos = parseFloat(prompt("Qual o valor por aparelho?"));
    var quant_Aparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
    var porcentagem_desc = parseInt(prompt("Qual a porcentagem de desconto?"));
    var minimo_Aparelhos = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
    var total_Manutencao = valor_Aparelhos * quant_Aparelho;

    if (minimo_Aparelhos <= quant_Aparelho) {
      total_Manutencao -= total_Manutencao * (porcentagem_desc / 100);
    }

    window.alert(`O serviço da ${nome_Empresa} custará R$${total_Manutencao}`);  // informar o valor do serviço e nome da empresa inserida

    // atribuição de menor valor de serviço
    if (total_Manutencao < menor_valor_base) {
      menor_valor_base = total_Manutencao; 		
      nome_empresa_menor.push(nome_Empresa);		// insere dados no array
      menor_valor.push(total_Manutencao);			
    }
    // FLAG - ponto de encerramento ou repetição do código
    var novo_Cadastro = prompt(`Deseja informar novos dados, ${nameUser}? (S/N)`);


    if (novo_Cadastro.toUpperCase() == "N") {
      window.alert("O orçamento de menor valor é o " + nome_empresa_menor.slice(-1)[0] + " por " + menor_valor.slice(-1)[0]); // pegar o último valor do array. 
      inicio();
    }
    else if (novo_Cadastro == Number || novo_Cadastro == "") {
      novo_Cadastro = prompt("Valor inválido. Insira 'S' para continuar ou 'N' para encerrar: ");
    }
  } while (novo_Cadastro.toUpperCase() == "S") {			// repetir o código se a resposta for "S"

  }
}

function erro() {
  alert("Erro tenten novamente!")
  inicio();
}

function sair() {
 let sair = prompt("certeza que quer sair? digite S/N ")

 if(sair === "s" || sair === "S") { 
  alert(usuario + " É sempre um prazer ter você aqui!")
  window.close();
 }
 else{
  inicio();
 }
}
