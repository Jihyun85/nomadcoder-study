const greetingText = document.querySelector(".jsGreetingText");
const greetingForm = document.querySelector(".jsGreetingForm");
const greetingInput = document.querySelector(".jsGreetingInput");

const clock = document.querySelector(".jsClock");
const toDos = document.querySelector(".jsToDos");

const LS_NAME = "userName";

const showContent = () => {
  clock.classList.remove("hidden");
  toDos.classList.remove("hidden");
};

const handleSubmit = (e) => {
  e.preventDefault();
  const inputName = greetingInput.value;
  localStorage.setItem(LS_NAME, inputName);
  paintName(inputName);
  showContent();
};

const paintName = (name) => {
  greetingText.innerText = `Hello, ${name}`;
  greetingInput.style.display = "none";
};

const loadName = () => {
  const userName = localStorage.getItem(LS_NAME);
  if (userName === null) {
    greetingForm.addEventListener("submit", handleSubmit);
  } else {
    paintName(userName);
    showContent();
  }
};

const init = () => {
  loadName();
};

init();
