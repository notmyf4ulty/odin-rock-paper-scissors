/*

    giveIntro() - present to the player what's the game about
    Repeat 5 times the following:
        presentQuestion() - Ask for the value (rock, paper, scissors)
        getUserInput() - Get input from the user
        parseUserInput() - Parse the input (process further / report error)
        generateComputerValue() - Generate computer value
        compareUserWithComputerValues() - Compare it with generated value
        saveSingleGameResult() - Score point to either player
    presentGameResult() - present results to the player

*/

const ROUNDS_NUMBER = 5;

const CHOICE_ROCK = 'ROCK';
const CHOICE_PAPER = 'PAPER';
const CHOICE_SCISSORS = 'SCISSORS';
const VALID_CHOICES = [CHOICE_ROCK, CHOICE_PAPER, CHOICE_SCISSORS];
const WHAT_BEATS_WHAT = {
    CHOICE_ROCK: CHOICE_SCISSORS,
    CHOICE_PAPER: CHOICE_ROCK,
    CHOICE_SCISSORS: CHOICE_PAPER
};

giveIntro();
for (let i = 0 ; i < ROUNDS_NUMBER ; i++) {
    playSingeGame();
}

function giveIntro() {
    alert(`
Welcome to the Rock, Paper and Scissors.
It's a simple game where you pick one of the options and play against the computer.

Rules:
- ${ROUNDS_NUMBER} rounds
- each won run gives you 1 point
- the player with higher amount of points wins
    `);
}

function playSingeGame() {
    let playerChoice = promptForChoice().toString().toUpperCase();
    console.log('playerChoice: ' + playerChoice);
    if (isChoiceValid(playerChoice)) {
        let computerChoice = shuffleComputerChoice();
        console.log('computerChoice: ' + computerChoice);
    }
}

function promptForChoice() {
    return prompt('Make your choice (rock, paper, scissors): ');
}

function isChoiceValid(input) {
    inputUpper = input;
    return VALID_CHOICES.includes(inputUpper);
}

function shuffleComputerChoice() {
    let choiceIndex = parseInt(Math.floor(Math.random() * 3));
    return VALID_CHOICES[choiceIndex];
}