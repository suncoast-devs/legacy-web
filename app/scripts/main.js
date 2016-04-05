const inputs = document.querySelectorAll('input');
const closeButtons = document.querySelectorAll('.nevermind, header .thanks button');
const header = document.querySelector('header');
const form = document.querySelector('header form');

const positionModal = () => {
  if (document.body.classList.contains('invite-modal')) {
    const screenHeight = window.innerHeight;
    const headerHeight = header.clientHeight;
    const newTop = `${(screenHeight - headerHeight) / 2}px`;
    header.style.top = newTop;
  }
};

header.addEventListener('transitionend', () => {
  window.requestAnimationFrame(positionModal);
}, false);

let resizeTimeout;
window.addEventListener('resize', () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      positionModal();
    }, 66);
  }
}, false);

const showModal = () => {
  document.body.classList.add('invite-modal');
  positionModal();
};

const closeModal = () => {
  header.style.top = '0px';
  form.reset();
  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].classList.remove('changed');
    form.elements[i].disabled = false;
  }
  document.body.classList.remove('invite-modal', 'thanks');
};

const handleCloseButton = (event) => {
  event.preventDefault();
  closeModal();
};

const handleInviteSubmit = (event) => {
  event.preventDefault();
  const submitButton = document.querySelector('.invite');

  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = true;
  }

  const preservedWidth = window.getComputedStyle(submitButton).width;
  submitButton.innerHTML = '<i class="fa fa-cog loading"></i>';
  submitButton.style.width = preservedWidth;

  document.body.classList.add('thanks');
};
form.addEventListener('submit', handleInviteSubmit, false);

document.querySelector('.invite-o-matic').addEventListener('click', (event) => {
  event.preventDefault();
  showModal();
}, false);

document.body.addEventListener('click', (event) => {
  if (!header.contains(event.target)) {
    closeModal();
  }
}, true);

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', handleCloseButton);
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', (event) => {
    const input = event.target;
    if (input.value !== '') {
      input.classList.add('changed');
    } else {
      input.classList.remove('changed');
    }
  });
}
