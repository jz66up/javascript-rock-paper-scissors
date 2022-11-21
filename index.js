function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

const paperEl = document.querySelector(".paper");
const rockEl = document.querySelector(".rock");
const scissorsEl = document.querySelector(".scissors");
const computerweaponEl = document.querySelector(".computerweapon");
const whowinsEl = document.querySelector(".whowins");
const playerweaponEl = document.querySelector(".playerweapon");
const scoreEl = document.querySelector(".score");
const weaponsEl = document.querySelectorAll(".weapons")

rockEl.addEventListener("click", () => {
  playRound("rock")
  afterwin()
})

paperEl.addEventListener("click", () => {
  playRound("paper")
  afterwin()
  console.log("afterwin");
})

scissorsEl.addEventListener("click", () => {
  playRound("scissors")
  afterwin()
})

let playerScore = 0;
let computerScore = 0;

function playRound(playersWeapon){
  let computersWeapon = getComputerChoice();
  computerweaponEl.innerText = "Computer's weapon is " + computersWeapon;
  playerweaponEl.innerText = "Player's weapon is " + playersWeapon;
  if (computersWeapon == playersWeapon) {
    whowinsEl.innerText = "Tie";
  } else if (
    (playersWeapon == "paper" && computersWeapon == "rock") ||
    (playersWeapon == "rock" && computersWeapon == "scissors") ||
    (playersWeapon == "scissors" && computersWeapon == "paper")
  ) {
    whowinsEl.innerText = "player wins";
    playerScore++;
  } else {
    whowinsEl.innerText = "Computer Wins";
    computerScore++;
  }
  scoreEl.innerText =
    "player score = " +
    playerScore +
    "       " +
    "computer score = " +
    computerScore;
}

function afterwin() {
  if (playerScore == 5 || computerScore == 5) {
    computerweaponEl.style.display = "none";
    // whowinsEl.style.display = "none";
    playerweaponEl.style.display = "none";
    rockEl.disabled = true
    paperEl.disabled = true
    scissorsEl.disabled = true    
  
  }
  if (playerScore == 5) {
    whowinsEl.innerText = "Player wins"
  }

  if (computerScore == 5) {
    whowinsEl.innerText = "Computer wins"
  }
}




