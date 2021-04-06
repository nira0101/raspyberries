"use strict"



const tabLet = document.querySelector(".navi1");
const nav = document.querySelector(".nav");
const resizedLogo = document.querySelector(".resized-logo");



function tabletSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    tabLet.classList.remove("hide");
    nav.classList.add("hide");
    resizedLogo.classList.remove("hide")
   
  } else {
    tabLet.classList.add("hide");
    nav.classList.remove("hide");
    resizedLogo.classList.add("hide");
  }
}
window.onload = tabletSize;
window.onresize = tabletSize;
const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}