function blockAthVisible1() {
    var disp = document.getElementsByClassName ('v1');
    disp[0].style.display = "block";
    disp[1].style.display = "none";
    disp[2].style.display = "none";
}
function blockAthVisible2() {
    var disp = document.getElementsByClassName ('v1');
    disp[0].style.display = "none";
    disp[1].style.display = "block";
    disp[2].style.display = "none";
}
function blockAthVisible3() {
    var disp = document.getElementsByClassName ('v1');
    disp[0].style.display = "none";
    disp[1].style.display = "none";
    disp[2].style.display = "block";
}
function blockPlVisible1() {
    var disp = document.getElementsByClassName ('v2');
    disp[0].style.display = "block";
    disp[1].style.display = "none";
    disp[2].style.display = "none";
}
function blockPlVisible2() {
    var disp = document.getElementsByClassName ('v2');
    disp[0].style.display = "none";
    disp[1].style.display = "block";
    disp[2].style.display = "none";
}
function blockPlVisible3() {
    var disp = document.getElementsByClassName ('v2');
    disp[0].style.display = "none";
    disp[1].style.display = "none";
    disp[2].style.display = "block";
}

document.addEventListener ('DOMContentLoaded', loadPage);

function loadPage() { 
    var disp = document.getElementsByClassName('v1');
    var disp2 = document.getElementsByClassName('v2');
    var x = window.matchMedia("(max-width: 712px)");

    if (x.matches) {

        disp[0].style.display = "block";
        disp[1].style.display = "none";
        disp[2].style.display = "none";        
        disp2[0].style.display = "block";
        disp2[1].style.display = "none";
        disp2[2].style.display = "none";     
    } 

   else {
       
        disp[0].style.display = "block";
        disp[1].style.display = "block";
        disp[2].style.display = "block";        
        disp2[0].style.display = "block";
        disp2[1].style.display = "block";
        disp2[2].style.display = "block";
    }
}
