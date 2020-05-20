const GAME_LIST = [
  "crocodile_tooth",
  "dice_roll",
  "rock_scissor_paper",
  "song_guessing",
];

const setGames = () => {
  const games = document.querySelector(".games");
  for (let i in GAME_LIST) {
    const gameWrapper = document.createElement("div");
    gameWrapper.className = "gameWrapper";
    const img = document.createElement("img");
    img.src = `./assets/${GAME_LIST[i]}.png`;
    const game = setLinkWithButton(
      document.createElement("button"),
      GAME_LIST[i]
    );
    gameWrapper.appendChild(img);
    gameWrapper.appendChild(game);
    games.appendChild(gameWrapper);
  }
};
const setLinkWithButton = (button, game) => {
  button.className = game;
  const link = document.createElement("a");
  link.href = `./${button.className}/index.html`;
  link.innerHTML = button.className;
  button.appendChild(link);
  return button;
};

const init = () => {
  setGames();
};

init();
