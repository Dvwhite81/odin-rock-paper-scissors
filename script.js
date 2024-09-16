var CHOICES = ['rock', 'paper', 'scissors'];
var humanScore = 0;
var computerScore = 0;
var roundsPlayed = 0;
var getComputerChoice = function () {
    var index = Math.floor(Math.random() * 3);
    return CHOICES[index];
};
var isValidChoice = function (choice) {
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return true;
    }
    else {
        return false;
    }
};
var getHumanChoice = function () {
    var choice = prompt('Make your choice: Rock, Paper, or Scissors', 'rock').toLowerCase();
    if (isValidChoice(choice)) {
        return choice;
    }
    else {
        alert('Invalid choice. Please type rock, paper, or scissors.');
        return getHumanChoice();
    }
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
    return result;
};
var playRound = function () {
    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice();
    var roundWinner = getRoundWinner(humanChoice, computerChoice);
    console.log('ROUND WINNER:', roundWinner);
    roundsPlayed++;
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
var resetGame = function () {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
};
var playGame = function () {
    for (var i = 0; i < 5; i++) {
        playRound();
    }
    var gameWinner = getGameWinner();
    console.log('GAME WINNER:', gameWinner);
    resetGame();
    if (prompt('Play again? Type Y or N').toLowerCase() === 'y') {
        playGame();
    }
};
playGame();
