const audio = document.getElementById("bgm");
document.body.addEventListener("click", () => audio.play(), { once: true });

const tl = gsap.timeline();

tl.to(".stage1", { opacity:1, duration:2 })
  .to(".rose", { scale:1, opacity:1, duration:2, ease:"elastic.out(1,0.5)" })
  .to(".stage1", { opacity:0, duration:1, delay:2 })

  .to(".stage2", { opacity:1, duration:2 })
  .to(".rose", { scale:0.6, opacity:0, duration:1 })
  .to(".stage2", { opacity:0, duration:1, delay:1 })

  .to(".sunflower", { scale:1, opacity:1, duration:2, ease:"elastic.out(1,0.5)" })
  .to(".stage3", { opacity:1, duration:2 })

  .to(".photos img:nth-child(1)", { opacity:1, duration:2 }, "+=1")
  .to(".photos img:nth-child(2)", { opacity:1, duration:2 })
  .to(".photos img:nth-child(3)", { opacity:1, duration:2 })

  .to(".final", { opacity:1, duration:3, delay:2 });
