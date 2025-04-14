const choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Restart Game";
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type rock, paper or scissors.");
  // reload prompt in case user press cancel
  while (input == null) {
    input = prompt("Type rock, paper or scissors.");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  // reload prompt in case of misspelling
  while (check == false) {
    input = prompt(
      "Type rock, paper or scissors. Spelling must be exact, but capitalization doesnt matter."
    );
    while (input == null) {
      input = prompt("Type rock, paper or scissors.");
    }
    input = input.toLowerCase();
    // restart the function, otherwise check will never be set to true
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties", ties);
}

// display who won each round
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Compuetr Chose:", computerChoice);
  console.log(winner, "won the round!");
  console.log("----------------------------");
}
