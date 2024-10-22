let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
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

function playRound(computerChoice, humanChoice) {
    if (roundsPlayed < 5) {
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

        roundsPlayed++

    } else {
        checkScores()
    }

    
}

function checkScores() {
    if (humanScore > computerScore) {
        alert("Congrats, you won!");
    } else if (humanScore < computerScore) {
        alert("Unlucky, you lost!");
    } else if (humanScore === computerScore) {
        alert("Wow, you tied!");
    }
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

const home = document.querySelector("#home");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const runningTotal = document.createElement('div');
rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorsBtn.textContent = "scissors";
home.appendChild(rockBtn);
home.appendChild(paperBtn);
home.appendChild(scissorsBtn);
home.appendChild(runningTotal);

home.addEventListener('click', (event) => {
    const playerChoice = event.target.textContent;
    playRound(getComputerChoice(), playerChoice);
    runningTotal.textContent = 'Human score: ' + humanScore + ' Computer score: ' + computerScore + ' Rounds played: ' +roundsPlayed;
})