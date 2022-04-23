let popup = document.querySelectorAll(".popup");
let button = document.querySelectorAll(".pop__button");

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



let pick = document.querySelectorAll(".picker__item");

let gen = Math.floor(Math.random() * (80 - 0) + 0);

for (let i = 0; i <= gen; i++) {
  pick[i].style.opacity = ".5";
  pick[8].style.opacity = "1";
  pick[9].style.opacity = "1";
  pick[4].style.opacity = "1";
  pick[15].style.opacity = "1";
  pick[30].style.opacity = "1";
  pick[66].style.opacity = "1";
}