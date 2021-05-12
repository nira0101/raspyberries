"use strict";

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

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width:1000px)": function () {
    gsap.from(".follow", {
      y: "25vw",
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



$(document).ready(function (){
  $(".submit").click(function(event){
      
      console.log("clicked")

      const email = $(".email").val();
      const subject = $(".subject").val();
      const message = $(".message").val();
      const statusElm = $(".status")
      statusElm.empty()

      if(email.length>5 && email.includes("@") && email.includes(".")){
        statusElm.append("<div> Email is valid </div>");
      }else{
        event.preventDefault();
        statusElm.append("<div> Email is not valid </div>");
        
      }

      if(subject.length>=2){
        statusElm.append("<div> subject is valid </div>");
      }else{
        event.preventDefault();
        statusElm.append("<div> subject is not valid </div>");
      }

      if(message.length>=10){
        statusElm.append("<div> message is valid </div>");
      }else{
        event.preventDefault();
        statusElm.append("<div> message is not valid </div>");
      }

  })
});


/* // gallery
let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew)
      });
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
 */