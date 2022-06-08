const pElem = document.querySelector("#wrapper > .greeting > p");
const loginForm = document.querySelector("#wrapper >.greeting > #login_id");
const textElem = loginForm.querySelector("input");
const USERNAME_KEY = "username";
const bg = document.getElementById("bg");

const changeBgImgEvent = () => {
  bg.style.backgroundImage =
    "url(img/bg_" + Math.floor(Math.random() * 6) + ".jpg)";
};
const saveUserName = (strInput) => {
  localStorage.setItem(USERNAME_KEY, strInput);
};
const printUserName = (username) => {
  pElem.classList.remove("hidden");
  loginForm.classList.add("hidden");
  pElem.innerText = `Hello ${username},`;
};
const loadUserName = () => {
  return localStorage.getItem(USERNAME_KEY);
};
const submitEvent = (e) => {
  e.preventDefault();
  const username = textElem.value;
  printUserName(username);
  saveUserName(username);
};
const init = () => {
  const username = loadUserName();
  if (username) {
    printUserName(username);
  } else {
    loginForm.addEventListener("submit", submitEvent);
  }
};
setInterval(changeBgImgEvent, 10000);
init();
