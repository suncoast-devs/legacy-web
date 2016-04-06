'use strict';

var inputs = document.querySelectorAll('input');
var closeButtons = document.querySelectorAll('.nevermind, header .thanks button');
var header = document.querySelector('header');
var form = document.querySelector('header form');
var submitButton = document.querySelector('.invite');

var positionModal = function positionModal() {
  if (document.body.classList.contains('invite-modal')) {
    var screenHeight = window.innerHeight;
    var headerHeight = header.clientHeight;
    var newTop = (screenHeight - headerHeight) / 2 + 'px';
    header.style.top = newTop;
  }
};

header.addEventListener('transitionend', function () {
  window.requestAnimationFrame(positionModal);
}, false);

var resizeTimeout = void 0;
window.addEventListener('resize', function () {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      positionModal();
    }, 66);
  }
}, false);

var showModal = function showModal() {
  document.body.classList.add('invite-modal');
  positionModal();
};

var closeModal = function closeModal() {
  header.style.top = '0px';
  form.reset();
  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].classList.remove('changed');
    form.elements[i].disabled = false;
  }
  submitButton.innerHTML = '<i class="fa fa-check"></i> Okay';
  document.body.classList.remove('invite-modal', 'thanks', 'error');
};

var handleCloseButton = function handleCloseButton(event) {
  event.preventDefault();
  closeModal();
};

var handleInviteSuccess = function handleInviteSuccess() {
  document.body.classList.add('thanks');
};

var handleInviteError = function handleInviteError(message) {
  submitButton.innerHTML = '<i class="fa fa-check"></i> Okay';
  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = false;
  }
  document.querySelector('.error p.message').innerHTML = message;
  document.body.classList.add('error');
};

document.querySelector('header .error button[type=submit]').addEventListener('click', function (event) {
  event.preventDefault();
  document.body.classList.remove('error');
});

var handleInviteSubmit = function handleInviteSubmit(event) {
  event.preventDefault();

  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = true;
  }

  var preservedWidth = window.getComputedStyle(submitButton).width;
  submitButton.innerHTML = '<i class="fa fa-cog loading"></i>';
  submitButton.style.width = preservedWidth;

  try {
    (function () {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://oouple62r7.execute-api.us-east-1.amazonaws.com/production/invite');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.responseType = 'json';
      xhr.send(JSON.stringify({
        email: form.emailAddress.value,
        first_name: form.familyName.value,
        last_name: form.givenName.value
      }));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.response);
          if (data.ok) {
            handleInviteSuccess();
          } else {
            handleInviteError('Error: ' + data.error);
          }
        }
      };
    })();
  } catch (e) {
    handleInviteError('Unknown Error: ' + e);
  }
};
form.addEventListener('submit', handleInviteSubmit, false);

document.querySelector('.invite-o-matic').addEventListener('click', function (event) {
  event.preventDefault();
  showModal();
}, false);

document.body.addEventListener('click', function (event) {
  if (!header.contains(event.target)) {
    closeModal();
  }
}, true);

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', handleCloseButton);
}

for (var _i = 0; _i < inputs.length; _i++) {
  inputs[_i].addEventListener('change', function (event) {
    var input = event.target;
    if (input.value !== '') {
      input.classList.add('changed');
    } else {
      input.classList.remove('changed');
    }
  });
}