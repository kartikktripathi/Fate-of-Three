const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("compScoreDisplay");
let playerScore = 0;
let compScore = 0;
function playGame(playerChoice){
    const compChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice === compChoice){
        result = "It's a Tie!";
    }
    else {
    switch (playerChoice) {
        case "Rock":
            if (compChoice === "Scissors") {
                result = "You Win!";
            } else {
                result = "You Lose!";
            }
            break;
        case "Paper":
            if (compChoice === "Rock") {
                result = "You Win!";
            } else {
                result = "You Lose!";
            }
            break;
        case "Scissors":
            if (compChoice === "Paper") {
                result = "You Win!";
            } else {
                result = "You Lose!";
            }
            break;
    }
}
    playerDisplay.textContent = `Player: ${playerChoice}`;
    compDisplay.textContent = `Computer: ${compChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("green", "red", "yellow");
    switch(result){
        case "You Win!":
            resultDisplay.classList.add("green");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("red");
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
        case "It's a Tie!":
            resultDisplay.classList.add("yellow");
            break;
    }
}
