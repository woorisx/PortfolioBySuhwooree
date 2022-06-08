const btnTop = document.querySelector(".btn_top");
const hiddenMenu = document.querySelector(".hidden-menu");
const btnMenu = hiddenMenu.querySelector("i");
const popUpImg = document.querySelector(".popup");
const btnClose = popUpImg.querySelector("i");
const imgElem = document.querySelectorAll(".box");
const bgEffect = document.querySelector(".bg");
const frameImg = document.querySelector(".frame-img");

let current = 0;

const scrollEvent = () => {
  if (document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};
const init = () => {
  btnTop.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });

  for (let obj of imgElem) {
    obj.addEventListener("click", function () {
      bgEffect.style.display = "block";
      popUpImg.style.display = "block";
      // popUpImg.style.top=pageYOffset+'px';
      // console.log(this);
      const imgTag = document.createElement("img");
      const iSrc = this.children[0].getAttribute("src");
      imgTag.style.width = "100%";
      imgTag.setAttribute("src", iSrc);
      frameImg.append(imgTag);
      // console.log(frameImg);
      if (frameImg.children.length > 1) {
        frameImg.removeChild(frameImg.children[0]);
      }
    });
  }
  btnClose.addEventListener("click", function () {
    popUpImg.style.display = "none";
    bgEffect.style.display = "none";
  });
  btnMenu.addEventListener("click", function () {
    if (current) {
      //open
      btnMenu.classList.remove("fa-bars");
      btnMenu.classList.add("fa-times");
      hiddenMenu.children[1].style.display = "block";
      current = 0;
    } else {
      //close
      btnMenu.classList.remove("fa-times");
      btnMenu.classList.add("fa-bars");
      hiddenMenu.children[1].style.display = "none";
      current = 1;
    }
  });
  window.addEventListener("scroll", scrollEvent);
};
init();
