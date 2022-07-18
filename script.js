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

giveIntro();
for (let i = 0 ; i < 5 ; i++) {
    presentQuestion();
}

function giveIntro() {
    alert(`
Welcome to the Rock, Paper and Scissors.
It's a simple game where you pick one of the options and play against the computer.

Rules:
- 5 rounds
- each won run gives you 1 point
- the player with higher amount of points wins
    `);
}

function presentQuestion() {
    let choice = prompt('Make your choice (rock, paper, scissors): ');
}

const choiceRock = 'ROCK';
const choicePaper = 'PAPER';
const choiceScissors = 'SCISSORS';

function isInputValid(input) {
    inputUpper = input.toString().toUpper();
    return [choiceRock, choicePaper, choiceScissors].includes(inputUpper);
}