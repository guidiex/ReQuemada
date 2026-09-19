const scoreElement =
  document.getElementById("score");

const FLOW_GOAL = 24;

let score = 0;

function addHit() {

  score += 1;

  scoreElement.textContent =
    score;

  if (
    score === FLOW_GOAL
  ) {

    completeFlow();

  }

}
function completeFlow() {

  gameRunning = false;

  const fade =
    document.getElementById(
      "flow-fade"
    );

  const end =
    document.getElementById(
      "flow-end"
    );

  fade.classList.add(
    "active"
  );

  setTimeout(
    () => {

      end.classList.add(
        "active"
      );

    },
    2000
  );

}

function exitFlowEnd() {

  const fade =
    document.getElementById(
      "flow-fade"
    );

  const end =
    document.getElementById(
      "flow-end"
    );

  end.classList.remove(
    "active"
  );

  fade.classList.remove(
    "active"
  );

  restartButton.style.display =
    "block";

}

