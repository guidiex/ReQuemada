function update() {

  if (gameRunning) {

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    checkWallCollisions();
    checkPaddleCollision();
    checkGameOver();

    updateBreathing();
    updateBallTrail();

    ball.style.left =
      `${ballX}px`;

    ball.style.top =
      `${ballY}px`;
    const ballAura =
  document.getElementById("ball-aura");

ballAura.style.left =
  `${ballX}px`;

ballAura.style.top =
  `${ballY}px`;
  
  }

  requestAnimationFrame(update);
}

update();