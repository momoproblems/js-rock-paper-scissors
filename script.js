
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
            break;
        }
}

function getPlayerChoice () {
    let playerTemp;
    if (playerTemp.toLowerCase() === "rock") { 
        playerSelection = "rock";
    } else if (playerTemp.toLowerCase() === "paper") {
        playerSelection = "paper";
    } else if (playerTemp.toLowerCase() === "scissors") {
        playerSelection = "scissors";
    } else {
        alert("Please choose rock, paper, or scissors");
    }
    var playerSelection = playerTemp.toLowerCase();
    return playerSelection;
}

function playRound (getPlayerChoice, getComputerChoice) {
    console.log("Player chose " + getPlayerChoice);
    console.log("Computer chose " + getComputerChoice);
    if (getPlayerChoice === getComputerChoice) {
        return "It's a tie!";
    } else if (getPlayerChoice === "rock") {
        if (getComputerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    } else if (getPlayerChoice === "paper") {
        if (getComputerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    } else if (getPlayerChoice === "scissors") {
        if (getComputerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    }
}

let playerScore = 0;
let computerScore = 0;




for (let i=0; i<5; i++) {
    var playerSelection = getPlayerChoice();
    var computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === "Player wins!") {
        playerScore++;
    }
    if (result === "Computer wins!") {
        computerScore++;
    }
}

if (playerScore > computerScore) {
    console.log("Player wins the game!");
    console.log(`${playerScore} to ${computerScore}`);
} else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
    console.log(`${computerScore} to ${playerScore}`);
} else {
    console.log("It's a tie!");
}