// rock paper scissor game
var playerScore = 0;
var computerScore = 0;
var message = "";
const playerScoreElement = document.getElementById("player-score");
const computerScoreELement = document.getElementById("computer-score");
const playerResultImgDiv = document.getElementById("player-selection");
const computerResultImgDiv = document.getElementById("computer-selection");

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
        computerScore++;
        playerScore++;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
        }
        else {
            playerScore++;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            computerScore++;
        }
        else {
            playerScore++;
        }
    }

    displayResult(playerSelection, computerSelection);
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

// function to display result
function displayResult(playerSelection, computerSelection) {
    // remove previous result
    playerResultImgDiv.innerHTML = "";
    computerResultImgDiv.innerHTML = "";


    let playerImgElement = document.createElement("img");
    let computerImgElement = document.createElement("img");

    playerImgElement.src = "imgs/" + playerSelection + ".svg";
    computerImgElement.src = "imgs/" + computerSelection + ".svg";
    

    playerResultImgDiv.appendChild(playerImgElement);
    computerResultImgDiv.appendChild(computerImgElement);
}