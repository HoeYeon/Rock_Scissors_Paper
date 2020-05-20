let userHand = "";
let computerHand = "";
const hands = ["ROCK", "SCISSORS", "PAPER"];

const setHands = () => {
  const buttons = document.querySelectorAll("button");
  const userImg = document.querySelector(".user_hand");
  const computerImg = document.querySelector(".computer_hand");

  // 애니메이션 초기화 시켜주면서 계속 애니메이션 실행가능
  computerImg.addEventListener("animationend", () => {
    computerImg.style.animation = "";
    computerImg.src = `assets/${computerHand}.png`;
  });
  userImg.addEventListener("animationend", () => {
    userImg.style.animation = "";
    userImg.src = `assets/${userHand}.png`;
    setScore(compare(userHand, computerHand));
  });
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      userHand = buttons[i].innerText;
      computerHand = setcomputerHand();
      computerImg.style.animation = "shakeComputer 2s ease";
      userImg.style.animation = "shakeUser 2s ease";
    });
  }
};

const setScore = (result) => {
  const who = document.querySelector(".who_win");
  const userScore = document.querySelector(".user_score");
  const computerScore = document.querySelector(".computer_score");
  if (result === 0) who.innerText = "DRAW!";
  else if (result === 1) {
    who.innerText = "Player Win!";
    userScore.innerText++;
  } else {
    who.innerText = "Computer Win!";
    computerScore.innerText++;
  }
};
const compare = (userHand, computerHand) => {
  if (userHand === computerHand) return 0;
  else {
    if (userHand === "ROCK" && computerHand === "SCISSORS") return 1;
    else if (userHand === "SCISSORS" && computerHand === "PAPER") return 1;
    else if (userHand === "PAPER" && computerHand === "ROCK") return 1;
    else return -1;
  }
};

const setcomputerHand = () => hands[Math.floor(Math.random() * hands.length)];

function preloading(imageArray) {
  let n = imageArray.length;
  for (let i = 0; i < n; i++) {
    const userImg = new Image();
    const computerImg = new Image();
    userImg.src = imageArray[i];
    computerImg.src = imageArray[i];
  }
}

const init = () => {
  setHands();
  preloading(["assets/PAPER.png", "assets/ROCK.png", "assets/SCISSORS.png"]);
};
init();
