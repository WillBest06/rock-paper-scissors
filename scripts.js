function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 100);
    let result = null;
    
    if (randomNum > 0 && randomNum <= 33) {
        result = "rock";
    } else if (randomNum > 33 && randomNum <= 66) {
        result = "paper";
    } else if (randomNum > 66 && randomNum <= 99) {
        result = "scissors";
    } 
    return result;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice:");

    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
        return humanChoice;
    } else {
        getHumanChoice();
    }
}
