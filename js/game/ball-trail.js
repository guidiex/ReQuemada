const TRAIL_INTERVAL = 70;
const TRAIL_DURATION = 900;

let lastTrailTime = 0;

function updateBallTrail() {

  if (!gameRunning) {
    return;
  }

  const now =
    performance.now();

  if (
    now - lastTrailTime <
    TRAIL_INTERVAL
  ) {
    return;
  }

  lastTrailTime = now;

  const echo =
    document.createElement("div");

  echo.className =
    "ball-echo";

  echo.style.left =
    `${ballX}px`;

  echo.style.top =
    `${ballY}px`;

  game.appendChild(echo);

  setTimeout(
    () => echo.remove(),
    TRAIL_DURATION
  );
}