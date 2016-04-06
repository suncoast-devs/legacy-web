const inputs = document.querySelectorAll('input');
const closeButtons = document.querySelectorAll('.nevermind, header .thanks button');
const header = document.querySelector('header');
const form = document.querySelector('header form');
const submitButton = document.querySelector('.invite');

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
  submitButton.innerHTML = '<i class="fa fa-check"></i> Okay';
  document.body.classList.remove('invite-modal', 'thanks', 'error');
};

const handleCloseButton = (event) => {
  event.preventDefault();
  closeModal();
};

const handleInviteSuccess = () => {
  document.body.classList.add('thanks');
};

const handleInviteError = (message) => {
  submitButton.innerHTML = '<i class="fa fa-check"></i> Okay';
  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = false;
  }
  document.querySelector('.error p.message').innerHTML = message;
  document.body.classList.add('error');
};

document.querySelector('header .error button[type=submit]').addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.remove('error');
});

const handleInviteSubmit = (event) => {
  event.preventDefault();

  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = true;
  }

  const preservedWidth = window.getComputedStyle(submitButton).width;
  submitButton.innerHTML = '<i class="fa fa-cog loading"></i>';
  submitButton.style.width = preservedWidth;

  try {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://oouple62r7.execute-api.us-east-1.amazonaws.com/production/invite');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(JSON.stringify({
      email: form.emailAddress.value,
      first_name: form.familyName.value,
      last_name: form.givenName.value,
    }));
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        if (data.ok) {
          handleInviteSuccess();
        } else {
          handleInviteError(`Error: ${data.error}`);
        }
      }
    };
  } catch (e) {
    handleInviteError(`Unknown Error: ${e}`);
  }
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
