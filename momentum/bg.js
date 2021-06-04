const body = document.querySelector('body');
const imgNum = 8;

function paintImage(num) {
  const image = document.createElement('img');
  image.src = `img/${num}.jpg`;
  image.classList.add('bg-image');
  body.appendChild(image);
}

function getNumber() {
  const number = Math.ceil(Math.random() * imgNum);
  return number;
}

function init() {
  const randomNumber = getNumber();
  paintImage(randomNumber);
}

init();
