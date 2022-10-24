function poliToLeft(){
    pedToRight();

    document.getElementById("POLI-main-block").style.animationDuration = "1.5s";
    document.getElementById("POLI-main-block").style.animationName = "PoliToLeft";
    document.querySelector('#POLI-main-block').style.left = "43rem";

    document.getElementById("SFEDU-bg-1").style.display = "none";
    document.getElementById("SFEDU-bg-2").style.display = "block";
    document.getElementById("SFEDU-bg-3").style.display = "none";


    document.getElementById("SFEDU").style.display = "none";
    document.getElementById("POLI").style.display = "block";
    document.getElementById("PED").style.display = "none";
}

function poliToRight(){
    if(document.getElementById("POLI-main-block").style.left === "43rem"){
        document.getElementById("POLI-main-block").style.animationDuration = "1.5s";
        document.getElementById("POLI-main-block").style.animationName = "PoliToRight";
        document.getElementById("POLI-main-block").style.left = "130rem";
        document.getElementById("SFEDU-bg-1").style.display = "block";
        document.getElementById("SFEDU-bg-2").style.display = "none";
        document.getElementById("SFEDU-bg-3").style.display = "none";


        document.getElementById("SFEDU").style.display = "block";
        document.getElementById("POLI").style.display = "none";
        document.getElementById("PED").style.display = "none";
    }
    pedToRight();
}



function pedToLeft(){
    poliToLeft();
    document.getElementById("PED-main-block").style.animationDuration = "1.5s";
    document.getElementById("PED-main-block").style.animationName = "PedToLeft";
    document.getElementById("PED-main-block").style.left = "61rem";
    document.getElementById("SFEDU-bg-1").style.display = "none";
    document.getElementById("SFEDU-bg-2").style.display = "none";
    document.getElementById("SFEDU-bg-3").style.display = "block";

    document.getElementById("SFEDU").style.display = "none";
    document.getElementById("POLI").style.display = "none";
    document.getElementById("PED").style.display = "block";
}

function pedToRight(){
    if(document.getElementById("PED-main-block").style.left === "61rem"){
        document.getElementById("PED-main-block").style.animationDuration = "1.5s";
        document.getElementById("PED-main-block").style.animationName = "PedToRight";
        document.getElementById("PED-main-block").style.left = "148rem";
    }
}
