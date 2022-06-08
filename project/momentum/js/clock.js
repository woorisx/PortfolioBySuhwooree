const dateElem = document.querySelector("#wrapper > .date");
const clock = document.querySelector("#wrapper > .clock > h2");
const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const getDateEvent = () => {
  const today = new Date();
  const fullYear = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const dayNum = today.getDay();
  const day = week[dayNum];

  dateElem.innerText = `${fullYear}/${month}/${date} ${day}`;
};
const getClock = () => {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
};

getDateEvent();
getClock();
setInterval(getClock, 1000);
