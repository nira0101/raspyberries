"use strict";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width:800px)": function () {
    gsap.from("#the_div", {
      x: "80vw",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top  ",
        end: "bottom 64%  ",
      },
    });

    gsap.from(".slogan", {
      x: "-40vw",
      opacity: 0,
      duration: 5,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top  ",
        end: "bottom 64%  ",
      },
    });
    gsap.from(".greetings", {
      y: "20vw",
      opacity: 0,
      duration: 5,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top  ",
        end: "bottom 64%  ",
      },
    });
  },
});
console.log(gsap);

const headerLogo = document.querySelector(".header-logo");
const fadeIn = {
  duration: 5000,
  iterations: Infinity,
  easing: "linear",
  composite: "add",
};
const keyframeFadein = {
  offset: [0, 1],
  opacity: ["0", "1"],
  easing: ["ease"],
};
headerLogo.animate(keyframeFadein, fadeIn);

//sticky nav//
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const offset = header.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
  if (window.pageYOffset > offset) {
    nav.classList.remove("bottom-nav");
    nav.classList.add("top-nav");
  } else {
    nav.classList.add("bottom-nav");
    nav.classList.remove("top-nav");
  }
};
