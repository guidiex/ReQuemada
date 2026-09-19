const scoreElement = document.getElementById("score");

let score = 0;

function addHit() {
  score += 1;
  scoreElement.textContent = score;
}