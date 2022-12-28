gsap.registerPlugin(ScrollTrigger);
/*start the magic*/
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: true,
    pin: true,
    start: "top top"
    //end: "+=100%"
  }
});

tl.fromTo(".c2", { scale: 4 }, { scale: 1, duration: 50, ease: "power4" })

  .fromTo(".title", 10, { autoAlpha: 1 }, { autoAlpha: 0, duration: 20 })

  .fromTo(
    ".c2",
    { filter: "blur(20px)", "-wekit-filter": "blur(20px)" },
    {
      filter: "blur(0)",
      "-webkit-filter": "blur(0)",
      duration: 50,
      ease: "none"    },20
  )

  .to(".c2", { borderWidth: "6px", duration: 40, ease: "none" }, 40)

  .fromTo(
    ".c2",
    { opacity: "0.5" },
    { opacity: "1", duration: 5, ease: "power4" },
    80
  )

  .fromTo(
    ".c2",
    { marginLeft: "-10rem", marginRight: "-10rem" },
    { marginLeft: "1em", marginRight: "1em", duration: 30, ease: "power2" },
    80
  )

  .from(
    ".c1,.c3",
    { autoAlpha: 0, ease: "power2", duration: 20, ease: "power2" },
    80
  )

  .to(
    ".c1,.c2,.c3",
    { borderColor: "goldenrod", duration: 80, ease: "power2" },
    40
  )

  .fromTo(
    ".testo-cerchio",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 50 },
    20
  )

  .to(".c1,.c2,.c3", { borderWidth: "3px", duration: 80, ease: "power2" }, 40)

  .to(".circle", { scale: 0.95, duration: 60 })

  .to([".c1", ".c2", ".c3"], 80, { scale: 1 })

  .to(".c1", 40, { borderColor: "#fff", borderWidth: "6px", duration: 80 })
  .to(".c2", 50, { borderColor: "#fff", borderWidth: "6px", duration: 80 })
  .to(".c3", 60, { borderColor: "#fff", borderWidth: "6px", duration: 80 })

  .to(".c1 .testo-cerchio",60, { opacity:0, duration: 20 },100)
  .to(".c2 .testo-cerchio", 60, { opacity:0, duration: 20 },120)
  .to(".c3 .testo-cerchio", 90, { opacity:0, duration: 20 },240)


 .to('.grid3cerchi', 100, { opacity: 0 },100)
;


/*smooth background*/
gsap.utils.toArray("section").forEach(function (a) {
  let b = a.getAttribute("sfondo");
  ScrollTrigger.create({
    trigger: a,
    start: "top 50%",
    end: "bottom 50%",
    duration: "20",
    scrub: 1,
    onEnter: () => gsap.to("body", { background: b }),
    onLeave: () => gsap.to("body", { background: b }),
    onLeaveBack: () => gsap.to("body", { background: b }),
    onEnterBack: () => gsap.to("body", { background: b })
  });
});

var ypos = 0;
var $brand = document.getElementById('brand');

function scrollMe() {
  var dist = document.body.getBoundingClientRect().top;
  if (dist > ypos) {
    $brand.classList.remove('scrolling-down');
  } else {
    $brand.classList.add('scrolling-down');
  }
  ypos = dist;
}

window.addEventListener("scroll", scrollMe);

