function checkWallCollisions() {

  const gameWidth = game.clientWidth;

  // PARED IZQUIERDA
  if (ballX <= 9) {
    ballX = 9;
    ballSpeedX = Math.abs(ballSpeedX);
  }

  // PARED DERECHA
  if (ballX >= gameWidth - 9) {
    ballX = gameWidth - 9;
    ballSpeedX = -Math.abs(ballSpeedX);
  }

  // TECHO
  if (ballY <= 9) {
    ballY = 9;
    ballSpeedY = Math.abs(ballSpeedY);
  }

}


function checkPaddleCollision() {

  const paddleRect = paddle.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  const tocaHorizontalmente =
    ballRect.right >= paddleRect.left &&
    ballRect.left <= paddleRect.right;

  const tocaVerticalmente =
    ballRect.bottom >= paddleRect.top &&
    ballRect.top <= paddleRect.bottom;

  const pelotaBajando =
    ballSpeedY > 0;

  if (
    tocaHorizontalmente &&
    tocaVerticalmente &&
    pelotaBajando
  ) {

    ballSpeedY = -Math.abs(ballSpeedY);
    addHit();
    

  }

}