gsap.registerPlugin(ScrollTrigger);
//section1
var tl = new TimelineMax();
let header = $("#header");
let sec1span = $("#section1 .sub-title");
let sec1h1 = $("#section1 h1");
let sec1p = $("#section1 p");
let sec1btn = $("#section1 .btn");

let sect2spacer = $("#section2 .spacer ");
let sect2demoitem = $("#section2 .demo-item");

let sect3spacer = $("#section3 .spacer ");
let sect3featureitem = $("#section3 .feature-item");

let footerh3 = $("#footer h3");
let footerbtn = $("#footer .btn");

ScrollTrigger.create({
  trigger: "#header",
  onToggle: (self) => {
    animateSection1();
  },
  toggleActions: "restart pause resume pause",
});
ScrollTrigger.create({
  trigger: "#section2",
  onToggle: (self) => {
    animateSection2();
  },
  toggleActions: "restart pause resume pause",
});

ScrollTrigger.create({
  trigger: "#section3",
  onToggle: (self) => {
    animateSection3();
  },
  toggleActions: "restart pause resume pause",
});
ScrollTrigger.create({
  trigger: "#footer",
  onToggle: (self) => {
    animateSection4();
  },
  toggleActions: "restart pause resume pause",
});

function animateSection1() {
  let tl1 = new TimelineMax();
  tl1
    .from(header, {
      duration: 1,
      ease: "power4.out",
      y: 100,
      autoAlpha: 0,
    })
    .from(sec1span, {
      duration: 1,
      ease: "power4.out",
      y: 100,
      autoAlpha: 0,
    })
    .from(sec1h1, { duration: 1, ease: "power4.out", y: 100, autoAlpha: 0 })
    .from(sec1p, { duration: 1, ease: "power4.out", y: 100, autoAlpha: 0 })
    .from(sec1btn, { duration: 1, ease: "power4.out", y: 100, autoAlpha: 0 });
}
function animateSection2() {
  let tl2 = new TimelineMax();
  tl2
    .from(sect2spacer, {
      duration: 1,
      ease: "power4.out",
      y: 100,
      autoAlpha: 0,
    })
    .from(sect2demoitem, {
      duration: 1,
      ease: "power4.out",
      y: 100,
      autoAlpha: 0,
      stagger: 0.5,
    });
}

function animateSection3() {
  let tl3 = new TimelineMax();
  tl3
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
      stagger: 0.3,
    });
}
function animateSection4() {
  let tl4 = new TimelineMax();
  tl4
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
}
