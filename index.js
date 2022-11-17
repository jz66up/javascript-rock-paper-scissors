function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function getPlayerChoice() {
  let playersWeapon = prompt(
    "What is your weapon? Choose between rock, paper, and scissors"
  );
  return playersWeapon;
}

function playRound() {
  let computersWeapon = getComputerChoice();
  let playersWeapon = getPlayerChoice();
  console.log("Computer's weapon is " + computersWeapon);
  if (computersWeapon == playersWeapon) {
    console.log("Tie");
    return "Tie";
  } else if (
    (playersWeapon == "paper" && computersWeapon == "rock") ||
    (playersWeapon == "rock" && computersWeapon == "scissors") ||
    (playersWeapon == "scissors" && computersWeapon == "paper")
  ) {
    console.log("player wins");
    return "player wins";
  } else {
    console.log("Computer Wins");
    return "Computer Wins";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let index = 0; index < 5; index++) {
    let winner = playRound``();
    if (winner === "player wins") {
      playerScore++;
    }
    if (winner === "Computer Wins") {
      computerScore++;
    }
  }
  console.log("player score = " + playerScore);
  console.log("computer score = " + computerScore);
}

game();
