
const screenWidth = window.screen.width

if(screenWidth >= 600){
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
        li.style.position = 'relative';
        li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
        i++;
    }

    /* конфигурация */
    var l = document.getElementById("fix");

    var element = document.getElementById('fix');
    var style = window.getComputedStyle(element, null);
    var width1 = element.offsetWidth;
    var margin = parseInt(style.marginRight);



    let width = (l.offsetWidth + margin)/10;


    /*let width = document.getElementById("fix").offsetWidth;*/
    /*let width = 33 + 10; // ширина картинки*/
    let count = 4; // видимое количество изображений




    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.button-prev').onclick = function() {
        // сдвиг влево
        position += width * 1;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'rem';
    };

    carousel.querySelector('.button-next').onclick = function() {
        // сдвиг вправо
        position -= width;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'rem';
    };
}
else{
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
        li.style.position = 'relative';
        li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
        i++;
    }

    /* конфигурация */
    var l = document.getElementById("fix");

    /*var element = document.getElementById('fix');
    var style = window.getComputedStyle(element, null)
    var width1 = element.offsetWidth;
    var margin = parseInt(style.marginRight);*/



    /*let width = (l.offsetWidth + margin)/10;*/
    let width = (l.offsetWidth + 7)/1.9;


    /*let width = document.getElementById("fix").offsetWidth;*/
    /*let width = 33 + 10; // ширина картинки*/
    let count = 3; // видимое количество изображений




    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.button-prev').onclick = function() {
        // сдвиг влево
        position += width * 1;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'rem';
    };

    carousel.querySelector('.button-next').onclick = function() {
        // сдвиг вправо
        position -= width;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'rem';
    };
}



function disabledall(){
    for (let i = 0; i < 11; i++) {
        document.getElementsByClassName("cafedra")[i].style.display = "none";
    }
}


function cf1(){
   disabledall();
    document.getElementById("cf1").style.display = "block";
}

function cf2(){
    disabledall();
    document.getElementById("cf2").style.display = "block";
}

function cf3(){
    disabledall();
    document.getElementById("cf3").style.display = "block";
}

function cf4(){
    disabledall();
    document.getElementById("cf4").style.display = "block";
}

function cf5(){
    disabledall();
    document.getElementById("cf5").style.display = "block";
}

function cf6(){
    disabledall();
    document.getElementById("cf6").style.display = "block";
}

function cf7(){
    disabledall();
    document.getElementById("cf7").style.display = "block";
}

function cf8(){
    disabledall();
    document.getElementById("cf8").style.display = "block";
}

function cf9(){
    disabledall();
    document.getElementById("cf9").style.display = "block";
}

function cf10(){
    disabledall();
    document.getElementById("cf10").style.display = "block";
}

function cf11(){
    disabledall();
    document.getElementById("cf11").style.display = "block";
}







function poliToLeft(){
    pedToRight();
    document.getElementById("POLI-main-block").style.animationDuration = "1.5s";
    document.getElementById("POLI-main-block").style.animationName = "PoliToLeft";
    document.getElementById("POLI-main-block").style.left = "182px";



    document.getElementById("SFEDU-bg-1").style.display = "none";
    document.getElementById("SFEDU-bg-2").style.display = "block";
    document.getElementById("SFEDU-bg-3").style.display = "none";


    document.getElementById("SFEDU").style.display = "none";
    document.getElementById("POLI").style.display = "block";
    document.getElementById("PED").style.display = "none";
}

function poliToRight(){
    pedToRight();
    document.getElementById("POLI-main-block").style.animationDuration = "1.5s";
    document.getElementById("POLI-main-block").style.animationName = "PoliToRight";
    document.getElementById("POLI-main-block").style.left = "1097px";
    document.getElementById("SFEDU-bg-1").style.display = "block";
    document.getElementById("SFEDU-bg-2").style.display = "none";
    document.getElementById("SFEDU-bg-3").style.display = "none";


    document.getElementById("SFEDU").style.display = "block";
    document.getElementById("POLI").style.display = "none";
    document.getElementById("PED").style.display = "none";
}



function pedToLeft(){
    poliToLeft();
    document.getElementById("PED-main-block").style.animationDuration = "1.5s";
    document.getElementById("PED-main-block").style.animationName = "PedToLeft";
    document.getElementById("PED-main-block").style.left = "364px";
    document.getElementById("SFEDU-bg-1").style.display = "none";
    document.getElementById("SFEDU-bg-2").style.display = "none";
    document.getElementById("SFEDU-bg-3").style.display = "block";

    document.getElementById("SFEDU").style.display = "none";
    document.getElementById("POLI").style.display = "none";
    document.getElementById("PED").style.display = "block";
}
function pedToRight(){
    document.getElementById("PED-main-block").style.animationDuration = "1.5s";
    document.getElementById("PED-main-block").style.animationName = "PedToRight";
    document.getElementById("PED-main-block").style.left = "1279px";
}
