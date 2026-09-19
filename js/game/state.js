let gameRunning = false;

function startGame() {

playStartSound();
resetBreathing();

  // Pelota al centro
  ballX = game.clientWidth / 2;
  ballY = game.clientHeight / 2;

  // Velocidad inicial
  ballSpeedX = 3;
  ballSpeedY = -3;

  // Contador a cero
  score = 0;
  scoreElement.textContent = score;

  // Dibujar pelota en su nueva posición
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  // Ocultar START
  restartButton.style.display = "none";

  // Comenzar partida
  gameRunning = true;

}


function checkGameOver() {

  const gameHeight = game.clientHeight;

  if (ballY > gameHeight + 20) {
  
    gameRunning = false;
  
    playLoseSound();
  
    restartButton.style.display = "block";
  
  }
  

}