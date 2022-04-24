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

let gen = Math.floor(Math.random() * (pick.length - 0) + 0);

for (let i = 0; i <= gen; i++) {
  pick[i].style.opacity = ".5";
  pick[8].style.opacity = "1";
  pick[9].style.opacity = "1";
  pick[4].style.opacity = "1";
  pick[15].style.opacity = "1";
  pick[30].style.opacity = "1";
  pick[66].style.opacity = "1";

  pick[108].style.opacity = "1";
  pick[129].style.opacity = "1";
  pick[134].style.opacity = "1";
  pick[155].style.opacity = "1";
  pick[160].style.opacity = "1";
  pick[196].style.opacity = "1";

  pick[208].style.opacity = "1";
  pick[229].style.opacity = "1";
  pick[254].style.opacity = "1";
  pick[275].style.opacity = "1";
  pick[290].style.opacity = "1";
  pick[301].style.opacity = "1";

  pick[318].style.opacity = "1";
  pick[329].style.opacity = "1";
  pick[354].style.opacity = "1";
  pick[370].style.opacity = "1";
  pick[390].style.opacity = "1";
  pick[406].style.opacity = "1";

  pick[420].style.opacity = "1";
  pick[440].style.opacity = "1";
  pick[460].style.opacity = "1";
  pick[476].style.opacity = "1";
  pick[4].style.opacity = "1";
  pick[15].style.opacity = "1";
}
