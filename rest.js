"use strict";

const tabLet = document.querySelector(".navi1");

function tabletSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    tabLet.classList.remove("hide");
  } else {
    tabLet.classList.add("hide");
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

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width:1000px)": function () {
    gsap.from(".follow", {
      y: "10vw",
      opacity:0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".vid_1",
        scrub: 1,
        start: "top ",
        end: "bottom 10%  ",
      },
    });
  },
});
