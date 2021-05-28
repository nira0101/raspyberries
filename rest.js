"use strict";

const tabLet = document.querySelector(".navi1");
const nav = document.querySelector(".nav");
const resizedLogo = document.querySelector(".resized-logo");
const form = document.querySelector("#contact");



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



/* function formV(){
 
  document.getElementById("contact-submit").addEventListener("click", validateForm )
}
function validateForm(){
 
  if (!form.elements.email.checkValidity()) {
    document.querySelector("#error-1").classList.remove("hidden")
}
else{
  document.querySelector("#error-1").classList.add("hidden");
}
}


form.setAttribute("novalidate", true); */
gsap.registerPlugin(ScrollTrigger);





