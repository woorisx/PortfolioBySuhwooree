const UlElem = document.querySelector("#wrapper > .todoList > #unList");
const inputVal = document.querySelector(
  "#wrapper > .todoList > #addItem > input"
);
const toDoForm = document.querySelector("#wrapper > .todoList > #addItem");
const toDos = [];
const TODOLIST_KEY = "toDos";

const saveToDo = (id, item) => {};

const removeToDoList = () => {};
const addToDoList = (id, item) => {
  const btn = document.createElement("button");
  const span = document.createElement("span");
  const li = document.createElement("li");
  li.id = id;

  btn.innerText = "❌";
  li.append(btn);
  span.innerText = item;
  li.append(span);
  UlElem.append(li);

  btn.addEventListener("click", removeToDoList);
  saveToDo(li.id, item);
};

const submitToDoEvent = (e) => {
  e.preventDefault();
  const item = inputVal.value;
  inputVal.value = "";
  addToDoList(Date.now(), item);
};

toDoForm.addEventListener("submit", submitToDoEvent);
