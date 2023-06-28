// rock paper scissor game
const playerScore = 0;
const computerScore = 0;
const human_score = document.getElementById("player-score");
const computer_score = document.getElementById("computer-score");

const selectionButton = document.querySelectorAll("[data-selection]");

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection;


        makeSelection(selectionName);
    });
});

function makeSelection(selectionName) {
    console.log(selectionName);
}

// function to generate random computer choice
function computerPlay() {
    let choices = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}