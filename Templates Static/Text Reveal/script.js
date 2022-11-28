// const tl = gsap.timeline();

gsap.from(".line span", 1.3, {
  y: 200,
  ease: "power4.out",
  delay: 0.5,
  stagger: {
    amount: 0.3
  }
})