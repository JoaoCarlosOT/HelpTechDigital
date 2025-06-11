var menuAberto = false;
function AbrirEFecharMenu() { 
    var naverElement = window.document.querySelector('.naver');
    if (menuAberto) {
        naverElement.style.left = "-100%";
        naverElement.style.transition = ".2s";
        menuAberto = false;
    } else {
        naverElement.style.left = "0";
        naverElement.style.transition = ".2s";
        menuAberto = true;
    }
}

  $(document).ready(function(){
    $('.car-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,           // Desativa as setas
      dots: true,           // Ativa as bolinhas
      responsive: {
        0: {
          items: 1          // 1 card por vez no mobile
        },
        600: {
          items: 2
        },
        1000: {
          items: 3          // 3 cards lado a lado em telas grandes
        }
      }
    });
  });


// window.addEventListener('scroll', function() {
//     var button = document.getElementById('butao-main');
//     var scrollPosition = window.scrollY;

//     if (scrollPosition > 200) {
//         button.style.visibility = "visible";
//         button.style.transition = ".4s";
//     } else {
//         button.style.visibility = "hidden";
//         button.style.transition = ".4s";
//     }
// });



