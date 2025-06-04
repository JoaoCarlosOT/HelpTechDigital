function Abrirnaver(){
    var nav = document.querySelector(".naver");

    nav.style.left="0px";
    nav.style.transition="0.9s";
}

function Fecharnaver(){
    var nav = document.querySelector(".naver");

    nav.style.left="-100%";
    nav.style.transition="0.9s";
}

addEventListener("click",Abrirnaver);
addEventListener("click",Fecharnaver);
