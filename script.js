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

const CHOICE_ROCK = 'R';
const CHOICE_PAPER = 'P';
const CHOICE_SCISSORS = 'S';
const VALID_CHOICES = [CHOICE_ROCK, CHOICE_PAPER, CHOICE_SCISSORS];
const WHAT_BEATS_WHAT = {
    CHOICE_ROCK: CHOICE_SCISSORS,
    CHOICE_PAPER: CHOICE_ROCK,
    CHOICE_SCISSORS: CHOICE_PAPER
};
const scoreTable = {
    player: 0,
    computer: 0
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
        scorePoint(playerChoice, computerChoice);
    }
}

function promptForChoice() {
    return prompt(
        `Make your choice:
        - '${CHOICE_ROCK}' for Rock
        - '${CHOICE_PAPER}' for Paper
        - '${CHOICE_SCISSORS}' for Scissors`
    );
}

function isChoiceValid(input) {
    inputUpper = input;
    return VALID_CHOICES.includes(inputUpper);
}

function shuffleComputerChoice() {
    let choiceIndex = parseInt(Math.floor(Math.random() * 3));
    return VALID_CHOICES[choiceIndex];
}

function scorePoint(playerChoice, computerChoice) {
    if (WHAT_BEATS_WHAT[playerChoice] === computerChoice) {
        scoreTable[player]++;
    } else if (WHAT_BEATS_WHAT[computerChoice] === playerChoice) {
        scoreTable[computerChoice]++;
    }
}