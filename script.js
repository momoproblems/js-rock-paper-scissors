// rock paper scissor game
var playerScore = 0;
var computerScore = 0;
const playerScoreElement = document.getElementById("player-score");
const computerScoreELement = document.getElementById("computer-score");

const selectionButton = document.querySelectorAll("[data-selection]");

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection;

        const computerSelection = computerPlay();

        playGame(selectionName, computerSelection);

    });
});

function playGame(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie");
        computerScore++;
        playerScore++;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissor");
            playerScore++;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock");
            playerScore++;
        }
        else {
            console.log("You lose! Scissor beats Paper");
            computerScore++;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissor");
            computerScore++;
        }
        else {
            console.log("You win! Scissor beats Paper");
            playerScore++;
        }
    }

    console.log("before going to update score");
    updateScore(playerScore, computerScore);
}

// function to update score
function updateScore(playerScore, computerScore) {
    console.log(playerScore);
    console.log(computerScore);
    playerScoreElement.textContent = playerScore;
    computerScoreELement.textContent = computerScore;
}


// function to generate random computer choice
function computerPlay() {
    let choices = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}