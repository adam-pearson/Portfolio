"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// control the form message
var formMsg = document.getElementById("form-message");
var formMsgText = document.getElementById("form-message-text");
var closeMsg = document.getElementById("close-message");
closeMsg.addEventListener("click", function () {
  formMsg.className = "form-message";
}); // if the form message exists, scroll to it

function scrollToMessage() {
  if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
    window.location = ("" + window.location).replace(/#[A-Za-z0-9_-]*$/, '') + "#form-message";
  }
}

;
window.addEventListener("load", function () {
  scrollToMessage();
}); // setting up form field variables

var firstNameField = document.getElementById("first-name");
var lastNameField = document.getElementById("last-name");
var emailField = document.getElementById("email");
var subjectField = document.getElementById("subject");
var messageField = document.getElementById("message");
var submitContact = document.getElementById("submit"); // function to create the error message div & text

function addErrorMessage(errorArray) {
  formMsg.classList.add("error");
  formMsgText.innerText = "Please complete the following fields: ".concat(errorArray.join(", "));
} // recaptcha callback function


var recaptchaChecked;

function recaptchaCallback() {
  recaptchaChecked = true;
}

function clientValidate() {
  var errorArray = [];
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // creates an array of all the field values

  var fieldArray = {
    "first name": firstNameField,
    "last name": lastNameField,
    "email": emailField,
    "subject": subjectField,
    "message": messageField
  }; // loops through the fields and adds errors to the errorArray
  // also adds the error class to the input field for 3 seconds

  for (var _i = 0, _Object$entries = Object.entries(fieldArray); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        field = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (field == "first name" && !value.value) {
      errorArray.push(field);
      firstNameField.classList.add("error");
      firstNameField.addEventListener("input", function (e) {
        if (e.target.value.length > 0) {
          e.target.classList.remove("error");
        }
      });
    }

    if (field == "last name" && !value.value) {
      errorArray.push(field);
      lastNameField.classList.add("error");
      lastNameField.addEventListener("input", function (e) {
        if (e.target.value.length > 0) {
          e.target.classList.remove("error");
        }
      });
    }

    if (field == "email" && !emailRegex.test(value.value)) {
      errorArray.push(field);
      emailField.classList.add("error");
      emailField.addEventListener("input", function (e) {
        if (!emailRegex.test(e.target.value)) {
          e.target.classList.remove("error");
        }
      });
    }

    if (field == "subject" && !value.value) {
      errorArray.push(field);
      subjectField.classList.add("error");
      subjectField.addEventListener("input", function (e) {
        if (e.target.value.length > 0) {
          e.target.classList.remove("error");
        }
      });
    }

    if (field == "message" && !value.value) {
      errorArray.push(field);
      messageField.classList.add("error");
      messageField.addEventListener("input", function (e) {
        if (e.target.value.length > 0) {
          e.target.classList.remove("error");
        }
      });
    }
  } // if the recaptcha is not checked, add


  if (!recaptchaChecked) {
    errorArray.push("captcha");
  } // if the error array contains items, remove the existing message and add a new one


  if (errorArray.length > 0) {
    // removes any existing message before adding a new one
    if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
      formMsg.className = "form-message";
    } // adds a new error message using the error array


    addErrorMessage(errorArray);
    return false;
  } else {
    console.log(errorArray);
    return true;
  }
} // event listener for the button, 


submitContact.addEventListener('click', function (e) {
  if (!clientValidate()) {
    e.preventDefault();
    scrollToMessage();
  }
});