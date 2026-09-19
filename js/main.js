const restartButton =
  document.getElementById("restart");

restartButton.addEventListener(
  "click",
  startGame
);

console.log("ReQuemada funcionando");

const flowEnd =
  document.getElementById(
    "flow-end"
  );

flowEnd.addEventListener(
  "click",
  exitFlowEnd
);

document.addEventListener(
  "keydown",
  () => {

    if (
      flowEnd.classList.contains(
        "active"
      )
    ) {

      exitFlowEnd();

    }

  }
);