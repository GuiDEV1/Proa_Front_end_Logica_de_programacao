var almoco = true;
var jantar = true;
var quarta = true;
var quinta = true;

function rotina () {
document.getElementById('saida').innerHTML += ("Adriano comu brocolis <br>");
document.getElementById('saida').innerHTML +=('Adriano faz aroz carreteiro <br>');
document.getElementById('saida').innerHTML +=('Adriano um suco de uma arrtesanal<br> ');
}

rotina();

function primeirosParametros (nome,sobremesa,prato_preferido) {
document.getElementById('saida').innerHTML += ( nome + "faz um bolo <br>");
document.getElementById('saida').innerHTML += ( nome + "Adriano comu brocolis <br>");
document.getElementById('saida').innerHTML +=(nome + 'Adriano faz aroz carreteiro <br>');
document.getElementById('saida').innerHTML +=(nome + 'experimentou uma ' + sobremesa + ' diferenciada <br>');

 if (jantar) {
    document.getElementById('saida').innerHTML += 'Foi um jantar <hr>';
 }
 else if (almoco) {
    document.getElementById('saida').innerHTML += 'Foi um almoço fantastico';
 }
}

primeirosParametros('Ireneu14 ', 'bolo de chocolate','brocolis');

/*******************************************************************************************/

function r_com_retorno (n1,n2) {
  return n1 * n2;
}

var exemplo = r_com_retorno(10,20) * r_com_retorno(10,20);

document.getElementById('saida').innerHTML += exemplo;