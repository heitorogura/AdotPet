const $menuHamburguer = document.querySelector(".menuhamburguer");
const $close = document.querySelector(".close");
const $sideMenu = document.querySelector(".side-menu");
const $main = document.querySelector("#main");

$menuHamburguer.addEventListener("click", () => {
  $close.classList.add("-active");
  $menuHamburguer.classList.remove("-active");
  $sideMenu.classList.add("-active");
  $main.style.marginLeft = "200px";
});

$close.addEventListener("click", () => {
  $menuHamburguer.classList.add("-active");
  $close.classList.remove("-active");
  $sideMenu.classList.remove("-active");
  $main.style.marginLeft = "0";
});
