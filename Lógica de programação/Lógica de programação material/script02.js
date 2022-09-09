// var sample = prompt('digite seu nome: ')
// alert('Ola: ' +  sample);

// var casar = confirm(nome + 'Quer casar comigo? ');

// if (casar == true) {
//     alert('ELE ACEITO')
// }
// else {
//     alert('Bora jogar video game')
// }

// var dia = parseInt(prompt('qual é o dia de hoje (somente numeros)'));

// switch (dia) {
//     case 0:
//         alert('Domingo')
//         break
//     case 1:
//         alert('segunda')
//         break
//     case 2: 
//         alert('terça')
//         break
//     case 3:
//         alert('quara')
//         break
//     case 4:
//         alert('quinta')  
//         break
//     default:
//         alert('Não é um numero!')                   
// }

// var texto = '<p>O número é 1 <br></p>';
// document.getElementById('saida').innerHTML = texto;

// var texto = '';
// var i = 0;
// var limite = parseInt(prompt('Qual o seu limite?'));
// if (limite == NaN || typeof limite != );

// //enquanto
// while (i < 30 ) {
//     texto = 'o número é ' + i + '<br>';
//     
//     i++;
// }

var contagem = 30;



while (contagem >= 0) {
    var texto = 'contagem em:' + contagem + '<br>';
    document.getElementById('saida').innerHTML += texto;
    contagem = contagem -1;
  
}

document.getElementById('saida').innerHTML += 'Kabummm!!! Explosão';
