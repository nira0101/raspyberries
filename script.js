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

gsap.registerPlugin(ScrollTrigger);

//for desktop and laptop
ScrollTrigger.matchMedia({
  "(min-width:1000px)": function () {
    gsap.from("#the_div", {
      y: "20vw",
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
      x: "100vw",
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

    //new release
    gsap.from(".banner", {
      y: "20vw",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#main-content",
        scrub: 1,
        start: "top ",
        end: "bottom 30%  ",
      },
    });

    gsap.from(".banner-info", {
      x: "100vw",
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#main-content",
        scrub: 1,
        start: "top ",
        end: "bottom 30%  ",
      },
    });

    gsap.from(".banner-text", {
      opacity: 1,
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#main-content",
        scrub: 1,
        start: "top ",
        end: "bottom 70%  ",
      },
    });

    //audio
    gsap.from(".spotify", {
      opacity: 0,
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#new-release",
        scrub: 1,
        start: "top ",
        end: "bottom 70%  ",
      },
    });

    gsap.from(".audio-info", {
      y: "20vw",
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#new-release",
        scrub: 1,
        start: "top ",
        end: "bottom 64%  ",
      },
    });

    gsap.from(".play-audio", {
      y: "20vw",
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#new-release",
        scrub: 1,
        start: "top ",
        end: "bottom 64%  ",
      },
    });

    //events
    gsap.from(".event-info", {
      opacity: 0,
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#audio-file",
        scrub: 1,
        start: "top ",
        end: "bottom 64%  ",
      },
    });

    gsap.from(".event-text", {
      y: "20vw",
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#audio-file",
        scrub: 1,
        start: "top ",
        end: "bottom 64%  ",
      },
    });

    //collab
    gsap.from(".collab-image", {
      opacity: 0,
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#event",
        scrub: 1,
        start: "top ",
        end: "bottom 64%  ",
      },
    });

    gsap.from(".collab-desc", {
      y: "20vw",
      delay: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#event",
        scrub: 1,
        start: "top ",
        end: "bottom 64%  ",
      },
    });
  },
});

//for tablet
ScrollTrigger.matchMedia({
  "(min-width:768px)": function () {
    gsap.from("#the_div", {
      y: "20vw",
      duration: 3,
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
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top",
        end: "bottom 64%",
      },
    });

    gsap.from(".greetings", {
      x: "13vw",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top",
        end: "bottom 64%",
      },
    });
    // new release
    gsap.from(".banner", {
      x: "-70vw",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#main-content",
        scrub: 1,
        start: "top ",
        end: "bottom 30%  ",
      },
    });

    gsap.from(".banner-info", {
      opacity: 0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#main-content",
        scrub: 1,
        start: "top ",
        end: "bottom 20%  ",
      },
    });
  },
});
//for mobilee
ScrollTrigger.matchMedia({
  "(max-width:480px)": function () {
    gsap.from(".banner", {
      opacity: 0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top ",
        end: "bottom 80%  ",
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
