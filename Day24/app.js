let gameSeq = [];
let userSeq = [];
let highScore = [];

const btns = ["red", "green", "blue", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", () => {
  if (!started) {
    h2.innerText = "Game is started";
    started = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let random = Math.floor(Math.random() * 3);
  let randomColor = btns[random];
  let randBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  btnFlash(randBtn);
}

function check(i) {
  if (userSeq[i] === gameSeq[i]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    highScore.push(level);
    h2.innerText = `Game Over! High score is ${Math.max(
      ...highScore
    )}\nYour score is ${level} \n Press any key to restart.`;

    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 500);
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
  }
}

function btnPress() {
  let btn = this;
  let userColor = btn.classList[1];
  btnFlash(btn);
  userSeq.push(userColor);
  check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");

for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
