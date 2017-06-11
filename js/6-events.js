'use strict';


/*zmiana background color po kliknieciu*/

function alertFunction() {
    var par = document.getElementById('parFirst').firstElementChild;
    par.style.backgroundColor = 'pink';
};


/*zmiana background color po kliknieciu bez definiowania par (w html onclick="alertFunction()" )*/

function alertFunction(par) {
    par.style.backgroundColor = 'pink';
};


/*zmiana background color przy onclick*/

var mainHeader = document.getElementById('main-header');

mainHeader.onclick = function() {
    this.style.backgroundColor = 'red';
};

/*lub, przy wielu elementach do ktorych stosujemy funkcje : */

function changeBackground() {
    this.style.backgroundColor = 'green';
};

mainHeader.onclick = changeBackground;


/*zapobieganie odpalenia defaultowej funkcji / opoznianie przez settimeout*/

var firstLink = document.getElementsByClassName('inna-klasa')[0];

firstLink.addEventListener('click', highlight);

function highlight(event) {
    event.preventDefault();
    event.stopPropagation(); /*propaginacja zatrzymuje zdarzenie sekcji*/
    /*setTimeout itd*/
    this.style.border = '2px yellow solid';
    alert('kliknieto w link');
}

/*wykluczanie powyzszej przy danych okolicznosciach*/

function changeBackground() {
    this.style.backgroundColor = 'red';
    firstLink.removeEventListener('click', highlight);
};

document.getElementById('sectionFirst').addEventListener('click', function() {
    alert('kliknieto w sekcje');
});
