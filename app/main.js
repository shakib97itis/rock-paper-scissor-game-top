// Dom manipulation
const startBtns = document.querySelectorAll(".start-btn");
const startScreen = document.querySelector(".start-screen-container");
const mainScreen = document.querySelector(".main-screen-container");
const endScreen = document.querySelector(".end-screen-container");
const domPlayerScore = document.querySelector(".player-score");
const domComputerScore = document.querySelector(".computer-score");
// Changing Game screens
startBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    startScreen.classList.add("d-none");
    mainScreen.classList.remove("d-none");
    endScreen.classList.add("d-none");
    computerScore = 0;
    playerScore = 0;
    domComputerScore.textContent = computerScore;
    domPlayerScore.textContent = playerScore;
  });
});

// Calling game play functions
const buttons = document.querySelectorAll(".rps-icon-container > .rps-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    compareComputerAndUserChoice(computerChoice(), userChoice(e, button));
    checkEnd(computerScore, playerScore);
  });
});

// changing icon based on user choice
function userChoice(e, btn) {
  let userIcon = document.querySelector(".card-icon-player");
  let icon = "";
  if (e.target !== btn) {
    icon = e.target;
  } else {
    icon = e.target.children[0];
  }

  userIcon.removeChild(userIcon.children[0]);
  userIcon.appendChild(icon.cloneNode(true));

  return icon.dataset.name;
}

// Computer choosing a random word between rock paper scissor
function computerChoice() {
  const compIconContainer = document.querySelector(".card-icon-comp");
  const compIcon = document.createElement("i");
  let returnValue = "";
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    compIcon.classList.add("fa-solid", "fa-hand-back-fist");
    compIconContainer.removeChild(compIconContainer.children[0]);
    compIconContainer.appendChild(compIcon);
    returnValue = "rock";
  } else if (randomNum === 2) {
    compIcon.classList.add("fa-solid", "fa-hand");
    compIconContainer.removeChild(compIconContainer.children[0]);
    compIconContainer.appendChild(compIcon);
    returnValue = "paper";
  } else {
    compIcon.classList.add("fa-solid", "fa-hand-scissors");
    compIconContainer.removeChild(compIconContainer.children[0]);
    compIconContainer.appendChild(compIcon);
    returnValue = "scissor";
  }

  return returnValue;
}

let computerScore = 0;
let playerScore = 0;

//  Compare computer and user word.
function compareComputerAndUserChoice(computerValue, playerValue) {
  const feedBack = document.querySelector(".feedback")
  if (computerValue === "rock" && playerValue === "paper") {
    playerScore++;
    domPlayerScore.textContent = playerScore;
    feedBack.textContent = "You win: Paper beats rock";
    return;
  } else if (computerValue === "rock" && playerValue === "scissor") {
    computerScore++;
    domComputerScore.textContent = computerScore;
    feedBack.textContent = "You lose: Rock beats Scissor";
    return;
  } else if (computerValue === "paper" && playerValue === "rock") {
    computerScore++;
    domComputerScore.textContent = computerScore;
    feedBack.textContent = "You lose: Paper beats rock";
    return;
  } else if (computerValue === "paper" && playerValue === "scissor") {
    playerScore++;
    domPlayerScore.textContent = playerScore;
    feedBack.textContent = "You win: Scissor beats paper";
    return;
  } else if (computerValue === "scissor" && playerValue === "rock") {
    playerScore++;
    domPlayerScore.textContent = playerScore;
    feedBack.textContent = "You Win: Rock beats Scissor";
    return;
  } else if (computerValue === "scissor" && playerValue === "paper") {
    computerScore++;
    domComputerScore.textContent = computerScore;
    feedBack.textContent = "You Lose: Scissor beats paper";
    return;
  } else if (computerValue === playerValue) {
    feedBack.textContent = "It's a tie"
    return;
  }
}

function checkEnd(computerScore, playerScore) {
  if (computerScore === 5 || playerScore === 5) {
    mainScreen.classList.add("d-none");
    endScreen.classList.remove("d-none");
    const winerMsg = document.querySelector(".winer-msg");
    if (computerScore === 5) {
      winerMsg.textContent = "Oh no you lose!"
    } else {
      winerMsg.textContent = "You Win!"
    }
  }
}
