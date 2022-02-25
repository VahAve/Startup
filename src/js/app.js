const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;
   
   if (scrollPos > 0) {
      header.classList.add("red");
   } else {
      header.classList.remove("red");
   };  
});

$(document).ready(function(){
   
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.teams__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 1800,
      responsive: [
         {
           breakpoint: 769,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
           }
         },
         {
            breakpoint: 601,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
         },
         {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
         },
      ]
   });

   $('.review__inner').slick({
      speed: 1800,
      arrows: false,
      dots: true,
   });
   
});


const worksItem = document.querySelectorAll('.works__item');

document.querySelector('.works__nav').addEventListener('click',  event => {
   if (event.target.className !== 'works__link') return false;

   let filterClass = event.target.dataset['filter'];
   
   worksItem.forEach( elem => {
      elem.classList.remove('works__hide')
      if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
         elem.classList.add('works__hide');
      }
   });
});







