const toDos = document.querySelector(".jsToDos");
const toDoForm = document.querySelector(".jsToDosForm");
const toDoInput = document.querySelector(".jsToDosInput");
const toDosList = document.querySelector(".jsToDosList");

const LS_TODOS = "todos";

let toDosAry = [];

let toDoId = 0;

const saveToDos = () => {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDosAry));
};

const deleteToDo = (e) => {
  const li = e.target.parentNode;
  toDosList.removeChild(li);
  const cleanToDos = toDosAry.filter((todo) => todo.id !== parseInt(li.id));
  toDosAry = cleanToDos;
  saveToDos();
};

const paintToDos = (value) => {
  const li = document.createElement("li");
  const text = document.createElement("span");
  text.innerText = value;
  const xBtn = document.createElement("button");
  xBtn.innerText = "×";
  xBtn.addEventListener("click", deleteToDo);
  li.appendChild(text);
  li.appendChild(xBtn);
  li.id = toDoId;
  toDosList.appendChild(li);
  const toDoObj = {
    text: value,
    id: toDoId,
  };
  toDoId++;
  toDosAry.push(toDoObj);
  saveToDos();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const todoValue = toDoInput.value;
  toDoInput.value = "";
  paintToDos(todoValue);
};

const loadToDos = () => {
  const currentToDos = JSON.parse(localStorage.getItem(LS_TODOS));
  if (currentToDos) {
    currentToDos.forEach((todo) => paintToDos(todo.text));
  }
};

const init = () => {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
};

if (toDos) {
  init();
}
