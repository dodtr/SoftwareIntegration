var menuButton = document.getElementById("menu");
var sidemenu = document.getElementById("side");
var isOpened = false;
var section = document.getElementById("sect")

menuButton.addEventListener("click", () => {
    showMenu();
})

function showMenu()
{
    if(isOpened){
        sidemenu.style.left = "-250px";
        section.style.marginLeft = "0px";
        isOpened = false;
    }else
    {
        sidemenu.style.left = "0px";
        section.style.marginLeft = "250px";
        isOpened = true;
    }
}

var QQfont = document.querySelectorAll("body");
for(var i = 0;i < QQfont.length; i++){
    QQfont[i].classList.add('QQfont');
}

var Qfont = document.querySelectorAll(".title");
for(var i = 0;i < QQfont.length; i++){
    Qfont[i].classList.add('Qfont');
}

var Qbtn = document.querySelectorAll("button");
for(var i = 0;i < Qbtn.length; i++){
    Qbtn[i].classList.add('Qbtn');
}

