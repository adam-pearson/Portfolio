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
const formMsgText = document.getElementById("form-message-text");
const closeMsg = document.getElementById("close-message");

closeMsg.addEventListener("click", () => {
  formMsg.className = "form-message";
});

// if the form message exists, scroll to it

function scrollToMessage() {
  if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
    window.location = (""+window.location).replace(/#[A-Za-z0-9_-]*$/,'')+"#form-message";
  }
};

window.addEventListener("load", () => {
  scrollToMessage();
})


// setting up form field variables
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");
const submitContact = document.getElementById("submit");


// function to create the error message div & text
function addErrorMessage(errorArray) {
  formMsg.classList.add("error");
  formMsgText.innerText = `Please complete the following fields: ${errorArray.join(", ")}`;
}


// recaptcha callback function

let recaptchaChecked;

function recaptchaCallback() {
  recaptchaChecked = true;
}


function clientValidate() {
  let errorArray = [];
  const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // creates an array of all the field values
  let fieldArray = {
      "first name": firstNameField,
      "last name": lastNameField,
      "email": emailField,
      "subject": subjectField,
      "message": messageField,
  };

  // loops through the fields and adds errors to the errorArray
  // also adds the error class to the input field for 3 seconds

  for (const [field, value] of Object.entries(fieldArray)) {
      if (field == "first name" && !value.value) {
          errorArray.push(field);
          firstNameField.classList.add("error");
          firstNameField.addEventListener("input", (e) => {
            if (e.target.value.length > 0) {
              e.target.classList.remove("error");
            }
          })
      }
      if (field == "last name" && !value.value) {
        errorArray.push(field);
        lastNameField.classList.add("error");
        lastNameField.addEventListener("input", (e) => {
          if (e.target.value.length > 0) {
            e.target.classList.remove("error");
          }
        })
    }
      if (field == "email" && !emailRegex.test(value.value)) {
          errorArray.push(field);
          emailField.classList.add("error");
          emailField.addEventListener("input", (e) => {
            if (!emailRegex.test(e.target.value)) {
              e.target.classList.remove("error");
            }
          })
      }
      if (field == "subject" && !value.value) {
          errorArray.push(field);
          subjectField.classList.add("error");
          subjectField.addEventListener("input", (e) => {
            if (e.target.value.length > 0) {
              e.target.classList.remove("error");
            }
          })
      }
      if (field == "message" && !value.value) {
          errorArray.push(field);
          messageField.classList.add("error")
          messageField.addEventListener("input", (e) => {
            if (e.target.value.length > 0) {
              e.target.classList.remove("error");
            }
          })
      }
  }

  // if the recaptcha is not checked, add
  if (!recaptchaChecked) {
    errorArray.push("captcha");
  }

  // if the error array contains items, remove the existing message and add a new one
  if (errorArray.length > 0) {
      // removes any existing message before adding a new one
      if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
          formMsg.className = "form-message";
      }

      // adds a new error message using the error array
      addErrorMessage(errorArray);
            
      return false;
  } else {
    console.log(errorArray);
      return true;
  }
}


// event listener for the button, 
submitContact.addEventListener('click', function(e) {
  if (!clientValidate()) {
      e.preventDefault();
      scrollToMessage();
  }
});