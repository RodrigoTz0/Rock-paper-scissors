console.log("Hello World")
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