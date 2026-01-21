const audio = document.getElementById("bgm");

// play audio once on user click (browser rule)
document.body.addEventListener("click", () => audio.play(), { once:true });

const tl = gsap.timeline();

// Stage 1: Rose
tl.to(".stage1", { opacity:1, duration:2 })
  .to(".rose", {
    scale:1,
    opacity:1,
    duration:2,
    ease:"elastic.out(1, 0.5)"
  })
  .to(".stage1", { opacity:0, duration:1, delay:2 })

// Stage 2: Transition
  .to(".stage2", { opacity:1, duration:2 })
  .to(".rose", { scale:0.5, opacity:0, duration:1 })
  .to(".stage2", { opacity:0, duration:1, delay:1 })

// Stage 3: Sunflower Reveal
  .to(".sunflower", {
    scale:1,
    opacity:1,
    duration:2,
    ease:"elastic.out(1, 0.5)"
  })
  .to(".stage3", { opacity:1, duration:2 })

// Photos appear softly
  .to(".photos img:nth-child(1)", { opacity:1, duration:2 }, "+=1")
  .to(".photos img:nth-child(2)", { opacity:1, duration:2 })
  .to(".photos img:nth-child(3)", { opacity:1, duration:2 })

// Final line
  .to(".final", { opacity:1, duration:3, delay:2 });
