const dots = document.querySelector(".dots");
const menuMain = document.querySelector(".menu-main");
const closeMenu = document.querySelector(".close-menu");
const imgFox = document.querySelector(".img-fox");
const cartImg = document.querySelector(".cart-img");
const menu = document.querySelector(".menu");

dots.addEventListener("click", () => {
  dots.classList.remove("dots");
  menuMain.classList.toggle("show-menu");
  cartImg.classList.toggle("show-img");
  imgFox.classList.toggle("show-img");
  menu.classList.toggle("dark-mode");
});

closeMenu.addEventListener("click", () => {
  dots.classList.add("dots");
  menuMain.classList.toggle("show-menu");
  cartImg.classList.toggle("show-img");
  imgFox.classList.toggle("show-img");
  menu.classList.toggle("dark-mode");
});
