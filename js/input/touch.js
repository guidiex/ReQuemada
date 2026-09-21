let targetTouchX = null;
let smoothTouchX = null;

game.addEventListener(
  "touchmove",
  (event) => {

    event.preventDefault();

    const gameRect =
      game.getBoundingClientRect();

    const touchX =
      event.touches[0].clientX -
      gameRect.left;

    const halfPaddle =
      paddle.offsetWidth / 2;

    targetTouchX = Math.max(
      halfPaddle,
      Math.min(
        touchX,
        gameRect.width - halfPaddle
      )
    );

    if (smoothTouchX === null) {
      smoothTouchX = targetTouchX;
    }

  },
  { passive: false }
);

function updateTouchPaddle() {

  if (
    targetTouchX !== null &&
    smoothTouchX !== null
  ) {

    smoothTouchX +=
      (targetTouchX - smoothTouchX) * 0.22;

    paddle.style.left =
      `${smoothTouchX}px`;
  }

  requestAnimationFrame(
    updateTouchPaddle
  );
}

updateTouchPaddle();