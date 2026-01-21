const audio = document.getElementById("bgm");
document.body.addEventListener("click", () => audio.play(), { once:true });

const tl = gsap.timeline();

// text + flower flow
tl.to(".stage1", { opacity:1, duration:2 })
  .to(".rose", { scale:1, opacity:1, duration:2, ease:"elastic.out(1,0.5)" })
  .to(".stage1", { opacity:0, duration:1, delay:2 })

  .to(".stage2", { opacity:1, duration:2 })
  .to(".rose", { scale:0.6, opacity:0, duration:1 })
  .to(".stage2", { opacity:0, duration:1, delay:1 })

  .to(".sunflower", { scale:1, opacity:1, duration:2, ease:"elastic.out(1,0.5)" })
  .to(".stage3", { opacity:1, duration:2 })

  // start particles after sunflower reveal
  .call(startParticles)

  // photos
  .to(".photos img:nth-child(1)", { opacity:1, duration:2 }, "+=1")
  .to(".photos img:nth-child(2)", { opacity:1, duration:2 })
  .to(".photos img:nth-child(3)", { opacity:1, duration:2 })

  // final line
  .to(".final", { opacity:1, duration:3, delay:2 });


// PARTICLE FUNCTION
function startParticles() {
  const container = document.querySelector(".particles");
  const icons = ["💖", "🌻"];

  setInterval(() => {
    const span = document.createElement("span");
    span.textContent = icons[Math.floor(Math.random() * icons.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (6 + Math.random() * 6) + "s";
    span.style.fontSize = (14 + Math.random() * 14) + "px";

    container.appendChild(span);

    setTimeout(() => span.remove(), 12000);
  }, 400);
}
