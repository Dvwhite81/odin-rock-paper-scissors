type Choice = 'rock' | 'paper' | 'scissors';

const CHOICES: Choice[] = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const getComputerChoice = () => {
  const index = Math.floor(Math.random() * 3);
  return CHOICES[index];
};

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

const getRoundWinner = (humanChoice: string, computerChoice: Choice) => {
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

  return result;
};

const playRound = () => {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  const roundWinner = getRoundWinner(humanChoice, computerChoice);
  console.log('ROUND WINNER:', roundWinner);
  roundsPlayed++;
};

const getGameWinner = () => {
  const finalScore = `${humanScore} to ${computerScore}`;

  if (humanScore > computerScore) {
    return `You won ${finalScore}!`;
  } else {
    return `You lost ${finalScore}!`;
  }
};

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
};

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
