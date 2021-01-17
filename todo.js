const toDoForm = document.querySelector('.js-todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-todo-list');

const toDosLS = 'toDos';

let newId = 1;

let toDosAry = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDosAry.filter((toDo) => toDo.id !== parseInt(li.id));
  toDosAry = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(toDosLS, JSON.stringify(toDosAry));
}

function paintToDos(text) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const span = document.createElement('span');
  const id = newId;
  newId += 1;
  btn.innerText = '🔺';
  btn.addEventListener('click', deleteToDo);
  span.innerText = text;
  li.appendChild(btn);
  li.appendChild(span);
  li.id = id;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: id,
  };
  toDosAry.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = '';
  paintToDos(currentValue);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(toDosLS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((todo) => paintToDos(todo.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
