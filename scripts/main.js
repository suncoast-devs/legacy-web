'use strict';

var inputs = document.querySelectorAll('input');
var closeButtons = document.querySelectorAll('.nevermind, header .thanks button');
var header = document.querySelector('header');
var form = document.querySelector('header form');

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
  document.body.classList.remove('invite-modal', 'thanks');
};

var handleCloseButton = function handleCloseButton(event) {
  event.preventDefault();
  closeModal();
};

var handleInviteSubmit = function handleInviteSubmit(event) {
  event.preventDefault();
  var submitButton = document.querySelector('.invite');

  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = true;
  }

  var preservedWidth = window.getComputedStyle(submitButton).width;
  submitButton.innerHTML = '<i class="fa fa-cog loading"></i>';
  submitButton.style.width = preservedWidth;

  document.body.classList.add('thanks');
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