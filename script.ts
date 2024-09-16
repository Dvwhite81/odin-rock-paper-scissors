// Choices
type Choice = 'rock' | 'paper' | 'scissors';
const CHOICES: Choice[] = ['rock', 'paper', 'scissors'];
// Variables
let humanScore = 0;
let computerScore = 0;

// Elements
const spanHumanScore = document.getElementById('humanScore');
const spanMessage = document.getElementById('message');
const spanComputerScore = document.getElementById('computerScore');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

const getComputerChoice = () => {
  const index = Math.floor(Math.random() * 3);
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

const updateScoreboard = (result: string) => {
  spanHumanScore.textContent = humanScore.toString();
  spanComputerScore.textContent = computerScore.toString();
  spanMessage.textContent = result;
};

const getRoundWinner = (humanChoice: Choice, computerChoice: Choice) => {
  let result: string;

  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
  ) {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    result = `It's a tie!`;
  }

  updateScoreboard(result);
};

const playRound = (humanChoice: Choice) => {
  const computerChoice = getComputerChoice();
  getRoundWinner(humanChoice, computerChoice);
  checkEndGame();
};

const getGameWinner = () => {
  const finalScore = `${humanScore} to ${computerScore}`;

  if (humanScore > computerScore) {
    return `You won ${finalScore}!`;
  } else {
    return `You lost ${finalScore}!`;
  }
};

const gameIsOver = () => humanScore === 5 || computerScore === 5;

const showModal = (winner: string) => {
  modal.classList.toggle('hidden');
  modalMessage.textContent = winner;
};

const checkEndGame = () => {
  if (gameIsOver()) {
    const winner = getGameWinner();
    showModal(winner);
  }
};

const resetGame = () => {
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
