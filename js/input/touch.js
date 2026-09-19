game.addEventListener("touchmove", (event) => {

  const gameRect = game.getBoundingClientRect();

  const touchX =
    event.touches[0].clientX - gameRect.left;

  paddle.style.left = `${touchX}px`;

});