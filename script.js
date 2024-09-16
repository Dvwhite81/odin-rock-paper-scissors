var CHOICES = ['rock', 'paper', 'scissors'];
// Variables
var humanScore = 0;
var computerScore = 0;
// Elements
var spanHumanScore = document.getElementById('humanScore');
var spanMessage = document.getElementById('message');
var spanComputerScore = document.getElementById('computerScore');
var modal = document.getElementById('modal');
var modalMessage = document.getElementById('modal-message');
var getComputerChoice = function () {
    var index = Math.floor(Math.random() * 3);
    return CHOICES[index];
};
/*
const isValidChoice = (choice: string) => {
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return true;
  } else {
    return false;
  }
};


const getHumanChoice = () => {
  const choice = prompt(
    'Make your choice: Rock, Paper, or Scissors',
    'rock'
  ).toLowerCase();

  if (isValidChoice(choice)) {
    return choice;
  } else {
    alert('Invalid choice. Please type rock, paper, or scissors.');
    return getHumanChoice();
  }
};
*/
var updateScoreboard = function (result) {
    spanHumanScore.textContent = humanScore.toString();
    spanComputerScore.textContent = computerScore.toString();
    spanMessage.textContent = result;
};
var getRoundWinner = function (humanChoice, computerChoice) {
    var result;
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win! ".concat(humanChoice, " beats ").concat(computerChoice);
        humanScore++;
    }
    else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')) {
        result = "You lose! ".concat(computerChoice, " beats ").concat(humanChoice);
        computerScore++;
    }
    else {
        result = "It's a tie!";
    }
    updateScoreboard(result);
};
var playRound = function (humanChoice) {
    var computerChoice = getComputerChoice();
    getRoundWinner(humanChoice, computerChoice);
    checkEndGame();
};
var getGameWinner = function () {
    var finalScore = "".concat(humanScore, " to ").concat(computerScore);
    if (humanScore > computerScore) {
        return "You won ".concat(finalScore, "!");
    }
    else {
        return "You lost ".concat(finalScore, "!");
    }
};
var gameIsOver = function () { return humanScore === 5 || computerScore === 5; };
var showModal = function (winner) {
    modal.classList.toggle('hidden');
    modalMessage.textContent = winner;
};
var checkEndGame = function () {
    if (gameIsOver()) {
        var winner = getGameWinner();
        showModal(winner);
    }
};
var resetGame = function () {
    humanScore = 0;
    computerScore = 0;
    spanHumanScore.textContent = humanScore.toString();
    spanComputerScore.textContent = computerScore.toString();
    spanMessage.textContent = 'Click a button to play!';
    modalMessage.textContent = '';
    modal.classList.toggle('hidden');
};
/*
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  const gameWinner = getGameWinner();
  console.log('GAME WINNER:', gameWinner);
  resetGame();

  if (prompt('Play again? Type Y or N').toLowerCase() === 'y') {
    playGame();
  }
};

playGame();
*/
