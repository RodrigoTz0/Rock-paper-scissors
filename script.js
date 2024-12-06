console.log("Fist one is your answer and the second one is the machine")
let getHumanChoice = prompt("Choose your option")
if (getHumanChoice.toLowerCase() === "rock") {
    console.log("Rock");
} else if (getHumanChoice.toLowerCase() === "paper") {
    console.log("Paper");
} else if (getHumanChoice.toLowerCase() === "scissors") {
    console.log("Scissors");
} else {
    console.log("Please select a valid option");
}

let randomNumber = Math.floor(Math.random() * 3) + 1;
function getComputerChoice (randomNumber) {
    if (randomNumber === 1) {
        return console.log("Rock");
    } else if (randomNumber === 2) {
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}
console.log(getComputerChoice(randomNumber));