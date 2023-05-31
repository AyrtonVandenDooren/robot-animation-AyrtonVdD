// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

// gsap.to("#Robot" , 1, {
//     scale: 0.1, 
//     y: 60,
//     yoyo: true, 
//     repeat: -1, 
//     ease: "power1.inOut",
//     delay:1,
//     stagger: {
//       amount: 1.5, 
//       grid: "auto",
//       from: "center"
//     }
//   });

  // gsap.to("#Shadow" , 1, {
  //   scale: 0.1, 
  //   y: 60,
  //   yoyo: true, 
  //   repeat: -1, 
  //   ease: "power1.inOut",
  //   delay:1,
  //   stagger: {
  //     amount: 1.5, 
  //     grid: "auto",
  //     from: "center"
  //   }
  // });

let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,a
  })

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })
  .fromTo('#Robot',{
    y: 2.5,
  },{
    y: -2.5,
  })
  .to('#Shadow',{
    scale: 0.75,
  },
    '-=.75',
  )


  const pauze = document.querySelector("js-pause")
  pauze.addEventListener('click', function() {
    tl.pause();
  })

  const fast = document.querySelector("js-fast")
  fast.addEventListener('click', function() {
    tl.timeScale(2)
  })

  const normal = document.querySelector("js-normal")
  normal.addEventListener('click', function() {
    tl.play();
  })

  const slow = document.querySelector("js-slow")
  slow.addEventListener('click', function() {
    tl.timeScale(-2)
  })

btnFast.onclick = () => tl.timeScale(2)