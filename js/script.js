const item = document.querySelectorAll(".box");
const item_8 = document.querySelectorAll(".box:nth-child(8)");
const item_d = document.querySelectorAll(".item_d");
const popUp = document.querySelector(".popup");
const arrowLeft = popUp.querySelector("i.fas.fa-arrow-left");
const arrowRight = popUp.querySelector("i.fas.fa-arrow-right");
const contents = document.querySelector(".contents");
const design = document.querySelector("div.box.design");
const publishing = document.querySelector("div.box.publishing");
const header = document.querySelector("#wrapper > header");
const aObj = header.querySelectorAll("nav> ul > li >a");
const bg = document.querySelector(".bg");
const btn_x = bg.querySelector("i.fas.fa-times");
// const all = document.querySelector(".btn-all");
const btn_design = document.querySelector(".btn-design");
const btn_publishing = document.querySelector(".btn-publishing");
const btn_portfolio = document.querySelectorAll(".btn");
const open_menu = document.querySelector("#open-menu");
const nav = document.querySelector("#open-menu > ul");
const btnObj = open_menu.querySelector("button");
const btn_menu = open_menu.querySelector("i");
const btnTop = document.querySelector("button.top-btn");
let current = 0;
let idxPos = 0;

const arrowRightEvent = () => {
  // console.log("right:" + idxPos);
  item_d[idxPos].style.display = "none";
  idxPos++;
  if (idxPos === 7) idxPos = 8;
  if (idxPos === item_d.length) idxPos = 0;
  item_d[idxPos].style.display = "block";
  item_d[idxPos].scrollTop = 0;
};
const arrowLeftEvent = () => {
  // console.log("left:" + idxPos);
  item_d[idxPos].style.display = "none";
  idxPos--;
  if (idxPos === 7) idxPos = 6;
  if (idxPos === -1) {
    idxPos = 11;
  }
  item_d[idxPos].style.display = "block";
  item_d[idxPos].scrollTop = 0;
};
const arrowEvent = () => {
  arrowRight.addEventListener("click", arrowRightEvent);
  arrowLeft.addEventListener("click", arrowLeftEvent);
};
const clickAtagChangeEvent = () => {
  for (let obj of aObj) {
    obj.addEventListener("click", function () {
      const aPresent = document.querySelector(".present");
      aPresent.classList.remove("present");
      this.classList.add("present");
    });
  }
};
const scrollEvent = () => {
  // console.log("pageYOffset : " + pageYOffset);
  if (document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
  const topObj = header.getBoundingClientRect().top;
  if (document.documentElement.scrollTop > topObj) {
    header.classList.add("sticky");
    if (window.innerWidth < 1024) {
      header.classList.remove("sticky");
    }
  } else {
    header.classList.remove("sticky");
  }
};
const showMenu = () => {
  btnObj.addEventListener("click", function () {
    if (current) {
      //open
      btn_menu.classList.remove("fa-bars");
      btn_menu.classList.add("fa-times");
      nav.style.transform = `translateY(0)`;
      current = 0;
    } else {
      //close
      btn_menu.classList.remove("fa-times");
      btn_menu.classList.add("fa-bars");
      nav.style.transform = `translateY(-400px)`;
      current = 1;
    }
  });
};
const closeDetail = () => {
  btn_x.addEventListener("click", function () {
    for (let detail of item_d) {
      detail.style.display = "none";
      bg.style.display = "none";
      popUp.style.display = "none";
      header.style.display = "block";
      // document.querySelector("#wrapper").style.overflowY = "scroll";
      // document.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
    }
  });
};
const showDirectory = () => {
  for (let obj of btn_portfolio) {
    obj.addEventListener("click", function () {
      // console.log("?:" + this);
      const highlight = document.querySelector(".highlight");
      highlight.classList.remove("highlight");
      this.classList.add("highlight");
    });
  }
  contents.style.display = "flex";
  for (let i = 0; i < item.length; i++) {
    let index = item[i].getAttribute("data-value");
    if (index > 7) {
      item[index].style.display = "block";
    } else {
      item[index].style.display = "none";
    }
  }

  btn_design.addEventListener("click", function () {
    design.style.display = "block";
    const turquoise = document.querySelector(".turquoise");
    turquoise.classList.remove("turquoise");
    this.classList.add("gold");
    for (let i = 0; i < item.length; i++) {
      const index = item[i].getAttribute("data-value");
      if (index < 8) {
        item[index].style.display = "flex";
      } else {
        item[index].style.display = "none";
      }
    }
    // design.style.width = "90%";
    // design.style.flexDirection = "row";
    // design.style.width = "80%";
    // publishing.style.display = "none";
  });
  btn_publishing.addEventListener("click", function () {
    // console.log(design);
    const gold = document.querySelector(".gold");
    gold.classList.remove("gold");
    this.classList.add("turquoise");
    for (let i = 0; i < item.length; i++) {
      let index = item[i].getAttribute("data-value");
      if (index > 7) {
        item[index].style.display = "block";
      } else {
        item[index].style.display = "none";
      }
    }
    // design.style.display = "none";
    // publishing.style.width = "90%";
    // publishing.style.display = "flex";
    // publishing.style.flexDirection = "row";
  });
};
const showDetail = () => {
  for (let obj of item) {
    obj.addEventListener("mouseover", function () {
      // console.log("modal: " + this);
      const index = Number(this.getAttribute("data-value"));
      const openModal = item[index];
      const subject = openModal.querySelector("span");
      if (index < 7) {
        openModal.style.borderColor = "turquoise";
        subject.style.backgroundColor = "turquoise";
      } else if (index === 7) {
        openModal.style.borderColor = "#777";
        subject.style.backgroundColor = "#777";
      } else {
        openModal.style.borderColor = "gold";
        subject.style.backgroundColor = "gold";
      }
    });
    obj.addEventListener("mouseout", function () {
      // console.log("modal: " + this);
      const index = Number(this.getAttribute("data-value"));
      const openModal = item[index];
      const subject = openModal.querySelector("span");
      if (index < 7) {
        openModal.style.borderColor = "gold";
        subject.style.backgroundColor = "gold";
      } else if (index === 7) {
        openModal.style.borderColor = "#777";
        subject.style.backgroundColor = "#777";
      } else {
        openModal.style.borderColor = "turquoise";
        subject.style.backgroundColor = "turquoise";
      }
    });
    obj.addEventListener("click", function (e) {
      popUp.style.display = "block";

      for (let i = 0; i < item_d.length; i++) {
        // console.log("showDetail:", this);
        const index = Number(this.getAttribute("data-value"));
        const objs = item_d[index];
        idxPos = index;
        if (index === 7) {
          popUp.style.display = "none";
          bg.style.display = "none";
          return false;
        }

        // const title = objs.querySelector("h1");
        // console.log("detail:" + objs);
        // const behavior = false;
        // objs.style.top = pageYOffset + "px";
        objs.style.display = "block";
        objs.scrollTop = 0;
        // popUp.style.zIndex = "307";
        bg.style.display = "block";
        header.style.display = "none";
        document.body.style.overflowY = "hidden";
        // if (index > 7) {
        //   title.style.backgroundColor = "turquoise";
        // } else {
        //   title.style.backgroundColor = "gold";
        // }
      }
    });
  }
};
const init = () => {
  arrowEvent();
  clickAtagChangeEvent();
  window.addEventListener("scroll", scrollEvent);
  showMenu();
  showDirectory();
  showDetail();
  closeDetail();
  header.style.zIndex = "307";
};

let pageCount = 0;
let scrollPosition = 0;
const bodyObj = document.querySelector("#wrapper");
const itemDeLength = document.querySelectorAll(".item_d").length;
// console.log("itemDs Length: " + itemDeLength);
bodyObj.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
    // console.log("wheel:" + e.target);
    // console.log('e.deltaY:' + e.deltaY);
    if (e.deltaY < 0) {
      //위로
      if (pageCount <= 0) return; // return 나가버림-_-;; break; 멈춤하고 다시 돌아감
      pageCount--;
    }
    if (e.deltaY > 0) {
      //아래로
      if (pageCount >= 3) return;
      pageCount++;
    }
    // console.log(pageCount);
    scrollPosition = pageCount * window.innerHeight;
    window.scrollTo({ left: 0, top: scrollPosition, behavior: "smooth" });

    const aObj = header.querySelectorAll("nav > ul > li a");
    const activeObj = header.querySelector(".present");
    activeObj.classList.remove("present");
    aObj[pageCount].classList.add("present");
  },
  { passive: false }
);

const scrollPageEvent = () => {
  // console.log("scroll Page Event function");
  pageCount = 0;
  scrollPosition = 0;
  window.scrollTo(0, 0);
  // console.log("current=", pageCount);
};
btnTop.addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  pageCount = 0;
});
window.addEventListener("beforeunload", scrollPageEvent);
scrollPageEvent();
init();
