console.log("Fist one is your answer and the second one is the machine")
let getHumanChoice = prompt("Choose your option")
if (getHumanChoice.toLowerCase() === "rock") {
    getHumanChoice = "Rock";
} else if (getHumanChoice.toLowerCase() === "paper") {
    getHumanChoice = "Paper";
} else if (getHumanChoice.toLowerCase() === "scissors") {
    getHumanChoice = "Scissors";
} else {
    getHumanChoice = "Please select a valid option";
}

let randomNumber = Math.floor(Math.random() * 3) + 1;
function getComputerChoice (randomNumber) {
    if (randomNumber === 1) {
        return ("Rock");
    } else if (randomNumber === 2) {
        return ("Paper");
    } else if (randomNumber === 3) {
        return ("Scissors");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice(randomNumber);

playRound(humanSelection, computerSelection);

console.log(humanSelection);
console.log(computerSelection);