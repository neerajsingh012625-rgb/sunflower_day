gsap.timeline()
.to(".stem",{height:220,duration:2})
.to(".rose",{scale:1,duration:1.5})
.to(".petals span",{opacity:1,y:200,x:()=>gsap.utils.random(-100,100),stagger:0.4,duration:4},"-=1")
.to(".text",{opacity:1,y:-20,duration:2});