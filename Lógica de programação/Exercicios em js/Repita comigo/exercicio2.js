/*
Programa que que conta o tempo de uma bomba relogio de 30 segundos.
Autor: Guilherme M. Dias.
Data: 02/09/2022.
Versão: 1.0.
*/

for (var i = 30; i >= 1; i--) {
    document.getElementById('saida').innerHTML += i + "<br>";
}
document.getElementById('saida').innerHTML += "Kabummmm!!!!! explodiu" + 
"<img width='200px' style='float:left ;' src='https://th.bing.com/th/id/R.d675a31176f627ca1b62923fd489e223?rik=Use8kOzBd892Bg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fexplosion%2fexplosion_PNG15352.png&ehk=zsWykIKe2MNsQZ%2byP1kvvn18bwcIjXmUsvA27osL%2fYM%3d&risl=&pid=ImgRaw&r=0'>";