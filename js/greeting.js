const greetingText = document.querySelector(".jsGreetingText");
const greetingForm = document.querySelector(".jsGreetingForm");
const greetingInput = document.querySelector(".jsGreetingInput");

const LS_NAME = "userName";

const handleSubmit = (e) => {
  e.preventDefault();
  const inputName = greetingInput.value;
  localStorage.setItem(LS_NAME, inputName);
  paintName(inputName);
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
  }
};

const init = () => {
  loadName();
};

init();
