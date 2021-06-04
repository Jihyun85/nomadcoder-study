const greeting = document.querySelector('.js-greeting');
const nameForm = document.querySelector('.js-name-form');
const nameInput = nameForm.querySelector('input');

function saveName(text) {
  localStorage.setItem('name', text);
}

function handleSubmit(event) {
  event.preventDefault();
  const name = nameInput.value;
  paintGreeting(name);
  saveName(name);
}

function paintGreeting(text) {
  nameForm.classList.remove('showing');
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentValue = localStorage.getItem('name');
  if (currentValue === null) {
    nameForm.classList.add('showing');
    nameForm.addEventListener('submit', handleSubmit);
  } else {
    paintGreeting(currentValue);
  }
}

function init() {
  loadName();
}

init();
