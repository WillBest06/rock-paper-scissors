let humanScore = 0;
let computerScore = 0;



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

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert("Tie. No points awarded.");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        alert("You win! You have been awarded 1 point");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        alert("You lose! The computer has been awarded 1 point");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        alert("You lose! The computer has been awarded 1 point");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        alert("You win! You have been awarded 1 point");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        alert("You win! You have been awarded 1 point");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        alert("You lose! The computer has been awarded 1 point");
        computerScore++;
    }
}

function playGame() {
    let roundsPlayed = 0;
    
    for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }

    if (humanScore > computerScore) {
        alert("Congrats, you won!");
    } else if (humanScore < computerScore) {
        alert("Unlucky, you lost!");
    } else if (humanScore === computerScore) {
        alert("Wow, you tied!");
    }
}

playGame();