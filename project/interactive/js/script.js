const processBar = document.querySelector(".process-bar");
const stage = document.querySelector(".stage");
const box = document.querySelector(".box");
const wall = box.querySelectorAll(".wall");
const gnb = document.querySelector("#gnb");
const bg = document.querySelector(".bg");
let contentScroll = 0;
let posX = 0;
let posY = 0;
const zTranslate = [-800, -600, -400, -200, 0, 200, 400];
const zGo = [-700, -500, -300, -100, 100, 300];

const getViewIndex = (curPos) => {
  for (let i = 0; i < zTranslate.length; i++) {
    if (curPos >= zTranslate[i] && zTranslate[i + 1] > curPos) {
      return i;
    }
  }
};
const menuActive = (index) => {
  const prev = document.querySelector(".active");
  prev.classList.remove("active");
  gnb.children[index].classList.add("active");
};
const resizeEvent = () => {
  contentScroll = document.documentElement.scrollHeight - window.innerHeight;
  // console.log(contentScroll);
};

const mouseMoveEvent = (e) => {
  // console.log(e.clientX, e.clientY);
  posX = -1 + (e.clientX / window.innerWidth) * 2;
  posY = 1 - (e.clientY / window.innerHeight) * 2;
  // console.log(posX, posY);
  stage.style.transform = `rotateX(${posY * 10}deg) rotateY(${posX * 10}deg)`;
};

const scrollEvent = () => {
  const totalHeight = document.documentElement.scrollHeight;
  //window.innerHeight는 clientHeight와 같다고 봐도 좋다.
  const clientHeight = document.documentElement.clientHeight;
  const contentHeight = totalHeight - clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const percent = (scrollTop / contentHeight) * 100;
  const scrollPer = pageYOffset / contentHeight;
  processBar.style.width = scrollPer * 100 + "%";

  const zMove = scrollPer * 1000 - 700; //비율로 환산한다.
  // box.style.transform = `translateZ(${zMove}vw)`;

  box.style.transform = "translateZ(" + zMove + "vw)";

  let zPos = getViewIndex(zMove);
  // console.log("zMove =  " + zMove + "  , zPos=" + zPos);
  viewNowWall(zPos);
  menuActive(zPos);
};

const viewNowWall = (idx) => {
  if (idx < wall.length - 1) {
    wall[idx].style.display = "block";
    wall[idx + 1].style.display = "none";
    idx++;
  } else if (idx === 5) {
    wall[idx].style.display = "block";
    idx = 4;
  }
};
const menuClickEvent = (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.tagName === "IMG") {
    const idx = target.getAttribute("href");
    // console.log(idx); // 0부터 시작
    for (let i = 0; i < wall.length; i++) {
      if (i == idx) {
        wall[i].style.display = "block";
      } else {
        wall[i].style.display = "none";
      }
    }
    box.style.transform = "translateZ(" + zGo[idx] + "vw)";

    menuActive(idx);
  }
};
const init = () => {
  resizeEvent();
  viewNowWall(0);
  window.addEventListener("resize", resizeEvent);
  window.addEventListener("scroll", scrollEvent);
  window.addEventListener("mousemove", mouseMoveEvent);
  gnb.addEventListener("click", menuClickEvent);
};
init();
