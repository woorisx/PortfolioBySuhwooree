const formElem = document.querySelector("#wrapper > .todoList > #addItem");
const ulElem = document.querySelector("#wrapper > .todoList > #unList");
const inputElem = document.querySelector(
  "#wrapper > .todoList > #addItem > input"
);
// [{id:length+1 ,value:input.value},{id: ,value:input.value},{id: ,value:input.value}..];
// id : Date.now()
// id : length x
const TODOLIST_KEY = "toDos";
let toDos = [];

const saveToDoStorage = () => {
  const strToDo = JSON.stringify(toDos);
  localStorage.setItem(TODOLIST_KEY, strToDo);
};

const saveToDo = (num, item) => {
  const newObj = {
    id: num,
    value: item,
  };
  toDos.push(newObj);
  saveToDoStorage();
};

const addList = (id, item) => {
  const btn = document.createElement("button");
  const span = document.createElement("span");
  const li = document.createElement("li");
  li.id = id; // id부여

  btn.innerText = "❌";
  span.innerText = item;

  li.append(btn);
  li.append(span);
  ulElem.append(li);
  btn.addEventListener("click", removeItem);
  saveToDo(li.id, item);
};

const removeItem = (e) => {
  const delObj = e.target.parentElement;
  const delId = delObj.id;
  delObj.remove();
  toDos = toDos.filter((item) => {
    return item.id !== delId;
  });
  saveToDoStorage();
};

const todoSubmitEvent = (e) => {
  e.preventDefault();
  const item = inputElem.value;
  inputElem.value = "";
  addList(Date.now(), item); // Date객체는 브라우저에 내장돼있다.
};

const loadTodoStorage = () => {
  const loadToDos = localStorage.getItem(TODOLIST_KEY);
  if (loadToDos) {
    const objToDos = JSON.parse(loadToDos);
    objToDos.forEach((item) => {
      addList(item.id, item.value);
    });
  }
};

loadTodoStorage();
formElem.addEventListener("submit", todoSubmitEvent);
