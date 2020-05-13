let userHand = "";
let computerHand = "";
const hands = ["ROCK", "SCISSORS", "PAPER"];

const setUserHand = () => {
  const buttons = document.querySelectorAll("button");
  const userImg = document.querySelector(".user_hand");
  for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", (event) => {
      console.log(`${buttons[i].innerText} Clicked!`);
      userHand = buttons[i].innerText;
      userImg.src = `assets/${userHand}.png`;
      computerHand = shuffleHand();
    });
  }
};
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 150));
}

const shuffleHand = async () => {
  const img = document.querySelector(".computer_hand");
  let computerHand = "";
  for (let i = 0; i < 25; i++) {
    computerHand = await setcomputerHand();
    console.log(computerHand);
    img.src = `assets/${computerHand}.png`;
  }
  return computerHand;
};

const setcomputerHand = async () => {
  await delay();
  return hands[Math.floor(Math.random() * hands.length)];
};

const init = () => {
  setUserHand();
};

init();
