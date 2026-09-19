document.addEventListener("keydown", (event) => {

  const paddleRect =
    paddle.getBoundingClientRect();

  const gameRect =
    game.getBoundingClientRect();

  const paddleX =
    paddleRect.left -
    gameRect.left +
    paddleRect.width / 2;

  const key =
    event.key.toLowerCase();

  if (
    key === "a" ||
    key === "arrowleft"
  ) {

    paddle.style.left =
      `${paddleX - 20}px`;

  }

  if (
    key === "d" ||
    key === "arrowright"
  ) {

    paddle.style.left =
      `${paddleX + 20}px`;

  }

  if (
    key === "enter" &&
    restartButton.style.display !== "none"
  ) {

    restartButton.click();

  }

});