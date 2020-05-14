let userHand = "";
let computerHand = "";
const hands = ["ROCK", "SCISSORS", "PAPER"];

const setUserHand = () => {
  const buttons = document.querySelectorAll("button");
  const userImg = document.querySelector(".user_hand");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      userHand = buttons[i].innerText;
      userImg.src = `assets/${userHand}.png`;
      computerHand = setcomputerHand();
      const result = compare(userHand, computerHand);
      setScore(result);
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
  if (userHand === computerHand) {
    console.log("DRAW!");
    return 0;
  } else {
    if (userHand === "ROCK" && computerHand === "SCISSORS") return 1;
    else if (userHand === "SCISSORS" && computerHand === "PAPER") return 1;
    else if (userHand === "PAPER" && computerHand === "ROCK") return 1;
    else return -1;
  }
};

const setcomputerHand = () => {
  const img = document.querySelector(".computer_hand");
  const computerHand = randomChoice();
  img.src = `assets/${computerHand}.png`;
  return computerHand;
};

const randomChoice = () => hands[Math.floor(Math.random() * hands.length)];

const init = () => {
  setUserHand();
};

init();
