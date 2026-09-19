function update() {

  if (gameRunning) {

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    checkWallCollisions();
    checkPaddleCollision();
    checkGameOver();
    updateBreathing();

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

  }

  requestAnimationFrame(update);
}

update();