console.log("Hello, World!");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random()*(choices.length))];
}

let playerSelection = prompt("Rock, Paper, Scissors?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

const computerSelection = getComputerChoice(choices);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {

  const Lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const Win = `You Win! ${playerSelection} beats ${computerSelection}`;
  const Tie = "It's a tie!";

  if (playerSelection == computerSelection){
    return Tie;
  }
  else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return Lose;
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return Win;
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return Win;
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return Lose;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return Win;
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return Lose;
  }
}

function game() {
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Rock, Paper, Scissors?");
  playerSelection = playerSelection.toLowerCase();
}

for (let i=0; i<2; i++) {
  game();
  console.log("Your Score: " +playerScore);
  console.log("Computer's Score: " +computerScore);
}

if (playerScore > computerScore)
  console.log("You won!");
else
  console.log("Computer won!");