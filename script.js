const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const playerPreview = document.getElementById("player-preview");
const computerPreview = document.getElementById("computer-preview");
const statusMessage = document.getElementById("status-message");
const announcementBar = document.querySelector(".announcement-bar");
const weaponButtons = document.querySelectorAll(".weapon-btn");

let playerScore = 0;
let computerScore = 0;

const weapons = {
  rock: { beats: "scissors", image: "images/rock.png" },
  paper: { beats: "rock", image: "images/paper.png" },
  scissors: { beats: "paper", image: "images/scissors.png" }
};

const runGameLogic = (playerChoice) => {
  const choices = Object.keys(weapons);
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  playerPreview.innerHTML = `<img src="${weapons[playerChoice].image}" alt="${playerChoice}">`;
  computerPreview.innerHTML = `<img src="${weapons[computerChoice].image}" alt="${computerChoice}">`;

  announcementBar.className = "announcement-bar"; 

  if (playerChoice === computerChoice) {
    statusMessage.textContent = `It's a draw! Both chose ${playerChoice}.`;
    announcementBar.classList.add("draw");
  } else if (weapons[playerChoice].beats === computerChoice) {
    statusMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    announcementBar.classList.add("win");
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else {
    statusMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    announcementBar.classList.add("lose");
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
};

weaponButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    runGameLogic(btn.dataset.weapon);
  });
});

window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "r") runGameLogic("rock");
  if (key === "p") runGameLogic("paper");
  if (key === "s") runGameLogic("scissors");
});