'use strict'

var mainHeader = document.getElementById('main-header');

console.log(mainHeader.innerHTML);

mainHeader.innerHTML = 'Nowy <span>naglowek</span>'; /*inner zmienia tresc*/

mainHeader.outerHTML = '<h3>Maly naglowek</h3>'; /*outer zmienia i tresc i znacznik*/

var link = document.getElementsByClassName('link')[0];

console.log(link);

link.href = 'http://akademia108.pl'; /*zmiana tresci atrybutu*/

console.log(link.className); /*wyswietl nazwe klasy*/

link.className = 'pierwsza-klasa'; /*zmiana nazwy klasy*/

link.className += 'trzecia-klasa'; /* += dodaje text do klasy */

var allLinks = document.getElementsByTagName('a'); /*łapiemy wszystkie linki*/

console.log(allLinks);

for(var i = 0; i<allLinks.length; i++) {
    allLinks[i].className += ' zupełnie-nowa-klasa';
} /*dodaje nowa klase do wszystkich linkow (zamiast += - samo = podmienia wszystkie klasy) */

mainHeader.style.color = '#ff0000'; /*zmiana stylu CSS*/
mainHeader.style.background = '#ff00ff'; /*osobno zapisujemy*/


/*dodanie pliku style.css*/

var style = document.createElement('link');
var att = document.createAttribute('href');
var rel = document.createAttribute('rel');

att.value = 'css/style.css';
rel.value = 'stylesheet';

style.setAttributeNode(att);
style.setAttributeNode(rel);

console.log(style);

document.head.appendChild(style); /*wstrzykuje do htmlu*/






