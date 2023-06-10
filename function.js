const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection, computerSelection;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const container = document.getElementById("container");
const userChoice = document.createElement("div");
const computerChoice = document.createElement("div");
container.append(userChoice, computerChoice);

const myScore = document.getElementById("one");
const compScore = document.getElementById("two");

const finalWin = document.getElementById("finalWin");

const reset = document.createElement("button");

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random()*(choices.length))];
}

function updateChoice(button, computerSelect) {
  playerSelection = button;
  computerSelect = getComputerChoice(choices);
  userChoice.textContent = `Your choice is ${button}`;
  computerChoice.textContent = `Computer's choice is ${computerSelection}`;
}

function playRound(playerSelection, computerSelection) {

  const result = document.querySelector('.scores');

  if (playerSelection === computerSelection){
    result.textContent = `Tie match! ${playerSelection} and ${computerSelection} are the same!`;
  }
  else if (playerSelection == "rock" && computerSelection == "paper"
            || playerSelection == "paper" && computerSelection == "scissors"
            || playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    result.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
  }
  else {
    playerScore++;
    result.textContent = `You won! ${playerSelection} beats ${computerSelection}`; 
  }
}

function scores() {
  const final = document.querySelector('.displayResults');
  myScore.textContent = `Your score: ${playerScore}`;
  compScore.textContent = `Computer's score: ${computerScore}`;
  final.append(myScore, compScore);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

rock.addEventListener("click", () => {
  computerSelection = getComputerChoice(choices);
  updateChoice("rock", computerSelection);
  playRound(playerSelection, computerSelection);
  scores();
  displayResults();
})

paper.addEventListener("click", () => {
  computerSelection = getComputerChoice(choices);
  updateChoice("paper", computerSelection);
  playRound(playerSelection, computerSelection);
  scores();
  displayResults();
})

scissors.addEventListener("click", () => {
  computerSelection = getComputerChoice(choices);
  updateChoice("scissors", computerSelection);
  playRound(playerSelection, computerSelection);
  scores();
  displayResults();
})

function displayResults() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore){
      finalWin.textContent = "You won the game!";
    }
    else {
      finalWin.textContent = "Computer won the game!";
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
  // reset.
}