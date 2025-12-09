const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay"); //player choice display
const compDisplay = document.getElementById("compDisplay");//comp choice display
const resultDisplay = document.getElementById("resultDisplay");//result
const playerScoreDisplay = document.getElementById("playerScoreDisplay");//pllayer score
const compScoreDisplay = document.getElementById("compScoreDisplay");//comp score
let playerScore = 0;
let compScore = 0;
function playGame(playerChoice){
    const compChoice = choices[Math.floor(Math.random()*3)]; // 0-2 tak ke result ke liye
    let result = "";
    if(playerChoice === compChoice){
        result = "It's a Tie!!";
    }
    else {
    switch (playerChoice) {
        case "rock":
            if (compChoice === "scissors") {
                result = "You Win!!";
            } else {
                result = "You Lose!!";
            }
            break;
        case "paper":
            if (compChoice === "rock") {
                result = "You Win!!";
            } else {
                result = "You Lose!!";
            }
            break;
        case "scissors":
            if (compChoice === "paper") {
                result = "You Win!!";
            } else {
                result = "You Lose!!";
            }
            break;
    }
}
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    compDisplay.textContent = `Computer: ${compChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("green", "red");
    switch(result){
        case "You Win!!":
            resultDisplay.classList.add("green");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!!":
            resultDisplay.classList.add("red");
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
    }
}
