const weather = document.querySelector('.js-weather');
const APIKey = '95e12bf4564df941727f08753e028144';

const coordsLS = 'coords';

function getWeather(lat, lng) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}˚C / ${place}`;
    });
}

function saveCoords(obj) {
  localStorage.setItem(coordsLS, JSON.stringify(obj));
}

function successFn(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coordsObj = {
    lat,
    lng,
  };
  saveCoords(coordsObj);
  getWeather(lat, lng);
}

function errorFn() {
  console.log('좌표 알 수 없음');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(successFn, errorFn);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(coordsLS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.lat, parsedCoords.lng);
  }
}

function init() {
  loadCoords();
}

init();
