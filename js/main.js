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

//contact form

// var fields = {};

// $.ready(function() {
//     fields.firstName = $('#first-name');
//     fields.lastName = $('#last-name');
//     fields.email = $('#email');
//     fields.subject = $('#subject');
//     fields.message = $('#message');
// });

// function isNotEmpty(value) {
//     if (value == null || typeof value == "undefined") return false;
//     return (value.length > 0);
// }

// function isEmail(email) {
//     var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
//    }

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;

//     var isFieldValid = validationFunction(field.value);
//     if (!isFieldValid) {
//     field.addClass('placeholderRed');
//     } else {
//     field.removeClass('placeholderRed');
//     }

//     return isFieldValid;
// }

// function isValid() {
//     var valid = true;
//     valid &= fieldValidation(fields.firstName, isNotEmpty);
//     valid &= fieldValidation(fields.lastName, isNotEmpty);
//     valid &= fieldValidation(fields.email, isNotEmpty);
//     valid &= fieldValidation(fields.email, isEmail);
//     valid &= fieldValidation(fields.subject, isNotEmpty);
//     valid &= fieldValidation(fields.message, isNotEmpty);
//     return valid;
// }

// class User {
//     constructor(firstName, lastName, email, subject, message) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.subject = subject;
//         this.message = message;
//     }
// }

// function sendContact() {
//     if (isValid()) {
//         var userContact = new User(firstName.value, lastName.value, email.value, subject.value, message.value);
//     }
// }