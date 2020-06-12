gsap.registerPlugin(ScrollTrigger);

let header = $("#header");
gsap.from(header, { duration: 1, y: -100 });

//section1
var tl = new TimelineMax();
let sec1span = $("#section1 .sub-title");
let sec1h1 = $("#section1 h1");
let sec1p = $("#section1 p");
let sec1btn = $("#section1 .btn");

tl.from(sec1span, {
  duration: 1,
  ease: "power4.out",
  y: 100,
  autoAlpha: 0,
  delay: 1,
})
  .from(sec1h1, { duration: 1, ease: "power4.out", y: 100, autoAlpha: 0 })
  .from(sec1p, { duration: 1, ease: "power4.out", y: 100, autoAlpha: 0 })
  .from(sec1btn, { duration: 1, ease: "power4.out", y: 100, autoAlpha: 0 });

//section2
var tl2 = new TimelineMax();
let sect2spacer = $("#section2 .spacer ");
let sect2demoitem = $("#section2 .demo-item");

tl2
  .from(sect2spacer, {
    duration: 1,
    ease: "power4.out",
    y: 100,
    autoAlpha: 0,
    delay: 5,
  })
  .from(sect2demoitem, {
    duration: 1,
    ease: "power4.out",
    y: 100,
    autoAlpha: 0,
    stagger: 0.5,
  });

//section3
var tl3 = new TimelineMax();
let sect3spacer = $("#section3 .spacer ");
let sect3featureitem = $("#section3 .feature-item");

tl2
  .from(sect3spacer, {
    duration: 1,
    ease: "power4.out",
    y: 100,
    autoAlpha: 0,
  })
  .from(sect3featureitem, {
    duration: 1,
    ease: "power4.out",
    y: 100,
    autoAlpha: 0,
    stagger: 0.5,
  });

//footer
var tl3 = new TimelineMax();
let footerh3 = $("#footer h3 ");
let footerbtn = $("#footer .btn");
tl3
  .from(footerh3, {
    duration: 1,
    ease: "power4.out",
    y: 100,
    autoAlpha: 0,    
  })
  .from(footerbtn, {
    duration: 1,
    ease: "power4.out",
    y: 100,
    autoAlpha: 0,
  });
