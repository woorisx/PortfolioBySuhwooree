const loginForm = document.querySelector("#loginForm");
const pElem = document.querySelector(".hidden");
const textElem = document.querySelector("input");
const USERNAME_KEY = "username";

const saveEvent = (strInput) => {
  localStorage.setItem(USERNAME_KEY, strInput);
};
const printEvent = () => {
  return localStorage.getItem(USERNAME_KEY);
};

const loadNameEvent = () => {
  const username = textElem.value;
  saveEvent(username);
  return printEvent();
};
const submitEvent = (e) => {
  e.preventDefault();
  const username = loadNameEvent();
  if (username) {
    pElem.classList.remove("hidden");
    loginForm.classList.add("hidden");
    pElem.innerText = `Hello ${username}`;
  } else {
    pElem.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }
};
const init = () => {
  loginForm.addEventListener("submit", submitEvent);
};
init();
