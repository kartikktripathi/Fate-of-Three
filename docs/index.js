const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("compScoreDisplay");
const bgAudio = document.getElementById("bgaudio");
const winAudio = document.getElementById("victoryaudio");
const loseAudio = document.getElementById("loseaudio");
const musicBtn = document.getElementById("musicBtn");
const emojiMap = {
  "Rock": "🪨",
  "Paper": "📃",
  "Scissors": "✂️"
}
bgAudio.volume = 0.15;
let musicStarted = false;

musicBtn.addEventListener("click", () => {
  if (!musicStarted) {
    bgAudio.play().catch(() => {});
    musicStarted = true;
    musicBtn.textContent = "Stop Music";
  } else {
  if (!bgAudio.paused) {
    bgAudio.pause();
    musicBtn.textContent = "Play Music";
  } else {
    bgAudio.play().catch(() => {});
    musicBtn.textContent = "Stop Music";
    }
  }
});

let playerScore = 0;
let compScore = 0;
function playGame(playerChoice) {
const compChoice = choices[Math.floor(Math.random() * 3)];
let result = "";
  if (playerChoice === compChoice) {
    result = "It's a Tie!";
} else {
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
playerDisplay.textContent = `Player: ${playerChoice} ${emojiMap[playerChoice]}`;
compDisplay.textContent = `Computer: ${compChoice} ${emojiMap[compChoice]}`;
resultDisplay.textContent = result;
resultDisplay.classList.remove("green", "red", "yellow");
  switch(result){
  case "You Win!":
    resultDisplay.classList.add("green");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  winAudio.currentTime = 0;
  winAudio.play();
  break;

  case "You Lose!":
    resultDisplay.classList.add("red");
    compScore++;
    compScoreDisplay.textContent = compScore;
    loseAudio.currentTime = 0;
    loseAudio.play();
  break;

  case "It's a Tie!":
    resultDisplay.classList.add("yellow");
  break;
  }
}