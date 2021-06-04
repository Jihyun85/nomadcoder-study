const body = document.querySelector("body");

const bgAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const changeBackground = () => {
  let random = Math.ceil(Math.random() * 14);
  body.style.backgroundImage = `url("img/background/${random}.jpg")`;
};

const init = () => {
  changeBackground();
};

init();
