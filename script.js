const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "scissors"
    } else {
        return "paper"
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter rock, scissors, or paper").trim().toLowerCase();
}

getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win this round. ${humanChoice} beats ${computerChoice}!`);
        humanScore++
    } else {
        console.log("You lose this round!")
        computerScore++;
    }
}

function playGame() {
    
}