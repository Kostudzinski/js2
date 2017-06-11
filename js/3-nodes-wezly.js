'use strict'        

var paragraf = document.getElementById('parFirst');

/*Rodzice*/

console.log(paragraf);
console.log(paragraf.parentNode);
console.log(paragraf.parentElement);


/*Dzieci*/

console.log(paragraf.childNodes);
console.log(paragraf.children);
console.log(paragraf.firstChild);
console.log(paragraf.lastChild);
console.log(paragraf.firstElementChild);
console.log(paragraf.lastElementChild);


/*Rodzenstwo*/

console.log(paragraf.nextSibling);
console.log(paragraf.previousSibling);
console.log(paragraf.nextElementSibling);
console.log(paragraf.previousElementSibling);


/*8 --- przypisane do komentarza*/

paragraf.childNodes.forEach(function(element, index) {
   if(element.nodeType === 8) {
       console.log('Komentarz');
       
       element.parentNode.removeChild(element);
   } 
});

