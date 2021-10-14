$(document).ready(function () {
  //    let mouseCursor = $('.cursor');
  let mouseCursor = document.querySelector(".cursor"); //vanilla js
  //    console.log(mouseCursor);
  //    let navLinks = $('.nav-links li');
  let navLinks = document.querySelectorAll(".nav-links li");
  //    console.log(navLinks);
  window.addEventListener("mousemove", cursorMovement);
  function cursorMovement(e) {
    // console.log(e);
    //We need pageY and pageX
    mouseCursor.style.top = e.pageY + "px"; //vanilla js
    // mouseCursor.css({"top": e.pageY + 'px'});
    mouseCursor.style.left = e.pageX + "px"; //vanilla js
    // mouseCursor.css({"left": e.pageX + 'px'});
  }
  navLinks.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      link.classList.add("hovered-link");
    });
  });
  //1.   gsap.to('.jumbotron', {x:2000});
  //2. basic gsap demonstration, better to use timellines and create variables to hold DOM elements
  //3. creating timeline
  let tl1 = gsap.timeline({
      scrollTrigger: {
          trigger: '.content',
          start: '0%',
          end: '100%',
          scrub: 1
      },
  });
//   tl1.fromTo('.logo', {y: 0},{y:-400})//moving all timelines below


//   tl1.to('.jumbotron', {opacity: 0});
// time lines can be chained together, remove semi colon between each statement
// eg: 
// tl1.fromTo('.logo', {y: 0},{y:-400})
// tl1.to('.jumbotron', {opacity: 0});
  let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.content',
        start: '0%',
        end: '468px',
        scrub: 1,
        // scrub: true,
        pin: true,
        pinSpacing: true,
        markers: {startColor: "green", endColor: "red", fontSize: "12px"},
        marker:true,
        //allows the next page to start, rather than have a blank and empty page
    },
});
// tl2.to('.jumbotron', {opacity: 0}); //moving all timelines below

//   let tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.content',
//         start: '0%',
//         end: '55%',
//         scrub: 1,
//         pin: true,
//     },
// });
//moved all timeline here for easier manipulation
tl1.fromTo('.logo', {y: 0},{y:-100});
// tl2.to('.jumbotron', {opacity: 0})
// tl2.fromTo('.jumbotron', {scale: 2.5}, {scale: 1.5, top: '4rem', left: '3rem', x:'50%', y:'50%', opacity:0});
tl2.fromTo('.jumbotron', {scale: 2.5}, {scale: 1, top: '0.5rem', left: '1rem', x:'50%', y:'50%'})
tl2.to('h1.jumbotron',{backgroundColor: 'transparent'})
tl2.to('h1.jumbotron', {opacity: 0},'+2s');
// tl3.to('.jumbotron', {opacity: 1},{opacity: 0});

  // document.ready ends here
});
