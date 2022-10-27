function open_menu(){
    document.getElementById("hid-menu").setAttribute("style", "display: block");
    document.getElementById("drop-menu").setAttribute("style", "display: none");
    document.getElementById("ex-menu").setAttribute("style", "display: block");
}

function close_menu(){
    document.getElementById("hid-menu").setAttribute("style", "display: none");
    document.getElementById("drop-menu").setAttribute("style", "display: block");
    document.getElementById("ex-menu").setAttribute("style", "display: menu");
}