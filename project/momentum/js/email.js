const popup = document.querySelector(".popup");
const btn = document.querySelector(".email");
const close = document.querySelector("#close");

const sendEmailEvent = () => {};

const closeEvent = () => {
  popup.classList.add("popup");
};

const newEmailEvent = () => {
  popup.classList.remove("popup");
  close.addEventListener("click", closeEvent);
};

btn.addEventListener("click", newEmailEvent);
