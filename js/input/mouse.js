const game = document.getElementById("game");

game.addEventListener("mousemove", (event) => {

  const gameRect = game.getBoundingClientRect();

  const mouseX = event.clientX - gameRect.left;

  paddle.style.left = `${mouseX}px`;

});