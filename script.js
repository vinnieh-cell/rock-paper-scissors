console.log("Hello World");

// Step 2: Get the computer's choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Get the human player's choice
function getHumanChoice() {
  const input = prompt("Enter your choice: Rock, Paper, or Scissors");
  return input.toLowerCase();
}

// Step 4 & 5: Track score and play one round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

// Step 6: Play the full game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const winner = playRound(humanChoice, computerChoice);

    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  }

  console.log(`\nFinal Score: You ${humanScore} - ${computerScore} Computer`);

  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 The computer wins the game.");
  } else {
    console.log("🤝 It's a draw.");
  }
}

playGame();
