// Side bar

var burger = $('#burger');
var sidemenu = $('#sidebar');
var close = $('.close');
var overlay = $('.overlay');


burger.on('click', function() {
    sidemenu.animate({'left': 0}, 300);
    sidemenu.addClass('shown');
    overlay.animate({'opacity': 1}, 150);
    overlay.addClass('shown');
    $('body').addClass('fixed-position');
});

close.on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});

overlay.on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});

$(window).resize(function() {
    if ($(window).width() >= 768) {
        sidemenu.removeClass('shown');
        overlay.removeClass('shown');
        $('body').removeClass('fixed-position');
        $('.btn.burger').blur();
    }
});

$('a[href*="#projects"]').on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});

$('.nav a[href*="#contact"]').on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});


//sticky header - https://codingreflections.com/hide-header-on-scroll-down/

(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('top');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 90) { 
          
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
})();

// control the form message

const formMsg = document.getElementById("form-message");
const closeMsg = document.getElementById("close-message");

closeMsg.addEventListener("click", () => {
  formMsg.className = "form-message";
});

// if the form message exists, scroll to it

(function scrollToMessage() {
  if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
    setTimeout(function() {window.location = (""+window.location).replace(/#[A-Za-z0-9_-]*$/,'')+"#form-message"}, 1);
  }
})();


//validate the form