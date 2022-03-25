// global work.
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
let gameChance = 5;

for (let i = 0; i < gameChance; i++) {
  let playerSelection = userChoice();
  let computerGuess = computerChoice();
  console.log("\n");
  console.log(compareComputerAndUserChoise(computerGuess, playerSelection));

  console.log("Computer score: " + computerScore);
  console.log("Player Score: " + playerScore);
  console.log("Tie happend: " + tieScore);
  console.log(`Chance remaning ${gameChance - (i + 1)} out of 5`);
}

if (computerScore > playerScore) {
  console.log("Computer Is the winer!");
} else if (playerScore > computerScore) {
  console.log("Congratulation your are the winer!");
} else {
  console.log("The game id draw!");
}
// end -- global work

//  Get input string input from user and validate it.
function userChoice() {
  let userGuess;
  let breakLoop = false;
  do {
    userGuess = prompt(`Enter your word: `);
    if (typeof userGuess === "string") {
      userGuess = userGuess.toLowerCase();
    }

    if (
      userGuess === "rock" ||
      userGuess === "paper" ||
      userGuess === "scissor"
    ) {
      breakLoop = true;
    }
  } while (breakLoop === false);
  return userGuess;
}

//  Make computer choose a random word between Rock Paper Scissor.
function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

//  Compare computer and user word.
function compareComputerAndUserChoise(computerValue, playerValue) {
  if (computerValue === "rock" && playerValue === "paper") {
    playerScore++;
    return "You win: Paper beats rock";
  } else if (computerValue === "rock" && playerValue === "scissor") {
    computerScore++;
    return "You lose: Rock beats Scissor";
  } else if (computerValue === "paper" && playerValue === "rock") {
    computerScore++;
    return "You lose: Paper beats rock";
  } else if (computerValue === "paper" && playerValue === "scissor") {
    playerScore++;
    return "You win: Scissor beats paper";
  } else if (computerValue === "scissor" && playerValue === "rock") {
    playerScore++;
    return "You Win: Rock beats Scissor";
  } else if (computerValue === "scissor" && playerValue === "paper") {
    computerScore++;
    return "You Lose: Scissor beats paper";
  } else if (computerValue === playerValue) {
    tieScore++;
    return "It's a tie: Value is the same :" + computerValue;
  }
}

//  Repeat the game 5 times. keep track of who wins and how many times.
