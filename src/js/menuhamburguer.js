var $menuHamburguer = document.querySelector(".menuhamburguer");
var $close = document.querySelector(".close");
var $sideMenu = document.querySelector(".side-menu");
var $main = document.querySelector("#main");

$menuHamburguer.addEventListener("click", function() {
    $close.classList.add("-active");
    $menuHamburguer.classList.remove("-active");
    $sideMenu.classList.add("-active");
    $main.style.marginLeft = "200px";
  });

  $close.addEventListener("click", function() {
    $menuHamburguer.classList.add("-active");
    $close.classList.remove("-active");
    $sideMenu.classList.remove("-active");
    $main.style.marginLeft = "0";
  });
