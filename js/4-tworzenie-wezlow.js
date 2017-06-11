'use strict';

/*podpinanie sie do elementu*/

var istniejacyWezel = document.getElementById('parSecond').children[0];

console.log(istniejacyWezel);

/*dodawanie elementu*/

var header = document.createElement('h2');

/*dodawanie textu w elemencie*/

var textInHeader = document.createTextNode('Nowy nagłowek H2');

/*dodawanie atrybutu ID*/

var attribute = document.createAttribute('id');

header.setAttributeNode(attribute);

header.id = 'nowe-id' ;



header.appendChild(textInHeader); /*wstrzykuje powyzsze na html*/

/*console.log(header.nodeType);*/ /*dygresja - sprawdzanie typu*/

console.log(header);

document.getElementById('parSecond').insertBefore(header, istniejacyWezel); /*przed konkretnym rodzicem*/

istniejacyWezel.parentElement.insertBefore(header, istniejacyWezel); /*zawsze przed rodzicem*/

istniejacyWezel.parentElement.removeChild(istniejacyWezel);

