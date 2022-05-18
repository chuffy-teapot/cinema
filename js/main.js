let popup = document.querySelectorAll(".popup");
let button = document.querySelectorAll(".pop__button");
let slideBtn = document.querySelector(".top__btn");
let slider = document.querySelector(".slider");
let day = document.querySelector(".day")
let night = document.querySelector(".night")
let a;


function colorChange(a) {

  if (a !== "night") {
    document.body.style.backgroundColor = "white"
    document.querySelector(".menu__section").style.borderRight = "1px solid black"
    let logo = document.querySelector(".logo");
    logo.style.color = "#434d57";
    logo.onmouseenter = () => {
      logo.style.color = "black"
    }
    logo.onmouseleave = () => {
      logo.style.color = "#434d57"
    }

    document.querySelector(".form__search").style.backgroundColor = "#99e4e4"

    let items = document.querySelectorAll(".menu__item");

    for (let item of items) {
      item.onmouseenter = () => {
        item.style.backgroundColor = "#99e4e4";
      }
      item.onmouseleave = () => {
        item.style.backgroundColor = "";
      }
    }

    let tabletRate = document.querySelectorAll(".tablet__rating");

    for (let rating of tabletRate) {
      rating.style.color = "black";
    }

    let heading = document.querySelector(".top__text");
    heading.onmouseenter = () => {
      heading.style.color = "#434d57";
    }

    heading.onmouseleave = () => {
      heading.style.color = "";
    }
  }
  else {
    document.body.style.backgroundColor = ""
    document.querySelector(".menu__section").style.borderRight = ""
    let logo = document.querySelector(".logo");
    logo.style.color = "";
    logo.onmouseenter = () => {
      logo.style.color = ""
    }
    logo.onmouseleave = () => {
      logo.style.color = ""
    }

    document.querySelector(".form__search").style.backgroundColor = ""

    let items = document.querySelectorAll(".menu__item");

    for (let item of items) {
      item.onmouseenter = () => {
        item.style.backgroundColor = "";
      }
      item.onmouseleave = () => {
        item.style.backgroundColor = "";
      }
    }

    let tabletRate = document.querySelectorAll(".tablet__rating");

    for (let rating of tabletRate) {
      rating.style.color = "";
    }

    let heading = document.querySelector(".top__text");
    heading.onmouseenter = () => {
      heading.style.color = "";
    }

    heading.onmouseleave = () => {
      heading.style.color = "";
    }
  }
}

day.addEventListener("click", () => {
  slider.style.left = "28px"
  day.style.fontSize = "20px"
  day.style.color = "black"
  night.style.color = "#E0FFFF"
  night.style.fontSize = "16px"

  slideBtn.style.backgroundColor = "#434d57"
  slider.style.backgroundColor = "#E0FFFF"

  a = "day"

  colorChange(a)
})

night.addEventListener("click", () => {
  slider.style.left = ""
  day.style.fontSize = ""
  night.style.fontSize = ""
  day.style.color = ""
  night.style.color = ""

  slideBtn.style.backgroundColor = "";
  slider.style.backgroundColor = "";

  a = "night";

  colorChange(a)
})


for (let index = 0; index < button.length; index++) {
  let buttonNum = button[index];
  buttonNum.addEventListener("click", openPop);

  let popupNum = popup[index];

  function openPop() {
    // popupNum = popup[index]; 
    popupNum.style.display = "Block";
  }

  window.addEventListener("click", closePop);

  function closePop(e) {
    if (e.target == popupNum) {
      popupNum.style.display = "none";
    }
  }
}
