const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function loadingAnimation(){
  
let tl = gsap.timeline();

tl.from('.page1',{
  opacity:0,
  duration:0.3,
  delay:0.2,
})
tl.from('.page1',{
  borderRadius:'100px',
  ease:'expo.out',
  duration:2,
  transform:'scaleX(0.7)  scaleY(0.2) translateY(80%)',
})
tl.from('nav',{
  opacity:0,
  delay:-0.2,
})
tl.from('.page1 h1,.page1 p,.page1 div',{
  opacity:0,
  stagger:0.2,
  duration:0.5,
})
}
function navAnimation() {
  let navH4 = document.querySelectorAll(".nav-element .h4");
  let main = document.querySelector('#main')
  navH4.forEach((val) => {
    val.addEventListener("mouseenter", () => {
      val.style.color = "#ffffffe1";
      let tl = gsap.timeline();
      tl.to(".navbottom", {
        height: "25vh",
      });
      tl.to("nav h5", {
        display: "block",
      });
      tl.to("nav h5 span", {
        y: 0,
        stagger: {
          amount: 0.58,
        },
      });
    });
  });

  navH4.forEach((val) => {
    val.addEventListener("mouseleave", () => {
      val.style.color = "white";
      let tl = gsap.timeline();
      tl.to("nav h5 span", {
        y: 25,
        stagger: {
          amount: 0.2,
        },
      });
      tl.to(".nav-element h5", {
        display: "none",
        duration: 0.1,
      });
      tl.to(".navbottom", {
        height: 0,
        duration: 0.1,
      });
    });
  });

  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    let navButton = document.querySelector(".nav-button");

    nav.classList.toggle("sticky", window.scrollY > 0);
    navButton.classList.toggle("sticky", window.scrollY > 0);
  });
}
function page2Animation() {
  let rightElems = document.querySelectorAll(".right-elem");
  console.log(rightElems);
  rightElems.forEach((elems) => {
    elems.addEventListener("mouseenter", () => {
      gsap.to(elems.children[2], {
        opacity: 1,
        scale: 1,
      });
    });
    elems.addEventListener("mouseleave", () => {
      gsap.to(elems.children[2], {
        opacity: 0,
        scale: 0,
      });
    });
    elems.addEventListener("mousemove", (dets) => {
      gsap.to(elems.children[2], {
        x: dets.x - elems.getBoundingClientRect().x - 50,
        y: dets.y - elems.getBoundingClientRect().y - 78,
      });
    });
  });
}
function chatGPT() {
  let page3Center = document.querySelector(".page3-center");
  let video = document.querySelector("#page3 video");
  let nav = document.querySelector("nav");

  page3Center.addEventListener("click", () => {
    video.play();
    gsap.to("#page3 video", {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 1,
    });
    nav.style.display = "none";
    blockScroll();
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to("#page3 video", {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "25px",
    });
    nav.style.display = "";
    unblockScroll();
  });

  function blockScroll() {
    document.body.classList.add("overflow-hidden");
  }

  function unblockScroll() {
    document.body.classList.remove("overflow-hidden");
  }
}
function mataBetha() {
  let sections = document.querySelectorAll(".page5-right");
  sections.forEach((elems) => {
    let page5Btn = document.querySelectorAll(".button-pg5");
    elems.addEventListener("mouseenter", () => {
      elems.children[2].style.opacity = 1;
      elems.children[2].play();
      gsap.to(elems.children[0], {
        opacity: 1,
        scale: 1,
      });
    });
    elems.addEventListener("mouseleave", () => {
      elems.children[2].style.opacity = 0;
      elems.children[2].load();
      gsap.to(elems.children[0], {
        opacity: 0,
        scale: 0,
      });
    });
    elems.addEventListener("mousemove", (dets) => {
      for (let val of page5Btn) {
        gsap.to(val, {
          x: dets.x - elems.getBoundingClientRect().x - 70,
          y: dets.y - elems.getBoundingClientRect().y - 60,
        });
      }
    });
  });
}
function page5Videos() {
  let page5Bottom = document.querySelectorAll(".page5-con-left");
  let page5Video = document.querySelectorAll(".page5-con-left video");

  page5Bottom.forEach((elems) => {
    elems.addEventListener("mouseenter", () => {
      page5Video.forEach((val) => {
        val.play();
      });
    });
    elems.addEventListener("mouseleave", () => {
      val.load();
    });
  });
}
function pg8Animation() {
  gsap.from(".page8-last h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".bor2",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}
loadingAnimation()
navAnimation();
page2Animation();
chatGPT();
mataBetha();
page5Videos();
pg8Animation();
