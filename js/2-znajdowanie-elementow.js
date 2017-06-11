'use strict';

var parFirst = document.getElementById('parFirst');

console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki);
console.log(linki[0]); /*wyciaganie pierwszego*/

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var elementPoSelektorze = document.querySelector('#parFirst > a'); /*dla klasy . jak CSS*/
console.log(elementPoSelektorze);

var elementyPoSelektorze = document.querySelectorAll('#parFirst > a'); 
console.log(elementyPoSelektorze);

var tablicaZTresciaLinkow = [];

elementyPoSelektorze.forEach(function(el, i){
         console.log(el.innerHTML);
    
         tablicaZTresciaLinkow.push(el.innerHTML);
                             });

            console.log(tablicaZTresciaLinkow);