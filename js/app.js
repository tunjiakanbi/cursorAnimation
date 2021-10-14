$(document).ready(function(){

//    let mouseCursor = $('.cursor');
   let mouseCursor = document.querySelector('.cursor');//vanilla js
//    console.log(mouseCursor);
//    let navLinks = $('.nav-links li');
   let navLinks = document.querySelectorAll('.nav-links li');
//    console.log(navLinks);
  window.addEventListener('mousemove', cursorMovement);
  function cursorMovement(e){
    // console.log(e);
    //We need pageY and pageX
    mouseCursor.style.top = e.pageY + 'px';//vanilla js
    // mouseCursor.css({"top": e.pageY + 'px'});
    mouseCursor.style.left = e.pageX + 'px';//vanilla js
    // mouseCursor.css({"left": e.pageX + 'px'});
  }
  navLinks.forEach(link => {
      link.addEventListener('mouseleave', ()=>{
          mouseCursor.classList.remove('link-grow');
          link.classList.remove('hovered-link');
      })
      link.addEventListener('mouseover', ()=>{
          mouseCursor.classList.add('link-grow');
          link.classList.add('hovered-link');
      })
  })
 });