/*
$(document).ready(function()
     {
          $("a").on('click', 
          function(event) 
               {
                    if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                    scrollTop: $(hash).offset().top
                    }, 800, 
                         function()
                         {
                         window.location.hash = hash;
                         });
                    }
               });
     }
);
*/

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

/* CAROUSEL*/ 
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

